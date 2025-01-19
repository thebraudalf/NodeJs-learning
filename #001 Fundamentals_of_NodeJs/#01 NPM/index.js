// Importing external modules using npm intall command

// importing sillyname module
import generateName from "sillyname";

const sillyName = generateName();

console.log(sillyName);

// *************************Challenge*************************

// importing superheroes module
import { randomSuperhero } from "superheroes";

const randomSuperheroName = randomSuperhero();
console.log(`My favorite hero name is ${randomSuperheroName}.`);
