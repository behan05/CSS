const menubtn = document.querySelector(".menubtn");
const closebtn = document.querySelector(".closebtn");
const nav_menu = document.querySelector(".nav-menu");

function openMenu() {
    nav_menu.style.display = "block";
    menubtn.style.display = "none";
    closebtn.style.display = "block";
}
function closeMenu() {
    nav_menu.style.display = "none";
    menubtn.style.display = "block";
    closebtn.style.display = "none";
}