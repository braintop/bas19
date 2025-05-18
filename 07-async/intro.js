// ()=>{}
let f = () => { console.log("hello") }
//setInterval(f, 3000) // הפונקציה תדפיס על שלוש שניות 

let g = () => { console.log("hi") }
setTimeout(g, 1) // תופעל פעם אחת אחרי אלפית שניות
console.log("hi friends")

//פונקציה אנונימית 
setInterval(()=>{

},1000)