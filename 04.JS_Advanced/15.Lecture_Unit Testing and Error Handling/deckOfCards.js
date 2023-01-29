function deckOfCards(input) {
    function createCards (face, suit) {
        let validFaces = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
        let validSuits = {
            'S': '\u2660', 
            'H': '\u2665', 
            "D": '\u2666', 
            'C': '\u2663'
        };
    
        if (!validFaces.includes(face)) {
            throw new Error('Error');
        }

        if (!validSuits.hasOwnProperty(suit)) {
            throw new Error('Error');
        }
    
        return {
            face: face,
            suit: validSuits[suit],
            toString() {
                return this.face + this.suit;
            }
        }
    }

    let deck = []

    for (let card of input) {
        let cardArr = card.split("")
        let suit = cardArr.pop();
        let face = cardArr.join("");
        let isValid = true;

        try {
            let currentCard = createCards(face, suit)
            deck.push(currentCard);
        } catch (err) {
            deck = [`Invalid card: ${face}${suit}`];
            isValid = false;
        }

        if(!isValid) {
            break;
        }
    }
   
    console.log(deck.join(' '));
}

deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['5S', '3D', 'QD', '1C']);
deckOfCards(['AS', '5X', 'KH', '2C']);
