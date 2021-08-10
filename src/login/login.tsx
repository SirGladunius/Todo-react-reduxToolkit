import React, { useState } from 'react'
import classes from './login.module.css'
import { Button } from '@material-ui/core'
import ApiServices from '../service/Api.servece'

export const Login = () => {
   const [passwordValue, setPasswordValue] = useState<string>('')
   const [emailValue, setEmailValue] = useState<string>('')

   const logining = async () => {
      try {
         const token = await ApiServices.postLogin({
            email: emailValue,
            password: passwordValue,
         })
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
