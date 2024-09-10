// singleton class expression // Anonymous class

const emp = new class {
    constructor(a,b) {
        this.name =a;
        this.email =b;
    }

    empInfo(){
        return this.name + "and email =" + this.email;
    }
}("John", "john@gmail.com")

console.log(`info =`, emp.empInfo())

// non parameter singleton class expression
const pr = new class {
    constructor(){
        this.a = 12;
        this.b = 33;
    }
    product(){
        return this.a * this.b;
    }
}();

console.log(`pr=`,pr.product())