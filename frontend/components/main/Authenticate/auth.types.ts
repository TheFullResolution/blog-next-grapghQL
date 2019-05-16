import { strEnumHelper } from "../../../utils/strEnumHelper";

export const AUTH_STATE = strEnumHelper(['Login', 'Signup'])
export type AUTH_STATE = keyof typeof AUTH_STATE