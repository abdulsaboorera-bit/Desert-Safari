export const BUSINESS = {
  name: "Dubai Desert Safari",
  phone: "+971567116656",
  phoneDisplay: "+971 56 711 6656",
  whatsapp: "https://wa.me/971567116656",
  whatsappMessage:
    "https://wa.me/971567116656?text=Hello%20Dubai%20Desert%20Safari%2C%20I%27d%20like%20to%20book%20a%20desert%20safari.",
  email: "luckyarif11@gmail.com",
  address: "Damascus Street, Al Qusais Plaza, Office No A 204A, Dubai, U.A.E",
  city: "Dubai",
  country: "UAE",
  founded: "2017",
  domain: "https://dubaidesertsafarii.com",
} as const;

export function whatsappFor(message: string) {
  return `${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_DEFAULT = whatsappFor(
  `Hello ${BUSINESS.name}, I'd like to book a desert safari. Please share availability and details.`,
);

export const NAV_LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/#experiences", label: "Desert Safaris" },
  { href: "/#highlights", label: "Activities" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
] as const;

export type Experience = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  image: string;
  featured?: boolean;
};

export const SAFARI_EXPERIENCES: Experience[] = [
  {
    id: "evening",
    title: "Evening Desert Safari",
    tagline: "Most Popular",
    description:
      "The classic Dubai evening: a red-dune drive in the Lahbab desert, a sunset photo stop, then a Bedouin-style camp with live shows and a barbecue buffet under the stars.",
    highlights: [
      "Dune bashing on the red dunes (30-35 min)",
      "Sunset photo stop",
      "Short camel ride for pictures",
      "Live shows: fire, tanoura, belly dance",
      "BBQ buffet dinner + Arabic coffee",
    ],
    image: "/images/dunes-red.jpg",
    featured: true,
  },
  {
    id: "morning",
    title: "Morning Desert Safari",
    tagline: "Start Early",
    description:
      "Escape the city before the heat. Pickup in a 4x4, a thrilling dune drive through the red dunes, camel ride and sandboarding with cool drinks included.",
    highlights: [
      "Hotel pickup around 08:00-08:30 AM",
      "Dune bashing in a 4x4 Land Cruiser",
      "Camel ride and sandboarding",
      "Soft drinks and water included",
    ],
    image: "/images/safari-1.jpg",
  },
  {
    id: "overnight",
    title: "Overnight Desert Safari",
    tagline: "Under the Stars",
    description:
      "An 18-hour adventure that continues after the shows. Camp in the desert with tent, sleeping bags and bonfire, then wake to a sunrise and fresh breakfast.",
    highlights: [
      "Overnight tent, sleeping bags, blankets",
      "Live entertainment and BBQ dinner",
      "Bonfire under a star-filled sky",
      "Sunrise with tea, coffee and breakfast",
    ],
    image: "/images/camp.jpg",
  },
  {
    id: "vip",
    title: "VIP Desert Safari",
    tagline: "Premium Service",
    description:
      "Elevated comfort from pickup to camp. Enjoy private-style seating, a premium setup and the full evening entertainment with attentive service throughout.",
    highlights: [
      "Premium sitting area at camp",
      "BBQ buffet with unlimited food",
      "All four live entertainment shows",
      "Henna hand painting and shisha area",
    ],
    image: "/images/vip.jpg",
  },
  {
    id: "quad",
    title: "Quad Bike Safari",
    tagline: "Thrilling Ride",
    description:
      "Ride an ATV across the open red dunes of Lahbab. A guide briefs you before you head out, with refreshments to keep you going in the desert heat.",
    highlights: [
      "ATV quad biking on red dunes",
      "Guidance for first-time riders",
      "Optional pickup and drop-off",
      "Water and energy drinks provided",
    ],
    image: "/images/quad.jpg",
  },
  {
    id: "buggy",
    title: "Dune Buggy Safari",
    tagline: "Self-Drive",
    description:
      "Take the wheel of a dune buggy and explore the open desert. Choose from 1, 2 or 4 seater options and drive across the dunes with the desert all around you.",
    highlights: [
      "1, 2 and 4 seater buggies",
      "Self-drive in open desert",
      "30 min, 1 hour or 2 hour options",
      "Pickup available on request",
    ],
    image: "/images/buggy.jpg",
  },
  {
    id: "camel",
    title: "Camel Desert Safari",
    tagline: "Traditional",
    description:
      "Step back in time with a traditional camel ride over the dunes. A relaxed, timeless way to experience the desert at a pace that invites photos.",
    highlights: [
      "Traditional camel trek",
      "Go at a relaxed pace",
      "Refreshments provided",
      "Ideal for families and photos",
    ],
    image: "/images/camel.jpg",
  },
  {
    id: "hummer",
    title: "Hummer Desert Safari",
    tagline: "Luxury 4x4",
    description:
      "Arrive in a luxury Hummer and start your evening adventure with dune bashing, an ATV ride and a photo stop in the middle of the Arabian desert, with door-to-door pickup.",
    highlights: [
      "Luxury Hummer pick & drop",
      "4x4 dune bashing",
      "ATV bike ride",
      "Desert picture point",
    ],
    image: "/images/hummer.jpg",
  },
  {
    id: "dubai-city",
    title: "Dubai City Tour",
    tagline: "Half Day",
    description:
      "A private car tour of Dubai's landmarks, from Jumeirah Mosque and Burj Al Arab to the Palm and Dubai Marina, with pickup from anywhere in Dubai or Sharjah.",
    highlights: [
      "Private car, half-day tour",
      "Jumeirah Mosque & Beach",
      "Burj Al Arab & Palm Jumeirah",
      "Dubai Marina & Ain Dubai",
    ],
    image: "/images/dubai-city.jpg",
  },
  {
    id: "abu-dhabi-city",
    title: "Abu Dhabi City Tour",
    tagline: "Private Car",
    description:
      "Visit the capital's highlights in one tour: the Grand Mosque, the Corniche, Emirates Palace and Yas Island, with private car pickup from Dubai or Sharjah.",
    highlights: [
      "Sheikh Zayed Grand Mosque",
      "Abu Dhabi Corniche",
      "Emirates Palace & Heritage Village",
      "Ferrari World photo stop",
    ],
    image: "/images/abu-dhabi.webp",
  },
];

