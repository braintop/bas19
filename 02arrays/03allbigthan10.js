let arr = [1,2,34,4,5,100,9,20,12,1000]
let answer = true 
for(let i=0;i<arr.length;i++){
    if(arr[i] < 10)
        answer= false
}
console.log(answer)

// צור מערך חדש שמכיל רק את המספרים הזוגיים במערך הקיים.
let newArr = []
for(let i=0;i<arr.length;i++){
    if(arr[i] %2 == 0)
        newArr.push(arr[i])
}
console.log(newArr)





let temp = arr[0]
arr[0] = arr[9]
arr[9] = temp

let max = arr[0]
for(let i=0;i<arr.length;i++){
    if(arr[i] > max)
        max= arr[i]
}
 
console.log(max)
