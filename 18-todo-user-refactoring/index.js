let express = require('express');
let mongoose = require('mongoose');
let userModel = require("./UserModel")

let app = express();
app.use(express.json())

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
const uri = "mongodb+srv://david:Aa123456@cluster0.gqvy99x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

var todoRouter = require("./api/todos/TodoRoute")
app.use('/api/v1/todos', todoRouter);

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

//====================================Users==============

app.post('/api/v1/users', async function (req, res, next) {
    try {
        let p1 = req.body;
        var newItem = await userModel.create(p1);
        res.status(201).json(newItem)
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: "error:😱" + err
        })
    }
});

app.get('/api/v1/users', async function (req, res, next) {
    try {
        var newItem = await userModel.find()
        res.status(201).json(newItem)
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: "error:😱" + err
        })
    }
});

app.get('/api/v1/users/:id', async function (req, res, next) {
    try {
        var newItem = await userModel.findOne({ _id: req.params.id })
        res.status(201).json(newItem)
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: "error:😱" + err
        })
    }
});

app.patch('/api/v1/users/:id', async function (req, res, next) {
    try {
        let id = req.params.id
        let result = await userModel.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
        res.json({ "message": "data updated" })
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: "error:😱" + err
        })
    }
})

app.delete('/api/v1/users/:id', async function (req, res, next) {
    try {
        var newItem = await userModel.deleteOne({ _id: req.params.id })
        res.status(201).json({ "message": "item deleted" })
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: "error:😱" + err
        })
    }
});


app.listen(3000)
