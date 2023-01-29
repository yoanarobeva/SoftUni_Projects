function attachEvents() {
    const url = 'http://localhost:3030/jsonstore/messenger';

    const sendBtn = document.getElementById('submit');
    const refreshBtn = document.getElementById('refresh');
    const nameField = document.getElementsByName('author')[0];
    const messageField = document.getElementsByName('content')[0];

    const postField = document.getElementById('messages');

    sendBtn.addEventListener('click', onSend);
    refreshBtn.addEventListener('click', onRefresh);

    function onSend() {
        if (nameField.value !== '' && messageField.value !== '') {

            const data = {'author': nameField.value, 'content': messageField.value };

            fetch(url, {
                method: 'post',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(data),
            });

            nameField.value = '';
            messageField.value = '';
        }
    }

    async function onRefresh() {
        const response = await fetch(url);
        const data = await response.json();

        let text = '';
        for (let i = 0; i < Object.values(data).length; i++) {
            let current = Object.values(data)[i];

            if (i === 0) {
                text = `${current.author}: ${current.content}`;
            } else {
                text += `\n${current.author}: ${current.content}`;
            }
        }
        //Object.values(data).forEach(x => text += `\n${x.author}: ${x.content}`)
        //text.trim();
        postField.textContent = text;
        console.log(Object.values(data));
    }
}

attachEvents();