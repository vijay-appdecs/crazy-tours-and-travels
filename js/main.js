// Enforce permanent light theme
(function() {
  document.documentElement.setAttribute('data-theme', 'light');
  try {
    localStorage.removeItem('crazy_tours_theme');
    localStorage.setItem('crazy_tours_theme', 'light');
  } catch (e) {}
})();

/**
 * CRAZY TOURS AND TRAVELS — CORE JAVASCRIPT ENGINE
 * Header Smart-Scroll, Theme Controller, Mobile Drawer, FAQs, Modals & Toasts
 */

document.addEventListener('DOMContentLoaded', () => {
  initSmartHeader();
  initMobileDrawer();
  initFaqAccordion();
  initInquiryModal();
  initForms();
});



/* ==========================================================================
   2. Header Smart-Scroll (Hide on Scroll Down, Show on Scroll Up)
   ========================================================================== */
function initSmartHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let lastScrollY = window.scrollY;
  const isHeroPage = header.classList.contains('hero-transparent');

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // When at the very top
    if (currentScrollY < 40) {
      header.classList.remove('header-hidden');
      header.classList.remove('header-scrolled');
      if (isHeroPage) {
        header.classList.add('hero-transparent');
      }
    } 
    // When scrolled down into page
    else {
      header.classList.add('header-scrolled');
      if (isHeroPage) {
        header.classList.remove('hero-transparent');
      }

      // Scrolling Down -> Hide smoothly
      if (currentScrollY > lastScrollY && currentScrollY > 160) {
        header.classList.add('header-hidden');
      } 
      // Scrolling Up -> Show smoothly
      else if (currentScrollY < lastScrollY) {
        header.classList.remove('header-hidden');
      }
    }

    lastScrollY = currentScrollY;
  }, { passive: true });
}

/* ==========================================================================
   3. Mobile Drawer Navigation
   ========================================================================== */
function initMobileDrawer() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const overlay = document.querySelector('.mobile-drawer-overlay');
  const closeBtn = document.querySelector('.mobile-drawer-close');
  const drawerLinks = document.querySelectorAll('.mobile-drawer-links a');

  if (!toggleBtn || !overlay) return;

  function openDrawer() {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeDrawer();
    }
  });

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeDrawer();
    }
  });
}

/* ==========================================================================
   4. FAQ Accordion
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other accordions for clean editorial behavior
      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove('active');
        }
      });

      // Toggle clicked
      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   5. Trip Inquiry Modal System
   ========================================================================== */
function initInquiryModal() {
  const openBtns = document.querySelectorAll('[data-open-modal="trip-planner"]');
  const modal = document.getElementById('trip-inquiry-modal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal-close-btn');

  function openModal(destinationName = '') {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (destinationName) {
      const destSelect = modal.querySelector('#modal-destination');
      if (destSelect) {
        destSelect.value = destinationName;
      }
    }
  }

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  openBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const dest = btn.getAttribute('data-tour-dest') || '';
      openModal(dest);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Attach global helper
  window.openTripModal = openModal;
  window.closeTripModal = closeModal;
}

/* ==========================================================================
   6. Form Handlers & Toast System
   ========================================================================== */
function initForms() {
  const forms = document.querySelectorAll('form[data-trip-form]');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formData = new FormData(form);
      const name = formData.get('name') || 'Traveler';
      const dest = formData.get('destination') || 'your dream destination';
      const phone = formData.get('phone') || '';

      // Close modal if open
      if (window.closeTripModal) {
        window.closeTripModal();
      }

      form.reset();

      // Show toast
      showToast(
        'Trip Inquiry Received!',
        `Thank you, ${name}. Our luxury travel curator will connect with you regarding ${dest} within 2 hours.`
      );

      // Proactively prepare WhatsApp draft option
      setTimeout(() => {
        const waConfirmed = confirm(`Would you like to connect with a Crazy Tours travel consultant directly on WhatsApp now?`);
        if (waConfirmed) {
          const msg = encodeURIComponent(`Hi Crazy Tours and Travels, I am ${name} and I would like to plan a trip to ${dest}.`);
          window.open(`https://wa.me/918867229998?text=${msg}`, '_blank');
        }
      }, 700);
    });
  });
}

function showToast(title, desc) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-icon">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
    <div class="toast-content">
      <div class="toast-title">${title}</div>
      <div class="toast-desc">${desc}</div>
    </div>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4500);
}


