function f() {
    setTimeout(() => {
        let index = Math.floor(Math.random() * 10)
        if (index > 5) return "bigger than 5"
        throw "less than 5"
    }, 3000);
}
function g() {
        let index = Math.floor(Math.random() * 10)
        if (index > 5) return "bigger than 5"
        throw "less than 5"
}

try {
    
    let answer = f()
    console.log(answer)
}
catch (err) {
    console.log(err)
}
// התקדמתי קוד 
console.log("continue")