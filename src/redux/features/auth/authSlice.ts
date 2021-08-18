import { createSlice, Dispatch } from '@reduxjs/toolkit'
import { AuthState } from './auth.types'
import ApiServices from '../../../service/Api.servece'
import TokenService from '../../../service/Token.service'
import ApiService from '../../../service/Api.servece'
import { addTodos } from '../todo/todoSlice'

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

      registration(state: AuthState, action) {
         state.token = action.payload.token
      },
      login(state: AuthState, action) {
         state.token = action.payload.token
      },
   },
})

export const { setToken, registration, login } = authSlice.actions

export default authSlice.reducer

export const registrationAsync = (body: {
   email: string
   password: string
}) => {
   return async (dispatch: Dispatch) => {
      try {
         const res = await ApiService.postRegistration(body)
         if (res === undefined) {
         } else {
            TokenService.set(res)
            dispatch(registration(res))
         }
      } catch (e: any) {}
   }
}

export const loginAsync = (body: { email: string; password: string }) => {
   return async (dispatch: Dispatch) => {
      try {
         const res = await ApiService.postLogin(body)
         if (res === undefined) {
         } else {
            TokenService.set(res)
            dispatch(login(res))
         }
      } catch (e: any) {}
   }
}
