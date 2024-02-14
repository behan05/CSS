const main = document.querySelector('.main');
const body = document.querySelector("body");

main.addEventListener('click', (e) => {
    body.style.backgroundColor = e.target.className;
})






