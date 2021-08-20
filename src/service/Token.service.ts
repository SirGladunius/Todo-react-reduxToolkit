import axios from 'axios'

class TokenService {
   private static key = 'token'

   public static get(): string | null {
      const strToken = localStorage.getItem(this.key)
      if (!strToken) {
         return null
      }
      console.log(JSON.parse(strToken))
      return JSON.parse(strToken)
   }
   public static set(token: string) {
      return localStorage.setItem(this.key, JSON.stringify(token))
   }
   public static delete() {
      return localStorage.removeItem(this.key)
   }
}
export default TokenService
