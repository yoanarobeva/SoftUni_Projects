function constructionCrew(obj) {
    
    if (obj.dizziness) {
        let requiredWater = 0.1 * obj.weight * obj.experience;
        obj.levelOfHydrated += requiredWater;
        obj.dizziness = false;
    }

    return obj;
}

constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true });

console.log('_________');

constructionCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true });

console.log('_________');

constructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false })


