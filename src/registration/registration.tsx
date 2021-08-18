import React, { useState } from 'react'
import classes from './registration.module.css'
import { Button } from '@material-ui/core'
import ApiServices from '../service/Api.servece'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux'
import { registrationAsync, setToken } from '../redux/features/auth/authSlice'
import TokenService from '../service/Token.service'

export const Registration = () => {
   const [passwordValue, setPasswordValue] = useState<string>('')
   const [emailValue, setEmailValue] = useState<string>('')
   const history = useHistory()
   let tokenSelect = useSelector((state: RootState) => state.auth.token)
   const dispatch = useDispatch()

   const registration = async () => {
      // try {
      //    const token = await ApiServices.postRegistration({
      //       email: emailValue,
      //       password: passwordValue,
      //    })
      //    TokenService.set(token)
      //    dispatch(setToken({ text: token }))
      //    console.log('токен: ', TokenService.get())
      // } catch (err) {
      //    console.log('Ошибка регистрации', err)
      // }
      dispatch(
         registrationAsync({
            email: emailValue,
            password: passwordValue,
         })
      )
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
         <Button
            className={classes.registrationButton}
            onClick={() => {
               history.push('/login')
            }}
         >
            Login
         </Button>
      </div>
   )
}
