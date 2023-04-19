export type Externals = {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}
export type Image = {
  medium: string;
  original: string;
}
export type Nextepisode = {
  href: string;
}
export type Links = {
  self: Nextepisode;
  previousepisode: Nextepisode;
  nextepisode?: Nextepisode;
}
export type Network = {
  id: number;
  name: string;
  country: Country;
  officialSite: string;
}
export type Rating = {
  average: number;
}
export type Schedule = {
  time: string; // hh:mm
  days: string[];
}
export type Country = {
  name: string;
  code: string;
  timezone: string;
}
export type RefLinks = {
  self: {
    href: string;
  }
}
export type Character = {
  name: string
  id?: number;
  image?: string;
  url?: string;
  _links?: RefLinks
}
export type Person = {
  name: string;
  birthday?: string; // YYYY-MM-DD
  country?: Country;
  deathday?: string;
  gender?: string;
  id?: number;
  image?: Image;
  updated?: number; // millisecond
  url?: string;
  _links?: RefLinks;
}
export type Cast = {
  character: Character;
  person: Person;
  self: boolean,
  voice: boolean
}
export type Shows = {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended:  | string;
  officialSite:  | string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel: Network;
  dvdCountry: Country;
  externals: Externals;
  image: Image;
  summary: TrustedHTML;
  updated: number;
  links: Links;
  _embedded?: {
    cast: Cast[];
  }
}
export type SrcShow = {
  score: number;
  show: Shows
}
