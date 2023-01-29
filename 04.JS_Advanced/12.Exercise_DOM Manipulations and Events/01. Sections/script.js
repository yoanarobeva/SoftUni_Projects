function create(words) {
   let container = document.getElementById('content');
   for (let el of words){
      let newDiv = document.createElement('div');
      let newP = document.createElement('p');

      newDiv.appendChild(newP);
      newP.style.display = 'none'
      newDiv.addEventListener('click', onClick);
      newP.textContent = el;
      container.appendChild(newDiv);
   }

   function onClick(event) {
      event.target.querySelector('p').style.display = 'block';
   }
}