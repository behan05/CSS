const imageDiv = document.querySelector(".container__image");
const password = document.querySelector(".password");
const email = document.querySelector(".email");
const button = document.querySelector("button");

password.addEventListener("click", () => {
    imageDiv.style.backgroundImage = 'url("https://images.emojiterra.com/twitter/v14.0/512px/1f648.png")'
})
email.addEventListener("click", () => {
    imageDiv.style.backgroundImage = 'url("https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/1f60e.gif")'
})
button.addEventListener("click", () => {
    imageDiv.style.backgroundImage = 'url("https://images.emojiterra.com/google/noto-emoji/unicode-15/animated/1fae3.gif")'
})
