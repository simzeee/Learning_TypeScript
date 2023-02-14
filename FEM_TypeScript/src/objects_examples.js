var car;
/**
 * Print information about a car to the console
 * @param car - the car to print
 */
function printCar(car) {
    console.log("".concat(car.make, " ").concat(car.model, " (").concat(car.year, ")"));
}
printCar({ make: 'test', model: 'test', year: 0 });
