const Mandem = {
    Mood() {
        return 'Vibing';
    }
}
class MandemNew  {
    Mood() {
        return 'Vibing';
    }
}
// Inheritance Method 1. This is the only method that creates constructor.
const John = new MandemNew();
// Inheritance Method 2
const David = Object.create(Mandem)
// Inheritance Method 3
const Bob = {};
Object.setPrototypeOf(Bob,Mandem)
John.Mood();
David.Mood();
Bob.Mood();