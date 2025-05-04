// כתב פונקציה המקבלת כפרמטר מערך  ומספר 
// ןמחזירה כמה פעמים המספר מופיע במערך
// זמן את הפונקציה עם המערך
// numbers = [1, 5, 5,6]
// והמספר 5 
function countNumberInArray(numbers, num){
    let count = 0 
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]==num) count++
    }
    return count; 
}
let numbers = [1, 4, 5,6]
let solution = countNumberInArray(numbers, 5) // [].indexOf()
console.log(solution)

