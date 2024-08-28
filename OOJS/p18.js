//methods inside parameterised constructor

function Sum(a,b){
    this.x=a;
    this.y=b;
    this.calc=function(){
        return this.x+this.y
    }

}
let p=new Sum(10,20)
document.write(`<h1> Sum =${p.calc()}</h1>`)