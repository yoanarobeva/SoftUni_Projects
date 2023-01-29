window.addEventListener("load", solve);

function solve() {
  let titleField = document.getElementById('post-title');
  let categoryField = document.getElementById('post-category');
  let contentField = document.getElementById('post-content');
  let publishBtn = document.getElementById('publish-btn');

  publishBtn.addEventListener('click', onClick);

  function onClick(event) {
    event.preventDefault()

    if (titleField.value === '' || categoryField.value === '' || contentField.value === '') {
      return;
    }

    let input = {
      _title: titleField.value,
      _category: categoryField.value,
      _content: contentField.value
    }

    let reviewList = document.getElementById('review-list');

    let newLi = document.createElement('li');
    newLi.classList.add('rpost');
    reviewList.appendChild(newLi);

    let newArticle = document.createElement('article');
    newLi.appendChild(newArticle);

    newHtmlEl('h4', newArticle, input._title);
    newHtmlEl('p', newArticle, `Category: ${input._category}`);
    newHtmlEl('p', newArticle, `Content: ${input._content}`);

    let editBtn = document.createElement('button');
    editBtn.classList.add('action-btn');
    editBtn.classList.add('edit');
    editBtn.textContent = 'Edit';
    newLi.appendChild(editBtn);

    editBtn.addEventListener('click', (ev) => {
      titleField.value = input._title;
      categoryField.value = input._category;
      contentField.value = input._content;
      ev.target.parentElement.remove();
    })

    let approveBtn = document.createElement('button');
    approveBtn.classList.add('action-btn');
    approveBtn.classList.add('approve');
    approveBtn.textContent = 'Approve';
    newLi.appendChild(approveBtn);

    approveBtn.addEventListener('click', (ev) => {
      ev.target.parentElement.remove();
      let uploadedPost = document.getElementById("published-list");
      uploadedPost.appendChild(newLi);
      newLi.removeChild(editBtn);
      newLi.removeChild(approveBtn);
    })

    clearInput();

    function clearInput() {
      titleField.value = '';
      categoryField.value = '';
      contentField.value = '';
    }

    function newHtmlEl(elType, parent, textContent) {
      let newEl = document.createElement(elType);
      newEl.textContent = textContent;
      parent.appendChild(newEl);

    }
  }

  let clearBtn = document.getElementById('clear-btn');
  clearBtn.addEventListener('click', (ev) => {
  let tempArr = Array.from(document.getElementById("published-list").querySelectorAll('li'))
  tempArr.forEach(x => x.remove());
  })
}
