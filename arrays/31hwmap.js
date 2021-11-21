//Print arr=[4,6,5,2,3] into [3,7,5,1,4] ie num>5=num+1 & num<5=num-1

arr=[4,6,5,2,3]
for(let num of arr){
    if(num>5){num=num+1}
    else if(num<5){num=num-1}
    else{num}
    console.log(num);
}
    
