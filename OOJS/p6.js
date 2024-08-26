//Object.defineProperties()
//can add method also
// object.defineProperties()

let user = {}

Object.defineProperties(user, {
    name: {
        value: "Mike"
    },
    city: {
        value: "New York"
    },
    getName: {
        value: function() {
            return `<h1>name is ${this.name}</h1>`
        }
    },
    getEmail: {
        value: () => {
            document.write(`<h1>email id is = ${this.email}</h1>`)
        }
    }
})

console.log(`user =`,user)
document.write(user.getName())

user.getEmail()