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

    // Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Progressive image loading
document.querySelectorAll('img.lazy').forEach(img => {
    // Create a new image object
    const fullRes = new Image();
    
    // When the full resolution image loads
    fullRes.onload = () => {
        img.src = fullRes.src;  // Switch to full resolution image
        img.classList.add('loaded');  // Trigger fade in
    };
    
    // Start loading the full resolution image
    fullRes.src = img.dataset.src;
});
