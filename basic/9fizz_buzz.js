var num=25;

// if(num % 15 == 0 )    {console.log("fizzbuzz");}
// else if(num%5==0)     {console.log("buzz");}
// else if(num%3==0)     {console.log("fizz");}


// ------method2-------

// var res="";

// if(num % 3==0){
//     res+="fizz"
// }
// if(num % 5==0){
//     res+="buzz"
// }
// console.log(res);


console.log(num % 15 == 0 ? "fizz buzz" : num % 5 == 0 ? "buzz" : num % 3 == 0 ? "fizz": "invalide");