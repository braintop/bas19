function printHello(){
    console.log("david")
}
function fireman(){
    console.log("שריפה")
}
function soldire(){
    console.log("מלחמה")
}
// הפונקציה מקבלת כפרמטרר פונקציה אחרת 
function f(callback){
    callback()
}
f(printHello)// זימון הפונקציה 
f(fireman)
f(soldire)

