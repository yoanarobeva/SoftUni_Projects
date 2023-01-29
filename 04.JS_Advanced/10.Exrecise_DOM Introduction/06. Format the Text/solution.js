function solve() {
  let text = document.getElementById('input');
  let outputText = document.getElementById('output');
  let newParagraph = [];

  let textArr = text.value.split(".").filter(x => x !== "");

  while (textArr.length > 0) {
    let paragraph = textArr.splice(0,3).join('. ');
    let p = document.createElement('p');
    p.textContent = paragraph + '.';
    outputText.appendChild(p);
  }

}