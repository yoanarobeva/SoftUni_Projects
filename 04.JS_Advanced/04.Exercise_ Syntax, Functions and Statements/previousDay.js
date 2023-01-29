function previousDay(year, month, day) {
    let monthIndex = month - 1;
    let date = new Date(year, monthIndex, day)
    date.setDate(date.getDate() - 1);
    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);
}

previousDay(2016, 9, 30);
console.log('______');
previousDay(2016, 10, 1);