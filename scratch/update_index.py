import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Update Title and Favicon
html = re.sub(r'<title>.*?</title>', '<title>Crazy Tours and Travels — Travel in Small Groups, Led by Locals</title>', html)
html = re.sub(r'<link rel="icon"[^>]+>', '<link rel="icon" type="image/png" href="assets/images/logo.png">', html)

# 2. Update Header Brand
old_brand = '''      <a href="index.html" class="wf-nav-brand" aria-label="Wayfare Home">
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

html = html.replace(old_brand, new_brand)

# Also mobile drawer brand
old_drawer_brand = '''        <a href="index.html" class="wf-nav-brand">
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

html = html.replace(old_drawer_brand, new_drawer_brand)

# 3. Add wf-reveal-words to Hero Title
html = html.replace('class="wf-display-headline wf-hero-title"', 'class="wf-display-headline wf-hero-title wf-reveal-words"')

# 4. Add wf-intro-reveal to Section 4 Introduction
html = html.replace('<div class="wf-intro-grid">', '<div class="wf-intro-grid wf-intro-reveal">')

# 5. Update Destinations Grid on Home to Kashmir, Kerala, Manali, Goa
old_dest_grid = '''        <div class="wf-destinations-grid-4">
          <!-- Italy -->
          <a href="destination-detail.html?slug=italy" class="wf-dest-card wf-reveal-up">
            <img class="wf-dest-card-bg" src="https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80" alt="Italy cliffside village" loading="lazy">
            <div class="wf-dest-card-overlay"></div>
            <div class="wf-dest-card-content">
              <div class="wf-dest-region">Southern Europe</div>
              <h3 class="wf-dest-name">Italy</h3>
            </div>
          </a>

          <!-- Japan -->
          <a href="destination-detail.html?slug=japan" class="wf-dest-card wf-reveal-up" style="transition-delay: 100ms;">
            <img class="wf-dest-card-bg" src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80" alt="Japan Yasaka pagoda" loading="lazy">
            <div class="wf-dest-card-overlay"></div>
            <div class="wf-dest-card-content">
              <div class="wf-dest-region">East Asia</div>
              <h3 class="wf-dest-name">Japan</h3>
            </div>
          </a>

          <!-- Patagonia -->
          <a href="destination-detail.html?slug=patagonia" class="wf-dest-card wf-reveal-up" style="transition-delay: 200ms;">
            <img class="wf-dest-card-bg" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80" alt="Patagonia Torres del Paine" loading="lazy">
            <div class="wf-dest-card-overlay"></div>
            <div class="wf-dest-card-content">
              <div class="wf-dest-region">South America</div>
              <h3 class="wf-dest-name">Patagonia</h3>
            </div>
          </a>

          <!-- Morocco -->
          <a href="destination-detail.html?slug=morocco" class="wf-dest-card wf-reveal-up" style="transition-delay: 300ms;">
            <img class="wf-dest-card-bg" src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=800&q=80" alt="Morocco riad architecture" loading="lazy">
            <div class="wf-dest-card-overlay"></div>
            <div class="wf-dest-card-content">
              <div class="wf-dest-region">North Africa</div>
              <h3 class="wf-dest-name">Morocco</h3>
            </div>
          </a>
        </div>'''

