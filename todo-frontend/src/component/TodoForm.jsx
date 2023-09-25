import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../redux/action';

export default function TodoForm() {
    const [text , setText] = useState("");
    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewTodo(text));
        setText('');
        
        

    }
    const onInputChange = (e) =>{
        // console.log(e.target.value); //to get value written in the field we use Onchange , event will get triggered on Onchange i.e e and we can get value
        setText(e.target.value);

    }
  return (
   <>
   <form className='form' onSubmit= {onFormSubmit}>
    <input
    placeholder='Enter new todo.'
    className='input'
    onChange={onInputChange}
    value={text}
    />

   </form>
   </>
  )
}
