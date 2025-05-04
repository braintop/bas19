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

function randomColor(color1, color2, color3){
    let num = Math.floor(Math.random()*3)
    if(num==0) return color1 
    else if (num==1) return color2 
    return color3 
}
function amazing(paintCallback){
    let c = paintCallback("red", "green", "yellow") 
    console.log(c)
}
amazing(randomColor)