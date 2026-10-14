import subprocess
import os
from PIL import Image

chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
os.makedirs("screenshots", exist_ok=True)
full_path = os.path.abspath("screenshots/verify_full_page.png")
url = "http://localhost:3000/index.html"

res = subprocess.run([
    chrome_path,
    "--headless=new",
    "--disable-gpu",
    f"--screenshot={full_path}",
    "--window-size=1440,4000",
    url
], capture_output=True, text=True)

print("Exit code:", res.returncode)
if os.path.exists(full_path):
    im = Image.open(full_path)
    w, h = im.size
    print("Full image size:", w, h)
    
    # 1. Navbar Crop (top 150px)
    im.crop((0, 0, w, 150)).save("screenshots/verify_navbar.png")
    
    # 2. Popular Packages Crop (around 2200 to 3300)
    im.crop((0, 2300, w, 3400)).save("screenshots/verify_packages_chips.png")
    print("Saved verify_navbar.png and verify_packages_chips.png")
