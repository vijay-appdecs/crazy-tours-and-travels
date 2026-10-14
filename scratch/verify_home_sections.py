import subprocess
import os
import time

chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
os.makedirs("screenshots", exist_ok=True)
screenshot_path = os.path.abspath("screenshots/home_updated_sections.png")
url = "http://localhost:3000/index.html"

print("Taking full homepage screenshot to:", screenshot_path)
res = subprocess.run([
    chrome_path,
    "--headless=new",
    "--disable-gpu",
    f"--screenshot={screenshot_path}",
    "--window-size=1440,4800",
    url
], capture_output=True, text=True)

print("Exit code:", res.returncode)
if os.path.exists(screenshot_path):
    print("Screenshot successfully created! Size:", os.path.getsize(screenshot_path), "bytes")
else:
    print("Screenshot file not found.")
