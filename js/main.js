/* ============================================
   BAR WOOD BALL - Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Loader ---
  const loader = document.getElementById('loader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.style.overflow = '';
      initAnimations();
    }, 1800);
  });

  // Fallback: hide loader after 3s max
  setTimeout(() => {
    loader.classList.add('hidden');
    document.body.style.overflow = '';
  }, 3000);

  // --- Particles ---
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = Math.random() * 100 + '%';
      particle.style.width = (Math.random() * 3 + 1) + 'px';
      particle.style.height = particle.style.width;
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
      particle.style.opacity = Math.random() * 0.5 + 0.1;
      particlesContainer.appendChild(particle);
    }
  }

  // --- Navbar scroll ---
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');

  function handleScroll() {
    const scrollY = window.scrollY;

    // Navbar background
    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Active link
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- Smooth scroll for all anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 70;
        const top = target.offsetTop - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }

      // Close mobile menu
      mobileMenu.classList.remove('active');
      hamburger.classList.remove('active');
      document.body.style.overflow = '';
    });
  });

  // --- Mobile menu ---
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  // --- Scroll reveal (Intersection Observer) ---
  function initAnimations() {
    const fadeElements = document.querySelectorAll('.fade-up');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));
  }

  // Also init immediately for elements in the viewport
  setTimeout(initAnimations, 100);

  // --- Counter animation ---
  const counters = document.querySelectorAll('.stat-number[data-target]');
  let countersAnimated = false;

  function animateCounters() {
    if (countersAnimated) return;

    const aboutSection = document.getElementById('about');
    const rect = aboutSection.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.8) {
      countersAnimated = true;

      counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const duration = 2000;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);

          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(eased * target);

          counter.textContent = current.toLocaleString();

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target.toLocaleString();
          }
        }

        requestAnimationFrame(updateCounter);
      });
    }
  }

  window.addEventListener('scroll', animateCounters, { passive: true });

  // --- Store filter ---
  const filterBtns = document.querySelectorAll('.filter-btn');
  const storeCards = document.querySelectorAll('.store-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      storeCards.forEach(card => {
        if (filter === 'all' || card.dataset.category === filter) {
          card.style.display = '';
          card.classList.remove('hidden');
          // Re-trigger animation
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        } else {
          card.classList.add('hidden');
          card.style.display = 'none';
        }
      });
    });
  });

  // --- Menu tabs ---
  const menuTabs = document.querySelectorAll('.menu-tab');
  const menuContents = document.querySelectorAll('.menu-content');

  menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      menuTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.dataset.tab;
      menuContents.forEach(content => {
        content.classList.remove('active');
        if (content.id === 'tab-' + target) {
          content.classList.add('active');
          // Re-trigger fade-up for new tab content
          content.querySelectorAll('.fade-up').forEach(el => {
            el.classList.remove('visible');
            setTimeout(() => el.classList.add('visible'), 50);
          });
        }
      });
    });
  });

  // --- Store Map Modal ---
  const storeModal = document.getElementById('storeModal');
  const storeModalOverlay = document.getElementById('storeModalOverlay');
  const storeModalClose = document.getElementById('storeModalClose');
  const storeModalName = document.getElementById('storeModalName');
  const storeModalMap = document.getElementById('storeModalMap');
  const storeModalAddress = document.getElementById('storeModalAddress');
  const storeModalHours = document.getElementById('storeModalHours');
  const storeModalPhone = document.getElementById('storeModalPhone');

  document.querySelectorAll('.store-card[data-map]').forEach(card => {
    card.addEventListener('click', () => {
      const mapQuery = card.dataset.map;
      const name = card.querySelector('h3').textContent;
      const address = card.dataset.address || '';
      const hours = card.dataset.hours || '';
      const phone = card.dataset.phone || '';

      storeModalName.textContent = name;
      storeModalMap.innerHTML = '<iframe src="https://maps.google.com/maps?q=' + encodeURIComponent(mapQuery) + '&t=&z=15&ie=UTF8&iwloc=&output=embed" allowfullscreen loading="lazy"></iframe>';

      storeModalAddress.innerHTML = address ? '📍 ' + address : '';
      storeModalAddress.style.display = address ? '' : 'none';

      storeModalHours.innerHTML = hours ? '🕐 ' + hours : '';
      storeModalHours.style.display = hours ? '' : 'none';

      if (phone) {
        storeModalPhone.innerHTML = '📞 <a href="tel:' + phone.replace(/-/g, '') + '">' + phone + '</a>';
        storeModalPhone.style.display = '';
      } else {
        storeModalPhone.innerHTML = '';
        storeModalPhone.style.display = 'none';
      }

      storeModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeStoreModal() {
    storeModal.classList.remove('active');
    document.body.style.overflow = '';
    storeModalMap.innerHTML = '';
  }

  if (storeModalOverlay) storeModalOverlay.addEventListener('click', closeStoreModal);
  if (storeModalClose) storeModalClose.addEventListener('click', closeStoreModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && storeModal && storeModal.classList.contains('active')) {
      closeStoreModal();
    }
  });

  // --- Contact form ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = contactForm.querySelector('.form-submit');
      const originalText = btn.innerHTML;
      const successMsg = (typeof translations !== 'undefined' && translations['contact.form.success'])
        ? translations['contact.form.success'][currentLang] || '送信しました!'
        : '送信しました!';
      btn.innerHTML = '<span>' + successMsg + '</span>';
      btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';

      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        contactForm.reset();
      }, 3000);
    });
  }

  // --- Button ripple effect ---
  const submitBtn = document.querySelector('.form-submit');
  if (submitBtn) {
    submitBtn.addEventListener('mousemove', (e) => {
      const rect = submitBtn.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      submitBtn.style.setProperty('--x', x + '%');
      submitBtn.style.setProperty('--y', y + '%');
    });
  }

  // --- Parallax on hero ---
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrollY * 0.3}px)`;
        heroContent.style.opacity = 1 - (scrollY / window.innerHeight) * 0.8;
      }
    }, { passive: true });
  }

});
