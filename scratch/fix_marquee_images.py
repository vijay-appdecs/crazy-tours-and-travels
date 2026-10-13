with open('index.html', 'r', encoding='utf-8') as f:
    c = f.read()

# Replace loading="lazy" inside dest-marquee-track with loading="eager"
start_idx = c.find('id="dest-marquee-track"')
end_idx = c.find('</section>', start_idx)

if start_idx != -1 and end_idx != -1:
    track_html = c[start_idx:end_idx]
    new_track_html = track_html.replace('loading="lazy"', 'loading="eager"')
    c = c[:start_idx] + new_track_html + c[end_idx:]
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(c)
    print("Successfully replaced loading='lazy' with loading='eager' in destination marquee!")
else:
    print("Could not find track section")
