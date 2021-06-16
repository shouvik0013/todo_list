// const todoList = document.querySelectorAll('.task');
// console.log(todoList);

// todoList.forEach((listTask) => {
//     listTask.addEventListener('click', () => {
//         makeStrike(listTask);
//         console.log('Clicked');
//     });
// });


// function makeStrike(elem) {
//     let status = elem.className;
//     console.log(status);
//     if (status.includes('strike')) {
//         elem.classList.remove('strike');
//         return;
//     }
//     elem.classList.add('strike');
// }
// if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
//     document.body.style.width = '300px';
//   }else{
//     document.write("not mobile");
//   }

const form = document.getElementById('form');
const input = document.getElementById('input');
const todoUl = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));

if(todos) {
    todos.forEach(todo => {
        addTodo(todo);
    });
}

form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    addTodo();
});

function addTodo(todo) {
    let todoText = input.value;

    if(todo) {
        todoText = todo.text;
    }
    console.log(todoText);

    if(todoText) {
        const todoEl = document.createElement('li');
        if(todo && todo.completed) {
            todoEl.classList.add('completed');
        }

        todoEl.innerText = todoText;

        todoEl.addEventListener('click', (ev) => {
            todoEl.classList.toggle('completed');
            updateLS();
        });

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todoEl.remove();
            updateLS();
        })

        todoUl.appendChild(todoEl);

        input.value = '';

        updateLS();
    }
}

function updateLS() {
    let todosEl = document.querySelectorAll('li');

    const todos = [];

    todosEl.forEach(elem => {
        todos.push({
            text: elem.innerText,
            completed: elem.classList.contains('completed')
        });
    });
    localStorage.setItem('todos', JSON.stringify(todos));
}

if(window.innerWidth <= 700) {
    let linebreak = document.createElement('br')
    let instruction = document.getElementById('instruction');
    instruction.innerHTML = "Click to toggle complete<br>Press and hold to remove";
}

