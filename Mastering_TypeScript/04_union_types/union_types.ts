let age: number | string = 23;

age = 3;
age = "3";

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 34 };
coordinates = { lat: 321.213, long: 23.334 };

// union type with functions

const printAge = (age: number | string): void => {
  console.log(`You are ${age} years old`);
};

printAge(3);
printAge("23");

function calculateTax(price: number | string, tax: number): number | string {
  if (typeof price === "string") {
    price = price.replace("$", "");
    return parseFloat(price);
  }
  return price * tax;
}

// union with array types
const nums: number[] = [1, 2, 3, 4];
const manyThings: any[] = [true, 3, "4", {}];
const stuff: (number | string)[] = [2, "string", 5];

const coords: (Point | Loc)[] = [];
coords.push({ lat: 321, long: 23.44 });
coords.push({ x: 213, y: 45 });

// literal types

let zero: 0 = 0;

const giveAnswer = (answer: "yes" | "no" | "maybe") => {
  return answer;
};

let mood: "Happy" | "Sad" | "Angry";
mood = "Sad";
// mood = "hungry"

type DayOfWeek = "Monday" | "Tuesday";

// let today: DayOfWeek = "weds"
let today: DayOfWeek = "Monday";
