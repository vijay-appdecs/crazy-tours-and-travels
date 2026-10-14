import os
import requests
from io import BytesIO
from PIL import Image, ImageDraw, ImageFont, ImageFilter

out_dir = r"assets\pdf_pages"
os.makedirs(out_dir, exist_ok=True)

W, H = 1080, 1350  # Standard high-res vertical brochure ratio (4:5)

def get_font(size, bold=False):
    # Try system fonts
    font_paths = [
        r"C:\Windows\Fonts\arialbd.ttf" if bold else r"C:\Windows\Fonts\arial.ttf",
        r"C:\Windows\Fonts\calibrib.ttf" if bold else r"C:\Windows\Fonts\calibri.ttf",
        r"C:\Windows\Fonts\segoeuib.ttf" if bold else r"C:\Windows\Fonts\segoeui.ttf",
    ]
    for p in font_paths:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except:
                pass
    return ImageFont.load_default()

def fetch_img(url, size):
    try:
        resp = requests.get(url, timeout=10)
        img = Image.open(BytesIO(resp.content)).convert('RGB')
        # Center crop to size
        img_ratio = img.width / img.height
        target_ratio = size[0] / size[1]
        if img_ratio > target_ratio:
            new_w = int(img.height * target_ratio)
            left = (img.width - new_w) // 2
            img = img.crop((left, 0, left + new_w, img.height))
        else:
            new_h = int(img.width / target_ratio)
            top = (img.height - new_h) // 2
            img = img.crop((0, top, img.width, top + new_h))
        return img.resize(size, Image.Resampling.LANCZOS)
    except Exception as e:
        print("Error fetching img:", e)
        im = Image.new('RGB', size, (40, 50, 60))
        return im

def create_polaroid(img, label, w=220, h=250):
    pol = Image.new('RGBA', (w, h), (255, 255, 255, 255))
    draw = ImageDraw.Draw(pol)
    # Inner photo
    inner_w, inner_h = w - 16, h - 52
    resized_photo = img.resize((inner_w, inner_h), Image.Resampling.LANCZOS)
    pol.paste(resized_photo, (8, 8))
    # Border
    draw.rectangle([0, 0, w-1, h-1], outline=(220, 220, 220, 255), width=1)
    # Red pin on top center
    draw.ellipse([w//2 - 6, 2, w//2 + 6, 14], fill=(220, 30, 20, 255), outline=(150, 10, 10, 255))
    # Label text
    font = get_font(15, bold=True)
    draw.text((w//2, h - 24), label, fill=(20, 20, 20, 255), font=font, anchor="mm")
    return pol

print("Brochure generator ready.")
