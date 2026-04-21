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

export const locationColumns = [
  [
    "Agartala",
    "Ambala",
    "Baroda",
    "Bikaner",
    "Coimbatore",
    "Faridabad",
    "Gurgaon",
    "Hubli",
    "Jammu",
    "Kanpur",
    "Kottayam",
    "Mangalore",
    "Nasik",
    "Patalganga",
    "Raigarh",
    "Rourkela",
    "Surat",
    "Udaipur",
  ],
  [
    "Agra",
    "Ankleshwar",
    "Bhiwandi",
    "Calicut",
    "Cuttack",
    "Gandhidham",
    "Guwahati",
    "Hyderabad",
    "Jamshedpur",
    "Kolhapur",
    "Lucknow",
    "Meerut",
    "Navimumbai",
    "Patna",
    "Raipur",
    "Rudrapur",
    "Tinsukia",
    "Vapi",
  ],
  [
    "Ahmedabad",
    "Aurangabad",
    "Bhopal",
    "Chandigarh",
    "Dehradun",
    "Ghaziabad",
    "Gwalior",
    "Indore",
    "Jamnagar",
    "Kolkata",
    "Ludhiana",
    "Mumbai",
    "Neemrana",
    "Pondicherry",
    "Rajkot",
    "Secunderabad",
    "Tirupur",
    "Varanasi",
  ],
  [
    "Allahabad",
    "Banaras",
    "Bhubaneswar",
    "Chennai",
    "Delhi",
    "Goa",
    "Haridwar",
    "Jabalpur",
    "Jodhpur",
    "Korba",
    "Madurai",
    "Mysore",
    "Noida",
    "Portblair",
    "Ranchi",
    "Shillong",
    "Trichy",
    "Vijayawada",
  ],
  [
    "Alwar",
    "Bangalore",
    "Bhuj",
    "Cochin",
    "Dwarka",
    "Greaternoida",
    "Hisar",
    "Jaipur",
    "Kalighat",
    "Kota",
    "Manesar",
    "Nagpur",
    "Panipat",
    "Pune",
    "Renukoot",
    "Siliguri",
    "Trivandrum",
    "Visakhapatnam",
  ],
];

const locationStateMap = {
  Agartala: "Tripura",
  Agra: "Uttar Pradesh",
  Ahmedabad: "Gujarat",
  Allahabad: "Uttar Pradesh",
  Alwar: "Rajasthan",
  Ambala: "Haryana",
  Ankleshwar: "Gujarat",
  Aurangabad: "Maharashtra",
  Bangalore: "Karnataka",
  Banaras: "Uttar Pradesh",
  Baroda: "Gujarat",
  Bhilai: "Chhattisgarh",
  Bhiwandi: "Maharashtra",
  Bhopal: "Madhya Pradesh",
  Bhubaneswar: "Odisha",
  Bhuj: "Gujarat",
  Bikaner: "Rajasthan",
  Calicut: "Kerala",
  Chandigarh: "Chandigarh",
  Chennai: "Tamil Nadu",
  Cochin: "Kerala",
  Coimbatore: "Tamil Nadu",
  Cuttack: "Odisha",
  Dehradun: "Uttarakhand",
  Delhi: "Delhi NCR",
  Dwarka: "Delhi NCR",
  Faridabad: "Haryana",
  Gandhidham: "Gujarat",
  Ghaziabad: "Uttar Pradesh",
  Goa: "Goa",
  Greaternoida: "Uttar Pradesh",
  Gurgaon: "Haryana",
  Guwahati: "Assam",
  Gwalior: "Madhya Pradesh",
  Haridwar: "Uttarakhand",
  Hisar: "Haryana",
  Hubli: "Karnataka",
  Hyderabad: "Telangana",
  Indore: "Madhya Pradesh",
  Jaipur: "Rajasthan",
  Jabalpur: "Madhya Pradesh",
  Jammu: "Jammu and Kashmir",
  Jamnagar: "Gujarat",
  Jamshedpur: "Jharkhand",
  Jodhpur: "Rajasthan",
  Kalighat: "West Bengal",
  Kanpur: "Uttar Pradesh",
  Kolkata: "West Bengal",
  Kolhapur: "Maharashtra",
  Korba: "Chhattisgarh",
  Kota: "Rajasthan",
  Kottayam: "Kerala",
  Lucknow: "Uttar Pradesh",
  Ludhiana: "Punjab",
  Madurai: "Tamil Nadu",
  Mangalore: "Karnataka",
  Manesar: "Haryana",
  Meerut: "Uttar Pradesh",
  Mumbai: "Maharashtra",
  Mysore: "Karnataka",
  Nagpur: "Maharashtra",
  Nasik: "Maharashtra",
  Navimumbai: "Maharashtra",
  Neemrana: "Rajasthan",
  Noida: "Uttar Pradesh",
  Panipat: "Haryana",
  Patna: "Bihar",
  Patalganga: "Maharashtra",
  Pondicherry: "Puducherry",
  Portblair: "Andaman and Nicobar",
  Pune: "Maharashtra",
  Raigarh: "Chhattisgarh",
  Raipur: "Chhattisgarh",
  Rajkot: "Gujarat",
  Ranchi: "Jharkhand",
  Renukoot: "Uttar Pradesh",
  Rourkela: "Odisha",
  Rudrapur: "Uttarakhand",
  Secunderabad: "Telangana",
  Shillong: "Meghalaya",
  Siliguri: "West Bengal",
  Surat: "Gujarat",
  Tinsukia: "Assam",
  Tirupur: "Tamil Nadu",
  Trichy: "Tamil Nadu",
  Trivandrum: "Kerala",
  Udaipur: "Rajasthan",
  Vapi: "Gujarat",
  Varanasi: "Uttar Pradesh",
  Vijayawada: "Andhra Pradesh",
  Visakhapatnam: "Andhra Pradesh",
};

const routeHubs = [
  "Delhi",
  "Jaipur",
  "Mumbai",
  "Pune",
  "Ahmedabad",
  "Hyderabad",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Lucknow",
];

const responseTimes = ["Within 15 mins", "Within 20 mins", "Within 25 mins", "Within 30 mins", "Within 35 mins"];
const coverageTypes = ["Local + Intercity", "Intercity Priority", "Local + Interstate", "Door-to-Door Coverage"];

const formatLocationName = (value) => {
  if (value === "Navimumbai") return "Navi Mumbai";
  if (value === "Greaternoida") return "Greater Noida";
  if (value === "Portblair") return "Port Blair";
  return value;
};

export const createLocationSlug = (value) =>
  formatLocationName(value)
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-");

const buildPopularRoutes = (city) =>
  routeHubs
    .filter((hub) => hub.toLowerCase() !== city.toLowerCase())
    .slice(0, 3)
    .map((hub) => `${city} to ${hub}`);

const buildServiceList = (index) => [
  services[index % services.length].title,
  services[(index + 1) % services.length].title,
  services[(index + 2) % services.length].title,
];

export const locationCoverage = locationColumns.flat().map((rawCity, index) => {
  const city = formatLocationName(rawCity);

  return {
    city,
    slug: createLocationSlug(rawCity),
    state: locationStateMap[rawCity] || "India",
    coverage: coverageTypes[index % coverageTypes.length],
    responseTime: responseTimes[index % responseTimes.length],
    popularRoutes: buildPopularRoutes(city),
    services: buildServiceList(index),
  };
});

export const getLocationBySlug = (slug) => locationCoverage.find((location) => location.slug === slug);
