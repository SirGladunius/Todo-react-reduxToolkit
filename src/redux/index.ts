import { combineReducers, configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/todo/todoSlice'
import { useDispatch } from 'react-redux'

const rootReducer = combineReducers({
   todos: todoReducer,
})

const store = configureStore({
   reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>

export default store
