// Singleton objects

const animal = {
    makeSound() {
        return `${this.name} makes a sound`;
    }
};
// Create a new object with 'animal' as its prototype
const dog = Object.create(animal);

// Add properties to the new object
dog.name = 'Dog';

dog.puch = { name: "kala" }
    // console.log(dog);
    // console.log(dog.makeSound()); // Output: "Dog makes a sound"
    // console.log(Object.getPrototypeOf(dog) === ); //



// object literals  
sym = Symbol("TopClass");
person = {
    name: "vicky",
    class: {
        top: "verygood",
            balance: [1, 3, 5],
            remind: "top"
    },
    top: function() {
        console.log(`He is ${this.name}`)
    },
    [sym]: "symbol",
    "hoppy name": "fight"
}

// myname = person.class ? .top;
// console.log(myname)

// console.log(typeof person[symbol]);
// console.log(typeof person[sym]);
// person[top()];  //error top is not defined
// console.log(person["hoppy name"])
// console.log(person["name"]) //correct
// console.log(person["class"]) //correct

// console.log(person)

// Object.freeze(person)
// person.name = "Lucky";
// console.log(person["name"])


person.bottom = function() {
    console.log(`this is ${this.name}`)
}

// console.log(person.bottom)
// console.log(person.bottom())
// person.bottom()


keys = Object.keys(person)
values = Object.values(person)
    // console.log(keys)
    // console.log(values)

obj3 = {...dog, ...person }
console.log(obj3)