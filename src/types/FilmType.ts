export interface FilmType {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

export interface FilmListResponseType {
  count: number;
  next: string | null;
  previous: string | null;
  results: FilmType[];
}

export interface UseFilmsResponse {
  data: FilmListResponseType;
  error: Error | undefined;
  isLoading: boolean;
}
