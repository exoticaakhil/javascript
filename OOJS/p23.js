//static methods
/*
    1.declare the static method inside the class body using static
    2.statice methods can't called using instance of class
    3.static methods can be called using name of class
    4."this"  pointer is in accessible inside the static methods*/
    class Car{
        constructor(title,compay,type,color){
            this.title=title;
            this.compay=compay;
            this.type=type;
            this.color=color;
        }
        getCarName(){
            return "car name is "+this.title;
        }
        static getCarColor(){
            return "car color is "+this.color
        }
    
     }
      let x=new Car("Innova","toyota","diesel","white");
      document.write(`<h1> ${x.getCarName()}</h1>`);
      console.log(`static method`,Car.getCarColor())