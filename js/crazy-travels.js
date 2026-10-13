/**
 * CRAZY TRAVELS — CORE JAVASCRIPT ENGINE
 * Handles navigation, mobile drawer, theme switching, newsletter validation,
 * inquiry modal, scroll reveal motion, FAQ accordions, and interactive tabs.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  initMotionReveals();
  initSmoothScroll();
  initFaqAccordions();
  initNewsletter();
  initInquiryModal();
  initTravelStyles();
  initDestMarqueeDrag();
});

// ----------------------------------------------------------------------------
// 1. THEME TOGGLE (Light / Dark Mode with Persistence)
// ----------------------------------------------------------------------------
function initTheme() {
  const savedTheme = localStorage.getItem('crazy_travels_theme') || localStorage.getItem('wayfare_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeButtons(savedTheme);

  document.querySelectorAll('[data-toggle-theme]').forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('crazy_travels_theme', next);
      localStorage.setItem('wayfare_theme', next);
      updateThemeButtons(next);
    });
  });
}

function updateThemeButtons(theme) {
  document.querySelectorAll('[data-toggle-theme]').forEach(btn => {
    const icon = btn.querySelector('.theme-icon');
    if (icon) {
      icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
  });
}

// ----------------------------------------------------------------------------
// 2. FLOATING NAVIGATION & ACCESSIBLE MOBILE DRAWER
// ----------------------------------------------------------------------------
function initNavigation() {
  const navWrap = document.querySelector('.wf-nav-floating-wrap');
  const navBar = document.querySelector('.wf-nav-pill-bar');
  const toggleBtn = document.querySelector('.wf-nav-mobile-toggle');
  const drawerOverlay = document.querySelector('.wf-mobile-drawer-overlay');
  const drawer = document.querySelector('.wf-mobile-drawer');
  const closeBtn = document.querySelector('.wf-mobile-drawer-close');

  // Smart hiding floating navbar on scroll down, revealing on scroll up
  let lastScrollY = window.scrollY;
  const scrollThreshold = 10;
  let isNavHidden = false;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    // Subtle scroll shadow styling on full-width wrap
    if (navWrap) {
      if (currentScrollY > 40) {
        navWrap.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.08)';
      } else {
        navWrap.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.04)';
      }
    }

    // Do not hide navbar if mobile drawer is open
    if (drawerOverlay && drawerOverlay.classList.contains('is-open')) {
      return;
    }

    // Always keep visible when near the top of the page (within top 70px)
    if (currentScrollY <= 70) {
      if (isNavHidden) {
        navWrap?.classList.remove('nav-hidden');
        isNavHidden = false;
      }
      lastScrollY = currentScrollY;
      return;
    }

    const diff = currentScrollY - lastScrollY;

    // Scrolling down -> hide the floating bar
    if (diff > scrollThreshold && !isNavHidden) {
      navWrap?.classList.add('nav-hidden');
      isNavHidden = true;
    } 
    // Scrolling up -> reveal the floating bar
    else if (diff < -scrollThreshold && isNavHidden) {
      navWrap?.classList.remove('nav-hidden');
      isNavHidden = false;
    }

    lastScrollY = currentScrollY;
  }, { passive: true });

  // Open Drawer: reveals smoothly within floating surface without abruptly jumping height
  function openDrawer() {
    if (!drawer || !drawerOverlay) return;
    drawerOverlay.classList.add('is-open');
    drawer.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    toggleBtn?.setAttribute('aria-expanded', 'true');
    // Set focus to close button for keyboard accessibility
    closeBtn?.focus();
  }

  // Close Drawer
  function closeDrawer() {
    if (!drawer || !drawerOverlay) return;
    drawerOverlay.classList.remove('is-open');
    drawer.classList.remove('is-open');
    document.body.style.overflow = '';
    toggleBtn?.setAttribute('aria-expanded', 'false');
    toggleBtn?.focus();
  }

  toggleBtn?.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  drawerOverlay?.addEventListener('click', (e) => {
    if (e.target === drawerOverlay) closeDrawer();
  });

  // Escape key closes drawer and modals
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDrawer();
      closeModal();
    }
  });
}

// ----------------------------------------------------------------------------
// 3. MOTION & SCROLL REVEALS (Intersection Observer with Verified Thresholds)
// ----------------------------------------------------------------------------
function initMotionReveals() {
  // Check reduced motion preference
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced || !('IntersectionObserver' in window)) {
    document.querySelectorAll('.wf-reveal-up, .wf-intro-reveal, .wf-dest-card, .wf-cta-photo-panel, .wf-cta-photo-buttons, .wf-reveal-words').forEach(el => {
      el.classList.add('is-visible');
    });
    return;
  }

  // 1. Introduction reveal (duration 900ms, translateY 26px, trigger ~12%)
  const introObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.wf-intro-reveal:not(.is-observed)').forEach(el => {
    el.classList.add('is-observed');
    introObserver.observe(el);
  });

  // 2. Main and CTA heading word-by-word reveal (900ms, blur 8px -> 0, base 50ms, word stagger 35ms, trigger ~10%)
  const headingObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });

  const headingSelector = [
    '.wf-reveal-words',
    '.wf-display-headline',
    '.wf-main-heading',
    '.wf-dest-hero-title',
    '.wf-trip-main-title',
    '.wf-trip-sec-title'
  ].join(', ');

  document.querySelectorAll(headingSelector).forEach(heading => {
    if (heading.classList.contains('is-observed') || 
        heading.closest('.wf-nav-floating-wrap') || 
        heading.closest('.wf-mobile-drawer') || 
        heading.closest('.wf-footer-columns') ||
        heading.closest('button')) {
      return;
    }

    heading.classList.add('is-observed', 'wf-reveal-words');
    const originalText = heading.textContent.trim();
    if (!originalText) return;

    if (!heading.hasAttribute('aria-label')) {
      heading.setAttribute('aria-label', originalText);
    }
    if (!heading.querySelector('span[style*="transition-delay"]')) {
      const words = originalText.split(/\s+/);
      heading.innerHTML = words.map((w, i) => `<span style="transition-delay: ${40 + i * 35}ms">${w}&nbsp;</span>`).join('');
    }
    headingObserver.observe(heading);
  });

  // 3. Destination cards (900ms, translateY 32px, trigger ~4%, dark overlay veil 500ms)
  const destObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.04 });

  document.querySelectorAll('.wf-dest-card:not(.is-observed)').forEach(el => {
    el.classList.add('is-observed');
    if (!el.querySelector('.wf-dest-card-hover-veil')) {
      const veil = document.createElement('div');
      veil.className = 'wf-dest-card-hover-veil';
      el.appendChild(veil);
    }
    destObserver.observe(el);
  });

  // 4. CTA photographic panel (1200ms, scale 0.97 -> 1, trigger ~4%)
  const ctaPhotoObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.04 });

  document.querySelectorAll('.wf-cta-photo-panel:not(.is-observed)').forEach(el => {
    el.classList.add('is-observed');
    ctaPhotoObserver.observe(el);
  });

  // 5. CTA button group entrance (900ms, translateY 22px, stagger 90ms, trigger ~6%)
  const ctaBtnObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06 });

  document.querySelectorAll('.wf-cta-photo-buttons:not(.is-observed)').forEach(el => {
    el.classList.add('is-observed');
    ctaBtnObserver.observe(el);
  });

  // 6. Shared scroll-reveal entrance (cubic-bezier(0.16, 1, 0.3, 1), 900ms, translateY 26px, play once)
  const generalObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '40px 0px 40px 0px' });

  document.querySelectorAll('.wf-reveal-up:not(.is-observed), .wf-article-card:not(.is-observed)').forEach(el => {
    el.classList.add('is-observed');
    generalObserver.observe(el);
  });
}

// ----------------------------------------------------------------------------
// 3.1 SMOOTH SCROLLING ENGINE (Native Hardware-Accelerated)
// ----------------------------------------------------------------------------
function initSmoothScroll() {
  // Use native smooth scrolling for internal anchor links without hijacking wheel events
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId.length > 1) {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}

// ----------------------------------------------------------------------------
// 4. FAQ ACCORDIONS (Accessible & Smooth)
// ----------------------------------------------------------------------------
function initFaqAccordions() {
  const faqItems = document.querySelectorAll('.wf-faq-item');
  faqItems.forEach(item => {
    const trigger = item.querySelector('.wf-faq-trigger');
    const answer = item.querySelector('.wf-faq-answer');
    if (!trigger || !answer || trigger.dataset.bound) return;
    trigger.dataset.bound = 'true';

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      
      // Close other open FAQ items in this list
      const parent = item.parentElement;
      if (parent) {
        parent.querySelectorAll('.wf-faq-item').forEach(other => {
          if (other !== item) {
            other.classList.remove('is-open');
            other.querySelector('.wf-faq-trigger')?.setAttribute('aria-expanded', 'false');
            const ans = other.querySelector('.wf-faq-answer');
            if (ans) ans.style.maxHeight = null;
          }
        });
      }

      if (!isOpen) {
        item.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      } else {
        item.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
        answer.style.maxHeight = null;
      }
    });
  });
}

// ----------------------------------------------------------------------------
// 5. NEWSLETTER SUBSCRIPTION (With Validation & Genuine States)
// ----------------------------------------------------------------------------
function initNewsletter() {
  document.querySelectorAll('.wf-newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('.wf-newsletter-input');
      const submitBtn = form.querySelector('button[type="submit"]');
      const statusBox = form.parentElement.querySelector('.wf-newsletter-status');

      if (!input || !input.value.trim() || !input.value.includes('@')) {
        showStatus(statusBox, 'Please enter a valid email address.', 'error');
        input?.focus();
        return;
      }

      // Simulate sending to backend
      const originalBtnText = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.style.opacity = '1';
        }
        showStatus(statusBox, '✓ Thank you for subscribing. We will keep in touch once a month.', 'success');
        input.value = '';
      }, 700);
    });
  });
}

function showStatus(box, message, type) {
  if (!box) return;
  box.textContent = message;
  box.style.display = 'block';
  box.style.color = type === 'success' ? 'var(--color-sun)' : '#FF6B6B';
  box.style.marginTop = '12px';
  box.style.fontSize = '14px';
  setTimeout(() => {
    box.style.display = 'none';
  }, 6000);
}

// ----------------------------------------------------------------------------
// 6. ENQUIRY / TRIP PLANNER MODAL
// ----------------------------------------------------------------------------
function initInquiryModal() {
  const modal = document.getElementById('wf-inquiry-modal');
  if (!modal) return;

  // Open modal buttons
  document.querySelectorAll('[data-open-modal="inquiry"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const tripName = btn.getAttribute('data-trip-name') || '';
      const destSelect = modal.querySelector('#inquiry-destination');
      if (destSelect && tripName) {
        // Pre-select if option matches
        for (let opt of destSelect.options) {
          if (opt.text.toLowerCase().includes(tripName.toLowerCase())) {
            opt.selected = true;
            break;
          }
        }
      }
      openModal();
    });
  });

  // Close modal button
  modal.querySelector('.wf-modal-close')?.addEventListener('click', closeModal);
  modal.querySelector('.wf-modal-backdrop')?.addEventListener('click', closeModal);

  // Form submit
  const form = modal.querySelector('#wf-inquiry-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('.wf-btn-submit');
    const name = form.querySelector('#inquiry-name')?.value.trim();
    const email = form.querySelector('#inquiry-email')?.value.trim();
    const statusMsg = modal.querySelector('#inquiry-status');

    if (!name || !email || !email.includes('@')) {
      if (statusMsg) {
        statusMsg.textContent = 'Please enter your name and a valid email address.';
        statusMsg.style.color = '#E53935';
      }
      return;
    }

    submitBtn?.classList.add('is-pending');
    if (submitBtn) submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn?.classList.remove('is-pending');
      submitBtn?.classList.add('is-success');
      const text = submitBtn?.querySelector('.wf-btn-text');
      if (text) text.textContent = 'Enquiry Sent!';

      if (statusMsg) {
        statusMsg.textContent = '✓ Thank you! A Crazy Travels trip designer will reply within one working day.';
        statusMsg.style.color = '#2E7D32';
      }

      setTimeout(() => {
        form.reset();
        closeModal();
        submitBtn?.classList.remove('is-success');
        if (text) text.textContent = 'Send enquiry';
        if (submitBtn) submitBtn.disabled = false;
        if (statusMsg) statusMsg.textContent = '';
      }, 2500);
    }, 1000);
  });
}

function openModal() {
  const modal = document.getElementById('wf-inquiry-modal');
  if (!modal) return;
  modal.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('wf-inquiry-modal');
  if (!modal) return;
  modal.classList.remove('is-open');
  document.body.style.overflow = '';
}

// ----------------------------------------------------------------------------
// 7. TRAVEL STYLES INTERACTIVE SECTION (Homepage)
// ----------------------------------------------------------------------------
function initTravelStyles() {
  const items = document.querySelectorAll('.wf-style-nav-item');
  const imageElement = document.getElementById('wf-style-active-img');
  const captionElement = document.getElementById('wf-style-active-caption');

  if (!items.length || !imageElement) return;

  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      const imgUrl = item.getAttribute('data-image');
      const caption = item.getAttribute('data-tagline');

      if (imgUrl) {
        imageElement.style.opacity = '0.4';
        setTimeout(() => {
          imageElement.src = imgUrl;
          imageElement.style.opacity = '1';
        }, 150);
      }
      if (captionElement && caption) {
        captionElement.textContent = caption;
      }
    });

    item.addEventListener('click', (e) => {
      e.preventDefault();
      const styleId = item.getAttribute('data-style');
      if (styleId) {
        window.location.href = `trips.html?style=${encodeURIComponent(styleId)}`;
      }
    });
  });
}

// ----------------------------------------------------------------------------
// 9. DESTINATION FULL-BLEED MARQUEE INTERACTION
// ----------------------------------------------------------------------------
function initDestMarqueeDrag() {
  const wrap = document.getElementById('dest-marquee-wrap');
  const track = document.getElementById('dest-marquee-track');
  if (!wrap || !track) return;

  let isDown = false;
  let startX = 0;
  let hasMoved = false;

  wrap.addEventListener('mousedown', (e) => {
    isDown = true;
    hasMoved = false;
    startX = e.pageX;
  });

  window.addEventListener('mouseup', () => {
    if (!isDown) return;
    isDown = false;
    setTimeout(() => { hasMoved = false; }, 50);
  });

  wrap.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    const diff = Math.abs(e.pageX - startX);
    if (diff > 8) {
      hasMoved = true;
    }
  });

  // Prevent accidental card navigation if user was dragging
  wrap.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      if (hasMoved) {
        e.preventDefault();
      }
    });
  });
}

// Expose modal and utility functions
window.openModal = openModal;
window.closeModal = closeModal;
window.initMotionReveals = initMotionReveals;
window.initFaqAccordions = initFaqAccordions;
window.initDestMarqueeDrag = initDestMarqueeDrag;
