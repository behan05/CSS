const menubtn = document.querySelector(".menubtn");
const closebtn = document.querySelector(".closebtn");
const menu_main_content = document.querySelector(".menu_main_content");

function openMenu() {
    menu_main_content.style.display = "block";
    menubtn.style.display = "none";
    closebtn.style.display = "block";
}
function closeMenu() {
    menu_main_content.style.display = "none";
    menubtn.style.display = "block";
    closebtn.style.display = "none";
}