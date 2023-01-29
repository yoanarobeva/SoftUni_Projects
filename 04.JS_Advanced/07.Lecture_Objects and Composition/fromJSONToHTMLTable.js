function fromJSONToHTMLTable(string) {
    let input = JSON.parse(string);

    console.log('<table>');

    let keys = Object.keys(input[0]);

    makeKeyRow(keys);
    makeValueRow(input)

    function makeKeyRow(keys) {
        let text = ''
        keys.forEach(x => text += `<th>${escapeHtml(x)}</th>`);
        console.log(`\t<tr>${text}</tr>`);
    }
    
   function makeValueRow(input) {
        for (let el of input) {
            let values = Object.values(el);
            let text2 = '';
            values.forEach(x => text2 += `<td>${escapeHtml(x)}</td>`)

            console.log(`\t<tr>${text2}</tr>`);
        }
    }

    console.log('</table>');

    function escapeHtml(unsafe)
    {
        return unsafe.toString()
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
}

fromJSONToHTMLTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`
)