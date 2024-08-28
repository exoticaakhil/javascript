// prototype keyword
// used to add properties to the constructors externally

function Car(){

}

// constructor.prototype.property = value;

Car.prototype.title = "Innova"
Car.prototype.color = "White";
Car.prototype.year = 2024;

Car.prototype.getCarInfo = function(){
    document.write(`<h1> car is ${this.title}, color is ${this.color} and year is ${this.year}</h1>`)
}

let x = new Car();
x.getCarInfo()

console.log(`title =`,x.title)

console.log(`color =`,x.color)

console.log(`year =`,x.year)