function f(errorCallback) {
    setTimeout(() => {
        let index = Math.floor(Math.random() * 10)
        if (index > 5) return "bigger than 5"
        else {
            //throw "less than 5"
            errorCallback() 
        }
    }, 3000);
}

function fireManErrorCallBack(){
    console.log("fire.......")
}
function policmanErrorCallBack(){
    console.log("run away.......")
}
f(fireManErrorCallBack)
console.log("continue")
