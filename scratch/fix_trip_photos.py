import re

with open('js/crazy-travels-data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix kerala-honeymoon-5d4n photos
old_k5_photos = '''      "photos": [
        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      ],'''

new_k5_photos = '''      "photos": [
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
      ],'''

if old_k5_photos in content:
    content = content.replace(old_k5_photos, new_k5_photos)
    print("Updated kerala-honeymoon-5d4n photos")

# Fix kerala-honeymoon-4d3n photos
old_k4_photos = '''      "photos": [
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
      ],'''

new_k4_photos = '''      "photos": [
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
      ],'''

if old_k4_photos in content:
    content = content.replace(old_k4_photos, new_k4_photos)
    print("Updated kerala-honeymoon-4d3n photos")

# Fix any other trips having duplicated photos[0] == photos[1]
with open('js/crazy-travels-data.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done updating crazy-travels-data.js")
