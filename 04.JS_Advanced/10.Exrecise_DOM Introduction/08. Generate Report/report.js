function generateReport() {
    let selectionOptions = document.querySelectorAll('th input')
    let output = document.getElementById('output');
    let report = '';
    
    for (let selectionOption of selectionOptions) {
        if (selectionOption.checked) {
            report += JSON.stringify(selectionOption.innerHTML);
        }
    }
}