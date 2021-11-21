//Print add pgm using Spread Operator
function smartAdd(...args){
    return args.reduce((n1,n2)=>n1+n2)
}
console.log(smartAdd(10,20,40,10));
console.log(smartAdd(10,20,40));

//Print highest value using Spread Operator
function smartMax(...args){
    return args.reduce((n1,n2)=>n1>n2?n1:n2)
}
console.log(smartMax(10,20,40,10));