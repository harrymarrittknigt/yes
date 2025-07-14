// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Initialize EmailJS (you'll need to create an account at https://www.emailjs.com/)
(function() {
    emailjs.init("dV9qDIC5iMexScA49"); // Replace with your EmailJS user ID
})();

// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;
    
    // Send email using EmailJS
    emailjs.send("service_ybw1bxc", "template_3sxejkf", {
        from_name: name,
        from_phone: phone,
        from_location: location,
        message: description
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert(`Thank you, ${name}! Your assembly request has been sent. We'll contact you soon at ${phone}.`);
        document.getElementById('contactForm').reset();
    }, function(error) {
        console.log('FAILED...', error);
        alert('There was an error sending your message. Please try again or call us directly.');
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});