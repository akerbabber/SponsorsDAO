export interface Hackathon {
  id: number;
  name: string;
  date: string;
  location: string;
  imageUrl: string;
  description: string
}

export interface Sponsorship {
  id: number;
  hacker: string;
  sponsor: string;
  isApproved: Boolean;
  isLocked: Boolean;
  amount: number;
  description: string;
}

export interface Sponsor {
  id: number;
  name: string;
  bio: string;
  logoUrl: string;
  websiteUrl: string;
  sponsorships: Array<Sponsorship>;
}

export interface Hacker {
  id: number;
  name: string;
  bio: string;
  imageUrl?: string;
  location: string;
}
