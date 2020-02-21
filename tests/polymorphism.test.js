const polymorphism = require('../polymorphism');

test('tesla.refuel() should return "Tesla is charged"', () => {
    let tesla = new polymorphism.Tesla;
    expect(tesla.refuel()).toBe('Tesla is charged');
});

test('car.refuel() should return "Fuel tank is now full"', () => {
    let car = new polymorphism.Car;
    expect(car.refuel()).toBe('Fuel tank is now full');
});