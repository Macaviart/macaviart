export interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> }
  GITHUB_CLIENT_ID: string
  GITHUB_CLIENT_SECRET: string
  EDITOR_PASSWORD: string
  GH_PAT: string
}

const REPO = 'Macaviart/macaviart'
const HOME_PATH = 'src/content/home.json'

type ParrafoHome = {
  texto: string
  alineacion: string
  negrita: boolean
  tamano: string
  color: string
  tipografia: string
}

type HomeContent = {
  carrusel: string[]
  parrafos: ParrafoHome[]
}

function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  })
}

async function githubGetFile(path: string, env: Env) {
  const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${path}`, {
    headers: {
      Authorization: `token ${env.GH_PAT}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'macaviart-home-editor',
    },
  })
  if (!res.ok) return null
  return (await res.json()) as { content: string; sha: string }
}

async function githubPutFile(
  path: string,
  base64Content: string,
  message: string,
  sha: string | undefined,
  env: Env,
) {
  const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${path}`, {
    method: 'PUT',
    headers: {
      Authorization: `token ${env.GH_PAT}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'macaviart-home-editor',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message, content: base64Content, sha, branch: 'main' }),
  })
  if (!res.ok) {
    const errText = await res.text()
    throw new Error(`GitHub API error (${res.status}): ${errText}`)
  }
}

function base64FromUtf8(str: string): string {
  const bytes = new TextEncoder().encode(str)
  let binary = ''
  bytes.forEach((b) => (binary += String.fromCharCode(b)))
  return btoa(binary)
}

function utf8FromBase64(b64: string): string {
  const binary = atob(b64.replace(/\n/g, ''))
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
  return new TextDecoder().decode(bytes)
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)

    if (url.pathname === '/auth') {
      const redirectUri = `${url.origin}/callback`
      const authorizeUrl = new URL('https://github.com/login/oauth/authorize')
      authorizeUrl.searchParams.set('client_id', env.GITHUB_CLIENT_ID)
      authorizeUrl.searchParams.set('redirect_uri', redirectUri)
      authorizeUrl.searchParams.set('scope', 'repo,user')
      return Response.redirect(authorizeUrl.toString(), 302)
    }

    if (url.pathname === '/callback') {
      const code = url.searchParams.get('code')
      if (!code) return new Response('Falta el parámetro code', { status: 400 })

      const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          client_id: env.GITHUB_CLIENT_ID,
          client_secret: env.GITHUB_CLIENT_SECRET,
          code,
        }),
      })
      const tokenData = (await tokenRes.json()) as { access_token?: string; error?: string }

      if (!tokenData.access_token) {
        return new Response(`Error de OAuth: ${tokenData.error ?? 'desconocido'}`, { status: 400 })
      }

      const payload = JSON.stringify({ token: tokenData.access_token, provider: 'github' })
      const html = `<!doctype html><html><body><script>
        (function() {
          function receiveMessage(e) {
            window.opener.postMessage('authorization:github:success:${payload}', e.origin);
            window.removeEventListener('message', receiveMessage, false);
          }
          window.addEventListener('message', receiveMessage, false);
          window.opener.postMessage('authorizing:github', '*');
        })();
      </script></body></html>`

      return new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } })
    }

    if (url.pathname === '/api/editor/home' && request.method === 'GET') {
      const file = await githubGetFile(HOME_PATH, env)
      if (!file) return jsonResponse({ error: 'No se pudo leer el contenido' }, 500)
      const content = JSON.parse(utf8FromBase64(file.content)) as HomeContent
      return jsonResponse(content)
    }

    if (url.pathname === '/api/editor/home' && request.method === 'POST') {
      const body = (await request.json()) as {
        password: string
        data: HomeContent
        nuevaImagen?: { nombre: string; base64: string }
      }

      if (body.password !== env.EDITOR_PASSWORD) {
        return jsonResponse({ error: 'Contraseña incorrecta' }, 401)
      }

      try {
        if (body.nuevaImagen) {
          const imgPath = `public/images/home/${body.nuevaImagen.nombre}`
          const existing = await githubGetFile(imgPath, env)
          await githubPutFile(
            imgPath,
            body.nuevaImagen.base64,
            `Editor Home: actualizar ${body.nuevaImagen.nombre}`,
            existing?.sha,
            env,
          )
        }

        const current = await githubGetFile(HOME_PATH, env)
        const newContent = base64FromUtf8(JSON.stringify(body.data, null, 2) + '\n')
        await githubPutFile(HOME_PATH, newContent, 'Editor Home: actualizar contenido', current?.sha, env)

        return jsonResponse({ ok: true })
      } catch (err) {
        return jsonResponse({ error: String(err) }, 500)
      }
    }

    return env.ASSETS.fetch(request)
  },
}
