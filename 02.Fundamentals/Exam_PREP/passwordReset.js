function passwordReset(input) {
    let pass = input.shift();

    for (let el of input) {
        let commandArr = el.split(' ');
        let command = commandArr.shift();

        if (command === 'Done') {
            break;

        } else if (command === 'TakeOdd') {
            let result = '';
            pass = pass.split('');

            for (let i = 1; i < pass.length; i+=2) {
                result += pass[i];
            }

            pass = result;
            console.log(pass);

        } else if (command === 'Cut') {
            let index = Number(commandArr.shift());
            let length = Number(commandArr.shift());

            let currentSubstr = pass.slice(index, index + length);
            pass = pass.replace(currentSubstr, '');
            console.log(pass);

        } else if (command === 'Substitute') {
            let substring = commandArr.shift();
            let substitute = commandArr.shift();

            let rgx = new RegExp(substring, 'g');

            if (pass.includes(substring)) {
                pass = pass.replace(rgx, substitute);
                console.log(pass);
            } else {
                console.log('Nothing to replace!');
            }
        }
    }

    console.log(`Your password is: ${pass}`);
}

passwordReset((["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr", 
"TakeOdd",
"Cut 15 3",
"Substitute :: -",
"Substitute | ^",
"Done"]))