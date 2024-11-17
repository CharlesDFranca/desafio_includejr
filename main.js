document.addEventListener('DOMContentLoaded', () => {
    const cardContainers = document.querySelectorAll('.cards-container'); // Seleciona cada container de cards

    cardContainers.forEach(container => {
        const cards = container.querySelectorAll('.card'); // Seleciona os cards dentro do container atual

        function setFocus(card) {
            cards.forEach(c => c.classList.remove('focused'));
            if (card) {
                card.classList.add('focused');
            } else {
                cards[1]?.classList.add('focused'); // Foco inicial no segundo card do container
            }
        }

        // Adiciona eventos de mouse aos cards deste container
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => setFocus(card));
            card.addEventListener('mouseleave', () => setFocus(null));
        });

        // Define o foco inicial para o segundo card do container
        setFocus(null);
    });
});
