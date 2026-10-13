/**
 * CRAZY TOURS AND TRAVELS — MASTER DATA MODEL
 */

const WAYFARE_DATA = {
  "brand": {
    "name": "Crazy Tours and Travels",
    "shortName": "Crazy Tours",
    "tagline": "Travel Beyond Ordinary \u2014 Luxury & Experiential Journeys",
    "logoIcon": "assets/images/logo-icon.png",
    "logoFull": "assets/images/logo.png",
    "email": "crazytraveller11@gmail.com",
    "phone": "+91 88672 29998",
    "phoneDisplay": "+91 88672 29998 | +91 88672 39998",
    "hours": "Monday to Sunday, 24/7 Telugu & English Travel Desk",
    "office": "Begumpet & Jubilee Hills, Hyderabad, Telangana, India",
    "social": {
      "instagram": "https://instagram.com",
      "youtube": "https://youtube.com"
    },
    "stats": {
      "since": "2015",
      "maxTravelers": "12 max",
      "localGuides": "100%",
      "countries": "5 destinations",
      "avgGroupSize": "8",
      "support": "24/7 Telugu Concierge",
      "rating": "4.9",
      "reviewCount": "2,480"
    },
    "phone1": "8867229998",
    "phone2": "8867239998"
  },
  "travelStyles": [
    {
      "id": "honeymoon",
      "slug": "honeymoon",
      "number": "01",
      "name": "Honeymoon & Romance",
      "tagline": "Candlelit houseboats, flower bed decor and misty tea hills",
      "description": "Handcrafted escapes for newlyweds. Private AC cab, handpicked luxury resorts, candlelit dinners, and dedicated concierge care.",
      "image": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "adventure",
      "slug": "adventure",
      "number": "02",
      "name": "Adventure & Snow",
      "tagline": "Solang paragliding, Rohtang snow passes and river rafting",
      "description": "Thrill-seeking expeditions across Himalayan mountain passes, glacial valleys, and rushing white water rapids.",
      "image": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "beach-islands",
      "slug": "beach-islands",
      "number": "03",
      "name": "Beach and Coastal",
      "tagline": "Golden sands, private catamarans and sunset clifftops",
      "description": "Sun-drenched coastal getaways in Goa, Varkala, and the Andaman Islands with secluded coves and oceanfront stays.",
      "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "culture",
      "slug": "culture",
      "number": "04",
      "name": "Heritage & Living Culture",
      "tagline": "Royal palaces, spice gardens and historic temples",
      "description": "Deep cultural immersion in the ancient kingdoms of Rajasthan, Kerala's Kathakali art, and Mughal architecture in Kashmir.",
      "image": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80"
    },
    {
      "id": "group",
      "slug": "group",
      "number": "05",
      "name": "Bachelors & Friends Group",
      "tagline": "Volvo expeditions, watersports, and late nights under stars",
      "description": "Action-packed group itineraries with luxury Volvo transfers, DJ campfire nights, scuba diving, and group villas.",
      "image": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
    }
  ],
  "destinations": [
    {
      "id": "kashmir",
      "slug": "kashmir",
      "name": "Kashmir",
      "region": "Himalayas, India",
      "tagline": "Dal Lake houseboats, snow valleys & Gondola heights",
      "bestTime": "March to October (Summer & Autumn), Dec to Feb (Snow)",
      "intro": "Paradise on Earth. Glide across tranquil Dal Lake on private wooden Shikaras, sleep in carved cedar houseboats, take the highest cable car in Asia at Gulmarg, and walk the pine valleys of Pahalgam with our local Kashmiri leaders.",
      "primaryPhoto": "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
      "secondaryPhoto": "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80",
      "overview": "Kashmir captivates travelers with alpine majesty and timeless warmth. We partner with certified heritage houseboats on Nigeen and Dal Lake, arrange direct phase 1 & 2 Gondola passes in Gulmarg, and provide heated private Scorpio/Innova vehicles throughout.",
      "highlights": [
        "Private Shikara sunset cruise along the floating vegetable markets",
        "Gulmarg Gondola cable car ride to Apharwat Peak at 13,780 feet",
        "Pahalgam Betaab Valley and Aru Valley pony trails amidst deodar forests"
      ]
    },
    {
      "id": "kerala",
      "slug": "kerala",
      "name": "Kerala",
      "region": "South India",
      "tagline": "Mist-clad tea hills, spice estates & tranquil backwaters",
      "bestTime": "September to March (Pleasant), June to Aug (Ayurveda Monsoon)",
      "intro": "God's Own Country. From the emerald rolling tea carpets of Munnar to Periyar elephant sanctuaries in Thekkady and private luxury houseboats in Alleppey, our Kerala itineraries deliver unhurried luxury with dedicated 24/7 Telugu concierge care.",
      "primaryPhoto": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
      "secondaryPhoto": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
      "overview": "Experience serene waterways, aromatic spice plantations, and fresh coastal seafood. Each departure includes your private chauffeur-driven AC cab for all days, verified 4-star hotel stays with daily breakfast, and customized couple or family privacy.",
      "highlights": [
        "Cruising serene palm-fringed canals in an exclusive traditional Kettuvallam houseboat",
        "Cheeyappara waterfalls and tea factory masterclass in Munnar",
        "Periyar National Park boating and spice garden botanical walks in Thekkady"
      ]
    },
    {
      "id": "manali",
      "slug": "manali",
      "name": "Kullu-Manali",
      "region": "Himachal Pradesh, India",
      "tagline": "Alpine snow passes, Solang adventure & pine trails",
      "bestTime": "Year-round: March to June (Pleasant), Dec to Feb (Snow)",
      "intro": "High-altitude Himalayan playground. Traverse the engineering wonder of the Atal Tunnel to Sissu, play in snow at Rohtang Pass, paraglide above Solang Valley, and unwind in historic Old Manali cafes along the Beas River.",
      "primaryPhoto": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
      "secondaryPhoto": "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=1200&q=80",
      "overview": "Nestled between deodar forests and snow-capped peaks, Kullu-Manali is the ultimate mountain destination. We provide luxury semi-sleeper AC Volvo transfers from Delhi, personal hill taxis for all sightseeing, and handpicked boutique riverside stays.",
      "highlights": [
        "Snow games, skiing and paragliding across Solang Valley",
        "Scenic drive through the Atal Tunnel into Lahaul's mountain desert",
        "White water rafting on the Beas River and Manikaran natural hot springs"
      ]
    },
    {
      "id": "goa",
      "slug": "goa",
      "name": "Goa",
      "region": "Coastal India",
      "tagline": "Golden sands, historic Portuguese quarters & sunset cruises",
      "bestTime": "October to April",
      "intro": "The sun, sea, and soul of the Konkan coast. From vibrant North Goa beach shacks and adrenaline-packed watersports to peaceful South Goa luxury resorts, spice farms, and Dudhsagar waterfall treks.",
      "primaryPhoto": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
      "secondaryPhoto": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      "overview": "Whether you are planning a bachelors party weekend, a romantic honeymoon resort retreat, or a family heritage escape, Goa offers the perfect tropical rhythm with personal cab convenience.",
      "highlights": [
        "Island catamaran trip with scuba diving and parasailing",
        "Mandovi river sunset cruise with Goan folk music and DJ deck",
        "Heritage walking tour through the colorful Latin Quarter of Fontainhas"
      ]
    },
    {
      "id": "ladakh",
      "slug": "ladakh",
      "name": "Ladakh",
      "region": "Trans-Himalayas",
      "tagline": "High mountain passes, turquoise lakes & Buddhist monasteries",
      "bestTime": "May to September",
      "intro": "The Land of High Passes. Cross Khardung La at 17,582 feet, ride double-humped camels through the white sand dunes of Nubra Valley, and witness the shifting sapphire blues of Pangong Tso.",
      "primaryPhoto": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "secondaryPhoto": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      "overview": "An awe-inspiring high-altitude desert where ancient Tibetan monasteries perch on barren cliffs and crystal lakes reflect snow peaks. Expert oxygen-assisted logistics provided.",
      "highlights": [
        "Camping in luxury yurts beside the changeless waters of Pangong Tso",
        "Bactrian camel ride through the cold desert dunes of Hunder",
        "Morning prayer chant ceremonies at Thiksey and Hemis monasteries"
      ]
    },
    {
      "id": "japan",
      "slug": "japan",
      "name": "Japan",
      "region": "East Asia",
      "tagline": "Temples, trains and mountain post towns",
      "bestTime": "March to May (Cherry Blossoms), Oct to Nov (Autumn Foliage)",
      "intro": "Temples, trains and mountain post towns. Walk beneath vermilion torii gates at dawn, cross high alpine cedar passes on the historic Nakasendo trail, ride the Tokaido Shinkansen past Mount Fuji, and sleep on fragrant tatami mats in heritage wooden ryokans with our local bilingual leaders.",
      "primaryPhoto": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1920&q=85",
      "secondaryPhoto": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1600&q=80",
      "overview": "From Kyoto's quiet moss gardens and centuries-old wooden shrines to the neon hum of Tokyo and hot spring hamlets of Hakone, Japan weaves ancient discipline with ultra-modern grace. We take care of Japan Rail passes, private English and Telugu guides, and secluded ryokan reservations.",
      "highlights": [
        "Sunrise over Kyoto's Kiyomizudera and preserved Gion geisha districts",
        "Bullet train journey past snow-capped Mount Fuji with Ekiben bento lunch",
        "Hiking the preserved cobblestone post-towns of Magome and Tsumago"
      ]
    }
  ],
  "trips": [
    {
      "id": "japan-autumn-classic-8d",
      "slug": "japan-autumn-classic-8d",
      "name": "Japan: Ancient Temples & Alpine Trails",
      "destination": "japan",
      "destinationName": "Japan",
      "travelStyle": "culture",
      "styleName": "Heritage & Living Culture",
      "days": 8,
      "duration": "8 days",
      "price": 185000,
      "priceFormatted": "from ₹1,85,000",
      "groupSize": "Small Group (Max 12)",
      "pace": "Moderate & Cultural",
      "season": "Spring & Autumn",
      "nextDeparture": "March & October 2027",
      "place": "Tokyo → Hakone → Kyoto → Nara → Osaka",
      "featured": true,
      "summary": "An 8-day cinematic journey from Tokyo's neon alleys to Kyoto's serene temple gardens, Hakone hot springs, and ancient cedar mountain trails.",
      "overview": "Curated for travelers seeking deep cultural resonance. Includes 7-day JR rail pass, authentic onsen ryokan stays with multi-course Kaiseki dinners, and private local guide access.",
      "photos": [
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Tokyo: Neon Lights & Shinjuku Walk",
          "description": "Land at Tokyo Haneda/Narita. Private airport greeting and transfer to hotel in Shinjuku. Evening welcome dinner with local ramen and skyline views."
        },
        {
          "day": 2,
          "title": "Tokyo Heritage: Asakusa Sensoji & Meiji Shrine",
          "description": "Explore ancient Sensoji temple, walk through the tranquil forests of Meiji Jingu shrine, and witness the bustling Shibuya crossing."
        },
        {
          "day": 3,
          "title": "Hakone Hot Springs & Mount Fuji Vistas",
          "description": "Scenic train to Hakone. Cruise Lake Ashi with views of Mount Fuji and check into an authentic hot spring ryokan with traditional onsen baths."
        },
        {
          "day": 4,
          "title": "Shinkansen Bullet Train to Kyoto & Gion Sunset",
          "description": "Board the high-speed Shinkansen to Kyoto. Tour the lantern-lit wooden tea houses of Gion and sample seasonal Kyoto matcha sweets."
        },
        {
          "day": 5,
          "title": "Arashiyama Bamboo Forest & Golden Pavilion",
          "description": "Serenity in Arashiyama bamboo groves, followed by the gold-leaf reflection of Kinkaku-ji temple and Ryoanji rock garden."
        },
        {
          "day": 6,
          "title": "Fushimi Inari Torii Path & Nara Deer Park",
          "description": "Hike the 10,000 red torii gates of Fushimi Inari before heading to Nara to see the Great Buddha of Todai-ji and bow to sacred deer."
        },
        {
          "day": 7,
          "title": "Osaka Food Haven: Dotonbori Street Eats",
          "description": "Travel to vibrant Osaka, experience street food culture in Dotonbori, and tour the historic ramparts of Osaka Castle."
        },
        {
          "day": 8,
          "title": "Farewell Japan & Kansai Airport Departure",
          "description": "Final morning souvenir shopping and matcha tasting before transfer to Kansai International Airport for your flight home."
        }
      ]
    },
    {
      "id": "kerala-honeymoon-5d4n",
      "slug": "kerala-honeymoon-5d4n",
      "name": "Kerala Honeymoon Package",
      "destination": "kerala",
      "destinationName": "Kerala",
      "travelStyle": "honeymoon",
      "styleName": "Honeymoon & Romance",
      "days": 5,
      "duration": "5 days",
      "price": 24500,
      "priceFormatted": "from \u20b924,500",
      "groupSize": "Private Couple",
      "pace": "Easy & Romantic",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Cochin \u2192 Munnar \u2192 Thekkady \u2192 Alleppey \u2192 Cochin",
      "featured": true,
      "summary": "An enchanting 5-day romantic escape covering mist-clad Munnar tea gardens, Periyar wildlife sanctuary in Thekkady, serene Alleppey backwaters, and colonial Fort Cochin.",
      "overview": "Curated specially for couples seeking romance amidst nature. Experience tea hills, spice plantations, Periyar lake boating, backwater sunsets, and private cab comfort with dedicated 24/7 Telugu concierge care.",
      "photos": [
        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Cochin & Scenic Drive to Munnar",
          "description": "Arrival at Cochin Railway Station or Airport. Meet the private cab driver and transfer to Munnar through mist-clad hills, rushing waterfalls, and cardamom valleys. Places covered: Cheeyappara Waterfalls, Valara Waterfalls, Spice Plantations, Jipe Line Point. Overnight stay: Munnar Hotel / Resort."
        },
        {
          "day": 2,
          "title": "Munnar Valley Exploration (Mattupetty Direction)",
          "description": "After delicious breakfast, head out to explore the Mattupetty circuit of Munnar covering tranquil dams, misty echo points, sprawling tea estates, and adventure parks. Places covered: Mattupetty Dam, Echo Point, Photo Point, Elephant Park, Tea Museum, Muttupetty Adventure Park. Overnight stay: Munnar Hotel / Resort."
        },
        {
          "day": 3,
          "title": "Munnar to Thekkady: Spice Hills & Periyar Boating",
          "description": "After breakfast, take a scenic 3-hour journey to Thekkady through rolling tea valleys and cardamom ridges. Check-in to hotel, enjoy boating in Periyar Lake, and attend vibrant evening cultural shows. Places covered: Scenic Mountain Roads & Tea Plantations, Periyar Lake Wildlife Sanctuary, Kathakali Classical Dance Theater, Kalaripayattu Martial Arts Arena. Overnight stay: Thekkady Hotel / Resort."
        },
        {
          "day": 4,
          "title": "Thekkady to Alleppey: Backwaters & Beach",
          "description": "After breakfast, descend through rubber and pepper estates to Alleppey. Marvel at swaying coconut palms, floating paddy fields, take a relaxing Shikara boat ride, and catch the sunset at Alleppey Beach. Places covered: Coconut Palm Lagoons & Waterways, Floating Paddy Fields (Kuttanad), Shikara Boat Cruise in Backwaters, Alleppey Beach in Evening. Overnight stay: Alleppey Hotel / Resort (Houseboat optional add-on)."
        },
        {
          "day": 5,
          "title": "Alleppey to Cochin: Fort Cochin Heritage & Departure",
          "description": "After breakfast, drive 1 hour to Cochin. Tour Fort Cochin's colonial landmarks before drop-off at Cochin Airport or Railway Station. Places covered: Mattancherry Dutch Palace, St. Francis Church, Jews Street, Fort Cochin Coastal Walk. Overnight stay: Departure / End of Tour."
        }
      ],
      "included": [
        "Personal AC Cab for all 5 days with dedicated professional chauffeur",
        "4 Nights luxury accommodation (2N Munnar, 1N Thekkady, 1N Alleppey)",
        "4 Daily breakfasts at hotels",
        "Special Honeymoon Bed Decoration with fresh flower petals and celebration cake",
        "Full sightseeing itinerary as per route in Munnar, Thekkady, Alleppey & Fort Cochin",
        "All fuel, state border taxes, toll taxes, parking fees, and driver allowances",
        "24/7 Telugu Customer Care Concierge assistance throughout your journey"
      ]
    },
    {
      "id": "kerala-honeymoon-4d3n",
      "slug": "kerala-honeymoon-4d3n",
      "name": "Kerala Honeymoon Package",
      "destination": "kerala",
      "destinationName": "Kerala",
      "travelStyle": "honeymoon",
      "styleName": "Honeymoon & Romance",
      "days": 4,
      "duration": "4 Days / 3 Nights",
      "price": 19600,
      "priceFormatted": "from ₹19,600",
      "groupSize": "Private Couple",
      "pace": "Easy & Romantic",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Cochin → Munnar → Alleppey → Cochin",
      "featured": true,
      "category": "KERALA · HONEYMOON & ROMANCE",
      "summary": "A delightful 4-day romantic getaway focusing on the two most iconic highlights of Kerala: the cool hills of Munnar and the tranquil backwaters of Alleppey.",
      "overview": "Designed for couples with tight schedules who want an unforgettable romantic trip. Explore Munnar's misty hills, lush tea gardens, cascading waterfalls, and Alleppey's serene backwaters with a private houseboat stay.<br><br>This package combines natural beauty, relaxation, and memorable experiences for the perfect honeymoon.",
      "highlights": [
        "Scenic Hill Stations of Munnar",
        "Romantic Backwater Houseboat Stay",
        "Beautiful Beaches & Sunsets",
        "Private & Comfortable Transfers"
      ],
      "photos": [
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=85",
        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1000&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
      ],
      "gallery": [
        { "title": "Munnar Tea Plantations", "url": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80" },
        { "title": "Kerala Houseboats", "url": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80" },
        { "title": "Cheeyappara Waterfalls", "url": "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=1200&q=80" },
        { "title": "Sunset Beaches", "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80" },
        { "title": "Fort Cochin Heritage", "url": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80" },
        { "title": "Misty Mountains", "url": "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80" }
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Cochin & Scenic Drive to Munnar",
          "description": "Arrive at Cochin and meet your representative. Drive to Munnar enjoying scenic views, waterfalls, and lush tea estates.",
          "thumbnail": "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=400&q=80"
        },
        {
          "day": 2,
          "title": "Munnar Valley Exploration",
          "description": "Visit tea gardens, Eravikulam National Park (optional), Mattupetty Dam, Echo Point, and more.",
          "thumbnail": "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=400&q=80"
        },
        {
          "day": 3,
          "title": "Munnar to Alleppey – Backwaters Experience",
          "description": "Check out and drive to Alleppey. Enjoy a private houseboat stay with delicious meals and peaceful backwater views.",
          "thumbnail": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80"
        },
        {
          "day": 4,
          "title": "Fort Cochin Sightseeing & Departure",
          "description": "After breakfast, check out and explore Fort Cochin's heritage spots. Later, transfer to Cochin Airport or Railway Station.",
          "thumbnail": "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=400&q=80"
        }
      ],
      "included": [
        "Personal AC cab for all 4 days with dedicated chauffeur",
        "3 nights accommodation (1N Munnar, 1N Alleppey)",
        "Daily breakfast",
        "Houseboat stay in Alleppey with meals",
        "Sightseeing as per itinerary",
        "All toll, parking, and driver allowances",
        "24/7 customer support"
      ],
      "notIncluded": [
        "Flight or train tickets",
        "Entry fees to monuments and attractions",
        "Personal expenses",
        "Travel insurance",
        "Activities not mentioned in the itinerary"
      ]
    },
    {
      "id": "kerala-trivandrum-honeymoon-5d4n",
      "slug": "kerala-trivandrum-honeymoon-5d4n",
      "name": "Kerala Honeymoon Trivandrum Package",
      "destination": "kerala",
      "destinationName": "Kerala",
      "travelStyle": "honeymoon",
      "styleName": "Honeymoon & Romance",
      "days": 5,
      "duration": "5 days",
      "price": 24500,
      "priceFormatted": "from \u20b924,500",
      "groupSize": "Private Couple",
      "pace": "Easy & Romantic",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Cochin \u2192 Munnar \u2192 Thekkady \u2192 Alleppey \u2192 Varkala / Trivandrum",
      "featured": true,
      "summary": "A deeply rewarding couples journey blending Munnar misty hills, Thekkady wildlife, an included 1-hour Alleppey Shikara ride, Varkala cliff sea views, and sacred Padmanabhaswamy Temple.",
      "overview": "Combining romantic hill stations, tranquil backwaters with included Shikara cruise, and coastal spirituality. Includes 2N Munnar, 1N Alleppey, and 1N Varkala or Trivandrum.",
      "photos": [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Cochin & Scenic Drive to Munnar",
          "description": "Arrival at Cochin Railway Station or Airport. Meet the private cab driver and transfer to Munnar through mist-clad hills, rushing waterfalls, and cardamom valleys. Places covered: Cheeyappara Waterfalls, Valara Waterfalls, Spice Plantations, Jipe Line Point. Overnight stay: Munnar Hotel / Resort."
        },
        {
          "day": 2,
          "title": "Munnar Valley Exploration (Mattupetty Direction)",
          "description": "After delicious breakfast, head out to explore the Mattupetty circuit of Munnar covering tranquil dams, misty echo points, sprawling tea estates, and adventure parks. Places covered: Mattupetty Dam, Echo Point, Photo Point, Elephant Park, Tea Museum, Muttupetty Adventure Park. Overnight stay: Munnar Hotel / Resort."
        },
        {
          "day": 3,
          "title": "Munnar to Thekkady: Spice Hills & Periyar Boating",
          "description": "After breakfast, take a scenic 3-hour journey to Thekkady through rolling tea valleys and cardamom ridges. Check-in to hotel, enjoy boating in Periyar Lake, and attend vibrant evening cultural shows. Places covered: Scenic Mountain Roads & Tea Plantations, Periyar Lake Wildlife Sanctuary, Kathakali Classical Dance Theater, Kalaripayattu Martial Arts Arena. Overnight stay: Thekkady Hotel / Resort."
        },
        {
          "day": 4,
          "title": "Thekkady to Alleppey: Included 1-Hour Backwater Shikara",
          "description": "After breakfast, journey down from Thekkady to Alleppey. Enjoy an included 1-hour Shikara boat ride through backwater canals and relax by the beach. Places covered: Alleppey Backwaters Network, Floating Paddy Fields & Palms, 1-Hour Included Shikara Boat Ride, Alleppey Beach Sunset. Overnight stay: Alleppey Hotel / Resort."
        },
        {
          "day": 5,
          "title": "Varkala Cliff / Trivandrum Padmanabhaswamy Temple & Departure",
          "description": "After breakfast, travel south along the coastal highway to Varkala Cliff and Thiruvananthapuram. Visit the majestic Sree Ananthapadmanabha Swamy Temple, Napier Museum, and Secretariat before return departure. Places covered: Varkala Beach & Cliff Lookout, Sree Ananthapadmanabha Swamy Temple, Napier Museum & Art Gallery, Secretariat & Mini Zoo. Overnight stay: Departure / End of Tour (or 1N Varkala/Trivandrum depending on return timing)."
        }
      ],
      "included": [
        "Personal AC Cab for all 5 days with chauffeur",
        "4 Nights accommodation (2 Nights Munnar, 1 Night Alleppey, 1 Night Varkala or Trivandrum)",
        "4 Daily breakfasts",
        "1-Hour Shikara boat ride in Alleppey backwaters (INCLUDED)",
        "Special Honeymoon Bed Decoration with flowers and cake",
        "Complete sightseeing across Munnar, Thekkady, Alleppey, Varkala Cliff & Trivandrum",
        "All toll taxes, parking fees, driver allowance, and fuel",
        "24/7 Telugu Customer Care Support"
      ]
    },
    {
      "id": "kerala-jatayu-honeymoon-6d5n",
      "slug": "kerala-jatayu-honeymoon-6d5n",
      "name": "Kerala Honeymoon Couple Jatayu Package",
      "destination": "kerala",
      "destinationName": "Kerala",
      "travelStyle": "honeymoon",
      "styleName": "Honeymoon & Romance",
      "days": 6,
      "duration": "6 days",
      "price": 29400,
      "priceFormatted": "from \u20b929,400",
      "groupSize": "Private Couple",
      "pace": "Easy & Romantic",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Cochin \u2192 Munnar \u2192 Thekkady \u2192 Alleppey \u2192 Jatayu \u2192 Trivandrum",
      "featured": true,
      "summary": "An unforgettable 6-day honeymoon expedition combining Munnar tea hills, Thekkady wildlife, Alleppey canals, the iconic 200-ft Jatayu Earth's Center bird sculpture, and Trivandrum's royal heritage.",
      "overview": "The ultimate Kerala romantic itinerary. Features panoramic hill stations, Periyar boat safaris, backwaters, the architectural marvel of Jatayu Earth's Center, and Trivandrum beach.",
      "photos": [
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Cochin & Scenic Drive to Munnar",
          "description": "Arrival at Cochin Railway Station or Airport. Meet the private cab driver and transfer to Munnar through mist-clad hills, rushing waterfalls, and cardamom valleys. Places covered: Cheeyappara Waterfalls, Valara Waterfalls, Spice Plantations, Jipe Line Point. Overnight stay: Munnar Hotel / Resort."
        },
        {
          "day": 2,
          "title": "Munnar Valley Exploration (Mattupetty Direction)",
          "description": "After delicious breakfast, head out to explore the Mattupetty circuit of Munnar covering tranquil dams, misty echo points, sprawling tea estates, and adventure parks. Places covered: Mattupetty Dam, Echo Point, Photo Point, Elephant Park, Tea Museum, Muttupetty Adventure Park. Overnight stay: Munnar Hotel / Resort."
        },
        {
          "day": 3,
          "title": "Munnar to Thekkady: Spice Hills & Periyar Boating",
          "description": "After breakfast, take a scenic 3-hour journey to Thekkady through rolling tea valleys and cardamom ridges. Check-in to hotel, enjoy boating in Periyar Lake, and attend vibrant evening cultural shows. Places covered: Scenic Mountain Roads & Tea Plantations, Periyar Lake Wildlife Sanctuary, Kathakali Classical Dance Theater, Kalaripayattu Martial Arts Arena. Overnight stay: Thekkady Hotel / Resort."
        },
        {
          "day": 4,
          "title": "Thekkady to Alleppey: Backwaters & Beach",
          "description": "After breakfast, descend through rubber and pepper estates to Alleppey. Marvel at swaying coconut palms, floating paddy fields, take a relaxing Shikara boat ride, and catch the sunset at Alleppey Beach. Places covered: Coconut Palm Lagoons & Waterways, Floating Paddy Fields (Kuttanad), Shikara Boat Cruise in Backwaters, Alleppey Beach in Evening. Overnight stay: Alleppey Hotel / Resort (Houseboat optional add-on)."
        },
        {
          "day": 5,
          "title": "Alleppey to Jatayu Earth's Center & Trivandrum Beach",
          "description": "After breakfast, embark on a 160 km (approx 4:30 hours) drive to the world-renowned Jatayu Earth's Center at Chadayamangalam. Ascend the rock mountain to view the world's largest bird sculpture, then continue to Trivandrum Beach. Places covered: Jatayu Earth's Center Rock Sculpture, Jatayu Nature Park & Cable Car Point, Trivandrum / Kovalam Beach, Coastal Promenade. Overnight stay: Trivandrum or Kovalam Hotel."
        },
        {
          "day": 6,
          "title": "Trivandrum City Sightseeing & Return Journey",
          "description": "After breakfast, check-out and visit the spiritual and royal landmarks of Trivandrum including Padmanabhaswamy Temple and Napier Museum, before returning to Cochin Airport/Railway Station. Places covered: Sree Ananthapadmanabha Swamy Temple, Napier Museum & Art Gallery, Secretariat Building, Mini Zoo & Botanical Gardens. Overnight stay: Departure / End of Tour."
        }
      ],
      "included": [
        "Personal AC Cab for all 6 days with professional chauffeur",
        "5 Nights deluxe hotel accommodation (2N Munnar, 1N Thekkady, 1N Alleppey, 1N Trivandrum/Kovalam)",
        "5 Daily breakfasts at hotels",
        "Special Honeymoon Bed Decoration with fresh flower petals and cake",
        "Sightseeing in Munnar, Thekkady, Alleppey, Jatayu Earth's Center, and Trivandrum",
        "All fuel, toll taxes, parking fees, and driver allowances",
        "24/7 Telugu Customer Care Concierge"
      ]
    },
    {
      "id": "kerala-varkala-honeymoon-6d5n",
      "slug": "kerala-varkala-honeymoon-6d5n",
      "name": "Kerala Honeymoon Couple Varkala Package",
      "destination": "kerala",
      "destinationName": "Kerala",
      "travelStyle": "honeymoon",
      "styleName": "Honeymoon & Romance",
      "days": 6,
      "duration": "6 days",
      "price": 29400,
      "priceFormatted": "from \u20b929,400",
      "groupSize": "Private Couple",
      "pace": "Easy & Romantic",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Cochin \u2192 Munnar \u2192 Thekkady \u2192 Alleppey \u2192 Varkala \u2192 Trivandrum",
      "featured": true,
      "summary": "A magnificent 6-day couples voyage covering the misty hills of Munnar, wildlife of Thekkady, backwaters of Alleppey, the sensational red cliff beaches of Varkala, and Trivandrum.",
      "overview": "Immerse in the dramatic beauty of Varkala's sandstone cliffs, sunset ocean walks, backwater tranquility, and tea valleys. Includes 2N Munnar, 1N Thekkady, 1N Alleppey, and 1N Varkala cliff resort.",
      "photos": [
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Cochin & Scenic Drive to Munnar",
          "description": "Arrival at Cochin Railway Station or Airport. Meet the private cab driver and transfer to Munnar through mist-clad hills, rushing waterfalls, and cardamom valleys. Places covered: Cheeyappara Waterfalls, Valara Waterfalls, Spice Plantations, Jipe Line Point. Overnight stay: Munnar Hotel / Resort."
        },
        {
          "day": 2,
          "title": "Munnar Valley Exploration (Mattupetty Direction)",
          "description": "After delicious breakfast, head out to explore the Mattupetty circuit of Munnar covering tranquil dams, misty echo points, sprawling tea estates, and adventure parks. Places covered: Mattupetty Dam, Echo Point, Photo Point, Elephant Park, Tea Museum, Muttupetty Adventure Park. Overnight stay: Munnar Hotel / Resort."
        },
        {
          "day": 3,
          "title": "Munnar to Thekkady: Spice Hills & Periyar Boating",
          "description": "After breakfast, take a scenic 3-hour journey to Thekkady through rolling tea valleys and cardamom ridges. Check-in to hotel, enjoy boating in Periyar Lake, and attend vibrant evening cultural shows. Places covered: Scenic Mountain Roads & Tea Plantations, Periyar Lake Wildlife Sanctuary, Kathakali Classical Dance Theater, Kalaripayattu Martial Arts Arena. Overnight stay: Thekkady Hotel / Resort."
        },
        {
          "day": 4,
          "title": "Thekkady to Alleppey: Backwaters & Beach",
          "description": "After breakfast, descend through rubber and pepper estates to Alleppey. Marvel at swaying coconut palms, floating paddy fields, take a relaxing Shikara boat ride, and catch the sunset at Alleppey Beach. Places covered: Coconut Palm Lagoons & Waterways, Floating Paddy Fields (Kuttanad), Shikara Boat Cruise in Backwaters, Alleppey Beach in Evening. Overnight stay: Alleppey Hotel / Resort (Houseboat optional add-on)."
        },
        {
          "day": 5,
          "title": "Alleppey to Varkala: Red Laterite Cliff & Coastal Waters",
          "description": "After breakfast, drive approx 125 km (3:30 hours) south to the breathtaking coastal town of Varkala. Check-in to cliffside hotel, explore Varkala Beach and Cliff, and try thrilling water sports. Places covered: Varkala Beach (Papanasam Beach), Varkala Cliff Promenade, Mangrove Waterways, Helipad & Sunset Points. Overnight stay: Varkala Hotel / Resort."
        },
        {
          "day": 6,
          "title": "Trivandrum Cultural Heritage & Return Journey",
          "description": "After breakfast, check-out and explore the capital city of Thiruvananthapuram. Visit the ancient Padmanabhaswamy Temple, museums, and zoo before your return transfer to Airport or Railway Station. Places covered: Sree Ananthapadmanabha Swamy Temple, Napier Museum & Art Gallery, Government Secretariat Building, Thiruvananthapuram Mini Zoo. Overnight stay: Departure / End of Tour."
        }
      ],
      "included": [
        "Personal AC Cab for all 6 days with professional chauffeur",
        "5 Nights deluxe hotel accommodation (2N Munnar, 1N Thekkady, 1N Alleppey, 1N Varkala)",
        "5 Daily breakfasts at hotels",
        "Special Honeymoon Bed Decoration with fresh flower petals and cake",
        "Complete sightseeing across Munnar, Thekkady, Alleppey, Varkala Cliff & Trivandrum",
        "All fuel, toll taxes, parking fees, and driver allowances",
        "24/7 Telugu Customer Care Concierge"
      ]
    },
    {
      "id": "kerala-bachelor-4d3n",
      "slug": "kerala-bachelor-4d3n",
      "name": "Kerala Bachelor Group Package",
      "destination": "kerala",
      "destinationName": "Kerala",
      "travelStyle": "group",
      "styleName": "Bachelors & Group",
      "days": 4,
      "duration": "4 days",
      "price": 9600,
      "priceFormatted": "from \u20b99,600",
      "groupSize": "Private Bachelor Group (4-12)",
      "pace": "Active & Thrilling",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Cochin \u2192 Munnar \u2192 Alleppey \u2192 Cochin",
      "featured": true,
      "summary": "An action-packed 4-day road trip for bachelor squads covering Cheeyappara waterfalls, Mattupetty adventure sports, tea plantations, and Alleppey backwaters.",
      "overview": "Perfect for friends and bachelor squads seeking scenic drives, ziplines, tea valleys, and relaxing backwater hangouts with private chauffeur transit.",
      "photos": [
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Cochin & Scenic Drive to Munnar",
          "description": "Arrival at Cochin Railway Station or Airport. Meet the private cab driver and transfer to Munnar through mist-clad hills, rushing waterfalls, and cardamom valleys. Places covered: Cheeyappara Waterfalls, Valara Waterfalls, Spice Plantations, Jipe Line Point. Overnight stay: Munnar Hotel / Resort."
        },
        {
          "day": 2,
          "title": "Munnar Valley Exploration (Mattupetty Direction)",
          "description": "After delicious breakfast, head out to explore the Mattupetty circuit of Munnar covering tranquil dams, misty echo points, sprawling tea estates, and adventure parks. Places covered: Mattupetty Dam, Echo Point, Photo Point, Elephant Park, Tea Museum, Muttupetty Adventure Park. Overnight stay: Munnar Hotel / Resort."
        },
        {
          "day": 3,
          "title": "Munnar to Alleppey Backwaters & Beach Sunset",
          "description": "After breakfast, descend from misty hills toward the serene backwater capital of Alleppey. Cruise past swaying coconut palms and emerald paddy fields, and visit Alleppey Beach. Places covered: Alleppey Backwaters Canal Network, Floating Paddy Fields & Coconut Lagoons, Shikara Boat Cruise Point, Alleppey Beach & Old Pier. Overnight stay: Alleppey Hotel / Resort (Houseboat optional add-on)."
        },
        {
          "day": 4,
          "title": "Fort Cochin Heritage Sightseeing & Return Departure",
          "description": "After breakfast, transfer to Cochin. Explore historical monuments of Fort Cochin before heading to Cochin Airport or Railway Station for your journey home. Places covered: Mattancherry Dutch Palace, St. Francis Church, Jews Street & Synagogue Area, Fort Cochin Heritage Precinct. Overnight stay: Departure / End of Tour."
        }
      ],
      "included": [
        "Dedicated AC Private Cab for all 4 days with experienced chauffeur",
        "3 Nights verified group-friendly hotel accommodation (2N Munnar, 1N Alleppey)",
        "3 Daily breakfasts at hotels",
        "Complete sightseeing across Munnar, Alleppey backwaters, and Fort Cochin",
        "All fuel, toll taxes, parking fees, and driver allowances",
        "24/7 Telugu Customer Care Concierge assistance"
      ]
    },
    {
      "id": "kerala-bachelor-5d4n",
      "slug": "kerala-bachelor-5d4n",
      "name": "Kerala Bachelor Group Package",
      "destination": "kerala",
      "destinationName": "Kerala",
      "travelStyle": "group",
      "styleName": "Bachelors & Group",
      "days": 5,
      "duration": "5 days",
      "price": 12000,
      "priceFormatted": "from \u20b912,000",
      "groupSize": "Private Bachelor Group (4-12)",
      "pace": "Active & Thrilling",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Cochin \u2192 Munnar \u2192 Thekkady \u2192 Alleppey \u2192 Cochin",
      "featured": true,
      "summary": "The quintessential 5-day Kerala road trip for friends: Munnar tea heights, Thekkady wildlife sanctuary & martial arts, Alleppey backwater cruise, and Fort Cochin cafes.",
      "overview": "Curated for groups and bachelor parties seeking hill station views, Periyar wildlife boat safaris, backwaters, and local cuisine with dedicated private vehicle.",
      "photos": [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Cochin & Scenic Drive to Munnar",
          "description": "Arrival at Cochin Railway Station or Airport. Meet the private cab driver and transfer to Munnar through mist-clad hills, rushing waterfalls, and cardamom valleys. Places covered: Cheeyappara Waterfalls, Valara Waterfalls, Spice Plantations, Jipe Line Point. Overnight stay: Munnar Hotel / Resort."
        },
        {
          "day": 2,
          "title": "Munnar Valley Exploration (Mattupetty Direction)",
          "description": "After delicious breakfast, head out to explore the Mattupetty circuit of Munnar covering tranquil dams, misty echo points, sprawling tea estates, and adventure parks. Places covered: Mattupetty Dam, Echo Point, Photo Point, Elephant Park, Tea Museum, Muttupetty Adventure Park. Overnight stay: Munnar Hotel / Resort."
        },
        {
          "day": 3,
          "title": "Munnar to Thekkady: Spice Hills & Periyar Boating",
          "description": "After breakfast, take a scenic 3-hour journey to Thekkady through rolling tea valleys and cardamom ridges. Check-in to hotel, enjoy boating in Periyar Lake, and attend vibrant evening cultural shows. Places covered: Scenic Mountain Roads & Tea Plantations, Periyar Lake Wildlife Sanctuary, Kathakali Classical Dance Theater, Kalaripayattu Martial Arts Arena. Overnight stay: Thekkady Hotel / Resort."
        },
        {
          "day": 4,
          "title": "Thekkady to Alleppey: Backwaters & Beach",
          "description": "After breakfast, descend through rubber and pepper estates to Alleppey. Marvel at swaying coconut palms, floating paddy fields, take a relaxing Shikara boat ride, and catch the sunset at Alleppey Beach. Places covered: Coconut Palm Lagoons & Waterways, Floating Paddy Fields (Kuttanad), Shikara Boat Cruise in Backwaters, Alleppey Beach in Evening. Overnight stay: Alleppey Hotel / Resort (Houseboat optional add-on)."
        },
        {
          "day": 5,
          "title": "Alleppey to Cochin: Fort Cochin Heritage & Departure",
          "description": "After breakfast, drive 1 hour to Cochin. Tour Fort Cochin's colonial landmarks before drop-off at Cochin Airport or Railway Station. Places covered: Mattancherry Dutch Palace, St. Francis Church, Jews Street, Fort Cochin Coastal Walk. Overnight stay: Departure / End of Tour."
        }
      ],
      "included": [
        "Dedicated AC Private Cab for all 5 days with chauffeur",
        "4 Nights group-friendly accommodation (2N Munnar, 1N Thekkady, 1N Alleppey)",
        "4 Daily breakfasts at hotels",
        "Full route sightseeing across Munnar, Thekkady, Alleppey & Fort Cochin",
        "All fuel, toll taxes, parking fees, and driver allowances",
        "24/7 Telugu Customer Care Support"
      ]
    },
    {
      "id": "kerala-trivandrum-bachelor-5d4n",
      "slug": "kerala-trivandrum-bachelor-5d4n",
      "name": "Kerala Trivandrum Bachelor Group Package",
      "destination": "kerala",
      "destinationName": "Kerala",
      "travelStyle": "group",
      "styleName": "Bachelors & Group",
      "days": 5,
      "duration": "5 days",
      "price": 12000,
      "priceFormatted": "from \u20b912,000",
      "groupSize": "Private Bachelor Group (4-12)",
      "pace": "Active & Thrilling",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Cochin \u2192 Munnar \u2192 Thekkady \u2192 Alleppey \u2192 Varkala / Trivandrum",
      "featured": true,
      "summary": "A diverse 5-day group tour combining Munnar tea hills, Thekkady wildlife, an included 1-hour Alleppey backwater Shikara cruise, Varkala coastal cliff, and Trivandrum.",
      "overview": "Designed for friends seeking adventure and exploration. Includes 2N Munnar, 1N Alleppey, and 1N Varkala or Trivandrum with included Shikara cruise.",
      "photos": [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Cochin & Scenic Drive to Munnar",
          "description": "Arrival at Cochin Railway Station or Airport. Meet the private cab driver and transfer to Munnar through mist-clad hills, rushing waterfalls, and cardamom valleys. Places covered: Cheeyappara Waterfalls, Valara Waterfalls, Spice Plantations, Jipe Line Point. Overnight stay: Munnar Hotel / Resort."
        },
        {
          "day": 2,
          "title": "Munnar Valley Exploration (Mattupetty Direction)",
          "description": "After delicious breakfast, head out to explore the Mattupetty circuit of Munnar covering tranquil dams, misty echo points, sprawling tea estates, and adventure parks. Places covered: Mattupetty Dam, Echo Point, Photo Point, Elephant Park, Tea Museum, Muttupetty Adventure Park. Overnight stay: Munnar Hotel / Resort."
        },
        {
          "day": 3,
          "title": "Munnar to Thekkady: Spice Hills & Periyar Boating",
          "description": "After breakfast, take a scenic 3-hour journey to Thekkady through rolling tea valleys and cardamom ridges. Check-in to hotel, enjoy boating in Periyar Lake, and attend vibrant evening cultural shows. Places covered: Scenic Mountain Roads & Tea Plantations, Periyar Lake Wildlife Sanctuary, Kathakali Classical Dance Theater, Kalaripayattu Martial Arts Arena. Overnight stay: Thekkady Hotel / Resort."
        },
        {
          "day": 4,
          "title": "Thekkady to Alleppey: Included 1-Hour Backwater Shikara",
          "description": "After breakfast, journey down from Thekkady to Alleppey. Enjoy an included 1-hour Shikara boat ride through backwater canals and relax by the beach. Places covered: Alleppey Backwaters Network, Floating Paddy Fields & Palms, 1-Hour Included Shikara Boat Ride, Alleppey Beach Sunset. Overnight stay: Alleppey Hotel / Resort."
        },
        {
          "day": 5,
          "title": "Varkala Cliff / Trivandrum Padmanabhaswamy Temple & Departure",
          "description": "After breakfast, travel south along the coastal highway to Varkala Cliff and Thiruvananthapuram. Visit the majestic Sree Ananthapadmanabha Swamy Temple, Napier Museum, and Secretariat before return departure. Places covered: Varkala Beach & Cliff Lookout, Sree Ananthapadmanabha Swamy Temple, Napier Museum & Art Gallery, Secretariat & Mini Zoo. Overnight stay: Departure / End of Tour (or 1N Varkala/Trivandrum depending on return timing)."
        }
      ],
      "included": [
        "Dedicated AC Private Cab for all 5 days with chauffeur",
        "4 Nights accommodation (2 Nights Munnar, 1 Night Alleppey, 1 Night Varkala or Trivandrum)",
        "4 Daily breakfasts at hotels",
        "1-Hour Shikara boat ride in Alleppey backwaters (INCLUDED)",
        "Complete sightseeing across Munnar, Thekkady, Alleppey, Varkala & Trivandrum",
        "All fuel, toll taxes, parking fees, and driver allowances",
        "24/7 Telugu Customer Care Support"
      ]
    },
    {
      "id": "kerala-varkala-bachelor-6d5n",
      "slug": "kerala-varkala-bachelor-6d5n",
      "name": "Kerala Varkala Bachelor Group Package",
      "destination": "kerala",
      "destinationName": "Kerala",
      "travelStyle": "group",
      "styleName": "Bachelors & Group",
      "days": 6,
      "duration": "6 days",
      "price": 14400,
      "priceFormatted": "from \u20b914,400",
      "groupSize": "Private Bachelor Group (4-12)",
      "pace": "Active & Thrilling",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Cochin \u2192 Munnar \u2192 Thekkady \u2192 Alleppey \u2192 Varkala \u2192 Trivandrum",
      "featured": true,
      "summary": "An epic 6-day road trip for bachelor groups combining mist-clad Munnar tea hills, Thekkady jungle safari, Alleppey backwaters, and nightlife & water sports on Varkala Cliff.",
      "overview": "Experience water sports on Varkala Cliff (surfing, parasailing, kayaking), beach shacks, Periyar boating, and scenic hill country with dedicated private vehicle.",
      "photos": [
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Cochin & Scenic Drive to Munnar",
          "description": "Arrival at Cochin Railway Station or Airport. Meet the private cab driver and transfer to Munnar through mist-clad hills, rushing waterfalls, and cardamom valleys. Places covered: Cheeyappara Waterfalls, Valara Waterfalls, Spice Plantations, Jipe Line Point. Overnight stay: Munnar Hotel / Resort."
        },
        {
          "day": 2,
          "title": "Munnar Valley Exploration (Mattupetty Direction)",
          "description": "After delicious breakfast, head out to explore the Mattupetty circuit of Munnar covering tranquil dams, misty echo points, sprawling tea estates, and adventure parks. Places covered: Mattupetty Dam, Echo Point, Photo Point, Elephant Park, Tea Museum, Muttupetty Adventure Park. Overnight stay: Munnar Hotel / Resort."
        },
        {
          "day": 3,
          "title": "Munnar to Thekkady: Spice Hills & Periyar Boating",
          "description": "After breakfast, take a scenic 3-hour journey to Thekkady through rolling tea valleys and cardamom ridges. Check-in to hotel, enjoy boating in Periyar Lake, and attend vibrant evening cultural shows. Places covered: Scenic Mountain Roads & Tea Plantations, Periyar Lake Wildlife Sanctuary, Kathakali Classical Dance Theater, Kalaripayattu Martial Arts Arena. Overnight stay: Thekkady Hotel / Resort."
        },
        {
          "day": 4,
          "title": "Thekkady to Alleppey: Backwaters & Beach",
          "description": "After breakfast, descend through rubber and pepper estates to Alleppey. Marvel at swaying coconut palms, floating paddy fields, take a relaxing Shikara boat ride, and catch the sunset at Alleppey Beach. Places covered: Coconut Palm Lagoons & Waterways, Floating Paddy Fields (Kuttanad), Shikara Boat Cruise in Backwaters, Alleppey Beach in Evening. Overnight stay: Alleppey Hotel / Resort (Houseboat optional add-on)."
        },
        {
          "day": 5,
          "title": "Alleppey to Varkala: Red Laterite Cliff & Coastal Waters",
          "description": "After breakfast, drive approx 125 km (3:30 hours) south to the breathtaking coastal town of Varkala. Check-in to cliffside hotel, explore Varkala Beach and Cliff, and try thrilling water sports. Places covered: Varkala Beach (Papanasam Beach), Varkala Cliff Promenade, Mangrove Waterways, Helipad & Sunset Points. Overnight stay: Varkala Hotel / Resort."
        },
        {
          "day": 6,
          "title": "Trivandrum Cultural Heritage & Return Journey",
          "description": "After breakfast, check-out and explore the capital city of Thiruvananthapuram. Visit the ancient Padmanabhaswamy Temple, museums, and zoo before your return transfer to Airport or Railway Station. Places covered: Sree Ananthapadmanabha Swamy Temple, Napier Museum & Art Gallery, Government Secretariat Building, Thiruvananthapuram Mini Zoo. Overnight stay: Departure / End of Tour."
        }
      ],
      "included": [
        "Dedicated AC Private Cab for all 6 days with experienced chauffeur",
        "5 Nights group-friendly accommodation (2N Munnar, 1N Thekkady, 1N Alleppey, 1N Varkala)",
        "5 Daily breakfasts at hotels",
        "Complete sightseeing across Munnar, Thekkady, Alleppey, Varkala & Trivandrum",
        "All fuel, toll taxes, parking fees, and driver allowances",
        "24/7 Telugu Customer Care Support"
      ]
    },
    {
      "id": "kerala-jatayu-bachelor-6d5n",
      "slug": "kerala-jatayu-bachelor-6d5n",
      "name": "Kerala Jatayu Bachelor Group Package",
      "destination": "kerala",
      "destinationName": "Kerala",
      "travelStyle": "group",
      "styleName": "Bachelors & Group",
      "days": 6,
      "duration": "6 days",
      "price": 14400,
      "priceFormatted": "from \u20b914,400",
      "groupSize": "Private Bachelor Group (4-12)",
      "pace": "Active & Thrilling",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Cochin \u2192 Munnar \u2192 Thekkady \u2192 Alleppey \u2192 Jatayu \u2192 Trivandrum",
      "featured": true,
      "summary": "An adventurous 6-day road trip for bachelor groups exploring Munnar tea hills, Periyar wildlife, Alleppey backwaters, the monumental Jatayu Earth's Center bird sculpture, and Trivandrum beach.",
      "overview": "Combine high-altitude hill country, wildlife, waterways, and the world's largest bird sculpture atop a 1,000-ft rock mountain with cable car ropeway and adventure activities.",
      "photos": [
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Cochin & Scenic Drive to Munnar",
          "description": "Arrival at Cochin Railway Station or Airport. Meet the private cab driver and transfer to Munnar through mist-clad hills, rushing waterfalls, and cardamom valleys. Places covered: Cheeyappara Waterfalls, Valara Waterfalls, Spice Plantations, Jipe Line Point. Overnight stay: Munnar Hotel / Resort."
        },
        {
          "day": 2,
          "title": "Munnar Valley Exploration (Mattupetty Direction)",
          "description": "After delicious breakfast, head out to explore the Mattupetty circuit of Munnar covering tranquil dams, misty echo points, sprawling tea estates, and adventure parks. Places covered: Mattupetty Dam, Echo Point, Photo Point, Elephant Park, Tea Museum, Muttupetty Adventure Park. Overnight stay: Munnar Hotel / Resort."
        },
        {
          "day": 3,
          "title": "Munnar to Thekkady: Spice Hills & Periyar Boating",
          "description": "After breakfast, take a scenic 3-hour journey to Thekkady through rolling tea valleys and cardamom ridges. Check-in to hotel, enjoy boating in Periyar Lake, and attend vibrant evening cultural shows. Places covered: Scenic Mountain Roads & Tea Plantations, Periyar Lake Wildlife Sanctuary, Kathakali Classical Dance Theater, Kalaripayattu Martial Arts Arena. Overnight stay: Thekkady Hotel / Resort."
        },
        {
          "day": 4,
          "title": "Thekkady to Alleppey: Backwaters & Beach",
          "description": "After breakfast, descend through rubber and pepper estates to Alleppey. Marvel at swaying coconut palms, floating paddy fields, take a relaxing Shikara boat ride, and catch the sunset at Alleppey Beach. Places covered: Coconut Palm Lagoons & Waterways, Floating Paddy Fields (Kuttanad), Shikara Boat Cruise in Backwaters, Alleppey Beach in Evening. Overnight stay: Alleppey Hotel / Resort (Houseboat optional add-on)."
        },
        {
          "day": 5,
          "title": "Alleppey to Jatayu Earth's Center & Trivandrum Beach",
          "description": "After breakfast, embark on a 160 km (approx 4:30 hours) drive to the world-renowned Jatayu Earth's Center at Chadayamangalam. Ascend the rock mountain to view the world's largest bird sculpture, then continue to Trivandrum Beach. Places covered: Jatayu Earth's Center Rock Sculpture, Jatayu Nature Park & Cable Car Point, Trivandrum / Kovalam Beach, Coastal Promenade. Overnight stay: Trivandrum or Kovalam Hotel."
        },
        {
          "day": 6,
          "title": "Trivandrum City Sightseeing & Return Journey",
          "description": "After breakfast, check-out and visit the spiritual and royal landmarks of Trivandrum including Padmanabhaswamy Temple and Napier Museum, before returning to Cochin Airport/Railway Station. Places covered: Sree Ananthapadmanabha Swamy Temple, Napier Museum & Art Gallery, Secretariat Building, Mini Zoo & Botanical Gardens. Overnight stay: Departure / End of Tour."
        }
      ],
      "included": [
        "Dedicated AC Private Cab for all 6 days with experienced chauffeur",
        "5 Nights group-friendly accommodation (2N Munnar, 1N Thekkady, 1N Alleppey, 1N Trivandrum/Kovalam)",
        "5 Daily breakfasts at hotels",
        "Complete sightseeing across Munnar, Thekkady, Alleppey, Jatayu Earth's Center & Trivandrum",
        "All fuel, toll taxes, parking fees, and driver allowances",
        "24/7 Telugu Customer Care Support"
      ]
    },
    {
      "id": "kashmir-winter-group-4d3n",
      "slug": "kashmir-winter-group-4d3n",
      "name": "Kashmir Valley Group Expedition",
      "destination": "kashmir",
      "destinationName": "Kashmir",
      "travelStyle": "group",
      "styleName": "Bachelors & Group",
      "days": 4,
      "duration": "4 days",
      "price": 8500,
      "priceFormatted": "from \u20b98,500",
      "groupSize": "Private Bachelor Group (4-12)",
      "pace": "Active & Thrilling",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Srinagar Local \u2192 Gulmarg \u2192 Pahalgam \u2192 Departure",
      "featured": true,
      "summary": "Embark on an unforgettable Himalayan expedition to Kashmir: tranquil Shikara boat ride on Dal Lake, snow thrills and cable car at Gulmarg, and picturesque saffron valleys of Pahalgam with dedicated Sedan cab transfers and Telugu customer care.",
      "overview": "Carefully designed for friends squads, bachelors, and adventure groups. Witness snow-clad peaks, historical Shankaracharya temple, vibrant Lal Chowk, Nishat and Shalimar Mughal gardens, world-famous Gulmarg ski resort, and Betaab valley in Pahalgam.",
      "photos": [
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Welcome to Srinagar Local Sightseeing & Dal Lake Shikara",
          "description": "Welcome to Srinagar! You will be met by our representative at Srinagar Airport or Bus Stand and transferred to the hotel for check-in (12:00 PM). After refreshing, proceed for local sightseeing: visit Shankaracharya Temple located at a height of 1,100 ft above the main city on top of a hill dedicated to Lord Shiva (oldest shrine in Kashmir valley). Visit Nishat Garden ('Garden of Pleasure') built in 1633 by Mughal King Asif Khan. Stroll through Lal Chowk, the historic heart of Srinagar where Jawaharlal Nehru unfurled the Indian national flag in 1948. In the evening, enjoy a 1-hour Shikara ride on the world-famous Dal Lake covering floating gardens, vegetable gardens, golden lake, inner markets like Meena bazaar, and scenic views of the Zabarwan mountains. Return to Srinagar hotel for dinner and rest night."
        },
        {
          "day": 2,
          "title": "Gulmarg Excursion \u2014 Meadow of Flowers & Gondola Ride (55 km)",
          "description": "After breakfast, proceed to Gulmarg (55 km, 'Meadow of Flowers') discovered by the 16th-century Kashmiri romantic poet inspired by its grassy slopes covered with wild flowers. In winter, Gulmarg transforms into India's premier ski resort with one of the best ski slopes in the world and highest 18-hole golf course. Enjoy the world-famous Gondola cable car (on own expense) offering rides to the upland meadows of Kongdori and beyond to the top of the Apharwat range at 14,000 ft for viewing the Himalayan peaks. (Note: In winter due to heavy snowfall, cabs go only up to Tangmarg, from where tourists hire snow-chain 4x4 vehicles at approx \u20b9800\u2013\u20b91,200 per person). Later drive back to Srinagar, enjoy a warm dinner and overnight stay."
        },
        {
          "day": 3,
          "title": "Pahalgam \u2014 Valley of Shepherds & Betaab Valley (87 km)",
          "description": "After breakfast, proceed to Pahalgam (87 km, 'Valley of Shepherds'). En route visit fragrant saffron fields and cricket bat factories, then continue driving towards Pahalgam, the most famous location for the Indian film industry. Admire the serene surroundings and lush Lidder river. Visit Betaab Valley situated 15 km from Pahalgam (named after Sunny Deol and Amrita Singh's debut hit film Betaab), surrounded by lush green meadows and snow-clad mountains. Also visit Aru Valley (12 km scenic village) or Chandanwari (16 km), or visit Mini-Switzerland (4 to 5 km from taxi stand by horse ride or walk). (Note: Our cabs go to Pahalgam taxi stand; union taxis/horses for Aru, Betaab, Chandanwari or Mini-Switzerland are booked locally). Return to Srinagar hotel for dinner and rest overnight."
        },
        {
          "day": 4,
          "title": "Departure from Srinagar with Cherished Memories",
          "description": "After breakfast, check out from the hotel (10:00 AM). Get transferred to Srinagar Airport or Bus Stand for your further onward destination. Your back-home trip ends with beautiful, lifelong memories of Kashmir with Crazy Tours and Travels."
        }
      ],
      "included": [
        "Total trip transportation by private Sedan Cab with professional mountain chauffeur",
        "03 Nights hotel stay in Srinagar (Standard with room heaters / Premium with central heating)",
        "03 Breakfasts and 03 Dinners at hotel",
        "01 Hour Shikara Boat Ride on Dal Lake covering floating gardens and Meena bazaar",
        "Room heaters in winter (Standard) or central heating system (Premium)",
        "Srinagar airport or bus stand pickup and drop-off",
        "All driver allowances, fuel charges, toll taxes, and parking fees",
        "24/7 Telugu Customer Care Concierge Support throughout your journey"
      ]
    },
    {
      "id": "kashmir-honeymoon-couple-4d3n",
      "slug": "kashmir-honeymoon-couple-4d3n",
      "name": "Kashmir Romantic Couple & Honeymoon Package",
      "destination": "kashmir",
      "destinationName": "Kashmir",
      "travelStyle": "honeymoon",
      "styleName": "Honeymoon & Romance",
      "days": 4,
      "duration": "4 days",
      "price": 23999,
      "priceFormatted": "from \u20b923,999",
      "groupSize": "Private Couple",
      "pace": "Easy & Romantic",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Srinagar Local \u2192 Gulmarg \u2192 Pahalgam \u2192 Departure",
      "featured": true,
      "summary": "Celebrate love in Paradise on Earth. Exclusive couple's getaway featuring private Sedan cab transfers, 1-hour romantic Shikara ride on Dal Lake, special Honeymoon Bed Decoration, snowy adventures at Gulmarg, and romantic walks in Pahalgam.",
      "overview": "Designed for newlyweds and couples seeking intimacy amidst Himalayas. Includes warm candlelit dinners, cozy heated rooms, breathtaking snow peaks, private Shikara cruise, and 24/7 Telugu customer care support.",
      "photos": [
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Srinagar, Romantic Dal Lake Shikara & Mughal Gardens",
          "description": "Warm welcome at Srinagar Airport or Bus Stand by our representative and transfer to hotel (check-in 12:00 PM). After relaxing, visit Shankaracharya Temple at 1,100 ft with panoramic views over the valley. Visit Nishat Garden ('Garden of Pleasure') built in 1633 by Asif Khan and Shalimar Garden. Explore historic Lal Chowk. In the evening, immerse yourselves in a romantic 1-hour Shikara ride on Dal Lake across floating gardens, lotus blooms, and Meena bazaar against the Zabarwan mountain backdrop. Enjoy a special romantic dinner and overnight stay in Srinagar."
        },
        {
          "day": 2,
          "title": "Gulmarg \u2014 Snow Wonderland & Gondola Cable Car (55 km)",
          "description": "After a hearty breakfast, take a scenic drive to Gulmarg (55 km, 'Meadow of Flowers'). Discover snow-covered pine slopes, world's highest golf course, and take the world's 2nd highest Gondola cable car ride (at own expense) reaching 14,000 ft Apharwat peak for majestic Himalayan vistas. (Winter note: heavy snow requires 4x4 snow-chain cab from Tangmarg at \u20b9800\u2013\u20b91,200 pp). Enjoy couple snow photography, sledging, or skiing. Return to Srinagar for dinner and cozy overnight stay."
        },
        {
          "day": 3,
          "title": "Pahalgam \u2014 Saffron Valleys & Betaab Valley Romance (87 km)",
          "description": "After breakfast, proceed to Pahalgam (87 km, 'Valley of Shepherds'). En route view purple saffron fields and willow cricket bat factories. Enjoy the serene Lidder riverbanks. Visit romantic Betaab Valley (15 km from Pahalgam, named after hit film Betaab) with pine slopes and snow-capped peaks. Explore Aru Valley (12 km) or take a romantic horse ride to Mini-Switzerland (4 to 5 km from taxi stand). (Note: Pahalgam taxi union cabs and horses are booked locally). Return to Srinagar for dinner and overnight stay."
        },
        {
          "day": 4,
          "title": "Departure with Cherished Honeymoon Memories",
          "description": "After breakfast, check out from the hotel (10:00 AM). Transfer to Srinagar Airport or Bus Stand for your journey back home, carrying eternal romantic memories of Kashmir."
        }
      ],
      "included": [
        "Total trip transportation by private Sedan Cab with dedicated mountain chauffeur",
        "03 Nights stay in Srinagar hotel (Standard with room heaters / Premium with central heating)",
        "03 Breakfasts and 03 Dinners at hotel",
        "01 Hour Romantic Shikara Boat Ride on Dal Lake",
        "Special Honeymoon Bed Decoration",
        "Room heaters in winter (Standard) or central heating system (Premium)",
        "Srinagar airport or bus stand pickup and drop-off",
        "All fuel, driver allowances, toll taxes, and parking fees",
        "24/7 Telugu Customer Care Concierge Support"
      ]
    },
    {
      "id": "kashmir-sonmarg-couple-5d4n",
      "slug": "kashmir-sonmarg-couple-5d4n",
      "name": "Kashmir Grand Couple Expedition with Sonmarg",
      "destination": "kashmir",
      "destinationName": "Kashmir",
      "travelStyle": "honeymoon",
      "styleName": "Honeymoon & Romance",
      "days": 5,
      "duration": "5 days",
      "price": 34999,
      "priceFormatted": "from \u20b934,999",
      "groupSize": "Private Couple",
      "pace": "Easy & Romantic",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Srinagar Local \u2192 Gulmarg \u2192 Sonmarg \u2192 Pahalgam Stay \u2192 Departure",
      "featured": true,
      "summary": "The ultimate 5-day Kashmir romantic voyage: includes Sonmarg 'Meadow of Gold', Gulmarg ski slopes & Gondola, Dal Lake Shikara ride, AND an overnight stay in the magical river valley of Pahalgam.",
      "overview": "Experience every crown jewel of Kashmir. Features 3 nights in Srinagar plus 1 night in picturesque Pahalgam, 4 daily breakfasts & dinners, private Sedan cab, Honeymoon bed decoration, and 24/7 Telugu customer care support.",
      "photos": [
        "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Welcome to Srinagar Local Sightseeing & Dal Lake Shikara",
          "description": "Welcome at Srinagar Airport or Bus Stand by our representative and transfer to hotel (check-in 12:00 PM). After refreshing, proceed for local sightseeing: visit Shankaracharya Temple at 1,100 ft above the main city dedicated to Lord Shiva (oldest shrine in Kashmir valley). Visit Nishat Garden ('Garden of Pleasure') built in 1633 by Asif Khan and Shalimar Garden. Walk through historic Lal Chowk shopping area. In the evening, enjoy a 1-hour Shikara ride on Dal Lake covering floating gardens, vegetable gardens, golden lake, Meena bazaar, and canals with scenic Zabarwan mountain views. Return to Srinagar hotel for dinner and rest night."
        },
        {
          "day": 2,
          "title": "Gulmarg Excursion \u2014 Meadow of Flowers & Gondola Ride (55 km)",
          "description": "After breakfast, proceed to Gulmarg (55 km, 'Meadow of Flowers') discovered by 16th-century Kashmiri poet. In winter Gulmarg turns into India's premier ski resort with one of the best ski slopes in the world and highest 18-hole golf course. Enjoy the world's 2nd highest Gondola cable car (on own expense) offering rides to Kongdori upland meadows and up to 14,000 ft Apharwat range for viewing Himalayan peaks. (Winter note: cabs go up to Tangmarg, tourists hire snow-chain 4x4 vehicles at approx \u20b9800\u2013\u20b91,200 pp). Later return to Srinagar for dinner and overnight stay in hotel."
        },
        {
          "day": 3,
          "title": "Sonmarg Excursion \u2014 Meadow of Gold & Glacier Views (82 km)",
          "description": "After breakfast, leave for Sonmarg (82 km, 'Meadow of Gold') for a day trip. The drive from Srinagar to Sonmarg is exceptionally beautiful as you pass through charming towns, villages, and paddy fields with pristine rivers flowing on one side. In Sonmarg you can do thrilling snow activities like skiing, yak ride, horse ride, and snow bike. Later drive back to Srinagar hotel for dinner and overnight rest."
        },
        {
          "day": 4,
          "title": "Pahalgam Valley of Shepherds & OVERNIGHT STAY IN PAHALGAM (87 km)",
          "description": "After breakfast, check out from the Srinagar hotel and proceed to Pahalgam (87 km, 'Valley of Shepherds') via en route sightseeing of world-famous saffron fields and willow cricket bat factories. Continue drive to Pahalgam, the most famous place for the Indian film industry. Admire the serenity and visit Betaab Valley (15 km from Pahalgam, famous for Sunny Deol's hit debut film Betaab) and Aru Valley (12 km scenic village) or Chandanwari (16 km), or visit Mini-Switzerland of India (4 to 5 km from taxi stand by horse ride or walk). (Note: Our cabs go to Pahalgam taxi stand; union taxis/horses are hired locally). Check in to Pahalgam hotel, enjoy a peaceful dinner and OVERNIGHT STAY IN PAHALGAM."
        },
        {
          "day": 5,
          "title": "Departure from Pahalgam/Srinagar",
          "description": "After breakfast, check out from the Pahalgam hotel (10:00 AM) and get transferred to Srinagar Airport or Bus Stand for your further onward destination. A memorable back-home trip ends with beautiful, lasting memories of Kashmir."
        }
      ],
      "included": [
        "Total trip transportation by private Sedan Cab with mountain chauffeur",
        "03 Nights hotel stay in Srinagar + 01 Night hotel stay in Pahalgam",
        "04 Breakfasts and 04 Dinners at hotels",
        "01 Hour Shikara Boat Ride on Dal Lake",
        "Special Honeymoon Bed Decoration",
        "Room heaters in winter (Standard) or central heating system (Premium)",
        "Srinagar airport or bus stand pickup and drop-off",
        "All driver allowances, fuel, toll taxes, and parking fees",
        "24/7 Telugu Customer Care Concierge Support"
      ]
    },
    {
      "id": "kashmir-sonmarg-group-5d4n",
      "slug": "kashmir-sonmarg-group-5d4n",
      "name": "Kashmir Grand Group Expedition with Sonmarg",
      "destination": "kashmir",
      "destinationName": "Kashmir",
      "travelStyle": "group",
      "styleName": "Bachelors & Group",
      "days": 5,
      "duration": "5 days",
      "price": 11499,
      "priceFormatted": "from \u20b911,499",
      "groupSize": "Private Bachelor Group (4-12)",
      "pace": "Active & Thrilling",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Srinagar Local \u2192 Gulmarg \u2192 Sonmarg \u2192 Pahalgam Stay \u2192 Departure",
      "featured": true,
      "summary": "Comprehensive 5-day group adventure across the whole Kashmir valley: Shankaracharya, Dal Lake Shikara, Gulmarg ski resort, Sonmarg 'Meadow of Gold', and an overnight stay in picturesque Pahalgam with private Sedan cab and 24/7 Telugu concierge.",
      "overview": "Curated for groups of friends, college buddies, and bachelors looking for complete snow immersion. Experience Dal Lake, Apharwat gondola, Sindh river valley, and Pahalgam pine forests with authentic local guidance and transparent pricing.",
      "photos": [
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Srinagar & Dal Lake Shikara Cruise",
          "description": "Arrival at Srinagar Airport or Bus Stand. Representative meeting and transfer to hotel (check-in 12:00 PM). Visit Shankaracharya Temple at 1,100 ft, Nishat Garden built in 1633, and Lal Chowk. Evening 1-hour Shikara ride on Dal Lake visiting floating markets and watching the sunset behind Zabarwan mountains. Dinner and night stay in Srinagar."
        },
        {
          "day": 2,
          "title": "Gulmarg Ski Resort & Gondola Cable Car (55 km)",
          "description": "After breakfast drive to Gulmarg (55 km, 'Meadow of Flowers'). Ride the Gondola cable car up to Kongdori and Apharwat (14,000 ft). Experience snow skiing and snow bikes. (Snow-chain vehicle from Tangmarg in winter at \u20b9800\u2013\u20b91,200 pp). Return to Srinagar for dinner and overnight stay."
        },
        {
          "day": 3,
          "title": "Sonmarg Meadow of Gold Expedition (82 km)",
          "description": "Breakfast and scenic drive to Sonmarg (82 km) along the Sindh River. Marvel at snow-clad peaks, glacier views, yak rides, and snow sledging. Return to Srinagar for dinner and overnight stay."
        },
        {
          "day": 4,
          "title": "Pahalgam Valley of Shepherds & Overnight Stay (87 km)",
          "description": "Breakfast, checkout Srinagar hotel, drive to Pahalgam visiting saffron fields and bat factories en route. Explore Betaab Valley, Aru Valley, and Mini-Switzerland. Check in to Pahalgam hotel, dinner, and peaceful overnight stay."
        },
        {
          "day": 5,
          "title": "Departure from Pahalgam / Srinagar",
          "description": "Breakfast, 10:00 AM hotel checkout, transfer to Srinagar Airport or Bus Stand for departure with unforgettable memories."
        }
      ],
      "included": [
        "Total trip transportation by private Sedan Cab with mountain chauffeur",
        "03 Nights hotel stay in Srinagar + 01 Night hotel stay in Pahalgam",
        "04 Breakfasts and 04 Dinners at hotels",
        "01 Hour Shikara Boat Ride on Dal Lake",
        "Room heaters in winter (Standard) or central heating system (Premium)",
        "Srinagar airport or bus stand pickup and drop-off",
        "All driver allowances, fuel, toll taxes, and parking fees",
        "24/7 Telugu Customer Care Concierge Support"
      ]
    },
    {
      "id": "kashmir-paradise",
      "slug": "kashmir-paradise",
      "name": "Kashmir Paradise: Srinagar, Gulmarg & Pahalgam",
      "destination": "kashmir",
      "destinationName": "Kashmir",
      "travelStyle": "honeymoon",
      "styleName": "Honeymoon & Romance",
      "days": 6,
      "duration": "6 days",
      "price": 32500,
      "priceFormatted": "from \u20b932,500",
      "groupSize": "Private Couple",
      "pace": "Active & Thrilling",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Kashmir Circuit",
      "featured": true,
      "summary": "Stay in an authentic carved cedar houseboat on Dal Lake, ride the world's second-highest cable car at Gulmarg Gondola, and wander pine valleys in Pahalgam.",
      "overview": "Discover the true 'Paradise on Earth'. Glide on Dal Lake aboard a decorated Shikara, ascend above the clouds at 13,780 feet on the Gulmarg Gondola, and stroll through saffron fields and roaring Lidder river cascades.",
      "photos": [
        "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrive Srinagar & Dal Lake Shikara Ride",
          "description": "Warm greeting at Srinagar Airport. Transfer to your luxury houseboat on Dal Lake. In the evening, enjoy a 1-hour relaxing Shikara ride past floating lotus gardens and char chinar."
        },
        {
          "day": 2,
          "title": "Srinagar Mughal Gardens & Old City",
          "description": "Explore royal Mughal terraced gardens: Nishat Bagh (Garden of Pleasure) and Shalimar Bagh (Abode of Love). Visit the historic Shankaracharya Hill Temple for panoramic views."
        },
        {
          "day": 3,
          "title": "Gulmarg Meadow of Flowers & Gondola Ride",
          "description": "Drive through willow and apple orchards to Gulmarg at 8,690 ft. Board the world-famous Gulmarg Gondola Phase 1 & Phase 2 up to Kongdoori and Apharwat Peak at 13,780 ft."
        },
        {
          "day": 4,
          "title": "Pahalgam Valley of Shepherds via Pampore",
          "description": "Drive to Pahalgam along the Lidder River. Stop at Pampore saffron fields and Awantipora temple ruins. Check in to river-view hotel in Pahalgam and stroll along Lidder banks."
        },
        {
          "day": 5,
          "title": "Betaab Valley, Aru & Chandanwari",
          "description": "Take local mountain union cabs to explore iconic Betaab Valley (famed for Bollywood movies), tranquil Aru Valley, and Chandanwari snow point."
        },
        {
          "day": 6,
          "title": "Kashmir Crafts & Airport Departure",
          "description": "Drive back to Srinagar. Shop for authentic Pashmina shawls, walnut wood carvings, and pure saffron before flight drop-off."
        }
      ],
      "included": [
        "Private AC Chauffeur Vehicle for all airport and intercity transfers",
        "1 Night Luxury Houseboat on Dal Lake + 4 Nights 4-Star Resort Stays",
        "Daily Breakfasts and Dinners (Authentic Wazwan / North Indian options)",
        "1-Hour Sunset Shikara Ride on Dal Lake",
        "Toll fees, parking charges, fuel and driver allowances",
        "24/7 Telugu Customer Care Support (\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 \u0c15\u0c38\u0c4d\u0c1f\u0c2e\u0c30\u0c4d \u0c15\u0c47\u0c30\u0c4d)"
      ]
    },
    {
      "id": "goa-bachelors-party-4d3n",
      "slug": "goa-bachelors-party-4d3n",
      "name": "Goa Bachelors Beach, Watersports & Nightlife Bash",
      "destination": "goa",
      "destinationName": "Goa",
      "travelStyle": "group",
      "styleName": "Bachelors & Group",
      "days": 4,
      "duration": "4 days",
      "price": 7999,
      "priceFormatted": "from \u20b97,999",
      "groupSize": "Private Bachelor Group (4-12)",
      "pace": "Active & Thrilling",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "North Goa Beaches \u2192 Calangute Watersports \u2192 Anjuna & Chapora \u2192 Mandovi Sunset Cruise",
      "featured": true,
      "summary": "The ultimate party and watersports getaway crafted for bachelor groups and friends squads. Thrill with a 5-in-1 watersports combo, chill at Baga and Anjuna beach shacks, visit Chapora Fort (Dil Chahta Hai), and party aboard a sunset Mandovi DJ cruise.",
      "overview": "Designed for maximum energy, seaside fun, and freedom. Includes airport/railway transfers, lively beach resort with pool, watersports combo, sunset party cruise, and dedicated 24/7 Telugu customer care support.",
      "photos": [
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Goa, Resort Check-in & Baga Beach Sunset",
          "description": "Arrive at Goa Airport (Mopa / Dabolim) or Thivim/Madgaon railway station. Our driver will meet you and transfer you to your lively North Goa resort. Check in (1:00 PM), relax by the swimming pool, and head out to Baga Beach in the evening. Experience beach shacks, chilled vibes, and explore the famous Tito's nightlife lane."
        },
        {
          "day": 2,
          "title": "Adrenaline Day: 5-in-1 Watersports Combo & Calangute Beach",
          "description": "After breakfast, head to Calangute beach for high-octane water adventures. Experience the thrilling 5-in-1 combo: soar with Parasailing, speed across waves on a Jet Ski, enjoy the bumpy Banana ride, test your balance on the Bumper ride, and speed boat cruise. Spend the afternoon swimming, sipping coconut water, and lounging by the beach. Evening free for party and shacks."
        },
        {
          "day": 3,
          "title": "Fort Chapora, Vagator & Sunset Mandovi River DJ Cruise",
          "description": "After breakfast, drive to Chapora Fort, the iconic 'Dil Chahta Hai' viewpoint overlooking Vagator Beach and the Arabian Sea. Visit Anjuna Beach and vibrant flea markets. In the late afternoon, head to Panaji for a 1-hour sunset cruise along the Mandovi River featuring energetic Bollywood DJ tracks, Goan folk dances, and sparkling river views. Enjoy dinner at Panaji or Candolim."
        },
        {
          "day": 4,
          "title": "Farewell Goa Departure",
          "description": "Enjoy breakfast at the resort. Spend your morning shopping for cashew nuts, feni, and souvenirs. Check out at 11:00 AM. Our cab transfers you to Goa airport or railway station for your journey back home with unforgettable memories."
        }
      ],
      "included": [
        "Private AC vehicle transfers for airport/station pickup and drops",
        "03 Nights stay at premium resort in North Goa (walking distance to beach, with swimming pool)",
        "03 Delicious daily breakfast buffets",
        "5-in-1 Watersports Package at Calangute/Baga (Parasailing, Jet Ski, Banana Ride, Bumper Ride, Speed Boat with safety gears)",
        "1-Hour Sunset Cruise on River Mandovi with DJ music and cultural performances",
        "Sightseeing tour covering Calangute, Baga, Anjuna, Vagator, and Chapora Fort",
        "All toll taxes, parking fees, and driver allowances",
        "24/7 Telugu Customer Care Concierge Support"
      ]
    },
    {
      "id": "goa-romantic-honeymoon-4d3n",
      "slug": "goa-romantic-honeymoon-4d3n",
      "name": "Goa Luxury Romantic Honeymoon & Sunset Escapade",
      "destination": "goa",
      "destinationName": "Goa",
      "travelStyle": "honeymoon",
      "styleName": "Honeymoon & Romance",
      "days": 4,
      "duration": "4 days",
      "price": 21999,
      "priceFormatted": "from \u20b921,999",
      "groupSize": "Private Couple",
      "pace": "Easy & Romantic",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Resort Check-in \u2192 Candlelight Dinner \u2192 Fontainhas Latin Quarter \u2192 Mandovi Cruise \u2192 Departure",
      "featured": true,
      "summary": "Celebrate newlywed bliss in tropical paradise. Private AC Sedan transfers, 4-star beachside resort stay with pool, romantic candlelight beach dinner with cake and flower bed decoration, vibrant Fontainhas Latin quarter photo stroll, and sunset Mandovi river cruise.",
      "overview": "Curated exclusively for couples seeking romance, privacy, and coastal elegance. Enjoy slow mornings, private beach walks, candlelit beach dinners under swaying palms, and 24/7 Telugu customer care support.",
      "photos": [
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Welcome to Goa, Resort Check-in & Romantic Beach Evening",
          "description": "Upon arrival at Goa Airport or Railway Station, meet your private chauffeur in an air-conditioned sedan. Transfer to your 4-star beach resort. Check in (1:00 PM) to find your room dressed with special Honeymoon Bed Decoration. Spend a leisurely afternoon lounging by the swimming pool or strolling along the beach. Evening at leisure."
        },
        {
          "day": 2,
          "title": "Aguada Fort, Sinquerim & Romantic Candlelight Beach Dinner",
          "description": "After a relaxed breakfast, visit historic Fort Aguada and its 17th-century Portuguese lighthouse overlooking the vast Arabian Sea. Walk down to Sinquerim Beach for serene coastal views. Return to the resort for an afternoon couple spa or pool time. In the evening, enjoy a magical 3-course Candlelight Dinner on the beach with celebration cake under the starlit sky."
        },
        {
          "day": 3,
          "title": "Fontainhas Latin Quarter Heritage Walk & Sunset River Cruise",
          "description": "Breakfast at the resort. Drive to Panaji's enchanting Fontainhas Latin Quarter, Asia's only preserved Portuguese residential area. Capture gorgeous couple photos against yellow, blue, and terracotta heritage villas. Visit the Church of Our Lady of the Immaculate Conception. In the late afternoon, board a luxury Sunset Catamaran Cruise on the Mandovi River with Goan folk dances and sparkling golden skies."
        },
        {
          "day": 4,
          "title": "Breakfast & Sweet Goodbye to Goa",
          "description": "Enjoy your final leisurely breakfast at the resort. Take a morning dip in the pool or pick up traditional Goan bebinca and cashews. Checkout at 11:00 AM. Your private chauffeur drops you at Goa Airport or Railway Station for your journey home."
        }
      ],
      "included": [
        "Private AC Sedan Cab for airport/railway transfers and curated sightseeing",
        "03 Nights luxury accommodation at 4-Star beach resort with pool",
        "03 Delicious buffet breakfasts for couple",
        "01 Romantic Candlelight Dinner setup by the beachside with celebration cake",
        "Special Honeymoon Bed Decoration with fresh flowers",
        "02 Tickets for Sunset Mandovi River Cruise with cultural shows",
        "Sightseeing to Aguada Fort, Sinquerim Beach, Fontainhas Latin Quarter & Miramar Beach",
        "All driver allowances, fuel, toll taxes, and parking charges",
        "24/7 Telugu Customer Care Concierge Support"
      ]
    },
    {
      "id": "goa-grand-family-heritage-5d4n",
      "slug": "goa-grand-family-heritage-5d4n",
      "name": "Goa Grand Heritage, Waterfalls & Coastal Family Holiday",
      "destination": "goa",
      "destinationName": "Goa",
      "travelStyle": "group",
      "styleName": "Bachelors & Group",
      "days": 5,
      "duration": "5 days",
      "price": 11499,
      "priceFormatted": "from \u20b911,499",
      "groupSize": "Private Family (3-8)",
      "pace": "Moderate & Balanced",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "North Goa Beaches \u2192 Dudhsagar Falls & Spices \u2192 Old Goa Churches \u2192 Miramar & Cruise \u2192 Departure",
      "featured": true,
      "summary": "A wholesome 5-day family escape blending UNESCO world heritage cathedrals, the thundering 4-tiered Dudhsagar Waterfalls via open jungle jeep safari, aromatic spice plantation with traditional Goan buffet lunch, sunny beaches, and sunset river cruise.",
      "overview": "Curated with comfort, culture, and safety for families of all generations. Dedicated private AC vehicle throughout, family resort with swimming pool, all entry tickets and safari arranged, and 24/7 Telugu customer care support.",
      "photos": [
        "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1587974928442-77dc3e0dba72?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Welcome to Goa & Relaxed Beach Resort Check-in",
          "description": "Meet your private chauffeur at Goa Airport or Railway Station. Enjoy a smooth drive to your family resort. Check in (1:00 PM), unwind in spacious rooms, and spend a relaxing afternoon swimming in the pool. Evening walk to Calangute Beach to watch the ocean sunset and enjoy seaside family dining."
        },
        {
          "day": 2,
          "title": "Dudhsagar Waterfalls Jeep Safari & Spice Plantation Feast",
          "description": "Early morning drive to Kulem for the thrilling open-top Jeep Safari through Bhagwan Mahavir Wildlife Sanctuary to the base of Dudhsagar Waterfalls ('Sea of Milk'). Marvel at the 4-tiered cascading water amidst dense jungle. Later visit Sahakari Spice Plantation: greeted with flower garlands and herbal tea, take a guided tour of vanilla, cardamom, and cinnamon groves, followed by a sumptuous traditional Goan buffet lunch. Return to resort in evening."
        },
        {
          "day": 3,
          "title": "Old Goa UNESCO Heritage Churches & Mandovi River Cruise",
          "description": "After breakfast, visit UNESCO World Heritage sites in Old Goa: the 16th-century Basilica of Bom Jesus housing the sacred relics of St. Francis Xavier, and the grand Se Cathedral (largest church in Asia). Visit Mangueshi Temple. In the afternoon, head to Miramar Beach and Dona Paula viewpoint. End the evening with a joyous 1-hour Mandovi River Sunset Cruise featuring live folk music, Portuguese Corridinho dance, and panoramic views of Panaji."
        },
        {
          "day": 4,
          "title": "North Goa Coastal Day: Fort Aguada & Baga Beach Leisure",
          "description": "After breakfast, visit historic Fort Aguada and its historic lighthouse. Continue to Sinquerim Beach. Spend the afternoon at Baga Beach where family members can relax on deck chairs, try optional gentle banana boat rides, or explore beachside cafes. Evening shopping in Panaji or Candolim market."
        },
        {
          "day": 5,
          "title": "Farewell Goa Departure",
          "description": "Enjoy breakfast at the resort. Check out at 11:00 AM. Your private AC vehicle transfers your family to Goa Airport or Railway Station with happy hearts and cherished family memories."
        }
      ],
      "included": [
        "Dedicated AC vehicle for all 5 days with chauffeur",
        "04 Nights accommodation in family-friendly resort",
        "04 Daily breakfast buffets at resort",
        "Dudhsagar Falls jeep safari tickets & forest entry permissions",
        "Sahakari Spice Plantation entry, guided tour & traditional Goan buffet lunch",
        "UNESCO Old Goa churches tour (Basilica of Bom Jesus & Se Cathedral)",
        "Sunset Mandovi River Cruise family tickets",
        "Calangute, Baga, Miramar Beach & Dona Paula viewpoint tours",
        "All fuel, toll taxes, parking fees, and driver allowances",
        "24/7 Telugu Customer Care Concierge Support"
      ]
    },
    {
      "id": "goa-south-goa-serenity-4d3n",
      "slug": "goa-south-goa-serenity-4d3n",
      "name": "South Goa Serenity & Beach Resort Retreat",
      "destination": "goa",
      "destinationName": "Goa",
      "travelStyle": "honeymoon",
      "styleName": "Honeymoon & Romance",
      "days": 4,
      "duration": "4 days",
      "price": 13999,
      "priceFormatted": "from \u20b913,999",
      "groupSize": "Private Couple",
      "pace": "Easy & Romantic",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Palolem Crescent Beach \u2192 Cabo de Rama Cliffs \u2192 Agonda & Dolphin Safari \u2192 Departure",
      "featured": false,
      "summary": "Escape to the tranquil, unspoiled shores of South Goa. Experience powdery white sands at Palolem, dramatic panoramic sea cliffs at Cabo de Rama Fort, peaceful Agonda beach, and an early morning boat cruise for dolphin spotting.",
      "overview": "Ideal for couples, solo travelers, and peace-seekers desiring calm seas, fresh organic seafood shacks, yoga vibes, and heritage fort vistas away from the bustling crowds.",
      "photos": [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in South Goa & Palolem Crescent Beach Leisure",
          "description": "Arrive in Goa and transfer to your peaceful South Goa resort. Check in (1:00 PM) and head to crescent-shaped Palolem Beach, fringed by leaning coconut palms and calm blue waters. Relax on a beach bed, sample fresh grilled prawns, and enjoy the golden sunset."
        },
        {
          "day": 2,
          "title": "Morning Dolphin Safari & Agonda Beach Peace",
          "description": "Start early with a boat ride from Palolem into the Arabian Sea to watch playful wild dolphins leaping in morning waters. Afterward, head to nearby Agonda Beach, voted among Asia's top beaches for peace and cleanliness. Enjoy beach yoga, relaxed cafe breakfasts, and pristine seclusion."
        },
        {
          "day": 3,
          "title": "Cabo de Rama Fort Sea Cliffs & Colva Beach Stroll",
          "description": "After breakfast, drive along scenic coastal roads to the ancient Cabo de Rama Fort. Walk along the ramparts for dramatic panoramic views of crashing ocean waves. Explore secluded Cabo de Rama beach. In the afternoon, visit Colva and Benaulim beaches with traditional fishing boats and Goan culture."
        },
        {
          "day": 4,
          "title": "Breakfast & Departure from South Goa",
          "description": "Enjoy breakfast overlooking palm trees. Check out at 11:00 AM. Our chauffeur transfers you to Goa Airport or Railway Station for your departure, refreshed by South Goa's serenity."
        }
      ],
      "included": [
        "Private AC vehicle for all transfers and South Goa sightseeing",
        "03 Nights stay at South Goa resort with pool",
        "03 Daily buffet breakfasts",
        "Morning boat cruise for dolphin sighting",
        "Cabo de Rama Fort and secluded pebble beach tour",
        "Sightseeing in Palolem, Agonda, Colva, and Benaulim",
        "All fuel, toll taxes, parking fees, and driver allowances",
        "24/7 Telugu Customer Care Concierge Support"
      ]
    },
    {
      "id": "goa-getaway",
      "slug": "goa-getaway",
      "name": "Goa Getaway: Beaches, Heritage & Sunset Cruise",
      "destination": "goa",
      "destinationName": "Goa",
      "travelStyle": "honeymoon",
      "styleName": "Honeymoon & Romance",
      "days": 4,
      "duration": "4 days",
      "price": 16999,
      "priceFormatted": "from \u20b916,999",
      "groupSize": "Private Couple",
      "pace": "Moderate & Balanced",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Goa Circuit",
      "featured": true,
      "summary": "Unwind at golden palm-fringed sands, experience thrilling water sports in Calangute, explore colorful Latin quarters of Fontainhas, and enjoy a sunset catamaran cruise.",
      "overview": "The quintessential tropical holiday. Bask in warm Arabian Sea waters, enjoy fresh seafood shacks with live acoustic music, uncover Portuguese colonial villas in Panaji, and cruise under golden twilight skies.",
      "photos": [
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrive Goa, Resort Check-in & Beach Sunset",
          "description": "Private cab pickup from Mopa / Dabolim Airport or Thivim Station. Settle into beach resort, enjoy pool access, and take an evening sunset walk on Calangute Beach."
        },
        {
          "day": 2,
          "title": "North Goa Forts, Watersports & Vagator Cliffs",
          "description": "Explore 17th-century Portuguese Aguada Fort and lighthouse. Head to Baga for parasailing, jet ski, and banana boat rides. Catch sunset from Vagator cliff-top cafes."
        },
        {
          "day": 3,
          "title": "Old Goa Churches, Fontainhas & Sunset Cruise",
          "description": "Discover UNESCO Basilica of Bom Jesus, Se Cathedral, and walk through vibrant pastel Portuguese homes in Fontainhas. In the evening, enjoy sunset cruise on Mandovi River with Goan folk dances."
        },
        {
          "day": 4,
          "title": "Morning Beach Stroll, Cashew Shopping & Departure",
          "description": "Leisurely breakfast, swimming pool swim, shop for famous Goan feni, spices and roasted cashews before cab transfer to airport."
        }
      ],
      "included": [
        "Private AC Sedan for airport transfers & 2 full-day sightseeing",
        "3 Nights Stay in Verified 4-Star Beach Resort with Pool",
        "Daily Buffet Breakfast",
        "1-Hour Sunset Cruise Ticket on Mandovi River",
        "Driver allowances, tolls, fuel and parking fees",
        "24/7 Telugu Customer Care Support (\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 \u0c15\u0c38\u0c4d\u0c1f\u0c2e\u0c30\u0c4d \u0c15\u0c47\u0c30\u0c4d)"
      ]
    },
    {
      "id": "manali-bachelors-3d2n",
      "slug": "manali-bachelors-3d2n",
      "name": "Kullu-Manali Bachelors Group Package",
      "destination": "manali",
      "destinationName": "Kullu-Manali",
      "travelStyle": "group",
      "styleName": "Bachelors & Group",
      "days": 3,
      "duration": "3 days",
      "price": 6999,
      "priceFormatted": "from \u20b96,999",
      "groupSize": "Private Bachelor Group (4-12)",
      "pace": "Active & Thrilling",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Kullu-Manali Circuit",
      "featured": true,
      "summary": "Designed exclusively for bachelors and friends squads: Delhi-Manali round trip bus tickets, 2 nights premium hotel, personal Swift taxi, snow point at Atal Tunnel & Sissu, and thrilling Beas river rafting.",
      "overview": "Escape to the snow-draped Himalayas with your squad! Our Kullu-Manali Bachelors Group Package is engineered for maximum adventure and zero stress. From round-trip Volvo coach transfers starting from Delhi to a dedicated personal Swift cab throughout your 3 days, enjoy snow adventures across Atal Tunnel, explore Old Manali nightlife, and conquer Beas river rapids.",
      "photos": [
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Manali Local Sight Seeing",
          "description": "Arrival at Manali Bus Station, meet your friendly cab driver and transfer to the hotel. Check-in time at the hotel 12 noon (early check-in depends on availability). After check-in, freshen up and then head out to explore Manali Local Sight Seeing. After exploring get back to hotel for dinner and rest overnight."
        },
        {
          "day": 2,
          "title": "Snow Point - Atal Tunnel & Solang Valley",
          "description": "Wake up in the morning, after having breakfast, it\u2019s time to explore Snow Point! Today we are going to explore Solang Valley, Atal Tunnel and Sissu or Koksar in Lahaul Valley. Here tourists can enjoy adventure activities and experience breathtaking snow-capped mountain views. After exploring head back to the hotel, enjoy delicious dinner and rest overnight."
        },
        {
          "day": 3,
          "title": "Kullu & Adventure Activities \u2014 Return Bus",
          "description": "After having breakfast check out from the hotel. Tourists can enjoy thrilling adventure activities like Paragliding & River Rafting. Post activities, visit Vaishno Devi Temple and historic Naggar Castle. Then get back to Manali and catch your bus at Manali Bus Station."
        }
      ],
      "included": [
        "Delhi to Manali Round Trip Bus Tickets (Volvo/AC Coach)",
        "Two Nights Hotel Stay in Manali (Premium Hotel)",
        "Two Breakfast and Two Dinners (One Time Non-Veg Dinner included)",
        "Three Days Sight Seeing (Manali, Atal Tunnel, Kullu)",
        "Three Days Personal Taxi (Swift)",
        "24/7 Telugu Customer Care Support"
      ]
    },
    {
      "id": "manali-family-3d2n",
      "slug": "manali-family-3d2n",
      "name": "Kullu-Manali Family Group Package",
      "destination": "manali",
      "destinationName": "Kullu-Manali",
      "travelStyle": "group",
      "styleName": "Bachelors & Group",
      "days": 3,
      "duration": "3 days",
      "price": 7499,
      "priceFormatted": "from \u20b97,499",
      "groupSize": "Private Family (3-8)",
      "pace": "Moderate & Balanced",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Kullu-Manali Circuit",
      "featured": true,
      "summary": "A delightful mountain getaway for families: Round-trip Volvo tickets from Delhi, premium family accommodation, delicious breakfast and dinners with one-time non-veg dinner, dedicated Swift taxi, and 24/7 Telugu support.",
      "overview": "Make cherished memories with your loved ones among the snowy slopes of Manali. We provide comfortable family-oriented hotel properties, warm meals including special non-veg dinners, and safe, well-timed transfers in a personal Swift cab. From ancient temples to the snow excitement at Atal Tunnel and peaceful heritage at Naggar Castle, your family is cared for every step of the journey.",
      "photos": [
        "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Manali Local Sight Seeing",
          "description": "Arrival at Manali Bus Station, meet your cab driver and transfer comfortably to your hotel. Check-in time 12 noon (early check-in subject to availability). Relax and freshen up, then explore Manali Local Sight Seeing: Hidimba Temple, Mall Road, Tibetan Monastery, Old Manali, and Van Vihar. Return to hotel for delicious dinner and rest."
        },
        {
          "day": 2,
          "title": "Snow Point - Atal Tunnel & Solang Valley",
          "description": "After a hearty breakfast, head out to explore Snow Point! Explore Solang Valley, cross the Atal Tunnel, and reach Sissu or Koksar. Experience snow-capped mountain views, take memorable family photos in the snow, and enjoy safe activities. Return to the hotel for a piping hot dinner."
        },
        {
          "day": 3,
          "title": "Kullu Sightseeing & Adventure \u2014 Return Bus",
          "description": "After breakfast, check out from the hotel. Visit historic Naggar Castle and the sacred Vaishno Devi Temple in Kullu. Family members wishing to experience Paragliding or River Rafting can enjoy them on a direct payment basis. Transfer to Manali Bus Station to board your return bus to Delhi."
        }
      ],
      "included": [
        "Delhi to Manali Round Trip Bus Tickets (Volvo AC Coach)",
        "Two Nights Hotel Stay in Manali (Premium Hotel)",
        "Two Breakfast and Two Dinners (One Time Non-Veg Dinner included)",
        "Three Days Sight Seeing (Manali, Atal Tunnel, Kullu)",
        "Three Days Personal Taxi (Swift)",
        "24/7 Telugu Customer Care Support"
      ]
    },
    {
      "id": "manali-honeymoon-3d2n",
      "slug": "manali-honeymoon-3d2n",
      "name": "Kullu-Manali Honeymoon Package",
      "destination": "manali",
      "destinationName": "Kullu-Manali",
      "travelStyle": "honeymoon",
      "styleName": "Honeymoon & Romance",
      "days": 3,
      "duration": "3 days",
      "price": 17999,
      "priceFormatted": "from \u20b917,999",
      "groupSize": "Private Couple",
      "pace": "Easy & Romantic",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Kullu-Manali Circuit",
      "featured": true,
      "summary": "The ultimate romantic Himalayan escape: Delhi-Manali round trip tickets, 2 nights premium stay, private Swift cab, snow points, plus One Night Candle Light Dinner, Honeymoon Bed Decoration with Cake, and 24/7 Telugu care.",
      "overview": "Celebrate your love amidst misty cedar forests and snow-capped Himalayan peaks. Created exclusively for newlyweds and couples, this package includes a private Swift car for intimate sightseeing, cozy hotel stays, and unforgettable romantic highlights: a special candle light dinner, exquisite honeymoon bed decoration, and celebratory cake in your room.",
      "photos": [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Manali Local Sight Seeing & Romantic Stroll",
          "description": "Arrival at Manali Bus Station where your private chauffeur welcomes you. Transfer to the hotel. Check-in time 12 noon (early check-in subject to availability). Freshen up in your honeymoon room, then explore Manali Local Sight Seeing: Hidimba Temple nestled in towering pines, Mall Road hand-in-hand stroll, Tibetan Monastery, Old Manali cozy cafes, and Van Vihar. Return to hotel for dinner and restful night."
        },
        {
          "day": 2,
          "title": "Snow Point - Atal Tunnel & Candle Light Celebration",
          "description": "Wake up to crisp mountain views. After breakfast, head out for Snow Point! Explore Solang Valley, drive through the historic Atal Tunnel, and visit Sissu or Koksar snow fields. Play in the snow and marvel at the Himalayan panorama. In the evening, head back to your hotel for the highlight: Romantic Candle Light Dinner, Honeymoon Bed Decoration, and celebratory Cake."
        },
        {
          "day": 3,
          "title": "Kullu Heritage & Scenic Drive \u2014 Return Bus",
          "description": "After having breakfast, check out from the hotel. Visit the romantic Naggar Castle with its timeless wooden architecture and Kullu valley balcony view. Visit Vaishno Devi temple. Optional adventure sports (tandem paragliding & rafting) available. Later, chauffeur drops you at Manali Bus Station to catch your return bus."
        }
      ],
      "included": [
        "Delhi to Manali Round Trip Bus Tickets (Volvo AC Coach)",
        "Two Nights Hotel Stay in Manali (Premium Hotel)",
        "Two Breakfast and Two Dinners (One Time Non-Veg Dinner included)",
        "Three Days Sight Seeing (Manali, Atal Tunnel, Kullu)",
        "Three Days Personal Taxi (Swift) dedicated for couple",
        "One Night Candle Light Dinner",
        "Honeymoon Bed Decoration with Cake",
        "24/7 Telugu Customer Care Support"
      ]
    },
    {
      "id": "kasol-manali-bachelors-4d3n",
      "slug": "kasol-manali-bachelors-4d3n",
      "name": "Kasol-Manali Bachelors Group Package",
      "destination": "manali",
      "destinationName": "Kullu-Manali",
      "travelStyle": "group",
      "styleName": "Bachelors & Group",
      "days": 4,
      "duration": "4 days",
      "price": 8499,
      "priceFormatted": "from \u20b98,499",
      "groupSize": "Private Bachelor Group (4-12)",
      "pace": "Active & Thrilling",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Kullu-Manali Circuit",
      "featured": true,
      "summary": "The definitive Himachal group adventure! 4 Days and 3 Nights spanning Manali snow points, Atal Tunnel, Beas river rafting, and the bohemian cafe culture of Kasol and holy Manikaran hot springs. Dedicated Swift cab and Delhi Volvo included.",
      "overview": "Why stop at Manali when you can experience the bohemian paradise of Parvati Valley too? This 4-day extravaganza takes your crew through Hidimba Temple, Solang snow peaks, Atal Tunnel to Sissu, white water rafting in Kullu, and on to Kasol \u2014 celebrated as the \"Mini Israel of India\". Stay in cozy mountain hotels or riverside camps, explore Manikaran Sahib Gurudwara and its natural healing hot sulphur springs, and create legendary travel stories.",
      "photos": [
        "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Manali Local Sight Seeing",
          "description": "Arrival at Manali Bus Station, meet your cab driver and transfer to hotel. Check-in time 12 noon (early check-in depends on availability). After check-in, freshen up and go to Manali Local Sight Seeing: Hidimba Temple, Mall Road, Monastery, Old Manali, and Van Vihar. Return to hotel for dinner and rest overnight."
        },
        {
          "day": 2,
          "title": "Snow Point - Atal Tunnel & Solang Valley",
          "description": "Wake up in the morning, after breakfast it is time to explore Snow Point! Explore Solang Valley, pass through Atal Tunnel, and reach Sissu or Koksar in Lahaul Valley. Tourists can enjoy adventure activities and experience breathtaking snow-capped mountain views. Head back to hotel for dinner and rest."
        },
        {
          "day": 3,
          "title": "Kullu Adventure Activities to Kasol",
          "description": "After having breakfast check out from the hotel. Tourists can enjoy thrilling adventure activities: Paragliding & River Rafting in Kullu. Post activities, visit Vaishno Devi Temple and Naggar Castle. Afterwards, head out to Kasol Hotel or Riverside Camps, enjoy delicious dinner, bonfire vibes, and rest overnight."
        },
        {
          "day": 4,
          "title": "Kasol - Manikaran & Return Bus Station",
          "description": "After having breakfast, check out from the hotel / camps. Head out to explore Kasol, known as the \"Mini Israel of India\", famous for riverside cafes and mountain culture. Visit Manikaran Temple dedicated to Lord Shiva and Parvati, and the historic Manikaran Sahib Gurudwara where natural hot springs offer medicinal benefits. Later, head back to Manali and catch your bus at Manali Bus Station."
        }
      ],
      "included": [
        "Delhi to Manali Round Trip Bus Tickets (Volvo AC Coach)",
        "Two Nights Hotel Stay in Manali + One Night Stay in Kasol (or 3 Nights Manali)",
        "Three Breakfast and Three Dinners (One Time Non-Veg Dinner included)",
        "Four Days Sight Seeing (Manali, Atal Tunnel, Kullu, Kasol & Manikaran)",
        "Four Days Personal Taxi (Swift)",
        "24/7 Telugu Customer Care Support",
        "Optional Luxury Camps in Kasol (+\u20b9899/- extra cost)"
      ]
    },
    {
      "id": "kasol-manali-camping-4d3n",
      "slug": "kasol-manali-camping-4d3n",
      "name": "Kasol-Manali Riverside Camping & Adventure Package",
      "destination": "manali",
      "destinationName": "Kullu-Manali",
      "travelStyle": "group",
      "styleName": "Bachelors & Group",
      "days": 4,
      "duration": "4 days",
      "price": 8499,
      "priceFormatted": "from \u20b98,499",
      "groupSize": "Private Bachelor Group (4-12)",
      "pace": "Active & Thrilling",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Kullu-Manali Circuit",
      "featured": true,
      "summary": "The ultimate Kasol-Manali camping fusion: Delhi-Manali Volvo AC bus, 2 nights hotel in Manali, 1 night luxury Swiss riverside camp in Kasol with music & bonfire, Atal Tunnel snow points, and Beas river rafting.",
      "overview": "Combine high-altitude snow thrills with bohemian valley vibes! Spend two days conquering Solang Valley, Atal Tunnel snow points, and Beas white water rapids before moving into Kasol for an unforgettable riverside camping night under starlit skies.",
      "photos": [
        "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Manali Local Sight Seeing",
          "description": "Arrival at Manali Bus Station, private Swift cab greeting and hotel check-in. Explore Hidimba Temple, Mall Road, Tibetan Monastery, Old Manali, and Van Vihar before an evening dinner."
        },
        {
          "day": 2,
          "title": "Snow Point - Atal Tunnel & Solang Valley",
          "description": "Head out after hot breakfast to Solang Valley for ski slopes, quad biking, and paragliding. Cross the world-record Atal Tunnel into Sissu waterfalls and snowfields in Lahaul Valley."
        },
        {
          "day": 3,
          "title": "Kullu Rafting & Drive to Kasol Riverside Camp",
          "description": "Check out from Manali hotel and drive along Beas River for thrilling Grade III rafting in Kullu. Afternoon drive into mystical Parvati Valley to check in at Kasol Riverside Camp with acoustic music & campfire night."
        },
        {
          "day": 4,
          "title": "Kasol, Manikaran Gurudwara & Departure",
          "description": "Wake up to misty pine river views. Trek to Chalal village, visit holy Manikaran Sahib natural hot sulphur springs, explore Kasol cafes, and transfer back to Manali bus station for Volvo return."
        }
      ],
      "included": [
        "Delhi to Manali Round Trip Bus Tickets (Volvo AC)",
        "Two Nights Hotel Stay in Manali (Premium Hotel)",
        "One Night Luxury Riverside Camp Stay in Kasol",
        "Three Breakfasts and Three Dinners (One Time Non-Veg Dinner Included)",
        "Four Days Sightseeing: Manali, Atal Tunnel, Kullu & Kasol",
        "Four Days Dedicated Swift Taxi for transfers & sightseeing",
        "24/7 Telugu Customer Care Support (\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 \u0c15\u0c38\u0c4d\u0c1f\u0c2e\u0c30\u0c4d \u0c15\u0c47\u0c30\u0c4d)"
      ]
    },
    {
      "id": "manali-family-snow-5d4n",
      "slug": "manali-family-snow-5d4n",
      "name": "Manali Family Snow Vacation & Solang Valley",
      "destination": "manali",
      "destinationName": "Kullu-Manali",
      "travelStyle": "adventure",
      "styleName": "Adventure & Snow",
      "days": 5,
      "duration": "5 days",
      "price": 19500,
      "priceFormatted": "from \u20b919,500",
      "groupSize": "Private Family (3-8)",
      "pace": "Moderate & Balanced",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Kullu-Manali Circuit",
      "featured": true,
      "summary": "A memorable mountain vacation for families: Play in the snow at Solang Valley, ride alpine cable cars, visit ancient wooden temples, explore Naggar heritage castle, and stay in deluxe family suites.",
      "overview": "Curated specially for multi-generational families with kids and seniors. Enjoy slow, comfortable travel with private Swift/Innova cab, verified sanitized family rooms, child-safe snow points, and dedicated 24/7 Telugu care.",
      "photos": [
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Volvo Arrival, Resort Check-in & Mall Road Leisure",
          "description": "Morning private cab pickup at Manali Private Volvo stand. Check-in to your premium family mountain-view suite, relax with welcome tea, and explore Mall Road and Van Vihar pine sanctuary at a gentle pace."
        },
        {
          "day": 2,
          "title": "Solang Valley Snow Fun & High Altitude Cable Car",
          "description": "Full-day family excitement in Solang Valley. Enjoy thrilling cable car ropeway flights with 360-degree views of snow peaks, snow sledding, yak rides for kids, and warm Maggi and hot chocolate at alpine cafes."
        },
        {
          "day": 3,
          "title": "Atal Tunnel North Portal & Sissu Lahaul Valley Outing",
          "description": "An unforgettable drive through the world's longest high-altitude tunnel (9.02 km) emerging into the snow wonderworld of Lahaul Valley. Explore frozen Sissu waterfall, play in thick clean snow, and click family portraits."
        },
        {
          "day": 4,
          "title": "Hadimba Temple, Vashisht Springs & Naggar Royal Castle",
          "description": "Cultural immersion day: Seek blessings at the 16th-century wooden Hadimba Temple, take a relaxing dip in Vashisht natural hot sulphur springs, and visit the historic stone-and-timber Naggar Castle overlooking the valley."
        },
        {
          "day": 5,
          "title": "Kullu Shawl Weavers, Angora Farm & Evening Volvo Boarding",
          "description": "Check-out after hearty breakfast. Drive along river Beas towards Kullu, stop at government-certified handloom weaving societies, visit Angora rabbit farms, and board your comfortable AC Volvo bus back to Delhi."
        }
      ],
      "included": [
        "Round-Trip Delhi-Manali AC Volvo Tickets",
        "4 Nights Stay in Premium Family Suite",
        "4 Breakfasts and 4 Multi-Course Dinners",
        "Private Swift / Innova for 5 Days Sightseeing",
        "Atal Tunnel, Solang, Naggar & Kullu Sightseeing",
        "24/7 Telugu Customer Care Concierge"
      ]
    },
    {
      "id": "manali-adventure-escape-5d4n",
      "slug": "manali-adventure-escape-5d4n",
      "name": "Manali Adventure Escape & Rohtang Pass",
      "destination": "manali",
      "destinationName": "Kullu-Manali",
      "travelStyle": "group",
      "styleName": "Bachelors & Group",
      "days": 5,
      "duration": "5 days",
      "price": 14500,
      "priceFormatted": "from \u20b914,500",
      "groupSize": "Private Group (2-12)",
      "pace": "Active & Thrilling",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Kullu-Manali Circuit",
      "featured": true,
      "summary": "Five action-packed days in the Himalayas: River rafting down Beas torrents, tandem paragliding flights in Solang, Rohtang Pass glacier safari, and cozy mountain lodge evenings.",
      "overview": "Designed for thrill-seekers who crave heart-pumping mountain activities. From navigating white-water rapids to flying high over pine canopies and climbing to 13,050 feet at Rohtang Pass.",
      "photos": [
        "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival, Camp/Hotel Check-in & Old Manali Acclimatization",
          "description": "Arrive at Manali, transfer to your hotel. Acclimatize to mountain air, hike through Old Manali's cedar forests, and visit rustic bakeries and vibrant cafes."
        },
        {
          "day": 2,
          "title": "Solang Valley Thrill Arena: Paragliding & ATV Quad Biking",
          "description": "An adrenaline-fueled day: Soar like an eagle with tandem high-glide paragliding, maneuver rugged ATV quad bikes over mountain terrain, and ride the ropeway."
        },
        {
          "day": 3,
          "title": "Atal Tunnel & Sissu Snowmobile Safari",
          "description": "Cross the mighty Pir Panjal range through the Atal Tunnel. Reach the freezing white plains of Sissu, hire snowmobiles, and trek along frozen riverbanks."
        },
        {
          "day": 4,
          "title": "Jogini Waterfalls Cliff Trek & Vashisht Rock Clamber",
          "description": "Trek through apple orchards and pine woods to the multi-tier Jogini Waterfalls. Dip your feet in natural plunge pools and visit Vashisht natural hot springs."
        },
        {
          "day": 5,
          "title": "Beas White Water Rafting & Evening Volvo Departure",
          "description": "Head to Kullu for a thrilling 14-km Grade-III white water rafting expedition on the churning icy waters of Beas River. Board your return Volvo bus."
        }
      ],
      "included": [
        "Round-trip Volvo tickets",
        "4 Nights Hotel Stay",
        "Breakfast & Dinner",
        "5 Days Swift cab",
        "24/7 Telugu CC"
      ]
    },
    {
      "id": "manali-romantic-alpine-5d4n",
      "slug": "manali-romantic-alpine-5d4n",
      "name": "Manali Romantic Alpine Retreat & Pine Valley",
      "destination": "manali",
      "destinationName": "Kullu-Manali",
      "travelStyle": "honeymoon",
      "styleName": "Honeymoon & Romance",
      "days": 5,
      "duration": "5 days",
      "price": 23000,
      "priceFormatted": "from \u20b923,000",
      "groupSize": "Private Couple",
      "pace": "Easy & Romantic",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Kullu-Manali Circuit",
      "featured": true,
      "summary": "An intimate luxury escape for couples amidst cedar pine forests: Cozy rooms with panoramic balconies, private riverside picnic, romantic candlelit dinners, and private chauffeured cab.",
      "overview": "Spend 5 days celebrating love surrounded by snowy Himalayan ridges. From candlelit dinners in Old Manali to romantic photoshoots by Sissu waterfalls and cozy evenings by cedar fireplaces.",
      "photos": [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Volvo Arrival, Flower Bed Decoration & Sunset Stroll",
          "description": "Private cab pickup at Manali, check-in to your luxury suite decorated with fresh flower petals and welcome cake. Enjoy a quiet pine trail sunset walk."
        },
        {
          "day": 2,
          "title": "Solang Valley Snow Romance & Private Cable Car",
          "description": "Head to Solang Valley for a romantic cable car flight above snow fields, warm hot chocolate, yak portraits in traditional Himachali attire, and snow play."
        },
        {
          "day": 3,
          "title": "Atal Tunnel & Sissu Lahaul Snow Excursion",
          "description": "Experience the sensational tunnel drive into the serene white landscape of Lahaul Valley. Walk hand-in-hand beside frozen Sissu Lake and waterfall."
        },
        {
          "day": 4,
          "title": "Naggar Castle Heritage & Candlelight Dinner",
          "description": "Tour the 15th-century wood-and-stone Naggar Castle and Nicholas Roerich Art Gallery. Return to Manali for an intimate 4-course candlelight dinner with cake."
        },
        {
          "day": 5,
          "title": "Hadimba Cedar Forest & Volvo Return",
          "description": "Leisurely morning breakfast. Visit the serene Hadimba Temple hidden among giant deodar trees, pick up authentic woolens and souvenirs, and board Volvo bus."
        }
      ],
      "included": [
        "Round-trip Volvo",
        "4 Nights Luxury Honeymoon Suite",
        "Breakfasts & Dinners (2 Candlelight)",
        "Bed Decoration & Cake",
        "Private Cab",
        "24/7 Telugu CC"
      ]
    },
    {
      "id": "manali-bachelors-high-pass-4d3n",
      "slug": "manali-bachelors-high-pass-4d3n",
      "name": "Manali Bachelors High Pass Tour & Camp",
      "destination": "manali",
      "destinationName": "Kullu-Manali",
      "travelStyle": "group",
      "styleName": "Bachelors & Group",
      "days": 4,
      "duration": "4 days",
      "price": 15000,
      "priceFormatted": "from \u20b915,000",
      "groupSize": "Private Bachelor Group (4-12)",
      "pace": "Active & Thrilling",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Kullu-Manali Circuit",
      "featured": true,
      "summary": "Unleash adrenaline with your squad: Camp under the stars in Solang Valley, ride bikes on high mountain roads, and enjoy wild music parties around mountain bonfires.",
      "overview": "Built for student batches and bachelor groups wanting high energy. Features 2 nights premium hotel plus 1 night riverside camp with loud music, bonfire, and unlimited food.",
      "photos": [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival, Hotel Check-in & Old Manali Cafe Strip",
          "description": "Arrive by Volvo, swift cab pickup to hotel. Head out to Old Manali's legendary live music cafes, try wood-fired pizzas, and explore Manu Temple."
        },
        {
          "day": 2,
          "title": "High Pass Atal Tunnel, Sissu & Lahaul Snow Drive",
          "description": "Epic road trip through Atal Tunnel. Arrive at Sissu, play competitive snow games with friends, ride snow scooters, and explore Sissu glacier waterfall."
        },
        {
          "day": 3,
          "title": "Solang Valley Extreme Sports Arena",
          "description": "Full day dedicated to squad adventures: Paragliding from high launch, giant zorb rolling, quad bike drifting, and ropeway summit cable car."
        },
        {
          "day": 4,
          "title": "Jogini Waterfalls Hike, Kullu Rafting & Departure",
          "description": "Morning hike to scenic Jogini Waterfalls. Transfer to Kullu for intense 14-km white water river rafting on Beas River before boarding the evening Volvo."
        }
      ],
      "included": [
        "Volvo bus",
        "3 Nights accommodation (Hotel + Camp)",
        "Meals (Breakfast & Dinner)",
        "Swift Cab",
        "24/7 Telugu CC"
      ]
    },
    {
      "id": "manali-solang-paragliding-4d3n",
      "slug": "manali-solang-paragliding-4d3n",
      "name": "Solang Paragliding & Jogini Waterfall Trek",
      "destination": "manali",
      "destinationName": "Kullu-Manali",
      "travelStyle": "adventure",
      "styleName": "Adventure & Snow",
      "days": 4,
      "duration": "4 days",
      "price": 13500,
      "priceFormatted": "from \u20b913,500",
      "groupSize": "Private Group (2-12)",
      "pace": "Active & Thrilling",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Kullu-Manali Circuit",
      "featured": false,
      "summary": "Soar high in the sky over Solang Valley and trek through pine forests to the sacred Jogini Waterfalls on this quick 4-day action getaway.",
      "overview": "A quick Himalayan thrill package combining aerial paragliding flights, scenic waterfall trekking, thermal spring soaking, and swift cab transit with Telugu support.",
      "photos": [
        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival, Basecamp Check-in & Van Vihar River Trail",
          "description": "Morning arrival, swift hotel check-in. Rest up, then head out to explore the deodar canopy at Van Vihar and stroll along the lively Mall Road."
        },
        {
          "day": 2,
          "title": "Solang High Tandem Paragliding & Summit Gondola",
          "description": "Highlight day: Certified tandem paragliding taking off from high alpine slopes. Fly above snow valleys, ride the ropeway, and try zorbing."
        },
        {
          "day": 3,
          "title": "Atal Tunnel & Sissu Snow Glaciers",
          "description": "Scenic drive through the 9-km Atal Tunnel into Lahaul Valley. Explore frozen Sissu waterfall, throw snowballs, and enjoy steaming mountain tea."
        },
        {
          "day": 4,
          "title": "Hadimba Pagoda, Old Manali Cafes & Departure",
          "description": "Visit Hadimba Temple and Vashisht hot springs, grab a final wood-fired brunch in Old Manali, and transfer to Volvo bus stand for return journey."
        }
      ],
      "included": [
        "Volvo bus",
        "3 Nights Hotel",
        "Breakfast & Dinner",
        "Swift cab",
        "24/7 Telugu CC"
      ]
    },
    {
      "id": "manali-riverside-leisure-5d4n",
      "slug": "manali-riverside-leisure-5d4n",
      "name": "Manali Riverside Peaceful Leisure & Cottage Retreat",
      "destination": "manali",
      "destinationName": "Kullu-Manali",
      "travelStyle": "honeymoon",
      "styleName": "Honeymoon & Romance",
      "days": 5,
      "duration": "5 days",
      "price": 17000,
      "priceFormatted": "from \u20b917,000",
      "groupSize": "Private Group (2-12)",
      "pace": "Easy & Romantic",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Kullu-Manali Circuit",
      "featured": false,
      "summary": "Escape the noise: Stay at a beautiful riverside cottage in Old Manali, listening to rushing waters, reading books, meditating, and breathing fresh Himalayan air.",
      "overview": "Slow travel at its finest. Wake up to the melody of Beas River, sip freshly brewed Kahwa, take tranquil cedar forest walks, and revitalize mind and body with 24/7 Telugu concierge service.",
      "photos": [
        "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Riverside Resort Check-in & Beas Soundscape",
          "description": "Arrive at Manali, check-in to your serene resort located directly along the banks of river Beas. Unwind listening to the rushing mountain waters."
        },
        {
          "day": 2,
          "title": "Solang Valley Meadows & Anjani Mahadev Walk",
          "description": "Gentle exploration of Solang Valley at an unhurried pace. Ride the comfortable ropeway gondola and take an easy pine path walk to Anjani Mahadev."
        },
        {
          "day": 3,
          "title": "Atal Tunnel Highway & Sissu Willow Groves",
          "description": "Drive through Atal Tunnel into Lahaul Valley. Enjoy a peaceful riverside picnic amidst Sissu's golden willow groves with views of Sissu waterfall."
        },
        {
          "day": 4,
          "title": "Naggar Castle Royal Heritage & Roerich Estate",
          "description": "Visit historic Naggar village, explore the 500-year-old wooden castle, admire Himalayan paintings at Roerich Art Gallery, and taste fresh apple crumble."
        },
        {
          "day": 5,
          "title": "Hadimba Sanctuary Cedars & Evening Volvo Departure",
          "description": "Visit sacred Hadimba temple and ancient Vashisht springs. Shop for handmade shawls in Kullu before heading to the Volvo bus terminal."
        }
      ],
      "included": [
        "Volvo coach",
        "4 Nights Chalet Stay",
        "Breakfast & Dinner",
        "Swift cab",
        "24/7 Telugu CC"
      ]
    },
    {
      "id": "manali-old-cafe-culture-4d3n",
      "slug": "manali-old-cafe-culture-4d3n",
      "name": "Old Manali Caf\u00e9 Crawl & Heritage Culture Trail",
      "destination": "manali",
      "destinationName": "Kullu-Manali",
      "travelStyle": "culture",
      "styleName": "Heritage & Living Culture",
      "days": 4,
      "duration": "4 days",
      "price": 12000,
      "priceFormatted": "from \u20b912,000",
      "groupSize": "Private Group (2-12)",
      "pace": "Moderate & Balanced",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Kullu-Manali Circuit",
      "featured": false,
      "summary": "Discover the artistic and bohemian side of Manali: Traditional Kath-Kuni wooden architecture, ancient temples, artisan bakeries, and vibrant live music cafes of Old Manali.",
      "overview": "Dive deep into Old Manali's cobblestone lanes lined with bakeries, handloom stores, and historic shrines. Savor fresh trout, artisan coffee, and bohemian mountain culture.",
      "photos": [
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Old Manali Cobbled Alleys, Bakeries & Manu Temple",
          "description": "Check-in to a boutique heritage stay in Old Manali. Spend the day cafe hopping, savoring wood-fired Neapolitan pizzas, artisan croissants, and exploring Manu Temple."
        },
        {
          "day": 2,
          "title": "Solang Valley Snow Fun & High Altitude Gondola",
          "description": "Head up to Solang Valley for snow play, ride the high-altitude ropeway gondola, and enjoy steaming Maggi and hot ginger-lemon-honey tea."
        },
        {
          "day": 3,
          "title": "Jogini Waterfalls Forest Trek & Vashisht Rooftops",
          "description": "Scenic nature hike through apple orchards to Jogini Waterfalls. Soak your feet in cool mountain spray, then relax at a rooftop cafe in Vashisht."
        },
        {
          "day": 4,
          "title": "Hadimba Cedar Woods, Souvenir Bazaars & Departure",
          "description": "Visit the four-tiered wooden Hadimba Temple surrounded by deep cedar woods. Pick up handcrafted souvenirs on Mall Road before boarding your Volvo coach."
        }
      ],
      "included": [
        "Volvo bus",
        "3 Nights Boutique Stay",
        "Breakfast & Dinner",
        "Sightseeing Cab",
        "24/7 Telugu CC"
      ]
    },
    {
      "id": "manali-rohtang-snow-safari-6d5n",
      "slug": "manali-rohtang-snow-safari-6d5n",
      "name": "Manali Rohtang Peak Snow Safari & Glaciers",
      "destination": "manali",
      "destinationName": "Kullu-Manali",
      "travelStyle": "adventure",
      "styleName": "Adventure & Snow",
      "days": 6,
      "duration": "6 days",
      "price": 18000,
      "priceFormatted": "from \u20b918,000",
      "groupSize": "Private Group (2-12)",
      "pace": "Active & Thrilling",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Kullu-Manali Circuit",
      "featured": true,
      "summary": "The ultimate snow expedition: Rohtang Pass at 13,050 feet, snow tubing, skiing, Atal Tunnel, Sissu frozen waterfall, and Beas white-water rafting over six exhilarating days.",
      "overview": "If snow is your dream, this 6-day comprehensive tour takes you to every snowy wonderland in the Kullu-Manali-Lahaul region with comfortable hotel stays and private taxi.",
      "photos": [
        "https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1548777123-e216912df7d8?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=800&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival, Hotel Check-in & Altitude Acclimatization",
          "description": "Pickup at Manali Volvo stand, check-in to deluxe hotel with mountain views. Rest and acclimatize, then enjoy an evening walk around Mall Road and Tibetan Monastery."
        },
        {
          "day": 2,
          "title": "Solang Valley Snow Adventure & Ropeway",
          "description": "Full day at Solang Valley. Experience high-flying paragliding, snow sledging, ATV rides, and scenic gondola cable car to the alpine peak."
        },
        {
          "day": 3,
          "title": "The Grand Rohtang Pass 13,058 ft Snow Safari",
          "description": "Crown jewel day: Drive up the legendary Manali-Leh highway to Rohtang Pass at 13,058 ft. Play in deep eternal snow, admire Marhi meadows, and view Rahalla falls."
        },
        {
          "day": 4,
          "title": "Atal Tunnel & Sissu Lahaul Valley Expedition",
          "description": "Drive through the 9.02-km Atal Tunnel into Lahaul. Walk beside the frozen Sissu waterfall, explore Sissu lake, and marvel at the moonscape valley."
        },
        {
          "day": 5,
          "title": "Hadimba Temple, Vashisht Springs & Naggar Castle",
          "description": "Discover rich Himachali heritage: Hadimba pagoda temple, sacred natural hot springs in Vashisht, and the medieval stone castle of Naggar."
        },
        {
          "day": 6,
          "title": "Kullu River Rafting, Handlooms & Evening Departure",
          "description": "Check out and drive along Beas River to Kullu. Take on exciting white-water rafting, shop at handloom emporiums, and board the evening AC Volvo."
        }
      ],
      "included": [
        "Volvo bus",
        "5 Nights Hotel",
        "Breakfast & Dinner",
        "Dedicated Cab",
        "24/7 Telugu CC"
      ]
    },
    {
      "id": "kasol-manali-honeymoon-4d3n",
      "slug": "kasol-manali-honeymoon-4d3n",
      "name": "Kasol & Manali Twin Valley Honeymoon Special",
      "destination": "manali",
      "destinationName": "Kullu-Manali",
      "travelStyle": "honeymoon",
      "styleName": "Honeymoon & Romance",
      "days": 4,
      "duration": "4 days",
      "price": 18000,
      "priceFormatted": "from \u20b918,000",
      "groupSize": "Private Couple",
      "pace": "Easy & Romantic",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Kullu-Manali Circuit",
      "featured": true,
      "summary": "Discover twin Himachal gems together: Trek along Kasol's Parvati Valley, visit Manikaran hot springs, drive to Manali for Solang Valley snow peaks, and enjoy a romantic candlelit dinner.",
      "overview": "The perfect blend of tranquil bohemian Parvati river scenery and snow-peaked Manali adventure for honeymooners seeking diversity and romantic memories.",
      "photos": [
        "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Volvo Arrival, Drive to Kasol & Riverside Luxury Camp Check-in",
          "description": "Morning arrival, private cab drive along Parvati River to Kasol. Check-in to a luxury riverside dome camp with warm bedding. Walk hand-in-hand to Chalal village."
        },
        {
          "day": 2,
          "title": "Manikaran Sacred Hot Springs & Scenic Transfer to Manali",
          "description": "Visit sacred Manikaran Sahib Gurudwara and natural thermal springs. Enjoy scenic drive to Manali, check-in to your honeymoon suite decorated with flowers."
        },
        {
          "day": 3,
          "title": "Solang Valley Snow Romance & Cable Car Flight",
          "description": "Full day in Solang Valley. Take a couples cable car flight to 10,000 ft, play in fresh snow, dress up in traditional Himachali attire for portraits, and share hot cocoa."
        },
        {
          "day": 4,
          "title": "Hadimba Temple, Mall Road Souvenirs & Volvo Departure",
          "description": "Visit Hadimba Devi temple nestled in deep cedar woods. Stroll Mall Road for handmade souvenirs, and transfer to Volvo stand for your comfortable journey home."
        }
      ],
      "included": [
        "Volvo coach",
        "3 Nights Hotel",
        "Breakfasts & Dinners",
        "Candlelight Dinner & Bed Decor",
        "Private Swift Cab",
        "24/7 Telugu CC"
      ]
    },
    {
      "id": "kasol-manali-river-camp-4d3n",
      "slug": "kasol-manali-river-camp-4d3n",
      "name": "Kasol & Manali Romantic Riverside Camp & Kheerganga",
      "destination": "manali",
      "destinationName": "Kullu-Manali",
      "travelStyle": "honeymoon",
      "styleName": "Honeymoon & Romance",
      "days": 4,
      "duration": "4 days",
      "price": 19500,
      "priceFormatted": "from \u20b919,500",
      "groupSize": "Private Couple",
      "pace": "Easy & Romantic",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Kullu-Manali Circuit",
      "featured": false,
      "summary": "Romance under the stars: Stay in a luxury riverside camp in Kasol with bonfire dinner, trek to natural hot springs, then travel to Manali for Solang snow fun and paragliding.",
      "overview": "Glamping romance meets high-altitude adventure. Listen to Parvati River rapids from your private tent, share fireside conversations, and explore snowy Solang peaks.",
      "photos": [
        "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Kasol Riverside Camp Check-in & Chalal Pine Trail",
          "description": "Arrive in Parvati Valley, check-in to luxury riverside camp on the banks of Parvati River. Cross the suspension bridge for a trek through Chalal's pine forests."
        },
        {
          "day": 2,
          "title": "Manikaran Hot Springs & Scenic Transfer to Manali",
          "description": "Visit the natural hot sulphur springs and Gurudwara at Manikaran. Drive past apple orchards into Manali, check into your hotel, and relax by the Beas river."
        },
        {
          "day": 3,
          "title": "Solang Valley Snow Fun & Atal Tunnel Highway",
          "description": "Full day snow adventure: Solang Valley ropeway cable car, snow tubing, and drive through the magnificent 9.02-km Atal Tunnel to Sissu."
        },
        {
          "day": 4,
          "title": "Hadimba Wooden Temple, Mall Road & Departure",
          "description": "Explore the historic Hadimba Temple and Vashisht springs. Pick up souvenirs and woolens from Mall Road before your evening Volvo departure."
        }
      ],
      "included": [
        "Volvo bus",
        "2N Hotel + 1N Glamping",
        "Breakfast & Dinner",
        "Swift cab",
        "24/7 Telugu CC"
      ]
    },
    {
      "id": "manali-hampta-pass-trek-5d4n",
      "slug": "manali-hampta-pass-trek-5d4n",
      "name": "Manali Hampta Pass Trek & Chandratal Expedition",
      "destination": "manali",
      "destinationName": "Kullu-Manali",
      "travelStyle": "adventure",
      "styleName": "Adventure & Snow",
      "days": 5,
      "duration": "5 days",
      "price": 16500,
      "priceFormatted": "from \u20b916,500",
      "groupSize": "Private Group (2-12)",
      "pace": "Active & Thrilling",
      "season": "All Year",
      "nextDeparture": "Daily Private Departures",
      "place": "Kullu-Manali Circuit",
      "featured": true,
      "summary": "Five days of pure Himalayan trekking: Complete the dramatic crossover trek from lush Kullu meadows to barren Spiti desert over the 14,035 ft Hampta Pass and camp near Chandratal Lake.",
      "overview": "One of India's most dramatic Himalayan crossover treks. Witness green pine forests transform into stark alpine glaciers and turquoise high-altitude lakes with certified guides and full safety logistics.",
      "photos": [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=85",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Manali Basecamp Arrival, Trek Briefing & Jobra Drive",
          "description": "Assemble at Prini basecamp in Manali. Gear check and safety briefing by certified mountaineering guides. Scenic 1-hour drive on hairpin curves to Jobra roadhead, and easy 45-minute trek to Jobra alpine campsite."
        },
        {
          "day": 2,
          "title": "Trek from Jobra to Chikka Alpine Meadow (10,400 ft)",
          "description": "4 to 5 hours trek through mixed forests of maple and birch. Cross sparkling mountain streams over wooden logs, boulder paths, and reach the wide green pastures of Chikka campsite."
        },
        {
          "day": 3,
          "title": "Chikka to Balu Ka Ghera (Sand of Stones - 11,900 ft)",
          "description": "5 to 6 hours trek ascending alongside the roaring river. Walk across moraine fields and wildflower beds to reach Balu Ka Ghera, a flat sandy riverbed right below Hampta Pass."
        },
        {
          "day": 4,
          "title": "Summit Hampta Pass (14,065 ft) to Shea Goru (12,900 ft)",
          "description": "The summit day: Early 5 AM push ascending steep snow bridges to the crest of Hampta Pass (14,065 ft). Marvel at the dramatic contrast between green Kullu and arid Lahaul, then descend on snow slides to Shea Goru."
        },
        {
          "day": 5,
          "title": "Trek to Chhatru, Drive via Atal Tunnel & Return to Manali",
          "description": "Cross the icy Shea Goru stream and trek 4 hours down to the mountain settlement of Chhatru in Lahaul. Board 4x4 vehicles for a scenic drive back to Manali via the iconic Atal Tunnel."
        }
      ],
      "included": [
        "Trek permits",
        "Camping gear & sleeping bags",
        "Trek meals",
        "Certified Trek Guides",
        "4x4 transfers",
        "24/7 Telugu CC"
      ]
    },
    {
      "id": "kashmir-romantic-couple-4d3n",
      "slug": "kashmir-romantic-couple-4d3n",
      "name": "Kashmir Romantic Couple & Honeymoon Package",
      "destination": "kashmir",
      "destinationName": "Kashmir",
      "travelStyle": "honeymoon",
      "styleName": "Honeymoon & Romance",
      "days": 4,
      "duration": "4 days",
      "price": 23999,
      "priceFormatted": "from \u20b923,999",
      "groupSize": "Private Couple",
      "pace": "Easy",
      "season": "March \u2013 November, Snow Season",
      "nextDeparture": "Daily Private Departures",
      "place": "Srinagar, Gulmarg & Pahalgam",
      "featured": true,
      "summary": "Experience Paradise on Earth with candlelit Shikara rides on Dal Lake, heritage luxury houseboat stays, snow activities at Gulmarg, and pine-clad meadows in Pahalgam.",
      "photos": [
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80"
      ],
      "overview": "Handcrafted for couples wanting an unforgettable romantic retreat in Kashmir. Private heated vehicle throughout, luxury heritage houseboat on Dal Lake, premium hotel stays, and guaranteed assistance for Gulmarg Gondola tickets.",
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Srinagar & Dal Lake Shikara Sunset",
          "desc": "Warm welcome at Srinagar Airport. Transfer to your luxury heritage Houseboat. In the evening, enjoy a 1-hour romantic private Shikara ride across the serene waters of Dal Lake past floating gardens and Char Chinar.",
          "meals": "Dinner included",
          "stay": "Luxury Heritage Houseboat, Dal Lake"
        },
        {
          "day": 2,
          "title": "Srinagar to Gulmarg: Meadow of Flowers & Gondola",
          "desc": "Day excursion to Gulmarg. Ride the world-famous Gulmarg Gondola cable car up to snow-clad Apharwat peak. Enjoy snow activities, skiing, and stunning views of the Pir Panjal range before returning to Srinagar.",
          "meals": "Breakfast & dinner included",
          "stay": "4-Star Hotel, Srinagar"
        },
        {
          "day": 3,
          "title": "Srinagar to Pahalgam: Valley of Shepherds",
          "desc": "Scenic drive through saffron fields of Pampore to Pahalgam. Visit Betaab Valley, Aru Valley, and Chandanwari. Stroll along the gushing Lidder River. Evening return to Srinagar for Kashmiri Wazwan dinner.",
          "meals": "Breakfast & dinner included",
          "stay": "4-Star Hotel, Srinagar"
        },
        {
          "day": 4,
          "title": "Mughal Gardens Tour & Airport Departure",
          "desc": "Morning visit to historic Mughal Gardens: Nishat Bagh and Shalimar Bagh. Shop for authentic saffron, dry fruits, and pashmina shawls. Timely transfer to Srinagar Airport for departure flight.",
          "meals": "Breakfast included",
          "stay": "Departure"
        }
      ],
      "included": [
        "Private AC/Heated Sedan or Innova for all 4 days with experienced chauffeur",
        "3 Nights Accommodation: 1N Luxury Houseboat on Dal Lake, 2N 4-Star Srinagar Hotel",
        "Daily Buffet Breakfast and Multi-Course Dinners",
        "1-Hour Private Romantic Shikara Ride on Dal Lake",
        "Sightseeing in Gulmarg, Pahalgam, and Srinagar Mughal Gardens",
        "All toll, parking, driver allowances, and 24/7 dedicated travel desk support"
      ]
    },
    {
      "id": "ladakh-high-pass-odyssey-7d6n",
      "slug": "ladakh-high-pass-odyssey-7d6n",
      "name": "Ladakh High Pass Odyssey: Nubra & Pangong Tso",
      "destination": "ladakh",
      "destinationName": "Ladakh",
      "travelStyle": "adventure",
      "styleName": "Adventure & Snow",
      "days": 7,
      "duration": "7 days",
      "price": 32000,
      "priceFormatted": "from \u20b932,000",
      "groupSize": "10 travelers max",
      "pace": "High Altitude Adventure",
      "season": "May \u2013 September",
      "nextDeparture": "Weekly Departures",
      "place": "Leh, Khardung La, Nubra Valley & Pangong",
      "featured": false,
      "summary": "Cross the highest motorable road in the world at Khardung La, ride double-humped camels in Nubra, and sleep beside the changeless blue waters of Pangong Tso.",
      "photos": [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
      ],
      "overview": "An expedition across the Roof of the World. Designed with careful acclimatization in Leh, backup oxygen canisters, and certified local Ladakhi mountain drivers.",
      "itinerary": [
        {
          "day": 1,
          "title": "Leh Airport Arrival & Acclimatization",
          "desc": "Arrival at Leh Airport (11,500 ft). Complete rest day to acclimatize to high altitude. Evening walk to Shanti Stupa.",
          "meals": "Dinner included",
          "stay": "4-Star Hotel, Leh"
        },
        {
          "day": 2,
          "title": "Sham Valley: Hall of Fame & Magnetic Hill",
          "desc": "Visit Hall of Fame War Memorial, Magnetic Hill, Gurudwara Pathar Sahib, and Indus-Zanskar Sangam confluence.",
          "meals": "Breakfast & dinner included",
          "stay": "4-Star Hotel, Leh"
        },
        {
          "day": 3,
          "title": "Leh to Nubra Valley via Khardung La (17,582 ft)",
          "desc": "Cross the legendary Khardung La pass. Descend into Nubra Valley. Ride Bactrian double-humped camels in Hunder sand dunes.",
          "meals": "Breakfast & dinner included",
          "stay": "Luxury Deluxe Camp, Nubra"
        },
        {
          "day": 4,
          "title": "Nubra Valley to Pangong Lake via Shyok River",
          "desc": "Scenic off-road drive following the Shyok River directly to the world-famous Pangong Tso (14,270 ft). Stargazing at night.",
          "meals": "Breakfast & dinner included",
          "stay": "Pangong Lake Luxury Camp"
        },
        {
          "day": 5,
          "title": "Pangong Sunrise & Return to Leh via Chang La",
          "desc": "Watch the lake change shades at dawn. Cross Chang La pass (17,590 ft) back to Leh. Visit Thiksey Monastery on route.",
          "meals": "Breakfast & dinner included",
          "stay": "4-Star Hotel, Leh"
        },
        {
          "day": 6,
          "title": "Leh Palace, Shey & Local Market",
          "desc": "Explore Leh Palace, Shey Monastery, and shop for Tibetan silver and apricots.",
          "meals": "Breakfast & dinner included",
          "stay": "4-Star Hotel, Leh"
        },
        {
          "day": 7,
          "title": "Leh Airport Departure",
          "desc": "Early morning transfer to Leh Airport with aerial views of the Himalayas.",
          "meals": "Breakfast included",
          "stay": "Departure"
        }
      ],
      "included": [
        "Dedicated private 4x4 Scorpio / Innova throughout Ladakh",
        "6 Nights stays: 4N Leh Hotel, 1N Nubra Luxury Camp, 1N Pangong Lake Camp",
        "Daily Breakfasts and Dinners",
        "Inner Line Permits and Wildlife Fee for Khardung La, Nubra, and Pangong",
        "Oxygen cylinder in vehicle and 24/7 local Ladakhi tour manager"
      ]
    }
  ],
  "articles": [
    {
      "id": "art-1",
      "slug": "kerala-monsoon-or-winter-guide",
      "title": "Kerala Backwaters: When to Go, What to Pack and Houseboat Secrets",
      "category": "Planning",
      "readTime": "5 min read",
      "date": "October 2026",
      "author": "K. Ramesh, Head Trip Designer",
      "cover": "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
      "excerpt": "Why November to February offers cool breezes, and how our private chauffeurs find quiet canals away from the tourist queues.",
      "content": "\n        <p>Most travelers imagine Kerala as a single destination, but the transition from the mist-wrapped tea hills of Munnar to the tropical canal networks of Alleppey involves completely distinct microclimates.</p>\n        <p>In this packing and season guide, we share honest advice on choosing between overnight houseboats versus day shikaras, the best spice plantations in Thekkady, and why our dedicated AC personal cabs transform the entire travel experience.</p>\n        <h3>Choosing the Right Month</h3>\n        <p>From October through March, Kerala enjoys dry, sunlit days and cool mountain nights in Munnar. If you are seeking romantic privacy, November and February are the golden months with quiet waterways and uncrowded waterfalls.</p>\n      "
    },
    {
      "id": "art-2",
      "slug": "kashmir-gondola-snow-safari-guide",
      "title": "How to Plan Kashmir: Gulmarg Gondola Tips & Houseboat Etiquette",
      "category": "On the Road",
      "readTime": "6 min read",
      "date": "September 2026",
      "author": "Adil Lone, Senior Srinagar Leader",
      "cover": "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
      "excerpt": "Phase 1 versus Phase 2 Gondola passes, Dal Lake Shikara secrets, and staying warm in traditional cedar wood houseboats.",
      "content": "\n        <p>A winter or autumn journey into Kashmir is unmatched in beauty, but advance planning is critical. With daily visitor limits on the Gulmarg Gondola, our team ensures pre-booked slots so you spend your morning on snow slopes instead of in ticket queues.</p>\n        <p>We also share the authentic story of carved walnut houseboats, the ritual of Noon Chai (pink tea), and our top recommended walks through Pahalgam's Betaab Valley.</p>\n      "
    },
    {
      "id": "art-3",
      "slug": "manali-solang-atal-tunnel-handbook",
      "title": "Crossing the Atal Tunnel: What to Expect in Lahaul & Solang",
      "category": "Destinations",
      "readTime": "4 min read",
      "date": "August 2026",
      "author": "Vikram Thakur, Manali Expedition Leader",
      "cover": "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=80",
      "excerpt": "From deodar forest hills to the high barren mountain desert of Lahaul within 15 minutes of engineering wonder.",
      "content": "\n        <p>The Atal Tunnel at 10,000 feet transformed travel to Manali. Driving through the 9.02 km tunnel takes you instantly from the green deodar forests of Dhundi into the stark, dramatic lunar peaks of Sissu in Lahaul Valley.</p>\n        <p>Here is our insider route for combining Solang Valley paragliding, river crossing in Kullu, and finding quiet wooden homestays in Old Manali.</p>\n      "
    },
    {
      "id": "art-4",
      "slug": "goa-offbeat-beaches-and-heritage",
      "title": "Beyond the Beach Shacks: South Goa Serenity & Old Latin Quarters",
      "category": "Destinations",
      "readTime": "5 min read",
      "date": "July 2026",
      "author": "Maria Fernandes, Coastal Guide",
      "cover": "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
      "excerpt": "Where to find quiet sands in Palolem, colorful Portuguese homes in Fontainhas, and organic spice plantation lunches.",
      "content": "\n        <p>While Baga and Calangute offer electric energy, South Goa retains the gentle, unhurried rhythm of classic Konkan coastal life. We explore hidden coves, heritage churches, and sunset river cruises.</p>\n      "
    },
    {
      "id": "art-5",
      "slug": "ladakh-high-altitude-packing-tips",
      "title": "Packing for Ladakh: Acclimatization, Warmth and Photography",
      "category": "Planning",
      "readTime": "5 min read",
      "date": "June 2026",
      "author": "Stanzin Dorje, Leh Mountaineer",
      "cover": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      "excerpt": "Essential gear for 14,000 feet, avoiding AMS, and capturing the intense blue waters of Pangong Tso.",
      "content": "\n        <p>Preparing for high altitude in Ladakh is about hydration, patience, and smart layering. Our guide covers everything you need to know before touching down at Kushok Bakula Rimpochee Airport in Leh.</p>\n      "
    },
    {
      "id": "art-6",
      "slug": "why-private-cab-matters",
      "title": "Why We Provide Dedicated Personal Cabs on Every Route",
      "category": "Behind the Scenes",
      "readTime": "4 min read",
      "date": "May 2026",
      "author": "V. Vijay, Founder & Director",
      "cover": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
      "excerpt": "No shared waiting, no rigid schedules: why your own chauffeur and 24/7 Telugu concierge care changes everything.",
      "content": "\n        <p>We built Crazy Tours and Travels on a simple principle: holidays should feel liberating, not constrained by large coach schedules. Having your dedicated cab means you stop for photos whenever you want, linger at scenic view points, and travel with total peace of mind.</p>\n      "
    }
  ],
  "reviews": [
    {
      "id": "rev-1",
      "author": "Sneha & Karthik Reddy",
      "tripLabel": "Kerala Signature Honeymoon",
      "quote": "Our chauffeur Santosh felt like family. The houseboat in Alleppey was private, clean, and the food was delicious. 24/7 Telugu customer care gave our parents complete peace of mind back home in Hyderabad.",
      "avatar": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      "id": "rev-2",
      "author": "Praveen Kumar & Friends",
      "tripLabel": "Manali Bachelor Group Package",
      "quote": "Six of us took the Delhi Volvo to Manali. Solang Valley paragliding was crazy! The hotel had great mountain views and the campfire with DJ was the highlight of our college reunion.",
      "avatar": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      "id": "rev-3",
      "author": "Ananya & Rajesh Varma",
      "tripLabel": "Kashmir Romantic Couple Package",
      "quote": "Waking up on a cedar houseboat on Dal Lake was magical. Crazy Tours pre-booked our Gulmarg Gondola tickets so we skipped a 2-hour queue. Truly luxury treatment from arrival to departure.",
      "avatar": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    {
      "id": "rev-4",
      "author": "Dr. Sudhakar Rao & Family",
      "tripLabel": "Goa Grand Family Heritage Holiday",
      "quote": "Traveled with my elderly parents and kids. Having a dedicated Innova for all 4 days made sightseeing effortless. The spice plantation tour and sunset cruise were exceptionally well managed.",
      "avatar": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    {
      "id": "rev-5",
      "author": "Rohit & Meera Sharma",
      "tripLabel": "Kullu-Manali Alpine Escape",
      "quote": "The Atal Tunnel drive into Sissu was breathtaking. Our driver knew exactly where to stop for snow photos without crowds. Honest fixed pricing with zero hidden charges.",
      "avatar": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80"
    },
    {
      "id": "rev-6",
      "author": "Kavitha & Suresh Goud",
      "tripLabel": "Kerala Varkala Clifftops",
      "quote": "Munnar tea hills plus Varkala beach cliffs in one package was the best decision. The Telugu customer care desk was available anytime we called. 10/10 recommendation for couples.",
      "avatar": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
    },
    {
      "id": "rev-7",
      "author": "Vivek & Group",
      "tripLabel": "Goa Bachelors Beach & Watersports",
      "quote": "Grand Island scuba diving and water sports combo was top notch. Picked up right from our resort in Calangute on time. Crazy Tours is the real deal for holiday planning.",
      "avatar": "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80"
    },
    {
      "id": "rev-8",
      "author": "Vikramaditya & Pooja",
      "tripLabel": "Kashmir Grand Group Expedition",
      "quote": "Sonmarg snow sledge ride was unforgettable. Beautiful hotels in Srinagar and warm hospitality throughout. We will book all our upcoming vacations with Crazy Tours and Travels.",
      "avatar": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80"
    }
  ],
  "faqs": [
    {
      "question": "What is included in the package price?",
      "answer": "Every Crazy Tours and Travels package includes verified 3-star or 4-star hotel stays, daily breakfast, a dedicated private AC cab (Sedan / Ertiga / Innova) for all transfers and sightseeing as per itinerary, fuel, toll taxes, state border permits, and 24/7 customer care concierge. Special trips like Alleppey or Dal Lake include private houseboat stays and Shikara rides."
    },
    {
      "question": "Do you provide Telugu customer support?",
      "answer": "Yes! Crazy Tours and Travels is renowned for our dedicated 24/7 Telugu & English Customer Care Desk (\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41 \u0c15\u0c38\u0c4d\u0c1f\u0c2e\u0c30\u0c4d \u0c15\u0c47\u0c30\u0c4d). Whether you are arriving at an airport, need language assistance with your driver, or want restaurant recommendations, our Hyderabad headquarters desk is on call 24 hours a day."
    },
    {
      "question": "Can I customize the itinerary or dates for a private group?",
      "answer": "Absolutely. Every single route in our catalog can be customized for your preferred dates, group size, and hotel preferences. You can add extra days in Munnar, upgrade to a luxury private pool villa in Goa, or include helicopter rides in Kashmir."
    },
    {
      "question": "Are flights or train tickets included in the quote?",
      "answer": "Our standard packages cover all ground arrangements, stays, private vehicles, and activities from your arrival destination onwards. On request, our flight booking desk can also issue your roundtrip flights or train tickets from Hyderabad, Bangalore, Chennai, or Delhi at live transparent rates."
    },
    {
      "question": "What happens if there is unexpected bad weather or road closure?",
      "answer": "Safety is our number one priority. Our local drivers and trip coordinators monitor mountain passes like Rohtang, Atal Tunnel, and Gulmarg continuously. In the event of unforeseen roadblocks or bad weather, alternative activities or rescheduling assistance is provided immediately."
    }
  ]
};

// ----------------------------------------------------------------------------
// HELPER LOOKUP FUNCTIONS
// ----------------------------------------------------------------------------
function getWayfareTrip(slugOrId) {
  if (!slugOrId) return WAYFARE_DATA.trips[0];
  const found = WAYFARE_DATA.trips.find(t => t.slug === slugOrId || t.id === slugOrId);
  return found || WAYFARE_DATA.trips[0];
}

function getWayfareDestination(slugOrId) {
  if (!slugOrId) return WAYFARE_DATA.destinations[0];
  const found = WAYFARE_DATA.destinations.find(d => d.slug === slugOrId || d.id === slugOrId);
  return found || WAYFARE_DATA.destinations[0];
}

function getWayfareArticle(slugOrId) {
  if (!slugOrId) return WAYFARE_DATA.articles[0];
  const found = WAYFARE_DATA.articles.find(a => a.slug === slugOrId || a.id === slugOrId);
  return found || WAYFARE_DATA.articles[0];
}

function getTripsByDestination(destSlug) {
  return WAYFARE_DATA.trips.filter(t => t.destination.toLowerCase() === destSlug.toLowerCase());
}

function getTripsByStyle(styleSlug) {
  return WAYFARE_DATA.trips.filter(t => t.travelStyle.toLowerCase() === styleSlug.toLowerCase());
}

// Global attachment
if (typeof window !== 'undefined') {
  window.WAYFARE_DATA = WAYFARE_DATA;
  window.getWayfareTrip = getWayfareTrip;
  window.getWayfareDestination = getWayfareDestination;
  window.getWayfareArticle = getWayfareArticle;
  window.getTripsByDestination = getTripsByDestination;
  window.getTripsByStyle = getTripsByStyle;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { WAYFARE_DATA, getWayfareTrip, getWayfareDestination, getWayfareArticle, getTripsByDestination, getTripsByStyle };
}
