function solve() {
    let taskField = document.getElementById('task');
    let decriptionField = document.getElementById('description');
    let dueDateField = document.getElementById('date');

    let addBtn = document.getElementById('add');
    addBtn.addEventListener('click', addTask);

    function addTask(event) {
        event.preventDefault()
        if (taskField.value && decriptionField.value && dueDateField.value) {
            let container = document.querySelector('.orange').parentElement.parentElement.querySelectorAll('div')[1];
            console.log(container);
            let newArticle = document.createElement('article');
            container.appendChild(newArticle);

            let  newH3 = document.createElement('h3');
            newH3.textContent = taskField.value;
            newArticle.appendChild(newH3);

            let newDescr = document.createElement('p');
            newDescr.textContent = `Description: ${decriptionField.value}`;
            newArticle.appendChild(newDescr);

            let newDueDate = document.createElement('p');
            newDueDate.textContent = `Due Date: ${dueDateField.value}`;
            newArticle.appendChild(newDueDate);

            let btns = document.createElement('div');
            btns.classList.add('flex');
            newArticle.appendChild(btns);

            let startBtn = document.createElement('button');
            startBtn.classList.add('green');
            startBtn.textContent = 'Start';
            btns.appendChild(startBtn);
            startBtn.addEventListener('click', startTask);

            let deleteBtn = document.createElement('button');
            deleteBtn.classList.add('red');
            deleteBtn.textContent = 'Delete';
            btns.appendChild(deleteBtn);
            deleteBtn.addEventListener('click', deleteTask)

            let finishBtn = document.createElement('button');
            finishBtn.classList.add('orange');
            finishBtn.textContent = 'Finish';
            finishBtn.addEventListener('click', finishTask)

            taskField.value = '';
            decriptionField.value = '';
            dueDateField.value = '';
            container.appendChild(newArticle);

            function startTask() {
                colInProgress = document.querySelector('.yellow').parentElement.parentElement.querySelectorAll('div')[1];
               startBtn.parentElement.removeChild(startBtn);
               btns.appendChild(finishBtn);
               colInProgress.appendChild(newArticle);
            }
        
            function deleteTask() {
                newArticle.remove();
            }
        
            function finishTask() {
                colComplete = document.querySelector('.green').parentElement.parentElement.querySelectorAll('div')[1];
                btns.remove()
                colComplete.appendChild(newArticle)
            }
        }
    }
}