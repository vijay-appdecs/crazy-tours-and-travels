import subprocess
import os

chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
screenshot_path = os.path.abspath("screenshots/chrome_trip_detail.png")
url = "http://localhost:3000/trip-detail.html?slug=kerala-honeymoon-4d3n"

print("Taking screenshot to:", screenshot_path)
res = subprocess.run([
    chrome_path,
    "--headless=new",
    "--disable-gpu",
    f"--screenshot={screenshot_path}",
    "--window-size=1440,2600",
    url
], capture_output=True, text=True)

print("Exit code:", res.returncode)
if os.path.exists(screenshot_path):
    print("Screenshot successfully created! Size:", os.path.getsize(screenshot_path), "bytes")
else:
    print("Screenshot file not found.")
