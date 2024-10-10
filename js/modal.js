(() => {
    const mobileMenu = document.querySelector('.menu-container');
    const mobileMenuContainer = document.querySelector('.js-menu-container');
    

    const toggleMenu = () => {
        const isMenuOpen = 
        mobileMenu.classList.toggle("change");
        mobileMenuContainer.classList.toggle('is-open');
        
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }

      mobileMenu.addEventListener('click', toggleMenu);
      mobileMenuContainer.addEventListener('click', toggleMenu);


      window.matchMedia('(min-width: 1440px)').addEventListener('change', e => {
      if (!e.matches) return;
      mobileMenu.classList.remove('is-open');
      document.body.style.overflow = '';
    });
  })();