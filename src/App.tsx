import React, { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState } from './redux'
import { useRoutes } from './route'
import TokenService from './service/Token.service'

function App() {
   let token = useSelector((state: RootState) => state.auth.token)
   // if (!!token) {
   //    token = TokenService.get()
   // }
   useEffect(() => {
      console.log(token)
   }, [token])

   // let token = TokenService.get()
   const routes = useRoutes(!!token)

   return (
      <BrowserRouter>
         <div className="App">{routes}</div>
      </BrowserRouter>
   )
}

export default App
