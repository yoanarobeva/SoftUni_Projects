function solve() {
  let text = document.getElementById('text').value.toLowerCase();
  let convention = document.getElementById('naming-convention').value;

  let arr = text.split(' ');
  let result = '';

  if (convention === 'Camel Case') {
    result = arr.shift();
    for (let word of arr) {
      result += (word[0].toUpperCase() + word.slice(1))
    }
    
  } else if (convention === 'Pascal Case') {
    for (let word of arr) {
      result += (word[0].toUpperCase() + word.slice(1))
    }
  } else {
    result = 'Error!'
  }

  document.getElementById('result').textContent = result
}