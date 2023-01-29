function notify(message) {
  let notificationField = document.getElementById('notification');
  notificationField.textContent = message;
  notificationField.classList.add('notification');
  notificationField.style.display = 'block'

  notificationField.addEventListener('click', hide);
  function hide(event) {
    event.target.style.display = 'none'
  }
}