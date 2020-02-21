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
console.log(ev.refuel());
module.exports = {Car: Car, Tesla: Tesla};
