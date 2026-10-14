import os
import sys
from generate_brochures_suite import make_cover, make_inclusions_page, make_itinerary_page

# 1. GOA BACHELORS (4D/3N)
print("=== Generating Goa Bachelors 4D/3N ===")
make_cover(
    "GOA", "BACHELORS PARTY & BEACHES", "4 DAYS, 3 NIGHTS",
    "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
    [
        ("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80", "Baga Beach Bash"),
        ("https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80", "Watersports Arena"),
        ("https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=400&q=80", "Calangute Waves"),
        ("https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=400&q=80", "Anjuna Sunset")
    ],
    "goa_bachelors_4d3n_p1.png"
)
make_inclusions_page([
    ["Dedicated Private Vehicle for all 4 Days", "Airport/Madgaon Transfers & Sightseeing"],
    ["3 Nights Beach Resort Stay with Pool", "North Goa Prime Party Location"],
    ["Daily Fresh Buffet Breakfasts", "Served hot every morning"],
    ["Calangute Watersports Combo (5 Rides)", "Parasailing, Jet Ski, Banana, Bumper, Speedboat"],
    ["Mandovi River Sunset Luxury Party Cruise", "Live DJ, Goan folk dance & sightseeing"],
    ["Club VIP Entry Passes & Beach Shack Voucher", "Prime nightlife experiences"],
    ["24/7 Dedicated Telugu Customer Care Support", "Live concierge assistance throughout"]
], "goa_bachelors_4d3n_p2.png")
make_itinerary_page(1, "Goa Arrival & Baga Beach Shacks", [
    "Pickup from Goa Airport / Madgaon Station & Resort check-in.",
    "Afternoon pool party and relaxation at the resort.",
    "Evening at famous Baga Beach shacks with sunset music.",
    "Night party crawl at Tito's Lane and Cavala."
], [
    ("https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=400&q=80", "Baga Coast"),
    ("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80", "Beach Shacks"),
    ("https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=400&q=80", "Sunset Vibes")
], "goa_bachelors_4d3n_p3.png")
make_itinerary_page(2, "Watersports Combo & Anjuna Cliffs", [
    "Full adrenaline morning: Jet ski, Parasailing & Banana ride.",
    "Lunch at German Bakery / Curlies beachfront shack.",
    "Afternoon at Vagator Beach & dramatic Chapora Fort cliffs.",
    "Night electronic beats and dance at iconic hillside clubs."
], [
    ("https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80", "Jet Ski Thrill"),
    ("https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=400&q=80", "Vagator Sea"),
    ("https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=400&q=80", "Cliff Sunset")
], "goa_bachelors_4d3n_p4.png")
make_itinerary_page(3, "Dudhsagar Jeep Safari & Sunset Cruise", [
    "Early morning open-jeep safari through Mollem National Park.",
    "Swim at the roaring base of Dudhsagar 4-tiered waterfalls.",
    "Traditional Goan spice plantation buffet lunch.",
    "Evening luxury Mandovi River Cruise with music & dancing."
], [
    ("https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=400&q=80", "Dudhsagar Falls"),
    ("https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=400&q=80", "Jungle Safari"),
    ("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", "River Cruise")
], "goa_bachelors_4d3n_p5.png")
make_itinerary_page(4, "Souvenir Markets & Airport Drop", [
    "Morning beach stroll and hearty breakfast at the resort.",
    "Visit Panaji Latin Quarter Fontainhas for group photos.",
    "Cashew, spice and Feni souvenir shopping in Mapusa market.",
    "Cab transfer to Airport / Railway station with wild memories."
], [
    ("https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=400&q=80", "Fontainhas"),
    ("https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=400&q=80", "Old Goa"),
    ("https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=400&q=80", "Departure")
], "goa_bachelors_4d3n_p6.png")

