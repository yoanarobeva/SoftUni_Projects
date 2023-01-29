function focused() {
    let inputField = document.querySelectorAll('input[type="text"]');

    Array.from(inputField).forEach(x => {
        x.addEventListener('focus', onFocus);
        x.addEventListener('blur', onBlur);
    })


    function onFocus(event) {
        event.target.parentNode.classList.add('focused');
    }

    function onBlur(event) {
        event.target.parentNode.classList.remove('focused');
    }
}