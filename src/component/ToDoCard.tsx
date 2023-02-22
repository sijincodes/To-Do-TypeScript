import React , {useState}from "react";
import { AiFillEdit, AiFillDelete, AiOutlineFileDone } from "react-icons/ai";
import { ToDo } from "../model";
import "./styles.css";

interface Props {
  todo: ToDo;
  toDos: ToDo[];
  setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}
function ToDoCard({ todo, toDos, setToDos }: Props) {
    const [edit, setEdit] = useState<boolean>(false)
const [editToDo, setEditToDo] = useState<string>(todo.todo)
  const handleDone = (id: number) => {
    setToDos(
      toDos.filter((elm) => {
        return elm.id === id ? { ...elm, isDone: !elm.isDone } : elm;
      })
    );
  };
const handleDelete = (id:number) => {
setToDos(
    toDos.filter(elm => {
        return elm.id !== id 
    })
)

}

const handleEdit = (id:number,) => {

}


  return (
   
    <form className="todos_single" onSubmit={(e)=>handleEdit(e,todo.id)}>
        {
            edit ? (<input value={editToDo} onChange={(e)=>setEditToDo(e.target.value)} className='todos_single--text'/>) : ( todo.isDone ? (
                <s className="todos_single--text">{todo.todo}</s>
              ) : (
                <span className="todos_single--text">{todo.todo}</span>
              )
        )
        }
     
      <div>
        <span className="icon" onClick={()=>{
            if(!edit && !todo.isDone)
            setEdit(!edit)
        }}>
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <AiOutlineFileDone />
        </span>
        <span className="icon" onClick={()=> handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
      </div>
    </form>
  );
}

export default ToDoCard;
