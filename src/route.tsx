import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Login } from '../src/login/login'
import TodoList from '../src/components/TodoList'

export const useRoutes = (isAuthenticated: boolean) => {
   if (isAuthenticated) {
      return (
         <Switch>
            <Route path={'/main'} exact>
               <TodoList />
            </Route>
         </Switch>
      )
   }

   return (
      <Switch>
         <Route path={'/'} exact>
            <Login />
         </Route>
         <Redirect to={'/'} />
      </Switch>
   )
}
