type GroceryStore<Name, City> = {
  name: Name;
  city: City;
};

type GroceryItem<
  Name extends string,
  Price extends number,
  InStock extends boolean
> = {
  name: Name;
  price: Price;
  inStock: InStock;
};

type CapreseSalad = {
  name: "Caprese Salad";
  price: 14.99;
  inStock: true;
};
