import os
from generate_brochures_suite import make_cover, make_inclusions_page, make_itinerary_page

# 1. GOA FAMILY HERITAGE & WATERFALLS (5D/4N)
print("=== Generating Goa Family 5D/4N ===")
make_cover(
    "GOA", "GRAND FAMILY & HERITAGE HOLIDAY", "5 DAYS, 4 NIGHTS",
    "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=1200&q=80",
    [
        ("https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=400&q=80", "Dudhsagar Waterfalls"),
        ("https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=400&q=80", "Old Goa Churches"),
        ("https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=400&q=80", "Family Beach Resort"),
        ("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", "Mandovi River Cruise")
    ],
    "goa_family_5d4n_p1.png"
)
make_inclusions_page([
    ["Dedicated Private AC Innova / Crysta for 5 Days", "Airport/Station pickup & all family sightseeing"],
    ["4 Nights Luxury Family Beach Resort with Pool", "Spacious family suites with garden/pool view"],
    ["Daily Delicious Buffet Breakfasts", "Prepared fresh at luxury resort"],
    ["Dudhsagar Waterfalls 4x4 Jeep Safari", "Jungle safari through Mollem National Park"],
    ["Old Goa Heritage Churches Guided Tour", "Basilica of Bom Jesus & Se Cathedral"],
    ["Mandovi River Sunset Cultural Cruise", "Family-friendly Goan folk dance & music cruise"],
    ["24/7 Dedicated Telugu Customer Care Support", "Live Telugu concierge assistance throughout"]
], "goa_family_5d4n_p2.png")
make_itinerary_page(1, "Goa Arrival & Family Beach Resort", [
    "Warm greeting at Goa Airport / Madgaon Station & Cab pickup.",
    "Resort check-in, welcome drinks & pool relaxation.",
    "Evening family sunset walk on peaceful Candolim beach.",
    "Goan seafood buffet dinner at the resort restaurant."
], [
    ("https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=400&q=80", "Candolim Sands"),
    ("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80", "Resort Pool"),
    ("https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=400&q=80", "Family Sunset")
], "goa_family_5d4n_p3.png")
make_itinerary_page(2, "Dudhsagar Falls & Spice Plantation", [
    "Thrilling 4x4 open-jeep safari through jungle rivers.",
    "Marvel at roaring Dudhsagar Waterfalls & feed wild monkeys.",
    "Tour organic Goan spice farm with traditional buffet feast.",
    "Return to resort for evening tea & leisure."
], [
    ("https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=400&q=80", "Dudhsagar Falls"),
    ("https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=400&q=80", "Jungle Jeep"),
    ("https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=400&q=80", "Spice Plantation")
], "goa_family_5d4n_p4.png")
make_itinerary_page(3, "Old Goa UNESCO Churches & Cruise", [
    "Explore Basilica of Bom Jesus and sacred relics of St. Francis.",
    "Visit Asia's largest church — Se Cathedral and Church of St. Cajetan.",
    "Stroll through colorful Latin Quarter Fontainhas heritage homes.",
    "Evening luxury family cruise on Mandovi River with Goan dance."
], [
    ("https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=400&q=80", "Bom Jesus Basilica"),
    ("https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=400&q=80", "Fontainhas"),
    ("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", "Mandovi Cruise")
], "goa_family_5d4n_p5.png")
make_itinerary_page(4, "Fort Aguada & Coastal Fun", [
    "Morning panoramic views from 17th-century Fort Aguada.",
    "Visit Sinquerim beach and light family watersports.",
    "Afternoon leisure at Calangute market for souvenirs and snacks.",
    "Sunset coconut water & dinner on the beach."
], [
    ("https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&w=400&q=80", "Fort Aguada"),
    ("https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=400&q=80", "Calangute Coast"),
    ("https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80", "Beach Stroll")
], "goa_family_5d4n_p6.png")
make_itinerary_page(5, "Cashew Shopping & Departure", [
    "Morning buffet breakfast and swimming pool dip.",
    "Shop for premium Goan cashews, feni and handicrafts.",
    "Private cab drop at Goa Airport or Madgaon Station.",
    "Return home with unforgettable family smiles and photos."
], [
    ("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80", "Farewell Coast"),
    ("https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=400&q=80", "Golden Sands"),
    ("https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=400&q=80", "Happy Memories")
], "goa_family_5d4n_p7.png")

