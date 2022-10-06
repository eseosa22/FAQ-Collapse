const shuffle = document.querySelectorAll('.faq-toggle');

shuffle.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})
    