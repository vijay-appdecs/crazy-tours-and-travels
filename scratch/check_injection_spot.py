import urllib.request

with urllib.request.urlopen("http://localhost:3000/trip-detail.html") as response:
    content = response.read().decode('utf-8', errors='replace')

lines = content.splitlines()
print(f"Total lines in server response: {len(lines)}")
for i, l in enumerate(lines):
    if "Code injected by live-server" in l:
        print(f"\nFound 'Code injected by live-server' at line {i+1}!")
        print("Surrounding lines:")
        for j in range(max(0, i-5), min(len(lines), i+15)):
            print(f"{j+1}: {lines[j]}")
