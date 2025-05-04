function sum(a, b){
    return a+b 
}

function printHello(name){
    console.log(name)
}
let g = printHello

console.log(g)
printHello("daviv")
g("david")// הפעלתי את הפונקציה g 

let f = sum
console.log(f(5, 8))

