from PIL import Image

img = Image.open(r"C:\Users\vijay\.gemini\antigravity-ide\brain\14784770-960c-45b7-8e78-82af079899ea\.tempmediaStorage\media_1791999596502.png")
w, h = img.size

# Let's find pixel colors around the card:
# The image has:
# top text: "or style, or search by name..."
# then card container
# then destination pill
# then style pill
# then clear filters
# then 5D/4N chip

for y in range(int(h * 0.15), int(h * 0.85), 25):
    p = img.getpixel((int(w * 0.5), y))
    hex_col = '#{:02x}{:02x}{:02x}'.format(p[0], p[1], p[2])
    print(f"y={y} ({y/h:.2f}): {p} {hex_col}")
