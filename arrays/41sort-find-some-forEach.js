//------------sort---------------

var arr=[2,5,6,4,7,10]
 arr.sort((num1,num2)=>num1-num2)
 console.log("1 = ",arr);

 var employees=[
    [1000,"ram","developer",25000,1990,2005],
    [1001,"ravi","developer",26000,2000,2003],
    [1002,"raju","ba",27000,1995,2005],
    [1003,"nikil","mrkt",24000,2000,2007]

]

// 2    print sorted employees based on salary order
var sname=employees.sort((emp1,emp2)=>emp1[3]-emp2[3])
console.log("2 = ",sname);

//--------------------sort--------------------------//

//--------------------find-------------------------//

// 3    find details of employee named=ravi
var named=employees.find(emp=>emp[1]=="ravi")
console.log("3 = ",named);

//--------------------find-------------------------//

//--------------------SORT-------------------------//

// 4    is there any emp wrking as developer
var named=employees.some(emp=>emp[2]=="developer")
console.log("4 = ",named);
// 5    is there any emp whose exp is > 15
var named=employees.some(emp=>(emp[5]-emp[4])>15)
console.log("5 = ",named);

//--------------------SORT-------------------------//

//--------------------foeEach-------------------------//

// 6    all details in emp
employees.forEach(emp=>console.log("6 = ",emp))
// 7   all name in emp
employees.forEach(emp=>console.log("7 = ",emp[1]))



//--------------------foeEach-------------------------//