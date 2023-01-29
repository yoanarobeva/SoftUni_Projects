function attachGradientEvents() {
    let field = document.getElementById('gradient');
    let result = document.getElementById('result');

    field.addEventListener('mousemove', showPercent);

    function showPercent(event) {
       let x = event.offsetX;
       let elementWidth = field.clientWidth;
       let percent = (x / elementWidth) * 100;
       result.textContent = Math.floor(percent) + "%";
    }
}