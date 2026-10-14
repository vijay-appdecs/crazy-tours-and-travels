import subprocess, os

chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
screenshot_path = os.path.abspath("screenshots/home_desktop.png")

subprocess.run([
    chrome_path,
    "--headless=new",
    "--disable-gpu",
    f"--screenshot={screenshot_path}",
    "--window-size=1440,900",
    "http://localhost:3000/index.html"
], check=True)

print("Home desktop captured:", os.path.exists(screenshot_path))
