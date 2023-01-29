function addAndSubtract(num1, num2, num3) {
    let sum = (x, y) => x + y;
    let subtract = (sum, z) => sum - z;
    console.log(subtract(sum(num1, num2), num3)) 
}
addAndSubtract(23, 6, 10)
