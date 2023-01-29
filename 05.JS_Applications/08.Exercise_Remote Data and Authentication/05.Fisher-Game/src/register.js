//MODE:
const guestModeDiv = document.getElementById('guest');
const userModeDiv = document.getElementById('user');

userModeDiv.style.display = 'none';
guestModeDiv.style.display = 'inline-block';

//ACTIVE TAB SET:
const homeTab = document.getElementById('home');
    //const logoutTab = document.getElementById('logout');
const loginTab = document.getElementById('login');
const registerTab = document.getElementById('register');

homeTab.classList.remove('active');
loginTab.classList.remove('active');
registerTab.classList.add('active');

//CODE:
const registerUrl = 'http://localhost:3030/users/register';
const errorP = document.querySelector('p.notification');

const registerForm = document.getElementById('register-form');
registerForm.addEventListener('submit', registerHandler);

function registerHandler(ev) {
    ev.preventDefault();

    let { email, password, rePass } = Object.fromEntries(new FormData(registerForm));
    if (password !== rePass || email === '' || password === '' || rePass === '') {
        errorP.textContent = 'Insert correct data!'
    } else {
        onRegister(email, password);
        errorP.textContent = '';
    }
    ev.target.reset();
}

async function onRegister(email, password) {
    let body = {
        email,
        password
    }

    try {
        const response = await fetch(registerUrl, {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(body)
        })
        
        const data = await response.json();

        if (response.status !== 200) {
            throw new Error (`${data.code} ${data.message}!`)
        }

        sessionStorage.setItem('userData', JSON.stringify({
            email: data.email,
            accessToken: data.accessToken,
            id: data._id
        }))
        
        window.location = './index.html'

        return data;

    } catch (err) {
       errorP.textContent = err
    }
}