type User = {
	id: number
	name: string
}

const user: User = {
	id: 1,
	name: 'The Code Ninja'
}

// Type Assertion
let cid: any = 1
let customerId = <number>cid

type Point = number | string
const p1 = 8