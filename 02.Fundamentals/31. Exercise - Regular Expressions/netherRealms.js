function netherRealms(input) {
    input = input.split(",");
    let healthPattern = /[^\d\+\-*\/\.]/gm
    let damagePattern = /(?:\+|-)?[0-9]+(?:\.[0-9]+)?/gm;
    let multiplyDivide = /[*\/]/gm;
    let deamons = new Map();

    for (let line of input) {
        line = line.trim();
        let health = 0;
        let validHealth;
        let healthArr = [];
        

        while ((validHealth = healthPattern.exec(line)) !== null) {
            healthArr.push(validHealth[0]);
        }

        healthArr.forEach(el => {
            let n = el.charCodeAt();
            health += n;
        })

        let damage = 0;
        let damageArr = [];
        let validDamage;

        while ((validDamage = damagePattern.exec(line)) !== null) {
            damageArr.push(validDamage[0]);
        }

        damageArr.forEach(el => {
            let n = Number(el);
            damage += n;
        })

        let validMultiplyOrDivide;
        while ((validMultiplyOrDivide = multiplyDivide.exec(line)) !== null) {

            if (validMultiplyOrDivide[0] === '*') {
                damage = damage * 2;
            } else if (validMultiplyOrDivide[0] === '/') {
                damage = damage / 2;
            }
        }
        
        deamons.set(line, {health, damage});
    }
    let sorted = Array.from(deamons.keys()).sort((a,b) => a.localeCompare(b));
   
    //console.table(sorted);
    sorted.forEach(el => {
        console.log(`${el} - ${deamons.get(el).health} health, ${deamons.get(el).damage.toFixed(2)} damage`);
    })
}

netherRealms('M3ph1st0**, Azazel')