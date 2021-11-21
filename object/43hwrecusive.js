var txt="ABAC";

var finder={}
for(let char of txt){
    if(char in finder ){
        console.log(char,"This is the 1st recusive char");
        break;
    }
    else{
        finder[char]=1
    }
}

