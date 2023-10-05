// generics allow us to define reusable functions and classes that work with multiple types rather than a single type

function wrapInArray<T>(element: T): T[] {
  return [element];
}

const nums: number[] = [];
const nums2: Array<number> = [3];
const colors: Array<string> = ["test"];

function numberIdentity(item: number): number {
  return item;
}

function stringIdentity2(item: string): string {
  return item;
}
function booleanIdentity(item: boolean): boolean {
  return item;
}

// whatever the input type is, that's what the output type will be
function identity<Type>(item: Type): Type {
  return item;
}

interface Cat {
  name: string;
  breed: string;
}
identity<number>(7);
identity<string>("string");
identity<Cat>({ name: "cat", breed: "street cat" });

// Generic round 2

function getRandomElement<T>(list: T[]): T {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
}

console.log(getRandomElement<string>(["a", "b", "c"]));
console.log(getRandomElement<number>([1, 2, 3]));
// the type can be inferred
console.log(getRandomElement([true, false, true]));

// generics with multiple types

function merge<T, U>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}

const comboObj = merge({ test: 1, test2: 2 }, { hi: "there" });

// constraining generic types

// console.log(merge({name: 'Colt'}, 0)) this doesn't work so let's add constraints with the extends word

function merge2<T extends object, U extends object>(object1: T, object2: U) {
  return {
    ...object1,
    ...object2,
  };
}

// using an interface as the constraint

interface Lengthy {
  length: number;
}

function printDoubleLength<T extends Lengthy>(thing: T): number {
  return thing.length * 2;
}

// default parameters

function makeEmptyArray<T = number>(): T[] {
  return [];
}
// numbers because it's default value is numbers
const nums5 = makeEmptyArray();
// this is specified
const bools = makeEmptyArray<boolean>();

// generic classes

interface Song {
  title: string;
  artist: string;
}

interface Video {
  creator: string;
  resolution: string;
}

class Playlist<T> {
  public queue: T[] = [];
  add(el: T) {
    this.queue.push(el);
  }
}

const songs = new Playlist<Song>();
// must be a Song
songs.add({ title: "Antihero", artist: "T-Swift" });

const videos = new Playlist<Video>();
// must be a Video
videos.add({
  creator: "me",
  resolution: "1080",
});
