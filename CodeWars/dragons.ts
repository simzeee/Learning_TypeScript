const BULLETS_PER_DRAGON: number = 2;

function hero(bullets: number, dragons: number): boolean {
  const survive: boolean = bullets >= dragons * BULLETS_PER_DRAGON;
  return survive;
}
