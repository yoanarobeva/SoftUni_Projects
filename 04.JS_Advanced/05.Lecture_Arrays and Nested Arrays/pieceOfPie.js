function pieceOfPie(arr, targetOne, targetTwo) {
    let startIndex = arr.indexOf(targetOne);
    let endIndex = arr.indexOf(targetTwo);

    let result = arr.slice(startIndex, endIndex + 1)
    //console.log(result);
    return result;
}

pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
)