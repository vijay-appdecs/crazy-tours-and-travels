import glob, re

html_files = [
    'index.html', 'about.html', 'contact.html', 'destinations.html', 
    'destination-detail.html', 'trip-detail.html', 'journal.html', 
    'journal-detail.html', 'terms.html', 'privacy.html', '404.html', 'style-guide.html'
]

header_old_re = re.compile(
    r'(<header class="wf-nav-floating-wrap"[\s\S]*?<a href="index\.html" class="wf-nav-brand"[^>]*>\s*)<img src="assets/images/logo-icon\.png" alt="Crazy Tours Logo"[^>]*>',
    re.MULTILINE
)

drawer_old_re = re.compile(
    r'(<div class="wf-mobile-drawer-top"[\s\S]*?<a href="index\.html" class="wf-nav-brand"[^>]*>\s*)<img src="assets/images/logo-icon\.png" alt="Crazy Tours Logo"[^>]*>',
    re.MULTILINE
)

new_header_img = '<img src="assets/images/logo-icon.png" alt="Crazy Tours Logo" style="height: 48px; width: 48px; object-fit: cover; border-radius: 10px; display: block;">'
new_drawer_img = '<img src="assets/images/logo-icon.png" alt="Crazy Tours Logo" style="height: 38px; width: 38px; object-fit: cover; border-radius: 8px; display: block;">'

for f in html_files:
    try:
        content = open(f, 'r', encoding='utf-8').read()
        new_content = header_old_re.sub(r'\1' + new_header_img, content)
        new_content = drawer_old_re.sub(r'\1' + new_drawer_img, new_content)
        if new_content != content:
            open(f, 'w', encoding='utf-8').write(new_content)
            print(f"Updated {f}")
        else:
            print(f"No changes needed for {f}")
    except Exception as e:
        print(f"Error {f}: {e}")
