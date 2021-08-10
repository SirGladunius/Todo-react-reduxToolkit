import axios from 'axios'

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
}
export default new ApiServices()
