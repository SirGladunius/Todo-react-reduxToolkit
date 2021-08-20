import React from 'react'
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import './class.css'
import { Todo } from '../redux/todos.type'
import {
   editToDos,
   removeToDo,
   removeTodo,
} from '../redux/features/todo/todoSlice'

interface ModalInterface {
   setOpen: () => void
   todo: Todo
   setIndex: (id: string) => void
   todoIndex: number
}

const TodoItem: React.FC<ModalInterface> = (props) => {
   const dispatch = useDispatch()
   // const classes = []
   // if (props.todo?.completed) {
   //    classes.push('done')
   // }
   const handleToggle = (index: number) => {
      dispatch(
         editToDos(props.todo.id, index, {
            title: props.todo.title,
            isCompleted: !props.todo.isCompleted,
         })
      )
   }
   const removeThis = () => {
      dispatch(removeToDo(props.todo.id))
      //RemoveToDo
   }

   return (
      <li className={'num'}>
         <div className={'TodoItem'}>
            <input
               type="checkbox"
               onChange={() => {
                  handleToggle(props.todoIndex)
               }}
               checked={props.todo.isCompleted}
            />
            <span>{props.todo.title}</span>
            <Button
               onClick={() => {
                  props.setOpen()
                  props.setIndex(props.todo.id)
               }}
            >
               Change
            </Button>
            <Button onClick={removeThis}>Remove</Button>
         </div>
      </li>
   )
}

export default TodoItem
