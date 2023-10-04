// class Player {
//   public readonly first: string;
//   public readonly last: string;
//   private score: number = 0;

//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//     // this works since it is happening at the instantiation of the class
//     this.secretMethod()
//   }

//   private secretMethod(): void {
//     console.log("secret")
//   }
// }

class Player {
  // protected is only accessible in extended classes
  protected _score: number = 0;

  constructor(public first: string, public last: string) {
    this.first = first;
    this.last = last;
    // this works since it is happening at the instantiation of the class
    this.secretMethod();
  }

  private secretMethod(): void {
    console.log("secret");
  }

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  set score(num: number) {
    if (num > 0) {
      throw new Error("Score cannot be negative!");
    }
    this._score = num;
  }
}
const elton = new Player("Elton", "Steele");

class AdminPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {}
}

interface Colorful {
  color: string;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful {
  constructor(public brand: string, public color: string) {}
}

const bike1 = new Bike("red");
const jacket = new Jacket("prada", "blue");

abstract class Employee {
  // methods that must be implemented by a child class
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
  greet() {
    console.log("My greeting.");
  }
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }

  getPay(): number {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(first: string, last: string, private hoursWorked: number, private hourlyRate: number) {
    super(first, last);
  }
  getPay(): number {
    return this.hoursWorked * this.hourlyRate
  }
}

const betty = new FullTimeEmployee("Betty", "White", 95000)
betty.getPay()

const bill = new PartTimeEmployee("Bill", "Smith", 23, 15)
bill.getPay()