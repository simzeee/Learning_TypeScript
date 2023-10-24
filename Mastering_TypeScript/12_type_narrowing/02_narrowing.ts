// typeof guards
const triple = (value: number | string): number | string => {
  if (typeof value === "string") {
    return value.repeat(3) as string;
  } else if (typeof value === "number") {
    return (value * 3) as number;
  }
  return value;
};

// truthiness guards

const el = document.getElementById("idk");
if (el) {
  el.innerText = "What up";
} else {
  el;
  // Null here
}

const printLetters = (word?: string): void => {
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    console.log("Please pass a word.");
  }
};

// equality narrowing

function someDemo(x: string | number, y: string | boolean) {
  if (x === y) {
    // only here if x and y are of the same type
    return x.toUpperCase();
  }
}

someDemo(3, "3");

// in operator
interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

const getRuntime = (content: Movie | TVShow) => {
  if ("numEpisodes" in content) {
    return content.numEpisodes * content.episodeDuration;
  }
  return content.duration;
};

// instanceof narrowing

const printFullDate = (date: Date | string) => {
  if (date instanceof Date) {
    return date.toUTCString();
  } else {
    return new Date(date).toUTCString();
  }
};

class User {
  constructor(public username: string) {}
}
class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company){
  if(entity instanceof User){
    console.log(entity.username)
  }
  else return entity.name
}