import glob
import re

html_files = sorted(glob.glob("*.html"))

for fpath in html_files:
    if fpath.startswith("preview"):
        continue
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()

    modified = False

    # 1. Revert footer brand title
    # Replace orange span with original:
    # <span>Crazy Tours</span>
    footer_pattern = re.compile(
        r'(<a\s+href="index\.html"\s+class="wf-footer-brand-title"[^>]*>)\s*(<img[^>]*>)\s*<span>.*?</span>\s*(</a>)',
        re.DOTALL
    )
    def repl_footer(m):
        prefix = m.group(1)
        img_tag = m.group(2)
        suffix = m.group(3)
        return f'{prefix}\n            {img_tag}\n            <span>Crazy Tours</span>\n          {suffix}'

    new_content, count = footer_pattern.subn(repl_footer, content)
    if count > 0:
        content = new_content
        modified = True

    # 2. Revert index.html head style
    if fpath == "index.html":
        content = re.sub(r'\s*<style>\s*/\* Full bleed hero covering top completely \*/.*?</style>', '', content, flags=re.DOTALL)
        modified = True

    # 3. Revert destination-detail.html hero section
    if fpath == "destination-detail.html":
        content = re.sub(
            r'\.wf-dest-hero-section\s*\{[^}]*\}',
            '''.wf-dest-hero-section {
      padding-top: 12px;
      padding-bottom: 24px;
      position: relative;
    }''',
            content
        )
        content = re.sub(
            r'\.wf-dest-hero-panel\s*\{[^}]*\}',
            '''.wf-dest-hero-panel {
      position: relative;
      height: calc(100vh - 24px);
      min-height: 720px;
      border-radius: 28px;
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

    if modified:
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"Reverted {fpath}")

print("Reversion completed successfully.")
