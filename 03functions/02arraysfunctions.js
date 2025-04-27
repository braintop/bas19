// כתוב פונקציה המקבלת כפרמטר מערך ומחזירה את כמות המספרים הזוגיים
// הפעל את הפונקציה עם ה מערך הבא 
// numbers = [1,2,4,5,10,90]

function evenInArrays(numbers){
    let counter = 0 
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]%2 == 0){
            counter++
        }
    }//end of for 
    return counter;
}
let numbers = [1,2,4,5,10,90]
let c = evenInArrays(numbers)
console.log(c)


// כתוב פונקציה המקבלת כפרמטר מערך ומחזירה מערך חדש עם 
//הזוגיים
// הפעל את הפונקציה עם ה מערך הבא 
// numbers = [1,2,4,5,10,90]
function returnEvenInArray(numbers){
    let evenArr = [] 
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]%2 == 0){
            evenArr.push(numbers[i])
        }
    }//end of for 
    return evenArr;
}
let numbers2 = [1,2,4,5,10,90]
let evens = returnEvenInArray(numbers2)
console.log(evens)
