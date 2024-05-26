const identity = <T>(arg: T) => {
  return arg;
};

// Which "resolves" into:
const mapArray = <T, U>(arr: T[], fn: (val: T) => U) => arr.map(fn);
