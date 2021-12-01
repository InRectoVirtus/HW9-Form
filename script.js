let regExp = /^[\w\s]{2,15}$/;

let ul = document.getElementById('listUl');
let input = document.getElementById('inputText');
let form = document.getElementById('form');


input.addEventListener('change', () => {
    if (input.value.length === 0) {
        input.classList.add('none');
    } else if (input.value.match(regExp)) {
        input.classList.add('valid');
        input.classList.remove('invalid');
        input.classList.remove('none');
    } else if (!input.value.match(regExp)) {
        input.classList.add('invalid');
        input.classList.remove('valid');
        input.classList.remove('none');
    } 
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value.match(regExp)) {
        ul.appendChild(addListButton(input.value));
        input.value = '';
        input.classList.add('none');
    }
});

function addListButton(t) {

    let li = document.createElement('li');
    li.innerText = t;

    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.classList.add('deleteButton');
    
    li.appendChild(deleteButton);

    return li;
};


ul.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle('background')
    } else if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
});