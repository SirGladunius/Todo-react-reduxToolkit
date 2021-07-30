import { PayloadAction } from '@reduxjs/toolkit'
import { TodoState } from './todo.types'
import LocalStorageService from '../../../LocalStorageService/LocalStorageService'
import TodoItem from '../../../components/TodoItem'

export const addTodoAction = (
   state: TodoState,
   action: PayloadAction<{ text: string }>
) => {
   state.todos.push({
      title: action.payload.text,
      completed: false,
      id: Date.now().toString(),
   })
   LocalStorageService.setTodos(state.todos)
}
