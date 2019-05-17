import { FaPencilAlt, FaUserAstronaut } from 'react-icons/fa'

import { strEnumHelper } from './utils/strEnumHelper'

export const RoutPath = strEnumHelper(['home', 'create', 'edit', 'auth'])
export type RoutPath = keyof typeof RoutPath

export type Routes = {
  [key in RoutPath]: {
    path: key extends 'home' ? '/' : key
    name: string
    icon?: JSX.Element
    auth?: boolean | 'always'
  }
}

export const routes: Routes = {
  [RoutPath.home]: {
    path: '/',
    name: 'Home',
    auth: 'always'
  },
  [RoutPath.create]: {
    path: RoutPath.create,
    name: 'Create',
    auth: true,
    icon: <FaPencilAlt />,
  },
  [RoutPath.edit]: {
    path: RoutPath.edit,
    name: 'Edit',
  },
  [RoutPath.auth]: {
    path: RoutPath.auth,
    name: 'Login/Sing Up',
    icon: <FaUserAstronaut />,
  },
}
