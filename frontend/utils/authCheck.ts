import pathToRegExp from 'path-to-regexp'
import { routes } from '../app/routes'
import { UserDataDocument } from '../generated/graphql'
import { RoutPath } from '../app/routes'
import { AppContext } from 'next-with-apollo'
import { SingletonRouter } from 'next/router'
import { isLoggedIn } from '../components/main/User/User'

const AuthRoutes = Object.values(routes).filter(route => route.auth)

function shouldAuthCheck(path: string) {
  return AuthRoutes.some(route => pathToRegExp(`/${route.path}`).test(path))
}

export async function authCheck(ctx: AppContext, router: SingletonRouter) {
  const needsAuth = shouldAuthCheck(ctx.pathname)
  if (!needsAuth) return

  const { data } = await ctx.apolloClient.query({ query: UserDataDocument })

  if (needsAuth && !isLoggedIn(data)) {
    if (ctx.res) {
      ctx.res.writeHead(302, {
        Location: RoutPath.auth,
      })
      ctx.res.end()
    } else {
      router.replace(`/${RoutPath.auth}`)
    }
  }
}
