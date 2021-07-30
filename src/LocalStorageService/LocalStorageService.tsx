import { Todo } from '../redux/todos.type'

class LocalStorageService {
   static getTodos() {
      return JSON.parse(localStorage.getItem('todos') || '[]')
   }

   static setTodos(todos: Todo[]) {
      let todosLocal = JSON.stringify(todos)
      localStorage.setItem('todos', todosLocal)
   }
}

export default LocalStorageService
