import { Sponsorship, Sponsor, Hacker, Hackathon } from "@/interfaces/front";

export const exampleSponsorships: Array<Sponsorship> = [
  {
    id: 1,
    hacker: "Alice Smith",
    sponsor: "ABC Corporation",
    isApproved: true,
    isLocked: false,
    amount: 500,
    description: "Supporting Alice's attendance at the hackathon.",
  },

  {
    id: 2,
    hacker: "Bob Johnson",
    sponsor: "XYZ Company",
    isApproved: false,
    isLocked: false,
    amount: 250,
    description: "Partial funding for Bob's project development.",
  },

  {
    id: 3,
    hacker: "Charlie Brown",
    sponsor: "MNO Corporation",
    isApproved: true,
    isLocked: true,
    amount: 1000,
    description:
      "Full funding for Charlie's participation in the coding competition.",
  },
];

export const exampleSponsors: Array<Sponsor> = [
  {
    id: 0,
    name: "1inch",
    bio: "To the moon",
    logoUrl: "/images/sponsors/1inch.png",
    websiteUrl: "https://1inch.io/",
    sponsorships: [],
  },
  {
    id: 1,
    name: "Ethereum Foundation",
    bio: "Distributed computing for everyone",
    logoUrl: "/images/sponsors/ethereum-foundation.jpeg",
    websiteUrl: "https://ethereum.org/en/foundation/",
    sponsorships: [],
  },
  // Add more profiles here
];

export const exampleHackers: Array<Hacker> = [
  {
    id: 0,
    name: "vitalik.eth",
    bio: "Junior solidity dev",
    location: "Kolomna, RU",
  },
  {
    id: 1,
    name: "Dread Pirate Roberts",
    bio: "ecommerce enthusiast",
    location: "Austin, TX",
  },
];

export const exampleHackathons: Array<Hackathon> = [
  {
    id: 1,
    name: "Hackathon 2021",
    date: "2021-10-30",
    location: "Online",
    imageUrl: "https://picsum.photos/300/200",
    description: "The biggest hackathon of the year",
  },
  {
    id: 2,
    name: "Summer Hackathon",
    date: "2022-07-15",
    location: "San Francisco",
    imageUrl: "https://picsum.photos/300/200",
    description: "A hackathon for the summer",
  },
  {
    id: 3,
    name: "Hack the Planet",
    date: "2023-02-18",
    location: "Tokyo",
    imageUrl: "https://picsum.photos/300/200",
    description: "A global hackathon for a better world",
  },
  // Add more hackathons here
];
