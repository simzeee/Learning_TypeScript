// specific to TS. A custom function that can narrow the type of a value.
// These functions have a very special return type called a type predicate

interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
  // if it returnns true then we know it's a cat
  return (animal as Cat).numLives !== undefined;
}

const makeNoise = (animal: Cat | Dog): string => {
  if (isCat(animal)) {
    return "Meow";
  } else {
    return "Woof";
  }
};
