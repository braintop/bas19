// כתוב פונקציה המקבלת כפרטמטר שני מספרים 
// ומחזירה את סכומם 
//הפעל את הפונקציה עם המספרים 50 40 ו 30 והדפס את התוצאה  
function sum(a, b) {
    let sum = a + b
    return sum
}
let solution = sum(4, 5)
console.log(solution)
let num1 = Math.floor(Math.random() * 100)
let num2 = Math.floor(Math.random() * 100)
let sol = sum(num1, num2)
//alert(num1 + "+" + num2 + "=" + sol)
console.log(num1 + "+" + num2 + "=" + sol)

// כתוב פונקציה המקבלת כפרטמטר 3 מספרים 
// הפונקציה מחזירה את המספרים המקסימאלי  
//הפעל את הפונקציה אם המספרים 100,30, 40  והדפס את התוצאה  
//הפעל את הפונקציה אם 3 מספרים רנדומלים  והדפס את התוצאה  
function maxBetween3Numbers(a, b , c){
    if(a >=b && a>=c){
        return a;
    }
    else if(b>=a && b>=c){
        return b;
    }
    return c; 
}
let m1 = maxBetween3Numbers(30, 100, 40);
console.log(m1)


