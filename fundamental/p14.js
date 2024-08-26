function sum(){
    let x=12;
    let y=24;
    document.write(`<h1>sum of 2 numbers = ${x+y}</h1>`)
}

var product = function(){
        let a=123;
        let b=4;
        document.write(`<h1>product of 2 numbers = ${a*b}</h1>`)
    }

var rem = () => {
            let x = 23;
            let y = 7;
            document.write(`<h1>the remainder of 2 numbers = ${x%y}</h1>`)
        }
        


var remBtn = document.getElementById("rem");

remBtn.addEventListener("click",function() {
    let x = 1246;
    let y= 55;
    document.write(`<h1> remainder is = ${x%y}</h1>`)
})