# 2. GOA HONEYMOON (4D/3N)
print("=== Generating Goa Honeymoon 4D/3N ===")
make_cover(
    "GOA", "ROMANTIC HONEYMOON ESCAPE", "4 DAYS, 3 NIGHTS",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    [
        ("https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=400&q=80", "Candolim Sands"),
        ("https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&w=400&q=80", "Private Catamaran"),
        ("https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=400&q=80", "Latin Quarter"),
        ("https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=400&q=80", "Candlelit Sunset")
    ],
    "goa_honeymoon_4d3n_p1.png"
)
make_inclusions_page([
    ["Dedicated Private AC Sedan for all 4 Days", "Airport/Station transfers & exclusive sightseeing"],
    ["3 Nights 4-Star Beachfront Luxury Resort", "Private balcony room with garden/sea view"],
    ["Daily Gourmet Buffet Breakfasts", "Prepared fresh at luxury resort"],
    ["Romantic Candlelit Dinner on Beachfront", "Custom 3-course dinner with wine/mocktail"],
    ["Special Honeymoon Floral Bed & Cake", "Celebration arrangement on arrival night"],
    ["Private Mandovi River Sunset Catamaran Ride", "Champagne sunset cruise for the couple"],
    ["24/7 Dedicated Telugu Customer Care Support", "Live Telugu concierge assistance throughout"]
], "goa_honeymoon_4d3n_p2.png")
make_itinerary_page(1, "Arrival & Sunset Beach Walk", [
    "Airport pickup with floral garland & private cab drive.",
    "Resort check-in with honeymoon room decoration & cake.",
    "Relaxing sunset walk along secluded Candolim beach sands.",
    "Romantic beachfront welcome dinner under the stars."
], [
    ("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80", "Resort Beach"),
    ("https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=400&q=80", "Candolim Sea"),
    ("https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=400&q=80", "Candlelight")
], "goa_honeymoon_4d3n_p3.png")
make_itinerary_page(2, "Fort Aguada & Private Sunset Cruise", [
    "Morning visit to historic Fort Aguada & sea lighthouse.",
    "Leisurely lunch at a seaside European cafe in Sinquerim.",
    "Board private sunset catamaran cruise along Mandovi estuary.",
    "Intimate evening by the resort pool with gentle ocean breeze."
], [
    ("https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&w=400&q=80", "Fort Lighthouse"),
    ("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", "Sunset Catamaran"),
    ("https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=400&q=80", "Golden Sea")
], "goa_honeymoon_4d3n_p4.png")
make_itinerary_page(3, "Fontainhas Latin Heritage & Beach Dinner", [
    "Photogenic walking tour in Fontainhas colorful Portuguese villas.",
    "Visit heritage cafes and handmade azulejos tile studios.",
    "Afternoon drive to tranquil Miramar & Dona Paula viewpoint.",
    "Grand candlelit beach dinner with waves lapping at your feet."
], [
    ("https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=400&q=80", "Fontainhas"),
    ("https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=400&q=80", "Portuguese Villas"),
    ("https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=400&q=80", "Beach Romance")
], "goa_honeymoon_4d3n_p5.png")
make_itinerary_page(4, "Morning Dip & Airport Departure", [
    "Sunrise beach stroll and breakfast overlooking the ocean.",
    "Relaxing couple spa session or swimming pool swim.",
    "Checkout and souvenir shopping for Goan sweets & spices.",
    "Private cab drop at Goa Airport with cherished memories."
], [
    ("https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=400&q=80", "Sunrise Peace"),
    ("https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=400&q=80", "Ocean Farewell"),
    ("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80", "Memories")
], "goa_honeymoon_4d3n_p6.png")

