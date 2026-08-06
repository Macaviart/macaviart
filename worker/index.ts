export interface Env {
  ASSETS: { fetch: (request: Request) => Promise<Response> }
  GITHUB_CLIENT_ID: string
  GITHUB_CLIENT_SECRET: string
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

    return env.ASSETS.fetch(request)
  },
}
