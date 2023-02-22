import React , {useState} from 'react';

import './App.css';
import InputField from './component/InputField';

const App : React.FC = () => {
  const [toDo , setToDo]=useState<string>('')

  return (
    <div className="App">
     <span className="heading">To DO</span>
     <InputField toDo={toDo} setToDo={setToDo} />
    </div>
  );
}

export default App;