# 2. SOUTH GOA SERENITY (4D/3N)
print("=== Generating South Goa Serenity 4D/3N ===")
make_cover(
    "GOA", "SOUTH GOA TRANQUIL RETREAT", "4 DAYS, 3 NIGHTS",
    "https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1200&q=80",
    [
        ("https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&w=400&q=80", "Palolem Beach"),
        ("https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=400&q=80", "Dolphin Safari"),
        ("https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=400&q=80", "Cabo de Rama"),
        ("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80", "Agonda Serenity")
    ],
    "goa_south_4d3n_p1.png"
)
make_inclusions_page([
    ["Dedicated Private AC Cab for all 4 Days", "Airport/Station pickup & peaceful South Goa touring"],
    ["3 Nights Luxury Boutique Resort in South Goa", "Tranquil garden/sea-view cottage near Palolem"],
    ["Daily Fresh Buffet Breakfasts", "Served at resort beachfront restaurant"],
    ["Morning Dolphin Safari Boat Trip in Palolem", "Spot wild Indo-Pacific humpback dolphins"],
    ["Cabo de Rama Historic Cliff Excursion", "Dramatic fortress ruins overlooking turquoise sea"],
    ["Agonda & Butterfly Beach Hidden Coastlines", "Quiet, pristine, unspoiled sands"],
    ["24/7 Dedicated Telugu Customer Care Support", "Live Telugu concierge assistance throughout"]
], "goa_south_4d3n_p2.png")
make_itinerary_page(1, "Arrival & Palolem Crescent Sunset", [
    "Pickup from Goa Airport / Madgaon Station & drive South.",
    "Resort check-in nestled among towering coconut palms.",
    "Relax on the tranquil crescent curve of Palolem Beach.",
    "Peaceful candlelit dinner with gentle sound of waves."
], [
    ("https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=400&q=80", "Palolem Crescent"),
    ("https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&w=400&q=80", "Palm Shacks"),
    ("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80", "Sunset Glow")
], "goa_south_4d3n_p3.png")
make_itinerary_page(2, "Dolphin Safari & Agonda Beach Peace", [
    "Early morning boat ride to spot playful wild dolphins.",
    "Hidden Butterfly Beach secret cove exploration.",
    "Afternoon barefoot walk along quiet Agonda Beach.",
    "Sunset beach yoga or meditation with coconut drink."
], [
    ("https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=400&q=80", "Dolphin Boat"),
    ("https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=400&q=80", "Agonda Peace"),
    ("https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=400&q=80", "Cove Water")
], "goa_south_4d3n_p4.png")
make_itinerary_page(3, "Cabo de Rama Sea Cliffs & Colva", [
    "Scenic cliff drive to ancient Cabo de Rama Fort ruins.",
    "Spectacular 180-degree view of emerald Arabian Sea.",
    "Afternoon visit to historic Colva Beach & Our Lady of Mercy.",
    "Relaxing sunset dinner at a beach shack in Benaulim."
], [
    ("https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=400&q=80", "Cabo de Rama"),
    ("https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=400&q=80", "Emerald Bay"),
    ("https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=400&q=80", "Cliff Sunset")
], "goa_south_4d3n_p5.png")
make_itinerary_page(4, "Morning Beach Walk & Departure", [
    "Peaceful morning beach walk with singing birds.",
    "Hearty breakfast and checkout from boutique resort.",
    "Souvenir shopping in Margao market for Goan spices.",
    "Drop at Goa Airport / Madgaon Station with renewed soul."
], [
    ("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80", "Morning Sea"),
    ("https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=400&q=80", "Palolem Palms"),
    ("https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=400&q=80", "Farewell")
], "goa_south_4d3n_p6.png")

