document.querySelectorAll('.lightbox').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const imgSrc = link.href;
      const lightboxDiv = document.createElement('div');
      lightboxDiv.className = 'lightbox-modal';
      lightboxDiv.innerHTML = `<img src="${imgSrc}" alt=""><span class="close">&times;</span>`;
      document.body.appendChild(lightboxDiv);

      lightboxDiv.querySelector('.close').onclick = () => {
        document.body.removeChild(lightboxDiv);
      };
    });
  });

  // Duplicate hamburger and navUl declaration removed

  let lastScrollY = window.scrollY;
  const header = document.querySelector('header');

  window.addEventListener('scroll', () => {
    if (!header) return;
    if (window.scrollY > lastScrollY && window.scrollY > 80) {
      // Scrolling down
      header.classList.add('hide-nav');
      header.classList.remove('show-nav');
    } else {
      // Scrolling up
      header.classList.remove('hide-nav');
      header.classList.add('show-nav');
    }
    lastScrollY = window.scrollY;
  });

  // Ensure header is visible on page load
  header.classList.add('show-nav');

  document.querySelectorAll('.lightbox').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const imgSrc = link.href;
      const lightboxDiv = document.createElement('div');
      lightboxDiv.className = 'lightbox-modal';
      lightboxDiv.innerHTML = `<img src="${imgSrc}" alt=""><span class="close">&times;</span>`;
      document.body.appendChild(lightboxDiv);

      lightboxDiv.querySelector('.close').onclick = () => {
        document.body.removeChild(lightboxDiv);
      };
    });
  });

  const hamburger = document.querySelector('.hamburger');
  const navUl = document.querySelector('nav ul');
  hamburger.addEventListener('click', () => {
    navUl.classList.toggle('open');
  });