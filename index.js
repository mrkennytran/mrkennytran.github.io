/*For hamburger menu functionality*/
const navToggle = document.querySelector('.nav-toggle');

/*Redirect to selected section in hamburger*/
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});


navLinks.forEach(link => {
    link.addEventListener('click', () => {
        /*Ensure nav-open is closed when clicking on section*/ 
        document.body.classList.remove('nav-open');
    })
})

