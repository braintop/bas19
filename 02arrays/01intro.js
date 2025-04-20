
let arr = [] // empty array 


            //  0  1   2 3
let numbers  = [1,301,40,5] 
console.log(numbers[0]) // 2 
console.log(numbers[3]) //5 

if(numbers[0]==numbers[3]){
    console.log("first and last equsla")
}
else{
    console.log("first and last not equsla")
}
//length = אורך 
console.log(arr.length)
console.log(numbers.length)//4 
numbers.push(1000)
console.log(numbers)
console.log(numbers.length)//5 
//כמה זוגיים במערך 
let counter = 0;
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2==0){
        counter++;
    }
}
console.log("num of even is : " + counter)
// ליצור מערך ריק ולהגריל אליו 20 מספרים 
let newArr = [] 
for(let i=0;i<20;i++){
    let num = Math.floor(Math.random()*100) 
    newArr.push(num)
}
console.log(newArr)