var cube = num => num ** 3
console.log(cube(3));


var maxTwo = (num1, num2) => num1 > num2 ? num1 : num2
console.log(maxTwo(12, 4));

var isEven = num => num % 2 == 0 ? true : false
console.log(isEven(5));

var smartSub = (num1, num2) => num1 > num2 ? num1 - num2 : num2 - num1
console.log(smartSub(5, 7));

var isStartWithA = name => name[0] == "a" || name[0] == "A" ? true : false
console.log(isStartWithA("ain"));