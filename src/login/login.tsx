import React, { useState } from 'react'
import classes from './login.module.css'
import { Button } from '@material-ui/core'
import ApiServices from '../service/Api.servece'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/features/todo/todoSlice'
import { setToken } from '../redux/features/auth/authSlice'
import { selectTodos } from '../redux/features/todo/todo.seletors'
import { Todo } from '../redux/todos.type'
import { selectAuth } from '../redux/features/auth/auth.seletors'

export const Login = () => {
   const [passwordValue, setPasswordValue] = useState<string>('')
   const [emailValue, setEmailValue] = useState<string>('')
   const dispatch = useDispatch()
   let tokencSelect: string = useSelector(selectAuth)
   const logining = async () => {
      try {
         const token = await ApiServices.postLogin({
            email: emailValue,
            password: passwordValue,
         })
         dispatch(setToken({ text: token }))
         console.log('токен: ', tokencSelect)
         console.log('Перейти в туду')
      } catch (err) {
         console.log('Ошибка входа у учётную запись', err)
      }
   }

   return (
      <div className={classes.root}>
         <div className={classes.name}>Логининг</div>
         <div className={classes.login}>
            <div className={classes.text}>Login</div>
            <input
               className={classes.input}
               onChange={(e) => setEmailValue(e.target.value)}
            />
         </div>

         <div className={classes.password}>
            <div className={classes.text}>Password</div>
            <input
               type="password"
               className={classes.input}
               onChange={(e) => setPasswordValue(e.target.value)}
            />
         </div>
         <Button
            className={classes.loginButton}
            onClick={() => {
               console.log(logining())
            }}
         >
            Logining
         </Button>
      </div>
   )
}
