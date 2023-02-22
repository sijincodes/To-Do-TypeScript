import React from 'react'
import { ToDo } from '../model'
 import './styles.css'
import ToDoCard from './ToDoCard'

interface Props{
toDos : ToDo[],
setToDos : React.Dispatch<React.SetStateAction<ToDo[]>>
 }

function ToDoCardList ({toDos,setToDos}:Props){
  return (
    <div className='todos'>
      {toDos.map(todo => {
         return <ToDoCard  todo={todo} key={todo.id} toDos={toDos} setToDos={setToDos}/>
      })}
    </div>
  )
}

export default ToDoCardList