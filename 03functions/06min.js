// כתוב פונקציה המקבלת כפרמטר מערך מספרים, ומחזירה את המספר הקטן ביותר.
// הפעל את הפונקציה עם המערך הבא:
// numbers = [10, 5, 18, 3, 22]

function minInArr(numbers){
    let min = numbers[0]
    for(let i=0;i<numbers.length;i++){
        if(min<numbers[i]) 
            min = numbers[i]
    }
    return min;
}
let numbers = [10, 5, 18, 3, 22]
let m = minInArr(numbers)
console.log(m) 