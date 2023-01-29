class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || !position || !department || salary <= 0) {
            throw new Error('Invalid input!');
        }

        if (!this.departments[department]) {
            this.departments[department] = {};
            this.departments[department].employees = [];
            this.departments[department].salarySum = 0;
        }

        let newEmployee = {name, salary, position}
        this.departments[department].employees.push(newEmployee);
        this.departments[department].salarySum += salary;
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {
        let departmentsArr = Array.from(Object.entries(this.departments));
        departmentsArr.sort((a,b) => b[1].salarySum / b[1].employees.length - a[1].salarySum / a[1].employees.length);
        let theBestDepartment = departmentsArr[0];
        let theBestDepartmentName = theBestDepartment[0];
        let theBestDepartmentEmployees = theBestDepartment[1].employees;
        theBestDepartmentEmployees.sort((a,b) => a.name.localeCompare(b.name)).sort((a,b) => b.salary - a.salary)
        let highestAvgSalary = departmentsArr[0][1].salarySum / theBestDepartmentEmployees.length;

        let result = ''
        result += `Best Department is: ${theBestDepartmentName}\nAverage salary: ${highestAvgSalary.toFixed(2)}`
        theBestDepartmentEmployees.forEach(x => result += `\n${x.name} ${x.salary} ${x.position}`);
        return result;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
