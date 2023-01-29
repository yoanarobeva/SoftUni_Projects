function projectsCreation (input) {

    let architect = input[0];
    let projects = Number(input[1]);
    let time = projects * 3

    console.log(`The architect ${architect} will need ${time} hours to complete ${projects} project/s.`);
}

projectsCreation(["George ",
"4 "]
);