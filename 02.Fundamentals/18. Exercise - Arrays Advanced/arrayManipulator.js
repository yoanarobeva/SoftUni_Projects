function arrayManipulator(arr, commandArr) {
    function rotateRight(arrr){
        let last = arrr.pop();
        arrr.unshift(last);
        return arrr;
    }
    for (let el of commandArr) {
        let currentCommandArr = el.split(" ");
        let command = currentCommandArr.shift();
        currentCommandArr = currentCommandArr.map(Number);

        switch (command) {
            case 'add': arr.splice(currentCommandArr[0], 0, currentCommandArr[1]); break;
            case 'addMany':
                let index = currentCommandArr.shift(); 
                arr.splice(index, 0, [...currentCommandArr]); 
            break;
            case 'contains': console.log(arr.indexOf(currentCommandArr[0])); break;
            case 'remove': arr.splice(currentCommandArr[0], 1); break;
            case 'shift': 
                for (let i = 0; i < 2; i++) {
                    rotateRight(arr);
                } 
            break;
            case 'sumPairs':
                let sum = 0;
                for (let i = 0; i < arr.length - 1; i++) {
                    sum += arr[i] + arr[i + 1];
                }
                console.log(sum);
            break;
            case 'print': console.log("[ " + arr.join(", ") + " ]"); break;
        }
    }
}

arrayManipulator([1, 2, 3, 4, 5],
['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']
);