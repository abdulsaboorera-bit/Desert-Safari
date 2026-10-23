export type ServiceCategory =
  | "Desert Safari"
  | "Adventure Ride"
  | "City Tour";

export type Service = {
  id: string;
  title: string;
  kicker: string;
  badge?: string;
  category: ServiceCategory;
  image: string;
  duration: string;
  pickup: string;
  group: string;
  bestFor: string;
  intensity: "Relaxed" | "Moderate" | "High";
  timings: string;
  description: string;
  story: string;
  highlights: string[];
  includes: string[];
  notIncluded: string[];
  priceNote: string;
};

export const SERVICES: Service[] = [
  {
    id: "evening",
    title: "Evening Desert Safari",
    kicker: "Most Booked",
    badge: "Best Seller",
    category: "Desert Safari",
    image: "/images/evening.jpg",
    duration: "6 - 7 hours",
    pickup: "Free hotel pickup",
    group: "Shared or private",
    bestFor: "First timers",
    intensity: "Moderate",
    timings: "02:30 PM - 09:00 PM",
    description:
      "The classic Dubai evening: a red-dune drive in the Lahbab desert, a golden sunset stop, then a Bedouin-style camp with live shows and a barbecue buffet under the stars.",
    story:
      "Your 4x4 collects you from the hotel and the skyline fades into open sand within the hour. A 30 to 35 minute dune-bashing drive crosses the Lahbab red dunes, followed by a sunset photo stop on top of a ridge. At the camp, Arabic coffee, henna and shisha welcome you before fire, tanoura and belly dance shows start, and a barbecue buffet is served under a sky full of stars.",
    highlights: [
      "30-35 minute dune bashing on the red dunes",
      "Sunset photo stop on top of the ridge",
      "Short camel ride for pictures",
      "Fire, tanoura and belly dance shows",
      "BBQ buffet dinner with Arabic coffee",
      "Free pickup and drop-off from your hotel",
    ],
    includes: [
      "Hotel pickup and drop-off in a 4x4",
      "Dune bashing with an experienced driver",
      "Welcome drinks, Arabic coffee and dates",
      "Camel ride and sandboarding",
      "Live entertainment shows at camp",
      "Barbecue buffet dinner (veg and non-veg)",
    ],
    notIncluded: [
      "Quad bike and buggy rides (book as add-ons)",
      "Personal shopping and souvenirs",
      "Tips for guides and camp staff",
    ],
    priceNote: "Contact for the current rate",
  },
  {
    id: "morning",
    title: "Morning Desert Safari",
    kicker: "Start Early",
    badge: "Cooler Sands",
    category: "Desert Safari",
    image: "/images/safari-1.jpg",
    duration: "4 - 5 hours",
    pickup: "08:00 - 08:30 AM",
    group: "Shared or private",
    bestFor: "Photographers",
    intensity: "Moderate",
    timings: "08:00 AM - 12:30 PM",
    description:
      "Escape the city before the heat. A pickup in a 4x4, a thrilling dune drive through the red dunes, a camel ride and sandboarding with cool drinks included.",
    story:
      "An early start means empty dunes and soft light. After pickup you head straight to Lahbab for a dune-bashing drive while the sand is still cool, then trade the 4x4 for a camel trek and a sandboard run down a long face. Refreshments are served before the drive back to the city around midday.",
    highlights: [
      "Hotel pickup around 08:00 - 08:30 AM",
      "Dune bashing in a 4x4 Land Cruiser",
      "Camel ride and sandboarding",
      "Cool drinks and water included",
      "Quiet dunes and the best morning light",
      "Back in the city by around 12:30 PM",
    ],
    includes: [
      "Hotel pickup and drop-off",
      "Morning dune-bashing drive",
      "Camel ride and sandboarding",
      "Soft drinks, water and juices",
      "Experienced safari guide",
    ],
    notIncluded: [
      "Camp dinner and live shows (evening only)",
      "Quad bike and buggy rides",
      "Photographer service",
    ],
    priceNote: "Contact for the current rate",
  },
  {
    id: "overnight",
    title: "Overnight Desert Safari",
    kicker: "Under The Stars",
    badge: "18 Hour Trip",
    category: "Desert Safari",
    image: "/images/camp.jpg",
    duration: "18 hours",
    pickup: "02:30 - 03:00 PM",
    group: "Small groups",
    bestFor: "Star seekers",
    intensity: "Relaxed",
    timings: "Afternoon to next morning",
    description:
      "An adventure that continues after the shows. Camp in the desert with a tent, sleeping bags and bonfire, then wake to a sunrise and a fresh breakfast.",
    story:
      "The evening runs like the classic safari, but the camp stays yours. After the last show, guests gather around a bonfire with tea while the desert goes completely quiet. Tents, sleeping bags and blankets are set up for the night, and sunrise is followed by a hot breakfast before the drive back.",
    highlights: [
      "Tent, sleeping bags and blankets provided",
      "Live entertainment and barbecue dinner",
      "Bonfire under a star-filled sky",
      "Sunrise with tea, coffee and breakfast",
      "Stargazing far away from city lights",
      "Around 18 hours from pickup to drop",
    ],
    includes: [
      "Pickup, drop-off and overnight camping gear",
      "Evening dune bashing and camp shows",
      "Barbecue dinner and next-day breakfast",
      "Bonfire, tea and light snacks at night",
      "Sunrise photo stop",
    ],
    notIncluded: [
      "Alcohol and personal beverages",
      "Quad bike and buggy rides",
      "Extra blankets for very cold nights",
    ],
    priceNote: "Contact for the current rate",
  },
  {
    id: "vip",
    title: "VIP Desert Safari",
    kicker: "Premium Service",
    badge: "Private Seating",
    category: "Desert Safari",
    image: "/images/vip.jpg",
    duration: "6 - 7 hours",
    pickup: "Free hotel pickup",
    group: "Small groups",
    bestFor: "Couples and families",
    intensity: "Relaxed",
    timings: "02:30 PM - 09:00 PM",
    description:
      "Elevated comfort from pickup to camp. Enjoy private-style seating, a premium setup and the full evening entertainment with attentive service throughout.",
    story:
      "From the moment the VIP 4x4 arrives, everything is arranged in advance. At the camp a raised, private seating area with cushioned majlis is reserved for your group, food is served to the table, and the shows face your section. A dedicated host looks after the table for the whole evening.",
    highlights: [
      "Reserved premium seating at the camp",
      "Unlimited barbecue buffet served to the table",
      "All four live entertainment shows",
      "Henna, shisha lounge and falcon photos",
      "Dedicated host for your group",
      "Free pickup and drop-off",
    ],
    includes: [
      "VIP pickup vehicle and dune bashing",
      "Reserved raised seating at camp",
      "Full barbecue dinner with table service",
      "All live shows, henna and shisha area",
      "Photography at the sunset point",
    ],
    notIncluded: [
      "Personal shopping and souvenirs",
      "Premium beverages",
      "Quad bike and buggy rides",
    ],
    priceNote: "Contact for the current rate",
  },
  {
    id: "quad",
    title: "Quad Bike Safari",
    kicker: "Thrilling Ride",
    badge: "Self Drive",
    category: "Adventure Ride",
    image: "/images/quad.jpg",
    duration: "30 min - 2 hours",
    pickup: "Optional pickup",
    group: "1 rider per quad",
    bestFor: "Adrenaline fans",
    intensity: "High",
    timings: "Morning and afternoon slots",
    description:
      "Ride an ATV across the open red dunes of Lahbab. A guide briefs you before you head out, with refreshments to keep you going in the desert heat.",
    story:
      "After a short safety briefing and helmet fitting, the engine starts and you follow a guide out across open desert. The route rolls over soft ridges and hard-packed flats, with photo stops on the higher dunes. Riders of every experience level are welcome, and guides adjust the pace to the group.",
    highlights: [
      "ATV quad biking on the Lahbab red dunes",
      "Safety briefing and gear for first-timers",
      "Guided route with photo stops",
      "Optional pickup and drop-off",
      "Water and energy drinks provided",
      "Slots from 30 minutes up to 2 hours",
    ],
    includes: [
      "Quad bike, helmet and protective gear",
      "Guided route across open desert",
      "Refreshments and drinking water",
      "Storage for your belongings",
    ],
    notIncluded: [
      "Hotel pickup unless added at booking",
      "Dune bashing and camp dinner",
      "Damage or injury from reckless driving",
    ],
    priceNote: "Contact for the current rate",
  },
  {
    id: "buggy",
    title: "Dune Buggy Safari",
    kicker: "Self Drive",
    badge: "1, 2 & 4 Seater",
    category: "Adventure Ride",
    image: "/images/buggy.jpg",
    duration: "30 min - 2 hours",
    pickup: "Optional pickup",
    group: "1 - 4 passengers",
    bestFor: "Friends and couples",
    intensity: "High",
    timings: "Morning and afternoon slots",
    description:
      "Take the wheel of a dune buggy and explore the open desert. Choose from 1, 2 or 4 seater options and drive across the dunes with the desert all around you.",
    story:
      "A roll-cage buggy built for the dunes puts you in the driver's seat. Pick a single seater for a solo run or a four-seater so the whole family can ride along, then follow the guide across open sand with stops on the ridges for photos.",
    highlights: [
      "1, 2 and 4 seater dune buggies",
      "Fully self-driven with a lead guide",
      "30 minute, 1 hour and 2 hour options",
      "Roll-cage safety build with harnesses",
      "Pickup available on request",
      "Cold drinks and water included",
    ],
    includes: [
      "Dune buggy with safety harness and helmet",
      "Lead guide for the route",
      "Fuel for the booked duration",
      "Drinking water and refreshments",
    ],
    notIncluded: [
      "Hotel pickup unless added at booking",
      "Camel ride and camp dinner",
      "Physical damage caused while driving",
    ],
    priceNote: "Contact for the current rate",
  },
  {
    id: "camel",
    title: "Camel Desert Safari",
    kicker: "Traditional",
    badge: "Slow Travel",
    category: "Desert Safari",
    image: "/images/camel.jpg",
    duration: "2 - 3 hours",
    pickup: "Optional pickup",
    group: "Up to 8 guests",
    bestFor: "Families",
    intensity: "Relaxed",
    timings: "Morning and late afternoon",
    description:
      "Step back in time with a traditional camel ride over the dunes. A relaxed, timeless way to experience the desert at a pace that invites photos.",
    story:
      "Camels have crossed these dunes for centuries. A handler pairs you with a calm camel for a short trek across the ridges, at the pace the Bedouin once travelled, with time on top of a dune for photographs before refreshments back at the resting point.",
    highlights: [
      "Traditional camel trek across the dunes",
      "Relaxed pace led by an experienced handler",
      "Photo stop on a high ridge",
      "Refreshments and drinking water",
      "Ideal for families and older guests",
      "Pairs well with a sunrise or sunset slot",
    ],
    includes: [
      "Camel ride with a professional handler",
      "Photography stop on the dunes",
      "Cold drinks and water",
      "Basic first-aid support on site",
    ],
    notIncluded: [
      "Dune bashing in a 4x4",
      "Camp dinner and live shows",
      "Hotel pickup unless added at booking",
    ],
    priceNote: "Contact for the current rate",
  },
  {
    id: "hummer",
    title: "Hummer Desert Safari",
    kicker: "Luxury 4x4",
    badge: "Door To Door",
    category: "Adventure Ride",
    image: "/images/hummer.jpg",
    duration: "5 - 6 hours",
    pickup: "Door-to-door",
    group: "Up to 4 guests",
    bestFor: "Luxury travellers",
    intensity: "Moderate",
    timings: "03:00 PM - 08:30 PM",
    description:
      "Arrive in a luxury Hummer and start your evening adventure with dune bashing, an ATV ride and a photo stop in the middle of the Arabian desert, with door-to-door pickup.",
    story:
      "A Hummer collects you from the hotel door and heads straight for the red dunes. The drive is quieter and more planted than a standard safari, with an ATV ride and a desert photo stop built into the evening before the camp show and dinner begin.",
    highlights: [
      "Luxury Hummer pickup and drop-off",
      "4x4 dune bashing on the red dunes",
      "ATV bike ride included",
      "Desert picture point at golden hour",
      "Door-to-door service across Dubai",
      "Small group of up to four guests",
    ],
    includes: [
      "Hummer transfers for the whole tour",
      "Dune bashing with a specialist driver",
      "Short ATV ride and photo stop",
      "Camp entry with dinner and shows",
    ],
    notIncluded: [
      "Extended quad or buggy sessions",
      "Alcohol at the camp",
      "Personal shopping",
    ],
    priceNote: "Contact for the current rate",
  },
  {
    id: "dubai-city",
    title: "Dubai City Tour",
    kicker: "Half Day",
    badge: "Private Car",
    category: "City Tour",
    image: "/images/dubai-city.jpg",
    duration: "4 - 5 hours",
    pickup: "Any Dubai location",
    group: "Private car",
    bestFor: "First day in Dubai",
    intensity: "Relaxed",
    timings: "Morning or afternoon",
    description:
      "A private car tour of Dubai's landmarks, from Jumeirah Mosque and Burj Al Arab to the Palm and Dubai Marina, with pickup from anywhere in Dubai or Sharjah.",
    story:
      "Your driver collects you from the hotel and the route covers the city in the right order: old Dubai and the creek, the museum district, then Jumeirah Mosque, Burj Al Arab, the Palm and Marina skyline. Photo stops are built in at every landmark and the pace is yours to set.",
    highlights: [
      "Private car with a driver guide",
      "Jumeirah Mosque and Jumeirah Beach",
      "Burj Al Arab and Palm Jumeirah photo stop",
      "Dubai Marina, Ain Dubai and Bluewaters",
      "Pickup from anywhere in Dubai or Sharjah",
      "Flexible stops and photo time",
    ],
    includes: [
      "Private air-conditioned vehicle",
      "Driver guide for the full tour",
      "Hotel pickup and drop-off",
      "Bottled water in the car",
    ],
    notIncluded: [
      "Museum and attraction entry tickets",
      "Lunch and personal expenses",
      "Inside access at landmark sites",
    ],
    priceNote: "Contact for the current rate",
  },
  {
    id: "abu-dhabi-city",
    title: "Abu Dhabi City Tour",
    kicker: "Capital Day",
    badge: "Private Car",
    category: "City Tour",
    image: "/images/abu-dhabi.webp",
    duration: "8 - 10 hours",
    pickup: "Dubai or Sharjah",
    group: "Private car",
    bestFor: "Culture lovers",
    intensity: "Relaxed",
    timings: "08:30 AM - 06:00 PM",
    description:
      "Visit the capital's highlights in one tour: the Grand Mosque, the Corniche, Emirates Palace and Yas Island, with private car pickup from Dubai or Sharjah.",
    story:
      "A full day across the emirate starts at the Sheikh Zayed Grand Mosque, one of the largest mosques in the world, then moves along the Corniche to Emirates Palace and Heritage Village. The afternoon ends at Yas Island for the Ferrari World photo stop before the drive back.",
    highlights: [
      "Sheikh Zayed Grand Mosque visit",
      "Abu Dhabi Corniche drive",
      "Emirates Palace and Heritage Village",
      "Ferrari World and Yas Island photo stop",
      "Private car from Dubai or Sharjah",
      "Full day of around 8 to 10 hours",
    ],
    includes: [
      "Private air-conditioned vehicle",
      "Driver guide for the day",
      "Hotel pickup and drop-off",
      "Bottled water throughout the day",
    ],
    notIncluded: [
      "Grand Mosque entry formalities",
      "Lunch at Yas Island",
      "Attraction tickets",
    ],
    priceNote: "Contact for the current rate",
  },
];

