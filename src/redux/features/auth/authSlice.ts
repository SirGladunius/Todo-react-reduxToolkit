import { createSlice } from '@reduxjs/toolkit'
import { AuthState } from './auth.types'

const authSlice = createSlice({
   name: 'Auth',
   initialState: {
      token: '',
   },
   reducers: {
      setToken(state: AuthState, action) {
         console.log('----------------------------------------')
         state.token = action.payload.text
      },
      getToken(state: AuthState, action) {
         console.log('******************************************')
      },
   },
})

export const { setToken, getToken } = authSlice.actions

export default authSlice.reducer
