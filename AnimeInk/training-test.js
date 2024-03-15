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

// Fonction n°6

function estPairOuImpair(nombre) {
  if (nombre % 2 === 0) {
    return "Pair";
  } else {
    return "Impair";
  }
}

console.log(estPairOuImpair(4)); // Renvoie "Pair"
console.log(estPairOuImpair(7)); // Renvoie "Impair"

///////////////////////////////////////////////////////////////////////////

// Fonction N°7

function voter(choix) {
  if (choix.toLowerCase() === "oui") {
    console.log("Vous avez voté oui !");
  } else if (choix.toLowerCase() === "non") {
    console.log("Vous avez voté non !");
  } else {
    console.log("Veuillez saisir 'oui' ou 'non'.");
  }
}

voter("oui"); // Affichera "Vous avez voté oui !"
voter("Non"); // Affichera "Vous avez voté non !"
voter("peut-être"); // Affichera "Veuillez saisir 'oui' ou 'non'."

///////////////////////////////////////////////////////////////////////////

// Fonction N°8

let compteurLikes = 0;

function incrementerLikes() {
  compteurLikes++;
  console.log("Nombre de likes : " + compteurLikes);
}

//////////////////////////////////////////////////////////////////////////

// Fonction N°9

function genererNombreAleatoire(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

////////////////////////////////////////////////////////////////////////////

// Fonction N°10

function sommeChiffres(nombre) {
  let somme = 0;
  while (nombre !== 0) {
    somme += nombre % 10; // Ajoute le dernier chiffre à la somme
    nombre = Math.floor(nombre / 10); // Supprime le dernier chiffre du nombre
  }
  return somme;
}

/////////////////////////////////////////////////////////////////////////////

// FUnction n°11

function estPangramme(phrase) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  phrase = phrase.toLowerCase();

  for (let lettre of alphabet) {
    if (phrase.indexOf(lettre) === -1) {
      return false;
    }
  }
  return true;
}

console.log(estPangramme("Le vif zéphyr jubile sur les waqfs nazi")); // Renvoie true
console.log(estPangramme("Bonjour")); // Renvoie false

//////////////////////////////////////////////////////////////////////

// Function N°12

function trierParPropriete(tableau, propriete) {
  return tableau.sort((a, b) =>
    a[propriete] > b[propriete] ? 1 : b[propriete] > a[propriete] ? -1 : 0
  );
}

let personnes = [
  { nom: "Alice", age: 30 },
  { nom: "Bob", age: 25 },
  { nom: "Charlie", age: 35 },
];

let personnesTrieesParAge = trierParPropriete(personnes, "age");
console.log(personnesTrieesParAge);
// Affiche [{ nom: 'Bob', age: 25 }, { nom: 'Alice', age: 30 }, { nom: 'Charlie', age: 35 }]

//////////////////////////////////////////////////////////////////////////////////////////////

// Function N°13

function fusionnerTableauxTriés(tableau1, tableau2) {
  let tableauFusionne = [];
  let i = 0;
  let j = 0;

  while (i < tableau1.length && j < tableau2.length) {
    if (tableau1[i] < tableau2[j]) {
      tableauFusionne.push(tableau1[i]);
      i++;
    } else {
      tableauFusionne.push(tableau2[j]);
      j++;
    }
  }

  // Ajouter les éléments restants du premier tableau
  while (i < tableau1.length) {
    tableauFusionne.push(tableau1[i]);
    i++;
  }

  // Ajouter les éléments restants du deuxième tableau
  while (j < tableau2.length) {
    tableauFusionne.push(tableau2[j]);
    j++;
  }

  return tableauFusionne;
}

let tableau1 = [1, 3, 5, 7];
let tableau2 = [2, 4, 6, 8];
console.log(fusionnerTableauxTriés(tableau1, tableau2)); // Renvoie [1, 2, 3, 4, 5, 6, 7, 8]

//////////////////////////////////////////////////////////////////////////////////////////////

// Function N°14

import React from "react";

function ArticleAuHasard({ articles }) {
  const articleAuHasard = articles[Math.floor(Math.random() * articles.length)];

  return (
    <div>
      <h2>{articleAuHasard.title}</h2>
      <p>{articleAuHasard.content}</p>
    </div>
  );
}

// export default ArticleAuHasard;

import React from "react";
import ArticleAuHasard from "./ArticleAuHasard";

const articles = [
  { title: "Premier article", content: "Contenu du premier article..." },
  { title: "Deuxième article", content: "Contenu du deuxième article..." },
  { title: "Troisième article", content: "Contenu du troisième article..." },
];

function App() {
  return (
    <div className="App">
      <h1>Mon Blog</h1>
      <ArticleAuHasard articles={articles} />
    </div>
  );
}

// export default App;
