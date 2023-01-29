function tradeCommissions(input) {
    let cityName = input[0];
    let trades = Number(input[1]);
    let comission = 0;

    if (trades >= 0 && trades <= 500) {
        switch (cityName) {
            case "Sofia": comission = trades * 0.05; 
                console.log(comission.toFixed(2));
                break;
            case "Varna": comission = trades * 0.045; 
                console.log(comission.toFixed(2));
                break;
            case "Plovdiv": comission = trades * 0.055; 
                console.log(comission.toFixed(2));
                break;
            default: console.log("error"); 
                break;
        }
    } else if (trades > 500 && trades <= 1000) {
            switch (cityName) {
                case "Sofia": comission = trades * 0.07; 
                    console.log(comission.toFixed(2));
                    break;
                case "Varna": comission = trades * 0.075; 
                    console.log(comission.toFixed(2));
                    break;
                case "Plovdiv": comission = trades * 0.08; 
                    console.log(comission.toFixed(2));
                    break;
                default: console.log("error");
                    break;
            }
    } else if (trades > 1000 && trades <= 10000) {
            switch (cityName) {
                case "Sofia": comission = trades * 0.08; 
                    console.log(comission.toFixed(2));
                    break;
                case "Varna": comission = trades * 0.1;
                    console.log(comission.toFixed(2));
                    break;
                case "Plovdiv": comission = trades * 0.12;
                    console.log(comission.toFixed(2));
                    break;
                default: console.log("error");
                    break;
            }
     } else if (trades > 10000) {
            switch (cityName) {
                case "Sofia": comission = trades * 0.12; 
                    console.log(comission.toFixed(2));
                    break;
                case "Varna": comission = trades * 0.13; 
                    console.log(comission.toFixed(2));
                    break;
                case "Plovdiv": comission = trades * 0.145; 
                    console.log(comission.toFixed(2));
                    break;
                default: console.log("error");
                    break;
            }
     } else {
            console.log("error");
    }
}


tradeCommissions(["Sofia",
"10005"])







