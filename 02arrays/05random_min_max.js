//40 - 70 
let num1 = 40 + Math.floor(Math.random() * (70 - 40))
console.log(num1)

let num2 = 40 + Math.floor(Math.random() * 30)
console.log(num2)

let min = 100
let max = 200
let number = min + Math.floor(Math.random() * (max - min))

let min1 = Math.random() * 1000
let max1 = Math.random() * 1000
if (min1 > max1) {
    temp = max1
    max1 = min1
    min1 = temp
}
let number2 = min1 + Math.floor(Math.random() * (max - min))


