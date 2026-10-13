import glob
import re

html_files = sorted(glob.glob("*.html"))

for fpath in html_files:
    if fpath.startswith("preview"):
        continue
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()

    modified = False

    # 1. Update footer brand title across all pages: Crazy in orange
    footer_pattern = re.compile(
        r'(<a\s+href="index\.html"\s+class="wf-footer-brand-title"[^>]*>)\s*(<img[^>]*>)\s*<span>.*?</span>\s*(</a>)',
        re.DOTALL
    )
    def repl_footer(m):
        prefix = m.group(1)
        img_tag = m.group(2)
        suffix = m.group(3)
        return f'{prefix}\n            {img_tag}\n            <span><span class="wf-footer-brand-crazy" style="color: var(--color-sun); font-weight: 700;">Crazy</span> <span class="wf-footer-tagline" style="font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(255,255,255,0.75);">Tours & Travels</span></span>\n          {suffix}'

    new_content, count = footer_pattern.subn(repl_footer, content)
    if count > 0:
        content = new_content
        modified = True

    # 2. Destinations page animations
    if fpath == "destinations.html":
        # Add reveal classes to header
        content = content.replace(
            '<div class="wf-container wf-destinations-intro-header">',
            '<div class="wf-container wf-destinations-intro-header wf-intro-reveal">'
        )
        content = content.replace(
            '<h1 class="wf-display-headline"',
            '<h1 class="wf-display-headline wf-reveal-words"'
        )
        # Add stagger to destination cards
        card_matches = list(re.finditer(r'<a href="destination-detail\.html\?slug=[^"]+" class="wf-dest-card wf-reveal-up"', content))
        for i, match in enumerate(card_matches):
            old_str = match.group(0)
            new_str = f'{old_str} style="transition-delay: {i * 60}ms;"'
            content = content.replace(old_str, new_str, 1)

        modified = True

    # 3. Journal page animations
    if fpath == "journal.html":
        # Add reveal classes to header
        content = content.replace(
            '<h1 class="wf-display-headline"',
            '<h1 class="wf-display-headline wf-reveal-words"'
        )
        # Update render script to include wf-reveal-up, stagger, and initMotionReveals
        old_render = """      container.innerHTML = WAYFARE_DATA.articles.map(art => `
        <a href="journal-detail.html?slug=${encodeURIComponent(art.slug)}" class="wf-article-card">"""
        new_render = """      container.innerHTML = WAYFARE_DATA.articles.map((art, i) => `
        <a href="journal-detail.html?slug=${encodeURIComponent(art.slug)}" class="wf-article-card wf-reveal-up" style="transition-delay: ${i * 70}ms;">"""
        content = content.replace(old_render, new_render)

        if "if (window.initMotionReveals) window.initMotionReveals();" not in content:
            content = content.replace(
                "      }).join('');\n    });",
                "      }).join('');\n      if (window.initMotionReveals) window.initMotionReveals();\n    });"
            )
        modified = True

    # 4. Destination detail page animations
    if fpath == "destination-detail.html":
        content = content.replace(
            '<h1 class="wf-display-headline wf-dest-hero-title"',
            '<h1 class="wf-display-headline wf-dest-hero-title wf-reveal-words"'
        )
        content = content.replace(
            '<div class="wf-dest-lead-block">',
            '<div class="wf-dest-lead-block wf-reveal-up">'
        )
        content = content.replace(
            '<div class="wf-dest-photo-feature">',
            '<div class="wf-dest-photo-feature wf-reveal-up">'
        )
        content = content.replace(
            '<div class="wf-dest-content-grid">',
            '<div class="wf-dest-content-grid wf-reveal-up">'
        )
        if "if (window.initMotionReveals) window.initMotionReveals();" not in content:
            content = content.replace(
                "document.getElementById('dest-highlights-list').innerHTML =",
                "if (window.initMotionReveals) window.initMotionReveals();\n      document.getElementById('dest-highlights-list').innerHTML ="
            )
        modified = True

    # 5. Journal detail page animations
    if fpath == "journal-detail.html":
        content = content.replace(
            '<article class="wf-container wf-article-wrapper">',
            '<article class="wf-container wf-article-wrapper wf-intro-reveal">'
        )
        content = content.replace(
            '<h1 class="wf-display-headline" id="art-title"',
            '<h1 class="wf-display-headline wf-reveal-words" id="art-title"'
        )
        content = content.replace(
            '<div class="wf-article-cover-box">',
            '<div class="wf-article-cover-box wf-reveal-up">'
        )
        content = content.replace(
            '<div class="wf-article-body-content" id="art-content">',
            '<div class="wf-article-body-content wf-reveal-up" id="art-content">'
        )
        if "if (window.initMotionReveals) window.initMotionReveals();" not in content:
            content = content.replace(
                "document.getElementById('art-content').innerHTML = art.content;",
                "document.getElementById('art-content').innerHTML = art.content;\n      if (window.initMotionReveals) window.initMotionReveals();"
            )
        modified = True

    if modified:
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Updated {fpath}")

print("Applied logo and page animations successfully.")
