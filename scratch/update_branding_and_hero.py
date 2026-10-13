import os
import glob
import re

html_files = sorted(glob.glob("*.html"))

for fpath in html_files:
    if fpath.startswith("preview"):
        continue
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()

    modified = False

    # 1. Update footer brand title so "Crazy" is explicitly in orange
    # Pattern: <a href="index.html" class="wf-footer-brand-title">...<span>Crazy Tours...</span>...</a>
    # We want: <a href="index.html" class="wf-footer-brand-title">
    #            <img src="assets/images/logo-icon.png" alt="Crazy Tours Logo" style="height: 38px; width: 38px; object-fit: cover; border-radius: 8px; display: block;">
    #            <span><span class="wf-footer-brand-crazy" style="color: var(--color-sun); font-weight: 700;">Crazy</span> <span class="wf-footer-tagline" style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.75);">Tours & Travels</span></span>
    #          </a>
    footer_pattern = re.compile(r'(<a\s+href="index\.html"\s+class="wf-footer-brand-title"[^>]*>)(.*?)(</a>)', re.DOTALL)
    
    def repl_footer(m):
        prefix = m.group(1)
        inner = m.group(2)
        suffix = m.group(3)
        # Check if logo img is present
        img_match = re.search(r'(<img[^>]*>)', inner)
        img_tag = img_match.group(1) if img_match else '<img src="assets/images/logo-icon.png" alt="Crazy Tours Logo" style="height: 38px; width: 38px; object-fit: cover; border-radius: 8px; display: block;">'
        new_inner = f'\n            {img_tag}\n            <span><span class="wf-footer-brand-crazy" style="color: var(--color-sun); font-weight: 700;">Crazy</span> <span class="wf-footer-tagline" style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.75);">Tours & Travels</span></span>\n          '
        return prefix + new_inner + suffix

    new_content, count = footer_pattern.subn(repl_footer, content)
    if count > 0:
        content = new_content
        modified = True

    # 2. Check destination-detail.html hero section
    if fpath == "destination-detail.html":
        # Ensure 0px top padding and 0px top radius
        content = re.sub(
            r'\.wf-dest-hero-section\s*\{[^}]*\}',
            '''.wf-dest-hero-section {
      padding-top: 0 !important;
      padding-bottom: 24px;
      margin-top: 0 !important;
      position: relative;
      width: 100%;
    }''',
            content
        )
        content = re.sub(
            r'\.wf-dest-hero-panel\s*\{[^}]*\}',
            '''.wf-dest-hero-panel {
      position: relative;
      height: 100vh !important;
      min-height: 720px;
      margin-top: 0 !important;
      border-top-left-radius: 0 !important;
      border-top-right-radius: 0 !important;
      border-bottom-left-radius: 32px;
      border-bottom-right-radius: 32px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 64px 56px;
      color: #FFFFFF;
      background-color: var(--color-night);
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
    }''',
            content
        )
        modified = True

    # 3. Check index.html hero section full bleed
    if fpath == "index.html":
        # Add head style for full bleed hero to override any browser caching
        hero_style_tag = """  <style>
    /* Full bleed hero covering top completely */
    .wf-hero-section {
      padding-top: 0 !important;
      margin-top: 0 !important;
      width: 100% !important;
      position: relative;
    }
    .wf-hero-panel {
      margin-top: 0 !important;
      border-top-left-radius: 0 !important;
      border-top-right-radius: 0 !important;
      border-bottom-left-radius: 32px;
      border-bottom-right-radius: 32px;
      height: 100vh !important;
      width: 100% !important;
      max-width: 100% !important;
    }
  </style>
</head>"""
        if "/* Full bleed hero covering top completely */" not in content:
            content = content.replace("</head>", hero_style_tag)
            modified = True

    if modified:
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Updated {fpath}")

print("Branding and Hero updates completed successfully.")
