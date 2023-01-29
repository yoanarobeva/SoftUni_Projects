function arrayModifier(input) {
    let arr = input.shift().split(" ").map(Number);
    
    for(let el of input) {
        if (el === 'end') {
            break;
        }

        let indexArr = el.split(" ")
        let command = indexArr.shift();
        indexArr = indexArr.map(Number);

        switch (command) {
            case 'swap': 
                let index1 = indexArr[0];
                let index2 = indexArr[1];

                let temp = arr[index1];
                arr[index1] = arr[index2];
                arr[index2] = temp;
            break;
            case 'multiply': 
                let index3 = indexArr[0];
                let index4 = indexArr[1];

                let result = arr[index3] * arr[index4];
                arr[index3] = result;
            break;
            case 'decrease': 
                arr = arr.map(x => x - 1);
            break;
        }
    }
    console.log(arr.join(", "));
}

arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  
  )