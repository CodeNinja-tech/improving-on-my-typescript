interface PersonInterface {
  id: number
  name: string
  register(): string
}

// Classes
class Person implements PersonInterface {
  id: number
  readonly name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

const CodeNinja = new Person(1, 'TheCodeNinja')
console.log(CodeNinja.name)

// Sub Class

class Employee extends Person {
	position: string

	constructor(id: number, name: string, position: string) {
		super(id, name)
		this.position = position
	}
}

const emp = new Employee(3, 'Yoshi', 'Developer')
console.log(emp.register())