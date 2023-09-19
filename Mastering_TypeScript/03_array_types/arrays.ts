let names: string[] = ["string", "here"];

const pushString: string[] = [];
pushString.push("a string");

const ageList: number[] = [45, 56, 13];
ageList[0] = 13;

const booleanArray: boolean[] = [true, false];

// Alternate syntax Array Types

// const bools: Array<boolean> = []

type Point = {
  x: number;
  y: number;
};

const coords: Point[] = [];
coords.push({ x: 3, y: 4 });

const board: string[][] = [
  ["X", "O", "X"],
  ["X", "O", "X"],
  ["X", "O", "X"],
];

const demo: number[][][] = [[[1]]];
