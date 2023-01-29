function extractFile(input) {
    let temp = input.split("\\");
    //console.log(temp);

    let fileAndTypeArr = temp.pop().split(".");
    //console.log(fileAndTypeArr);

    let fileType = fileAndTypeArr.pop();
    let fileName = fileAndTypeArr.join(".");
    

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileType}`);

}

extractFile('C:\\Internal\\training-internal\\Template.bak.pptx')