import React from 'react'

import "./styles.css"

function InputField({setToDo,toDo}) {
  return (
    <form className='input'>
        <input type="input" placeholder='Enter task' className='input_box' />
        <button className='input_submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField