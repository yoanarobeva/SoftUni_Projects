function attachEventsListeners() {
    let buttons = Array.from(document.querySelectorAll('input[type=button]'))
    buttons.forEach(x => x.addEventListener('click', onClick));

    let timeUnitsObj = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    function convert(value, unit) {
        let days = value / timeUnitsObj[unit];

        return {
            days,
            hours: days * timeUnitsObj.hours,
            minutes: days * timeUnitsObj.minutes,
            seconds: days * timeUnitsObj.seconds
        }
    }

    function onClick(event) {
        let input = event.target.parentElement.querySelector('input[type="text"]');
        let inputFieldNum = Number(input.value);
        let inputFieldUnit = input.id;
        let time = convert(inputFieldNum, inputFieldUnit);

        document.getElementById('days').value = time.days;
        document.getElementById('hours').value = time.hours;
        document.getElementById('minutes').value = time.minutes;
        document.getElementById('seconds').value = time.seconds;
    }
}