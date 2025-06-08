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

app.post('/api/v1/products', async function (req, res, next) {
    try {
        let p1 = req.body;
        var newItem = await CurrentProduct.create(p1);
        res.status(201).json({
            status: "success",
            data: newItem
        })
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: "error:😱" + err
        })
    }
});
