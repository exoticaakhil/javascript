class SuperClass {
    // Superclass constructor
    constructor() {
        this.name = "john";
    }

    getName() {
        return this.name;
    }
}

class Base extends SuperClass {
    constructor() {
        // Call the superclass constructor
        super();
    }
}

// Example usage
const x = new Base();
console.log(x.getName()); 
console.log(x.name); 
