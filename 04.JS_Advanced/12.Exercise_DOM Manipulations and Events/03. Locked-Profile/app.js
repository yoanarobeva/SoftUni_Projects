function lockedProfile() {
    let buttons = Array.from(document.querySelectorAll('.profile button'));

    buttons.forEach(x => x.addEventListener('click', onClick));

    function onClick(event) {
        let currentProfile = event.target.parentElement;
        let currentButton = event.target;
        let unlockButton = currentProfile.querySelector('input[value="unlock"]');
        let hiddenInfo = Array.from(currentProfile.querySelectorAll('div')).find(x => x.id.includes('HiddenFields'));

        if (unlockButton.checked) {
            if (currentButton.textContent === 'Show more') {
                hiddenInfo.style.display = 'block';
                currentButton.textContent = 'Hide it';
            } else {
                hiddenInfo.style.display = 'none';
                currentButton.textContent = 'Show more';
            }
        }
    }
}