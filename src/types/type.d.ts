interface CharacterResponse {
  info: Info;
  results: Character[];
}

interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

interface Character {
  id: number;
  name: string;
  status: "unknown" | "Alive" | "Dead";
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface Origin {
  name: string;
  url: string;
}

interface Location {
  name: string;
  url: string;
}

type GetCharacter = (page: number, search: string, status: string) => void;
