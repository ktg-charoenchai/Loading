const text = document.getElementById("text");

const messages = [
      "Loading...",
      "Wait a minute...",
      "Ready...",
      "Done!"
];

let index = 0;
let count = 0;

const interval = setInterval(() => {
index = (index + 1) % messages.length;
count++;

text.style.opacity = 0;

setTimeout(() => {
      text.textContent = messages[index];
      text.style.opacity = 1;
}, 300);

if (count === 3) {
      clearInterval(interval);
      setTimeout(() => {
            window.location.href = "https://ktg-charoenchai.github.io/BWS-Sci-tech-gen-1-student-Home/";
        }, 300);
      }

}, 3000);

