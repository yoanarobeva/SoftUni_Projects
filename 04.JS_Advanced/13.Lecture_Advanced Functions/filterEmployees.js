function filterEmployees(data, criteria) {
    let employeesArr = JSON.parse(data);
    let [keyCriteria, valueCriteria] = criteria.split('-');
    let counter = 0;

    function find(obj, key, value) {
        if (obj[key] === value) {
            console.log(`${counter}. ${obj.first_name} ${obj.last_name} - ${obj.email}`);
            counter++;
        }
        return counter;
    }
    
    employeesArr.forEach(x => find(x, keyCriteria, valueCriteria))
}

filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'
)