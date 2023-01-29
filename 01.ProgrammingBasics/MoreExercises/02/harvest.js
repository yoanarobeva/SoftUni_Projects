function harvest (input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let z = Number(input[2]);
    let workerCount = Number(input[3]);

    let produce = x * y;
   
    let grapeKG = produce * 0.4;
    let litresWine = grapeKG / 2.5; 

    let diff = Math.abs(litresWine-z);

    if (litresWine < z) {
        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`);;
    } else {
        let diffForOne = diff / workerCount;
        console.log(`Good harvest this year! Total wine: ${litresWine} liters.`);
        console.log(`${diff} liters left -> ${Math.ceil(diffForOne)} liters per person.`)
    }
}

harvest(["650", "2", "175", "3"])