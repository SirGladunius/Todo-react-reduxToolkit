import axios from 'axios'
import TokenService from './Token.service'
import { Todo } from '../redux/todos.type'

class ApiServices {
   _apiUrl = 'http://localhost:5000'

   postRegistration(body: {
      email: string
      password: string
   }): Promise<string> {
      return axios
         .post(`${this._apiUrl}/auth/registration`, body)
         .then((res) => {
            return res.data
         })
   }
   postLogin(body: { email: string; password: string }): Promise<string> {
      return axios.post(`${this._apiUrl}/auth/login`, body).then((res) => {
         return res.data
      })
   }
   AddToDo(data: any) {
      return axios
         .post(`${this._apiUrl}/todo`, data, {
            headers: {
               token: TokenService.get(),
            },
         })
         .then((rez) => {
            return rez.data
         })
   }
   GetToDo() {
      return axios
         .get(`${this._apiUrl}/todo`, {
            headers: {
               token: TokenService.get(),
            },
         })
         .then((res) => {
            return res.data
         })
   }

   RemoveToDo(id: string) {
      return axios.delete(`${this._apiUrl}/todo/${id}`).then((res) => {
         return res.data
      })
   }

   EditToDo(id: string, body: { text: string; checked: boolean }) {
      console.log('body in Api  ', body)
      return axios.put(`${this._apiUrl}/todo/${id}`, body).then((res) => {
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
