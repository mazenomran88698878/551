// scripts.js

// مؤقت للشراء
const timerElement = document.createElement("p");
timerElement.id = "timer";
timerElement.innerText = "ينتهي العرض خلال: ";
document.querySelector("#payment").appendChild(timerElement);

let countdown = 300; // 5 دقائق بالثواني

const countdownTimer = setInterval(() => {
    const minutes = Math.floor(countdown / 60);
    const seconds = countdown % 60;
    timerElement.innerText = `ينتهي العرض خلال: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    countdown--;

    if (countdown < 0) {
        clearInterval(countdownTimer);
        timerElement.innerText = "انتهى العرض!";
    }
}, 1000);
