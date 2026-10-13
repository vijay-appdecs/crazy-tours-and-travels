import re

with open('trips.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = re.sub(r'<title>.*?</title>', '<title>Explore All Trips — Crazy Tours and Travels</title>', html)
html = html.replace('class="wf-display-headline"', 'class="wf-display-headline wf-reveal-words"')
html = html.replace('Search trips, for example Japan', 'Search trips, for example Kashmir or Munnar')

old_dest = '''          <select class="wf-filter-select" id="dest-filter-select" aria-label="Filter by destination">
            <option value="all">Destination: All</option>
            <option value="italy">Italy</option>
            <option value="japan">Japan</option>
            <option value="patagonia">Patagonia</option>
            <option value="morocco">Morocco</option>
            <option value="greece">Greece</option>
            <option value="tanzania">Tanzania</option>
            <option value="iceland">Iceland</option>
            <option value="peru">Peru</option>
          </select>'''

new_dest = '''          <select class="wf-filter-select" id="dest-filter-select" aria-label="Filter by destination">
            <option value="all">Destination: All</option>
            <option value="kashmir">Kashmir</option>
            <option value="kerala">Kerala</option>
            <option value="manali">Kullu-Manali</option>
            <option value="goa">Goa</option>
            <option value="himachal">Himachal Circuit</option>
            <option value="rajasthan">Rajasthan</option>
            <option value="ladakh">Ladakh</option>
            <option value="andaman">Andaman Islands</option>
          </select>'''

html = html.replace(old_dest, new_dest)

old_style = '''          <select class="wf-filter-select" id="style-filter-select" aria-label="Filter by travel style">
            <option value="all">Style: All</option>
            <option value="adventure">Adventure</option>
            <option value="culture">Culture</option>
            <option value="beach-islands">Beach and Islands</option>
            <option value="wildlife">Wildlife</option>
            <option value="food-wine">Food and Wine</option>
          </select>'''

new_style = '''          <select class="wf-filter-select" id="style-filter-select" aria-label="Filter by travel style">
            <option value="all">Style: All</option>
            <option value="honeymoon">Honeymoon & Romance</option>
            <option value="adventure">Adventure & Snow</option>
            <option value="beach-islands">Beach & Coastal</option>
            <option value="culture">Heritage & Culture</option>
            <option value="group">Bachelors & Group</option>
          </select>'''

html = html.replace(old_style, new_style)

with open('trips.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Updated trips.html successfully!")
