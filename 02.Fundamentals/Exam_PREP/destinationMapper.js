function destinationMapper(input) {
    let pattern = /([=\/])(?<destination>[A-Z][A-Za-z][A-Za-z]+)\1/gm
    let valid;
    let travelPoints = 0;
    let destArr = [];

    while ((valid = pattern.exec(input)) !== null) {
        let destination = valid.groups.destination;
        travelPoints += destination.length;
        destArr.push(destination);
    }

    console.log(`Destinations: ${destArr.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}

destinationMapper(("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i="))