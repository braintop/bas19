let express = require("express")
let app = express()
// get , post , delete , put , patch  
app.get("/", (req, res) => {
    res.json({ message: "first server" })
})
app.get("/books", (req, res) => {
    res.json({ message: "bible" })
})
app.get("/books/harry", (req, res) => {
    res.json({ title: "harry potter" })
})

app.listen(3000)