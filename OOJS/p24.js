class Product{
    constructor(a,b){

        this.a=a;
        this.b=b;
    }
    static calculate(obj){
        console.log(`obj=`,obj)
        document.write(`<h1>product=${obj.a * obj.b}</h1>`)
    }
}
let num=new Product(10,20)
Product.calculate(num)