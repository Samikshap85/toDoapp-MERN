
import { useEffect } from "react";

import { getAllTodos } from "../redux/action/index";

import { useDispatch , useSelector } from "react-redux";

//component
import Todo from "./Todo";

export const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos );

    useEffect(() => {
        dispatch(getAllTodos());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <article>
            <ul>
             {
                todos.map(todo => (
                    <Todo
                        key={todo._id}
                        todo={todo}
                    />
                ))
             }   
                
            </ul>
        </article>
    )

};
export default Todos;