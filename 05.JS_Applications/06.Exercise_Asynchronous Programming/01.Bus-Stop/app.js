async function getInfo() {
    let id = document.getElementById('stopId').value;
    let stopsField = document.getElementById('stopName');
    let busesField = document.getElementById('buses');

    try {
        const url = `http://localhost:3030/jsonstore/bus/businfo/${id}`;
        const resource = await fetch(url);
        if (resource.status != 200) {
            throw new Error('Error');
        }
        const data = await resource.json();

        stopsField.textContent = data.name;
        
        Object.entries(data.buses).forEach(x => {
            let li = document.createElement('li');
            li.textContent = `Bus ${x[0]} arrives in ${x[1]} minutes`
            busesField.appendChild(li);
        })
    } catch (error) {
        stopsField.textContent = 'Error'
        busesField.innerHTML = ''
    }
}