import mongoose from "mongoose";

const Connection = () => {
    const dbURI= 'mongodb://localhost:27017/mytodo';
    mongoose.connect(dbURI,{ useNewUrlParser: true});
    mongoose.connection.on('connected' , () => {
        console.log('Database is connected');
    
    })
    mongoose.connection.on('disconnected' , () => {
        console.log('database disconnected');
    })

    mongoose.connection.on('error',() =>{
      console.log('Error while connecting with the database' , error.message);  
    })
}  

export default Connection;