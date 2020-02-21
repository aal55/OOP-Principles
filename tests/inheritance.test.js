const inheritance = require('../inheritance');

test('Dog should move 10 steps', () => {
    let dog = new inheritance.Dog;
    expect(dog.move(10)).toBe('moved 10 steps');
});

test('Dog should bark', () => {
    let dog = new inheritance.Dog;
    expect(dog.bark()).toBe('Bark!');
});