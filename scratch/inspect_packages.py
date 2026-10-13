import json
import re

with open('kerala_packages.json', 'r', encoding='utf-8') as f:
    kp = json.load(f)
print(f"kerala_packages.json has {len(kp)} packages:")
for i, p in enumerate(kp):
    print(f"  KP{i+1}: {p.get('title')} | Duration: {p.get('duration')} | Type: {p.get('package_type')} | Price: {p.get('price')}")

# Inspect js/tours.js
with open('js/tours.js', 'r', encoding='utf-8') as f:
    content = f.read()

# tours.js defines window.TOURS_DATA or const TOURS_DATA = ...
# Let's count tour objects or categories
match = re.search(r'TOURS_DATA\s*=\s*(\{[\s\S]*\});?\s*$', content)
if not match:
    # try other pattern
    match = re.search(r'(?:const|var|let)?\s*TOURS_DATA\s*=\s*(\{[\s\S]*\})', content)

if match:
    # It might be JS object, let's see keys
    print("Found TOURS_DATA definition")
else:
    # let's find destinations
    print("tours.js length:", len(content))

# Also inspect crazy-travels-data.js trips
with open('js/crazy-travels-data.js', 'r', encoding='utf-8') as f:
    wf_content = f.read()

trip_ids = re.findall(r'id:\s*["\']([^"\']+)["\']', wf_content)
print(f"crazy-travels-data.js has {len(trip_ids)} ids in total")
