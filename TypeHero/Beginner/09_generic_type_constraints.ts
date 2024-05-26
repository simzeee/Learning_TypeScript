type AllowString<T extends string> = T;
type AllowNumber<T extends number> = T;

type CreateLogger<T extends (a: number) => void> = {
  log: T;
  exit: () => void;
};

// Example of how you might use the CreateLogger type:

// Define a function type that matches the constraint
type LogFunction = (a: number) => void;

// Create a logger using the CreateLogger type
const logger: CreateLogger<LogFunction> = {
  log: (num) => {
    console.log(`Logging: ${num}`);
  },
  exit: () => {
    console.log("Exiting logger");
  },
};

// Use the logger
logger.log(42); // Logs: Logging: 42
logger.exit(); // Logs: Exiting logger
