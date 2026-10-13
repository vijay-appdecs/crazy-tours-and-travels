import re, sys
sys.stdout.reconfigure(encoding='utf-8')

with open('js/tours.js', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

manali_ids = re.findall(r'"id":\s*"(manali-[^"]+)"', text)
print(f"Manali package IDs ({len(manali_ids)}):", manali_ids[:10])

# Also check any other destinations
all_dests = set(re.findall(r'"destination":\s*"([^"]+)"', text))
print("All destinations found in tours.js:", all_dests)
