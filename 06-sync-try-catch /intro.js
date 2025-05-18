// throw = return error : catch(err)
//try = תנסה 
//catch היתה בעיה שתקבל אותה בפרמטר ל 
function f() {
    let index = Math.floor(Math.random() * 10)
    let arr = [1, 2, 3] // arr.lenght 
    if (  index%2 ==0 && index >= arr.length)
        throw "Out of range" // throw = return err 
    else if(index%2 == 1){
        throw "odd number" // throw = return err 
    }
    return "index :" + index + " value:" + arr[index]
}
function g() {
    let index = Math.floor(Math.random() * 10)
    if(index > 5) return index
    throw "less than 5"
}
try {
    let answer = f()
    console.log(answer)
    answer = g() 
    console.log(answer)
}

catch (err) {
    console.log(err)
}
