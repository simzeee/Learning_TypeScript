// quirk with generic syntax if you're working with React and in a .tsx file

const getRandomElement2 = <T,>(list: T[]): T => {
  const randIdx = Math.floor(Math.random() * list.length);
  return list[randIdx];
};
