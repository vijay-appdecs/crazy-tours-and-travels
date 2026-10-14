import re
import json

with open(r'js\crazy-travels-data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Match trips array
start = content.find('"trips": [')
if start != -1:
    end = content.find('"reviews": [', start)
    # find the matching closing bracket before "reviews"
    trips_text = content[start + len('"trips": '):end].strip().rstrip(',')
    trips = json.loads(trips_text)
    print(f"Total trips found: {len(trips)}")
    for t in trips:
        slug = t.get('slug', t.get('id', 'unknown'))
        photos = t.get('photos', [])
        print(f"Trip: {slug} ({len(photos)} photos)")
        for i, p in enumerate(photos):
            print(f"   [{i}] {p[:80]}")
