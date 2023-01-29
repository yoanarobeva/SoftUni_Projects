function companyUsers(input) {
    let company = {};

    for (let line of input) {
        let [companyName, employeeID] = line.split(" -> ");
        if (!company.hasOwnProperty(companyName)) {
            company[companyName] = new Set();
        }

        company[companyName].add(employeeID);
    }

    let nameArr = Object.keys(company).sort((a, b) => a.localeCompare(b));

    for (let name of nameArr) {
        console.log(name);
        let employeesID = Array.from(company[name].values())

        employeesID.forEach(element => {
            console.log(`-- ${element}`);
        });
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
])