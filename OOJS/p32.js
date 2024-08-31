// encapsulation
// Accessor property (get abd set)
class User {
    constructor() {
    // alias
    this._name = []
    }
    // assign the value to alias property
    set name(val) {
        this._name.push(val)
    }
    // get is used return the value
    get name() {
        return this._name[this._name.length - 1]
    }
}
let u1 = new User();
u1.name = Tom
console.log(`name =`, u1.name)

u1.name = Sam
console.log(`name =`, u1.name)

u1.name = John
console.log(`name =`, u1.name)