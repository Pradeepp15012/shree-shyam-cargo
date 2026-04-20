import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Clock3,
  Globe2,
  PackageOpen,
  ShieldCheck,
  Truck,
} from "lucide-react";

export const company = {
  name: "Shree Shyam Cargo Packers & Movers",
  shortName: "Shree Shyam Cargo",
  phone: import.meta.env.VITE_COMPANY_PHONE || "+918294525141",
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || "918294525141",
  email: "support@shreeshyamcargo.com",
  address: "Near Transport Nagar, Jaipur, Rajasthan, India",
  tagline: "Reliable Packers & Movers",
  whatsappMessage: "Hi, I want to inquire about Packers & Movers service",
};

export const services = [
  {
    title: "Household Shifting",
    description:
      "Safe packing, loading, transport, and door-to-door delivery for homes of every size.",
    icon: PackageOpen,
  },
  {
    title: "Office Relocation",
    description:
      "Minimal downtime office moving with labeling, asset handling, and planned transitions.",
    icon: Building2,
  },
  {
    title: "Car & Bike Transport",
    description:
      "Enclosed and open transport solutions with secure loading for vehicles across India.",
    icon: Truck,
  },
  {
    title: "Loading & Unloading",
    description:
      "Trained staff and quality equipment for careful loading, unloading, and placement.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Packing & Unpacking",
    description:
      "Premium packing material and organized unpacking support to speed up your move.",
    icon: ShieldCheck,
  },
];

export const trustPoints = [
  { title: "10+ Years Experience", icon: Clock3 },
  { title: "PAN India Coverage", icon: Globe2 },
  { title: "Verified Team", icon: BadgeCheck },
  { title: "Insured Handling Support", icon: ShieldCheck },
];

export const testimonials = [
  {
    name: "Amit Sharma",
    role: "Household Move, Delhi to Pune",
    text: "The team packed everything professionally and delivered on time. Communication was smooth from start to finish.",
  },
  {
    name: "Ritika Jain",
    role: "Office Relocation, Jaipur",
    text: "They handled our office move with almost zero disruption. Very reliable and organized crew.",
  },
  {
    name: "Vikas Singh",
    role: "Bike Transport, Lucknow to Bengaluru",
    text: "My bike arrived safely, exactly as promised. Strongly recommended for intercity transport.",
  },
];

export const stats = [
  { value: "12K+", label: "Successful Moves" },
  { value: "30+", label: "Cities Covered" },
  { value: "4.9/5", label: "Customer Rating" },
  { value: "24/7", label: "Support Response" },
];

export const locationCoverage = [
  {
    city: "Jaipur",
    state: "Rajasthan",
    coverage: "Local + Intercity",
    responseTime: "Within 15 mins",
    popularRoutes: ["Jaipur to Delhi", "Jaipur to Pune", "Jaipur to Ahmedabad"],
    services: ["Household Shifting", "Office Relocation", "Car & Bike Transport"],
  },
  {
    city: "Delhi",
    state: "Delhi NCR",
    coverage: "Local + Intercity",
    responseTime: "Within 20 mins",
    popularRoutes: ["Delhi to Jaipur", "Delhi to Mumbai", "Delhi to Bengaluru"],
    services: ["Household Shifting", "Packing & Unpacking", "Loading & Unloading"],
  },
  {
    city: "Gurgaon",
    state: "Haryana",
    coverage: "Local + Intercity",
    responseTime: "Within 20 mins",
    popularRoutes: ["Gurgaon to Noida", "Gurgaon to Jaipur", "Gurgaon to Pune"],
    services: ["Office Relocation", "Household Shifting", "Car & Bike Transport"],
  },
  {
    city: "Noida",
    state: "Uttar Pradesh",
    coverage: "Local + Intercity",
    responseTime: "Within 25 mins",
    popularRoutes: ["Noida to Delhi", "Noida to Lucknow", "Noida to Hyderabad"],
    services: ["Household Shifting", "Packing & Unpacking", "Loading & Unloading"],
  },
  {
    city: "Mumbai",
    state: "Maharashtra",
    coverage: "Intercity Priority",
    responseTime: "Within 30 mins",
    popularRoutes: ["Mumbai to Pune", "Mumbai to Ahmedabad", "Mumbai to Delhi"],
    services: ["Office Relocation", "Car & Bike Transport", "Household Shifting"],
  },
  {
    city: "Pune",
    state: "Maharashtra",
    coverage: "Local + Intercity",
    responseTime: "Within 25 mins",
    popularRoutes: ["Pune to Mumbai", "Pune to Bengaluru", "Pune to Jaipur"],
    services: ["Household Shifting", "Office Relocation", "Packing & Unpacking"],
  },
  {
    city: "Ahmedabad",
    state: "Gujarat",
    coverage: "Intercity Priority",
    responseTime: "Within 30 mins",
    popularRoutes: ["Ahmedabad to Jaipur", "Ahmedabad to Mumbai", "Ahmedabad to Hyderabad"],
    services: ["Household Shifting", "Car & Bike Transport", "Loading & Unloading"],
  },
  {
    city: "Hyderabad",
    state: "Telangana",
    coverage: "Local + Intercity",
    responseTime: "Within 30 mins",
    popularRoutes: ["Hyderabad to Bengaluru", "Hyderabad to Pune", "Hyderabad to Noida"],
    services: ["Office Relocation", "Household Shifting", "Packing & Unpacking"],
  },
  {
    city: "Bengaluru",
    state: "Karnataka",
    coverage: "Local + Intercity",
    responseTime: "Within 30 mins",
    popularRoutes: ["Bengaluru to Hyderabad", "Bengaluru to Chennai", "Bengaluru to Pune"],
    services: ["Household Shifting", "Office Relocation", "Car & Bike Transport"],
  },
  {
    city: "Lucknow",
    state: "Uttar Pradesh",
    coverage: "Intercity Support",
    responseTime: "Within 35 mins",
    popularRoutes: ["Lucknow to Noida", "Lucknow to Delhi", "Lucknow to Bengaluru"],
    services: ["Household Shifting", "Car & Bike Transport", "Packing & Unpacking"],
  },
  {
    city: "Chennai",
    state: "Tamil Nadu",
    coverage: "Intercity Support",
    responseTime: "Within 35 mins",
    popularRoutes: ["Chennai to Bengaluru", "Chennai to Hyderabad", "Chennai to Pune"],
    services: ["Household Shifting", "Office Relocation", "Loading & Unloading"],
  },
  {
    city: "Indore",
    state: "Madhya Pradesh",
    coverage: "Intercity Support",
    responseTime: "Within 30 mins",
    popularRoutes: ["Indore to Jaipur", "Indore to Pune", "Indore to Ahmedabad"],
    services: ["Household Shifting", "Packing & Unpacking", "Car & Bike Transport"],
  },
];
