function solve() {
    let id = 'depot'
    let currentStop = '';
    let stopSpan = document.querySelector('.info');
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');

    async function depart() {
        try {
            const url = `http://localhost:3030/jsonstore/bus/schedule/${id}`;
            const resource = await fetch(url);
            const data = await resource.json();

            currentStop = data.name
            id = data.next;
            
            stopSpan.textContent = `Next stop ${currentStop}`;

            departBtn.disabled = true;
            arriveBtn.disabled = false;
        } catch (error) {
            
            stopSpan.textContent = 'Error';
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }
    }

    function arrive() {
        stopSpan.textContent = `Arriving at ${currentStop}`;

        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();