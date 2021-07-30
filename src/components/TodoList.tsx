import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem'
import { Button, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../redux/features/todo/todoSlice'
import { selectTodos } from '../redux/features/todo/todo.seletors'
import { Todo } from '../redux/todos.type'
import { Modal } from './Modal'
import { stringify } from 'querystring'

const TodoList = () => {
   const todos: Todo[] = useSelector(selectTodos)
   const dispatch = useDispatch()
   const [text, setValue] = useState<string>('')
   const [open, setOpen] = useState<boolean>(false)
   const [index, setIndex] = useState<string>('')

   useEffect(() => {
      console.log(index)
   })

   const handleClose = () => {
      setOpen(false)
   }
   const addItem = () => {
      if (text.trim().length) {
         dispatch(addTodo({ text }))
         console.log(text)
      }
      setValue('')
   }
   return (
      <>
         <h1>TodoList</h1>
         <TextField
            value={text}
            onChange={(event) => {
               setValue(event.target.value)
            }}
         />
         <Button onClick={addItem}>Save</Button>
         <ol>
            {todos.map((todo: Todo) => (
               <TodoItem
                  todo={todo}
                  setOpen={() => setOpen(true)}
                  setIndex={setIndex}
               />
            ))}
         </ol>

         <Modal open={open} handleClose={handleClose} index={index} />
      </>
   )
}

export default TodoList