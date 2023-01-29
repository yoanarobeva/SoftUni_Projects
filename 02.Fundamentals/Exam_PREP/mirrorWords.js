function mirrorWords(input) {
    let pattern = /([#@])(?<firstWord>[A-Za-z]{3,})\1\1(?<secondWord>[A-Za-z]{3,})\1/gm;
    let validPairsCounter = 0;
    let mirrorWordsCounter = 0;
    let mirrorWordsArr = [];
    let validPair;
    let isThereMirrorWord = false;

    if (!input[0].match(pattern)) {
        console.log(`No word pairs found!`);
    } else {

        while ((validPair = pattern.exec(input[0])) !== null) {
            //console.log(validPair);
            validPairsCounter++;
            let [firstWord, secondWord] = Object.values(validPair.groups);
            let secondWordReversed = secondWord.split('').reverse().join('');
            
            if (firstWord === secondWordReversed) {
                mirrorWordsArr.push({firstWord, secondWord});
                mirrorWordsCounter++;
                isThereMirrorWord = true;
            }
            
        }
        //console.table(mirrorWordsArr);
        console.log(`${validPairsCounter} word pairs found!`);   
    }

    if (isThereMirrorWord) {
        console.log(`The mirror words are:`);
        let pairs = [];
        mirrorWordsArr.forEach(el => {
            let toPush = `${el.firstWord} <=> ${el.secondWord}`;
            pairs.push(toPush);
        })
        console.log(pairs.join(', '));
    } else {
        console.log(`No mirror words!`);
    }
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
    ])