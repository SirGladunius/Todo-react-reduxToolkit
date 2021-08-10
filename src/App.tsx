import React from 'react'
import './App.css'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import { Login } from './login/login'
import { Registration } from '../src/registration/registration'
import { Main } from './main/main'
import { useSelector } from 'react-redux'
import { RootState } from './redux'

function App() {
   const token = useSelector((state: RootState) => state.token)
   return (
      <BrowserRouter>
         <Route path={'/main'} component={Main} />
         <Route path={'/registration'} component={Registration} />
         <Route path={'/login'} component={Login} />
         <Redirect to="/login" />
      </BrowserRouter>
   )
}

export default App
