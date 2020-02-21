function person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;

    return "Name: " + name + ", Age: " + age + ", Job: " + job;
}
console.log(person("Aaron", 19, "Student")); //Client doesn't see inner workings
module.exports = person;
