import urllib.request

try:
    with urllib.request.urlopen("http://localhost:3000/trip-detail.html") as response:
        content = response.read()
        print("Received bytes:", len(content))
        print("Last 300 bytes of response:")
        print(content[-300:].decode('utf-8', errors='replace'))
except Exception as e:
    print("Error:", e)
