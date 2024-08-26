var keys = document.querySelectorAll(" .key ")
var inTxt = document.querySelector(".in")
var outTxt = document.querySelector(".out")
console.log("all keys =",keys)
for(let item of keys){
    item.addEventListener("click",function (event) {
        console.log("value =",event.target.innerText)
        
        let inVal = event.target.innerText
        if(inVal ==="CE"){
            inTxt.innerText ="0"
            outTxt.innerText="0"
        }else if(inVal ==="C"){
            inTxt.innerText ="0"
        }else if(inVal === "BS"){
            
            let x = inTxt.innerText.slice(0,-1)
            inTxt.textContent =x;
        }else if(inVal === "="){
            let res = eval(inTxt.innerText)
            outTxt.innerText = res
        }else{
            inTxt.textContent += inVal
        }
        
    });
}