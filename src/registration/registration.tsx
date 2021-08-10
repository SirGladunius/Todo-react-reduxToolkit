import React, { useState } from 'react'
import classes from './registration.module.css'
import { Button } from '@material-ui/core'
import ApiServices from '../service/Api.servece'

export const Registration = () => {
   const [passwordValue, setPasswordValue] = useState<string>('')
   const [emailValue, setEmailValue] = useState<string>('')

   const registration = () => {
      try {
         const token = ApiServices.postRegistration({
            email: emailValue,
            password: passwordValue,
         })
      } catch (err) {
         console.log('Ошибка регистрации ', err)
      }
   }

   return (
      <div className={classes.root}>
         <div className={classes.name}>Регистрация</div>
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
               console.log(registration())
            }}
         >
            Registration
         </Button>
      </div>
   )
}
