//API call

import axios from 'axios';
import { ADDNEW_TODO , GetAll_TODO ,TOOGLE_TODO, UPDATE_TODO , DELETE_TODO} from './type';
const API_URL = "http://localhost:5500";


export const addNewTodo = (data) => async(dispatch) => {
    try{
       const res = await axios.post(`${API_URL}/todo` , { data });
       dispatch({type:ADDNEW_TODO , payload: res.data})
    }catch(error){
        console.log('Error while calling addNewTodo API' , error.message);
    }
}

export const getAllTodos = () => async(dispatch) =>{
try{
    const res = await axios.get(`${API_URL}/todo`);
    dispatch({type:GetAll_TODO , payload: res.data})
 } catch (error) {
     console.log('Error while calling getAllTodos API' , error.message);
 }
   
}

export const toggleTodo = (id) => async(dispatch) =>{
    try{
        const res = await axios.get(`${API_URL}/todo/${id}`);
        dispatch({type:TOOGLE_TODO , payload: res.data})
     } catch (error) {
         console.log('Error while calling toggleTodos API' , error.message);
     }
       
    }
    export const updateTodo = (id , data) => async(dispatch) =>{
        try{
            const res = await axios.put(`${API_URL}/todo/${id}`, { data });
            dispatch({type:UPDATE_TODO , payload: res.data})
         } catch (error) {
             console.log('Error while calling updateTodos API' , error.message);
         }
           
        }

        export const deleteTodo = (id) => async(dispatch) =>{
            try{
                const res = await axios.delete(`${API_URL}/todo/${id}`);
                dispatch({type:DELETE_TODO , payload: res.data})
             } catch (error) {
                 console.log('Error while calling deleteTodos API' , error.message);
             }
               
            }