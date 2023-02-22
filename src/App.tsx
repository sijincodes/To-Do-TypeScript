import React , {useState} from 'react';

import './App.css';
import InputField from './component/InputField';
import ToDoCardList from './component/ToDoCardList';
import { ToDo } from './model';

const App : React.FC = () => {
  const [toDo , setToDo]=useState<string>('')
  const [toDos, setToDos]= useState<ToDo[]>([])

const handleAdd = (e : React.FormEvent) =>{
e.preventDefault();

if(toDo){
  setToDos([...toDos,{id: Date.now(),todo:toDo,isDone:false}])
  setToDo('')
}
}


  return (
    <div className="App">
     <span className="heading">To DO</span>
     <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd} />
     <ToDoCardList toDos={toDos} setToDos={setToDos} />
    </div>
  );
}

export default App;
