import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/todo/todoSlice'
import authReducer from './features/auth/authSlice'

const rootReducer = combineReducers({
   todos: todoReducer,
   token: authReducer,
})

const store = configureStore({
   reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>

export default store
