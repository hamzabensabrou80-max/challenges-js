// Fonctions simples pour les opérations
function addition(a, b) {
    return a + b;
}

function soustraction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        return "ERREUR : On ne peut pas diviser par zéro !";
    }
    return a / b;
}

function puissance(a, b) {
    return Math.pow(a, b);
}

function racineCarree(a) {
    if (a < 0) {
        return "ERREUR : Pas de racine carrée réelle pour un nombre négatif.";
    }
    return Math.sqrt(a);
}

function factorielle(n) {
    if (n < 0 || !Number.isInteger(n)) {
        return "ERREUR : La factorielle doit être un entier positif ou zéro.";
    }

    let resultat = 1;
    for (let i = 1; i <= n; i++) {
        resultat = resultat * i;
    }
    return resultat;
}

// Fonction principale
function calculatrice() {
    let nombre1 = prompt("Entrez un nombre :");
    nombre1 = parseFloat(nombre1);

    if (isNaN(nombre1)) {
        alert("Ce n'est pas un nombre !");
        return;
    }

    let operateur = prompt("Choisissez une opération : +, -, *, /, **, sqrt, !");

    let nombre2 = null;
    if (operateur === "+" || operateur === "-" || operateur === "*" || operateur === "/" || operateur === "**") {
        nombre2 = prompt("Entrez un deuxième nombre :");
        nombre2 = parseFloat(nombre2);

        if (isNaN(nombre2)) {
            alert("Ce deuxième nombre n'est pas valide !");
            return;
        }
    }

    let resultat;

    if (operateur === "+") {
        resultat = addition(nombre1, nombre2);
    } else if (operateur === "-") {
        resultat = soustraction(nombre1, nombre2);
    } else if (operateur === "*") {
        resultat = multiplication(nombre1, nombre2);
    } else if (operateur === "/") {
        resultat = division(nombre1, nombre2);
    } else if (operateur === "**") {
        resultat = puissance(nombre1, nombre2);
    } else if (operateur === "sqrt") {
        resultat = racineCarree(nombre1);
    } else if (operateur === "!") {
        resultat = factorielle(nombre1);
    } else {
        alert("Opération non reconnue.");
        return;
    }

    // Afficher le résultat
    if (typeof resultat === "string" && resultat.startsWith("ERREUR")) {
        alert(resultat);
    } else {
        alert("Résultat : " + resultat);
    }
}

// Lancer la calculatrice
calculatrice();
