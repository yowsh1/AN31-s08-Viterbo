/*
	IF whatever condition you are checking returns true then the next block of code will run
*/

let candies= 80;

if (candies >= 100){
	console.log("You got a cavity");
}else if (candies >= 95){
	console.log("You almost got a cavity")
}else if (candies >= 75){
	console.log("You should eat less candy")
}else{
	console.log("You have no cavity")
}

// ternary operator (short hand ways) represents a condition that returns value that you can use to assign a variable

let number= 25;
let isEven = (number % 2 === 0 ) ?"yes" : "no";

console.log(isEven)

