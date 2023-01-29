function largestNumber(num1, num2, num3) {
    let nums = [num1, num2, num3];
    nums.sort((a, b) => a - b);
    console.log(`The largest number is ${nums[2]}.`);
}

largestNumber(5, -3, 16)