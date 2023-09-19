// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":

const ages: number[] = [];

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings

const gameBoard: string[][] = [[]];

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a Product type that contains a name and a price.
// An example product could be:
// {name: "coffee mug", price: 11.50}

type Product = {
  name: string;
  price: number;
};

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices

const getTotal = (productType: Product[]):number => {
return productType.reduce((acc, product) => {
  return product.price + acc
},0)
}

const testCase: Product[] = [{name: 'one', price: 1},{name: 'two', price: 2},{name: 'three', price: 3}]

console.log(getTotal(testCase))