import React, {useRef} from 'react'

import "./styles.css"

interface Props {
    toDo : string,
    setToDo:React.Dispatch<React.SetStateAction<string>>,
    handleAdd:(e:React.FormEvent)=>void
}

function InputField({setToDo,toDo,handleAdd}:Props) {

    const inputRef = useRef<HTMLInputElement>(null)
    return (
    <form className='input' onSubmit={(e)=>{handleAdd(e)
    inputRef.current?.blur()}}>
        <input type="input" placeholder='Enter task' className='input_box' value={toDo} onChange ={(e)=>{setToDo(e.target.value)}}
        ref={inputRef}/>
        <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField