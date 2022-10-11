// Enums
enum Directions {
	Up,
	Down,
	Right, 
	Left
}

enum Dir {
	Up = 'Up',
	Down = 'Down',
	Right = 'Right',
	Left = 'Left'
}

let movement = Directions.Up
console.log(movement, Dir.Right)