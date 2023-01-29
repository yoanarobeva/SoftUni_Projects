function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let restaurants = {};

      let maxAvgSalary = 0;
      let maxAvgSalaryRestName = '';

      let input = JSON.parse(document.querySelector('#inputs textarea').value);
      //console.log(input);
      let bestRestaurant = document.querySelector('#bestRestaurant p')
      let bestRestWorkers = document.querySelector('#workers p')

      for (let el of input) {
         // syzdava obektite
         let [restaurantName, workersString] = el.split(' - ');
         let workersArr = workersString.split(', ');

         if (!restaurants.hasOwnProperty(restaurantName)) {
            restaurants[restaurantName] = {};
         } 
         
         for (let worker of workersArr) {
            let [workerName, salary] = worker.split(' ');
            restaurants[restaurantName][workerName] = Number(salary);
         }
      }

      let currentRestaurants = Object.keys(restaurants);
      for (let rest of currentRestaurants) {
         let avgSalary = 0;
         let salariesSum = 0;

         let salariesArr = Object.values(restaurants[rest]);
         salariesArr.forEach(x => salariesSum += Number(x));

         avgSalary = salariesSum / salariesArr.length;

         if (avgSalary > maxAvgSalary) {
            maxAvgSalaryRestName = rest;
            maxAvgSalary = avgSalary;
         }
      }

      let sortedWorkersOfTheBestRest = Object.entries(restaurants[maxAvgSalaryRestName]).sort(([workerA, salaryA], [workerB, salaryB]) => salaryB - salaryA);
      
      bestRestaurant.textContent = `Name: ${maxAvgSalaryRestName} Average Salary: ${maxAvgSalary.toFixed(2)} Best Salary: ${sortedWorkersOfTheBestRest[0][1].toFixed(2)}`
      let text = '';
      sortedWorkersOfTheBestRest.forEach(x => text += `Name: ${x[0]} With Salary: ${x[1]} `);
      bestRestWorkers.textContent = text; 
   }
}