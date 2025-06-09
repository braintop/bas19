let express = require('express');
let mongoose = require('mongoose');
let personModel = require("./PersonModel")
let app = express();
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
const uri = "mongodb+srv://david:Aa123456@cluster0.gqvy99x.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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
app.use(express.json())

app.post('/api/v1/persons', async function (req, res, next) {
    try {
        let p1 = req.body;
        var newItem = await personModel.create(p1);
        res.status(201).json(newItem)
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: "error:😱" + err
        })
    }
});

app.get('/api/v1/persons', async function (req, res, next) {
    try {
        var newItem = await personModel.find()
        res.status(201).json(newItem)
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: "error:😱" + err
        })
    }
});
//684551b70ba9a641b1883316
app.get('/api/v1/persons/:id/:book/:page', async function (req, res, next) {
    try {
        console.log(req.params)
        res.status(201).json("hi hi hi")
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: "error:😱" + err
        })
    }
});

app.get('/api/v1/persons/:id', async function (req, res, next) {
    try {
        var newItem = await personModel.findOne({ _id: req.params.id })
        res.status(201).json(newItem)
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: "error:😱" + err
        })
    }
});


app.patch('/api/v1/persons/:id', async function (req, res, next) {
    try {
        let id = req.params.id
        let result = await personModel.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
        res.json({ "message": "data updated" })
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: "error:😱" + err
        })
    }
})

app.delete('/api/v1/persons/:id', async function (req, res, next) {
    try {
        var newItem = await personModel.deleteOne({ _id: req.params.id })
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
