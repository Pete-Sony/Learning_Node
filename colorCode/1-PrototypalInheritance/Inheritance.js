class Person {
    talk() {
        return "Talking"

    }
}


const you = new Person;
const me = new Person;

// console.log(you.talk())
// console.log(me.talk())
console.log(Person.prototype)
console.log(me._proto_)
