"use strict";
// Classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const CodeNinja = new Person(1, 'TheCodeNinja');
console.log(CodeNinja.name);
// Sub Class
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Yoshi', 'Developer');
console.log(emp.register());
