function worldTour(input) {
    let stops = input.shift();

    for (let line of input) {
        let commandArr = line.split(":");
        let command = commandArr.shift().trim();

        if (command === 'Travel') {
            break;
        } else if (command === 'Add Stop') {
            let startIndex = Number(commandArr[0]);
            let string = commandArr[1];

            if (startIndex >= 0 && startIndex <= stops.length) {
                stops = stops.split("");
                stops.splice(startIndex, 0, string);
                stops = stops.join("");
            } 
            console.log(stops);
        } else if (command === 'Remove Stop') {
            let startIndex2 = Number(commandArr[0]);
            let endIndex = Number(commandArr[1]);

            if (startIndex2 >= 0 && startIndex2 < stops.length && startIndex2 <= endIndex && endIndex < stops.length) {
                stops = stops.split("");
                stops.splice(startIndex2, endIndex - startIndex2 + 1);
                stops = stops.join("");
            }
            console.log(stops);
        } else if (command === 'Switch') {
            let oldString = commandArr[0];
            let newString = commandArr[1];

           let rgx = new RegExp(oldString, 'g');
           stops = stops.replace(rgx, newString)
           console.log(stops);
        } 
        
    }
    console.log(`Ready for world tour! Planned stops: ${stops}`);
}


worldTour(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])
