type GroceryList = {
  [item: string]: number;
};

type InappropriateActionBySituation = {
  [situation: string]: Array<string>;
};

type CharactersById = {
  [id: number]: {
    id: number;
    name: string;
    status: string;
    species: string;
  };
};
