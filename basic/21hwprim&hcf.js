var num1=30,num2=50;

//------Prime number b/t 2nos----!!!!

for(let i=num1;i<=num2;i++){
    let flag=0;
    for(let j=2; j<i; j++){
        
        if(i%j==0){
            flag=1;
            break;
        }
    }
    if(flag==0){console.log(i);} 
}

//-----HCF------!!!!

var res="" 
for (let i = 1; i <= num1 && i <= num2; i++) {
       
    if( num1 % i == 0 && num2 % i == 0) {
        res = i;
    }
}
console.log(`hcf of those two number ${res}`);


