import re

# Update about.html
with open('about.html', 'r', encoding='utf-8') as f:
    about = f.read()

about = re.sub(r'<title>.*?</title>', '<title>About Us — Crazy Tours and Travels</title>', about)
about = about.replace('class="wf-display-headline"', 'class="wf-display-headline wf-reveal-words"')
about = about.replace('About Wayfare', 'About Crazy Tours and Travels')
about = about.replace('We founded Wayfare in 2011', 'We founded Crazy Tours and Travels in 2015')
about = about.replace('Wayfare scouting team in Tuscany', 'Crazy Tours team in the Himalayas')
about = about.replace('The Wayfare Story', 'The Crazy Tours Story')
about = about.replace('Why Wayfare Works', 'Why Crazy Tours Works')

with open('about.html', 'w', encoding='utf-8') as f:
    f.write(about)

# Update contact.html
with open('contact.html', 'r', encoding='utf-8') as f:
    contact = f.read()

contact = re.sub(r'<title>.*?</title>', '<title>Plan a Trip & Contact — Crazy Tours and Travels</title>', contact)
contact = contact.replace('class="wf-display-headline"', 'class="wf-display-headline wf-reveal-words"')
contact = contact.replace('hello@wayfare.travel', 'crazytraveller11@gmail.com')
contact = contact.replace('+1 (415) 555 0134', '+91 93901 02030')
contact = contact.replace('48 Harbor Street, San Francisco, CA', 'Begumpet & Jubilee Hills, Hyderabad, Telangana')
contact = contact.replace('Monday to Friday, 9am to 6pm PT', 'Monday to Sunday, 24/7 Telugu & English Desk')

with open('contact.html', 'w', encoding='utf-8') as f:
    f.write(contact)

# Update destination-detail.html defaults
with open('destination-detail.html', 'r', encoding='utf-8') as f:
    dest_d = f.read()

dest_d = dest_d.replace("'italy'", "'kerala'")
dest_d = dest_d.replace('Wayfare Destination Guide', 'Crazy Tours Destination Guide')
with open('destination-detail.html', 'w', encoding='utf-8') as f:
    f.write(dest_d)

# Update trip-detail.html defaults
with open('trip-detail.html', 'r', encoding='utf-8') as f:
    trip_d = f.read()

trip_d = trip_d.replace("'amalfi-coast-foot-ferry'", "'kerala-honeymoon-5d4n'")
trip_d = trip_d.replace('Wayfare Trip Details', 'Crazy Tours Trip Details')
with open('trip-detail.html', 'w', encoding='utf-8') as f:
    f.write(trip_d)

# Update journal.html and journal-detail.html
with open('journal.html', 'r', encoding='utf-8') as f:
    jour = f.read()
jour = re.sub(r'<title>.*?</title>', '<title>Journal — Notes from the Road | Crazy Tours and Travels</title>', jour)
jour = jour.replace('class="wf-main-heading"', 'class="wf-main-heading wf-reveal-words"')
with open('journal.html', 'w', encoding='utf-8') as f:
    f.write(jour)

with open('journal-detail.html', 'r', encoding='utf-8') as f:
    jour_d = f.read()
jour_d = jour_d.replace("'small-group-tour-or-tailor-made-trip'", "'kerala-monsoon-or-winter-guide'")
with open('journal-detail.html', 'w', encoding='utf-8') as f:
    f.write(jour_d)

print("Updated about, contact, details, and journal successfully!")
