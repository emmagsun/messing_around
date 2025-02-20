document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".typing-text");
    const phrases = ["a Stanford CS & Energy Engineering student.", "passionate about sustainability.", "an AI & ML enthusiast.", "a lover of the outdoors."];
    let phraseIndex = 0;
    let letterIndex = 0;
    let currentPhrase = "";
    let isDeleting = false;

    function typeEffect() {
        currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            textElement.innerHTML = currentPhrase.substring(0, letterIndex - 1);
            letterIndex--;
        } else {
            textElement.innerHTML = currentPhrase.substring(0, letterIndex + 1);
            letterIndex++;
        }

        let speed = isDeleting ? 50 : 100;

        if (!isDeleting && letterIndex === currentPhrase.length) {
            speed = 1500; // Pause after finishing a phrase
            isDeleting = true;
        } else if (isDeleting && letterIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            speed = 300;
        }

        setTimeout(typeEffect, speed);
    }

    typeEffect();
});
