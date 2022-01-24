const menu = document.getElementById('menu');
const ul = document.getElementById('ul');
const close = document.getElementById('close');

menu.addEventListener('click', event => {
    ul.style.display = 'flex';
});

close.addEventListener('click', event => {
    ul.style.display = 'none';
});

