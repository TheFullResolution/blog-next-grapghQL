import { strEnumHelper } from './strEnumHelper'
import { FaPencilAlt } from 'react-icons/fa'

export const RoutPath = strEnumHelper(['home', 'create', 'edit'])
export type RoutPath = keyof typeof RoutPath

export type Routes = {
  [key in RoutPath]: {
    path: key extends 'home' ? '/' : key
    name: string
    icon?: JSX.Element
  }
}

export const routes: Routes = {
  [RoutPath.home]: {
    path: '/',
    name: 'Home',
  },
  [RoutPath.create]: {
    path: RoutPath.create,
    name: 'Create',
    icon: <FaPencilAlt />,
  },
  [RoutPath.edit]: {
    path: RoutPath.edit,
    name: 'Edit',
  },
}
