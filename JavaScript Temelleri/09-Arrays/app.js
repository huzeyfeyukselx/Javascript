let value;

//(1)
const numberArray1 = new Array(1,2,3,4,5,6,7,8,9);
//(2)
const numberArray2 = [1,2,3,4,5,6,7,8,9];
 
const language = ["Python","C++","C#","JavaScript"];
const values = ["Python", true,58,null,undefined];

value=numberArray1.length; 
console.log(value); // out : 9

value=numberArray1[0]; 
console.log(value); // out : 1

numberArray1[numberArray1.length-1]=1000;
// [1,2,3,4,5,6,7,8,1000]
value=numberArray1[8]; 
console.log(value); // out : 1000

value=numberArray1.indexOf(1000); 
console.log(value); // out : 8

numberArray1.push(2000);
// [1,2,3,4,5,6,7,8,1000,2000]
value=numberArray1[numberArray1.length-1];
console.log(value); // out : 2000

numberArray1.pop();
// [1,2,3,4,5,6,7,8,1000]
value=numberArray1[numberArray1.length-1];
console.log(value); // out : 1000

numberArray1.unshift(300);
// [300,1,2,3,4,5,6,7,8,1000]
value=numberArray1[0];
console.log(value); // out : 300

numberArray1.shift();
// [1,2,3,4,5,6,7,8,1000]
value=numberArray1[0];
console.log(value); // out : 1


