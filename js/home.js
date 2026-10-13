/**
 * CRAZY TOURS AND TRAVELS — HOMEPAGE INTERACTIVE ENGINE
 * Hero Choreography, Smart Floating Header, Stats Counter, Travel Style Switcher & Word Reveal
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroEntrance();
  initWayfareHeader();
  initPromiseWordReveal();
  initStatsCounter();
  initTravelStyleSwitcher();
  initFaqCleanAccordion();
});

/* --------------------------------------------------------------------------
   1. HERO ENTRANCE CHOREOGRAPHY
   -------------------------------------------------------------------------- */
function initHeroEntrance() {
  const media = document.querySelector('.wf-hero-media');
  const badge = document.querySelector('.wf-hero-badge');
  const title = document.querySelector('.wf-hero-title');
  const desc = document.querySelector('.wf-hero-desc');
  const actions = document.querySelector('.wf-hero-actions');
  const scrollIndicator = document.querySelector('.wf-hero-scroll');

  // Trigger sequence after slight paint delay
  requestAnimationFrame(() => {
    setTimeout(() => {
      if (media) media.classList.add('loaded');
    }, 100);

    setTimeout(() => {
      if (badge) badge.classList.add('in-view');
    }, 280);

    setTimeout(() => {
      if (title) title.classList.add('in-view');
    }, 450);

    setTimeout(() => {
      if (desc) desc.classList.add('in-view');
    }, 620);

    setTimeout(() => {
      if (actions) actions.classList.add('in-view');
    }, 780);

    setTimeout(() => {
      if (scrollIndicator) scrollIndicator.classList.add('in-view');
    }, 980);
  });
}

/* --------------------------------------------------------------------------
   2. SMART FLOATING HEADER (WAYFARE PILL NAVIGATION)
   -------------------------------------------------------------------------- */
function initWayfareHeader() {
  const header = document.querySelector('.wf-header-floating');
  const pill = document.querySelector('.wf-header-pill');
  if (!header || !pill) return;

  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 40) {
      pill.classList.add('scrolled');
    } else {
      pill.classList.remove('scrolled');
    }

    // Hide when scrolling down past 240px, show when scrolling up
    if (currentScrollY > 240 && currentScrollY > lastScrollY) {
      header.style.transform = 'translateY(-120%)';
    } else {
      header.style.transform = 'translateY(0)';
    }

    lastScrollY = currentScrollY;
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   3. PHILOSOPHY SECTION WORD REVEAL (SCROLL-BASED)
   -------------------------------------------------------------------------- */
function initPromiseWordReveal() {
  const statement = document.querySelector('.wf-promise-statement');
  if (!statement) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        statement.classList.add('in-view');
      }
    });
  }, { threshold: 0.35 });

  observer.observe(statement);
}

/* --------------------------------------------------------------------------
   4. STATS COUNTER ANIMATION
   -------------------------------------------------------------------------- */
function initStatsCounter() {
  const statsCard = document.querySelector('.wf-stats-card');
  if (!statsCard) return;

  let hasAnimated = false;

  const countUp = (el, target, suffix = '', duration = 1600) => {
    let start = 0;
    const startTime = performance.now();

    function update(time) {
      const elapsed = time - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      
      el.innerHTML = `${current.toLocaleString()}<span>${suffix}</span>`;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.innerHTML = `${target.toLocaleString()}<span>${suffix}</span>`;
      }
    }

    requestAnimationFrame(update);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        const statItems = statsCard.querySelectorAll('.wf-stat-num');
        
        statItems.forEach(item => {
          const raw = item.getAttribute('data-count');
          const suffix = item.getAttribute('data-suffix') || '';
          if (raw) {
            countUp(item, parseInt(raw, 10), suffix);
          }
        });
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsCard);
}

/* --------------------------------------------------------------------------
   5. TRAVEL STYLE SWITCHER ("WAYS TO TRAVEL")
   -------------------------------------------------------------------------- */
function initTravelStyleSwitcher() {
  const navItems = document.querySelectorAll('.wf-style-nav-item');
  const mediaImages = document.querySelectorAll('.wf-styles-left-media img');
  const captionTitle = document.getElementById('wf-style-active-title');
  const captionSub = document.getElementById('wf-style-active-sub');

  if (!navItems.length) return;

  const styleData = {
    '01': {
      title: 'Himalayan High Passes & Treks',
      sub: 'Solang Valley, Rohtang Snow & Mountain Streams'
    },
    '02': {
      title: 'Handcrafted Family Holidays',
      sub: 'Verified 4-Star Stays, Private Chauffeurs & Relaxed Pacing'
    },
    '03': {
      title: 'Intimate Candlelit Honeymoons',
      sub: 'Munnar Mist, Dal Lake Houseboats & Flower Bed Care'
    },
    '04': {
      title: 'Golden Sands & Coastal Cruises',
      sub: 'Goa Watersports, Fort Views & Mandovi DJ Sunsets'
    },
    '05': {
      title: 'Emerald Backwaters & Wild Sanctuaries',
      sub: 'Alleppey Canals, Periyar Wildlife & Tea Plantations'
    }
  };

  navItems.forEach(item => {
    item.addEventListener('mouseenter', () => activateStyle(item));
    item.addEventListener('click', () => activateStyle(item));
  });

  function activateStyle(selectedItem) {
    const targetKey = selectedItem.getAttribute('data-style-key');
    if (!targetKey) return;

    navItems.forEach(n => n.classList.remove('active'));
    selectedItem.classList.add('active');

    // Update images with crossfade
    mediaImages.forEach(img => {
      if (img.getAttribute('data-style-img') === targetKey) {
        img.classList.add('active');
      } else {
        img.classList.remove('active');
      }
    });

    // Update caption
    if (styleData[targetKey]) {
      if (captionTitle) captionTitle.textContent = styleData[targetKey].title;
      if (captionSub) captionSub.textContent = styleData[targetKey].sub;
    }
  }
}

/* --------------------------------------------------------------------------
   6. FAQ ACCORDION
   -------------------------------------------------------------------------- */
function initFaqCleanAccordion() {
  const faqItems = document.querySelectorAll('.wf-faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.wf-faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });

      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });
}
