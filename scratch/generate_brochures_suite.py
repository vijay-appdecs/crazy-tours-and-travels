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
        resp = requests.get(url, timeout=10)
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
        im = Image.new('RGB', size, (30, 36, 46))
        return im

def draw_header_footer(draw):
    foot_y = H - 60
    draw.rectangle([0, foot_y, W, H], fill=(16, 20, 26))
    f_font = get_font(18, bold=False)
    draw.text((45, foot_y + 18), "Crazy_traveller_11", fill=(255, 255, 255), font=f_font)
    draw.text((W//2, foot_y + 18), "Crazytraveller11@gmail.com", fill=(255, 255, 255), font=f_font, anchor="mt")
    draw.text((W - 45, foot_y + 18), "www.crazytourstravels.com", fill=(255, 255, 255), font=f_font, anchor="rt")

def make_cover(dest_heading, pkg_title, duration_text, bg_url, polaroids, out_name):
    bg = fetch_img(bg_url, (W, H))
    overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ov_draw = ImageDraw.Draw(overlay)
    for y in range(H):
        if y < 460:
            alpha = int(135 + (460 - y) * 0.18)
        elif y > 720:
            alpha = int(145 + (y - 720) * 0.22)
        else:
            alpha = 105
        alpha = min(235, max(0, alpha))
        ov_draw.line([(0, y), (W, y)], fill=(12, 16, 22, alpha))
    
    bg.paste(overlay, (0, 0), overlay)
    
    draw = ImageDraw.Draw(bg)
    
    # Logo
    logo_path = r"assets\images\crazy_logo_circle.png"
    if os.path.exists(logo_path):
        try:
            logo = Image.open(logo_path).convert('RGBA')
            logo = logo.resize((96, 96), Image.Resampling.LANCZOS)
            bg.paste(logo, (W - 135, 40), logo)
        except Exception as e:
            print("Logo load error:", e)
            
    draw.text((W - 148, 145), "CRAZY TOURS & TRAVELS", fill=(255, 205, 160), font=get_font(18, bold=True), anchor="rt")
    
    # Destination Heading
    draw.text((W//2, 230), dest_heading.upper(), fill=(255, 255, 255), font=get_font(98, bold=True), anchor="mm")
    draw.rectangle([W//2 - 280, 292, W//2 + 280, 296], fill=(255, 255, 255))
    
    # Subtitle
    draw.text((W//2, 348), pkg_title.upper(), fill=(255, 255, 255), font=get_font(38, bold=True), anchor="mm")
    
    # Duration pill
    draw.text((W//2, 422), duration_text.upper(), fill=(255, 215, 0), font=get_font(52, bold=True), anchor="mm")
    
    # Icons
    icons = ["Transport", "Meals", "Stay", "Sight Seeing", "Telugu CC", "Custom Care"]
    total_w = len(icons) * 122
    start_x = (W - total_w) // 2
    for i, ic in enumerate(icons):
        cx = start_x + i * 122 + 61
        cy = 535
        draw.ellipse([cx - 36, cy - 36, cx + 36, cy + 36], fill=(255, 255, 255), outline=(234, 46, 0), width=3)
        # Vector Star
        import math
        star_pts = []
        for s_i in range(10):
            r = 18 if s_i % 2 == 0 else 8
            ang = s_i * math.pi / 5 - math.pi / 2
            star_pts.append((cx + r * math.cos(ang), cy + r * math.sin(ang)))
        draw.polygon(star_pts, fill=(234, 46, 0))
        draw.rectangle([cx - 48, cy + 45, cx + 48, cy + 68], fill=(32, 90, 130))
        draw.text((cx, cy + 56), ic, fill=(255, 255, 255), font=get_font(13, bold=True), anchor="mm")
        
    # Polaroids
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
        cdraw.text((pol_w//2, pol_h - 22), p_label.upper(), fill=(20, 20, 20), font=get_font(13, bold=True), anchor="mm")
        bg.paste(card, (px_start + idx * (pol_w + p_gap), py), card)
        
    # Phone numbers bar
    bar_y = 1080
    draw.rectangle([140, bar_y, W - 140, bar_y + 80], fill=(255, 255, 255), outline=(234, 46, 0), width=3)
    draw.ellipse([160, bar_y + 14, 212, bar_y + 66], fill=(37, 211, 102))
    draw.text((186, bar_y + 40), "WA", fill=(255, 255, 255), font=get_font(20, bold=True), anchor="mm")
    draw.text((W//2 + 20, bar_y + 40), "88672-29998 | 88672-39998", fill=(10, 10, 10), font=get_font(38, bold=True), anchor="mm")
    
    draw.text((W//2, bar_y + 115), "24/7 DEDICATED TELUGU CUSTOMER CARE CONCIERGE", fill=(255, 240, 180), font=get_font(19, bold=True), anchor="mm")
    
    draw_header_footer(draw)
    out_path = os.path.join(out_dir, out_name)
    bg.save(out_path, quality=95)
    print(f"Generated cover: {out_path}")

def make_inclusions_page(inclusions, out_name):
    im = Image.new('RGB', (W, H), (22, 26, 34))
    draw = ImageDraw.Draw(im)
    
    draw.text((W//2, 90), "PACKAGE INCLUSIONS", fill=(255, 255, 255), font=get_font(52, bold=True), anchor="mm")
    draw.rectangle([W//2 - 240, 130, W//2 + 240, 135], fill=(234, 46, 0))
    
    start_y = 200
    for idx, inc in enumerate(inclusions):
        cy = start_y + idx * 125
        draw.ellipse([70, cy - 32, 138, cy + 32], fill=(234, 46, 0))
        draw.text((104, cy), "OK", fill=(255, 255, 255), font=get_font(22, bold=True), anchor="mm")
        
        draw.text((165, cy - 16), inc[0].upper(), fill=(255, 255, 255), font=get_font(26, bold=True))
        if len(inc) > 1 and inc[1]:
            draw.text((165, cy + 18), f"( {inc[1]} )", fill=(255, 215, 0), font=get_font(22, bold=False))
            
    bar_y = 1100
    draw.rectangle([140, bar_y, W - 140, bar_y + 70], fill=(255, 255, 255))
    draw.text((W//2, bar_y + 35), "TEL: +91 88672 29998 | +91 88672 39998", fill=(10, 10, 10), font=get_font(32, bold=True), anchor="mm")
    
    draw_header_footer(draw)
    out_path = os.path.join(out_dir, out_name)
    im.save(out_path, quality=95)
    print(f"Generated inclusions: {out_path}")

def make_itinerary_page(day_num, day_title, day_points, photos_list, out_name):
    im = Image.new('RGB', (W, H), (20, 24, 32))
    draw = ImageDraw.Draw(im)
    
    draw.text((W//2, 85), f"DAY {day_num:02d}", fill=(255, 255, 255), font=get_font(56, bold=True), anchor="mm")
    draw.text((W//2, 150), day_title.upper(), fill=(255, 215, 0), font=get_font(34, bold=True), anchor="mm")
    draw.rectangle([100, 185, W - 100, 188], fill=(255, 255, 255))
    
    start_y = 250
    for idx, pt in enumerate(day_points):
        cy = start_y + idx * 105
        draw.polygon([(85, cy - 12), (110, cy), (85, cy + 12)], fill=(255, 215, 0))
        
        words = pt.split()
        line1, line2 = "", ""
        for w in words:
            if len(line1 + " " + w) < 46:
                line1 += (" " if line1 else "") + w
            else:
                line2 += (" " if line2 else "") + w
                
        draw.text((130, cy - 12), line1, fill=(255, 255, 255), font=get_font(25, bold=True))
        if line2:
            draw.text((130, cy + 18), line2, fill=(205, 215, 225), font=get_font(23, bold=False))
            
    py = 880
    pol_w, pol_h = 220, 240
    p_gap = 25
    p_total = len(photos_list) * pol_w + (len(photos_list) - 1) * p_gap
    px_start = (W - p_total) // 2
    
    for idx, (p_url, p_label) in enumerate(photos_list):
        p_img = fetch_img(p_url, (pol_w - 16, pol_h - 48))
        card = Image.new('RGBA', (pol_w, pol_h), (255, 255, 255, 255))
        card.paste(p_img, (8, 8))
        cdraw = ImageDraw.Draw(card)
        cdraw.rectangle([0, 0, pol_w-1, pol_h-1], outline=(190, 190, 190), width=1)
        cdraw.text((pol_w//2, pol_h - 22), p_label.upper(), fill=(20, 20, 20), font=get_font(13, bold=True), anchor="mm")
        im.paste(card, (px_start + idx * (pol_w + p_gap), py), card)
        
    draw_header_footer(draw)
    out_path = os.path.join(out_dir, out_name)
    im.save(out_path, quality=95)
    print(f"Generated day {day_num}: {out_path}")

print("Brochure template engine initialized!")
