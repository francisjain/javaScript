// 1     reduce //sum

var arr=[2,6,7,3,4,5,8,9,10]
var sum=arr.reduce((num1,num2)=>num1+num2)
console.log(sum);

//2.    highest number

var high= arr.reduce((num1,num2)=>num1>num2?num1:num2)
console.log(high);

//3.    lowest number

var low= arr.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(low);