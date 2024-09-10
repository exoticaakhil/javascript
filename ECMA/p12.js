// generator inside the class 

class Person{
    *getPersons() {
        yield "tom"
        yield "mac"
        yield "sam"
        yield "kine"
    }
}

let x = new Person()

for(let item of x.getPersons()){
    console.log(`name is=`,item)
}
class Tech{
    constructor(){
        this.course = []
    }
    *retriveCourses(){
        yield *this.course.values()
    }
}

let y = new Tech()

y.course.push("HTML")
y.course.push("CSS")
y.course.push("javascript")
y.course.push("python")

for(let item of y.retriveCourses()){
    console.log(item)
}