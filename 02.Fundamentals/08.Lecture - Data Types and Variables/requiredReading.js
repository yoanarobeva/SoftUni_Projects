function requiredReading (pages, pagesPerHour, daysToRead) {
    let totalTime = pages / pagesPerHour;
    let hoursPerDay = totalTime / daysToRead;

    console.log(hoursPerDay)
}

requiredReading(212,
    20 ,
    2 
    )