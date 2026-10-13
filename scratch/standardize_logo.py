import glob
import re

html_files = glob.glob('*.html')
print(f'Found {len(html_files)} HTML files')

for fpath in html_files:
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Update nav logo to 36px circular
    new_content = re.sub(
        r'<img\s+src=[\"\']assets/images/logo-icon\.png[\"\']\s+alt=[\"\']Crazy Tours Logo[\"\']\s+style=[\"\'][^\"\']*[\"\']>',
        '<img src="assets/images/logo-icon.png" alt="Crazy Tours Logo" style="height: 36px; width: 36px; object-fit: cover; border-radius: 50%; display: block;">',
        content
    )
    
    if new_content != content:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f'Updated logo styling in {fpath}')