# 3. KERALA VARKALA CLIFF & BEACHES (6D/5N)
print("=== Generating Kerala Varkala 6D/5N ===")
make_cover(
    "KERALA", "VARKALA RED CLIFFS & BACKWATERS", "6 DAYS, 5 NIGHTS",
    "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
    [
        ("https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=400&q=80", "Munnar Hills"),
        ("https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80", "Alleppey Houseboat"),
        ("https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=400&q=80", "Varkala Cliff"),
        ("https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=400&q=80", "Papanasam Sunset")
    ],
    "kerala_varkala_6d5n_p1.png"
)
make_inclusions_page([
    ["Dedicated Private Vehicle for all 6 Days", "Cochin pickup to Trivandrum drop-off"],
    ["5 Nights Luxury Resort & Houseboat Stays", "2N Munnar, 1N Thekkady, 1N Alleppey, 1N Varkala Cliff"],
    ["All Meals on Alleppey Houseboat", "Authentic Kerala cuisine prepared on board"],
    ["Varkala North Cliff Sea-Facing Resort", "Overlooking dramatic red laterite sea cliffs"],
    ["5 Daily Fresh Buffet Breakfasts", "Served at premium hotels daily"],
    ["Munroe Island Canoe Backwater Tour", "Quiet canal ride through village mangroves"],
    ["24/7 Dedicated Telugu Customer Care Support", "Live Telugu concierge assistance throughout"]
], "kerala_varkala_6d5n_p2.png")
make_itinerary_page(1, "Cochin Arrival & Scenic Munnar Drive", [
    "Warm welcome at Cochin Airport / Railway Station.",
    "Road trip past Cheeyappara & Valara cascading waterfalls.",
    "Spice plantation viewpoint stop and hill air acclimatization.",
    "Check-in at Munnar hill resort with panoramic mountain view."
], [
    ("https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=400&q=80", "Waterfalls"),
    ("https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=400&q=80", "Munnar View"),
    ("https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=400&q=80", "Tea Slopes")
], "kerala_varkala_6d5n_p3.png")
make_itinerary_page(2, "Munnar Tea Valleys & Mattupetty Dam", [
    "Morning visit to Mattupetty Lake & Speedboat ride.",
    "Echo Point, Photo Point and Kundala Arch Dam lake.",
    "Tata Tea Museum and tea factory tasting experience.",
    "Overnight stay with cool mountain breeze in Munnar."
], [
    ("https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?auto=format&fit=crop&w=400&q=80", "Mattupetty"),
    ("https://images.unsplash.com/photo-1571687949921-1306bfb24b72?auto=format&fit=crop&w=400&q=80", "Echo Point"),
    ("https://images.unsplash.com/photo-1563784462386-044fd95e9852?auto=format&fit=crop&w=400&q=80", "Tea Gardens")
], "kerala_varkala_6d5n_p4.png")
make_itinerary_page(3, "Munnar to Thekkady: Spice Hills & Lake", [
    "Scenic drive through aromatic cardamom and pepper hills.",
    "Check-in at Thekkady & Periyar Lake boat safari.",
    "Spot wild elephants, sambar deer and aquatic birds.",
    "Evening Kathakali cultural show & elephant junction visit."
], [
    ("https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=400&q=80", "Periyar Boating"),
    ("https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=400&q=80", "Spice Hills"),
    ("https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=400&q=80", "Kathakali")
], "kerala_varkala_6d5n_p5.png")
make_itinerary_page(4, "Thekkady to Alleppey Backwater Houseboat", [
    "Descend to Alleppey, the heart of Kerala backwaters.",
    "Board private luxury houseboat with welcome drink & lunch.",
    "Glide past narrow canals, lotus blooms & coconut lagoons.",
    "Golden sunset over Vembanad Lake and overnight houseboat stay."
], [
    ("https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80", "Houseboat"),
    ("https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=400&q=80", "Canal Life"),
    ("https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=400&q=80", "Lagoon Sunset")
], "kerala_varkala_6d5n_p6.png")
make_itinerary_page(5, "Alleppey to Varkala Red Cliff Sunset", [
    "Breakfast on backwaters & drive to stunning Varkala Cliff.",
    "Check-in at cliff resort overlooking crashing Arabian waves.",
    "Stroll North Cliff cafes, Tibetan handicraft stalls & shacks.",
    "Watch epic crimson sunset from the high laterite cliff edge."
], [
    ("https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=400&q=80", "Varkala Cliff"),
    ("https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=400&q=80", "Papanasam Beach"),
    ("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80", "Cliff Cafes")
], "kerala_varkala_6d5n_p7.png")
make_itinerary_page(6, "Jatayu Earth's Center & Trivandrum Drop", [
    "Morning visit to sacred Janardhana Swami 2,000-year-old temple.",
    "Stop at Jatayu Earth's Center for colossal bird sculpture photo.",
    "Drive to Trivandrum, visit Sri Padmanabhaswamy Temple.",
    "Drop at Trivandrum Airport / Railway Station with rich memories."
], [
    ("https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=400&q=80", "Jatayu Center"),
    ("https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=80", "Temple"),
    ("https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?auto=format&fit=crop&w=400&q=80", "Farewell Coast")
], "kerala_varkala_6d5n_p8.png")

print("ALL ADDITIONAL BROCHURES GENERATED SUCCESSFULLY!")
