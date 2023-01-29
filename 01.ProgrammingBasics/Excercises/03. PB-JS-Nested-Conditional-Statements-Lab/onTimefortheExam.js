function onTimefortheExam (input) {
    let examHour = Number(input[0]);
    let examMinute = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let examTime = examHour * 60 + examMinute;
    let arrivalTime = arrivalHour * 60 + arrivalMinute;
    let onTime = examTime - 30;

    if (arrivalTime <= examTime && arrivalTime >= onTime) {
        console.log("On time");
    } else if (arrivalTime < onTime) {
        console.log ("Early");
    } else {
        console.log("Late");
    }

    let diff = Math.abs(examTime - arrivalTime)
    let diffHours = Math.floor(diff / 60);
    let diffMinutes = diff % 60;

    if (arrivalTime !== examTime) {
        if (arrivalTime < examTime) {
            if (diff < 60) {
                    console.log(`${diffMinutes} minutes before the start`);
            } else if (diff >= 60) {
                if (diffMinutes < 10) {
                    console.log (`${diffHours}:0${diffMinutes} hours before the start`)
                } else {
                    console.log (`${diffHours}:${diffMinutes} hours before the start`)
                }
            }
        } else if(arrivalTime > examTime) {
            if (diff < 60) {
                    console.log(`${diff} minutes after the start`);
            } else if (diff >= 60) {
                if (diffMinutes < 10) {
                    console.log (`${diffHours}:0${diffMinutes} hours after the start`)
                } else {
                    console.log (`${diffHours}:${diffMinutes} hours after the start`)
                }
            }
        }
    }
    
}

onTimefortheExam(["14",
"00",
"13",
"55"])

