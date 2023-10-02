// use tsc on its own and as long as the files are in the same directory any .ts file will be compiled

interface Products {
  price: number;
  name: string;
  quantity: number;
}

const printProduct = (product: Products): void => {
  console.log("stuff");
};