(() => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item) => {
        const question = item.querySelector('.faq-item-wrapper');
    
        question.addEventListener('click', () => {
            item.classList.toggle('open');
        });
    });
})();