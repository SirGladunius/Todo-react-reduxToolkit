import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import { Button, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, getUserTodos } from '../redux/features/todo/todoSlice'
import { selectTodos } from '../redux/features/todo/todo.seletors'
import { Todo } from '../redux/todos.type'
import { Modal } from './Modal'
import ApiServices from '../service/Api.servece'
import { RootState } from '../redux'

const TodoList = () => {
   const dispatch = useDispatch()
   const [text, setValue] = useState<string>('')
   const [open, setOpen] = useState<boolean>(false)
   const [index, setIndex] = useState<string>('')
   const [todoIndex, setTodoIndex] = useState(0)

   const token = useSelector((state: RootState) => state.auth.token)

   const getTodos = () => {
      dispatch(getUserTodos())
   }
   useEffect(() => {
      getTodos()
   }, [])
   const todos = useSelector((state: RootState) => state.todos.todos)

   const handleClose = () => {
      setOpen(false)
   }
   const addItem = () => {
      if (text.trim().length) {
         dispatch(addTodo({ title: text }))
      }
      setValue('')
   }
   return (
      <>
         <TextField
            value={text}
            onChange={(event) => {
               setValue(event.target.value)
            }}
         />
         <Button onClick={addItem}>Save</Button>
         <div className={'TodoList'}>
            <ol>
               {todos.map((todo: Todo, index) => {
                  // setTodoIndex(index)
                  return (
                     <TodoItem
                        todo={todo}
                        setOpen={() => setOpen(true)}
                        setIndex={setIndex}
                        todoIndex={index}
                     />
                  )
               })}
            </ol>
            <Modal
               open={open}
               handleClose={handleClose}
               index={index}
               todoIndex={todoIndex}
            />
         </div>
      </>
   )
}

export default TodoList
