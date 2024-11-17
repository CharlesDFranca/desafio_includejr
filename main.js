const cards = document.querySelectorAll('.card');

function setFocus(card) {
    cards.forEach(c => c.classList.remove('focused'));
    if (card) {
        card.classList.add('focused');
    } else {
        cards[1].classList.add('focused');
    }
}


cards.forEach(card => {
    card.addEventListener('mouseenter', () => setFocus(card));
    card.addEventListener('mouseleave', () => setFocus(null));
});

setFocus(null);