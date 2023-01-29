function trainingLab (input) {
    
    let w = Number(input[0]);
    let h = Number(input[1]);

    h = h - 1;

    let rows = Math.trunc(w / 1.2);
    let columns = Math.trunc(h / 0.7);

    let workingPlaces = rows * columns - 3;

    console.log(workingPlaces);

}

trainingLab(["15", "8.9"]);