# 3. KERALA BACHELOR GROUP (5D/4N)
print("=== Generating Kerala Bachelor 5D/4N ===")
make_cover(
    "KERALA", "BACHELOR GROUP EXPEDITION", "5 DAYS, 4 NIGHTS",
    "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    [
        ("https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=400&q=80", "Cheeyappara Falls"),
        ("https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=400&q=80", "Kolukkumalai Offroad"),
        ("https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=400&q=80", "Periyar Rafting"),
        ("https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80", "Alleppey Party Boat")
    ],
    "kerala_bachelor_5d4n_p1.png"
)
make_inclusions_page([
    ["Dedicated Private Tempo Traveller / SUV for 5 Days", "Airport/Station pickup & full group sightseeing"],
    ["4 Nights Premium Group Resort Stays", "2N Munnar, 1N Thekkady, 1N Alleppey Houseboat"],
    ["All Meals on Alleppey Houseboat", "Authentic Kerala feast, evening snacks & dinner"],
    ["4 Daily Fresh Buffet Breakfasts", "Served every morning at hotels"],
    ["4x4 Mountain Jeep Safari to Kolukkumalai", "Off-road mountain trek to world's highest tea estate"],
    ["Periyar Forest Bamboo Rafting & Trek", "Guided adventure safari inside tiger reserve"],
    ["24/7 Dedicated Telugu Customer Care Concierge", "Live phone assistance throughout"]
], "kerala_bachelor_5d4n_p2.png")
make_itinerary_page(1, "Cochin to Munnar & Waterfall Trek", [
    "Pickup from Cochin Airport / Ernakulam Railway Station.",
    "Road trip through Cheeyappara & Valara roaring waterfalls.",
    "Off-road spice trail stop and zipline adventure.",
    "Munnar hill resort check-in & evening campfire with music."
], [
    ("https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=400&q=80", "Cheeyappara"),
    ("https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=400&q=80", "Munnar Roads"),
    ("https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=400&q=80", "Spice Valley")
], "kerala_bachelor_5d4n_p3.png")
make_itinerary_page(2, "Kolukkumalai 4x4 Jeep Sunrise Safari", [
    "Early 4:30 AM 4x4 open jeep ride to Kolukkumalai (7,130 ft).",
    "Watch epic sea of clouds sunrise above Tamil Nadu border.",
    "Mattupetty Dam speedboat sprint & Echo Point shouting fun.",
    "Return to Munnar town for Kerala chicken fry & parotta dinner."
], [
    ("https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=400&q=80", "Kolukkumalai"),
    ("https://images.unsplash.com/photo-1571687949921-1306bfb24b72?auto=format&fit=crop&w=400&q=80", "Sea of Clouds"),
    ("https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?auto=format&fit=crop&w=400&q=80", "Tea Slopes")
], "kerala_bachelor_5d4n_p4.png")
make_itinerary_page(3, "Thekkady Jungle Trek & Periyar Raft", [
    "Drive down the Western Ghats to Thekkady spice hills.",
    "Bamboo rafting and forest trek inside Periyar Tiger Reserve.",
    "Spot herds of wild elephants and giant squirrels.",
    "Experience thrilling evening Kalaripayattu martial arts duel."
], [
    ("https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=400&q=80", "Periyar Elephants"),
    ("https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=400&q=80", "Jungle Trail"),
    ("https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=400&q=80", "Martial Arts")
], "kerala_bachelor_5d4n_p5.png")
make_itinerary_page(4, "Alleppey Houseboat Night Cruise", [
    "Arrive at Alleppey and board private group houseboat.",
    "Cruise through Vembanad Lake with hot Karimeen fish fry.",
    "Sunset kayak race through narrow palm-shaded village canals.",
    "Overnight stay on houseboat with music, games and dinner."
], [
    ("https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80", "Houseboat Party"),
    ("https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=400&q=80", "Vembanad Lake"),
    ("https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=400&q=80", "Canal Kayak")
], "kerala_bachelor_5d4n_p6.png")
make_itinerary_page(5, "Fort Cochin Beach & Return Journey", [
    "Hearty breakfast on the backwaters and checkout.",
    "Drive to Fort Kochi, visit Chinese fishing nets & Mattancherry.",
    "Seafood lunch and shopping for authentic Kerala banana chips.",
    "Drop at Cochin Airport / Railway Station with unforgettable memories."
], [
    ("https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=400&q=80", "Chinese Nets"),
    ("https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=400&q=80", "Jew Town"),
    ("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80", "Farewell")
], "kerala_bachelor_5d4n_p7.png")

