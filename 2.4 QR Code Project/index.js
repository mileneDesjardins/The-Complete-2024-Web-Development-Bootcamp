import { input } from "@inquirer/prompts";
import fs from "fs";
import qr from "qr-image";

async function generateQRCode() {
  // Obtenir l'URL de l'utilisateur
  const url = await input({ message: "Enter your URL" });
  console.log(url);

  // Générer le QR code en PNG
  var qr_png = qr.image(url, { type: "png" });
  qr_png.pipe(fs.createWriteStream("qr.png"));

  // Générer une chaîne PNG synchronisée
  var png_buffer = qr.imageSync(url, { type: "png" });

  // Écrire l'URL dans un fichier texte
  fs.writeFile("url.txt", url, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}

// Appeler la fonction asynchrone
generateQRCode();
