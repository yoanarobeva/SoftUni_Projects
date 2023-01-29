function colorize() {

    let content = document.querySelectorAll("table tr")
    console.log(content);

    for (let i = 1; i < content.length; i++) {
        if (i % 2 !== 0) {
            content[i].style.background = 'teal';
        }
    }
}