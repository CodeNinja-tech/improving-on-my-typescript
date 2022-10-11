const addNum = (x: number, y: number): number => {
	return x + y
}

const log = (msg: string | number): void => {
	console.log(msg)
}

console.log(addNum(1, 2))
log('Hello')