(() => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item) => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-text');
    
        question.addEventListener('click', () => {
            item.classList.toggle('open');
        });
    });
})();