export type Highlight = {
  title: string;
  description: string;
  image: string;
  span: string;
};

export const ACTIVITY_HIGHLIGHTS: Highlight[] = [
  {
    title: "Dune Bashing",
    description:
      "A 30-35 minute red-dune drive through the Lahbab desert in a 4x4, guided by experienced drivers.",
    image: "/images/dunes-red.jpg",
    span: "md:col-span-7 md:row-span-2",
  },
  {
    title: "Sunset Photo Stop",
    description:
      "Pause on top of the dunes as the desert turns gold, one of the best photo moments of the tour.",
    image: "/images/sunset.jpg",
    span: "md:col-span-5",
  },
  {
    title: "Camel Ride",
    description:
      "A short, traditional camel ride across the dunes, perfect for pictures and a taste of Bedouin travel.",
    image: "/images/camel.jpg",
    span: "md:col-span-5",
  },
  {
    title: "Quad Biking",
    description:
      "Ride an ATV across the open red dunes, with guidance for beginners and refreshments included.",
    image: "/images/quad.jpg",
    span: "md:col-span-4",
  },
  {
    title: "Dune Buggy",
    description:
      "Self-drive a dune buggy through the open desert, available in 1, 2 and 4 seater options.",
    image: "/images/buggy.jpg",
    span: "md:col-span-4",
  },
  {
    title: "Bedouin-Style Camp",
    description:
      "Arabic coffee, henna, shisha and a barbecue buffet with live fire, tanoura and belly dance shows.",
    image: "/images/camp.jpg",
    span: "md:col-span-4",
  },
];

export type Reason = {
  title: string;
  description: string;
  icon: "calendar" | "car" | "headset" | "zap" | "shield" | "star";
};

export const WHY_CHOOSE: Reason[] = [
  {
    title: "Established in 2017",
    description:
      "Dubai Desert Safari has been running safari tours from Dubai since 2017, with a team of tour consultants on hand for every trip.",
    icon: "calendar",
  },
  {
    title: "Free Pick & Drop",
    description:
      "Complimentary pickup and drop-off from your residence, hotel or a central meeting point, depending on the package you choose.",
    icon: "car",
  },
  {
    title: "24/7 Live Support",
    description:
      "Questions before or during your trip? The team offers round-the-clock support by phone and WhatsApp.",
    icon: "headset",
  },
  {
    title: "Instant Tour Booking",
    description:
      "Book in a single click over WhatsApp. Share your dates and the team confirms your tour with a quick response.",
    icon: "zap",
  },
  {
    title: "Experienced Safari Drivers",
    description:
      "Dune bashing is led by skilled drivers who know the Lahbab red dunes and prioritise safety on every drive.",
    icon: "shield",
  },
  {
    title: "Tailored Safari Options",
    description:
      "From a shared Land Cruiser to a private camp setup, safaris can be arranged around your group and preferences.",
    icon: "star",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  source: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Farooq is a great guide and we had a fantastic day. The dune bashing was so so good. Best thing we have done in Dubai.",
    name: "Evan Pender",
    source: "Google review",
  },
  {
    quote:
      "Mr. Farhan is the best! Good company and very good guide. He was attentive and accommodating. Will recommend!",
    name: "Joshua Gonzales",
    source: "Google review",
  },
  {
    quote:
      "Best day ever!!! Faruks energy and driving skills are outstanding and awesome!!! 100% we will come back to bring some family with us.",
    name: "María A.",
    source: "Google review",
  },
  {
    quote:
      "Excellant experience with Salaar, very friendly, down to earth and good driver as well. And of course best photographer :) Will reccomend to everyone as this has been the best service we have had in our tour!",
    name: "nimra ijaz",
    source: "Google review",
  },
  {
    quote:
      "Amazing 5 experience!!!!! The driver Ali was the best!!!!! He is a great driver and does great fun photos for all of us.",
    name: "S T",
    source: "Google review",
  },
  {
    quote:
      "Thank you Nawaz Afridi! 5* Service! Was such an amazing experience dune bashing and quad biking! He is a funny and charming host/guide, will definitely book with him again!",
    name: "Malissa J",
    source: "Google review",
  },
];

