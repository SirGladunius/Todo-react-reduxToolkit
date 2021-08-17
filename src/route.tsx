import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Login } from '../src/login/login'
import { Main } from './main/main'
import { Registration } from './registration/registration'

export const useRoutes = (isAuthenticated: boolean) => {
   if (isAuthenticated) {
      return (
         <Switch>
            <Route path={'/'} exact>
               <Main />
            </Route>
            <Redirect to={'/'} />
         </Switch>
      )
   }
   return (
      <Switch>
         <Route path={'/login'} exact>
            <Login />
         </Route>
         <Route path={'/registration'} exact>
            <Registration />
         </Route>
         <Redirect to={'/login'} />
      </Switch>
   )
}
