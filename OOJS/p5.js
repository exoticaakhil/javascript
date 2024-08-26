//Object.defineProperty(obh,name,vale)
//is used to add a single key:value pair from externally

let user={}
Object.defineProperty(user,"name",{
    value:"Reshma"
})
Object.defineProperty(user,"age",{
    value:22
})
Object.defineProperty(user,"Mobile",{
    value:"9526000539"
})
Object.defineProperty(user,"city",{
    value:"Thrissur"
})

console.log(`user=`,user)

let car={}
Object.defineProperty(car,"carname",{
    value:"Innova"
})
Object.defineProperty(car,"Compay",{
    value:"Toyota"
})
Object.defineProperty(car,"Model",{
    value:2023
})
Object.defineProperty(car,"color",{
    value:"Grey"
})

console.log(`car=`,car)