export type Faq = { question: string; answer: string };

export const FAQS: Faq[] = [
  {
    question: "Is the desert safari safe?",
    answer:
      "Yes. Safety is the top priority. Experienced drivers follow safe practices for activities such as dune bashing and quad biking, and weather conditions are assessed to keep the adventure enjoyable and secure.",
  },
  {
    question: "What is included in the desert safari packages?",
    answer:
      "Packages generally include pickup and drop-off, thrilling desert rides such as camel and sandboarding, a barbecue buffet dinner with vegetarian and non-vegetarian options, plus dance performances and live music. Exact inclusions vary by package.",
  },
  {
    question:
      "Can everyone take part in every activity?",
    answer:
      "Most activities suit all ages and abilities. Dune bashing may not be recommended for guests with back or heart conditions, pregnant women or young children. Share any concerns with the team and they will recommend a suitable option.",
  },
  {
    question: "What time is pickup and drop-off?",
    answer:
      "Timings depend on the safari. Morning safaris typically pick up around 08:00-08:30 AM and return around 12:00-12:30 PM. Evening safaris pick up around 02:30-03:00 PM and return around 08:30-09:00 PM. Overnight safaris run about 18 hours, returning the next morning.",
  },
  {
    question: "What should I wear on the desert safari?",
    answer:
      "Comfortable, casual clothing suited to the weather is recommended, with comfortable walking shoes. Evenings and nights in the desert can be cooler, so a light jacket or sweater is a good idea.",
  },
  {
    question: "What type of vehicles are used?",
    answer:
      "Powerful 4x4 SUVs such as Land Cruisers are used for dune bashing, driven by experienced drivers who are skilled at navigating the dunes.",
  },
  {
    question: "Can you accommodate dietary requirements?",
    answer:
      "Yes. A variety of vegetarian and non-vegetarian dishes are offered. Let the team know your dietary requirements in advance and they will do their best to accommodate them.",
  },
  {
    question: "How do I book a safari, and what is the cancellation policy?",
    answer:
      "You can book easily over WhatsApp, by email or by phone, and get an instant response. If you need to cancel, please inform the team at least 6 hours before the tour starts, otherwise 80% of the tour price applies.",
  },
  {
    question: "Is pickup free from my hotel?",
    answer:
      "Yes for most safari packages. Complimentary pickup and drop-off is included from hotels and residences across Dubai. Some remote locations and Sharjah pickups may be arranged for a small fee, confirmed when you book.",
  },
  {
    question: "What food and drinks are served at the camp?",
    answer:
      "The barbecue buffet includes grilled chicken, kebabs and marinated meats alongside vegetarian options such as salads, hummus, biryani and desserts. Soft drinks, water, Arabic coffee and tea are served throughout the evening.",
  },
  {
    question: "Are the safaris suitable for children and elderly guests?",
    answer:
      "Yes. Morning and evening safaris are family friendly, and camel rides are short and gentle. Intense dune bashing is not recommended for very young children, pregnant guests or guests with back and heart conditions, so please tell the team in advance and a gentler route or alternative can be arranged.",
  },
  {
    question: "Can I customise a safari for a group or special occasion?",
    answer:
      "Yes. Private setups, birthday and proposal decorations, exclusive seating and custom timings can all be arranged for families, corporate groups and celebrations. Share your plan over WhatsApp and the team will tailor the tour.",
  },
  {
    question: "What happens if it rains or there is bad weather?",
    answer:
      "Tours usually run in normal weather, but desert conditions can change quickly. If a safari must be cancelled for safety, the team will inform you as early as possible and offer a reschedule or a full refund of the amount paid.",
  },
  {
    question: "Do I need to carry cash or can I pay online?",
    answer:
      "You can pay in cash (AED) on the day of the tour or arrange an online transfer in advance. Exact payment details are shared with your booking confirmation on WhatsApp.",
  },
];

export const TIMINGS = [
  {
    label: "Morning Safari",
    detail: "Pickup 08:00-08:30 AM - Return 12:00-12:30 PM",
  },
  {
    label: "Evening Safari",
    detail: "Pickup 02:30-03:00 PM - Return 08:30-09:00 PM",
  },
  {
    label: "Overnight Safari",
    detail: "18 hours - Pickup 02:30-03:00 PM, return next morning",
  },
] as const;
