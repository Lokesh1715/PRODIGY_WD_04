document.addEventListener('DOMContentLoaded', function () {
    

    // Add scroll event listener to change header background on scroll
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Add fade-in effect on page load
    const sections = document.querySelectorAll('.hero, .about, .projects, .contact');
    sections.forEach(section => {
        section.style.opacity = '1';
    });

   
});
