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
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number;
}) {
  let str = `${car.make} ${car.model} ${car.year}`;
  car.chargeVoltage;

  if (typeof car.chargeVoltage !== 'undefined')
    str += `// ${car.chargeVoltage}v`;

  console.log(`${car.make} ${car.model} (${car.year})`);
}

printCar({ make: 'Toyota', model: 'Corolla', year: 2002 });
