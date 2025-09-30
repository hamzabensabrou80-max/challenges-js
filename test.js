//  let nombre1 = prompt("entrer 1 number");
//  console.log(nombre1);
//  let nombre2 = prompt("entrer 2 number");
// console.log(nomber2);
// let nombre3 =rompt("entrer3 number");
// console .log(nombre3);

// let tableau = [3,5,7,9,11,13,15,17,19,21];
// let somme
// for (let i = 0 ; i< tableau.length; i++){
// somme += tableau.length;[i]; 
// }
// let moyenne = somme / tableau

// let nombres = [];
// let somme = 0;
// let nombre;

// for (let i = 0; i < 10; i++) {
//     do {
//         nombre = prompt(`Entrez le nombre entier #${i + 1} :`);
//     } while (isNaN(nombre) || nombre.trim() === "");

//     nombre = parseInt(nombre);
//     nombres.push(nombre);
//     somme += nombre;
// }

// let moyenne = somme / nombres.length;

// console.log("Les nombres saisis :", nombres);
// console.log("Somme des nombres :", somme);
// console.log("Moyenne des nombres :", moyenne.toFixed(2));

let chaines = [];
let entree;

// Entrer 8 chaînes
for (let i = 0; i < 8; i++) {
    do {
        entree = prompt(`Entrez la chaîne #${i + 1} :`).trim();
    } while (entree === "");

    chaines.push(entree);
}

// Chaîne à rechercher
let recherche = prompt("Entrez la chaîne à rechercher :").trim();

let positions = [];

// Recherche de la chaîne (insensible à la casse)
for (let i = 0; i < chaines.length; i++) {
    if (chaines[i].toLowerCase() === recherche.toLowerCase()) {
        positions.push(i);
    }
}

// Résultat
if (positions.length > 0) {
    console.log(`La chaîne "${recherche}" est présente à la position(s) : ${positions.join(', ')}`);
} else {
    console.log(`La chaîne "${recherche}" n'est pas présente dans le tableau.`);
}





let chaines = [];

// Demande à l'utilisateur d'entrer 3 chaînes
for (let i = 0; i < 3; i++) {
    let entree;
    do {
        entree = prompt(`Entrez la chaîne #${i + 1} :`).trim();
    } while (entree === "");

    chaines.push(entree);
}

// Demande de la chaîne à rechercher
let recherche = prompt("Entrez la chaîne à rechercher :").trim();

// Recherche de la chaîne
let position = -1;

for (let i = 0; i < chaines.length; i++) {
    if (chaines[i] === recherche) {
        position = i + 1; // +1 pour que l'utilisateur voie les positions à partir de 1
        break;
    }
}

// Affichage du résultat
if (position !== -1) {
    console.log(`La chaîne "${recherche}" a été trouvée à la position ${position}`);
} else {
    console.log(`La chaîne "${recherche}" n'a pas été trouvée.`);
}



let nombres = [];

// Lire 7 entiers
for (let i = 0; i < 7; i++) {
    let input;
    do {
        input = prompt(`Entrez l'entier #${i + 1} :`);
    } while (isNaN(input) || input.trim() === "");

    nombres.push(parseInt(input));
}

// Trouver le plus petit et le plus grand
let min = Math.min(...nombres);
let max = Math.max(...nombres);

// Affichage des résultats
console.log("Nombres saisis :", nombres);
console.log("Le plus petit nombre est :", min);
console.log("Le plus grand nombre est :", max);





// ÉTAPE 1 : Définir le tableau d'entiers que nous voulons utiliser.
// C'est notre liste de nombres de départ.
let nombres = [2, 5, 8, 10, 3];

// ---

// ÉTAPE 2 : Parcourir chaque nombre dans le tableau.
// On utilise une boucle 'for...of' car c'est facile pour les débutants
// et ça nous permet de prendre chaque 'nombre' un par un.
console.log("Voici les nombres et leurs carrés :");


for (let nombre of nombres) {
    // ÉTAPE 3 : Calculer le carré du nombre actuel.
    // Le carré d'un nombre, c'est ce nombre multiplié par lui-même.
    // Par exemple, le carré de 2 est 2 * 2 = 4.
    let carre = nombre * nombre;

    // ÉTAPE 4 : Afficher le résultat.
    // 'console.log()' affiche des informations dans la console (là où on voit les résultats).
    console.log("Le carré de " + nombre + " est : " + carre);
}


/**
 * Compte le nombre de voyelles (a, e, i, o, u, y) dans une chaîne donnée.
 * * @param {string} chaine - La chaîne de caractères à analyser.
 * @returns {number} - Le nombre total de voyelles trouvées.
 */
function compterVoyelles(chaine) {
    // 1. Initialiser le compteur de voyelles à zéro.
    let compteur = 0;

    // 2. Définir la liste des voyelles à rechercher.
    // On inclut les minuscules et les majuscules pour ne rien manquer !
    const voyelles = "aeiouyAEIOUY";

    // 3. Parcourir chaque caractère de la chaîne.
    // On utilise une boucle 'for...of' pour simplifier la lecture.
    for (const caractere of chaine) {
        
        // 4. Vérifier si le caractère actuel est une voyelle.
        // 'includes()' vérifie si la chaîne 'voyelles' contient le 'caractere' actuel.
        if (voyelles.includes(caractere)) {
            // 5. Si c'est une voyelle, augmenter le compteur.
            compteur++;
        }
    }

    // 6. Renvoyer le résultat final.
    return compteur;
}

// --- Exemples d'utilisation (Tests) ---

const phrase1 = "Hello world";
const resultat1 = compterVoyelles(phrase1);
console.log(`Entrée : "${phrase1}"`);
console.log(`Nombre de voyelles : ${resultat1}`); 
// Affichera : Nombre de voyelles : 3 (e, o, o)

---

const phrase2 = "Programming is Fun!";
const resultat2 = compterVoyelles(phrase2);
console.log(`\nEntrée : "${phrase2}"`);
console.log(`Nombre de voyelles : ${resultat2}`); 
// Affichera : Nombre de voyelles : 6 (o, a, i, i, o)