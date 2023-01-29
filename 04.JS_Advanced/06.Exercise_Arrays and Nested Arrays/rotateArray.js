function rotateArray(arr, num) {
    for (let i = 0; i < num; i++) {
        let temp = arr.pop();
        arr.unshift(temp);
    }
    console.log(arr.join(' '));
}

rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
)