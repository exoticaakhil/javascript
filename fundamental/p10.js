var color =new Array();
console.log('colors=',color)
// assignment
color[0]="red";
color[1]="blue";
color[2]="green";
console.log(`after assignment=`, color)
var tech= new Array("html" ,"css","js","react")
console.log(`tech =`, tech)
// object
var person={}
 console.log(`person empty =`,person)
 var car={
    title:"Mahindra Thar",
    make: 2024,
    color:"red"
 }
 console.log(`car =`,car)
 document.write(`<h1>${car}</h1>`)
 document.write(`<h1>${car.title}</h1>`)
 document.write(`<h1>${car["make"]}</h1>`)
 var cars = [
    {
        title:"Mahindra thar",
        make:2023
    },
    {
        title:"Toyota Etios",
        make:2024
    },
    {
        title:"Maruthi swift",
        make:2022
    }
]
console.log(`cars =`,cars);
cars.forEach(function(item,index){
    document.write(`<h3>${index} ${item.title}</h3>`)
    document.write(`<h3>${item.make}</h3>`)
})
