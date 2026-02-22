const startDate = new Date("2023-02-14T00:00:00");
const counter = document.querySelector("#counter strong");
const toggleTheme = document.querySelector("#toggleTheme");
const confettiButton = document.querySelector("#confetti");
const letter = document.querySelector("#letter");
const openLetter = document.querySelector("#openLetter");
const closeLetter = document.querySelector("#closeLetter");

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;
  const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
  counter.textContent = days.toString();
}

function toggleMood() {
  document.body.classList.toggle("dark");
}

function sprinkleHearts() {
  const heart = document.createElement("span");
  heart.textContent = "💗";
  heart.className = "floating-heart";
  heart.style.left = `${Math.random() * 80 + 10}%`;
  heart.style.animationDuration = `${Math.random() * 2 + 2}s`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

function openLoveLetter() {
  if (typeof letter.showModal === "function") {
    letter.showModal();
  }
}

function closeLoveLetter() {
  letter.close();
}

updateCounter();
setInterval(updateCounter, 1000 * 60 * 60);

toggleTheme.addEventListener("click", toggleMood);
confettiButton.addEventListener("click", () => {
  sprinkleHearts();
  sprinkleHearts();
  sprinkleHearts();
});
openLetter.addEventListener("click", openLoveLetter);
closeLetter.addEventListener("click", closeLoveLetter);

const heartStyle = document.createElement("style");
heartStyle.textContent = `
  .floating-heart {
    position: fixed;
    bottom: 20px;
    font-size: 24px;
    animation: floatUp 3s ease-in forwards;
    z-index: 20;
  }

  @keyframes floatUp {
    0% {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
    100% {
      transform: translateY(-120px) scale(1.4);
      opacity: 0;
    }
  }
`;

document.head.appendChild(heartStyle);
