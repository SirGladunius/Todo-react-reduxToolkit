import { createSlice } from '@reduxjs/toolkit'
import { AuthState } from './auth.types'
import ApiServices from '../../../service/Api.servece'
import TokenService from '../../../service/Token.service'

const initialState: AuthState = {
   token: TokenService.get() || null,
}

const authSlice = createSlice({
   name: 'Auth',
   initialState,
   reducers: {
      setToken(state: AuthState, action) {
         state.token = action.payload.text.token
         console.log('Изменённый токен:', action.payload.text.token)
         TokenService.set(action.payload.text.token)
      },
   },
})

export const { setToken } = authSlice.actions

export default authSlice.reducer
