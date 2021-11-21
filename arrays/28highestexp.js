// Print highest expenses
var expenses=[100,200,300,400]
var high=expenses[0]
for(let exp of expenses){
    if(exp>high){high=exp}
}
console.log(high);