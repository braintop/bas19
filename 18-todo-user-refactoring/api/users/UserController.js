//1. npm install bcryptjs
//2. let bcrypt = require('bcryptjs')
//3. let salt = bcrypt.genSaltSync(12);
//4. let password = bcrypt.hashSync(req.body.password, salt);
//5. update req.body.password 
let bcrypt = require('bcryptjs')

let itemModel = require("./UserModel")
exports.register = async function (req, res, next) {
    try {
        let salt = bcrypt.genSaltSync(12);
        let password = bcrypt.hashSync(req.body.password, salt);
        let p1 = req.body;
        p1.password = password;
        console.log(p1);
        var newItem = await itemModel.create(p1);
        console.log(newItem)
        res.status(201).json(newItem)
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: "error:😱" + err
        })
    }
};
exports.get = async function (req, res, next) {
    try {
        var newItem = await itemModel.find()
        res.status(201).json(newItem)
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: "error:😱" + err
        })
    }
};

exports.getById = async function (req, res, next) {
    try {
        var newItem = await itemModel.findOne({ _id: req.params.id })
        res.status(201).json(newItem)
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: "error:😱" + err
        })
    }
};

exports.update = async function (req, res, next) {
    try {
        let id = req.params.id
        let result = await itemModel.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })
        res.json({ "message": "data updated" })
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: "error:😱" + err
        })
    }
}

exports.delete = async function (req, res, next) {
    try {
        var newItem = await itemModel.deleteOne({ _id: req.params.id })
        res.status(201).json({ "message": "item deleted" })
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: "error:😱" + err
        })
    }
};





