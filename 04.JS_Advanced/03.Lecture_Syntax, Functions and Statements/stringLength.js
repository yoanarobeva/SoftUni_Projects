function stringLength(str1, str2, str3) {
    let sumOfLengths = str1.length + str2.length + str3.length;
    let avgLength = Math.floor(sumOfLengths / 3);
    console.log(sumOfLengths);
    console.log(avgLength);
}

stringLength('chocolate', 'ice cream', 'cake')