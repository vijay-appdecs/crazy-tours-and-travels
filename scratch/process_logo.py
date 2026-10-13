from PIL import Image, ImageDraw
import numpy as np

src_path = r'C:\Users\vijay\.gemini\antigravity-ide\brain\c967ed45-0d77-46ea-995f-7334c30f7c73\.user_uploaded\media_1791795110821.jpg'
im = Image.open(src_path).convert('RGBA')
arr = np.array(im)

# The red circle has high Red channel and lower Green/Blue
# Color #EA2E00 is ~ R: 234, G: 46, B: 0
red_mask = (arr[:, :, 0] > 180) & (arr[:, :, 1] < 120) & (arr[:, :, 2] < 120)

# Also inside the logo there is white text/shapes (R>200, G>200, B>200)
# Find bounding box of the circular region
y_indices, x_indices = np.where((arr[:, :, 0] > 160) & (arr[:, :, 1] < 140))
if len(y_indices) > 0 and len(x_indices) > 0:
    min_y, max_y = y_indices.min(), y_indices.max()
    min_x, max_x = x_indices.min(), x_indices.max()
    print(f"Bounding box: x: {min_x} to {max_x}, y: {min_y} to {max_y}")
    
    # Calculate center and radius of the red circle
    center_x = (min_x + max_x) // 2
    center_y = (min_y + max_y) // 2
    radius = min((max_x - min_x) // 2, (max_y - min_y) // 2)
    print(f"Center: ({center_x}, {center_y}), Radius: {radius}")

    # Crop with circular alpha mask
    cropped = Image.new('RGBA', (radius * 2, radius * 2), (0, 0, 0, 0))
    crop_box = (center_x - radius, center_y - radius, center_x + radius, center_y + radius)
    sub_im = im.crop(crop_box)

    mask = Image.new('L', (radius * 2, radius * 2), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, radius * 2, radius * 2), fill=255)

    cropped.paste(sub_im, (0, 0), mask=mask)
    cropped.save('assets/images/crazy_logo_circle.png')
    cropped.save('assets/images/logo-icon.png')
    cropped.save('assets/images/logo.png')
    print("Saved assets/images/crazy_logo_circle.png and logo.png!")
