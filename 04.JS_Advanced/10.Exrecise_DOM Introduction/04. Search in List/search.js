function search() {
   let towns = Array.from(document.querySelectorAll('#towns li'));
   let input = document.getElementById('searchText').value;
   let result = document.getElementById('result');
   let count = 0;
   
   for (let el of towns) {
      if (el.textContent.includes(input) && input !== '') {
         count ++;
         el.style.fontWeight = 'bold';
         el.style.textDecoration = 'underline';
      } else {
         el.style.fontWeight = 'normal';
         el.style.textDecoration = 'none';
      }
   }
   result.textContent = `${count} matches found`
}
