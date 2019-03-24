import { strEnumHelper } from './strEnumHelper';

export const RoutPath = strEnumHelper(['home', 'create', 'edit']);
export type RoutPath = keyof typeof RoutPath;

export type Routes = {
  [key in RoutPath]: {
    path: key extends 'home' ? '/' : key;
    name: string
  }
};

export const routes: Routes = {
  [RoutPath.home]: {
    path: '/',
    name: 'Home'
  },
  [RoutPath.create]: {
    path: RoutPath.create,
    name: 'Create'
  },
  [RoutPath.edit]: {
    path: RoutPath.edit,
    name: 'Edit'
  }
};
