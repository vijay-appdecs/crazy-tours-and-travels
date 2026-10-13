# Generator script for authentic Crazy Tours and Travels Data Model in Wayfare format
import json

data_js_content = '''/**
 * CRAZY TOURS AND TRAVELS — MASTER DATA MODEL (WAYFARE SYSTEM)
 * Authentic Luxury Travel Framework with Kashmir, Kerala, Kullu-Manali, Goa,
 * verified itineraries, pricing in INR, photo galleries, and local guides.
 */

const WAYFARE_DATA = {
  brand: {
    name: "Crazy Tours and Travels",
    shortName: "Crazy Tours",
    tagline: "Travel Beyond Ordinary — Luxury & Experiential Journeys",
    logoIcon: "assets/images/logo-icon.png",
    logoFull: "assets/images/logo.png",
    email: "crazytraveller11@gmail.com",
    phone: "+91 93901 02030",
    phoneDisplay: "+91 93901 02030 / +91 94901 02030",
    hours: "Monday to Sunday, 24/7 Telugu & English Travel Desk",
    office: "Begumpet & Jubilee Hills, Hyderabad, Telangana, India",
    social: {
      instagram: "https://instagram.com",
      youtube: "https://youtube.com"
    },
    stats: {
      since: "2015",
      maxTravelers: "12 max",
      localGuides: "100%",
      countries: "8 destinations",
      avgGroupSize: "8",
      support: "24/7 Telugu Concierge",
      rating: "4.9",
      reviewCount: "2,480"
    }
  },

  // --------------------------------------------------------------------------
  // 1. TRAVEL STYLES (5 Entries)
  // --------------------------------------------------------------------------
  travelStyles: [
    {
      id: "honeymoon",
      slug: "honeymoon",
      number: "01",
      name: "Honeymoon & Romance",
      tagline: "Candlelit houseboats, flower bed decor and misty tea hills",
      description: "Handcrafted escapes for newlyweds. Private AC cab, handpicked luxury resorts, candlelit dinners, and dedicated concierge care.",
      image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "adventure",
      slug: "adventure",
      number: "02",
      name: "Adventure & Snow",
      tagline: "Solang paragliding, Rohtang snow passes and river rafting",
      description: "Thrill-seeking expeditions across Himalayan mountain passes, glacial valleys, and rushing white water rapids.",
      image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "beach-islands",
      slug: "beach-islands",
      number: "03",
      name: "Beach and Coastal",
      tagline: "Golden sands, private catamarans and sunset clifftops",
      description: "Sun-drenched coastal getaways in Goa, Varkala, and the Andaman Islands with secluded coves and oceanfront stays.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "culture",
      slug: "culture",
      number: "04",
      name: "Heritage & Living Culture",
      tagline: "Royal palaces, spice gardens and historic temples",
      description: "Deep cultural immersion in the ancient kingdoms of Rajasthan, Kerala's Kathakali art, and Mughal architecture in Kashmir.",
      image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "group",
      slug: "group",
      number: "05",
      name: "Bachelors & Friends Group",
      tagline: "Volvo expeditions, watersports, and late nights under stars",
      description: "Action-packed group itineraries with luxury Volvo transfers, DJ campfire nights, scuba diving, and group villas.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
    }
  ],

  // --------------------------------------------------------------------------
  // 2. DESTINATIONS (8 Entries featuring Crazy Tours and Travels Core)
  // --------------------------------------------------------------------------
  destinations: [
    {
      id: "kashmir",
      slug: "kashmir",
      name: "Kashmir",
      region: "Himalayas, India",
      tagline: "Dal Lake houseboats, snow valleys & Gondola heights",
      bestTime: "March to October (Summer & Autumn), Dec to Feb (Snow)",
      intro: "Paradise on Earth. Glide across tranquil Dal Lake on private wooden Shikaras, sleep in carved cedar houseboats, take the highest cable car in Asia at Gulmarg, and walk the pine valleys of Pahalgam with our local Kashmiri leaders.",
      primaryPhoto: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
      secondaryPhoto: "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80",
      overview: "Kashmir captivates travelers with alpine majesty and timeless warmth. We partner with certified heritage houseboats on Nigeen and Dal Lake, arrange direct phase 1 & 2 Gondola passes in Gulmarg, and provide heated private Scorpio/Innova vehicles throughout.",
      highlights: [
        "Private Shikara sunset cruise along the floating vegetable markets",
        "Gulmarg Gondola cable car ride to Apharwat Peak at 13,780 feet",
        "Pahalgam Betaab Valley and Aru Valley pony trails amidst deodar forests"
      ]
    },
    {
      id: "kerala",
      slug: "kerala",
      name: "Kerala",
      region: "South India",
      tagline: "Mist-clad tea hills, spice estates & tranquil backwaters",
      bestTime: "September to March (Pleasant), June to Aug (Ayurveda Monsoon)",
      intro: "God's Own Country. From the emerald rolling tea carpets of Munnar to Periyar elephant sanctuaries in Thekkady and private luxury houseboats in Alleppey, our Kerala itineraries deliver unhurried luxury with dedicated 24/7 Telugu concierge care.",
      primaryPhoto: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
      secondaryPhoto: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
      overview: "Experience serene waterways, aromatic spice plantations, and fresh coastal seafood. Each departure includes your private chauffeur-driven AC cab for all days, verified 4-star hotel stays with daily breakfast, and customized couple or family privacy.",
      highlights: [
        "Cruising serene palm-fringed canals in an exclusive traditional Kettuvallam houseboat",
        "Cheeyappara waterfalls and tea factory masterclass in Munnar",
        "Periyar National Park boating and spice garden botanical walks in Thekkady"
      ]
    },
    {
      id: "manali",
      slug: "manali",
      name: "Kullu-Manali",
      region: "Himachal Pradesh, India",
      tagline: "Alpine snow passes, Solang adventure & pine trails",
      bestTime: "Year-round: March to June (Pleasant), Dec to Feb (Snow)",
      intro: "High-altitude Himalayan playground. Traverse the engineering wonder of the Atal Tunnel to Sissu, play in snow at Rohtang Pass, paraglide above Solang Valley, and unwind in historic Old Manali cafes along the Beas River.",
      primaryPhoto: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
      secondaryPhoto: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=1200&q=80",
      overview: "Nestled between deodar forests and snow-capped peaks, Kullu-Manali is the ultimate mountain destination. We provide luxury semi-sleeper AC Volvo transfers from Delhi, personal hill taxis for all sightseeing, and handpicked boutique riverside stays.",
      highlights: [
        "Snow games, skiing and paragliding across Solang Valley",
        "Scenic drive through the Atal Tunnel into Lahaul's mountain desert",
        "White water rafting on the Beas River and Manikaran natural hot springs"
      ]
    },
    {
      id: "goa",
      slug: "goa",
      name: "Goa",
      region: "Coastal India",
      tagline: "Golden sands, historic Portuguese quarters & sunset cruises",
      bestTime: "October to April",
      intro: "The sun, sea, and soul of the Konkan coast. From vibrant North Goa beach shacks and adrenaline-packed watersports to peaceful South Goa luxury resorts, spice farms, and Dudhsagar waterfall treks.",
      primaryPhoto: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
      secondaryPhoto: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      overview: "Whether you are planning a bachelors party weekend, a romantic honeymoon resort retreat, or a family heritage escape, Goa offers the perfect tropical rhythm with personal cab convenience.",
      highlights: [
        "Island catamaran trip with scuba diving and parasailing",
        "Mandovi river sunset cruise with Goan folk music and DJ deck",
        "Heritage walking tour through the colorful Latin Quarter of Fontainhas"
      ]
    },
    {
      id: "himachal",
      slug: "himachal",
      name: "Himachal Circuit",
      region: "Himalayan Foothills",
      tagline: "Colonial hill retreats, Kufri peaks & apple orchards",
      bestTime: "March to June, October to February",
      intro: "Journey across the queen of hill stations. Stroll Shimla's historic Mall Road and Christ Church, gaze upon snow peaks from Kufri, and continue down the scenic Kullu Valley into Manali.",
      primaryPhoto: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=1200&q=80",
      secondaryPhoto: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80",
      overview: "The classic Shimla-Manali route blends British colonial heritage with grand Himalayan terrain, apple orchards, and pine-scented mountain air.",
      highlights: [
        "Kufri fun world and horse riding to Mahasu Peak",
        "Heritage walk on the Ridge and Lakkar Bazaar in Shimla",
        "Panoramic mountain drives following the cascading Beas River"
      ]
    },
    {
      id: "rajasthan",
      slug: "rajasthan",
      name: "Rajasthan",
      region: "Royal West, India",
      tagline: "Living sand dunes, lake palaces & grand stone forts",
      bestTime: "October to March",
      intro: "The land of Maharajas. Walk the ramparts of Jaipur's Amber Fort, cruise Lake Pichola at sunset in romantic Udaipur, and watch desert folk dancers around campfires in the dunes of Jaisalmer.",
      primaryPhoto: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
      secondaryPhoto: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1200&q=80",
      overview: "Immerse yourself in royal hospitality. Stay in heritage Havelis, taste authentic Dal Baati Churma, and experience the Thar desert under a canopy of stars.",
      highlights: [
        "Private boat ride past Jag Mandir on Udaipur's Lake Pichola",
        "Camel safari and luxury tented camp in the Sam Sand Dunes",
        "Exploring the massive hill fortresses of Mehrangarh and Amber"
      ]
    },
    {
      id: "ladakh",
      slug: "ladakh",
      name: "Ladakh",
      region: "Trans-Himalayas",
      tagline: "High mountain passes, turquoise lakes & Buddhist monasteries",
      bestTime: "May to September",
      intro: "The Land of High Passes. Cross Khardung La at 17,582 feet, ride double-humped camels through the white sand dunes of Nubra Valley, and witness the shifting sapphire blues of Pangong Tso.",
      primaryPhoto: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      secondaryPhoto: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      overview: "An awe-inspiring high-altitude desert where ancient Tibetan monasteries perch on barren cliffs and crystal lakes reflect snow peaks. Expert oxygen-assisted logistics provided.",
      highlights: [
        "Camping in luxury yurts beside the changeless waters of Pangong Tso",
        "Bactrian camel ride through the cold desert dunes of Hunder",
        "Morning prayer chant ceremonies at Thiksey and Hemis monasteries"
      ]
    },
    {
      id: "andaman",
      slug: "andaman",
      name: "Andaman Islands",
      region: "Bay of Bengal",
      tagline: "Coral reefs, pristine Radhanagar beach & tropical lagoons",
      bestTime: "October to May",
      intro: "India's tropical archipelago. Soft white sand beaches, clear turquoise lagoons, vibrant coral reefs, and luxury beach resorts on Havelock and Neil Island.",
      primaryPhoto: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      secondaryPhoto: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
      overview: "The Andaman Islands offer pure tropical bliss. Catch high-speed luxury catamarans between islands, snorkel with tropical fish, and watch golden sunsets at Asia's best beach.",
      highlights: [
        "Radhanagar Beach sunset rated among the top 7 beaches in the world",
        "Scuba diving and sea walk at Elephant Beach with certified PADI divemasters",
        "Historic Sound and Light Show at the Cellular Jail in Port Blair"
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // 3. TRIPS (12 Verified Entries from Crazy Tours and Travels Master Catalog)
  // --------------------------------------------------------------------------
  trips: [
    {
      id: "kerala-honeymoon-5d4n",
      slug: "kerala-honeymoon-5d4n",
      name: "Kerala Signature Honeymoon & Backwater Cruise",
      destination: "kerala",
      destinationName: "Kerala",
      travelStyle: "honeymoon",
      styleName: "Honeymoon & Romance",
      days: 5,
      duration: "5 days",
      price: 24500,
      priceFormatted: "from ₹24,500",
      groupSize: "Private Couple",
      pace: "Easy & Romantic",
      season: "All Year",
      nextDeparture: "Daily Private Departures",
      place: "Munnar, Thekkady & Alleppey",
      featured: true,
      summary: "Curated specially for couples seeking romance amidst nature. Experience tea hills, spice plantations, Periyar lake boating, backwater sunsets, and private cab comfort with dedicated 24/7 Telugu concierge care.",
      photos: [
        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"
      ],
      overview: "An enchanting 5-day romantic escape covering mist-clad Munnar tea gardens, Periyar wildlife sanctuary in Thekkady, serene Alleppey backwaters, and colonial Fort Cochin. Designed for couples who value privacy, comfort, and seamless chauffeured travel.",
      itinerary: [
        { day: 1, title: "Arrival in Cochin & Scenic Drive to Munnar", desc: "Warm reception at Cochin Airport or Ernakulam Railway Station by your personal chauffeur. Scenic drive past Valara and Cheeyappara waterfalls, spice plantations, and misty green hill slopes. Check into your romantic Munnar resort.", meals: "Dinner included", stay: "4-Star Munnar Hill Resort" },
        { day: 2, title: "Munnar Tea Valleys, Mattupetty & Echo Point", desc: "Full-day sightseeing covering Mattupetty Dam, Echo Point, Kundala Lake, and the Tata Tea Museum. Evening stroll through Munnar town and local spice markets. Special honeymoon bed decoration with fresh flower petals and celebration cake.", meals: "Breakfast & dinner included", stay: "4-Star Munnar Hill Resort" },
        { day: 3, title: "Munnar to Thekkady: Spice Hills & Periyar Boating", desc: "Post breakfast, scenic drive to Thekkady. Visit aromatic spice plantations (cardamom, pepper, cinnamon). Boating in Periyar Lake inside the Periyar Tiger Reserve to spot wild elephants and birdlife. Evening Kathakali dance show.", meals: "Breakfast included", stay: "Thekkady Heritage Resort" },
        { day: 4, title: "Thekkady to Alleppey: Backwaters & Houseboat Sunset", desc: "Drive to Alleppey, the Venice of the East. Check in to your luxury traditional houseboat at 12:00 PM. Cruise through palm-fringed lagoons, paddy fields, and canal hamlets while savoring freshly prepared Kerala meals cooked on board by personal chef.", meals: "Breakfast, Lunch & Dinner included", stay: "Alleppey Luxury Private Houseboat" },
        { day: 5, title: "Alleppey to Cochin: Fort Cochin Heritage & Departure", desc: "Enjoy sunrise over the backwaters. Disembark after breakfast and drive to Fort Cochin to visit Chinese Fishing Nets, St. Francis Church, and Jewish Synagogue. On-time transfer to Cochin Airport / Railway Station with unforgettable memories.", meals: "Breakfast included", stay: "Departure" }
      ],
      included: [
        "Dedicated AC Personal Cab for all 5 Days (Airport / Railway Transfers & Sightseeing)",
        "4 Nights Luxury Stays: 2N Munnar, 1N Thekkady, 1N Alleppey Houseboat",
        "Daily Delicious Buffet Breakfasts + Full Board on Houseboat",
        "Special Honeymoon Bed Decoration with fresh flowers & celebration cake",
        "Cheeyappara Waterfalls, Mattupetty Dam, Periyar Lake & Backwaters",
        "All fuel charges, toll taxes, parking fees, and driver allowances",
        "24/7 Dedicated Telugu & English Customer Care Concierge"
      ]
    },
    {
      id: "kashmir-romantic-couple-4d3n",
      slug: "kashmir-romantic-couple-4d3n",
      name: "Kashmir Romantic Couple & Honeymoon Package",
      destination: "kashmir",
      destinationName: "Kashmir",
      travelStyle: "honeymoon",
      styleName: "Honeymoon & Romance",
      days: 4,
      duration: "4 days",
      price: 23999,
      priceFormatted: "from ₹23,999",
      groupSize: "Private Couple",
      pace: "Easy",
      season: "March – November, Snow Season",
      nextDeparture: "Daily Private Departures",
      place: "Srinagar, Gulmarg & Pahalgam",
      featured: true,
      summary: "Experience Paradise on Earth with candlelit Shikara rides on Dal Lake, heritage luxury houseboat stays, snow activities at Gulmarg, and pine-clad meadows in Pahalgam.",
      photos: [
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80"
      ],
      overview: "Handcrafted for couples wanting an unforgettable romantic retreat in Kashmir. Private heated vehicle throughout, luxury heritage houseboat on Dal Lake, premium hotel stays, and guaranteed assistance for Gulmarg Gondola tickets.",
      itinerary: [
        { day: 1, title: "Arrival in Srinagar & Dal Lake Shikara Sunset", desc: "Warm welcome at Srinagar Airport. Transfer to your luxury heritage Houseboat. In the evening, enjoy a 1-hour romantic private Shikara ride across the serene waters of Dal Lake past floating gardens and Char Chinar.", meals: "Dinner included", stay: "Luxury Heritage Houseboat, Dal Lake" },
        { day: 2, title: "Srinagar to Gulmarg: Meadow of Flowers & Gondola", desc: "Day excursion to Gulmarg. Ride the world-famous Gulmarg Gondola cable car up to snow-clad Apharwat peak. Enjoy snow activities, skiing, and stunning views of the Pir Panjal range before returning to Srinagar.", meals: "Breakfast & dinner included", stay: "4-Star Hotel, Srinagar" },
        { day: 3, title: "Srinagar to Pahalgam: Valley of Shepherds", desc: "Scenic drive through saffron fields of Pampore to Pahalgam. Visit Betaab Valley, Aru Valley, and Chandanwari. Stroll along the gushing Lidder River. Evening return to Srinagar for Kashmiri Wazwan dinner.", meals: "Breakfast & dinner included", stay: "4-Star Hotel, Srinagar" },
        { day: 4, title: "Mughal Gardens Tour & Airport Departure", desc: "Morning visit to historic Mughal Gardens: Nishat Bagh and Shalimar Bagh. Shop for authentic saffron, dry fruits, and pashmina shawls. Timely transfer to Srinagar Airport for departure flight.", meals: "Breakfast included", stay: "Departure" }
      ],
      included: [
        "Private AC/Heated Sedan or Innova for all 4 days with experienced chauffeur",
        "3 Nights Accommodation: 1N Luxury Houseboat on Dal Lake, 2N 4-Star Srinagar Hotel",
        "Daily Buffet Breakfast and Multi-Course Dinners",
        "1-Hour Private Romantic Shikara Ride on Dal Lake",
        "Sightseeing in Gulmarg, Pahalgam, and Srinagar Mughal Gardens",
        "All toll, parking, driver allowances, and 24/7 dedicated travel desk support"
      ]
    },
    {
      id: "manali-adventure-escape-5d4n",
      slug: "manali-adventure-escape-5d4n",
      name: "Kullu-Manali Alpine Escape & Solang Paragliding",
      destination: "manali",
      destinationName: "Kullu-Manali",
      travelStyle: "adventure",
      styleName: "Adventure & Snow",
      days: 5,
      duration: "5 days",
      price: 12499,
      priceFormatted: "from ₹12,499",
      groupSize: "12 travelers max / Private",
      pace: "Moderate",
      season: "Year-round",
      nextDeparture: "Every Weekend Departure",
      place: "Kullu, Manali & Solang Valley",
      featured: true,
      summary: "Luxury semi-sleeper Volvo from Delhi, personal taxi for mountain excursions, Solang snow adventure, Atal Tunnel crossing, and riverside leisure along the Beas River.",
      photos: [
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=1200&q=80"
      ],
      overview: "Escape into the snow-capped wonderland of Himachal Pradesh. Combines comfortable overnight Volvo journeys from Delhi/Chandigarh with dedicated private cab excursions to Solang Valley, Atal Tunnel, and Old Manali's vibrant cafe culture.",
      itinerary: [
        { day: 1, title: "Overnight Luxury Volvo from Delhi to Manali", desc: "Board your AC Semi-Sleeper Luxury Volvo bus from Majnu Ka Tilla or Kashmiri Gate, Delhi at 6:00 PM. Relax during the comfortable overnight journey through Chandigarh and Bilaspur.", meals: "Complimentary water bottle", stay: "Luxury AC Volvo Bus" },
        { day: 2, title: "Arrival in Manali & Local Sightseeing", desc: "Arrive in Manali at 8:00 AM. Meet your driver and check in to your mountain resort. Post lunch, visit ancient Hadimba Devi Temple, Vashisht Hot Sulphur Springs, and evening stroll on Mall Road.", meals: "Dinner included", stay: "4-Star Mountain Resort, Manali" },
        { day: 3, title: "Solang Valley Snow Adventure & Atal Tunnel", desc: "Excursion to Solang Valley. Enjoy thrilling activities like paragliding, zorbing, and quad biking. Drive through the historic Atal Tunnel to Sissu waterfall in Lahaul Valley. Evening campfire with music.", meals: "Breakfast & dinner included", stay: "4-Star Mountain Resort, Manali" },
        { day: 4, title: "Kullu Valley Rafting & Naggar Castle", desc: "Drive to Kullu for exciting river rafting on the Beas River and a visit to Kullu Shawl Weaving Centers. Explore heritage Naggar Castle and Roerich Art Gallery.", meals: "Breakfast & dinner included", stay: "4-Star Mountain Resort, Manali" },
        { day: 5, title: "Old Manali Cafes & Evening Volvo to Delhi", desc: "Check out by 11:00 AM. Explore Old Manali's riverside bakeries and souvenir shops. Board the return luxury Volvo bus to Delhi at 5:00 PM with cherished mountain memories.", meals: "Breakfast included", stay: "Overnight Volvo to Delhi" }
      ],
      included: [
        "Round-trip AC Luxury Volvo bus tickets (Delhi – Manali – Delhi)",
        "3 Nights accommodation in premium mountain-view hotel with private balcony",
        "3 Daily buffet breakfasts and 3 multi-course dinners",
        "Dedicated private cab for all local sightseeing, Solang, and Kullu",
        "Driver charges, fuel, toll taxes, and 24/7 trip assistance"
      ]
    },
    {
      id: "goa-bachelors-party-4d3n",
      slug: "goa-bachelors-party-4d3n",
      name: "Goa Bachelors Beach, Watersports & Nightlife Bash",
      destination: "goa",
      destinationName: "Goa",
      travelStyle: "group",
      styleName: "Bachelors & Friends Group",
      days: 4,
      duration: "4 days",
      price: 9499,
      priceFormatted: "from ₹9,499",
      groupSize: "Minimum 4 – 12 Persons",
      pace: "High Energy",
      season: "October – May",
      nextDeparture: "Daily Departures",
      place: "North & South Goa",
      featured: true,
      summary: "The ultimate friends getaway featuring Calangute & Baga beach action, 5-in-1 combo watersports with scuba diving, private AC cab throughout, and VIP entry into Tito's Lane.",
      photos: [
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80"
      ],
      overview: "Designed for bachelor groups and college friends who want maximum fun without logistics headaches. Private AC cab picks you up from Goa Airport/Thivim station, takes you to top beach clubs, watersport islands, and midnight shacks.",
      itinerary: [
        { day: 1, title: "Goa Arrival & North Goa Beach Vibe", desc: "Arrival at Goa Airport/Station. Private transfer to your resort in Calangute/Baga. Relax by the pool. Evening walk down to Baga Beach and legendary nightlife at Tito's Lane.", meals: "Welcome drink", stay: "3/4-Star Beach Resort with Pool" },
        { day: 2, title: "Grand Island Catamaran & Scuba Diving", desc: "Full-day boat trip to Grand Island. Dolphin spotting on the way, followed by scuba diving with underwater video, parasailing, jet ski, banana ride, and bumper boat. Lunch and beers on island.", meals: "Breakfast & island lunch included", stay: "Beach Resort, Calangute" },
        { day: 3, title: "Fort Aguada, Chapora & Sunset Cruise", desc: "Sightseeing of historic Portuguese forts: Aguada Fort and 'Dil Chahta Hai' Chapora Fort. Sunset beach chilling at Anjuna & Vagator. 1-Hour Mandovi River DJ Cruise in the evening.", meals: "Breakfast included", stay: "Beach Resort, Calangute" },
        { day: 4, title: "South Goa Heritage & Departure", desc: "Explore Old Goa Basilicas (Bom Jesus) and Panjim colorful Fontainhas quarters. Shop for cashew nuts and feni before transfer to Airport/Railway Station.", meals: "Breakfast included", stay: "Departure" }
      ],
      included: [
        "Dedicated AC Private Cab for all 4 days with pickup and drop",
        "3 Nights Resort Stay with swimming pool near North Goa beaches",
        "3 Daily Breakfasts at resort",
        "Grand Island Boat Trip + Scuba Diving with Video + 4 Water Sports",
        "1-Hour Mandovi River DJ Sunset Cruise Ticket",
        "All parking, toll, driver charges, and 24/7 concierge support"
      ]
    },
    {
      id: "kashmir-sonmarg-group-5d4n",
      slug: "kashmir-sonmarg-group-5d4n",
      name: "Kashmir Grand Group Expedition with Sonmarg",
      destination: "kashmir",
      destinationName: "Kashmir",
      travelStyle: "adventure",
      styleName: "Adventure & Snow",
      days: 5,
      duration: "5 days",
      price: 11499,
      priceFormatted: "from ₹11,499",
      groupSize: "12 travelers max",
      pace: "Moderate",
      season: "April – November",
      nextDeparture: "Every Saturday Departure",
      place: "Srinagar, Sonmarg, Gulmarg & Pahalgam",
      featured: true,
      summary: "Full Himalayan circuit: Thajiwas Glacier at Sonmarg, Apharwat Peak at Gulmarg, Betaab Valley at Pahalgam, and cedar houseboat on Dal Lake.",
      photos: [
        "https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80"
      ],
      overview: "Experience every face of Kashmir in 5 glorious days. Designed for groups of friends and families who want full coverage of Kashmir's iconic valleys with certified local leaders.",
      itinerary: [
        { day: 1, title: "Srinagar Airport Welcome & Houseboat Living", desc: "Pickup from Srinagar Airport and transfer to Nigeen/Dal Lake Houseboat. Sunset Shikara ride across the water.", meals: "Dinner included", stay: "Dal Lake Heritage Houseboat" },
        { day: 2, title: "Sonmarg 'Meadow of Gold' & Thajiwas Glacier", desc: "Day trip to Sonmarg along the roaring Sindh River. Sledge ride to Thajiwas Glacier snow fields.", meals: "Breakfast & dinner included", stay: "Hotel Grand, Srinagar" },
        { day: 3, title: "Gulmarg Gondola & Alpine Meadows", desc: "Full day in Gulmarg. Gondola Phase 1 & 2 rides, golf course views, and snow slopes.", meals: "Breakfast & dinner included", stay: "Hotel Grand, Srinagar" },
        { day: 4, title: "Pahalgam Valley & Lidder Riverwalk", desc: "Scenic drive through apple orchards to Pahalgam. Betaab Valley, Aru Valley, and local market shopping.", meals: "Breakfast & dinner included", stay: "Hotel Grand, Srinagar" },
        { day: 5, title: "Srinagar Mughal Gardens & Departure", desc: "Morning visit to Nishat and Shalimar Bagh. Transfer to Srinagar Airport.", meals: "Breakfast included", stay: "Departure" }
      ],
      included: [
        "Dedicated AC/Heated Tempo Traveller or Innova throughout",
        "4 Nights stays: 1N Houseboat, 3N 4-Star Srinagar Hotel",
        "4 Breakfasts and 4 Dinners included",
        "1-Hour Shikara ride on Dal Lake",
        "Full sightseeing of Sonmarg, Gulmarg, Pahalgam, and Srinagar",
        "Toll, parking, and 24/7 dedicated local guide support"
      ]
    },
    {
      id: "kerala-varkala-honeymoon-6d5n",
      slug: "kerala-varkala-honeymoon-6d5n",
      name: "Kerala Varkala Clifftops & Serene Backwaters",
      destination: "kerala",
      destinationName: "Kerala",
      travelStyle: "beach-islands",
      styleName: "Beach and Coastal",
      days: 6,
      duration: "6 days",
      price: 28900,
      priceFormatted: "from ₹28,900",
      groupSize: "Private Couple",
      pace: "Easy & Relaxed",
      season: "October – April",
      nextDeparture: "Daily Private Departures",
      place: "Munnar, Thekkady, Alleppey & Varkala Cliff",
      featured: true,
      summary: "The ultimate Kerala grand honeymoon combining misty Munnar tea hills, spice estates, Alleppey houseboat, and the dramatic red sandstone cliffs of Varkala Beach.",
      photos: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80"
      ],
      overview: "From mountain heights to sea cliffs. Spend two nights in misty Munnar, cruise on a private houseboat in Alleppey, and end with two nights at a luxury cliff resort overlooking the Arabian Sea at Varkala.",
      itinerary: [
        { day: 1, title: "Cochin Arrival & Scenic Transfer to Munnar", desc: "Meet your private chauffeur. Stop at Cheeyappara and Valara waterfalls before arriving at Munnar.", meals: "Dinner included", stay: "Munnar Tea Resort" },
        { day: 2, title: "Munnar Tea Estates & Honeymoon Cake Celebration", desc: "Visit Mattupetty Dam, Echo Point, and Tea Museum. Evening candlelit dinner with honeymoon bed decoration.", meals: "Breakfast & dinner included", stay: "Munnar Tea Resort" },
        { day: 3, title: "Munnar to Thekkady Spice Sanctuary", desc: "Drive to Thekkady. Spice garden tour and evening boating in Periyar Lake to watch wildlife.", meals: "Breakfast included", stay: "Thekkady Forest Lodge" },
        { day: 4, title: "Thekkady to Alleppey Houseboat Cruise", desc: "Board your private houseboat in Alleppey at noon. Cruise through the palm lagoons with freshly prepared local meals.", meals: "Breakfast, Lunch & Dinner", stay: "Private Alleppey Houseboat" },
        { day: 5, title: "Alleppey to Varkala Clifftops & Sunset", desc: "Disembark and drive to Varkala Cliff. Visit Jatayu Earth's Center on the way. Sunset clifftop cafe dinner overlooking the waves.", meals: "Breakfast included", stay: "Varkala Cliff Beach Resort" },
        { day: 6, title: "Trivandrum Temple & Airport Departure", desc: "Morning beach walk. Transfer to Trivandrum Airport with a visit to Padmanabhaswamy Temple on the way.", meals: "Breakfast included", stay: "Departure" }
      ],
      included: [
        "Dedicated AC Cab for all 6 days with chauffeur",
        "5 Nights accommodation: 2N Munnar, 1N Thekkady, 1N Houseboat, 1N Varkala Cliff",
        "Daily Breakfasts + Full Board on Houseboat",
        "Jatayu Earth Center visit and Varkala cliff sunset",
        "Flower bed decoration and anniversary cake for couples",
        "24/7 Telugu concierge care throughout Kerala"
      ]
    },
    {
      id: "manali-rohtang-snow-safari-6d5n",
      slug: "manali-rohtang-snow-safari-6d5n",
      name: "Manali Rohtang Snow Safari & Kasol Parvati Valley",
      destination: "manali",
      destinationName: "Kullu-Manali",
      travelStyle: "adventure",
      styleName: "Adventure & Snow",
      days: 6,
      duration: "6 days",
      price: 16999,
      priceFormatted: "from ₹16,999",
      groupSize: "12 travelers max",
      pace: "Moderate",
      season: "March – November",
      nextDeparture: "Every Friday Departure",
      place: "Manali, Rohtang Pass, Kasol & Manikaran",
      featured: true,
      summary: "Comprehensive Himachal mountain adventure covering Rohtang snow heights, Solang Valley, the Bohemian cafes of Kasol, and sacred hot springs at Manikaran.",
      photos: [
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=1200&q=80"
      ],
      overview: "The most scenic road trip in the Western Himalayas. Features high mountain passes, snowy slopes, Israel-style cafes in Kasol, riverside camping, and luxury Volvo travel.",
      itinerary: [
        { day: 1, title: "Delhi to Manali Overnight Luxury Volvo", desc: "Overnight semi-sleeper Volvo from Delhi Majnu Ka Tilla to Manali.", meals: "Water bottle included", stay: "Volvo Overnight" },
        { day: 2, title: "Manali Arrival & Hadimba Temple Tour", desc: "Check-in to resort, relax. Hadimba Temple, Vashisht Sulphur baths, and Mall Road.", meals: "Dinner included", stay: "Manali Alpine Resort" },
        { day: 3, title: "Rohtang Pass Snow Highway & Solang", desc: "High-altitude drive to Rohtang Pass (13,058 ft) and Solang Valley snow adventure activities.", meals: "Breakfast & dinner included", stay: "Manali Alpine Resort" },
        { day: 4, title: "Manali to Kasol & Parvati River Camp", desc: "Drive to Kasol. Check-in to riverside luxury camps. Explore Chalal village and local bakery cafes.", meals: "Breakfast & dinner included", stay: "Kasol Riverside Camp" },
        { day: 5, title: "Manikaran Hot Springs & Volvo to Delhi", desc: "Visit sacred Manikaran Sahib Gurudwara and dip in natural healing hot springs. Evening Volvo to Delhi.", meals: "Breakfast included", stay: "Overnight Volvo" },
        { day: 6, title: "Morning Arrival in Delhi", desc: "Arrive in Delhi by 8:00 AM with unforgettable mountain memories.", meals: "N/A", stay: "Trip Ends" }
      ],
      included: [
        "Roundtrip Semi-Sleeper AC Volvo (Delhi – Manali | Kasol – Delhi)",
        "3 Nights Hotel Stays + 1 Night Riverside Camp in Kasol",
        "Daily Breakfasts and Dinners",
        "Dedicated private taxi for Rohtang Pass, Solang, Kasol, and Manikaran",
        "Campfire night with music in Parvati Valley"
      ]
    },
    {
      id: "goa-romantic-honeymoon-4d3n",
      slug: "goa-romantic-honeymoon-4d3n",
      name: "Goa Luxury Romantic Honeymoon & Sunset Escapade",
      destination: "goa",
      destinationName: "Goa",
      travelStyle: "honeymoon",
      styleName: "Honeymoon & Romance",
      days: 4,
      duration: "4 days",
      price: 22999,
      priceFormatted: "from ₹22,999",
      groupSize: "Private Couple",
      pace: "Easy",
      season: "October – May",
      nextDeparture: "Daily Private Departures",
      place: "South Goa & Mandovi River",
      featured: false,
      summary: "Candlelit dinners by the sea, 5-star South Goa beachfront resort, private champagne Mandovi cruise, and couples spa relaxation.",
      photos: [
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80"
      ],
      overview: "A tranquil romantic escape far from crowded tourist shacks. Focuses on peaceful South Goa beaches, Portuguese heritage estates, private river cruising, and luxury resort comfort.",
      itinerary: [
        { day: 1, title: "Goa Arrival & Beachfront Resort Check-in", desc: "Chauffeured pickup from Goa Dabolim/MOPA Airport. Check-in to your luxury beachfront resort in South Goa. Honeymoon cake celebration.", meals: "Dinner included", stay: "5-Star South Goa Beach Resort" },
        { day: 2, title: "Private Mandovi Sunset Cruise & Old Goa", desc: "Morning couples pool time. Afternoon visit to heritage Old Goa churches and an exclusive 2-hour private boat cruise on the Mandovi River with wine.", meals: "Breakfast & dinner included", stay: "5-Star South Goa Beach Resort" },
        { day: 3, title: "Dudhsagar Waterfall Jeep Safari & Spice Farm", desc: "Day excursion in an open 4x4 Jeep through the jungle to Dudhsagar Waterfalls. Traditional Goan feast at a spice plantation.", meals: "Breakfast & lunch included", stay: "5-Star South Goa Beach Resort" },
        { day: 4, title: "Candlelight Beach Stroll & Airport Departure", desc: "Late breakfast by the sea. Souvenir shopping and on-time private transfer to Goa Airport.", meals: "Breakfast included", stay: "Departure" }
      ],
      included: [
        "Private AC Chauffeur-driven Sedan for all 4 days",
        "3 Nights luxury beachfront resort stay with breakfast",
        "Special honeymoon bed decor, celebration cake and bottle of wine",
        "Private Mandovi sunset cruise experience",
        "Dudhsagar waterfall 4x4 Jeep safari and spice farm lunch"
      ]
    },
    {
      id: "himachal-grand-circuit-6d5n",
      slug: "himachal-grand-circuit-6d5n",
      name: "Himachal Grand Circuit: Shimla & Manali Panorama",
      destination: "himachal",
      destinationName: "Himachal Circuit",
      travelStyle: "culture",
      styleName: "Heritage & Living Culture",
      days: 6,
      duration: "6 days",
      price: 18500,
      priceFormatted: "from ₹18,500",
      groupSize: "12 travelers max / Family",
      pace: "Moderate",
      season: "All Year",
      nextDeparture: "Every Weekend Departure",
      place: "Shimla, Kufri, Kullu & Manali",
      featured: false,
      summary: "The definitive Western Himalayan journey connecting the British summer capital of Shimla to the snowy adventure valleys of Kullu and Manali.",
      photos: [
        "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80"
      ],
      overview: "Combines colonial architecture, Kufri snow views, Apple orchards, the Beas river, and Solang snow activities in one seamless 6-day holiday.",
      itinerary: [
        { day: 1, title: "Delhi/Chandigarh to Shimla Hill Drive", desc: "Scenic mountain highway drive up to Shimla. Evening walk on the Ridge and Mall Road.", meals: "Dinner included", stay: "Heritage Shimla Hotel" },
        { day: 2, title: "Kufri Snow View & Green Valley Excursion", desc: "Excursion to Kufri, Hassan Valley, and Jakhoo Temple.", meals: "Breakfast & dinner included", stay: "Heritage Shimla Hotel" },
        { day: 3, title: "Shimla to Manali via Kullu Valley", desc: "Spectacular drive via Sundernagar Lake, Pandoh Dam, and Kullu Shawl Weavers.", meals: "Breakfast & dinner included", stay: "Manali Resort" },
        { day: 4, title: "Solang Valley Snow Adventure & Atal Tunnel", desc: "Full day in Solang Valley. Paragliding, snow scooter, and drive through Atal Tunnel.", meals: "Breakfast & dinner included", stay: "Manali Resort" },
        { day: 5, title: "Manali Hadimba Temple & Vashisht Baths", desc: "Old Manali wooden temples, hot sulphur springs, and handicraft markets.", meals: "Breakfast & dinner included", stay: "Manali Resort" },
        { day: 6, title: "Manali to Delhi/Chandigarh Departure", desc: "Descent down the mountain highway for flight/train connections.", meals: "Breakfast included", stay: "Departure" }
      ],
      included: [
        "Dedicated AC Private Cab throughout the 6-day circuit",
        "5 Nights stays: 2N Shimla, 3N Manali in 4-Star mountain hotels",
        "Daily Breakfasts and Dinners",
        "Full sightseeing of Shimla, Kufri, Kullu, and Manali",
        "All toll taxes, parking, driver allowances, and 24/7 care"
      ]
    },
    {
      id: "rajasthan-royal-palaces-7d6n",
      slug: "rajasthan-royal-palaces-7d6n",
      name: "Royal Rajasthan: Jaipur, Jodhpur & Udaipur Palaces",
      destination: "rajasthan",
      destinationName: "Rajasthan",
      travelStyle: "culture",
      styleName: "Heritage & Living Culture",
      days: 7,
      duration: "7 days",
      price: 26500,
      priceFormatted: "from ₹26,500",
      groupSize: "12 travelers max",
      pace: "Moderate",
      season: "October – March",
      nextDeparture: "Weekly Departures",
      place: "Jaipur, Jodhpur & Udaipur",
      featured: false,
      summary: "Experience the grand fortresses of the Rajputs: Amber Fort in the Pink City, Mehrangarh in the Blue City, and Lake Pichola in the City of Lakes.",
      photos: [
        "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?auto=format&fit=crop&w=1200&q=80"
      ],
      overview: "A journey through living history and majestic Rajput royal architecture. Stay in authentic heritage hotels, savor Rajasthani thalis, and ride wooden boats past white marble water palaces.",
      itinerary: [
        { day: 1, title: "Arrival in Jaipur (The Pink City)", desc: "Warm welcome in Jaipur. Check in to heritage hotel. Evening visit to Birla Temple and Chokhi Dhani ethnic village.", meals: "Dinner included", stay: "Jaipur Heritage Haveli" },
        { day: 2, title: "Amber Fort & Royal City Palace", desc: "Elephant/Jeep ride up to Amber Fort. Photo stop at Hawa Mahal and Jantar Mantar observatory.", meals: "Breakfast & dinner included", stay: "Jaipur Heritage Haveli" },
        { day: 3, title: "Jaipur to Jodhpur (The Blue City)", desc: "Drive to Jodhpur via Ajmer Dargah or Pushkar Brahma Temple. Evening walk through the indigo blue alleys of the old city.", meals: "Breakfast & dinner included", stay: "Jodhpur Palace Hotel" },
        { day: 4, title: "Mehrangarh Fort & Drive to Udaipur", desc: "Tour the colossal Mehrangarh Fort and Jaswant Thada. Scenic drive across the Aravalli hills to Udaipur, stopping at Ranakpur Jain Temple.", meals: "Breakfast included", stay: "Udaipur Lakeview Resort" },
        { day: 5, title: "Udaipur City Palace & Lake Pichola Boat", desc: "Explore the City Palace complex and Saheliyon Ki Bari. Evening sunset boat ride on Lake Pichola past Jag Mandir.", meals: "Breakfast & dinner included", stay: "Udaipur Lakeview Resort" },
        { day: 6, title: "Monsoon Palace & Artisan Markets", desc: "Visit Sajjangarh (Monsoon Palace) with panoramic lake views. Shop for miniature paintings and leather craft.", meals: "Breakfast & dinner included", stay: "Udaipur Lakeview Resort" },
        { day: 7, title: "Udaipur Departure", desc: "Breakfast by the water and transfer to Udaipur Airport or Railway Station.", meals: "Breakfast included", stay: "Departure" }
      ],
      included: [
        "Dedicated AC Private Cab for the entire 7-day Rajasthan triangle",
        "6 Nights stays in verified 4-star heritage Havelis and palace hotels",
        "Daily Breakfasts and Dinners",
        "Sunset boat cruise on Lake Pichola in Udaipur",
        "All monument transfers, driver allowances, toll, and 24/7 support"
      ]
    },
    {
      id: "ladakh-high-pass-odyssey-7d6n",
      slug: "ladakh-high-pass-odyssey-7d6n",
      name: "Ladakh High Pass Odyssey: Nubra & Pangong Tso",
      destination: "ladakh",
      destinationName: "Ladakh",
      travelStyle: "adventure",
      styleName: "Adventure & Snow",
      days: 7,
      duration: "7 days",
      price: 32000,
      priceFormatted: "from ₹32,000",
      groupSize: "10 travelers max",
      pace: "High Altitude Adventure",
      season: "May – September",
      nextDeparture: "Weekly Departures",
      place: "Leh, Khardung La, Nubra Valley & Pangong",
      featured: false,
      summary: "Cross the highest motorable road in the world at Khardung La, ride double-humped camels in Nubra, and sleep beside the changeless blue waters of Pangong Tso.",
      photos: [
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80"
      ],
      overview: "An expedition across the Roof of the World. Designed with careful acclimatization in Leh, backup oxygen canisters, and certified local Ladakhi mountain drivers.",
      itinerary: [
        { day: 1, title: "Leh Airport Arrival & Acclimatization", desc: "Arrival at Leh Airport (11,500 ft). Complete rest day to acclimatize to high altitude. Evening walk to Shanti Stupa.", meals: "Dinner included", stay: "4-Star Hotel, Leh" },
        { day: 2, title: "Sham Valley: Hall of Fame & Magnetic Hill", desc: "Visit Hall of Fame War Memorial, Magnetic Hill, Gurudwara Pathar Sahib, and Indus-Zanskar Sangam confluence.", meals: "Breakfast & dinner included", stay: "4-Star Hotel, Leh" },
        { day: 3, title: "Leh to Nubra Valley via Khardung La (17,582 ft)", desc: "Cross the legendary Khardung La pass. Descend into Nubra Valley. Ride Bactrian double-humped camels in Hunder sand dunes.", meals: "Breakfast & dinner included", stay: "Luxury Deluxe Camp, Nubra" },
        { day: 4, title: "Nubra Valley to Pangong Lake via Shyok River", desc: "Scenic off-road drive following the Shyok River directly to the world-famous Pangong Tso (14,270 ft). Stargazing at night.", meals: "Breakfast & dinner included", stay: "Pangong Lake Luxury Camp" },
        { day: 5, title: "Pangong Sunrise & Return to Leh via Chang La", desc: "Watch the lake change shades at dawn. Cross Chang La pass (17,590 ft) back to Leh. Visit Thiksey Monastery on route.", meals: "Breakfast & dinner included", stay: "4-Star Hotel, Leh" },
        { day: 6, title: "Leh Palace, Shey & Local Market", desc: "Explore Leh Palace, Shey Monastery, and shop for Tibetan silver and apricots.", meals: "Breakfast & dinner included", stay: "4-Star Hotel, Leh" },
        { day: 7, title: "Leh Airport Departure", desc: "Early morning transfer to Leh Airport with aerial views of the Himalayas.", meals: "Breakfast included", stay: "Departure" }
      ],
      included: [
        "Dedicated private 4x4 Scorpio / Innova throughout Ladakh",
        "6 Nights stays: 4N Leh Hotel, 1N Nubra Luxury Camp, 1N Pangong Lake Camp",
        "Daily Breakfasts and Dinners",
        "Inner Line Permits and Wildlife Fee for Khardung La, Nubra, and Pangong",
        "Oxygen cylinder in vehicle and 24/7 local Ladakhi tour manager"
      ]
    },
    {
      id: "andaman-tropical-coral-6d5n",
      slug: "andaman-tropical-coral-6d5n",
      name: "Andaman Tropical Island Hopping & Coral Reefs",
      destination: "andaman",
      destinationName: "Andaman Islands",
      travelStyle: "beach-islands",
      styleName: "Beach and Coastal",
      days: 6,
      duration: "6 days",
      price: 29800,
      priceFormatted: "from ₹29,800",
      groupSize: "12 travelers max / Family",
      pace: "Easy Island Rhythm",
      season: "October – May",
      nextDeparture: "Daily Private Departures",
      place: "Port Blair, Havelock & Neil Island",
      featured: false,
      summary: "Luxury catamaran cruise across the Bay of Bengal, Radhanagar sunset, scuba diving at Elephant Beach, and natural rock bridges on Neil Island.",
      photos: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80"
      ],
      overview: "A tropical island paradise with crystal clear waters and pristine white sands. Includes premium Makruzz / Nautika private cruise transfers between islands and oceanfront beach resorts.",
      itinerary: [
        { day: 1, title: "Port Blair Arrival & Cellular Jail Light & Sound", desc: "Arrival at Veer Savarkar Airport. Check-in to Port Blair hotel. Visit historic Cellular Jail and watch the poignant evening Sound & Light show.", meals: "Dinner included", stay: "Port Blair 4-Star Resort" },
        { day: 2, title: "High-Speed Catamaran to Havelock Island & Radhanagar", desc: "Board the luxury Makruzz catamaran to Havelock. Check in to beachfront resort. Spend the afternoon at Radhanagar Beach (Beach No. 7).", meals: "Breakfast & dinner included", stay: "Havelock Beach Resort" },
        { day: 3, title: "Elephant Beach Snorkeling & Coral Reefs", desc: "Speedboat ride to Elephant Beach. Complimentary snorkeling session and water sports amidst vibrant living coral gardens.", meals: "Breakfast & dinner included", stay: "Havelock Beach Resort" },
        { day: 4, title: "Havelock to Neil Island: Natural Rock Bridge", desc: "Catamaran transfer to quiet Neil Island. Visit Bharatpur Beach, Laxmanpur Beach sunset, and the geological wonder of the Natural Coral Bridge.", meals: "Breakfast & dinner included", stay: "Neil Island Resort" },
        { day: 5, title: "Neil to Port Blair & Local Souvenirs", desc: "Morning cruise back to Port Blair. Visit Sagarika Emporium for pearl jewelry and shell handicrafts. Farewell seafood dinner.", meals: "Breakfast & dinner included", stay: "Port Blair Resort" },
        { day: 6, title: "Port Blair Airport Departure", desc: "Transfer to Port Blair Airport for onward flight home.", meals: "Breakfast included", stay: "Departure" }
      ],
      included: [
        "Premium AC High-Speed Catamaran tickets (Port Blair – Havelock – Neil – Port Blair)",
        "5 Nights stays: 2N Port Blair, 2N Havelock, 1N Neil Island in beachfront resorts",
        "Daily Breakfasts and Dinners",
        "Dedicated AC Private Cab for all island transfers and port shuttles",
        "Cellular Jail entry and Elephant Beach boat transfers"
      ]
    }
  ],

  // --------------------------------------------------------------------------
  // 4. JOURNAL ARTICLES (6 Entries)
  // --------------------------------------------------------------------------
  articles: [
    {
      id: "art-1",
      slug: "kerala-monsoon-or-winter-guide",
      title: "Kerala Backwaters: When to Go, What to Pack and Houseboat Secrets",
      category: "Planning",
      readTime: "5 min read",
      date: "October 2026",
      author: "K. Ramesh, Head Trip Designer",
      cover: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
      excerpt: "Why November to February offers cool breezes, and how our private chauffeurs find quiet canals away from the tourist queues.",
      content: `
        <p>Most travelers imagine Kerala as a single destination, but the transition from the mist-wrapped tea hills of Munnar to the tropical canal networks of Alleppey involves completely distinct microclimates.</p>
        <p>In this packing and season guide, we share honest advice on choosing between overnight houseboats versus day shikaras, the best spice plantations in Thekkady, and why our dedicated AC personal cabs transform the entire travel experience.</p>
        <h3>Choosing the Right Month</h3>
        <p>From October through March, Kerala enjoys dry, sunlit days and cool mountain nights in Munnar. If you are seeking romantic privacy, November and February are the golden months with quiet waterways and uncrowded waterfalls.</p>
      `
    },
    {
      id: "art-2",
      slug: "kashmir-gondola-snow-safari-guide",
      title: "How to Plan Kashmir: Gulmarg Gondola Tips & Houseboat Etiquette",
      category: "On the Road",
      readTime: "6 min read",
      date: "September 2026",
      author: "Adil Lone, Senior Srinagar Leader",
      cover: "https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=800&q=80",
      excerpt: "Phase 1 versus Phase 2 Gondola passes, Dal Lake Shikara secrets, and staying warm in traditional cedar wood houseboats.",
      content: `
        <p>A winter or autumn journey into Kashmir is unmatched in beauty, but advance planning is critical. With daily visitor limits on the Gulmarg Gondola, our team ensures pre-booked slots so you spend your morning on snow slopes instead of in ticket queues.</p>
        <p>We also share the authentic story of carved walnut houseboats, the ritual of Noon Chai (pink tea), and our top recommended walks through Pahalgam's Betaab Valley.</p>
      `
    },
    {
      id: "art-3",
      slug: "manali-solang-atal-tunnel-handbook",
      title: "Crossing the Atal Tunnel: What to Expect in Lahaul & Solang",
      category: "Destinations",
      readTime: "4 min read",
      date: "August 2026",
      author: "Vikram Thakur, Manali Expedition Leader",
      cover: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
      excerpt: "From deodar forest hills to the high barren mountain desert of Lahaul within 15 minutes of engineering wonder.",
      content: `
        <p>The Atal Tunnel at 10,000 feet transformed travel to Manali. Driving through the 9.02 km tunnel takes you instantly from the green deodar forests of Dhundi into the stark, dramatic lunar peaks of Sissu in Lahaul Valley.</p>
        <p>Here is our insider route for combining Solang Valley paragliding, river crossing in Kullu, and finding quiet wooden homestays in Old Manali.</p>
      `
    },
    {
      id: "art-4",
      slug: "goa-offbeat-beaches-and-heritage",
      title: "Beyond the Beach Shacks: South Goa Serenity & Old Latin Quarters",
      category: "Destinations",
      readTime: "5 min read",
      date: "July 2026",
      author: "Maria Fernandes, Coastal Guide",
      cover: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
      excerpt: "Where to find quiet sands in Palolem, colorful Portuguese homes in Fontainhas, and organic spice plantation lunches.",
      content: `
        <p>While Baga and Calangute offer electric energy, South Goa retains the gentle, unhurried rhythm of classic Konkan coastal life. We explore hidden coves, heritage churches, and sunset river cruises.</p>
      `
    },
    {
      id: "art-5",
      slug: "ladakh-high-altitude-packing-tips",
      title: "Packing for Ladakh: Acclimatization, Warmth and Photography",
      category: "Planning",
      readTime: "5 min read",
      date: "June 2026",
      author: "Stanzin Dorje, Leh Mountaineer",
      cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      excerpt: "Essential gear for 14,000 feet, avoiding AMS, and capturing the intense blue waters of Pangong Tso.",
      content: `
        <p>Preparing for high altitude in Ladakh is about hydration, patience, and smart layering. Our guide covers everything you need to know before touching down at Kushok Bakula Rimpochee Airport in Leh.</p>
      `
    },
    {
      id: "art-6",
      slug: "why-private-cab-matters",
      title: "Why We Provide Dedicated Personal Cabs on Every Route",
      category: "Behind the Scenes",
      readTime: "4 min read",
      date: "May 2026",
      author: "V. Vijay, Founder & Director",
      cover: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
      excerpt: "No shared waiting, no rigid schedules: why your own chauffeur and 24/7 Telugu concierge care changes everything.",
      content: `
        <p>We built Crazy Tours and Travels on a simple principle: holidays should feel liberating, not constrained by large coach schedules. Having your dedicated cab means you stop for photos whenever you want, linger at scenic view points, and travel with total peace of mind.</p>
      `
    }
  ],

  // --------------------------------------------------------------------------
  // 5. TRAVELER REVIEWS (8 Entries)
  // --------------------------------------------------------------------------
  reviews: [
    {
      id: "rev-1",
      author: "Sneha & Karthik Reddy",
      tripLabel: "Kerala Signature Honeymoon",
      quote: "Our chauffeur Santosh felt like family. The houseboat in Alleppey was private, clean, and the food was delicious. 24/7 Telugu customer care gave our parents complete peace of mind back home in Hyderabad.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "rev-2",
      author: "Praveen Kumar & Friends",
      tripLabel: "Manali Bachelor Group Package",
      quote: "Six of us took the Delhi Volvo to Manali. Solang Valley paragliding was crazy! The hotel had great mountain views and the campfire with DJ was the highlight of our college reunion.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "rev-3",
      author: "Ananya & Rajesh Varma",
      tripLabel: "Kashmir Romantic Couple Package",
      quote: "Waking up on a cedar houseboat on Dal Lake was magical. Crazy Tours pre-booked our Gulmarg Gondola tickets so we skipped a 2-hour queue. Truly luxury treatment from arrival to departure.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "rev-4",
      author: "Dr. Sudhakar Rao & Family",
      tripLabel: "Goa Grand Family Heritage Holiday",
      quote: "Traveled with my elderly parents and kids. Having a dedicated Innova for all 4 days made sightseeing effortless. The spice plantation tour and sunset cruise were exceptionally well managed.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "rev-5",
      author: "Rohit & Meera Sharma",
      tripLabel: "Kullu-Manali Alpine Escape",
      quote: "The Atal Tunnel drive into Sissu was breathtaking. Our driver knew exactly where to stop for snow photos without crowds. Honest fixed pricing with zero hidden charges.",
      avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "rev-6",
      author: "Kavitha & Suresh Goud",
      tripLabel: "Kerala Varkala Clifftops",
      quote: "Munnar tea hills plus Varkala beach cliffs in one package was the best decision. The Telugu customer care desk was available anytime we called. 10/10 recommendation for couples.",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "rev-7",
      author: "Vivek & Group",
      tripLabel: "Goa Bachelors Beach & Watersports",
      quote: "Grand Island scuba diving and water sports combo was top notch. Picked up right from our resort in Calangute on time. Crazy Tours is the real deal for holiday planning.",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "rev-8",
      author: "Vikramaditya & Pooja",
      tripLabel: "Kashmir Grand Group Expedition",
      quote: "Sonmarg snow sledge ride was unforgettable. Beautiful hotels in Srinagar and warm hospitality throughout. We will book all our upcoming vacations with Crazy Tours and Travels.",
      avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80"
    }
  ],

  // --------------------------------------------------------------------------
  // 6. FAQS (5 Entries)
  // --------------------------------------------------------------------------
  faqs: [
    {
      question: "What is included in the package price?",
      answer: "Every Crazy Tours and Travels package includes verified 3-star or 4-star hotel stays, daily breakfast, a dedicated private AC cab (Sedan / Ertiga / Innova) for all transfers and sightseeing as per itinerary, fuel, toll taxes, state border permits, and 24/7 customer care concierge. Special trips like Alleppey or Dal Lake include private houseboat stays and Shikara rides."
    },
    {
      question: "Do you provide Telugu customer support?",
      answer: "Yes! Crazy Tours and Travels is renowned for our dedicated 24/7 Telugu & English Customer Care Desk (తెలుగు కస్టమర్ కేర్). Whether you are arriving at an airport, need language assistance with your driver, or want restaurant recommendations, our Hyderabad headquarters desk is on call 24 hours a day."
    },
    {
      question: "Can I customize the itinerary or dates for a private group?",
      answer: "Absolutely. Every single route in our catalog can be customized for your preferred dates, group size, and hotel preferences. You can add extra days in Munnar, upgrade to a luxury private pool villa in Goa, or include helicopter rides in Kashmir."
    },
    {
      question: "Are flights or train tickets included in the quote?",
      answer: "Our standard packages cover all ground arrangements, stays, private vehicles, and activities from your arrival destination onwards. On request, our flight booking desk can also issue your roundtrip flights or train tickets from Hyderabad, Bangalore, Chennai, or Delhi at live transparent rates."
    },
    {
      question: "What happens if there is unexpected bad weather or road closure?",
      answer: "Safety is our number one priority. Our local drivers and trip coordinators monitor mountain passes like Rohtang, Atal Tunnel, and Gulmarg continuously. In the event of unforeseen roadblocks or bad weather, alternative activities or rescheduling assistance is provided immediately."
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
'''

with open('js/crazy-travels-data.js', 'w', encoding='utf-8') as f:
    f.write(data_js_content.strip())

print("Successfully written js/crazy-travels-data.js!")
