import bassline from '../images/images-of-night-clubs/bassline-basement.jpg';
import echo from '../images/images-of-night-clubs/echo-chamber.jpg';
import echoLive from '../images/images-of-night-clubs/echo-live.jpg';
import glow from '../images/images-of-night-clubs/glow-affair.jpg';
import liveMusic from '../images/images-of-night-clubs/live-music-club.jpg';
import lounge88 from '../images/images-of-night-clubs/lounge-8.jpg';
import moonlight from '../images/images-of-night-clubs/moonlight-manor.jpg';
import neon from '../images/images-of-night-clubs/neon-club.jpg';
import rhythm from '../images/images-of-night-clubs/rhythm-roots.jpg';
import skyHigh from '../images/images-of-night-clubs/sky-high-lounge.jpg';
import skyLoft from '../images/images-of-night-clubs/sky-loft-beats.jpg';
import skyline from '../images/images-of-night-clubs/skyline-soire.jpg';
import theVault from '../images/images-of-night-clubs/the-vault-lounge.jpg';
import vinyl from '../images/images-of-night-clubs/vinyl-vibe.jpg';
import underStars from '../images/images-of-night-clubs/under-the-stars.jpg';
import rhythmic from '../images/images-of-night-clubs/rhythmic-retreat.jpg';
import boomBox from '../images/images-of-night-clubs/boombox-basement.jpg';
import harmony from '../images/images-of-night-clubs/harmony-hub.jpg';
import luxe from '../images/images-of-night-clubs/luxe-underground.jpg';
import beat from '../images/images-of-night-clubs/beat-street.jpg';
import breezy from '../images/images-of-night-clubs/breezy-beats.jpg';
import serene from '../images/images-of-night-clubs/serene-beats.jpg';
import indigo from '../images/images-of-night-clubs/indigo-groove.jpg';
import twilight from '../images/images-of-night-clubs/twilight-tavern.jpg';
import electric from '../images/images-of-night-clubs/electric-echoes.jpg';

