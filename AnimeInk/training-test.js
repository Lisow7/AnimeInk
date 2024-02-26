// Faire une fonction tous les jours differents (à chaque fois en dessous de l'ancienne, sans changer les anciennes), git add, git commit -m "text explicatif et le numero de la fonction et la date" (creer fonction n°1, n°2, etc...), push, faire une PR (Pierre en review et je m'assinge + le label "training et exchanges daily, verification (PR)").

// Finir la maquette en responssive, faire les wireframes et les models ! ( exemple sur discord )

// Fonction N°1
// Déclaration d'une fonction fléchée basique qui prend deux paramètres et renvoie leur somme:

const addition = (a, b) => {
  return a + b;
};

// Utilisation de la fonction
console.log(addition(3, 5)); // Affiche 8

////////////////////////////////////////////////////////////////////////////////

// Fonction N°2
// Déclaration d'une fonction fléchée basique qui prend deux paramètres et renvoie leur soustraction:

const soustraction = (a, b) => {
  return a - b;
};

// Utilisation de la fonction
console.log(soustraction(5, 3)); // Affiche 2

////////////////////////////////////////////////////////////////////////////////

// Fonction N°3
// Déclaration d'une fonction fléchée basique qui prend deux paramètres et renvoie leur multiplication:

const multiply = (a, b) => {
  return a * b;
};

// Utilisation de la fonction
console.log(multiply(5, 3)); // Affiche 15

////////////////////////////////////////////////////////////////////////////////

// Fonction N°4
// Déclaration d'une fonction fléchée basique qui prend deux paramètres et renvoie leur multiplication:

const modulo = (a, b) => {
  return a % b;
};

// Utilisation de la fonction
console.log(modulo(5, 3)); // Affiche 2

/////////////////////////////////////////////////////////////////////////////////

//fonction n°5

function maxTrois(a, b, c) {
  return Math.max(a, b, c);
}

let plusGrand = maxTrois(10, 5, 8); // plusGrand sera égal à 10
console.log(plusGrand);

/////////////////////////////////////////////////////////////////////////////////
