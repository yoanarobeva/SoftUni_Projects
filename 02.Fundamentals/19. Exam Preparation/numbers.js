function numbers(string) {
    let intArr = string.split(" ").map(Number);
    let sum = 0
    let greaterArr = [];

    for (let num of intArr) {
        sum += num;
    }

    let avgValue = sum / intArr.length;

    for (let num of intArr) {
        if (num > avgValue) {
            greaterArr.push(num);
        }
    }

    if (greaterArr.length === 0) {
        console.log("No")
    } else {

        greaterArr.sort((a, b) => b - a);
        greaterArr = greaterArr.slice(0, 5);

        console.log(greaterArr.join(" "));
    }
}

numbers('1')