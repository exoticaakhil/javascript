//Object.getPrototypeOf() and setPrototypeOf()

let car={
    title:"Innova",
    company:"toyota",
    model:2024,
    color:"white"
}

let car1=Object.create(car)
console.log(`car`,car)
console.log(`car1`,car1)

let car2=Object.getPrototypeOf(car1)
console.log(`getprototype=`,car2)

//to update new set of property to the cloned object
let car3=Object.setPrototypeOf(car1,{
    title:"thar",
    company:"mahindra",
    model:2023,
    color:"red"
})

console.log(`car3=`,car3)
let car4=Object.getPrototypeOf(car1)
console.log(`getprototype=`,car4)