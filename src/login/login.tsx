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
import { RootState } from '../redux'
import axios from 'axios'
import { useRoutes } from '../../src/route'
import { useHistory } from 'react-router-dom'
import TokenService from '../service/Token.service'

export const Login = () => {
   const [passwordValue, setPasswordValue] = useState<string>('')
   const [emailValue, setEmailValue] = useState<string>('')
   const [loading, setLoading] = useState(false)
   const [form, setForm] = useState({
      email: '',
      password: '',
   })
   const dispatch = useDispatch()
   const history = useHistory()

   const tokenSelect = useSelector((state: RootState) => state.auth.token)
   const login = async () => {
      try {
         const token = await ApiServices.postLogin({
            email: emailValue,
            password: passwordValue,
         })
         TokenService.set(token)
         dispatch(setToken({ text: token }))
         console.log('токен: ', TokenService.get())
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
               console.log(login())
            }}
         >
            login
         </Button>
         <Button
            className={classes.registrationButton}
            onClick={() => {
               history.push('/registration')
            }}
         >
            Registration
         </Button>
      </div>
   )
}
