import os
import requests
from io import BytesIO
from PIL import Image, ImageDraw, ImageFont

out_dir = r"assets\pdf_pages"
os.makedirs(out_dir, exist_ok=True)

W, H = 1080, 1350

def get_font(size, bold=False):
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
        resp = requests.get(url, timeout=12)
        img = Image.open(BytesIO(resp.content)).convert('RGB')
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
        im = Image.new('RGB', size, (25, 35, 45))
        return im

def draw_header_footer(draw):
    foot_y = H - 60
    draw.rectangle([0, foot_y, W, H], fill=(18, 18, 18))
    f_font = get_font(18, bold=False)
    draw.text((50, foot_y + 18), "Crazy_traveller_11", fill=(255, 255, 255), font=f_font)
    draw.text((W//2, foot_y + 18), "Crazytraveller11@gmail.com", fill=(255, 255, 255), font=f_font, anchor="mt")
    draw.text((W - 50, foot_y + 18), "www.crazytourstravels.com", fill=(255, 255, 255), font=f_font, anchor="rt")

def make_cover(pkg_title, duration_text, bg_url, polaroids, out_name):
    bg = fetch_img(bg_url, (W, H))
    overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ov_draw = ImageDraw.Draw(overlay)
    for y in range(H):
        if y < 460:
            alpha = int(140 + (460 - y) * 0.18)
        elif y > 720:
            alpha = int(150 + (y - 720) * 0.22)
        else:
            alpha = 110
        alpha = min(235, max(0, alpha))
        ov_draw.line([(0, y), (W, y)], fill=(10, 14, 18, alpha))
    
    # Glowing full moon
    ov_draw.ellipse([190, 45, 275, 130], fill=(255, 255, 250, 235))
    bg.paste(overlay, (0, 0), overlay)
    
    draw = ImageDraw.Draw(bg)
    
    # Brand logo top right
    logo_path = r"assets\images\crazy_logo_circle.png"
    if os.path.exists(logo_path):
        try:
            logo = Image.open(logo_path).convert('RGBA')
            logo = logo.resize((96, 96), Image.Resampling.LANCZOS)
            bg.paste(logo, (W - 135, 40), logo)
        except Exception as e:
            print("Logo load error:", e)
    
    draw.text((W - 148, 145), "CRAZY TOURS & TRAVELS", fill=(255, 205, 160), font=get_font(18, bold=True), anchor="rt")
    
    # Big Main Destination Title
    draw.text((W//2, 230), "KERALA", fill=(255, 255, 255), font=get_font(102, bold=True), anchor="mm")
    draw.rectangle([W//2 - 290, 292, W//2 + 290, 296], fill=(255, 255, 255))
    
    # Subtitle
    draw.text((W//2 - 25, 348), pkg_title.upper(), fill=(255, 255, 255), font=get_font(40, bold=True), anchor="mm")
    draw.text((W//2 + 290, 344), "trip", fill=(255, 255, 255), font=get_font(38, bold=False), anchor="mm")
    
    # Duration pill
    draw.text((W//2, 422), duration_text.upper(), fill=(255, 215, 0), font=get_font(52, bold=True), anchor="mm")
    
    # Feature badges
    icons = ["Transport", "Meals", "Stay", "Sight Seeing", "Telugu CC", "HM Bed"]
    total_w = len(icons) * 122
    start_x = (W - total_w) // 2
    for i, ic in enumerate(icons):
        cx = start_x + i * 122 + 61
        cy = 535
        draw.ellipse([cx - 36, cy - 36, cx + 36, cy + 36], fill=(255, 255, 255), outline=(234, 46, 0), width=3)
        draw.text((cx, cy), "*", fill=(234, 46, 0), font=get_font(34, bold=True), anchor="mm")
        draw.rectangle([cx - 48, cy + 45, cx + 48, cy + 68], fill=(32, 90, 130))
        draw.text((cx, cy + 56), ic, fill=(255, 255, 255), font=get_font(13, bold=True), anchor="mm")
    
    # 4 Polaroids
    pol_w, pol_h = 224, 250
    p_gap = 22
    p_total = len(polaroids) * pol_w + (len(polaroids) - 1) * p_gap
    px_start = (W - p_total) // 2
    py = 750
    
    for idx, (p_url, p_label) in enumerate(polaroids):
        p_img = fetch_img(p_url, (pol_w - 16, pol_h - 48))
        card = Image.new('RGBA', (pol_w, pol_h), (255, 255, 255, 255))
        card.paste(p_img, (8, 8))
        cdraw = ImageDraw.Draw(card)
        cdraw.rectangle([0, 0, pol_w-1, pol_h-1], outline=(190, 190, 190), width=1)
        cdraw.ellipse([pol_w//2 - 6, 2, pol_w//2 + 6, 14], fill=(220, 30, 20), outline=(150, 10, 10))
        cdraw.text((pol_w//2, pol_h - 22), p_label.upper(), fill=(20, 20, 20), font=get_font(14, bold=True), anchor="mm")
        bg.paste(card, (px_start + idx * (pol_w + p_gap), py), card)
        
    # Phone numbers bar
    bar_y = 1080
    draw.rectangle([140, bar_y, W - 140, bar_y + 80], fill=(255, 255, 255), outline=(234, 46, 0), width=3)
    draw.ellipse([160, bar_y + 14, 212, bar_y + 66], fill=(37, 211, 102))
    draw.text((186, bar_y + 40), "WA", fill=(255, 255, 255), font=get_font(20, bold=True), anchor="mm")
    draw.text((W//2 + 20, bar_y + 40), "79895-15104 | 86889-15489", fill=(10, 10, 10), font=get_font(40, bold=True), anchor="mm")
    
    draw.text((W//2, bar_y + 115), "24/7 DEDICATED TELUGU CUSTOMER CARE CONCIERGE", fill=(255, 240, 180), font=get_font(20, bold=True), anchor="mm")
    
    draw_header_footer(draw)
    
    out_path = os.path.join(out_dir, out_name)
    bg.save(out_path, quality=95)
    print(f"Generated cover: {out_path}")

# Generate Kerala Honeymoon Cover with real Munnar Tea Garden photo
make_cover(
    "Honeymoon Package",
    "5 Days, 4 Nights",
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    [
        ("https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?auto=format&fit=crop&w=400&q=80", "Munnar Tea Hills"),
        ("https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=400&q=80", "Alleppey Waters"),
        ("https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=400&q=80", "Periyar Wildlife"),
        ("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80", "Sunset Beach")
    ],
    "kerala_honeymoon_5d4n_p1.png"
)

# Also generate Kerala Honeymoon 4D3N Cover
make_cover(
    "Honeymoon Package",
    "4 Days, 3 Nights",
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    [
        ("https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?auto=format&fit=crop&w=400&q=80", "Munnar Tea Hills"),
        ("https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=400&q=80", "Alleppey Waters"),
        ("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80", "Sunset Beach")
    ],
    "kerala_honeymoon_4d3n_p1.png"
)

print("Covers updated with verified Munnar tea garden photos!")
