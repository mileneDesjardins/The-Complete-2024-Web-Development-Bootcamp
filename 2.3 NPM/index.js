import generateName from "sillyname";
import { readFile } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname } from "path";

// Obtenez le chemin absolu du fichier JSON
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const superheroesJsonPath = `${__dirname}/node_modules/superheroes/superheroes.json`;

// Lisez et parsez le fichier JSON
const superheroesData = JSON.parse(await readFile(superheroesJsonPath, "utf8"));

// Fonction pour obtenir un nom de superhéros aléatoire
const randomSuperhero = () => {
  return superheroesData[Math.floor(Math.random() * superheroesData.length)];
};

// Utilisez "sillyname"
const sillyName = generateName();
console.log(`My name is ${sillyName}`);

// Utilisez "superheroes"
const name = randomSuperhero();
console.log(`I am ${name}`);
