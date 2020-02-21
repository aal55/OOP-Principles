# Object Oriented Programming Principles
[![Build Status](https://travis-ci.com/aal55/oop-principles.svg?branch=master)](https://travis-ci.com/aal55/oop-principles)
## Background Information
In simple terms, Object Oriented Programming (OOP) is a type of programming that involves the manipulation of objects. OOP is usually defined by four main traits: *Encapsulation*, *Abstraction*, *Inheritance*, and *Polymorphism*. Some well-known OOP languages include Java, Python, and Ruby. However, even a popular programming language such as JavaScript can now effectively mimic the main attributes of OOP. In this project, I will demonstrate how JavaScript incorporates the main principles of OOP.
## Encapsulation
Encapsulation occurs when there is at least one field or object in a program that other components do not have access to.
```javascript
var x = "unchanged";
function encap(placeholder) {
    var x = placeholder;
    return x; //Should return whatever placeholder is
}
console.log(x); //Should still print out "unchanged"
```
In the code block directly above, we have a variable `x` that holds the value `unchanged` alongside a function with a parameter `placeholder` that declares its own variable `x` that is equal to `placeholder`. As a first taste of encapsulation, nothing outside of the function is able to access `placeholder`. Furthermore, the variable `x` that was defined outside of the function has no relation to the hidden variable `x` inside the function. Essentially, as long as there is information hiding involved in a piece of code, then that indicates that encapsulation is present.
## Abstraction
Abstraction is a concept that can be viewed as an offshoot of encapsulation. In OOP, abstraction can be viewed as hiding the complicated behind-the-scenes information from the client(s).
```javascript
function person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;

    return "Name: " + name + ", Age: " + age + ", Job: " + job;
}
console.log(person("Aaron", 19, "Student")); //Client doesn't see inner workings
```
In this code example, we have a function `person` with parameters `name`, `age`, and `job`. This function assigns each parameter to a variable of the same name and returns a description of the person. Outside of the function, we `console.log` the function with personal inputted parameters and get what the function is supposed to return. Most importantly, the inner workings of the function are completely unknown on the outside. Without looking at the inside of the function, it is almost impossible to pinpoint how everything in the function was implemented. Thus, by concealing details in a function, we have successfully implemented abstraction in JavaScript.
## Inheritance
Inheritance is a key feature in OOP where you have a parent class passing down its methods to at least one child class. The child class can then use whatever methods the parent had alongside any methods that the child carries.
```javascript
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
```
For this code example, we have a class `Animal` with one method `move`. Directly below, we have another class `Dog` which inherits from `Animal`. As such, `Dog` has access to the parent defined `move` as well as its own `bark` method. By instantiating a `Dog` object, we can use both `move` and `bark` as shown in the example without any issue. By establishing a parent-child relationship in the code example, we can safely say that inheritance is perfectly possible in JavaScript.
## Polymorphism
Polymorphism is a process in which any child that has inherited from a parent class can create their own version of an inherited method.
```JavaScript
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
```
In this last code example, we have a class `Car` which has one method `refuel`, and another class `Tesla` that inherits from `Car` with the same method `refuel`. While the `refuel` method in `Car` would return *Fuel tank is now full*, the other `refuel` method over in `Tesla` would return *Tesla is charged*. After instantiating a Tesla object below, invoking its own refuel method will print *Tesla is charged* instead of the other return message in the parent class. By these standards, we have achieved method overring, which means that JavaScript polymorphism is possible as well.
