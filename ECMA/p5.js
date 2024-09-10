// default parameter in function

function product(x,y=3){
    return x*y;
}
console.log(`product =`,product(10))/*NaN*/
console.log(`product =`,product(10,12)) /*120*/