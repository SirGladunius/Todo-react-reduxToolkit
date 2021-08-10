import React from 'react'
import TodoList from './components/TodoList'
import './App.css'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'
import { Login } from './login/login'
import { Registration } from '../src/registration/registration'

const Main = () => (
   <div className="App">
      <h1 className={'header'}>TodoList</h1>
      <TodoList />
   </div>
)

function App() {
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
