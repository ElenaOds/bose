(() => {
    const blackBtn = document.querySelector('#order-btn-black');
    const blackBtnActive = document.querySelector('#order-btn-black-active');
    const greyBtn = document.querySelector('#order-btn-grey');
    const greyBtnActive = document.querySelector('#order-btn-grey-active');
    const img1 = document.querySelector('#order-img1');
    const img2 = document.querySelector('#order-img2');

    img2.style.display = 'none';
    blackBtn.style.display = 'none';
    greyBtnActive.style.display = 'none';

    blackBtn.addEventListener('click', () => {
        img1.style.display = 'block';
        img2.style.display = 'none';
        blackBtn.style.display = 'none';
        greyBtnActive.style.display = 'none';
        blackBtnActive.style.display = 'block';
        greyBtn.style.display = 'block';

      });

      greyBtn.addEventListener('click', () => {
        img1.style.display = 'none';
        img2.style.display = 'block';
        blackBtn.style.display = 'block';
        greyBtnActive.style.display = 'block';
        blackBtnActive.style.display = 'none';
        greyBtn.style.display = 'none';
      });
})();