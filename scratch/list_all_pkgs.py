import json, re

with open('kerala_packages.json', 'r', encoding='utf-8') as f:
    kerala = json.load(f)

print(f"Total Kerala packages in JSON: {len(kerala)}")
for k in kerala:
    print(f"  - id: {k['id']}, title: {k['title']}, duration: {k['duration']}")

with open('js/tours.js', 'r', encoding='utf-8', errors='ignore') as f:
    tours_code = f.read()

# Find all package objects with id, title, destination, duration
matches = re.findall(r'"id":\s*"([^"]+)",\s*"title":\s*"([^"]+)",[^}]+?"destination":\s*"([^"]+)"', tours_code)
print(f"\nUnique tour IDs found in tours.js: {len(set(m[0] for m in matches))}")
by_dest = {}
for m in matches:
    dest = m[2]
    if dest not in by_dest:
        by_dest[dest] = set()
    by_dest[dest].add((m[0], m[1]))

for dest, items in by_dest.items():
    print(f"\nDestination: {dest} ({len(items)} packages)")
    for i in sorted(list(items))[:8]:
        print(f"  - {i[0]}: {i[1]}")
