function softUniReception(arr) {
    let empl1 = Number(arr[0]);
    let empl2 = Number(arr[1]);
    let empl3 = Number(arr[2]);

    let studentCount = Number(arr[3]);
    let totalEmplTime = empl1 + empl2 + empl3;
    let hourCounter = 0;

    let time = Math.trunc(studentCount / totalEmplTime);

    if (studentCount % totalEmplTime !== 0) {
        time++;
    }

    let breaks = Math.trunc(time / 3);

    if (time % 3 === 0) {
        breaks--;
    }

    let totalTime = 0;

    if (breaks > 0) {
        totalTime = time + breaks;
    } else {
        totalTime = time;
    }

    console.log(`Time needed: ${totalTime}h.`);
}

softUniReception(['1', '2', '3', '45'])