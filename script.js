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

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // You can implement actual form submission here
            // For now, we'll just show a success message
            alert(`Thank you ${name}! Your message has been sent.`);
            
            // Reset the form
            contactForm.reset();
            
            /* 
            // If you want to implement actual email sending, you could use a service like FormSpree
            // Replace the alert with this code and update the action URL
            
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('message', message);
            
            fetch('https://formspree.io/f/your-form-id', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    alert(`Thank you ${name}! Your message has been sent.`);
                    contactForm.reset();
                } else {
                    alert('Oops! There was a problem submitting your form.');
                }
            })
            .catch(error => {
                alert('Oops! There was a problem submitting your form.');
                console.error(error);
            });
            */
        });
    }
});
