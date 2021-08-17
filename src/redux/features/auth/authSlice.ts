import { createSlice } from '@reduxjs/toolkit'
import { AuthState } from './auth.types'
import TokenService from '../../../service/Token.service'
const authSlice = createSlice({
   name: 'Auth',
   initialState: {
      token: '',
   },
   reducers: {
      setToken(state: AuthState, action) {
         state.token = action.payload.text.token
         TokenService.set(action.payload.text.token)
      },
      getToken(state: AuthState, action) {
         return TokenService.get()
      },
   },
})

export const { setToken, getToken } = authSlice.actions

export default authSlice.reducer
