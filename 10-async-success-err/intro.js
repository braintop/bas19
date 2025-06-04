function f(succsessCallback, errorCallback) {
    setTimeout(() => {
        let index = Math.floor(Math.random() * 10)
        if (index > 5) succsessCallback()
        else {
            //throw "less than 5"
            errorCallback() 
        }
    }, 3000);
}

function fireManErrorCallBack(){
    console.log("fire.......")
}
function fireManSuccessCallBack(){
    console.log("success - no fire.......")
}

f(fireManSuccessCallBack,fireManErrorCallBack)
console.log("continue")

//navigator.geolocation.getCurrentPosition()