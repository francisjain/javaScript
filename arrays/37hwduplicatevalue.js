var arr=[1,2,3,4,5,3,6,2]
var low=0,upp=arr.length-1;

// for(let i=0; i<arr.length; i++){

//     for(let j=i+1; j<arr.length; j++){
//         if(i!==j){
//             if(arr[i]==arr[j]){
//                 console.log(arr[i]);
            
//             }
//         }
//     }

// }

var  dup= arr.filter(num=>num==num)
console.log(dup);

