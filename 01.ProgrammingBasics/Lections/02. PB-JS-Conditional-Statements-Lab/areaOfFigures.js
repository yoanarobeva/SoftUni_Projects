function areaOfFigures(input){
    let figure = input[0];

    if (figure === "square") {
        let x = Number(input[1]);
        console.log((x * x).toFixed(3));
    } else if (figure === "rectangle") {
        let x = Number(input[1]);
        let y = Number(input[2]);
        console.log((x * y).toFixed(3));
    } else if (figure === "circle") {
        let r = Number(input[1]);
        console.log((r * r * Math.PI).toFixed(3));
    } else if (figure === "triangle") {
        let x = Number(input[1]);
        let h = Number(input[2]);
        console.log ((x * h / 2).toFixed(3));
    }
}

areaOfFigures(["rectangle",
"7",
"2.5"])
