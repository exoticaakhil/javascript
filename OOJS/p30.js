// super keyword
/*
       method overriding 
*/
class Course {
    constructor(ti) {
        this.title = ti;
    }
    getData() {
        return `Course is = ${this.title}`;
    }
}
class Person extends Course {
    constructor(na,title) {
        super(title);
        this.name = na;
    }
    getData() {
        document.write(`<h1> Hi, ${this.name} and ${super.getData()} </h1>`)
    }
}
let u1 = new Person("Tom","reactjs");
u1.getData();