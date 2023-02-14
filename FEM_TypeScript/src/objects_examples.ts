let car: {
  make: string;
  model: string;
  year: number;
};

/**
 * Print information about a car to the console
 * @param car - the car to print
 */
function printCar(car: {
  make: string
  model: string
  year: number
}) {
  console.log(`${car.make} ${car.model} (${car.year})`)
}

printCar({make: 'test', model: 'test', year: 0})