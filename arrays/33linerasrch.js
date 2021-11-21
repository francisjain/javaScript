// search 

var arr=[10,11,12,13,14]
var element=102;
var flag=0;
for(let i of arr){
    if(i==element){
        flag=1;
        break;
    }
}
console.log(flag==0?"not found":"found");