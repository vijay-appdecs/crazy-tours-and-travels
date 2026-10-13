import os, re

files = [
    'destinations.html',
    'trips.html',
    'destination-detail.html',
    'trip-detail.html',
    'about.html',
    'journal.html',
    'journal-detail.html',
    'contact.html',
    'privacy.html',
    'terms.html',
    '404.html',
    'style-guide.html'
]

# Branding replacements for headers and footers
old_brand_1 = '''      <a href="index.html" class="wf-nav-brand" aria-label="Wayfare Home">
        <div class="wf-nav-icon-kite">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 2 22 12 18 22 22 12 2"/>
          </svg>
        </div>
        <span class="wf-nav-wordmark">Wayfare</span>
      </a>'''

new_brand = '''      <a href="index.html" class="wf-nav-brand" aria-label="Crazy Tours and Travels Home">
        <img src="assets/images/logo-icon.png" alt="Crazy Tours Logo" style="height: 32px; width: 32px; object-fit: contain; border-radius: 8px;">
        <span class="wf-nav-wordmark">Crazy Tours</span>
      </a>'''

old_brand_2 = '''        <a href="index.html" class="wf-nav-brand">
          <div class="wf-nav-icon-kite">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="12 2 2 22 12 18 22 22 12 2"/>
            </svg>
          </div>
          <span class="wf-nav-wordmark">Wayfare</span>
        </a>'''

new_drawer_brand = '''        <a href="index.html" class="wf-nav-brand">
          <img src="assets/images/logo-icon.png" alt="Crazy Tours Logo" style="height: 32px; width: 32px; object-fit: contain; border-radius: 8px;">
          <span class="wf-nav-wordmark">Crazy Tours</span>
        </a>'''

old_footer_brand = '''          <div class="wf-footer-brand-title">Wayfare</div>
          <p class="wf-footer-brand-summary">
            Small-group tours and tailor-made trips, planned by people who have been there.
          </p>'''

new_footer_brand = '''          <div class="wf-footer-brand-title" style="display: flex; align-items: center; gap: 10px;">
            <img src="assets/images/logo-icon.png" alt="Crazy Tours Logo" style="height: 28px; width: 28px; object-fit: contain; border-radius: 6px;">
            <span>Crazy Tours and Travels</span>
          </div>
          <p class="wf-footer-brand-summary">
            Luxury small-group tours and tailor-made holidays, planned by local experts with 24/7 Telugu concierge care.
          </p>'''

for filename in files:
    if not os.path.exists(filename):
        continue
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Favicon
    content = re.sub(r'<link rel="icon"[^>]+>', '<link rel="icon" type="image/png" href="assets/images/logo.png">', content)
    # Brands
    content = content.replace(old_brand_1, new_brand)
    content = content.replace(old_brand_2, new_drawer_brand)
    content = content.replace(old_footer_brand, new_footer_brand)
    content = content.replace('<div class="wf-footer-wordmark">Wayfare</div>', '<div class="wf-footer-wordmark">Crazy Tours</div>')
    content = content.replace('© 2026 Wayfare Travel Co. All rights reserved.', '© 2026 Crazy Tours and Travels. All rights reserved.')
    content = content.replace('hello@wayfare.travel', 'crazytraveller11@gmail.com')
    content = content.replace('+1 (415) 555 0134', '+91 93901 02030')
    content = content.replace('Mon to Fri, 9am to 6pm PT', '24/7 Telugu Concierge Desk')

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Updated header and footer brand in {filename}")
