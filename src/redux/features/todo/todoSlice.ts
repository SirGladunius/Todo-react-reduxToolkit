import { createSlice, Dispatch } from '@reduxjs/toolkit'
import { Todo } from '../../todos.type'
import { TodoState } from './todo.types'
import ApiService from '../../../service/Api.servece'
import { log } from 'util'
import TokenService from '../../../service/Token.service'
const todoSlice = createSlice({
   name: 'todos',
   initialState: {
      todos: [],
   },
   reducers: {
      clear(state: TodoState) {
         state.todos = []
      },

      addTodos(state: TodoState, action) {
         state.todos.push(action.payload)
      },
      removeTodo(state: TodoState, action) {
         state.todos = state.todos.filter((todo) => todo.id !== action.payload)
         // LocalStorageService.setTodos(state.todos)
      },

      editToDo(state: TodoState, action) {
         state.todos[action.payload.index].title = action.payload.title
         state.todos[action.payload.index].isCompleted =
            action.payload.isCompleted
      },

      changeTodo(state: TodoState, action) {
         console.log('dispatch')
         const newTodo = state.todos.find(
            (todo) => todo.id === action.payload.id
         )
         if (newTodo) {
            newTodo.title = action.payload.changeText
         }
      },
      setTodos(state: TodoState, action) {
         state.todos = action.payload
      },
   },
})

export const { changeTodo, addTodos, setTodos, removeTodo, editToDo, clear } =
   todoSlice.actions

export default todoSlice.reducer

export const clearTodo = () => {
   return async (dispatch: Dispatch) => {
      try {
         dispatch(clear())
      } catch (e: any) {
         console.log(`Error: ${e}`)
      }
   }
}

export const addTodo = (data: any) => {
   return async (dispatch: Dispatch) => {
      try {
         const res = await ApiService.AddToDo(data)
         console.log('res:', res)
         dispatch(addTodos(res))
      } catch (e: any) {}
   }
}

export const getUserTodos = () => {
   return async (dispatch: Dispatch) => {
      try {
         const res = await ApiService.GetToDo()
         console.log('---', res)
         dispatch(setTodos(res))
      } catch (e) {
         console.log(e)
      }
   }
}

export const removeToDo = (id: string) => {
   return async (dispatch: Dispatch) => {
      try {
         const res = await ApiService.RemoveToDo(id)
         dispatch(removeTodo(id))
      } catch (e) {
         console.log(e)
      }
   }
}

export const editToDos = (
   id: string,
   index: number,
   body: { title: string; isCompleted: boolean }
) => {
   return async (dispatch: Dispatch) => {
      try {
         const res = await ApiService.EditToDo(id, body)
         console.log(res)
         dispatch(
            editToDo({
               title: body.title,
               isCompleted: body.isCompleted,
               index,
            })
         )
      } catch (e) {
         console.log(e)
      }
   }
}
