//sorted arrays Second Method of pair(3,4) when sum=7

var arr=[4,7,2,3]
arr.sort((num1,num2)=>num1-num2)
var sum=6;
var low=0,upp=arr.length-1;
while (low<upp) {
    let total=arr[low]+arr[upp]
    if(total==sum){
        console.log(`${arr[low]},${arr[upp]}`);
        break;
    }
    else if(total>sum){
        upp-=1;
    }
    else if(total<sum){
        low+=1;
    }
    
}