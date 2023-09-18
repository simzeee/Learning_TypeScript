function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}

printName({ first: "Thomas", last: "Keller" });

let coordinate: { x: number; y: number } = { x: 34, y: 2 };

// function randomCoordinate(): { x: number; y: number } {
//   return { x: Math.random(), y: Math.random() };
// }

// // warning here
// printName({ first: "Mick", last: "Jagger", age: 475 });

// // Not here though
// const singer = { first: "Mick", last: "Jagger", age: 475 };
// printName(singer);

// type alias

type Point = {
  x: number;
  y: number;
};

function randomCoordinate(): Point {
  return { x: Math.random(), y: Math.random() };
}

// probably wouldn't do this
type MyNum = number;
let age: MyNum = 24234;

// Nested Objects

const describePerson = (person: {
  name: string;
  age: number;
  parentNames: {
    mom: string;
    dad: string;
  };
}) => {
  return `Person: ${person.name} Age: ${person.age} parents: ${person.parentNames.mom}, ${person.parentNames.dad}`;
};

type Person = {
  name: string;
  age: number;
  parentNames: {
    mom: string;
    dad: string;
  };
};

const examplePerson: Person = {
  name: "john",
  age: 35,
  parentNames: { mom: "Jean", dad: "Scott" },
};

console.log(describePerson(examplePerson));

// optional properties

type anotherPoint = {
  x: number;
  y: number;
  z?: number;
};

const myPoint: Point = { x: 1, y: 3 };

// read only property available only in TS

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 5,
  username: "catgurl",
};

// user.id = 234 warning here

// Intersection types

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow",
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

// adding another property to an intersection type
type CatDog = Cat &
  Dog & {
    age: number;
  };

const christy: CatDog = {
  numLives: 7,
  breed: "Husky",
  age: 9,
};
