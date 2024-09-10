//generators function
/*

generator is function that returns iterator.
 Generator functions are indicated by an astrisk (*).
 after the function keyword and use the new yield keyword

*/
function *display(){
    yield "red";
    yield "white";
    yield "black ";
    yield "orange";

 }
//  console.log(call=,display())

//  generators are called the regular function but return an iterator
 let out =display()
//  console.log('first item=',out.next().value) //red
//  console.log('second item=',out.next().value) //white
//  console.log('third item=',out.next().value) //black
//  console.log('fourth item=',out.next().value) //orange


console.log('first item=',out.next()) //{value:"red",done:false}
console.log('second item=',out.next()) //{value:"white",done:false}
console.log('third item=',out.next()) //{value:"black ",done:false}
console.log('fourth item=',out.next()) //{value:"orange",done:false}
console.log('fifth item=',out.next()) //{value:undefined,done:true}