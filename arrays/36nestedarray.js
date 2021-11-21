
var employees=[
    [1000,"ram","developer",25000,1990,2005],
    [1001,"ravi","developer",26000,2000,2003],
    [1002,"raju","ba",27000,1995,2005],
    [1003,"nikil","mrkt",24000,2000,2007]

]

// 1..add 2000
var salary=employees.map(emp=>emp[3]+2000)
console.log(`1.${salary}`);


// 2    print the highest paid employees

var high=employees.reduce((emp1,emp2)=>emp1[3]>emp2[3]?emp1:emp2)
console.log("2.=",high);

// 3    print the lowest paid employees
var low=employees.reduce((emp1,emp2)=>emp1[3]<emp2[3]?emp1:emp2)
console.log("3... = ",low);

// 4    print most experienced employees
var person=employees.map(emp=>emp[5]-emp[4]).reduce((exp1,exp2)=>exp1>exp2?exp1:exp2)
console.log("4... = ",person);



// 5     print name of employees
for(let emp of employees){
    console.log("5... = ",emp[1]);
}
var emp_name=employees.map(emp=>emp[1])
console.log("5... = ",emp_name);

// 6     print the details of developer
for(let emp of employees){
    if (emp[2]=="developer"){
        console.log("6... = ",emp);
    }
}

// 7    Print the emp_name exp of the employees
for(let emp of employees){
    exp = emp[5]-emp[4];
    console.log(`7... = ${emp[1]} and exp= ${exp}`);
}
var emp_exp=employees.map(emp=>[emp[5]-emp[4],emp[1]])
console.log("7... = ",emp_exp);



// 8    print details of employees whose salary > 25000
for(let emp of employees){
    if (emp[3]>25000){
        console.log("8... = ",emp);
    }
}
var sal_gt=employees.filter(emp=>emp[3]>25000)
console.log("8... = ",sal_gt);

// 9    print details of developer who is taking > 25000
var dev_gt=employees.filter(emp=>emp[2]=="developer" & emp[3] > 25000)
console.log("9... = ",dev_gt);

// 10   print employees details whose exp > 5 year filter()

var ex_gt_5= employees.filter(emp=> (emp[5]-emp[4])>5)
console.log("10... = ",ex_gt_5);

// 11   print exp of emp alone with name

var name=employees.map(emp=>[(emp[5]-emp[4]),emp[1]])
console.log("11 = ",name);