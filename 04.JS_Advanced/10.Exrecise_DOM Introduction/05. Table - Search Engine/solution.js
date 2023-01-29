function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let text = Array.from(document.querySelectorAll('tr'));
      let input = document.getElementById('searchField').value;
      
      for (let el of text) {
         if (el.textContent.includes(input) && input !== '') {
            el.classList.add('select');
         } else {
            el.classList.remove('select');
         }
      } 
      document.getElementById('searchField').value = '';
   }
}