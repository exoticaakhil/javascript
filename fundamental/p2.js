
// operators

var x=123;
var res=x + 45 + 154 + 95-14;
console.log(`product=`,res);
var a=12;
var b=32;
//a^2 +b^2
//a^2-b^2
//a^3+b^3
var res2=(((a+b)**2)-(2*a*b));
console.log(`a^2 + b^2=`,res2);
var res3=((a-b)*(a+b));
console.log(`a^2 - b^2=`,res3);
var res4=((a+b)*(a**2+b**2-a*b));
console.log(`a^3 + b^3=`,res4);

var a=4;
var b=5;
var c=6;
//(a+b+c)^2
var res5=((a+b+c)**2);
console.log(`(a+b+c)^2=`,res4);
//power values
var res=2**6;
console.log(`power`,res)
//math.pow
var res=Math.pow(2,6)
console.log(`Math.pow `,res)

//conditional statement
//BMI
//weight in kg,height in meters
var height=1.524;
var weight=50;
var bmi=weight / height**2;
console.log(`BMI=`,bmi)
if(bmi < 18.5)
{
    console.log(`Under weight`); 
}
else if(bmi >= 18.5 && bmi < 25)
{
    console.log(`Normal weight`); 
 
}
else{
    console.log(`Over weight`); 

}
//const  mark w=78
//const h=1.69
//const john w=92
//const h=1.95
const markw=78;
const markh=1.69;
const johnw=92;
const johnh=1.95;
var markres=markw/markh**2;
var johnres=johnw/johnh**2;
console.log(`NMark's BMI=`,markres); 
console.log(`John's BMI=`,johnres); 
if(markres>johnres)
{
    console.log(`Mark has higher BMI than John`); 

}
else{
    console.log(`John has higher BMI than Mark`); 

}

/* task2
    simple interest 
    compound interest

    var formula
    var pr
    var rate
    var time
*/
var pr=10000
var rate=5
var time=5
var simplei=(pr*rate*time)/100
var compi=((pr*(1+rate/100)**time)-pr)
console.log(`Simple interst`,simplei);
console.log(`Compound interest`,compi); 
/* task3
w.a.p to check the entered number is multiple of 3 and 7
*/
var num=15
if(num%3 == 0 && num%7 == 0)
{
    console.log(`The number ${num} is multiple of 3&7`); 

}
else{
    console.log(`The number ${num} is not  multiple of 3&7`); 

}


/*
switch case
switch(key){
    case name1:condition;
        break;
    .
    .
    default:
    }
*/
var day=5;
switch(day){
    case 1:     console.log(`Monday`); 
            break;
            case 2:     console.log(`Tuesday`); 
            break;
            case 3:     console.log(`Wednesday`); 
            break;
            case 4:     console.log(`Thursday`); 
            break;
            case 5:     console.log(`Friday`); 
            break;
            case 6:     console.log(`Saturday`); 
            break;
            case 7:     console.log(`Sunday`); 
            break;
        default:console.log(`Invalid`); 
}
/* task 5
switch case
key = shape name ? 4shapes
find the area of the shapes\
circle 2pi*r
rect 
*/
var shape=1;
switch(1){
    case 1 : var x=prompt("Enter your input")
                var a=Number(x);
                circarea=2*Math.PI*a;
                console.log("Area of circle",circarea)
                break;
    case 2:var x=prompt("Enter the width")
                var a=Number(x);
                var y=prompt("Enter the height")
                var b=Number(y);
                rectarea=a*b;
                console.log("Area of Rectangle",rectarea)
                break;
        default:console.log("Invalid choice")
}






