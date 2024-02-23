const time = document.querySelector(".time");

setInterval(() => {
    const currentTime = new Date();
    time.innerHTML = currentTime.toLocaleTimeString();
},1000)
