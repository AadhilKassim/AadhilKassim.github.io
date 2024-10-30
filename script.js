// Toggle the mobile menu
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
    // Animate menu toggle
    navLinks.style.transition = "max-height 0.5s ease-in-out";
}

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 60, // adjust for header height if needed
                behavior: "smooth"
            });
        }
        // Close menu on mobile after click
        const navLinks = document.getElementById("navLinks");
        if (navLinks.classList.contains("show")) {
            navLinks.classList.remove("show");
        }
    });
});

// Show or hide scroll-to-top button based on scroll position
window.onscroll = function() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
};

// Scroll to top with smooth effect
document.getElementById("scrollTopBtn").addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Initialize EmailJS (replace 'YOUR_USER_ID' with your EmailJS user ID)
emailjs.init("YOUR_USER_ID");

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent default form submission
    
    // Prepare the form data
    const formData = {
        from_name: this.name.value,
        from_email: this.email.value,
        message: this.message.value
    };
    
    // Send email using EmailJS (replace with your EmailJS service ID and template ID)
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
        .then(function(response) {
            alert("Message sent successfully!");  // Success message
        }, function(error) {
            alert("Failed to send message. Please try again.");  // Error message
        });
});
