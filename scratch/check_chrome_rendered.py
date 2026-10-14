import subprocess
import os

chrome_path = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
url = "http://localhost:3000/trip-detail.html?slug=kerala-honeymoon-4d3n"

print("Running Chrome to dump DOM from:", url)
res = subprocess.run([
    chrome_path,
    "--headless=new",
    "--disable-gpu",
    "--virtual-time-budget=5000",
    "--dump-dom",
    url
], capture_output=True, text=True, encoding="utf-8")

print("Exit code:", res.returncode)
print("DOM output length:", len(res.stdout))

if len(res.stdout) > 0:
    with open("scratch/chrome_rendered.html", "w", encoding="utf-8") as f:
        f.write(res.stdout)
    
    # Check if elements were populated
    checks = [
        "Kerala Honeymoon Package",
        "wf-itin-timeline-entry",
        "wf-trip-spec-strip",
        "DESTINATION",
        "Cochin",
        "Morning (08:30–12:30)",
        "Cheeyappara"
    ]
    for c in checks:
        print(f"Contains '{c}':", c in res.stdout)
else:
    print("Stderr:", res.stderr)
