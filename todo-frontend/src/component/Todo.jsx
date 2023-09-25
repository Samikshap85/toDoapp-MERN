import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import '../App.css'
import { useState } from 'react';
import { toggleTodo , updateTodo } from '../redux/action';
import { deleteTodo } from '../redux/action';
import { useDispatch } from 'react-redux';
const Todo = ( {todo}) => {
const [editing, setEditing]= useState(false);
const [text,setText]= useState(todo.data);
    const dispatch = useDispatch();
    const onFormSubmit = (e) => {
        e.preventDefault();
        setEditing(prevState => !prevState);
        dispatch(updateTodo(todo._id, text))
    }
    

    return(
        <li className="task"
        onClick={() => dispatch(toggleTodo(todo._id))}
        style={{
            textDecoration: todo.done ? 'line-through' : '',
            color: todo.done ? 'white' : '#2c3e50'
        }}
        >
            <span style={{display : editing ? 'none': "" }}>{todo.data}</span>
            <form 
                style={{display:editing ? 'inline' : 'none'}}
                onSubmit={onFormSubmit}>
                <input
                type='text'
                value={text}
                className='edit-todo'
                onChange={(e) =>setText(e.target.value)}/>
            </form>
            <span className='icon'
            onClick={() => setEditing(prevState => !prevState)}>
                <EditIcon/>
            </span>
            <span className='icon'
            onClick= { () => dispatch(deleteTodo(todo._id))}>
                <DeleteIcon />
               
            </span>
        </li>
        
    )
}
export default Todo;