class SummerCamp {

    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = {"child": 150, "student": 300, "collegian": 500};
        this.listOfParticipants = [];
    }

    registerParticipant (name, condition, money) {
        if (condition !== 'child' && condition !== 'student' && condition !== 'collegian') {
            throw new Error ("Unsuccessful registration at the camp.");
        }

        let isPresent = false;
        for (let el of this.listOfParticipants) {
            if (el.name === name) {
                isPresent = true;
                return `The ${name} is already registered at the camp.`
            }
        }

        if (money < this.priceForTheCamp[condition]) {
            return `The money is not enough to pay the stay at the camp.`
        }

        this.listOfParticipants.push({ name, condition, power: 100, wins: 0 });
        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant (name) {
        let isThereParticipant = false

        for (let el of this.listOfParticipants) {
            if (el.name === name) {
                isThereParticipant = true;
                let index = this.listOfParticipants.indexOf(el);
                this.listOfParticipants.splice(index, 1)
                return `The ${name} removed successfully.`;
            }
        }

        if (!isThereParticipant) {
            throw new Error (`The ${name} is not registered in the camp.`)
        }
    }

    timeToPlay (typeOfGame, participant1, participant2) {
        let part1Pr;
        let part2Pr;
        let isPresentPart1 = false;
        let isPresentPart2 = false;

        for (let el of this.listOfParticipants) {
            if (el.name === participant1) {
                part1Pr = el;
                isPresentPart1 = true;
            }

            if (el.name === participant2) {
                part2Pr = el;
                isPresentPart2 = true;
            }
        }

        if (typeOfGame === 'WaterBalloonFights') {
           
            if (!isPresentPart1 || !isPresentPart2) {
                throw new Error ('Invalid entered name/s.');
            }
    
            if (part1Pr.condition !== part2Pr.condition) {
                throw new Error ('Choose players with equal condition.');
            }

            if (part1Pr.power > part2Pr.power) {
                part1Pr.wins++;
                return `The ${part1Pr.name} is winner in the game ${typeOfGame}.`
            } else if (part1Pr.power < part2Pr.power) {
                part2Pr.wins++;
                return `The ${part2Pr.name} is winner in the game ${typeOfGame}.`
            } else {
                return 'There is no winner.';
            }

        } else if (typeOfGame === 'Battleship') {

            if (!isPresentPart1) {
                throw new Error ('Invalid entered name/s.');
            }

            part1Pr.power += 20;
            return `The ${part1Pr.name} successfully completed the game ${typeOfGame}.`
        }
        
    }

    toString () {
        let text = `${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`;
        this.listOfParticipants.sort((a,b) => b.wins - a.wins);
        this.listOfParticipants.forEach(x => text += `\n${x.name} - ${x.condition} - ${x.power} - ${x.wins}`);
        return text;
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());
/*
timeToPlay (typeOfGame, participant1, participant2) {
    let participant1Pr = this.listOfParticipants.find(x => x.name === participant1);
    let participant2Pr = this.listOfParticipants.find(x => x.name === participant2);

    if (typeOfGame === 'WaterBalloonFights') {
        
        if (!participant1Pr || !participant2Pr) {
            throw new Error ('Invalid entered name/s.');
        }

        if (participant1Pr.condition !== participant2Pr.condition) {
            throw new Error ('Choose players with equal condition.');
        }

        if (participant1Pr.power > participant2Pr.power) {
            participant1Pr.wins++;
            return `The ${participant1Pr.name} is winner in the game ${typeOfGame}.`
        } else if (participant1Pr.power < participant2Pr.power) {
            participant2Pr.wins++;
            return `The ${participant2Pr.name} is winner in the game ${typeOfGame}.`
        } else {
            return 'There is no winner.';
        }

    } else if (typeOfGame === 'Battleship') {

        if (!participant1Pr) {
            throw new Error ('Invalid entered name/s.');
        }

        participant1Pr.power += 20;
        return `The ${participant1Pr.name} successfully completed the game ${typeOfGame}.`
    }
    
}
*/
