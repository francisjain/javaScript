var arr = [10, 20, 30, 40];
var arr1 = [20, 30, 40, 41];

arr.sort((num1,num2)=>num1-num2)
arr1.sort((num1,num2)=>num1-num2)

var p1=0,p2=0;

while (p1<arr.length && p2<arr1.length) {
    if(arr[p1]==arr1[p2]){
        console.log(arr1[p2]);
        p1++;
        p2++;
    }
    else if (arr[p1]<arr1[p2]){
        p1++
    }
    else if (arr[p1]>arr1[p2]){
        p2++
    }
    
}


//var count=0;

// for (let i of arr) {
//     for (let j of arr1) {

//         if (i == j) { console.log(i); }

        //count ++;
//     }
// }
// console.log(count);



