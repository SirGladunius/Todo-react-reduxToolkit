import { createSlice, Dispatch } from '@reduxjs/toolkit'
import { Todo } from '../../todos.type'
import { TodoState } from './todo.types'
import ApiService from '../../../service/Api.servece'
const todoSlice = createSlice({
   name: 'todos',
   initialState: {
      todos: [],
   },
   reducers: {
      addTodos(state: TodoState, action) {
         state.todos.push(action.payload)
      },
      removeTodo(state: TodoState, action) {
         state.todos = state.todos.filter((todo) => todo.id !== action.payload)
         // LocalStorageService.setTodos(state.todos)
      },

      editToDo(state: TodoState, action) {
         let newTodo = state.todos.find((todo) => todo.id === action.payload.id)
         if (newTodo) {
            newTodo.text = action.payload.text
            newTodo.checked = action.payload.checked
         }
      },

      changeTodo(state: TodoState, action) {
         console.log('dispatch')
         const newTodo = state.todos.find(
            (todo) => todo.id === action.payload.id
         )
         if (newTodo) {
            newTodo.text = action.payload.changeText
         }
      },
      setTodos(state: TodoState, action) {
         state.todos = action.payload
      },
   },
})

export const { changeTodo, addTodos, setTodos, removeTodo, editToDo } =
   todoSlice.actions

export default todoSlice.reducer

export const addTodo = (data: any) => {
   return async (dispatch: Dispatch) => {
      try {
         const res = await ApiService.AddToDo(data)
         if (res === undefined) {
         } else {
            dispatch(addTodos(res))
         }
      } catch (e: any) {}
   }
}

export const getUserTodos = () => {
   return async (dispatch: Dispatch) => {
      try {
         const res = await ApiService.GetToDo()

         dispatch(setTodos(res))
      } catch (e) {
         console.log(e.message)
      }
   }
}

export const removeToDo = (id: string) => {
   return async (dispatch: Dispatch) => {
      try {
         const res = await ApiService.RemoveToDo(id)
         dispatch(removeTodo(id))
      } catch (e) {
         console.log(e.message())
      }
   }
}

export const editToDos = (
   id: string,
   body: { text: string; checked: boolean }
) => {
   return async (dispatch: Dispatch) => {
      try {
         const res = await ApiService.EditToDo(id, body)
         dispatch(editToDo({ id, text: body.text, checked: body.checked }))
      } catch (e) {
         console.log(e.message())
      }
   }
}
