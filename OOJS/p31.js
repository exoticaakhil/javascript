// method overload

class Sum {
    constructor(a,b) {
        this.a = a;
        this.b = b;
    }
    calculate(c) {
        return this.a + this.b + c;
    }
}
class Mathex extends Sum {
    constructor(p,q,r) {
        super(p,q);
        this.c = r;
        
    }
    calculate(c,d,e) {
        return `${this.calculate(this.c)}` + d + e;
    }
}
let x1 = new Mathex(1,2,3);
document.write(`<h1> sum = ${x1.calculate(4,5)} </h1>`)