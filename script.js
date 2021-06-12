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

const form = document.getElementById('form');
const input = document.getElementById('input');
const todoUl = document.getElementById('todos');


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
        });

        todoEl.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            todoEl.remove();
        })

        todoUl.appendChild(todoEl);

        input.value = '';
    }
}

