var covid_data={
    thrissur:{total:35000,death:1000},
    ekm:{total:50000,death:2000},
    kollam:{total:6000,death:100},
 
}

//print thrissur data
console.log(covid_data.thrissur);

//print death in ekm
console.log(covid_data.ekm.death);

//add Kozhikode , total:40000, death:2000
covid_data.kozhikode={ total:40000, death:2000}
console.log(covid_data);