import subprocess, os

chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
os.makedirs("screenshots", exist_ok=True)

for name, size in [("packages_mobile", "390,844"), ("packages_desktop", "1440,900")]:
    path = os.path.abspath(f"screenshots/{name}.png")
    if os.path.exists(path):
        os.remove(path)
    subprocess.run([
        chrome_path,
        "--headless=new",
        "--disable-gpu",
        f"--screenshot={path}",
        f"--window-size={size}",
        "http://localhost:3000/packages.html"
    ], check=True)
    print(name, "captured:", os.path.exists(path), os.path.getsize(path))
