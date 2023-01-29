function gymnastics(input) {
    let country = input[0];
    let tool = input[1];

    let points = 0;
    
    switch(tool) {
        case "ribbon":
            switch(country) {
                case "Russia": points = 9.1 + 9.4; break;
                case "Bulgaria": points = 9.6 + 9.4; break;
                case "Italy": points = 9.2 + 9.5; break;
            }    
        break;
        case "hoop":
            switch(country) {
                case "Russia": points = 9.3 + 9.8; break;
                case "Bulgaria": points = 9.55 + 9.75; break;
                case "Italy": points = 9.45 + 9.35; break;
            }    
        break;
        case "rope": 
            switch(country) {
                case "Russia": points = 9.6 + 9; break;
                case "Bulgaria": points = 9.5 + 9.4; break;
                case "Italy": points = 9.7 + 9.15; break;
            }
        break;
    }

    let percentToMax = 100  - (points / 20 * 100);
    console.log(`The team of ${country} get ${points.toFixed(3)} on ${tool}.`);
    console.log(`${percentToMax.toFixed(2)}%`)
}

gymnastics(["Bulgaria", "ribbon"])