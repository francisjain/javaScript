var product=[
    ["001","complan",275,50],
    ["002","boost",255,20],
    ["003","horlicks",225,5],
    ["004","bournvita",230,0],
    ["005","pediasure",122,10]
]

// 1    product name
var pname=product.map(item=>item[1])
console.log("1 = ",pname);

// 2    available name
var pname=product.filter(item=>item[3] !=0)
console.log("2 = ",pname);

// 3    price >250
var pname= product.filter(item=>item[2]>250)
console.log("3 = ",pname);

// 4    low cost product
var pname= product.reduce((item1,item2)=>item1<item2?item1:item2)
console.log("4 = ",pname);

// 5    items under price 200 .........???
var pname=product.filter(item=>item[2]<200)
console.log("5 = ",pname,product.item[1]);