# 4. KERALA JATAYU & TRIVANDRUM (6D/5N)
print("=== Generating Kerala Jatayu 6D/5N ===")
make_cover(
    "KERALA", "JATAYU EARTH & KOVALAM EXPEDITION", "6 DAYS, 5 NIGHTS",
    "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80",
    [
        ("https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=400&q=80", "Munnar Hills"),
        ("https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80", "Alleppey Houseboat"),
        ("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80", "Kovalam Beach"),
        ("https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=400&q=80", "Poovar Estuary")
    ],
    "kerala_jatayu_6d5n_p1.png"
)
make_inclusions_page([
    ["Dedicated Private Vehicle for all 6 Days", "Cochin pickup to Trivandrum drop-off"],
    ["5 Nights Luxury Hotel & Houseboat Stays", "2N Munnar, 1N Thekkady, 1N Alleppey, 1N Kovalam"],
    ["Jatayu Earth's Center Cable Car & Entry Tickets", "World's largest bird sculpture at Chadayamangalam"],
    ["All Meals on Alleppey Houseboat", "Authentic Kerala cuisine prepared on board"],
    ["5 Daily Fresh Buffet Breakfasts", "Served at premium hotels daily"],
    ["Poovar Island Golden Beach Boat Cruise", "Mangrove estuary boat ride to the sea"],
    ["24/7 Dedicated Telugu Customer Care Support", "Live Telugu concierge assistance throughout"]
], "kerala_jatayu_6d5n_p2.png")
make_itinerary_page(1, "Cochin Arrival & Munnar Mountain Drive", [
    "Warm welcome at Cochin Airport / Railway Station.",
    "Scenic journey past Cheeyappara & Valara cascading waterfalls.",
    "Tea plantation viewpoint and spice garden guided stroll.",
    "Munnar hill resort check-in with cool mountain weather."
], [
    ("https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=400&q=80", "Waterfalls"),
    ("https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=400&q=80", "Munnar View"),
    ("https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=400&q=80", "Tea Hills")
], "kerala_jatayu_6d5n_p3.png")
make_itinerary_page(2, "Munnar Tea Estates & Mattupetty Dam", [
    "Visit emerald Mattupetty Dam lake with speed boating option.",
    "Echo Point, Photo Point and Kundala Arch Dam lake.",
    "Tata Tea Museum and tea factory tasting experience.",
    "Evening leisure in Munnar town and overnight at resort."
], [
    ("https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?auto=format&fit=crop&w=400&q=80", "Mattupetty"),
    ("https://images.unsplash.com/photo-1571687949921-1306bfb24b72?auto=format&fit=crop&w=400&q=80", "Echo Point"),
    ("https://images.unsplash.com/photo-1563784462386-044fd95e9852?auto=format&fit=crop&w=400&q=80", "Tea Estate")
], "kerala_jatayu_6d5n_p4.png")
make_itinerary_page(3, "Munnar to Thekkady: Spice Hills & Lake", [
    "Scenic drive through aromatic cardamom and pepper hills.",
    "Check-in at Thekkady & Periyar Lake boat safari.",
    "Spot wild elephants, sambar deer and aquatic birds.",
    "Evening Kathakali cultural show & elephant junction visit."
], [
    ("https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=400&q=80", "Periyar Boating"),
    ("https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=400&q=80", "Spice Trails"),
    ("https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=400&q=80", "Kathakali")
], "kerala_jatayu_6d5n_p5.png")
make_itinerary_page(4, "Thekkady to Alleppey Backwater Houseboat", [
    "Descend to Alleppey, the heart of Kerala backwaters.",
    "Board private luxury houseboat with welcome drink & lunch.",
    "Glide past narrow canals, lotus blooms & coconut lagoons.",
    "Golden sunset over Vembanad Lake and overnight houseboat stay."
], [
    ("https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80", "Houseboat"),
    ("https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=400&q=80", "Canal Life"),
    ("https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=400&q=80", "Lagoon Sunset")
], "kerala_jatayu_6d5n_p6.png")
make_itinerary_page(5, "Jatayu Earth's Center & Kovalam Beach", [
    "Cable car ride to the world's largest bird sculpture (Jatayu).",
    "Explore the epic 65-foot hilltop sculpture & mythic cave.",
    "Drive to Kovalam and check in at beach resort.",
    "Climb Kovalam Lighthouse & enjoy golden crescent beach sunset."
], [
    ("https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=400&q=80", "Jatayu Sculpture"),
    ("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80", "Kovalam Beach"),
    ("https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=400&q=80", "Lighthouse View")
], "kerala_jatayu_6d5n_p7.png")
make_itinerary_page(6, "Poovar Island Estuary & Trivandrum Drop", [
    "Morning boat safari through Poovar mangroves to golden sand beach.",
    "Witness the unique confluence where river, backwater & sea meet.",
    "Visit Sri Padmanabhaswamy Temple & Napier Museum in Trivandrum.",
    "Cab transfer to Trivandrum Airport / Railway Station with rich memories."
], [
    ("https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&w=400&q=80", "Poovar Estuary"),
    ("https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=80", "Temple Heritage"),
    ("https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=400&q=80", "Trivandrum Coast")
], "kerala_jatayu_6d5n_p8.png")

