function f() {
    console.log("f")
}
function g() {
    console.log("g")
}
function disco() {
    let colors = ["red", "yellow", "green"]
    let index = Math.floor(Math.random() * 3)
    document.body.style.backgroundColor = colors[index]
    let x = 1 

}
counter = 0;
function flush() {
    counter += 1
    if (counter % 2 == 0)
        document.getElementById("title").style.display = "none"
    else
        document.getElementById("title").style.display = "block"

}
setInterval(f, 3000)
setInterval(g, 1000)
setInterval(disco, 1000)
setInterval(flush, 1000)