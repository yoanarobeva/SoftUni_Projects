function dayOfWeek (num) {
    let daysArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    
    if (num <= 7 && num > 0) {
        console.log(daysArray[num-1]);
    } else {
        console.log("Invalid day!")
    }
}

dayOfWeek(3);