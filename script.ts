// function toggleMenu() {
//     const navLinks = document.getElementById("navLinks");
//     if (navLinks) {
//         navLinks.classList.toggle("show");
//     }
//     // navLinks.style.transition = "max-height 0.5s ease-in-out";
// }

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
        if (navLinks && navLinks.classList.contains("show")) { // Add null check
            navLinks.classList.remove("show");
        }
    });
});

// Show or hide scroll-to-top button based on scroll position
window.onscroll = function() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) { // Add null check
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    }
};

// Scroll to top with smooth effect
const scrollToTopButton = document.getElementById("scrollTopBtn");
if (scrollToTopButton) { // Add null check
    scrollToTopButton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// Initialize EmailJS (replace 'YOUR_USER_ID' with your EmailJS user ID)
if (typeof emailjs !== "undefined") { // Ensure emailjs is defined
    emailjs.init("YOUR_USER_ID");
}

const contactFormElement = document.getElementById("contactForm");
if (contactFormElement) { // Add null check
    contactFormElement.addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent default form submission
        
        // Prepare the form data
        const formData = {
            from_name: (this.querySelector("[name='name']") && (this.querySelector("[name='name']") as any).value) || "",
            from_email: (this.querySelector("[name='email']") && (this.querySelector("[name='email']") as any).value) || "",
            to_email: "aadhikassim@gmail.com", // Send to your email address
            message: (this.querySelector("[name='message']") && (this.querySelector("[name='message']") as any).value) || ""
        };
        
        // Send email using EmailJS (replace with your EmailJS service ID and template ID)
        if (typeof emailjs !== "undefined") { // Ensure emailjs is defined
            emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData)
                .then(function(response) {
                    alert("Message sent successfully!");  // Success message
                }, function(error) {
                    alert("Failed to send message. Please try again.");  // Error message
                });
        }
    });
}

// Check for dark mode preference
const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");

// Toggle dark mode based on user preference
const applyDarkMode = (matches) => {
    document.body.classList.toggle("dark-mode", matches);
    document.body.classList.toggle("theme-transition"); // CSS class for transition effect
};

// Listen for DOMContentLoaded event to set initial theme
document.addEventListener("DOMContentLoaded", () => {
    applyDarkMode(darkModePreference.matches);
});

// Listen for changes in user preference
darkModePreference.addEventListener("change", (e) => {
    applyDarkMode(e.matches);
});

// Import or define 'emailjs' to resolve undefined error
// Example: import emailjs from 'emailjs-com'; (if using a module system)
// Ensure emailjs is available globally or imported correctly
declare const emailjs: any; // Add this declaration if emailjs is globally available