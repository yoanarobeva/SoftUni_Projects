import { showHomeView } from './home.js';

showHomeView();
const homeBtn = document.getElementById('homeBtn')
homeBtn.addEventListener('click', showHomeView);
