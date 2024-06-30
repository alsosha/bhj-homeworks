revealElements = document.querySelectorAll('.reveal');
window.addEventListener('scroll', scrollHandler);

function scrollHandler() {
    for (revealElement of revealElements) {
        elementPosition = revealElement.getBoundingClientRect()
        if (elementPosition.bottom > window.innerHeight || elementPosition.top < 0) {
            revealElement.classList.toggle('reveal_active', false);
        } else {
            revealElement.classList.toggle('reveal_active', true);
        }
    }
}