// כתוב פונקציה המקבלת כפרמטר מערך 
// הפונקציה תחזיר את 
// כמות המספרים הגבוהים מ 10 
// הפעל את הפונקציה עם ה מערך הבא 
// numbers = [1,2,4,5,10,90]
function above10(numbers) {
    let count = 0
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 10) {
            count++
        }
    }
    return count;
}
let numbers = [1, 2, 4, 5, 10, 90]
let c = above10(numbers)
console.log(c)
