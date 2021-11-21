var dataset=[
    {district:"palakad",tempurature:30},
    {district:"tvm",tempurature:31},
    {district:"palakad",tempurature:31},
    {district:"tvm",tempurature:29},
]
// var n=dataset.map(dis=>dis.district)
// console.log(n);

//print Weather = {"palakad":31,"tvm":31}

var weather ={}

for(let data of dataset){
    let Place_name=data.district;
    let cur_temp=data.tempurature;
    if( Place_name in weather){
        let old_temp=weather[Place_name];
        if(cur_temp>old_temp){
            weather[Place_name]=cur_temp
        }
    }
    else{
        weather[Place_name]=cur_temp
    }
}
console.log(weather);

