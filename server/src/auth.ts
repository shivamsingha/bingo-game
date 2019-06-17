import { generateJWT, verifyJWT } from './utils'

/// TODO: mongo queries

function redirectx(req, res, url = '/') {
  const hostname = req.hostname
  if (hostname.match(/api./gi)) {
    res.redirect(hostname.replace(/api./gi, '').concat(url))
  }
  res.redirect(hostname.concat(url))
}

export function isAuthorized(res, req, next) {
  if (req.signedCookies.TOKEN) {
    req.userId = verifyJWT(req.signedCookies.TOKEN)
    next()
  }
  else {
    if (req.get('auth-req-type') === 'login') {
      redirectx(req, res)
    }
    else if (req.get('auth-req-type') === 'signup') {
      redirectx(req, res)
    }
    else {
      redirectx(req, res, '/login')
    }
  }
}
