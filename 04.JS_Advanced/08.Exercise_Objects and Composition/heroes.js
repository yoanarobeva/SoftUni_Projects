function solve() {
    let obj = {
        mage: function(name) {
            let mageObj = {
                name,
                health: 100,
                mana: 100,
                cast: function (spell) {
                    mageObj.mana--;
                    console.log(`${name} cast ${spell}`);
                }
            }
            return mageObj;
        },
        fighter: function(name) {
            let fighterObj = {
                name,
                health: 100,
                stamina: 100,
                fight: function () {
                    fighterObj.stamina--;
                    console.log(`${name} slashes at the foe!`);
                }
            }
            return fighterObj;
        }
    };

    return obj;
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);

