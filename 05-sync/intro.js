function g(){
    console.log("g")
}
function f(){
    g()
    console.log("f")
}

function t(){
    console.log("t")
    f()     
}

t() 

//t  , g , f 
