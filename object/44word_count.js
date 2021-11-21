var student={
    name:"ajay",
    total:140,
    course:"PHP"
}

for(let key in student){
    console.log(key,student[key]);
    // console.log(student[key]);
}

//Print word count
var text="hello hai how are hello"
var words=text.split(" ")

var word_count={}

// for (let word of words){
//     if (word in word_count){
//         word_count[word] +=1
//     }
//     else{
//         word_count[word] =1
//     }
// }
// console.log(word_count);

text.split(" ").map(word=>word in word_count? word_count[word] +=1 :  word_count[word] =1 )
console.log(word_count);