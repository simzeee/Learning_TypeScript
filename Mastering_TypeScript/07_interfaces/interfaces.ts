// interfaces allow us to describe the shapes of objects. Only objects.

interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 23, y: 5 };

interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  sayHi: () => string;
}

const thomas: Person = {
  first: "Thomas",
  last: "Hardy",
  nickname: "Tom",
  id: 235,
  sayHi: () => "hi",
};

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

const shoes: Product = {
  name: "Blue Suede Shoes",
  price: 100,
  applyDiscount: (amount: number) => {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

const myObject = {
  test: (test) => {
    return test;
  },
};

interface Addable {
  add(x: number, y: number): number;
}

interface Addable {
  add: (x: number, y: number) => number;
}

// reopening interfaces

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

const elton: Dog = {
  name: "Elton",
  age: 0.5,
  breed: "Australian Shepherd",
  bark: () => "woof",
};

// Extending interfaces (inherit from another interface)

interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 4.5,
  breed: "lab",
  bark() {
    return "BARK BARK";
  },
  job: "guide dog",
};

// Interface Multiple Inheritance

interface Dude {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Dude, Employee {
  level: string;
  languages: string[];
}

const pierre: Engineer = {
  name: "Pierre",
  id: 1234,
  email: "pierre@mgmail.com",
  level: "senior",
  languages: ["JS", "Python"],
};

// Interfaces versus Type Aliases

// You have to use a type alias if you're not describing the shape of an object
type Color = "red" | "blue";

// Interfaces you can reopen, type aliases you cannot

type Chicken = {
  breed: string;
};

// This will error
// type Chicken = {
//   numEggs: number
// }

// You use intersection types with $ instead of extends with interfaces

type newBird = Chicken & {
  feathers: string;
};

interface newEmployee extends Engineer {
  smile: string;
}

const steve: newEmployee = {
  name: "Steve",
  id: 523,
  email: "steve@gmail.com",
  level: "junior",
  languages: ["ruby", "SQL"],
  smile: "never",
};
