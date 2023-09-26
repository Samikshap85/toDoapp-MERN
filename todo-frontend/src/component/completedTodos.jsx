
import { useEffect } from "react";

import { getAllCompletedTodos } from "../redux/action/index";

import { useDispatch , useSelector } from "react-redux";

//component
import CompletedTodo from "./completedTodo";

export const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos );

    useEffect(() => {
        dispatch(getAllCompletedTodos());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <article>
            <ul>
             {
                todos.map(todo => (
                    <CompletedTodo
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