export type Extra = {
  title: string;
  description: string;
  availability: string;
};

export const SERVICE_EXTRAS: Extra[] = [
  {
    title: "Sandboarding",
    description:
      "Slide down the dune faces on a board, included on most desert safaris and available as an add-on on private trips.",
    availability: "Included on most safaris",
  },
  {
    title: "Quad Bike Add-On",
    description:
      "Add a 30, 60 or 120 minute ATV session to any evening or morning safari and ride before the camp show starts.",
    availability: "Add-on to any safari",
  },
  {
    title: "Dune Buggy Add-On",
    description:
      "Add a self-drive buggy session in a 1, 2 or 4 seater with full safety briefing before your safari.",
    availability: "Add-on to any safari",
  },
  {
    title: "Falconry And Falcon Photos",
    description:
      "Hold a trained falcon for photographs on the dunes, arranged at the camp or at the sunset point.",
    availability: "VIP and private setups",
  },
  {
    title: "Henna Painting",
    description:
      "Traditional henna designs applied by an artist at the camp, included with the evening and overnight safaris.",
    availability: "Evening and overnight",
  },
  {
    title: "Shisha Lounge",
    description:
      "Relax at the camp shisha corner with apple and mint flavours after dinner, subject to local rules.",
    availability: "Evening and VIP camps",
  },
  {
    title: "Private Photography Session",
    description:
      "A guide with a camera follows your group for golden-hour and night shots at the dunes and camp.",
    availability: "Book on request",
  },
  {
    title: "Celebration Setups",
    description:
      "Birthday cakes, proposal setups and private seating with decorations arranged for your group.",
    availability: "Book 24 hours ahead",
  },
];

