"use strict";
// Enums
var Directions;
(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Right"] = 2] = "Right";
    Directions[Directions["Left"] = 3] = "Left";
})(Directions || (Directions = {}));
var Dir;
(function (Dir) {
    Dir["Up"] = "Up";
    Dir["Down"] = "Down";
    Dir["Right"] = "Right";
    Dir["Left"] = "Left";
})(Dir || (Dir = {}));
let movement = Directions.Up;
console.log(movement, Dir.Right);
