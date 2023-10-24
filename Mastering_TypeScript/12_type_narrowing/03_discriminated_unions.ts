interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}

interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: "sheep";
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

const getFarmAnimalSound = (animal: FarmAnimal) => {
  switch (animal.kind) {
    case "pig":
      return "oink";
    case "cow":
      return "Mooo!";
    case "rooster":
      return "Buh-caw!";
    case "sheep":
      return "baaahhh";
    default:
      // We should never make it here
      // const shouldNeverGetHere: never = animal;
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
};

const stevie: Rooster = {
  name: "Stevie Chicks",
  weight: 2,
  age: 1.5,
  kind: "rooster",
};

console.log(getFarmAnimalSound(stevie));
