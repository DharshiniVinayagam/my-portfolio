document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 1200,
        easing: 'ease-in-out',
        once: true,
    });aa
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: "smooth",
            });
        }
    });
});


const typingText = document.querySelector("#typing-text");
const words = ["Full-Stack Developer"];
let wordIndex = 0;
let charIndex = 0;

function typeWord() {
    if (charIndex < words[wordIndex].length) {
        typingText.textContent += words[wordIndex][charIndex];
        charIndex++;
        setTimeout(typeWord, 150);
    } else {
        setTimeout(eraseWord, 1000);
    }
}

function eraseWord() {
    if (charIndex > 0) {
        typingText.textContent = typingText.textContent.slice(0, -1);
        charIndex--;
        setTimeout(eraseWord, 100);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeWord, 500);
    }
}
typeWord();