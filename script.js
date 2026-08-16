(() => {
  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  const topButton = document.querySelector('.scroll-top');
  const contactButton = document.querySelector('.floating-contact');
  const bodyPage = document.body.dataset.page;

  if (navToggle && header && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = header.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', String(open));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        header.classList.remove('nav-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  document.querySelectorAll('.nav-links a').forEach((link) => {
    if (link.dataset.page === bodyPage) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  if (contactButton) {
    contactButton.href = bodyPage === 'contact' ? '#contact-form' : 'contact.html';
  }

  if (topButton) {
    const updateTopButton = () => {
      topButton.classList.toggle('is-visible', window.scrollY > 320);
    };

    topButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', updateTopButton, { passive: true });
    updateTopButton();
  }
})();
