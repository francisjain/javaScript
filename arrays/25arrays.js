
//PRINT 1st number
var expenses = [2000, 3000, 4000]
console.log(expenses[0]);

//print feb expenses with current exp -200
expenses[1] -= 200
console.log(expenses);

//print line by line display
for (i = 0; i < expenses.length; i++) {
    console.log(expenses[i]);
}
//Second Method
for (let num of expenses) { console.log(num); }