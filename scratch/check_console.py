import subprocess

chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
url = "http://localhost:3000/trip-detail.html?slug=kerala-honeymoon-4d3n"

res = subprocess.run([
    chrome_path,
    "--headless=new",
    "--disable-gpu",
    "--enable-logging=stderr",
    "--v=1",
    "--virtual-time-budget=2000",
    url
], capture_output=True, text=True, encoding="utf-8", errors="ignore")

print("Stdout:")
print(res.stdout)
print("\nStderr:")
for line in res.stderr.splitlines():
    if "CONSOLE" in line or "error" in line.lower() or "exception" in line.lower():
        print(line)
