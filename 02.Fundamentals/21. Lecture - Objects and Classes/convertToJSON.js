function convertToJSON(name, lastName, hairColor) {
    let obj = {
        name,
        lastName,
        hairColor
    };

    console.log(JSON.stringify(obj));
}

convertToJSON('George', 'Jones', 'Brown')