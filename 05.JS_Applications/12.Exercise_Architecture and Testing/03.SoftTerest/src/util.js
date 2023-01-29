export function setUserData(data) {
    localStorage.setItem('userId', data._id);
    localStorage.setItem('email', data.email);
    localStorage.setItem('accessToken', data.accessToken);
}

export function clearUserData() {
    localStorage.removeItem('userId');
    localStorage.removeItem('email');
    localStorage.removeItem('accessToken');
}

export function createSubmitHandler(formId, callback) {
    document.getElementById(formId).addEventListener('submit', onSubmit);

    function onSubmit(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.target);
        const data = Object.fromEntries(formData);

        callback(data, ev);
        ev.target.reset()
    }
}
