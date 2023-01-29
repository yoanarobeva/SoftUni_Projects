function cardGame(input) {
    let players = {};
    
    for (let line of input) {
        let [name, cards] = line.split(": ");
        let cardsArr = cards.split(", ");
        
        if (!players.hasOwnProperty(name)) {
            players[name] = new Set();
        }

        cardsArr.forEach(el => {
            players[name].add(el);
        })
           
    }
    
    for (let [player, cards] of Object.entries(players)) {
        let sum = 0;
        cards.forEach(el => {
            let powerArr = el.split("");
            let t = powerArr.pop();
            let p = '';
            powerArr.forEach(el => p += el)
            let m1 = 0;
            let m2 = 0;
            
            if (isNaN(p)) {
                switch (p) {
                    case "J": m1 = 11; break;
                    case "Q": m1 = 12; break;
                    case "K": m1 = 13; break;
                    case "A": m1 = 14; break;
                }
            } else {
                m1 = Number(p);
            }

            switch (t) {
                case "S": m2 = 4; break;
                case "H": m2 = 3; break;
                case "D": m2 = 2; break;
                case "C": m2 = 1; break;
            }

            sum += (m1 * m2);
        })

        console.log(`${player}: ${sum}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
    ])