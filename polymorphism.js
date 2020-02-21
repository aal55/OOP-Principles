class Car {
    refuel() {
        return 'Fuel tank is now full';
    }
}
class Tesla extends Car {
    refuel() {
        return 'Tesla is charged';
    }
}
let ev = new Tesla();
console.log(ev.refuel()); //Will print 'Tesla is charged' instead of 'Fuel tank is now full'
module.exports = {Car: Car, Tesla: Tesla};