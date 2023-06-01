export type Country = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };

  capital: string[];
  region: string;
  languages: {
    [key: string]: string;
  };
  borders: string[];
  area: number;
  population: number;
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
};

export type FavoriteCountry = {
  country: Country;
  isFavorite: boolean;
};
