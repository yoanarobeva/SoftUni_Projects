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
loginTab.classList.add('active');
registerTab.classList.remove('active');

//CODE:
const loginUrl = 'http://localhost:3030/users/login';

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', onLogin);
    
async function onLogin(ev) {
    ev.preventDefault();
    const formData = new FormData(ev.target);

    const { email, password } = Object.fromEntries(formData);

    let body = {
        email,
        password
    }

    const response = await fetch(loginUrl, {
        method: 'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(body)
    })

    const data = await response.json();

    sessionStorage.setItem('userData', JSON.stringify({
        email: data.email,
        accessToken: data.accessToken,
        id: data._id
    }))

    window.location = './index.html'
    return data;
}
