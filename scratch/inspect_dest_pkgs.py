import re, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('js/tours.js', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

pattern = re.compile(r'"id":\s*"([^"]+)",\s*"title":\s*"([^"]+)",[^}]+?"destination":\s*"([^"]+)",[^}]+?"duration":\s*"([^"]+)",[^}]+?"priceFormatted":\s*"([^"]+)"', re.DOTALL)
matches = pattern.findall(text)

by_dest = {}
for m in matches:
    d = m[2]
    if d not in by_dest:
        by_dest[d] = []
    by_dest[d].append(m)

for d, pkgs in by_dest.items():
    print(f"\n--- Destination: {d} ({len(pkgs)} packages) ---")
    for p in pkgs[:6]:
        print(f"  ID: {p[0]} | Title: {p[1]} | Duration: {p[3]} | Price: {p[4]}")
