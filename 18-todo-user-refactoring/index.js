//npm install cors
//const cors=require("cors");
// const corsOptions ={
//    origin:'*', 
//    credentials:true,            //access-control-allow-credentials:true
//    optionSuccessStatus:200,
// }

// app.use(cors(corsOptions)) // Use this after the variable declaration

let express = require('express');
let mongoose = require('mongoose');
const cors = require("cors");
let app = express();
app.use(express.json())
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions))

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
const uri = "mongodb+srv://david:Aa123456@cluster0.gqvy99x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
var todoRouter = require("./api/todos/TodoRoute")
app.use('/api/v1/todos', todoRouter);
var userRouter = require("./api/users/UserRoute")
app.use('/api/v1/users', userRouter);
async function connectMongo() {
    try {
        await mongoose.connect(uri, clientOptions);
        console.log("connected successfully to mongodb")
    }
    catch (err) {
        console.log(err)
    }
}
connectMongo()
app.listen(3000)