new_dest_grid = '''        <div class="wf-destinations-grid-4">
          <!-- Kashmir -->
          <a href="destination-detail.html?slug=kashmir" class="wf-dest-card wf-reveal-up">
            <img class="wf-dest-card-bg" src="https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80" alt="Kashmir Dal Lake Shikara" loading="lazy">
            <div class="wf-dest-card-overlay"></div>
            <div class="wf-dest-card-hover-veil"></div>
            <div class="wf-dest-card-content">
              <div class="wf-dest-region">Himalayas, India</div>
              <h3 class="wf-dest-name">Kashmir</h3>
            </div>
          </a>

          <!-- Kerala -->
          <a href="destination-detail.html?slug=kerala" class="wf-dest-card wf-reveal-up" style="transition-delay: 100ms;">
            <img class="wf-dest-card-bg" src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80" alt="Kerala tranquil backwaters" loading="lazy">
            <div class="wf-dest-card-overlay"></div>
            <div class="wf-dest-card-hover-veil"></div>
            <div class="wf-dest-card-content">
              <div class="wf-dest-region">South India</div>
              <h3 class="wf-dest-name">Kerala</h3>
            </div>
          </a>

          <!-- Kullu-Manali -->
          <a href="destination-detail.html?slug=manali" class="wf-dest-card wf-reveal-up" style="transition-delay: 200ms;">
            <img class="wf-dest-card-bg" src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80" alt="Manali snow peaks" loading="lazy">
            <div class="wf-dest-card-overlay"></div>
            <div class="wf-dest-card-hover-veil"></div>
            <div class="wf-dest-card-content">
              <div class="wf-dest-region">Himachal Pradesh</div>
              <h3 class="wf-dest-name">Kullu-Manali</h3>
            </div>
          </a>

          <!-- Goa -->
          <a href="destination-detail.html?slug=goa" class="wf-dest-card wf-reveal-up" style="transition-delay: 300ms;">
            <img class="wf-dest-card-bg" src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80" alt="Goa golden sands" loading="lazy">
            <div class="wf-dest-card-overlay"></div>
            <div class="wf-dest-card-hover-veil"></div>
            <div class="wf-dest-card-content">
              <div class="wf-dest-region">Coastal India</div>
              <h3 class="wf-dest-name">Goa</h3>
            </div>
          </a>
        </div>'''

html = html.replace(old_dest_grid, new_dest_grid)

# 6. Update Filter Dropdowns
old_dest_select = '''            <select class="wf-filter-select" id="dest-filter-select" aria-label="Filter by destination">
              <option value="all">Destination: All</option>
              <option value="italy">Italy</option>
              <option value="japan">Japan</option>
              <option value="patagonia">Patagonia</option>
              <option value="morocco">Morocco</option>
              <option value="greece">Greece</option>
              <option value="tanzania">Tanzania</option>
              <option value="iceland">Iceland</option>
              <option value="peru">Peru</option>
            </select>'''

new_dest_select = '''            <select class="wf-filter-select" id="dest-filter-select" aria-label="Filter by destination">
              <option value="all">Destination: All</option>
              <option value="kashmir">Kashmir</option>
              <option value="kerala">Kerala</option>
              <option value="manali">Kullu-Manali</option>
              <option value="goa">Goa</option>
              <option value="himachal">Himachal Circuit</option>
              <option value="rajasthan">Rajasthan</option>
              <option value="ladakh">Ladakh</option>
              <option value="andaman">Andaman Islands</option>
            </select>'''

html = html.replace(old_dest_select, new_dest_select)

old_style_select = '''            <select class="wf-filter-select" id="style-filter-select" aria-label="Filter by travel style">
              <option value="all">Style: All</option>
              <option value="adventure">Adventure</option>
              <option value="culture">Culture</option>
              <option value="beach-islands">Beach and Islands</option>
              <option value="wildlife">Wildlife</option>
              <option value="food-wine">Food and Wine</option>
            </select>'''

new_style_select = '''            <select class="wf-filter-select" id="style-filter-select" aria-label="Filter by travel style">
              <option value="all">Style: All</option>
              <option value="honeymoon">Honeymoon & Romance</option>
              <option value="adventure">Adventure & Snow</option>
              <option value="beach-islands">Beach & Coastal</option>
              <option value="culture">Heritage & Culture</option>
              <option value="group">Bachelors & Group</option>
            </select>'''

html = html.replace(old_style_select, new_style_select)

# 7. Add wf-reveal-words to Photo CTA heading
html = html.replace('class="wf-cta-heading wf-cta-photo-title"', 'class="wf-cta-heading wf-cta-photo-title wf-reveal-words"')

# 8. Update Footer branding
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

html = html.replace(old_footer_brand, new_footer_brand)

# Footer wordmark
html = html.replace('<div class="wf-footer-wordmark">\n        Wayfare\n      </div>', '<div class="wf-footer-wordmark">\n        Crazy Tours\n      </div>')
html = html.replace('<div class="wf-footer-wordmark">Wayfare</div>', '<div class="wf-footer-wordmark">Crazy Tours</div>')
html = html.replace('© 2026 Wayfare Travel Co. All rights reserved.', '© 2026 Crazy Tours and Travels. All rights reserved.')
html = html.replace('hello@wayfare.travel', 'crazytraveller11@gmail.com')
html = html.replace('+1 (415) 555 0134', '+91 93901 02030')

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Updated index.html successfully!")
