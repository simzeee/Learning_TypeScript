class Player {
  // any property that starts with a # can only be useable inside of the Player class
  static description = "Player in Our Game";
  #score = 0;
  numLives = 10;
  constructor(first, last) {
    // always called
    console.log("IN CONSTRUCTOR!");
    this.first = first;
    this.last = last;
    // this.score = 0;
    // this.numLives = 10;
  }
  get fullName() {
    return `${this.first} ${this.last}`;
  }
  get score() {
    return this.#score;
  }
  set fullName(newName) {
    const [first, last] = newName.split(" ");
    this.first = first;
    this.last = last;
  }
  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score must be positive!");
    }
    this.#score = newScore;
  }
  updateScore(newScore) {
    this.#score = newScore;
  }
  taunt() {
    console.log("BOOYAH!");
  }
  loseLife() {
    this.numLives -= 1;
  }
}

const player1 = new Player("blue", "steele");
const player2 = new Player("charlie", "brown");
console.log(player1.first);
console.log(player1.last);

// player1.score(-2);
player1.score = 34;
console.log(player1.fullName);
console.log(player1.score);
console.log(Player.description);

// Inheritance

class AdminPlayer extends Player {
  isAdmin = true;
  constructor(first, last, powers) {
    super(first, last);
    this.powers = powers;
  }
}

const admin = new AdminPlayer("admin", "mcAdmin", ["delete", "ban"]);
console.log(admin)