export function setUserData(data) {
    sessionStorage.setItem('userId', data._id);
    sessionStorage.setItem('email', data.email);
    sessionStorage.setItem('accessToken', data.accessToken);
}

export function clearUserData() {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('accessToken');
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