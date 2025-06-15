//making register steps  
//1. npm install bcryptjs
//2. let bcrypt = require('bcryptjs')
//3. let salt = bcrypt.genSaltSync(12);
//4. let password = bcrypt.hashSync(req.body.password, salt);
//5. update req.body.password 
let bcrypt = require('bcryptjs')
let itemModel = require("./UserModel")
const jwt = require('jsonwebtoken');

exports.register = async function (req, res) {
    try {
        let salt = bcrypt.genSaltSync(12);
        let password = bcrypt.hashSync(req.body.password, salt);
        let p1 = req.body;
        p1.password = password;
        var newItem = await itemModel.create(p1);
        res.status(201).json(newItem)
    }
    catch (err) {
        res.status(400).json({
            status: "fail",
            message: "error:😱" + err
        })
    }
};

exports.login = async function (req, res) {
    let { username, password } = req.body;
    if (!username || !password) {
        res.status(400).json({ login: false, message: "you need username and password" });
        return;
    }
    let user = await itemModel.findOne({ username: username })
    if (!user) {
        res.status(401).json({ login: false, message: "No user with the given email" });
        return
    }
    let answer = bcrypt.compareSync(password, user.password);

    if (!answer) {
        res.status(401).json({ login: false, message: "Wrong password" });
        return
    }

    // Generate JWT token
    const token = jwt.sign(
        { userId: user._id, username: user.username },
        'your-secret-key', // In production, use environment variable for this
        { expiresIn: '24h' }
    );

    res.json({
        login: true,
        message: "success login",
        token: token,
        user: {
            id: user._id,
            username: user.username
        }
    })
}

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





