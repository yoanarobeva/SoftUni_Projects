function ladyBugs (array) {
    let fieldArr = [];
    for (let f = 0; f < array[0]; f++) {
        fieldArr[f] = '0';
    }
   
    let ladyBugPosArr = array[1].split(" ");
   
    for (let b = 0; b < ladyBugPosArr.length; b++) {
        let currentBug = ladyBugPosArr[b];
        fieldArr[currentBug] = '1';
    }
 
    for (let m = 2; m < array.length; m++) {
        let currentMoveArr = array[m].split(" ");
     
        let direction = currentMoveArr[1];
        let bugCurrentIndex = currentMoveArr[0];
        if (fieldArr[bugCurrentIndex] === '0' || fieldArr[bugCurrentIndex] > array[0]) {
            break;
        }
        
        let bugNewIndex = 0;

        switch(direction) {
            case "right":
                bugNewIndex = bugCurrentIndex + currentMoveArr[2]; 
                fieldArr.splice(bugCurrentIndex, 1, '0');
                if (fieldArr[bugNewIndex] === '0') {
                    fieldArr.splice(bugNewIndex, 1, '1' );
                } else {
                    bugNewIndex = bugCurrentIndex + 2 * currentMoveArr[2];
                    fieldArr.splice(bugNewIndex, 1, '1' );
                }
            break;
            case "left" :
                bugNewIndex = bugCurrentIndex - currentMoveArr[2];
                fieldArr.splice(bugCurrentIndex, 1, '0');
                if (fieldArr[bugNewIndex] === '0') {
                    fieldArr.splice(bugNewIndex, 1, '1' );
                } else {
                    bugNewIndex = bugCurrentIndex - 2 * currentMoveArr[2];
                    fieldArr.splice(bugNewIndex, 1, '1' );
                }    
            break;
        }
    }
    let finalArr = []
    for (let k = 0; k < array[0]; k++ ) {
        finalArr.push(fieldArr[k]);
    }
    console.log(finalArr.join(" "))
}

ladyBugs([ 5, '3',
'3 left 2',
'1 left -2']
)