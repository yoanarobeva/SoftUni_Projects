function formatGrade(grade) {
    let textGrade = "";
    let formatedGrade = grade.toFixed(2);
    if (formatedGrade < 3.00) {
        textGrade = "Fail";
        formatedGrade = 2
    } else if (formatedGrade < 3.50) {
        textGrade = "Poor"
    } else if (formatedGrade < 4.50) {
        textGrade = "Good";
    } else if (formatedGrade < 5.50) {
        textGrade = "Very good";
    } else if (formatedGrade <= 6.00) {
        textGrade = "Excellent";
    }

    console.log (`${textGrade} (${formatedGrade})`);
}

formatGrade(6.00);
formatGrade(5.55);
formatGrade(3.60);