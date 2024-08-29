class Course{
    constructor(){
        console.log('constructor called')
    }
    getTitle(){
    document.write(`<h1>title = ${this.title}</h1>`)
    }
    static details(a,b){
        document.write(`<h1> title ==${a} and duration is ${b}</h1>`)
    
    }   
}
Course.details("React","1 month")
let x =new Course()