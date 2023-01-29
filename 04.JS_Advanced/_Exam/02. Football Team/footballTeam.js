class footballTeam {
    constructor(clubName, country) {
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }

    newAdditions(footballPlayers) {
        let playersNames = [];

        for (let el of footballPlayers) {
            let [name, age, playerValue] = el.split('/');
            age = Number(age);
            playerValue = Number(playerValue);

            let isPresent = false;

            for (let player of this.invitedPlayers) {
                if (player.name === name) {
                    isPresent = true;

                    if (player.playerValue < playerValue) {
                        player.playerValue = playerValue;
                    }
                }
            }

            if (!isPresent) {
                this.invitedPlayers.push({ name, age, playerValue });
                playersNames.push(name);
            }
        }

        return `You successfully invite ${playersNames.join(', ')}.`
    }

    signContract(selectedPlayer) {
        let [name, playerOffer] = selectedPlayer.split('/');
        playerOffer = Number(playerOffer);
        let isPresent = false;

        for (let player of this.invitedPlayers) {
            if (player.name === name) {
                isPresent = true;

                if (player.playerValue !== NaN) {
                    if (playerOffer < player.playerValue) {
                        let priceDifference = player.playerValue - playerOffer;
                        throw new Error (`The manager's offer is not enough to sign a contract with ${name}, ${priceDifference} million more are needed to sign the contract!`)
                    }
    
                    player.playerValue = "Bought"
                    return `Congratulations! You sign a contract with ${name} for ${playerOffer} million dollars.`
                }
            }
        }

        if (!isPresent) {
            throw new Error(`${name} is not invited to the selection list!`)
        } 
    }

    ageLimit(name, age) {
        let isPresent = false;

        for (let player of this.invitedPlayers) {
            if (player.name === name) {
                isPresent = true;

                if (player.age < age) {
                    let ageDifference = age - player.age;

                    if (ageDifference < 5) {
                        return `${name} will sign a contract for ${ageDifference} years with ${this.clubName} in ${this.country}!`
                    } 

                    return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
                }
                return `${name} is above age limit!`;
            }
        }

        if (!isPresent) {
            throw new Error(`${name} is not invited to the selection list!`);
        }
    }

    transferWindowResult() {
        let text = "Players list:";
        this.invitedPlayers.sort((a,b) => a.name.localeCompare(b.name)).forEach(x => text += `\nPlayer ${x.name}-${x.playerValue}`);
        return text;
    }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
