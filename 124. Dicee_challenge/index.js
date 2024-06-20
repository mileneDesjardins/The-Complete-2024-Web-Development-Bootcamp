// Crée des variables aléatoires entre 1 et 6 pour les deux images
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Construit les chemins des fichiers en utilisant les variables aléatoires
var imagePath1 = "images/dice" + randomNumber1 + ".png";
var imagePath2 = "images/dice" + randomNumber2 + ".png";

// Sélectionne les images et met à jour leurs attributs 'src' avec les chemins des fichiers
document.querySelector(".img1").setAttribute("src", imagePath1);
document.querySelector(".img2").setAttribute("src", imagePath2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").textContent = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 wins!";
} else {
  document.querySelector("h1").textContent = "Draw!";
}
