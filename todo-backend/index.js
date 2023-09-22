import mongoose from "mongoose";
import Connection from "./dbconnection.js";
import express from "express";
const port = 5500;
const app = express();

// Middleware to parse JSON request bodies


app.listen(port, () => console.log(`Server started at port ${port}`));
Connection();

const TodoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
});
                            
const Todo = mongoose.model('Todo', TodoSchema, 'Todoser'); //name of mongosse model ,//modelname ,//database name

// Routes
app.get('/todos', async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(200).json(todos);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.delete('/todo/:id', async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json(todo);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});
app.use(express.json());
app.post('/todo', async (req, res) => {
    try {
        const todo = new Todo({ title: req.body.title , isCompleted: req.body.isCompleted });
        const saveTodo = await todo.save();
        res.status(200).json(saveTodo);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.put('/todo/:id', async (req, res) => {
    try {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            { title: req.body.title, isCompleted: req.body.isCompleted },
            { new: true }
        );
        res.status(200).json(updatedTodo);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});