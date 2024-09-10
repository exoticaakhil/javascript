let user =[
    {
        id: 1,
        name: "John"
    },
    {
        id: 2,
        name: "Harry"
    }
]

let emp = [
    {
        id: 11,
        name:"Micheal"
    },
    {
        id:14,
        name: "sara"
    },
    {
        id: 35,
        name: "tom"
    }
]

let user1 =[
    {
        id: 24,
        name: "sam"
    }
]

let res = [...user,...user1,...emp]

console.log(`user =`,user)
console.log(`user1 =`,user1)
console.log(`emp =`,emp)
console.log(`res =`,res)