# 5. LADAKH HIGH PASS ODYSSEY (7D/6N)
print("=== Generating Ladakh High Pass 7D/6N ===")
make_cover(
    "LADAKH", "HIGH PASS ODYSSEY: NUBRA & PANGONG", "7 DAYS, 6 NIGHTS",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    [
        ("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80", "Khardung La Pass"),
        ("https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80", "Nubra Sand Dunes"),
        ("https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=400&q=80", "Pangong Tso Blue"),
        ("https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?auto=format&fit=crop&w=400&q=80", "Shanti Stupa")
    ],
    "ladakh_highpass_7d6n_p1.png"
)
make_inclusions_page([
    ["Dedicated Private 4x4 Scorpio / Innova for 7 Days", "All inner-line permits, wildlife fees & oxygen cylinder"],
    ["6 Nights Boutique Hotels & Luxury Swiss Camps", "3N Leh, 1N Nubra Deluxe Camp, 1N Pangong Lake Camp, 1N Leh"],
    ["6 Daily Breakfasts & 6 Dinners Included", "Warm Himalayan meals prepared at hotels & camps"],
    ["Double-Humped Bactrian Camel Safari Voucher", "Ride across cold desert sand dunes at Hunder"],
    ["Pangong Tso Sunrise & Stargazing Experience", "High altitude crystal blue lake expedition"],
    ["Inner Line Permits for Nubra, Pangong & Chang La", "All government paperwork fully managed"],
    ["24/7 Dedicated Telugu Customer Care Support", "Live Telugu concierge assistance throughout"]
], "ladakh_highpass_7d6n_p2.png")
make_itinerary_page(1, "Leh Airport Arrival & Acclimatization", [
    "Fly into Kushok Bakula Rimpochee Airport (11,562 ft).",
    "Hotel check-in & mandatory complete rest to acclimatize.",
    "Gentle evening walk to Shanti Stupa for sunset panoramic views.",
    "Traditional Ladakhi welcome dinner and early rest."
], [
    ("https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?auto=format&fit=crop&w=400&q=80", "Shanti Stupa"),
    ("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", "Leh Valley"),
    ("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&q=80", "Himalayan Sky")
], "ladakh_highpass_7d6n_p3.png")
make_itinerary_page(2, "Sham Valley: Magnetic Hill & Sangam", [
    "Witness the optical wonder of Magnetic Hill defying gravity.",
    "Confluence of Indus and Zanskar rivers (Sangam viewpoint).",
    "Visit historic Gurudwara Pathar Sahib & Hall of Fame Museum.",
    "Return to Leh bazaar for warm seabuckthorn tea & dinner."
], [
    ("https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=400&q=80", "Sangam Waters"),
    ("https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=400&q=80", "Zanskar Canyon"),
    ("https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=400&q=80", "Mountain Pass")
], "ladakh_highpass_7d6n_p4.png")
make_itinerary_page(3, "Khardung La Pass to Nubra Valley", [
    "Drive over legendary Khardung La Pass (17,582 ft) in the snow.",
    "Descend into Nubra Valley, the Valley of Flowers.",
    "Visit Diskit Monastery with colossal 106-ft Maitreya Buddha.",
    "Hunder sand dunes camel safari & overnight in Swiss tents."
], [
    ("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80", "Khardung La"),
    ("https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80", "Hunder Dunes"),
    ("https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=400&q=80", "Nubra Peaks")
], "ladakh_highpass_7d6n_p5.png")
make_itinerary_page(4, "Nubra to Pangong Tso via Shyok River", [
    "Off-road riverbed drive along the turquoise Shyok River.",
    "First breathtaking sight of Pangong Lake changing shades of blue.",
    "Walk along the iconic 3 Idiots point on the shoreline.",
    "Stargazing under crystal clear Milky Way at luxury lake camp."
], [
    ("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", "Pangong Waters"),
    ("https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=400&q=80", "Lake Tents"),
    ("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&q=80", "Starry Sky")
], "ladakh_highpass_7d6n_p6.png")
make_itinerary_page(5, "Pangong Sunrise & Chang La to Leh", [
    "Mesmerizing early sunrise over the azure waters of Pangong.",
    "Cross snow-covered Chang La Pass (17,590 ft).",
    "Visit Thiksey Monastery (mini Potala Palace) on return.",
    "Evening at leisure in Leh town for Tibetan silver shopping."
], [
    ("https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=400&q=80", "Sunrise Glow"),
    ("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80", "Chang La"),
    ("https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?auto=format&fit=crop&w=400&q=80", "Thiksey Monastery")
], "ladakh_highpass_7d6n_p7.png")
make_itinerary_page(6, "Leh Palace, Shey & Local Crafts", [
    "Morning tour of 9-storey Leh Palace overlooking the town.",
    "Visit Shey Palace and holy Sindhu Darshan ghat.",
    "Afternoon at Leh Main Bazaar for apricots, Pashmina & dry fruits.",
    "Farewell Ladakhi dinner celebration at the hotel."
], [
    ("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", "Leh Palace"),
    ("https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=400&q=80", "Shey Valley"),
    ("https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80", "Leh Bazaar")
], "ladakh_highpass_7d6n_p8.png")
make_itinerary_page(7, "Leh Airport Farewell", [
    "Early morning breakfast with crisp mountain air.",
    "Private cab drop at Leh Kushok Bakula Rimpochee Airport.",
    "Scenic aerial flight over snow-capped Himalayan peaks.",
    "Carry home lifelong memories of the Land of High Passes."
], [
    ("https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?auto=format&fit=crop&w=400&q=80", "Himalayas"),
    ("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80", "Aerial Peaks"),
    ("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", "Farewell Leh")
], "ladakh_highpass_7d6n_p9.png")

print("ALL NEW BROCHURES GENERATED SUCCESSFULLY!")
