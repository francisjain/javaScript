// print the arr=[2,3,4] into [7,6,5] || [4,3,5]=[8,9,7]
var arr=[4,3,5]
sum=arr[0]+arr[1]+arr[2]
arr[0]=sum-arr[0]
arr[1]=sum-arr[1]
arr[2]=sum-arr[2]

console.log(arr);