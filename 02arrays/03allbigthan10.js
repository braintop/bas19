let arr = [1,2,34,4,5,100,9,20,12,1000]
let answer = true 
for(let i=0;i<arr.length;i++){
    if(arr[i] < 10)
        answer= false
}
let temp = arr[0]
arr[0] = arr[9]
arr[9] = temp
console.log(answer)

let max = arr[0]
for(let i=0;i<arr.length;i++){
    if(arr[i] > max)
        max= arr[i]
}
 
console.log(max)
