import axios from 'axios'

class TokenService {
   private static key = 'token'

   public static get() {
      return JSON.parse(localStorage.getItem(this.key) || '')
   }
   public static set(token: string) {
      return localStorage.setItem(this.key, JSON.stringify(token))
   }
   public static delete() {
      return localStorage.removeItem(this.key)
   }
}
export default TokenService
