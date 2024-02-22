// const menu = document.getElementById('menu');
// const menubtn = document.querySelector('.menubtn');

// function openMenu() {
//     menu.style.display = "block"
// }

const menu = document.getElementById('menu');
const menubtn = document.querySelector('.menubtn');
const closebtn = document.querySelector('.closebtn');

function openMenu() {
    menu.style.display = "block";
    menubtn.style.display = "none";
    closebtn.style.display = "block";
}

function closeMenu() {
    menubtn.style.display = "block";
    closebtn.style.display = "none";
    menu.style.display = "none";
}