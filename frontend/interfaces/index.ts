export interface Hacker {
  lensUrl: string;
  github4Url: string;
  linkedInUrl: string;
  twitterUrl: string;
  websiteUrl: string;
  location: string;
  daos: string[];
}

export interface Sponsor {
  name: string;
  logoUrl: string;
  websiteUrl: string;
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
