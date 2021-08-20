import axios from 'axios'
import TokenService from './Token.service'
import { Todo } from '../redux/todos.type'

class ApiServices {
   _apiUrl = 'http://localhost:5000'

   postRegistration(body: { email: string; password: string }) {
      return axios.post(`${this._apiUrl}/auth/register`, body).then((res) => {
         console.log('Токен с бека:', res.data.token)
         return res.data.token
      })
   }
   postLogin(body: { email: string; password: string }): Promise<string> {
      return axios.post(`${this._apiUrl}/auth/login`, body).then((res) => {
         console.log('Токен с бека:', res.data.token)
         return res.data.token
      })
   }
   AddToDo(data: any) {
      return axios
         .post(`${this._apiUrl}/todos`, data, {
            headers: {
               token: TokenService.get(),
            },
         })
         .then((res) => {
            return res.data.todo
         })
   }
   GetToDo() {
      console.log(TokenService.get(), 'test token')
      return axios
         .get(`${this._apiUrl}/todos`, {
            headers: {
               token: TokenService.get(),
            },
         })
         .then((res) => {
            console.log('res.data ', res.data.todos)
            return res.data.todos
         })
   }

   RemoveToDo(id: string) {
      return axios
         .delete(`${this._apiUrl}/todos/${id}`, {
            headers: {
               token: TokenService.get(),
            },
         })
         .then((res) => {
            console.log('res.data ', res.data)
            return res.data
         })
   }

   EditToDo(id: string, body: { title: string; isCompleted: boolean }) {
      console.log('body in Api  ', body)
      return axios
         .put(`${this._apiUrl}/todos/${id}`, body, {
            headers: {
               token: TokenService.get(),
            },
         })
         .then((res) => {
            return res.data
         })
   }

   PutchToDo(id: string, body: { title: string; isCompleted: boolean }) {
      console.log('body in Api  ', body)
      return axios
         .put(`${this._apiUrl}/todos/${id}`, body, {
            headers: {
               token: TokenService.get(),
            },
         })
         .then((res) => {
            return res.data
         })
   }

   // GetToDo(body:{ text: string; checked: boolean }): Promise<{text:string,checked:boolean}> {
   //    return axios
   //       .get(`${this._apiUrl}/todo`, body, {
   //          headers: {
   //             token: TokenService.get()
   //          }
   //       })
   //       .then((rez)=>{
   //          return rez.data
   //       })
   // }
}
export default new ApiServices()
