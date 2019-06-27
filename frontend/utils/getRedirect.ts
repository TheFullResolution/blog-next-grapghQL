import { SingletonRouter } from "next/router";
import { routes, RoutPath } from "../app/routes";

export function getRedirect(router: SingletonRouter) {
    if (router.pathname === routes[RoutPath.home].path) {
      return undefined
    }
    return router.asPath
  }
  