function housePainting (input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let h = Number(input[2]);

    let frontWall = x * x * 2 - 1.2 * 2;
    let sideWall = (x * y - 1.5 * 1.5) * 2;
    let roof = x * y * 2 + x * h ;

    let areaGreenPaint = frontWall + sideWall;
    let areaRedPaint = roof;

    let litersGreenPaint = areaGreenPaint / 3.4;
    let litersRedPaint = areaRedPaint / 4.3;

    console.log(litersGreenPaint.toFixed(2));
    console.log(litersRedPaint.toFixed(2));
}

housePainting(["6", "10", "5.2"])