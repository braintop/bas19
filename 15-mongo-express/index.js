let express = require('express');
let mongoose = require('mongoose');
let productModel = require("./ProductModel")
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
app.post('/api/v1/products', async function (req, res) {
    let body = req.body; // {title:"ball", description:"red","price":50}
    let newItem = new productModel(body);
    newItem.save().then((item) => {
        res.json({ "message": "item saved" })
    })
});
app.listen(3000)

