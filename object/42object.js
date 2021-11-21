var student={
    name:"ram",
    age:25,
    course:"PHP"
}
// 1    student name
console.log(student["name"]);
console.log(student.name , student.course);

// 2    update as MEARN
student.course="MEARN"
console.log(student);

// 3    update age 30
student.age=30;
console.log(student);

// 4    add new key
student.gender="male"
console.log(student);

// 5    check roll.no exist
console.log("roll.no" in student);

// 6    chk roll.no exist  if yes add value in current roll.no+1 if no add key value as roll.no
if("roll.no" in student){student.roll +=1 }
else{student.roll=1}
console.log(student);