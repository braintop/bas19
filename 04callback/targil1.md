link : 
https://docs.google.com/document/d/1paflbEzKUwJ7EmNmRgs38BuASyO_6nCB/edit?usp=sharing&ouid=101406946967646274093&rtpof=true&sd=true

1. 
   function printName(){
        console.log("david)
   }

   function B(callback){
    callback()
   }

   B(printName)

2 
function nice(callback) {
	callback(42);
}

function print(num){
    console.log(num)
}

//החיבור הוא בזימון 
nice(print)