export type BookingStep = {
  step: string;
  title: string;
  description: string;
};

export const BOOKING_STEPS: BookingStep[] = [
  {
    step: "01",
    title: "Send a message",
    description:
      "Tell us the date, the number of guests and which service you want on WhatsApp, phone or email.",
  },
  {
    step: "02",
    title: "Get a tailored quote",
    description:
      "The team replies with availability, the exact inclusions, pickup timing and the current price for your group.",
  },
  {
    step: "03",
    title: "Confirm your booking",
    description:
      "Pay in cash on the day or transfer in advance. Your pickup slot and guide details are confirmed in writing.",
  },
  {
    step: "04",
    title: "Enjoy the desert",
    description:
      "Your guide calls before pickup, collects you from the hotel and looks after the group from start to finish.",
  },
];

export const SERVICES_FAQS = [
  {
    question: "Which desert safari should I choose for my first time?",
    answer:
      "The Evening Desert Safari is the best first choice. It combines dune bashing, a sunset stop, live shows and a barbecue dinner in one trip, so you see the desert at its most atmospheric without committing to a full day.",
  },
  {
    question: "Can I combine a safari with a quad bike or buggy ride?",
    answer:
      "Yes. Quad bikes and dune buggies can be added to morning, evening, VIP and overnight safaris. Tell the team when you book so the session is scheduled before the camp show and the timing stays comfortable.",
  },
  {
    question: "How long does each service take?",
    answer:
      "Morning safaris run 4 to 5 hours, evening and VIP safaris 6 to 7 hours, the overnight safari around 18 hours, and city tours run from a half day for Dubai up to 8 to 10 hours for Abu Dhabi. Adventure rides are booked in 30 minute to 2 hour slots.",
  },
  {
    question: "Are the services available every day?",
    answer:
      "Yes, safaris and city tours run every day of the year including public holidays. Adventure rides run in morning and afternoon slots, and the team confirms the exact slot for your dates when you book.",
  },
  {
    question: "Do you offer private vehicles and exclusive camps?",
    answer:
      "Yes. Private 4x4s, exclusive camp seating, private city cars and tailored group setups are available for families, corporate groups and celebrations. Share your requirements and the team will design the tour around them.",
  },
  {
    question: "What is included in the price of a service?",
    answer:
      "Every safari includes hotel pickup and drop-off, dune bashing, camp entry, live entertainment and dinner where listed. Extras such as extended quad sessions, alcohol, personal shopping and tips are not included and are quoted separately.",
  },
  {
    question: "Can I book a service for a large group?",
    answer:
      "Yes. Groups of 10 to 100 plus can be arranged with multiple vehicles, reserved camp areas and a dedicated host. Message the team at least 48 hours ahead so seating, food and transfers are prepared for everyone.",
  },
  {
    question: "How late can I book or cancel?",
    answer:
      "Same day bookings are usually possible if there is availability, and the team replies quickly on WhatsApp. For cancellations, inform the team at least 6 hours before the tour starts to avoid an 80% charge of the tour price.",
  },
];

export function serviceById(id: string) {
  return SERVICES.find((service) => service.id === id);
}
