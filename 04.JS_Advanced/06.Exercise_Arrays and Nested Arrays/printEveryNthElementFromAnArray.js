function printEveryNthElementFromAnArray(arr, num) {
    let result = [];
    for (let i = 0; i < arr.length; i+=num) {
        result.push(arr[i]);
    }

    //console.log(result);
    return result;
}

printEveryNthElementFromAnArray(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)