function bonusScoringSystem(input) {
let students = Number(input.shift());
let lectures = Number(input.shift());
let additionalBonus = Number(input.shift());

let maxBonus = 0;
let maxAtt = 0;
let lectureCounter = 0;

for (let el of input) {
    let totalBonus = Number(el) / lectures * (5 + additionalBonus);
    
    if(totalBonus > maxBonus) {
        maxBonus = totalBonus;
        maxAtt = el;
    }

    lectureCounter++;
}
console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
console.log(`The student has attended ${maxAtt} lectures.`);
}

bonusScoringSystem([
    '5',  '25', '30',
    '12', '19', '24',
    '16', '20'
  ]
  )