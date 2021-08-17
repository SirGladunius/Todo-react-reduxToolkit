import TodoList from '../components/TodoList'
import React from 'react'
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { setToken } from '../redux/features/auth/authSlice'
import { clear } from '../redux/features/todo/todoSlice'
import TokenService from '../service/Token.service'

export const Main = () => {
   const dispatch = useDispatch()
   const exit = async () => {
      dispatch(setToken({ text: '' }))
      dispatch(clear())
      TokenService.delete()
   }
   return (
      <div className="App">
         <>
            <h1 className={'header'}>TodoList</h1>
            <Button onClick={() => exit()}>exit</Button>
         </>
         <TodoList />
      </div>
   )
}
