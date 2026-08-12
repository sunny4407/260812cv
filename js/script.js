// Theme Toggle
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.documentElement;
const icon = themeToggleBtn.querySelector('i');

// Check for saved user preference, if any, on load of the website
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

themeToggleBtn.addEventListener('click', () => {
    let theme = body.getAttribute('data-theme');
    
    if (theme === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
});

// Cursor Glow Effect
const cursorGlow = document.querySelector('.cursor-glow');
let isMouseMoving = false;

document.addEventListener('mousemove', (e) => {
    isMouseMoving = true;
    cursorGlow.style.opacity = '1';
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});

document.addEventListener('mouseleave', () => {
    cursorGlow.style.opacity = '0';
});

// Scroll Reveal Animation
const sections = document.querySelectorAll('.section-reveal');

const revealSection = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 100;

    sections.forEach((section) => {
        const elementTop = section.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            section.classList.add('active');
        }
    });
};

window.addEventListener('scroll', revealSection);
// Trigger once on load
revealSection();

// Navbar Background opacity on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});
