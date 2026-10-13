import json

try:
    with open('kerala_packages.json', 'r', encoding='utf-8') as f:
        kerala = json.load(f)
    print("Kerala packages count:", len(kerala))
    for p in kerala[:5]:
        print("-", p.get('id'), "|", p.get('title'), "|", p.get('duration'), "|", p.get('priceFormatted'), "|", p.get('image'))
except Exception as e:
    print("Error reading kerala:", e)
