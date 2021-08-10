import { AuthState } from './auth.types'

export const selectAuth = (state: AuthState) => state.token
