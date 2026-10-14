import subprocess, json, urllib.request, time

# Launch chrome with remote debugging
proc = subprocess.Popen([
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    "--headless=new",
    "--remote-debugging-port=9333",
    "--disable-gpu",
    "--window-size=390,844",
    "http://localhost:3000/packages.html"
])

time.sleep(2)

# Query debug URL
try:
    with urllib.request.urlopen("http://127.0.0.1:9333/json") as response:
        tabs = json.loads(response.read().decode())
    print("Tabs:", len(tabs))
    target = tabs[0]
    ws_url = target.get("webSocketDebuggerUrl")
    print("WS URL:", ws_url)
except Exception as e:
    print("Error getting tabs:", e)
finally:
    proc.terminate()
