// Interfaces
// They can only be used in complex data types like objects
interface UserInterface {
	readonly id: number
	name: string
	age?: number
}

interface MathFunc {
	(x: number, y: number): number
}

let newUser: UserInterface = {
	id: 3,
	name: 'The Code Ninja'
}

const add: MathFunc = (x: number, y: number) => x + y
const subtract: MathFunc = (a: number, b: number) => a - b
