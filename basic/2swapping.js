var num1=10;
var num2=20;

// before swapping
console.log(`numbers b4 swapping num1=${num1} and num2=${num2}`);

//after swapping --logic1---
// var temp=num1;
// num1=num2;
// num2=temp;

// console.log(`numbers b4 swapping num1=${num1} and num2=${num2}`);



//after swapping --logic2---
num1=num1+num2;
num1=num1-num2;
num2=num1+num1;

console.log(`numbers b4 swapping num1=${num1} and num2=${num2}`);
