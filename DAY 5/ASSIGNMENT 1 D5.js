let num = parseInt(prompt("Enter a positive number"));

let arr = [];

for (let i = 1; i < num; i++) {
  arr.push(i);
}
console.log("Array of numbers: " + arr);

let odd = arr.filter((x) => x % 2 != 0);
let oddCubes = arr.filter((x) => x % 2 != 0).map((x) => x ** 2);
console.log("Odd numbers: " + odd);
console.log("Array of cubes: " + oddCubes);