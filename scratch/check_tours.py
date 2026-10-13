import re, json

with open('js/tours.js', 'r', encoding='utf-8', errors='ignore') as f:
    text = f.read()

destinations = sorted(list(set(re.findall(r'"destination":\s*"([^"]+)"', text))))
print("Destinations:", destinations)

titles = re.findall(r'"title":\s*"([^"]+)"', text)
print("Total packages:", len(titles))
print("Sample titles:", titles[:15])
