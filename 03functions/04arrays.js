// כתוב פונקציה המקבלת כפרמטר 2 מערכים 
// הפונקציה תחזיר 1 אם סכום האיברים 
//במערך הראשון גבוה מסכים הערכים במערך השני 
// הפונקציה תחזיר 2 אם סכום האיברים 
//במערך השני גבוה מסכום הערכים במערך הראשון  
// הפונקציה תחזיר 0 אם סכום האיברים 
//במערך השני שווה לסכום הערכים במערך הראשון  
//הפעל את הפונקציה עם שני המערכים הבאים 
//numbers1 = [1, 4, 5,6]
//numbers2 = [10, 4, 5, 6, 100, 200, 300]
function compareSum(arr1, arr2) {
    let sum1 = 0
    let sum2 = 0
    for (let i = 0; i < arr1.length; i++) {
        sum1 += arr1[i]
    }
    for (let i = 0; i < arr2.length; i++) {
        sum2 += arr2[i]
    }
    if(sum1>sum2) return 1; 
    else if(sum1<sum2) return 2; 
    return 0
}
let numbers1 = [1, 4, 5,6]
let numbers2 = [10, 4, 5, 6, 100, 200, 300]
let solution = compareSum(numbers1, numbers2)
console.log(solution)