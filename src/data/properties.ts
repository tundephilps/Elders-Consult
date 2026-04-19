import House from "../assets/House.jpg";
import House1 from "../assets/House.jpg";

import House3 from "../assets/House2.png";
import House2 from "../assets/Prop1A.jpg";
// import House3 from "../assets/House3.jpg";

export interface Property {
  id: number;
  type: string;
  title: string;
  image: string;
  agentImage: string;
  agentName: string;
  postedDate: string;
  mode: string;
  bgColor: string;
  color: string;
  location: string;
  price: string;
  originalPrice: string;
  rating: number;
  reviews: number;
  status: string;
  description: string;
  fullDescription: string;
  videos: string[];
  homeimage1?: string;
  homeimage2?: string;
}

export const properties: Property[] = [
  {
    id: 1,
    type: "For Sale",
    title: "Semi detached (4 B/R duplex)",
    image: House2,
    agentImage:
      "https://images.arrivedhomes.com/properties/541/ea9b0425a74167fae835bf091dfc613a.jpg",
    agentName: "Agent Yomi Ojo",
    postedDate: "1/03/26",
    mode: "Available",
    bgColor: "#E01A2D1A",
    color: "#E01A2D",
    location: "Green Hill Estate Pen Cinema Agege",
    price: "",
    originalPrice: "",
    rating: 5,
    reviews: 47,
    status: "Available",
    description:
      "Semi detached (4 B/R duplex) with solar inverter and all rooms en suite.",
    fullDescription: `
Beautiful semi detached duplex with 3.5kv solar inverter, all rooms en suite and guaranteed security.
-----------------------------------
For sale: Semi detached (4 B/R duplex)

N200m

Location: Green Hill Estate Pen Cinema Agege.

It comes with 3.5kv solar inverter 

All rooms en suite 

Security guaranteed
`,
    videos: [
      "https://www.youtube.com/embed/9R9WOtIH6bw",
      "https://www.youtube.com/embed/6CIvSZ3LWFc",
      "https://www.youtube.com/embed/1Icy4Db8gMY",
    ],
    homeimage1: House1,
    homeimage2: House2,
  },
  {
    id: 2,
    type: "For Sale",
    title: "CITY VIEW STUDIO APARTMENTS",
    image: House,
    agentImage:
      "https://images.arrivedhomes.com/properties/541/ea9b0425a74167fae835bf091dfc613a.jpg",
    agentName: "Agent Yomi Ojo",
    postedDate: "1/03/26",
    mode: "Available",
    bgColor: "#E01A2D1A",
    color: "#E01A2D",
    location: "Lagos",
    price: "",
    originalPrice: "",
    rating: 5,
    reviews: 47,
    status: "Available",
    description: "CITY VIEW STUDIO APARTMENTS",
    fullDescription: `
-----------------------------------
*Reportage Tower Price Update*

*CITYVIEW*
Studio Apartment  - SOLD OUT
1 Bedroom Apartment:  $199,000 - $228,000
2 Bedroom Apartment: $299,000  - $343,000

*LAGOON VIEW*
Studio Apartment: SOLD OUT
1 Bedroom Apartment: $210,000  - $237,000
2 Bedroom Apartment: $314,000  - $358,000
3 Bedroom Apartment: $424,000 - $464,000
`,
    videos: [
      "https://www.youtube.com/embed/AWM5OTm89Xo",
      "https://www.youtube.com/embed/5E8yXugWj_Y",
      "https://www.youtube.com/embed/U9BVgvs2cDQ",
    ],
  },
  {
    id: 3,
    type: "Coming soon",
    title: "Coming Soon",
    image: House3,
    agentImage:
      "https://images.arrivedhomes.com/properties/541/ea9b0425a74167fae835bf091dfc613a.jpg",
    agentName: "Agent Yomi Ojo",
    postedDate: "1/03/26",
    mode: "Available",
    bgColor: "#E01A2D1A",
    color: "#E01A2D",
    location: "Lagos",
    price: ".",
    originalPrice: "",
    rating: 5,
    reviews: 47,
    status: "Available",
    description: "CITY VIEW STUDIO APARTMENTS",
    fullDescription: `
-----------------------------------
*Reportage Tower Price Update*

*CITYVIEW*
Studio Apartment  - SOLD OUT
1 Bedroom Apartment:  $199,000 - $228,000
2 Bedroom Apartment: $299,000  - $343,000

*LAGOON VIEW*
Studio Apartment: SOLD OUT
1 Bedroom Apartment: $210,000  - $237,000
2 Bedroom Apartment: $314,000  - $358,000
3 Bedroom Apartment: $424,000 - $464,000
`,
    videos: [
      "https://www.youtube.com/embed/AWM5OTm89Xo",
      "https://www.youtube.com/embed/5E8yXugWj_Y",
      "https://www.youtube.com/embed/U9BVgvs2cDQ",
    ],
  },
];
