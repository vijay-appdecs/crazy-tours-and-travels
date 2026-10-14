import os
import sys
from generate_brochures_suite import make_cover, make_inclusions_page, make_itinerary_page

covers = [
    {
        "dest": "KERALA",
        "title": "TRIVANDRUM & KOVALAM HONEYMOON",
        "duration": "5 DAYS, 4 NIGHTS",
        "bg": "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=80",
        "polaroids": [
            ("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80", "Kovalam Beach"),
            ("https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=80", "Padmanabhaswamy"),
            ("https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80", "Poovar Backwater"),
            ("https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=400&q=80", "Varkala Cliff")
        ],
        "out": "kerala_trivandrum_honeymoon_5d4n_p1.png"
    },
    {
        "dest": "KERALA",
        "title": "TRIVANDRUM BACHELOR EXPEDITION",
        "duration": "5 DAYS, 4 NIGHTS",
        "bg": "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1200&q=80",
        "polaroids": [
            ("https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80", "Kovalam Waves"),
            ("https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=400&q=80", "Munnar Off-Road"),
            ("https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80", "Alleppey Cruise"),
            ("https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=400&q=80", "Varkala Sunset")
        ],
        "out": "kerala_trivandrum_bachelor_5d4n_p1.png"
    },
    {
        "dest": "GOA",
        "title": "GOA GETAWAY & SUNSET CRUISE",
        "duration": "4 DAYS, 3 NIGHTS",
        "bg": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
        "polaroids": [
            ("https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=400&q=80", "Baga Coastline"),
            ("https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=80", "Water Sports"),
            ("https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=400&q=80", "Fontainhas Latin"),
            ("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", "Mandovi Cruise")
        ],
        "out": "goa_getaway_4d3n_p1.png"
    },
    {
        "dest": "MANALI",
        "title": "MANALI FAMILY SNOW VACATION",
        "duration": "5 DAYS, 4 NIGHTS",
        "bg": "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=1200&q=80",
        "polaroids": [
            ("https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=400&q=80", "Solang Valley Snow"),
            ("https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=400&q=80", "Hadimba Temple"),
            ("https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=400&q=80", "Beas Riverside"),
            ("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", "Pine Forest Trails")
        ],
        "out": "manali_family_snow_5d4n_p1.png"
    },
    {
        "dest": "MANALI",
        "title": "MANALI ADVENTURE & ROHTANG PASS",
        "duration": "5 DAYS, 4 NIGHTS",
        "bg": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
        "polaroids": [
            ("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80", "Rohtang Glacier"),
            ("https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=400&q=80", "Solang Paragliding"),
            ("https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=400&q=80", "Jogini Waterfall"),
            ("https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=400&q=80", "Atal Tunnel Drive")
        ],
        "out": "manali_adventure_escape_5d4n_p1.png"
    },
    {
        "dest": "MANALI",
        "title": "MANALI ROMANTIC ALPINE RETREAT",
        "duration": "5 DAYS, 4 NIGHTS",
        "bg": "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=1200&q=80",
        "polaroids": [
            ("https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=400&q=80", "Cedar Chalets"),
            ("https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=400&q=80", "Misty Solang View"),
            ("https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=400&q=80", "Beas Sunset Walk"),
            ("https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=400&q=80", "Apple Orchards")
        ],
        "out": "manali_romantic_alpine_5d4n_p1.png"
    },
    {
        "dest": "MANALI",
        "title": "SOLANG PARAGLIDING & JOGINI TREK",
        "duration": "4 DAYS, 3 NIGHTS",
        "bg": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1200&q=80",
        "polaroids": [
            ("https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=400&q=80", "Tandem Flight"),
            ("https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=400&q=80", "Jogini Cascade"),
            ("https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=400&q=80", "Solang Valley"),
            ("https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=400&q=80", "Old Manali Trail")
        ],
        "out": "manali_solang_paragliding_4d3n_p1.png"
    },
    {
        "dest": "MANALI",
        "title": "ROHTANG SNOW SAFARI & GLACIERS",
        "duration": "6 DAYS, 5 NIGHTS",
        "bg": "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
        "polaroids": [
            ("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80", "Rohtang Pass Summit"),
            ("https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?auto=format&fit=crop&w=400&q=80", "Glacier Trails"),
            ("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", "Atal North Portal"),
            ("https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=400&q=80", "Sissu Waterfalls")
        ],
        "out": "manali_rohtang_snow_safari_6d5n_p1.png"
    },
    {
        "dest": "KASOL & MANALI",
        "title": "TWIN VALLEY HONEYMOON SPECIAL",
        "duration": "4 DAYS, 3 NIGHTS",
        "bg": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
        "polaroids": [
            ("https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=400&q=80", "Parvati River Kasol"),
            ("https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=400&q=80", "Hadimba Temple"),
            ("https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80", "Manikaran Springs"),
            ("https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=400&q=80", "Solang Sunset")
        ],
        "out": "kasol_manali_honeymoon_4d3n_p1.png"
    },
    {
        "dest": "MANALI",
        "title": "HAMPTA PASS & CHANDRATAL TREK",
        "duration": "5 DAYS, 4 NIGHTS",
        "bg": "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1200&q=80",
        "polaroids": [
            ("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80", "Hampta Pass Summit"),
            ("https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80", "Alpine Meadows"),
            ("https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", "Chandratal Moon Lake"),
            ("https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=400&q=80", "High Camp Bonfire")
        ],
        "out": "manali_hampta_pass_trek_5d4n_p1.png"
    },
    {
        "dest": "JAPAN",
        "title": "ANCIENT TEMPLES & ALPINE TRAILS",
        "duration": "8 DAYS, 7 NIGHTS",
        "bg": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
        "polaroids": [
            ("https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80", "Tokyo Skyline"),
            ("https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=80", "Fushimi Inari Torii"),
            ("https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=400&q=80", "Kyoto Bamboo Grove"),
            ("https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=400&q=80", "Mount Fuji Views")
        ],
        "out": "japan_autumn_8d_p1.png"
    }
]

for c in covers:
    print(f"Generating cover: {c['out']} ({c['title']})...")
    make_cover(c['dest'], c['title'], c['duration'], c['bg'], c['polaroids'], c['out'])

print("All custom covers generated successfully!")
