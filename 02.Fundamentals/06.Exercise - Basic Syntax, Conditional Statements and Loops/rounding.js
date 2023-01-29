function rounding (num, prec) {
    let formattedNum = 0;

    if (prec > 15) {
        prec = 15;
    }

    formattedNum = num.toFixed(prec);
    
    console.log(parseFloat(formattedNum))

}

rounding(3.1415926535897932384626433832795,2);
rounding(10.5,3);