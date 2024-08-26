//array
/*
    group of values not mandatory to be similer data type

    types
    1. single
        a. literal array
        b. using Array constructor
        c. Array constructor
    2. object array -> group of objects
        single objects is group of key and value pairs -> property of an object
        { key:"value" }
    3. json array(response from REST API)
        javascript object notation
        {"key":"value"}
*/
// single (literal type)
var users= ["john","mike","tom","jerry"]
console.log(users)
users.forEach(function(item,index){
    document.write(`<h1>${index} ${item}</h1>`)
})
for(let i=0; i<users.length;i++){
    document.write(`<h3>${i} ${users[i]}</h3>`)
}

document.write(`<h3>users[index] ${users[2]}</h3>`)
let i=0;
while(i<users.length){
    document.write(`<h3>${i} ${users[i]}</h3>`)
    i++;
}