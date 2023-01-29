function solve(){
   let authorField = document.getElementById('creator');
   let titleField = document.getElementById('title');
   let categoryField = document.getElementById('category');
   let contentField = document.getElementById('content');

   let articleContainer = document.querySelector('.site-content main section');
   let archiveContainer = document.querySelector('.archive-section ol');
   let archive = [];

   let createBtn = document.querySelector('.btn.create');
   createBtn.addEventListener('click', (ev) => {
      ev.preventDefault();
      create(ev, authorField.value, titleField.value, categoryField.value, contentField.value);
      clearInput();
   })

   function create(ev, author, title, category, content) {

      let article = elGenerator('article', '', articleContainer);
      elGenerator('h1', title, article);
      let categoryContainer = elGenerator('p', `Category: `, article);
      elGenerator('strong', category, categoryContainer);
      let creatorContainer = elGenerator('p', `Creator: `, article);
      elGenerator('strong', author, creatorContainer);
      elGenerator('p', content, article);
      
      let btns = elGenerator('div', '', article);
      btns.classList.add('buttons')
      let deleteBtn = elGenerator('button', 'Delete', btns);
      deleteBtn.classList.add('btn');
      deleteBtn.classList.add('delete');
      deleteBtn.addEventListener('click', (ev) => deleteF(ev, article));

      let archiveBtn = elGenerator('button', 'Archive', btns);
      archiveBtn.classList.add('btn');
      archiveBtn.classList.add('archive');
      archiveBtn.addEventListener('click', (ev) => archiveF(ev, title, article));
   }

   function deleteF(ev, _article) {
      _article.remove();
   }

   function archiveF(ev, _title, _article) {
      elGenerator('li', _title, archiveContainer)
     Array.from(document.querySelectorAll('.archive-section ol li')).sort((a,b) => a.textContent.localeCompare(b.textContent)).forEach(x => archiveContainer.appendChild(x))
      _article.remove();
   }

   function elGenerator(type, content, parent) {
      const element = document.createElement(type);
      element.textContent = content;
  
      if (parent) {
        parent.appendChild(element);
      }
      return element;
   }

   function clearInput() {
      authorField.value = '';
      titleField.value = '';
      categoryField.value = '';
      contentField.value = '';
   }
}
