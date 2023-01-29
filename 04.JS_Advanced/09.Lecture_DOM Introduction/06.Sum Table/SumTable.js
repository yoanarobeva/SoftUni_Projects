function sumTable() {
    let content = document.querySelectorAll("table tr td");
    let sum = 0;
    
    for (let i = 1; i < content.length - 2; i+=2) {
        sum += Number(content[i].textContent);
    }

    document.getElementById("sum").textContent = sum;
}