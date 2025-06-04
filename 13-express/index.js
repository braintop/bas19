let express = require("express")
let app = express()

// get - get data 
// post - create data 
// delete - delete data 
// patch - update data 
// put - update data 
app.use(express.json())

app.get("/api/name", (req, res) => {
    res.json({ fullname: "uzi uz" })
})
app.get("/students/number", (req, res) => {

    let number = Math.floor(Math.random() * 100)
    res.json({ seleted: number })
})
app.get("/courses/n1ton2", (req, res) => {

    let number = 1000 + Math.floor(Math.random() * 1000)
    res.json({ seleted: number })
})


app.post("/api/name", (req, res) => {
    console.log(req)
    let data = req.body
    console.log(data)
    res.json({ fullname: "post uzi uz" })
})
//להעביר בפוסא שני פרממטרים 
// a ו b 
// res : a+b 
app.post("/plus", (req, res) => {
    let a = req.body.a
    let b = req.body.b
    let sum = a + b
    res.json({ solution: sum })
})





app.listen(3000)