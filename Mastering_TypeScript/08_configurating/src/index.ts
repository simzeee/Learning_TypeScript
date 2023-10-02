interface Chicken {
  breed: string;
  eggsPerWeek: number;
  name: string;
  age: number;
}

const norma: Chicken = {
  breed: "Silkie",
  eggsPerWeek: 4,
  name: "Norma",
  age: 2,
};

// --watch will automatically recompile. tsc --watch index.ts

const juniper: Chicken = {
  breed: "Silkie",
  eggsPerWeek: 4,
  name: "Juniper",
  age: 1,
};

const doThing = (thing: number):void => {
  console.log(thing)
}