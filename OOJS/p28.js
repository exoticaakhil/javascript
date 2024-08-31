// class inheritance

class Course {
    constructor() {
        this.title = "React";
        this.duration = 2 ;
    }
    getCourseInfo() {
        document.write(<h1> course title ${this.title} and duration is ${this.duration} months. </h1>)
    }
}
// base class
class Person extends Course {
    constructor(name, age) {
        super();
        this.name = "John";
    }
    getPerson() {
        document.write(`<h1> person name is ${this.name} </h1>`)
    }
}

// instance
let p1 = new Person();
p1.getPerson();
 p1.getCourseInfo();