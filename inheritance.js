class Animal {
    move(steps) {
        return 'moved ' + steps + ' steps';
    }
}
class Dog extends Animal {
    bark() {
        return 'Bark!';
    }
}
let doggo = new Dog();
console.log('Doggo ' + doggo.move(5)); //Dog inherits move method from the Animal class
console.log(doggo.bark());
module.exports = {Animal: Animal, Dog: Dog};