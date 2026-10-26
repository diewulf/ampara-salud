import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const root = import.meta.dirname;
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");
const exportedPages = [
  ["out/index.html", "Dra. Ignacia Mendoza · Salud mental online | Ampara"],
  ["out/politica-de-privacidad/index.html", "Política de privacidad | Ampara Salud Mental"],
  ["out/condiciones-de-atencion/index.html", "Condiciones de atención | Ampara Salud Mental"],
  ["out/derechos-del-paciente/index.html", "Derechos del paciente | Ampara Salud Mental"],
];

for (const [file, title] of exportedPages) {
  assert(fs.existsSync(path.join(root, file)), `Falta la ruta exportada: ${file}`);
  const html = read(file);
  assert(html.includes(`<title>${title}</title>`), `Título incorrecto: ${file}`);
  assert(html.includes('name="description"'), `Falta descripción: ${file}`);
  assert(html.includes('https://encuadrado.com/p/embed.js'), `Falta el script de Encuadrado: ${file}`);
  assert(html.includes('https://wa.me/56932266295'), `Falta WhatsApp: ${file}`);
  assert(html.includes('data-encuadrado-popup'), `Falta el botón de reservas: ${file}`);
}

const home = read("out/index.html");
assert.equal((home.match(/class="review-card"/g) || []).length, 5, "Deben conservarse las cinco reseñas");
assert(home.includes("Boleta para solicitar reembolso en Isapre"), "Falta la información de reembolso");
assert(fs.existsSync(path.join(root, "out/assets/dra-ignacia-960.webp")), "Falta la fotografía");
assert(fs.existsSync(path.join(root, "out/assets/ampara-logo-horizontal-transparent.png")), "Falta el logo");
console.log("PASS: cuatro rutas estáticas, metadatos, reservas, WhatsApp, reseñas y recursos.");