const nightClubs=
[
  {
    "id": 1,
    "name": "Neon Pulse",
    "category": "nightclub",
    "description": "High-energy dance floor with pulsing neon beats and top DJs.",
    "location": "Bandra",
    "opening_hours": "9:00 PM - 3:00 AM",
    "entry_fee": "₹1000",
    "average_cost_for_two": 2500,
    "highlights": ["Dance floor", "DJ nights", "Neon lights"],
    "contact": "+91-9876123456",
    "image": neon,
       "isOpen": true,
       "reviews": [
    { "user": "Aarav", "comment": "Amazing music and vibe!", "rating": 5 },
    { "user": "Priya", "comment": "Too crowded on weekends.", "rating": 3 },
    { "user": "Rohan", "comment": "Loved the DJ set!", "rating": 4 },
    { "user": "Megha", "comment": "Entry was overpriced.", "rating": 2 },
    { "user": "Kabir", "comment": "Best nightclub in town!", "rating": 5 }
  ]
  },
  {
    "id": 2,
    "name": "Skyline Soirée",
    "category": "rooftop bar",
    "description": "Chic open-air bar with skyline views and smooth lounge music.",
    "location": "Koramangala",
    "opening_hours": "7:00 PM - 1:00 AM",
    "entry_fee": "Free",
    "average_cost_for_two": 3000,
    "highlights": ["Rooftop view", "Cocktails", "Live acoustic"],
    "contact": "+91-8887654321",
    "image":skyline,
    "isOpen": false,
    "reviews": [
    { "user": "Simran", "comment": "The view is breathtaking!", "rating": 5 },
    { "user": "Aditya", "comment": "Cocktails are a bit pricey.", "rating": 3 },
    { "user": "Neha", "comment": "Perfect for dates!", "rating": 4 },
    { "user": "Vikram", "comment": "Could improve the service.", "rating": 2 },
    { "user": "Isha", "comment": "Live acoustic music was magical.", "rating": 5 }
  ]
  },
  {
    "id": 3,
    "name": "The Vault Lounge",
    "category": "lounge",
    "description": "Luxurious lounge vibes with jazz evenings and craft cocktails.",
    "location": "MG Road",
    "opening_hours": "6:00 PM - 12:00 AM",
    "entry_fee": "₹800",
    "average_cost_for_two": 3500,
    "highlights": ["Live jazz", "Craft cocktails", "Ambient lighting"],
    "contact": "www.vaultlounge.in",
    "image": theVault,
     "isOpen": false,
      "reviews": [
    { "user": "Tanvi", "comment": "Soothing jazz nights!", "rating": 5 },
    { "user": "Rajat", "comment": "Loved the cocktails.", "rating": 4 },
    { "user": "Divya", "comment": "Too dimly lit for my taste.", "rating": 3 },
    { "user": "Nikhil", "comment": "Expensive but worth it.", "rating": 4 },
    { "user": "Sara", "comment": "Perfect chill vibe.", "rating": 5 }
  ]
  },
  {
    "id": 4,
    "name": "Pulse Underground",
    "category": "live music club",
    "description": "Underground live bands and gritty rock nights.",
    "location": "Connaught Place",
    "opening_hours": "8:00 PM - 2:00 AM",
    "entry_fee": "₹500",
    "average_cost_for_two": 2000,
    "highlights": ["Live rock", "Local bands", "Draft beer"],
    "contact": "+91-9012345678",
    "image": liveMusic,
     "isOpen": true,
     "reviews": [
    { "user": "Arjun", "comment": "Rock scene is alive here!", "rating": 5 },
    { "user": "Sneha", "comment": "Too loud but fun.", "rating": 3 },
    { "user": "Manav", "comment": "Best band lineup!", "rating": 4 },
    { "user": "Ria", "comment": "Entry management was poor.", "rating": 2 },
    { "user": "Kunal", "comment": "Cheap beer and great music.", "rating": 5 }
  ]
  },
  {
    "id": 5,
    "name": "Glow Affair",
    "category": "nightclub",
    "description": "Vibrant crowd, glow sticks and EDM energy.",
    "location": "Bandra",
    "opening_hours": "10:00 PM - 4:00 AM",
    "entry_fee": "₹1200",
    "average_cost_for_two": 2800,
    "highlights": ["EDM nights", "Glow theme", "Dance floor"],
    "contact": "www.glowaffair.com",
    "image": glow,
     "isOpen": true,
     "reviews": [
    { "user": "Zara", "comment": "EDM heaven!", "rating": 5 },
    { "user": "Yash", "comment": "Too much crowd, still fun.", "rating": 4 },
    { "user": "Preeti", "comment": "Glow theme is so cool!", "rating": 5 },
    { "user": "Ali", "comment": "Music could be better.", "rating": 3 },
    { "user": "Naina", "comment": "Had a blast!", "rating": 5 }
  ]
  },
  {
    "id": 6,
    "name": "Moonlight Manor",
    "category": "pub",
    "description": "Cozy pub with live acoustic sets and hearty drinks.",
    "location": "Koramangala",
    "opening_hours": "5:00 PM - 1:00 AM",
    "entry_fee": "Free",
    "average_cost_for_two": 1800,
    "highlights": ["Live acoustic", "Craft beers", "Cozy seating"],
    "contact": "+91-9223344556",
    "image":moonlight,
      "isOpen": false,
      "reviews": [
    { "user": "Ritika", "comment": "Perfect spot to unwind after work.", "rating": 5 },
    { "user": "Anirudh", "comment": "Drinks were good but service slow.", "rating": 3 },
    { "user": "Pooja", "comment": "Loved the acoustic set!", "rating": 4 },
    { "user": "Karan", "comment": "Too crowded on Friday nights.", "rating": 2 },
    { "user": "Ishaan", "comment": "Chill vibes and great music.", "rating": 5 }
  ]
  },
  {
    "id": 7,
    "name": "Echo Chamber",
    "category": "lounge",
    "description": "Chill electronic beats in a plush, modern setup.",
    "location": "MG Road",
    "opening_hours": "8:00 PM - 2:00 AM",
    "entry_fee": "₹900",
    "average_cost_for_two": 2200,
    "highlights": ["Electronic music", "Plush seating", "Signature drinks"],
    "contact": "contact@echochamber.in",
    "image": echo,
      "isOpen": false,
      "reviews": [
    { "user": "Zoya", "comment": "Sleek interiors and chill beats!", "rating": 5 },
    { "user": "Naman", "comment": "Drinks were top-notch.", "rating": 4 },
    { "user": "Sneha", "comment": "Good place but a bit pricey.", "rating": 3 },
    { "user": "Dev", "comment": "Loved the deep house vibe.", "rating": 4 },
    { "user": "Lavanya", "comment": "Wish they had more food options.", "rating": 3 }
  ]
  },
  {
    "id": 8,
    "name": "Rhythm & Roots",
    "category": "live music club",
    "description": "Soulful indie nights with local acoustic artists.",
    "location": "Bandra",
    "opening_hours": "7:00 PM - 12:00 AM",
    "entry_fee": "₹700",
    "average_cost_for_two": 2400,
    "highlights": ["Live indie", "Acoustic sets", "Good vibes"],
    "contact": "+91-9950011223",
    "image": rhythm,
      "isOpen": true,
       "reviews": [
    { "user": "Meera", "comment": "Felt like a cozy indie concert.", "rating": 5 },
    { "user": "Siddharth", "comment": "Very intimate and peaceful.", "rating": 4 },
    { "user": "Tanya", "comment": "Sound quality could improve.", "rating": 3 },
    { "user": "Harsh", "comment": "Underrated spot for live music!", "rating": 5 },
    { "user": "Anaya", "comment": "Great vibe and lovely crowd.", "rating": 4 }
  ]
  },
  {
    "id": 9,
    "name": "Sky Loft Beats",
    "category": "rooftop bar",
    "description": "Open-air rooftop with hip-hop DJs and skyline views.",
    "location": "Connaught Place",
    "opening_hours": "8:00 PM - 1:00 AM",
    "entry_fee": "₹600",
    "average_cost_for_two": 3200,
    "highlights": ["Rooftop view", "Hip-hop DJs", "Cocktails"],
    "contact": "+91-9887766554",
    "image": skyLoft,
      "isOpen": true,
       "reviews": [
    { "user": "Rehan", "comment": "Unbeatable rooftop vibe!", "rating": 5 },
    { "user": "Avni", "comment": "Hip-hop night was fire!", "rating": 5 },
    { "user": "Tarun", "comment": "Good view, average drinks.", "rating": 3 },
    { "user": "Neeti", "comment": "Could use better seating.", "rating": 3 },
    { "user": "Yuvraj", "comment": "Worth the entry fee.", "rating": 4 }
  ]
  },
  {
    "id": 10,
    "name": "Bassline Basement",
    "category": "nightclub",
    "description": "Deep house vibe in an underground, moody space.",
    "location": "Koramangala",
    "opening_hours": "10:00 PM - 3:00 AM",
    "entry_fee": "₹1100",
    "average_cost_for_two": 2600,
    "highlights": ["Deep house", "Moody interiors", "Dance floor"],
    "contact": "+91-9701122334",
    "image": bassline,
      "isOpen": true,
      "reviews": [
    { "user": "Ayesha", "comment": "Loved the underground feel!", "rating": 5 },
    { "user": "Varun", "comment": "Music was repetitive.", "rating": 3 },
    { "user": "Shreya", "comment": "Dance floor was lit!", "rating": 4 },
    { "user": "Gautam", "comment": "Bit overpriced.", "rating": 3 },
    { "user": "Tanisha", "comment": "Great crowd and ambience.", "rating": 5 }
  ]
  },
  {
    "id": 11,
    "name": "Lounge 88",
    "category": "lounge",
    "description": "Upscale lounge with soft beats and signature cocktails.",
    "location": "Bandra",
    "opening_hours": "6:30 PM - 1:00 AM",
    "entry_fee": "₹850",
    "average_cost_for_two": 3300,
    "highlights": ["Signature cocktails", "Soft music", "VIP seating"],
    "contact": "info@lounge88.in",
    "image": lounge88,
      "isOpen": false,
      "reviews": [
    { "user": "Neha", "comment": "Classy interiors and great drinks!", "rating": 5 },
    { "user": "Rohan", "comment": "Good lounge but a bit overpriced.", "rating": 3 },
    { "user": "Priya", "comment": "Loved the vibe and playlist.", "rating": 4 },
    { "user": "Manav", "comment": "Seating was limited.", "rating": 2 },
    { "user": "Simran", "comment": "Perfect for date nights.", "rating": 5 }
  ]
  },
  {
    "id": 12,
    "name": "Vinyl Vibe",
    "category": "pub",
    "description": "Retro vinyl records and chill pub environment.",
    "location": "MG Road",
    "opening_hours": "7:00 PM - 2:00 AM",
    "entry_fee": "₹500",
    "average_cost_for_two": 1900,
    "highlights": ["Vinyl music", "Retro decor", "Beer specials"],
    "contact": "+91-9332211445",
    "image": vinyl,
    "isOpen": false,
    "reviews": [
    { "user": "Raj", "comment": "Retro feel was nostalgic!", "rating": 5 },
    { "user": "Sneha", "comment": "Loved the vinyl collection.", "rating": 4 },
    { "user": "Amit", "comment": "Good place for old-school music lovers.", "rating": 4 },
    { "user": "Fatima", "comment": "Could use more variety in drinks.", "rating": 3 },
    { "user": "Vikram", "comment": "Perfect chill spot.", "rating": 5 }
  ]
  },
  {
    "id": 13,
    "name": "Sky High Lounge",
    "category": "rooftop bar",
    "description": "Elegant rooftop with chilled lounge music and cocktails.",
    "location": "Bandra",
    "opening_hours": "6:00 PM - 12:00 AM",
    "entry_fee": "Free",
    "average_cost_for_two": 2900,
    "highlights": ["Lounge music", "Rooftop", "Stylish ambiance"],
    "contact": "+91-9445566778",
    "image": skyHigh,
    "isOpen": false,
    "reviews": [
    { "user": "Kriti", "comment": "Rooftop view was amazing!", "rating": 5 },
    { "user": "Yash", "comment": "Drinks were average.", "rating": 3 },
    { "user": "Tara", "comment": "Loved the soft music and ambiance.", "rating": 4 },
    { "user": "Arjun", "comment": "Not very spacious.", "rating": 2 },
    { "user": "Megha", "comment": "Stylish and peaceful spot.", "rating": 5 }
  ]
  },
  {
    "id": 14,
    "name": "Echo Live",
    "category": "live music club",
    "description": "Dynamic live sets from jazz and blues artists.",
    "location": "Connaught Place",
    "opening_hours": "7:30 PM - 12:30 AM",
    "entry_fee": "₹900",
    "average_cost_for_two": 2800,
    "highlights": ["Jazz nights", "Live blues", "Cozy vibe"],
    "contact": "www.echolive.in",
    "image": echoLive,
    "isOpen": true,
     "reviews": [
    { "user": "Aanya", "comment": "Live jazz was 🔥", "rating": 5 },
    { "user": "Irfan", "comment": "Blues band was average.", "rating": 3 },
    { "user": "Zehra", "comment": "Cozy and vibrant crowd!", "rating": 4 },
    { "user": "Kunal", "comment": "Great stage setup.", "rating": 5 },
    { "user": "Divya", "comment": "Seats were too close together.", "rating": 2 }
  ]
  },
  {
    "id": 15,
    "name": "Under the Stars",
    "category": "rooftop bar",
    "description": "Star-lit rooftop lounge with chill tunes and cocktails.",
    "location": "Koramangala",
    "opening_hours": "8:00 PM - 12:00 AM",
    "entry_fee": "Free",
    "average_cost_for_two": 2600,
    "highlights": ["Star-lit", "Chill tunes", "Cocktails"],
    "contact": "+91-9812233445",
    "image": underStars,
    "isOpen": true,
    "reviews": [
    { "user": "Pankaj", "comment": "Stunning night view!", "rating": 5 },
    { "user": "Aditi", "comment": "Loved the chill tunes.", "rating": 4 },
    { "user": "Ravi", "comment": "Crowd was too noisy.", "rating": 2 },
    { "user": "Tanvi", "comment": "Cocktails were on point.", "rating": 5 },
    { "user": "Sahil", "comment": "Perfect vibe for weekends.", "rating": 5 }
  ]
  },
  {
    "id": 16,
    "name": "Rhythmic Retreat",
    "category": "lounge",
    "description": "Soft lounge beats in an intimate, dim-lit setting.",
    "location": "MG Road",
    "opening_hours": "6:00 PM - 12:00 AM",
    "entry_fee": "₹800",
    "average_cost_for_two": 2100,
    "highlights": ["Lounge beats", "Intimate vibe", "Craft cocktails"],
    "contact": "+91-9123456780",
    "image":rhythmic,
    "isOpen": true,
    "reviews": [
    { "user": "Karan", "comment": "Very cozy and romantic atmosphere.", "rating": 5 },
    { "user": "Meena", "comment": "Drinks were average, but music was nice.", "rating": 3 },
    { "user": "Siddharth", "comment": "Perfect for calm evening meetups.", "rating": 4 },
    { "user": "Anjali", "comment": "Could use more food options.", "rating": 2 },
    { "user": "Deepak", "comment": "Loved the dim lighting and vibe.", "rating": 4 }
  ]
  },
  {
    "id": 17,
    "name": "BoomBox Basement",
    "category": "nightclub",
    "description": "Bass-thumping EDM in a dark, smoky underground.",
    "location": "Connaught Place",
    "opening_hours": "11:00 PM - 4:00 AM",
    "entry_fee": "₹1500",
    "average_cost_for_two": 3000,
    "highlights": ["EDM", "Bass", "Late-night"],
    "contact": "+91-9998887776",
    "image": boomBox,
    "isOpen": false,
    "reviews": [
    { "user": "Nikita", "comment": "Best EDM night I’ve been to!", "rating": 5 },
    { "user": "Zaid", "comment": "Too loud for my taste.", "rating": 2 },
    { "user": "Harsh", "comment": "Vibe was intense and fun.", "rating": 4 },
    { "user": "Shruti", "comment": "Entry fee is too high.", "rating": 3 },
    { "user": "Ajay", "comment": "If you love bass, this is it!", "rating": 5 }
  ]
  },
  {
    "id": 18,
    "name": "Harmony Hub",
    "category": "live music club",
    "description": "Eclectic world-music nights with a communal vibe.",
    "location": "Bandra",
    "opening_hours": "7:00 PM - 11:00 PM",
    "entry_fee": "₹600",
    "average_cost_for_two": 2300,
    "highlights": ["World music", "Live bands", "Community feel"],
    "contact": "info@harmonyhub.com",
    "image": harmony,
    "isOpen": false,
     "reviews": [
    { "user": "Leena", "comment": "Unique music selection every time!", "rating": 5 },
    { "user": "Ritesh", "comment": "Band was too late to start.", "rating": 2 },
    { "user": "Sneha", "comment": "Great community feel!", "rating": 4 },
    { "user": "Vivek", "comment": "Loved the cultural mix of music.", "rating": 5 },
    { "user": "Fatima", "comment": "Nice spot for weekend music lovers.", "rating": 4 }
  ]
  },
  {
    "id": 19,
    "name": "Luxe Underground",
    "category": "lounge",
    "description": "Stylish subterranean lounge with deep ambient sounds.",
    "location": "Koramangala",
    "opening_hours": "9:00 PM - 2:00 AM",
    "entry_fee": "₹950",
    "average_cost_for_two": 3400,
    "highlights": ["Ambient sounds", "Stylish design", "Premium drinks"],
    "contact": "+91-9877788990",
    "image": luxe,
    "isOpen": false,
    "reviews": [
    { "user": "Tina", "comment": "Premium crowd and décor!", "rating": 5 },
    { "user": "Mohit", "comment": "Drinks were amazing, but pricey.", "rating": 4 },
    { "user": "Kavya", "comment": "Loved the underground vibe.", "rating": 4 },
    { "user": "Arman", "comment": "Service could be better.", "rating": 3 },
    { "user": "Pooja", "comment": "Perfect for upscale hangouts.", "rating": 5 }
  ]
  },
  {
    "id": 20,
    "name": "Beat Street",
    "category": "nightclub",
    "description": "Hip-hop and funk nights with a street-style crowd.",
    "location": "MG Road",
    "opening_hours": "10:00 PM - 3:00 AM",
    "entry_fee": "₹800",
    "average_cost_for_two": 2000,
    "highlights": ["Hip-hop nights", "Funk beats", "Dance crowd"],
    "contact": "www.beatstreet.com",
    "image":beat,
    "isOpen": false,
    "reviews": [
    { "user": "Isha", "comment": "Banger hip-hop sets all night!", "rating": 5 },
    { "user": "Aryan", "comment": "Good crowd, decent music.", "rating": 4 },
    { "user": "Neeraj", "comment": "Too crowded to enjoy.", "rating": 2 },
    { "user": "Naina", "comment": "Dance floor was lit!", "rating": 5 },
    { "user": "Raghav", "comment": "Music selection was solid.", "rating": 4 }
  ]
  },
  {
    "id": 21,
    "name": "Breezy Beats",
    "category": "rooftop bar",
    "description": "Cool breeze, chill house music, and cocktails under the stars.",
    "location": "Connaught Place",
    "opening_hours": "7:30 PM - 1:00 AM",
    "entry_fee": "Free",
    "average_cost_for_two": 2700,
    "highlights": ["House music", "Chill vibe", "Rooftop breeze"],
    "contact": "+91-9765432100",
    "image": breezy,
    "isOpen": true,
    "reviews": [
    { "user": "Ira", "comment": "Peaceful rooftop experience.", "rating": 5 },
    { "user": "Dev", "comment": "Great breeze and drinks.", "rating": 4 },
    { "user": "Manisha", "comment": "House music was a bit too repetitive.", "rating": 3 },
    { "user": "Gaurav", "comment": "Perfect place to chill.", "rating": 5 },
    { "user": "Sanya", "comment": "Loved the open-air vibe.", "rating": 5 }
  ]
  },
  {
    "id": 22,
    "name": "Indigo Groove",
    "category": "live music club",
    "description": "Blue-lit evenings with funk and soul live acts.",
    "location": "MG Road",
    "opening_hours": "8:00 PM - 12:00 AM",
    "entry_fee": "₹850",
    "average_cost_for_two": 2500,
    "highlights": ["Soul music", "Live funk", "Blue lighting"],
    "contact": "+91-9304455667",
    "image": indigo,
    "isOpen": true,
    "reviews": [
    { "user": "Simran", "comment": "Funky vibes and great lighting!", "rating": 5 },
    { "user": "Rohit", "comment": "Loved the live soul performance.", "rating": 4 },
    { "user": "Tanya", "comment": "Drinks were too expensive.", "rating": 3 },
    { "user": "Varun", "comment": "Sound system is top-notch!", "rating": 5 },
    { "user": "Ananya", "comment": "Blue lights are soothing but too dark inside.", "rating": 3 }
  ]
  },
  {
    "id": 23,
    "name": "Twilight Tavern",
    "category": "pub",
    "description": "Evening tavern with folk music and hearty ales.",
    "location": "Bandra",
    "opening_hours": "6:00 PM - 11:00 PM",
    "entry_fee": "Free",
    "average_cost_for_two": 1600,
    "highlights": ["Folk music", "Ales", "Casual vibe"],
    "contact": "+91-9456677889",
    "image": twilight,
    "isOpen": true,
    "reviews": [
    { "user": "Ashwin", "comment": "Best ale in town!", "rating": 5 },
    { "user": "Neha", "comment": "Folk music was refreshing.", "rating": 4 },
    { "user": "Kritika", "comment": "Too crowded on weekends.", "rating": 2 },
    { "user": "Abhishek", "comment": "Good value for money.", "rating": 4 },
    { "user": "Shreya", "comment": "Perfect for a casual chillout.", "rating": 5 }
  ]
  },
  {
    "id": 24,
    "name": "Electric Echoes",
    "category": "nightclub",
    "description": "Psytrance and techno till dawn in vibrant surroundings.",
    "location": "Connaught Place",
    "opening_hours": "11:00 PM - 5:00 AM",
    "entry_fee": "₹1300",
    "average_cost_for_two": 2700,
    "highlights": ["Techno", "Psytrance", "Late-night"],
    "contact": "contact@electricechoes.in",
    "image": electric,
    "isOpen": true,
    "reviews": [
    { "user": "Raj", "comment": "Insane energy till 5 AM!", "rating": 5 },
    { "user": "Priya", "comment": "Vibrant crowd, music on point.", "rating": 4 },
    { "user": "Sahil", "comment": "Too loud, but great if you love techno.", "rating": 3 },
    { "user": "Mehul", "comment": "DJ lineup was fantastic.", "rating": 5 },
    { "user": "Ayesha", "comment": "Could use better air circulation.", "rating": 3 }
  ]
  },
  {
    "id": 25,
    "name": "Serene Beats",
    "category": "lounge",
    "description": "Quiet, chilled lounge with soft electronic ambient music.",
    "location": "Koramangala",
    "opening_hours": "7:00 PM - 11:00 PM",
    "entry_fee": "₹650",
    "average_cost_for_two": 2300,
    "highlights": ["Ambient music", "Quiet vibe", "Light cocktails"],
    "contact": "+91-9685543321",
    "image": serene,
    "isOpen": true,
    "reviews": [
    { "user": "Rehan", "comment": "Super peaceful and calm spot.", "rating": 5 },
    { "user": "Divya", "comment": "Perfect for dates.", "rating": 4 },
    { "user": "Yash", "comment": "Could use a bit more lighting.", "rating": 3 },
    { "user": "Snehal", "comment": "Cocktails are light but tasty.", "rating": 4 },
    { "user": "Tarun", "comment": "If you want silence and chill, go here.", "rating": 5 }
  ]
  }
]
export default nightClubs