import { Cast, Character, Person, Shows, Image, Schedule, Rating, Network } from "./shows.models";

export type SearchBarProps = {
  setTextSearched: (textSrc: string) => void;
}
export type MovieListProps = {
  movieLs: Shows[];
}
export type CardProps = {
	id: number;
	title: string;
	img: string;
	genre: string;
	nation: string;
	year: string;
}
export type MovieDetailProps = {
  setCastLs: (castLs: Cast[]) => void;
}
export type MoviePosterProps = {
  posterImg: Image;
}
export type MovieWidgetProps = {
  rating: Rating;
  schedule: Schedule;
}
export type MovieDetailsProps = {
  name: string;
  genres: string[];
  network: Network;
  summary: TrustedHTML;
}
export type CastListProps = {
  castLs: Cast[];
}
export type CastListItemProps = {
	img: string | boolean | undefined;
	person: Person;
	character: Character;
}
