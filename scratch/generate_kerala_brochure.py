import os
import requests
from io import BytesIO
from PIL import Image, ImageDraw, ImageFont, ImageFilter

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

def draw_header_footer(draw, page_title=""):
    # Footer bar
    foot_y = H - 60
    draw.rectangle([0, foot_y, W, H], fill=(20, 20, 20))
    f_font = get_font(18, bold=False)
    f_bold = get_font(18, bold=True)
    draw.text((40, foot_y + 18), "📷  Crazy_traveller_11", fill=(255, 255, 255), font=f_font)
    draw.text((W//2, foot_y + 18), "✉️  Crazytraveller11@gmail.com", fill=(255, 255, 255), font=f_font, anchor="mt")
    draw.text((W - 40, foot_y + 18), "🌐  www.crazytourstravels.com", fill=(255, 255, 255), font=f_font, anchor="rt")

def make_cover(pkg_title, duration_text, bg_url, polaroids, out_name):
    bg = fetch_img(bg_url, (W, H))
    # Dark gradient overlay for readability
    overlay = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    ov_draw = ImageDraw.Draw(overlay)
    for y in range(H):
        if y < 450:
            alpha = int(120 + (450 - y) * 0.15)
        elif y > 750:
            alpha = int(140 + (y - 750) * 0.22)
        else:
            alpha = 90
        alpha = min(230, max(0, alpha))
        ov_draw.line([(0, y), (W, y)], fill=(12, 16, 22, alpha))
    
    # Glowing moon on top left
    ov_draw.ellipse([210, 50, 290, 130], fill=(255, 255, 250, 230))
    bg.paste(overlay, (0, 0), overlay)
    
    draw = ImageDraw.Draw(bg)
    
    # Brand logo / watermark top right
    logo_path = r"assets\images\crazy_logo_circle.png"
    if os.path.exists(logo_path):
        try:
            logo = Image.open(logo_path).convert('RGBA')
            logo = logo.resize((90, 90), Image.Resampling.LANCZOS)
            bg.paste(logo, (W - 130, 40), logo)
        except Exception as e:
            print("Logo load error:", e)
    
    draw.text((W - 145, 140), "CRAZY TOURS & TRAVELS", fill=(255, 200, 150), font=get_font(18, bold=True), anchor="rt")
    
    # Big Main Destination Title
    draw.text((W//2, 230), "KERALA", fill=(255, 255, 255), font=get_font(96, bold=True), anchor="mm")
    draw.rectangle([W//2 - 280, 290, W//2 + 280, 294], fill=(255, 255, 255))
    
    # Subtitle
    draw.text((W//2 - 30, 345), pkg_title.upper(), fill=(255, 255, 255), font=get_font(38, bold=True), anchor="mm")
    draw.text((W//2 + 280, 340), "trip", fill=(255, 255, 255), font=get_font(38, bold=False), anchor="mm")
    
    # Duration pill
    draw.text((W//2, 420), duration_text.upper(), fill=(255, 215, 0), font=get_font(52, bold=True), anchor="mm")
    
    # Feature icons pill row
    icons = ["Transport", "Meals", "Stay", "Sight Seeing", "Telugu CC", "HM Bed"]
    total_w = len(icons) * 120
    start_x = (W - total_w) // 2
    for i, ic in enumerate(icons):
        cx = start_x + i * 120 + 60
        cy = 540
        draw.ellipse([cx - 36, cy - 36, cx + 36, cy + 36], fill=(255, 255, 255, 240), outline=(234, 46, 0), width=3)
        draw.text((cx, cy), "★", fill=(234, 46, 0), font=get_font(26, bold=True), anchor="mm")
        draw.rectangle([cx - 45, cy + 46, cx + 45, cy + 68], fill=(40, 100, 140))
        draw.text((cx, cy + 57), ic, fill=(255, 255, 255), font=get_font(13, bold=True), anchor="mm")
    
    # 4 Polaroids
    pol_w, pol_h = 220, 245
    p_gap = 25
    p_total = len(polaroids) * pol_w + (len(polaroids) - 1) * p_gap
    px_start = (W - p_total) // 2
    py = 750
    
    for idx, (p_url, p_label) in enumerate(polaroids):
        p_img = fetch_img(p_url, (pol_w - 16, pol_h - 48))
        card = Image.new('RGBA', (pol_w, pol_h), (255, 255, 255, 255))
        card.paste(p_img, (8, 8))
        cdraw = ImageDraw.Draw(card)
        cdraw.rectangle([0, 0, pol_w-1, pol_h-1], outline=(200, 200, 200), width=1)
        cdraw.ellipse([pol_w//2 - 6, 2, pol_w//2 + 6, 14], fill=(220, 30, 20), outline=(150, 10, 10))
        cdraw.text((pol_w//2, pol_h - 22), p_label.upper(), fill=(20, 20, 20), font=get_font(14, bold=True), anchor="mm")
        
        bg.paste(card, (px_start + idx * (pol_w + p_gap), py), card)
        
    # Phone numbers bar
    bar_y = 1080
    draw.rectangle([140, bar_y, W - 140, bar_y + 80], fill=(255, 255, 255), outline=(234, 46, 0), width=3)
    draw.ellipse([160, bar_y + 14, 212, bar_y + 66], fill=(37, 211, 102))
    draw.text((186, bar_y + 40), "📞", fill=(255, 255, 255), font=get_font(24), anchor="mm")
    draw.text((W//2 + 20, bar_y + 40), "79895-15104 | 86889-15489", fill=(10, 10, 10), font=get_font(38, bold=True), anchor="mm")
    
    # Sub note
    draw.text((W//2, bar_y + 115), "24/7 DEDICATED TELUGU CUSTOMER CARE CONCIERGE (తెలుగు కస్టమర్ కేర్)", fill=(255, 240, 180), font=get_font(18, bold=True), anchor="mm")
    
    draw_header_footer(draw)
    
    out_path = os.path.join(out_dir, out_name)
    bg.save(out_path, quality=95)
    print(f"Generated cover: {out_path}")

def make_inclusions_page(inclusions, out_name):
    im = Image.new('RGB', (W, H), (24, 28, 34))
    draw = ImageDraw.Draw(im)
    
    # Header
    draw.text((W//2, 90), "PACKAGE INCLUSIONS", fill=(255, 255, 255), font=get_font(52, bold=True), anchor="mm")
    draw.rectangle([W//2 - 240, 130, W//2 + 240, 135], fill=(234, 46, 0))
    
    start_y = 200
    for idx, inc in enumerate(inclusions):
        cy = start_y + idx * 130
        draw.ellipse([80, cy - 36, 152, cy + 36], fill=(234, 46, 0))
        draw.text((116, cy), "✓", fill=(255, 255, 255), font=get_font(34, bold=True), anchor="mm")
        
        draw.text((180, cy - 18), inc[0].upper(), fill=(255, 255, 255), font=get_font(28, bold=True))
        if len(inc) > 1 and inc[1]:
            draw.text((180, cy + 18), f"( {inc[1]} )", fill=(255, 215, 0), font=get_font(24, bold=False))
            
    # Hotline bar at bottom
    bar_y = 1100
    draw.rectangle([140, bar_y, W - 140, bar_y + 70], fill=(255, 255, 255))
    draw.text((W//2, bar_y + 35), "📞  79895-15104 | 86889-15489", fill=(10, 10, 10), font=get_font(34, bold=True), anchor="mm")
    
    draw_header_footer(draw)
    out_path = os.path.join(out_dir, out_name)
    im.save(out_path, quality=95)
    print(f"Generated inclusions: {out_path}")

def make_itinerary_page(day_num, day_title, day_points, photos_list, out_name):
    # Dark aesthetic with top banner
    im = Image.new('RGB', (W, H), (22, 26, 32))
    draw = ImageDraw.Draw(im)
    
    # Day badge
    draw.text((W//2, 90), f"DAY {day_num:02d}", fill=(255, 255, 255), font=get_font(60, bold=True), anchor="mm")
    draw.text((W//2, 160), day_title.upper(), fill=(255, 215, 0), font=get_font(36, bold=True), anchor="mm")
    draw.rectangle([120, 195, W - 120, 198], fill=(255, 255, 255))
    
    # Itinerary bullet points
    start_y = 260
    for idx, pt in enumerate(day_points):
        cy = start_y + idx * 110
        draw.polygon([(100, cy - 14), (128, cy), (100, cy + 14)], fill=(255, 215, 0))
        
        # Word wrap text
        words = pt.split()
        line1 = ""
        line2 = ""
        for w in words:
            if len(line1 + " " + w) < 46:
                line1 += (" " if line1 else "") + w
            else:
                line2 += (" " if line2 else "") + w
                
        draw.text((150, cy - 14), line1, fill=(255, 255, 255), font=get_font(26, bold=True))
        if line2:
            draw.text((150, cy + 18), line2, fill=(210, 215, 220), font=get_font(24, bold=False))
            
    # Bottom photo polaroids
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
        cdraw.rectangle([0, 0, pol_w-1, pol_h-1], outline=(200, 200, 200), width=1)
        cdraw.text((pol_w//2, pol_h - 22), p_label.upper(), fill=(20, 20, 20), font=get_font(13, bold=True), anchor="mm")
        im.paste(card, (px_start + idx * (pol_w + p_gap), py), card)
        
    draw_header_footer(draw)
    out_path = os.path.join(out_dir, out_name)
    im.save(out_path, quality=95)
    print(f"Generated itinerary day {day_num}: {out_path}")

# Run generation for Kerala Honeymoon Package (5D4N)
make_cover(
    "Honeymoon Package",
    "5 Days, 4 Nights",
    "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
    [
        ("https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=400&q=80", "Munnar Tea Hills"),
        ("https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=400&q=80", "Mattupetty Dam"),
        ("https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=400&q=80", "Houseboat Cruise"),
        ("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80", "Sunset Beach")
    ],
    "kerala_honeymoon_5d4n_p1.png"
)

make_inclusions_page([
    ["Dedicated AC Personal Cab for all 5 Days", "Airport / Railway Transfers & All Sightseeing"],
    ["4 Nights Luxury Hotel / Resort Stays", "2N Munnar, 1N Thekkady, 1N Alleppey"],
    ["4 Daily Delicious Buffet Breakfasts", "Prepared fresh at hotels daily"],
    ["Honeymoon Flower Bed Decor & Celebration Cake", "Special romantic couple arrangement"],
    ["Alleppey Shikara Cruise / Backwater Experience", "Serene private canal boat tour"],
    ["All Tolls, Parking, Fuel & Border Taxes Included", "No hidden driver or vehicle charges"],
    ["24/7 Dedicated Telugu Customer Care Support", "Live Telugu concierge assistance throughout"]
], "kerala_honeymoon_5d4n_p2.png")

make_itinerary_page(
    1, "Cochin Arrival & Scenic Drive to Munnar",
    [
        "Arrival at Cochin Airport / Railway Station & Cab Driver Greeting.",
        "Scenic drive through lush hills, Cheeyappara & Valara Waterfalls.",
        "Spice plantation tour & zip line adventure viewpoint.",
        "Check-in at Munnar resort, relax with romantic mountain valley views."
    ],
    [
        ("https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=400&q=80", "Cheeyappara"),
        ("https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=400&q=80", "Spice Valley"),
        ("https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=400&q=80", "Munnar Stay")
    ],
    "kerala_honeymoon_5d4n_p3.png"
)

make_itinerary_page(
    2, "Munnar Valley & Mattupetty Sightseeing",
    [
        "After breakfast, explore the tranquil Mattupetty Dam & Lake.",
        "Echo Point, Photo Point, and sprawling emerald tea estate walks.",
        "Tea Museum visit & Tata tea tasting session.",
        "Overnight stay with special romantic bed decoration in Munnar."
    ],
    [
        ("https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=400&q=80", "Mattupetty"),
        ("https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=400&q=80", "Tea Museum"),
        ("https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80", "Echo Point")
    ],
    "kerala_honeymoon_5d4n_p4.png"
)

make_itinerary_page(
    3, "Munnar to Thekkady: Spice Hills & Periyar",
    [
        "Scenic drive to Thekkady through rolling cardamom valleys.",
        "Check-in at Thekkady resort & boat ride in Periyar Lake Sanctuary.",
        "Spot wild elephants, deer and tropical birdlife.",
        "Evening Kathakali classical dance & Kalaripayattu martial arts show."
    ],
    [
        ("https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=400&q=80", "Periyar Boating"),
        ("https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=400&q=80", "Spice Hills"),
        ("https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=400&q=80", "Kathakali Show")
    ],
    "kerala_honeymoon_5d4n_p5.png"
)

make_itinerary_page(
    4, "Thekkady to Alleppey: Backwaters & Houseboat",
    [
        "Descend to Alleppey, the Venice of the East.",
        "Board private houseboat / Shikara for backwater canal cruise.",
        "Glide past swaying coconut lagoons, floating paddy fields & village life.",
        "Catch the golden sunset at Alleppey Beach and enjoy candlelit dinner."
    ],
    [
        ("https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80", "Alleppey Cruise"),
        ("https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=400&q=80", "Palm Lagoons"),
        ("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80", "Beach Sunset")
    ],
    "kerala_honeymoon_5d4n_p6.png"
)

make_itinerary_page(
    5, "Alleppey to Cochin: Fort Cochin Heritage & Drop",
    [
        "After breakfast, drive to historic Fort Cochin.",
        "Visit Dutch Palace, St. Francis Church & iconic Chinese Fishing Nets.",
        "Souvenir shopping at Jews Street for Kerala spices and handicrafts.",
        "Cab driver drop-off at Cochin Airport or Railway Station with fond memories."
    ],
    [
        ("https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=400&q=80", "Chinese Nets"),
        ("https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=400&q=80", "Dutch Palace"),
        ("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", "Fort Cochin")
    ],
    "kerala_honeymoon_5d4n_p7.png"
)

print("ALL KERALA BROCHURE PAGES GENERATED SUCCESSFULLY!")
