export interface Hacker {
  id: number;
  bio: string;
  name: string;
  imageUrl: string
  lensUrl: string;
  github4Url: string;
  linkedInUrl: string;
  twitterUrl: string;
  websiteUrl: string;
  location: string;
  daos: string[];
}

export interface Sponsor {
  id: number
  name: string;
  logoUrl: string;
  websiteUrl: string;
  sponsorships: Array<Sponsorship>;
}

export interface Sponsorship {
  hacker: string;
  sponsor: string;
  isApproved: Boolean;
  isLocked: Boolean;
  amount: number;
  description: string;
}

export interface Hackathon {
  id: number;
  admin: string;
  name: string;
  logoUrl: string;
  websiteUrl: string;
  description: string;
  startDate: number;
  endDate: number;
  sponsors: Array<Sponsor>;
  hackers: Array<Hacker>;
  sponsorships: Array<Sponsorship>;
}
