function histogram (input) {
    let index = 1;
    let count = Number(input[0]);
    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;

    for (let i = 0; i < count; i++) {
        n = Number(input[index]);
        index++;

        if (n < 200) {
            p1Counter++;
        } else if (n >= 200 && n <= 399) {
            p2Counter++;
        } else if (n >= 400 && n <= 599) {
            p3Counter++;
        } else if (n >= 600 && n <= 799) {
            p4Counter++
        } else if (n >= 800) {
            p5Counter++;
        }
    }

    let p1 = p1Counter / count * 100;
    let p2 = p2Counter / count * 100;
    let p3 = p3Counter / count * 100;
    let p4 = p4Counter / count * 100;
    let p5 = p5Counter / count * 100;
    
   console.log(`${p1.toFixed(2)}%`);
   console.log(`${p2.toFixed(2)}%`);
   console.log(`${p3.toFixed(2)}%`);
   console.log(`${p4.toFixed(2)}%`);
   console.log(`${p5.toFixed(2)}%`);
   
}

histogram(["3",
"1",
"2",
"999"])
