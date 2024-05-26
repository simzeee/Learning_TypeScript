type MoviesByGenre = {
  action: "Die Hard";
  comedy: "Groundhog Day";
  sciFi: "Blade Runner";
  fantasy: "The Lord of the Rings: The Fellowship of the Ring";
  drama: "The Shawshank Redemption";
  horror: "The Shining";
  romance: "Titanic";
  animation: "Toy Story";
  thriller: "The Silence of the Lambs";
};

type MovieInfoByGenre<T> = {
  [K in keyof T]: {
    name: string;
    year: number;
    director: string;
  };
};
