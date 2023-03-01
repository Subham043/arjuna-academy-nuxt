import Middleware from './middleware'
import { Auth, authMiddleware, ExpiredAuthSessionError } from '~auth/runtime'

// Active schemes
import { LocalScheme } from '~auth/runtime'

Middleware.auth = authMiddleware

export default function (ctx, inject) {
  // Options
  const options = {
  "resetOnError": true,
  "ignoreExceptions": false,
  "scopeKey": "scope",
  "rewriteRedirects": true,
  "fullPathRedirect": false,
  "watchLoggedIn": true,
  "redirect": {
    "login": "/auth/login",
    "logout": "/auth/login",
    "home": "/payment-data",
    "callback": "/auth/login"
  },
  "vuex": {
    "namespace": "auth"
  },
  "cookie": {
    "prefix": "auth.",
    "options": {
      "path": "/"
    }
  },
  "localStorage": false,
  "defaultStrategy": "local"
}

  // Create a new Auth instance
  const $auth = new Auth(ctx, options)

  // Register strategies
  // local
  $auth.registerStrategy('local', new LocalScheme($auth, {
  "token": {
    "property": "access_token",
    "global": true,
    "required": true,
    "type": "Bearer",
    "name": "Authorization"
  },
  "refreshToken": {
    "property": "refresh_token",
    "data": "refresh_token",
    "maxAge": 86400000,
    "required": true,
    "type": "Bearer",
    "name": "Authorization"
  },
  "user": {
    "property": "user",
    "autoFetch": true
  },
  "endpoints": {
    "login": {
      "url": "/api/auth/login",
      "method": "post"
    },
    "logout": {
      "url": "/api/auth/logout",
      "method": "get"
    },
    "refresh": {
      "url": "/api/auth/refresh-token",
      "method": "get"
    },
    "user": {
      "url": "/api/auth/profile",
      "method": "get"
    }
  },
  "tokenRequired": true,
  "tokenType": "JWT",
  "name": "local"
}))

  // Inject it to nuxt context as $auth
  inject('auth', $auth)
  ctx.$auth = $auth

  // Initialize auth
  return $auth.init().catch(error => {
    if (process.client) {
      // Don't console log expired auth session errors. This error is common, and expected to happen.
      // The error happens whenever the user does an ssr request (reload/initial navigation) with an expired refresh
      // token. We don't want to log this as an error.
      if (error instanceof ExpiredAuthSessionError) {
        return
      }

      console.error('[ERROR] [AUTH]', error)
    }
  })
}
