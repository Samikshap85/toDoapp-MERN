
import Connection from "./dbconnection.js";
import express from "express";


import Routes from "../todo-backend/route/route.js"
import cors from 'cors';
import bodyParser from "body-parser";


const app = express();
app.use(cors());

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({ extended: true}))



app.use('/',Routes);

// Middleware to parse JSON request bodies

const port = 5500;
Connection();

app.listen(port, () => console.log(`Server started at port ${port}`));



                            

// // Routes
// app.get('/todos', async (req, res) => {
//     try {
//         const todos = await Todo.find({});
//         res.status(200).json(todos);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// app.delete('/todo/:id', async (req, res) => {
//     try {
//         const todo = await Todo.findByIdAndDelete(req.params.id);
//         res.status(200).json(todo);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });
// 
// app.post('/todo', async (req, res) => {
//     try {
//         const todo = new Todo({ title: req.body.title , isCompleted: req.body.isCompleted });
//         const saveTodo = await todo.save();
//         res.status(200).json(saveTodo);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });

// app.put('/todo/:id', async (req, res) => {
//     try {
//         const updatedTodo = await Todo.findByIdAndUpdate(
//             req.params.id,
//             { title: req.body.title, isCompleted: req.body.isCompleted },
//             { new: true }
//         );
//         res.status(200).json(updatedTodo);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });