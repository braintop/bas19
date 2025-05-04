function sum(a, b){
    return a+b 
}
function mult(a, b){
    return a*b 
}
function minus(a, b){
    return a-b 
}

function compute(callback){
    let solution= callback(2,5)
    console.log(solution)
}
compute(sum)
compute(mult)
compute(minus)

