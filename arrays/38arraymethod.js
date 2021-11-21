// var arr=[1,2,3,4]
// var cube=[];
// for(let num of arr){
//     cube.push((num**3))
// }
// console.log(cube);


// var arr=[2,3,4,5]
// var op=[]

// for(let num of arr){
//     if(num<5){
//         op.push((num-1))
//     }
//     else if(num>5){
//         op.push((num+1))
//     }
//     else{
//         op.push((num))
//     }
// }
// console.log(op);


// var arr=[2,3,4,5]

// var sq=arr.map(num=>num**2)
// var cube=arr.map(num=>num**3)
// console.log(sq);
// console.log(cube);

// var mapout=arr.map(num=>num<5?num-1:num>5?num+1:num)
// console.log(mapout);


var text="hai hello good mrng"
var words=text.split(" ")
for(let word of words){
    console.log(word.toUpperCase());
}
var upp_words=text.split(" ").map(word=>word.toUpperCase())
console.log(upp_words);


var arr=[2,6,4,7,5,4]
//even number
var even=arr.filter(num=>num%2==0)
console.log(even);
//greater than 5
var grt5=arr.filter(num=>num>5)
console.log(grt5);
//print squers of all numbers greater than 5
 var sqr= arr.filter(num=>num>5).map(num=>num**2)
 console.log(sqr);

 var sqrbt5= arr.filter(num=>(num>5) & (num<5)).map(num=>num**2)
 console.log(sqrbt5);

