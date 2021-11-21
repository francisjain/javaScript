//Print arr=[1,2,3,4] // print pair(3,4) of sum=7

var arr=[1,2,3,4]
var sum=7
count=0
for(let i=0;i<arr.length;i++){
    for (let j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==sum){
            console.log(`${arr[i]},${arr[j]}`);
            break;
        }
        count++
    }
}
console.log(count);