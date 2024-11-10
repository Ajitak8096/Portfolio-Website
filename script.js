// Smooth scroll for anchor links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// GSAP Animations for hero section and profile photo
gsap.from("header h2", { opacity: 0, duration: 1, y: -50 });
gsap.from("header p", { opacity: 0, duration: 1, y: 50, delay: 0.5 });
gsap.from(".profile-photo", { opacity: 0, duration: 1, scale: 0.5, delay: 0.8 });
gsap.from(".btn", { opacity: 0, duration: 1, scale: 0.8, delay: 1 });

// Scroll-triggered animations for each section
const sections = document.querySelectorAll("section");
sections.forEach(section => {
    gsap.from(section, {
        scrollTrigger: section,
        opacity: 0,
        duration: 1,
        y: 50,
        ease: "power2.inOut"
    });
});
