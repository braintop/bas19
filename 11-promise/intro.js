// function f(succsessCallback, errorCallback) {
//     setTimeout(() => {
//         let index = Math.floor(Math.random() * 10)
//         if (index > 5) succsessCallback()
//         else {
//             //throw "less than 5"
//             errorCallback() 
//         }
//     }, 3000);
// }

function f() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let index = Math.floor(Math.random() * 10)
            if (index > 5) {
                resolve("success with index " + index)
            }
            else {
                //throw "less than 5"
                reject("error with index " + index)
            }
        }, 3000);
    })
   // return p;
}
// () =>{} 
// (s) =>{console.log(s)}
// (err) =>{console.log(err)}

let solution = f();
console.log(solution)

solution
    .then((s) => { console.log(s) })
    .catch((err) => { console.log(err) })
    .finally(() => { console.log("finally")})


//f().then().catch().finally()    