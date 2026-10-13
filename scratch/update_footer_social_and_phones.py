import glob
import re

html_files = sorted(glob.glob("*.html"))

old_block_pattern = re.compile(
    r'<div class="wf-footer-numbers-list">.*?</div>\s*<!-- Social Icons Only \(No Text\) -->\s*<div class="wf-footer-social-icons">.*?</div>',
    re.DOTALL
)

new_block = """<div class="wf-footer-numbers-list">
              <div class="wf-footer-number-row">
                <a href="tel:+918867229998" class="wf-footer-number-link" title="Call +91 88672 29998">+91 88672 29998</a>
              </div>
              <div class="wf-footer-number-row">
                <a href="tel:+918867239998" class="wf-footer-number-link" title="Call +91 88672 39998">+91 88672 39998</a>
              </div>
            </div>

            <!-- Social Icons (Instagram, YouTube, Facebook) -->
            <div class="wf-footer-social-icons">
              <a href="https://www.instagram.com/crazy_traveller_11?mdxt=MXZmOGpmaWZtenhhag==" target="_blank" rel="noopener" class="wf-footer-social-icon" aria-label="Instagram" title="Follow us on Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://m.youtube.com/%40crazytraveller_11?fbclid=PAb21jcAU5zQlleHRuA2FlbQIxMQBwZG9mAnNydGMGYXBwX2lkDzU2NzA2NzM0MzM1MjQyNwABp4dKatBvQnkZYdDgoeYvB1CZ-fvRs1fW6ajAM-JJW38YzVQ94rLsT5MJYv9x_aem_MV-d2AY716zkHvJH6_nYLA" target="_blank" rel="noopener" class="wf-footer-social-icon" aria-label="YouTube" title="Watch on YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"></polygon>
                </svg>
              </a>
              <a href="https://m.facebook.com/?next=https%3A%2F%2Fm.facebook.com%2Fprofile.php%3Fid%3D100088752910901%26mibextid%3DLQQJ4d%26wtsid%3Drdr_0atRPMvXrz1MYiCNv&fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA81NjcwNjczNDMzNTI0MjcAAaeHSmrQb0J5GWHQ4KHmLwdQmfn70bNX1umowDPiSVt_GM1UPeKy7E-TCWL_cQ_aem_MV-d2AY716zkHvJH6_nYLA" target="_blank" rel="noopener" class="wf-footer-social-icon" aria-label="Facebook" title="Follow us on Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>"""

for fpath in html_files:
    if fpath.startswith("preview"):
        continue
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()

    new_content, count = old_block_pattern.subn(new_block, content)
    if count > 0:
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(new_content)
        print(f"Updated {fpath}")
    else:
        print(f"Pattern not matched in {fpath}")

print("Update completed.")
