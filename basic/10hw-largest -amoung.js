
//Question-1...... Print largest amoung this three numbers.....

var num1 = 10, num2 = 20, num3 = 5;

if ((num1 > num2) && (num1 > num3)) { console.log(num1); }
else if (num2 > num3) { console.log(num2); }
else { console.log(num3); }

console.log((num1 > num2) && (num1 > num3) ? num1 : num2 > num3 ? num2 : num3);

// Question-2 .......Print the second largest number from these three number.........

if ((num1 > num2) && (num1 > num3)) {
    if (num2 > num3) { console.log(num2); }
    else { console.log(num3); }
}
else if (num2 > num1 && num2 > num3) {
    if (num1 > num3) { console.log(num1); }
    else { console.log(num3); }
}
else if (num1 > num2) { console.log(num1); }
else { console.log(num2); }

console.log((num1 > num2) && (num1 > num3) ? num2 > num3 ? num2 : num3 : (num2 > num1) && (num2 > num3) ? num1 > num3 ? num1 : num3 : num1 > num2 ? num1 : num2);


// Question-3 ........Lowest in three number....

if ((num1 > num2) && (num1 > num3)) {
    if (num2 > num3) { console.log(num3); }
    else { console.log(num2); }
}
else if (num2 > num1 && num2 > num3) {
    if (num1 > num3) { console.log(num3); }
    else { console.log(num1); }
}
else if (num1 > num2) { console.log(num2); }
else { console.log(num1); }

console.log((num1 > num2) && (num1 > num3) ? num2 > num3 ? num3 : num2 : (num2 > num1) && (num2 > num3) ? num1 > num3 ? num3 : num1 : num1 > num2 ? num2 : num1);

// Question-4 ........sort 3 numbers without function...

if ((num1 > num2) && (num1 > num3)) {
    if (num2 > num3) { console.log(num1, num2, num3); }
    else { console.log(num1, num3, num2); }
}
else if (num2 > num1 && num2 > num3) {
    if (num1 > num3) { console.log(num2, num1, num3); }
    else { console.log(num2, num3, num1); }
}
else if (num1 > num2) { console.log(num3, num1, num2); }
else { console.log(num3, num2, num1); }

console.log(num1 > num2 && num1 > num3 ?
     num2 > num3 ? (`${num3},${num2},${num1}`) : (`${num2},${num3},${num1}`) :
      num2 > num1 && num2 > num3 ? 
      num1 > num2 ? (`${num3},${num1},${num2}`) : (`${num1},${num3},${num2}`) : 
      num1 > num2 ? 
      (`${num2},${num1},${num3}`) : (`${num1},${num2},${num3}`));

