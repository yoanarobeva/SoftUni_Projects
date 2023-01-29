function messageDecrypter(input) {
    let n = Number(input.shift());
    let pattern = /(?<!\b)([$%])(?<tag>[A-Z][a-z]{2,})\1: \[(?<n1>[0-9]+)\]\|\[(?<n2>[0-9]+)\]\|\[(?<n3>[0-9]+)\]\|(?!\w|\[)/gm

    for (let i = 0; i < n; i++) {
        let currentMessage = input[i];
        let decryptedMessage = '';
        let valid;

        if ((valid = pattern.exec(currentMessage)) !== null) {
            let tag = valid.groups.tag;
            let n1 = Number(valid.groups.n1);
            let n2 = Number(valid.groups.n2);
            let n3 = Number(valid.groups.n3);

            decryptedMessage = String.fromCharCode(n1) + String.fromCharCode(n2) + String.fromCharCode(n3);
            
            console.log(`${tag}: ${decryptedMessage}`);

            while((valid = pattern.exec(currentMessage)) !== null) {
                let tag = valid.groups.tag;
                let n1 = Number(valid.groups.n1);
                let n2 = Number(valid.groups.n2);
                let n3 = Number(valid.groups.n3);

                decryptedMessage = String.fromCharCode(n1) + String.fromCharCode(n2) + String.fromCharCode(n3);
                
                console.log(`${tag}: ${decryptedMessage}`);
            }

        } else {
            console.log("Valid message not found!");
        }
    }
}

messageDecrypter(["4",
"$Request$: [73]|[115]|[105]|",
"%Taggy$: [73]|[73]|[73]|",
"%Taggy%: [118]|[97]|[108]|",
"$Request$: [73]|[115]|[105]|[32]|[75]|"])


