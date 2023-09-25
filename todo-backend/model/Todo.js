import mongoose from "mongoose";
//import { addTodo } from "../controller/todo-controller";

const TodoSchema = mongoose.Schema({
    data: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

const todo = mongoose.model('todo', TodoSchema , 'Todoser'); //name of mongosse model ,//modelname ,//database name
export default todo;