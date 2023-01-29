function fishTank (input) {
    let lenght = Number(input[0]);
    let widht = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let volume = lenght * widht * height;
    let volumeLeters = volume * 0.001;
    let othersThings = volumeLeters * percent/100;
    let total = volumeLeters - othersThings;

    console.log (total);
}

fishTank(["85 ",
"75 ",
"47 ",
"17 "]
)