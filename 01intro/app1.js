//output 
console.log("hello world")
//on java : int x = 5, float y = 5.5f; string name = "asaf"
//on js : var x = 5; let y =5; const t = 5;

const x = 5; 
//x = 6;// TypeError :  Assignment to constant variable.
console.log(x);//print x 
let firstname = "Oren" // type is string 
let age = 6;// type is integer number 
console.log(firstname)// print first name 
console.log(firstname + " is "+ age + " years old")

let x1 = Math.random()//random number 0 - 1 
console.log(x1)

let y1 = Math.random() * 100 // 0 - 100
console.log(y1)

let t1 = Math.floor(Math.random() * 100)  // 0 - 100
console.log(t1)
//כתוב תכנית הקולות שני מספרים רנדומלים ומדפיסה את סכומם 
let num1 = Math.floor(Math.random()*100)
let num2 = Math.floor(Math.random()*100)
let solution = num1 + num2 
console.log(solution)
console.log("num1 + num2 = " + solution)
console.log(num1 + "+" + num2 + "="  + solution)






