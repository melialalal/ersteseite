document.addEventListener('DOMContentLoaded', () => {
    // This is where you could add more complex behaviors like a
    // responsive navigation menu that appears on smaller screens.
    // For a simple static page, it's not strictly necessary.

    // Example: A simple "smooth scroll" for anchor links.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});