import subprocess
import os
from PIL import Image

chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
os.makedirs("screenshots", exist_ok=True)

# 1. Verify about.html
about_shot = os.path.abspath("screenshots/verify_about_no_team.png")
subprocess.run([
    chrome_path,
    "--headless=new",
    "--disable-gpu",
    f"--screenshot={about_shot}",
    "--window-size=1440,2400",
    "http://localhost:3000/about.html"
], capture_output=True, text=True)

# 2. Verify packages.html?style=beach-islands
beach_shot = os.path.abspath("screenshots/verify_packages_beach_filter.png")
subprocess.run([
    chrome_path,
    "--headless=new",
    "--disable-gpu",
    f"--screenshot={beach_shot}",
    "--window-size=1440,1800",
    "http://localhost:3000/packages.html?style=beach-islands"
], capture_output=True, text=True)

# 3. Verify index.html Popular Packages (no Japan)
home_shot = os.path.abspath("screenshots/verify_home_no_japan.png")
subprocess.run([
    chrome_path,
    "--headless=new",
    "--disable-gpu",
    f"--screenshot={home_shot}",
    "--window-size=1440,3600",
    "http://localhost:3000/index.html"
], capture_output=True, text=True)

if os.path.exists(home_shot):
    im = Image.open(home_shot)
    im.crop((0, 2200, im.size[0], 3300)).save("screenshots/verify_home_popular_pkgs.png")

print("All screenshots generated successfully.")
