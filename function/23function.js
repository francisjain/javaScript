// function isEven(num){
//     // if(num%2==0){
//     //     return true;
//     // }
//     // else{
//     //     return false;
//     // }

//     return num%2==0?true:false
// }

// console.log(isEven(5));



function smartSub(num1,num2){

    if(num1>num2){
        return num1-num2;
    }
    else {
        return num2-num1;
    }
}

console.log(smartSub(5,6));




function isStartWithA(name){

    name = name.toLowerCase()

    return name[0]=="a"?true:false;

}

console.log(isStartWithA("Ain"));