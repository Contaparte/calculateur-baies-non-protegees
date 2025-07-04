// Tableau 3.2.3.1.-B - Usages des groupes A, B, C, D et F3 - Sans gicleurs
const tableauGroupesABCDF3 = {
    10: {
        "< 3:1": [0, 8, 10, 18, 29, 46, 91, 100],
        "3:1 à 10:1": [0, 8, 12, 21, 33, 50, 96, 100],
        "> 10:1": [0, 11, 18, 32, 48, 68, 100]
    },
    15: {
        "< 3:1": [0, 7, 9, 14, 22, 33, 63, 100],
        "3:1 à 10:1": [0, 8, 10, 17, 25, 37, 67, 100],
        "> 10:1": [0, 10, 15, 26, 39, 53, 87, 100]
    },
    20: {
        "< 3:1": [0, 7, 9, 12, 18, 26, 49, 81, 100],
        "3:1 à 10:1": [0, 8, 10, 15, 21, 30, 53, 85, 100],
        "> 10:1": [0, 9, 14, 23, 33, 45, 72, 100]
    },
    25: {
        "< 3:1": [0, 7, 8, 11, 16, 23, 41, 66, 98, 100],
        "3:1 à 10:1": [0, 8, 9, 13, 19, 26, 45, 70, 100],
        "> 10:1": [0, 9, 13, 21, 30, 39, 62, 90, 100]
    },
    30: {
        "< 3:1": [0, 7, 8, 11, 15, 20, 35, 56, 83, 100],
        "3:1 à 10:1": [0, 7, 9, 12, 17, 23, 39, 61, 88, 100],
        "> 10:1": [0, 8, 12, 19, 27, 36, 56, 79, 100]
    },
    40: {
        "< 3:1": [0, 7, 8, 10, 13, 17, 28, 44, 64, 89, 100],
        "3:1 à 10:1": [0, 7, 8, 11, 15, 20, 32, 48, 69, 93, 100],
        "> 10:1": [0, 8, 11, 17, 24, 31, 47, 66, 88, 100]
    },
    50: {
        "< 3:1": [0, 7, 8, 9, 12, 15, 24, 37, 53, 72, 96, 100],
        "3:1 à 10:1": [0, 7, 8, 10, 14, 18, 28, 41, 57, 77, 100],
        "> 10:1": [0, 8, 10, 15, 21, 28, 41, 57, 76, 97, 100]
    },
    60: {
        "< 3:1": [0, 7, 8, 9, 11, 14, 21, 32, 45, 62, 81, 100],
        "3:1 à 10:1": [0, 7, 8, 10, 13, 16, 25, 36, 49, 66, 85, 100],
        "> 10:1": [0, 8, 10, 14, 20, 25, 38, 51, 67, 85, 100]
    },
    80: {
        "< 3:1": [0, 7, 7, 8, 10, 12, 18, 26, 36, 48, 62, 79, 98, 100],
        "3:1 à 10:1": [0, 7, 8, 9, 11, 14, 21, 29, 40, 52, 67, 84, 100],
        "> 10:1": [0, 8, 9, 13, 17, 22, 32, 44, 56, 70, 86, 100]
    },
    100: {
        "< 3:1": [0, 7, 7, 8, 9, 11, 16, 22, 30, 40, 51, 65, 80, 97, 100],
        "3:1 à 10:1": [0, 7, 8, 9, 11, 13, 18, 25, 34, 44, 56, 69, 84, 100],
        "> 10:1": [0, 7, 9, 12, 16, 20, 29, 39, 49, 61, 74, 89, 100]
    },
    150: {
        "< 3:1": [0, 7, 7, 8, 8, 10, 14, 18, 24, 31, 39, 48, 58, 69, 81, 94, 100],
        "3:1 à 10:1": [0, 7, 7, 8, 9, 11, 15, 20, 26, 33, 41, 50, 60, 71, 82, 95, 100],
        "> 10:1": [0, 7, 8, 10, 13, 16, 23, 31, 39, 47, 56, 66, 76, 87, 99, 100]
    },
    250: {
        "< 3:1": [0, 7, 7, 7, 8, 9, 10, 13, 16, 20, 25, 30, 36, 43, 51, 59, 68, 87, 100],
        "3:1 à 10:1": [0, 7, 7, 8, 9, 10, 12, 15, 19, 24, 28, 34, 40, 47, 55, 63, 72, 92, 100],
        "> 10:1": [0, 7, 8, 9, 11, 14, 19, 24, 30, 36, 43, 50, 57, 65, 73, 82, 92, 100]
    },
    350: {
        "< 3:1": [0, 7, 7, 7, 8, 8, 9, 11, 14, 16, 20, 24, 28, 33, 38, 44, 50, 64, 81, 99, 100],
        "3:1 à 10:1": [0, 7, 7, 8, 8, 9, 11, 13, 16, 19, 23, 27, 32, 37, 42, 48, 55, 69, 85, 100],
        "> 10:1": [0, 7, 8, 9, 10, 12, 16, 21, 25, 30, 36, 41, 47, 53, 59, 66, 73, 88, 100]
    },
    500: {
        "< 3:1": [0, 7, 7, 7, 7, 8, 9, 10, 12, 14, 16, 19, 22, 25, 29, 33, 37, 47, 59, 71, 100],
        "3:1 à 10:1": [0, 7, 7, 7, 8, 8, 10, 12, 14, 16, 19, 22, 25, 29, 33, 37, 41, 52, 63, 76, 100],
        "> 10:1": [0, 7, 7, 8, 9, 11, 14, 18, 22, 25, 30, 34, 38, 43, 48, 53, 58, 70, 82, 96, 100]
    },
    1000: {
        "< 3:1": [0, 7, 7, 7, 7, 7, 8, 9, 9, 10, 12, 13, 14, 16, 18, 20, 22, 27, 33, 39, 58, 82, 100],
        "3:1 à 10:1": [0, 7, 7, 7, 7, 8, 9, 10, 11, 12, 14, 15, 17, 19, 21, 23, 26, 31, 37, 43, 63, 86, 100],
        "> 10:1": [0, 7, 7, 8, 8, 9, 11, 13, 16, 19, 21, 24, 27, 30, 33, 36, 39, 46, 53, 60, 82, 100]
    },
    2000: {
        "< 3:1": [0, 7, 7, 7, 7, 7, 7, 8, 8, 9, 9, 10, 11, 12, 13, 14, 15, 17, 20, 23, 33, 44, 58, 74, 93, 100],
        "3:1 à 10:1": [0, 7, 7, 7, 7, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 20, 23, 27, 37, 49, 63, 79, 97, 100],
        "> 10:1": [0, 7, 7, 7, 8, 8, 9, 11, 12, 14, 16, 18, 19, 21, 23, 25, 27, 32, 36, 40, 53, 66, 82, 99, 100]
    }
};

// Tableau avec gicleurs pour groupes A, B3, C, D et F3
const tableauGroupesABCDF3AvecGicleurs = {
    10: [0, 16, 20, 36, 58, 92, 100],
    15: [0, 14, 18, 28, 44, 66, 100],
    20: [0, 14, 18, 24, 36, 52, 98, 100],
    25: [0, 14, 16, 22, 32, 46, 82, 100],
    30: [0, 14, 16, 22, 30, 40, 70, 100],
    40: [0, 14, 16, 20, 26, 34, 56, 88, 100],
    50: [0, 14, 16, 18, 24, 30, 48, 74, 96, 100],
    60: [0, 14, 16, 18, 22, 28, 42, 64, 86, 100],
    80: [0, 14, 14, 16, 20, 24, 36, 52, 72, 96, 100],
    100: [0, 14, 14, 16, 18, 22, 32, 44, 60, 80, 100],
    150: [0, 14, 14, 16, 16, 20, 28, 36, 48, 62, 78, 96, 100],
    200: [0, 14, 14, 14, 16, 18, 24, 32, 40, 50, 62, 76, 92, 100]
};

// Tableau des gicleurs pour groupes E, F1, F2
const tableauGroupesEF1F2AvecGicleurs = {
    10: [0, 8, 10, 18, 30, 46, 92, 100],
    15: [0, 8, 10, 14, 22, 32, 64, 100],
    20: [0, 8, 8, 12, 18, 26, 50, 82, 100],
    25: [0, 8, 8, 10, 16, 22, 36, 58, 86, 100],
    30: [0, 8, 8, 10, 14, 18, 30, 46, 68, 94, 100],
    40: [0, 8, 8, 12, 16, 20, 32, 48, 68, 94, 100],
    50: [0, 8, 8, 10, 14, 18, 28, 40, 58, 76, 100],
    60: [0, 8, 8, 10, 12, 16, 24, 36, 50, 66, 86, 100],
    80: [0, 8, 8, 10, 12, 14, 20, 30, 40, 52, 66, 84, 100],
    100: [0, 8, 8, 8, 10, 12, 18, 26, 34, 44, 56, 70, 84, 100],
    150: [0, 8, 8, 8, 10, 12, 16, 20, 26, 32, 40, 50, 60, 72, 84, 98, 100],
    200: [0, 8, 8, 8, 8, 10, 14, 18, 22, 28, 34, 42,50, 60, 68, 80, 92, 100]
};

const limitingDistancesNoSprinklers = [0, 1.2, 1.5, 2.0, 2.5, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 18, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70];
const limitingDistancesWithSprinklersABCDF3 = [0, 1.2, 1.5, 2.0, 2.5, 3, 4, 5, 6, 7, 8, 9];
const limitingDistancesWithSprinklersEF1F2 = [0, 1.2, 1.5, 2.0, 2.5, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const facadeSurfaces = [10, 15, 20, 25, 30, 40, 50, 60, 80, 100, 150, 250, 350, 500, 1000, 2000];
const facadeSurfacesWithSprinklersABCDF3 = [10, 15, 20, 25, 30, 40, 50, 60, 80, 100, 150, 250, 350, 500, 1000, 2000];
const facadeSurfacesWithSprinklersEF1F2 = [10, 15, 20, 25, 30, 40, 50, 60, 80, 100, 150, 200];

// Données du Tableau 9.10.14.4-A
const tableau91014 = {
    "habitation": {
        surfaces: {
            30: [0, 7, 9, 12, 39, 88, 100, 100, 100, 100, 100, 100, 100],
            40: [0, 7, 8, 11, 32, 69, 100, 100, 100, 100, 100, 100, 100],
            50: [0, 7, 8, 10, 28, 57, 100, 100, 100, 100, 100, 100, 100],
            100: [0, 7, 8, 9, 18, 34, 56, 84, 100, 100, 100, 100, 100],
            ">100": [0, 7, 7, 8, 12, 19, 28, 40, 55, 92, 100, 100, 100]
        },
        distances: [0, 1.2, 1.5, 2.0, 4.0, 6.0, 8.0, 10.0, 12.0, 16.0, 20.0, 25.0, 30.0]
    },
    "commercial": {
        surfaces: {
            30: [0, 4, 4, 6, 20, 44, 80, 100, 100, 100, 100, 100, 100],
            40: [0, 4, 4, 6, 16, 34, 61, 97, 100, 100, 100, 100, 100],
            50: [0, 4, 4, 5, 14, 29, 50, 79, 100, 100, 100, 100, 100],
            100: [0, 4, 4, 4, 9, 17, 28, 42, 60, 100, 100, 100, 100],
            ">100": [0, 4, 4, 4, 6, 10, 14, 20, 27, 46, 70, 100, 100]
        },
        distances: [0, 1.2, 1.5, 2.0, 4.0, 6.0, 8.0, 10.0, 12.0, 16.0, 20.0, 25.0, 30.0]
    }
};

// Données du Tableau 9.10.15.4
const tableau91015 = {
    surfaces: {
        30: [0, 7, 9, 12, 39, 88, 100, 100, 100, 100, 100, 100, 100],
        40: [0, 7, 8, 11, 32, 69, 100, 100, 100, 100, 100, 100, 100],
        50: [0, 7, 8, 10, 28, 57, 100, 100, 100, 100, 100, 100, 100],
        100: [0, 7, 8, 9, 18, 34, 56, 84, 100, 100, 100, 100, 100],
        "Plus de 100": [0, 7, 7, 8, 12, 19, 28, 40, 55, 92, 100, 100, 100]
    },
    distances: [0, 1.2, 1.5, 2.0, 4.0, 6.0, 8.0, 10.0, 12.0, 16.0, 20.0, 25.0, 30.0]
};

// Tableau 3.2.3.1.-C - Usages des groupes E, F1 et F2 - Sans gicleurs
const tableauGroupesEF1F2 = {
    10: {
        "< 3:1": [0, 4, 5, 9, 15, 23, 46, 77, 100],
        "3:1 à 10:1": [0, 4, 6, 10, 17, 25, 48, 79, 100],
        "> 10:1": [0, 5, 9, 16, 24, 34, 58, 91, 100]
    },
    15: {
        "< 3:1": [0, 4, 5, 7, 11, 16, 32, 53, 79, 100],
        "3:1 à 10:1": [0, 4, 5, 8, 13, 18, 34, 55, 82, 100],
        "> 10:1": [0, 5, 8, 13, 19, 26, 43, 66, 93, 100]
    },
    20: {
        "< 3:1": [0, 4, 4, 6, 9, 13, 25, 40, 61, 85, 100],
        "3:1 à 10:1": [0, 4, 5, 7, 11, 15, 27, 43, 63, 87, 100],
        "> 10:1": [0, 5, 7, 11, 17, 22, 36, 53, 74, 99, 100]
    },
    25: {
        "< 3:1": [0, 4, 4, 5, 8, 11, 21, 33, 50, 70, 93, 100],
        "3:1 à 10:1": [0, 4, 4, 6, 9, 13, 23, 36, 54, 75, 97, 100],
        "> 10:1": [0, 4, 6, 9, 14, 19, 31, 45, 64, 86, 100]
    },
    30: {
        "< 3:1": [0, 4, 4, 5, 7, 10, 18, 28, 42, 59, 78, 100],
        "3:1 à 10:1": [0, 4, 4, 5, 8, 11, 20, 30, 45, 63, 83, 100],
        "> 10:1": [0, 4, 5, 8, 12, 17, 27, 39, 55, 74, 95, 100]
    },
    40: {
        "< 3:1": [0, 4, 4, 4, 6, 8, 15, 23, 34, 47, 62, 80, 100],
        "3:1 à 10:1": [0, 4, 4, 5, 7, 9, 16, 25, 36, 50, 66, 84, 100],
        "> 10:1": [0, 4, 5, 7, 10, 14, 23, 33, 46, 62, 79, 99, 100]
    },
    50: {
        "< 3:1": [0, 4, 4, 4, 5, 7, 13, 20, 29, 39, 52, 66, 83, 100],
        "3:1 à 10:1": [0, 4, 4, 4, 6, 8, 14, 21, 30, 42, 55, 70, 87, 100],
        "> 10:1": [0, 4, 4, 6, 9, 12, 20, 28, 39, 52, 67, 84, 100]
    },
    60: {
        "< 3:1": [0, 4, 4, 4, 5, 6, 11, 17, 25, 34, 44, 56, 70, 86, 100],
        "3:1 à 10:1": [0, 4, 4, 4, 5, 7, 12, 18, 26, 36, 47, 60, 74, 90, 100],
        "> 10:1": [0, 4, 4, 5, 8, 11, 17, 25, 33, 44, 56, 71, 87, 100]
    },
    80: {
        "< 3:1": [0, 4, 4, 4, 4, 5, 9, 14, 20, 27, 35, 44, 54, 65, 77, 91, 100],
        "3:1 à 10:1": [0, 4, 4, 4, 5, 6, 10, 15, 21, 28, 36, 46, 56, 68, 80, 94, 100],
        "> 10:1": [0, 4, 4, 4, 6, 9, 14, 20, 27, 35, 45, 56, 68, 81, 96, 100]
    },
    100: {
        "< 3:1": [0, 4, 4, 4, 4, 5, 8, 12, 17, 23, 29, 37, 45, 54, 64, 75, 87, 100],
        "3:1 à 10:1": [0, 4, 4, 4, 4, 5, 9, 13, 18, 24, 31, 39, 47, 57, 67, 78, 90, 100],
        "> 10:1": [0, 4, 4, 4, 5, 7, 12, 17, 23, 30, 38, 47, 57, 68, 79, 92, 100]
    },
    150: {
        "< 3:1": [0, 4, 4, 4, 4, 4, 6, 9, 13, 17, 22, 27, 33, 40, 47, 55, 64, 82, 100],
        "3:1 à 10:1": [0, 4, 4, 4, 4, 5, 7, 10, 14, 18, 23, 29, 35, 42, 49, 57, 66, 84, 100],
        "> 10:1": [0, 4, 4, 4, 4, 6, 9, 13, 17, 22, 28, 35, 42, 50, 58, 67, 77, 97, 100]
    },
    200: {
        "< 3:1": [0, 4, 4, 4, 4, 4, 5, 8, 11, 14, 18, 22, 27, 32, 38, 44, 51, 65, 82, 100],
        "3:1 à 10:1": [0, 4, 4, 4, 4, 4, 6, 8, 11, 15, 19, 24, 29, 34, 40, 46, 53, 67, 84, 100],
        "> 10:1": [0, 4, 4, 4, 4, 5, 7, 10, 14, 18, 23, 28, 34, 40, 47, 54, 62, 78, 97, 100]
    }
};

// Fonctions utilitaires
function imperialToMetric(value) {
    return value * 0.3048;
}

function metricToImperial(value) {
    const feet = Math.floor(value / 0.3048);
    const inches = Math.round((value / 0.3048 - feet) * 12);
    return `${feet}'-${inches}"`;
}

function determinerRapportLH(length, height) {
    const rapport = length / height;
    if (rapport < 3) return "< 3:1";
    if (rapport <= 10) return "3:1 à 10:1";
    return "> 10:1";
}

function trouverValeurEncadrantes(valeur, tableau) {
    let inferieure, superieure;
    let extrapolation = false;
    let valeurExacte = false;
    
    // Si la valeur est exactement dans le tableau
    if (tableau.includes(valeur)) {
        valeurExacte = true;
        inferieure = superieure = valeur;
        return { inferieure, superieure, extrapolation, valeurExacte };
    }
    
    // Si la valeur est inférieure à la première valeur du tableau
    if (valeur < tableau[0]) {
        extrapolation = true;
        inferieure = 0;
        superieure = tableau[0];
        return { inferieure, superieure, extrapolation, valeurExacte };
    }
    
    // Si la valeur est supérieure à la dernière valeur du tableau
    if (valeur > tableau[tableau.length - 1]) {
        inferieure = tableau[tableau.length - 1];
        superieure = valeur;
        return { inferieure, superieure, extrapolation, valeurExacte };
    }
    
    // Trouver les valeurs encadrantes dans le tableau
    for (let i = 0; i < tableau.length - 1; i++) {
        if (valeur > tableau[i] && valeur < tableau[i + 1]) {
            inferieure = tableau[i];
            superieure = tableau[i + 1];
            break;
        }
    }
    
    return { inferieure, superieure, extrapolation, valeurExacte };
}

function extrapolerPourcentage(p1, p2, d1, d2) {
    return p1 + ((d2 - d1) / (d1 - 0)) * (p2 - p1);
}

function extrapolerPourcentageSurface(p1, p2, s1, s2) {
    return p1 + ((s2 - s1) / (s1 - 0)) * (p2 - p1);
}

// Fonction pour l'extrapolation en cas de FDR inférieure à 30 m² avec DL >= DL minimale non-nulle (pour 9.10.x)
function extrapolerFDRPetiteDLNormale910x(tableau, distanceLimitative, surfaceFacade, avecGicleurs, avecMajoration) {
    const distances = tableau.distances;
    const surfacesDisponibles = Object.keys(tableau.surfaces).filter(s => s !== ">100" && s !== "Plus de 100").map(Number);
    
    // Trouver les distances encadrantes
    const distancesEncadrantes = trouverValeurEncadrantes(distanceLimitative, distances);
    const distanceInferieure = distancesEncadrantes.inferieure;
    const distanceSuperieure = distancesEncadrantes.superieure;
    const distanceInferieureIndex = distances.indexOf(distanceInferieure);
    const distanceSuperieureIndex = distances.indexOf(distanceSuperieure);
    
    // Étape 1: Interpolation selon la 1ère FDR disponible
    let pourcentageEtape1;
    
    if (distanceInferieure === distanceSuperieure) {
        pourcentageEtape1 = tableau.surfaces[surfacesDisponibles[0].toString()][distanceInferieureIndex];
    } else {
        const pourcentageDistInf = tableau.surfaces[surfacesDisponibles[0].toString()][distanceInferieureIndex];
        const pourcentageDistSup = tableau.surfaces[surfacesDisponibles[0].toString()][distanceSuperieureIndex];
        
        pourcentageEtape1 = pourcentageDistInf + 
            ((distanceLimitative - distanceInferieure) / (distanceSuperieure - distanceInferieure)) * 
            (pourcentageDistSup - pourcentageDistInf);
    }
    
    // Étape 2: Interpolation selon la 2ème FDR disponible
    let pourcentageEtape2;
    
    if (distanceInferieure === distanceSuperieure) {
        pourcentageEtape2 = tableau.surfaces[surfacesDisponibles[1].toString()][distanceInferieureIndex];
    } else {
        const pourcentageDistInf = tableau.surfaces[surfacesDisponibles[1].toString()][distanceInferieureIndex];
        const pourcentageDistSup = tableau.surfaces[surfacesDisponibles[1].toString()][distanceSuperieureIndex];
        
        pourcentageEtape2 = pourcentageDistInf + 
            ((distanceLimitative - distanceInferieure) / (distanceSuperieure - distanceInferieure)) * 
            (pourcentageDistSup - pourcentageDistInf);
    }
    
    // Étape 3: Extrapolation selon les résultats obtenus des deux interpolations précédentes
    let pourcentageFinal = pourcentageEtape2 + 
        ((surfaceFacade - surfacesDisponibles[1]) / (surfacesDisponibles[0] - surfacesDisponibles[1])) * 
        (pourcentageEtape1 - pourcentageEtape2);
    
    // Appliquer la majoration si nécessaire
    if (avecMajoration || avecGicleurs) {
        pourcentageFinal = Math.min(100, pourcentageFinal * 2);
    }
    
    return Math.max(0, Math.min(100, pourcentageFinal));
}

// Fonction CORRIGÉE pour le calcul selon 9.10.14.4 ou 9.10.15.4
function calculerPourcentage910x(tableau, distanceLimitative, surfaceFacade, avecGicleurs, avecMajoration) {
    const distances = tableau.distances;
    
    // Vérifier si la distance limitative est supérieure à la plage du tableau
    if (distanceLimitative > distances[distances.length - 1]) {
        return 100; // 100% de baies non protégées autorisées
    }
    
    // Déterminer les surfaces disponibles dans le tableau (exclure les clés spéciales)
    const surfacesDisponibles = Object.keys(tableau.surfaces).filter(s => s !== ">100" && s !== "Plus de 100").map(Number);
    
    // Cas spécial: surface de façade < surface minimale mais DL >= DL minimale non-nulle
    const premiereDLNonNulle = distances.find(d => d > 0);
    if (surfaceFacade < surfacesDisponibles[0] && distanceLimitative >= premiereDLNonNulle) {
        return extrapolerFDRPetiteDLNormale910x(
            tableau, 
            distanceLimitative, 
            surfaceFacade, 
            avecGicleurs, 
            avecMajoration
        );
    }
    
    // Trouver les distances encadrantes
    const distancesEncadrantes = trouverValeurEncadrantes(distanceLimitative, distances);
    const distanceInferieure = distancesEncadrantes.inferieure;
    const distanceSuperieure = distancesEncadrantes.superieure;
    const distanceInferieureIndex = distances.indexOf(distanceInferieure);
    const distanceSuperieureIndex = distances.indexOf(distanceSuperieure);
    const extrapolationDistance = distancesEncadrantes.extrapolation;
    const distanceExacte = distancesEncadrantes.valeurExacte;
    
    // Trouver les surfaces encadrantes
    let surfaceInferieure, surfaceSuperieure;
    let keyInf, keySup;
    
    if (surfaceFacade <= surfacesDisponibles[0]) {
        // Cas spécial: extrapolation pour petites surfaces (< 30m²)
        if (surfaceFacade < surfacesDisponibles[0]) {
            surfaceInferieure = surfaceFacade;
            surfaceSuperieure = surfacesDisponibles[0];
            keyInf = "extrapolation";
            keySup = surfacesDisponibles[0].toString();
        } else {
            surfaceInferieure = surfaceSuperieure = surfacesDisponibles[0];
            keyInf = keySup = surfacesDisponibles[0].toString();
        }
    } else if (surfaceFacade > surfacesDisponibles[surfacesDisponibles.length - 1]) {
        // CORRECTION: Pour les surfaces > 100m², utiliser directement la ligne ">100" ou "Plus de 100"
        surfaceInferieure = surfaceSuperieure = surfaceFacade; // Pas d'interpolation
        keyInf = keySup = Object.keys(tableau.surfaces).find(k => k === ">100" || k === "Plus de 100");
    } else {
        for (let i = 0; i < surfacesDisponibles.length - 1; i++) {
            if (surfaceFacade > surfacesDisponibles[i] && surfaceFacade <= surfacesDisponibles[i + 1]) {
                surfaceInferieure = surfacesDisponibles[i];
                surfaceSuperieure = surfacesDisponibles[i + 1];
                keyInf = surfaceInferieure.toString();
                keySup = surfaceSuperieure.toString();
                break;
            }
        }
    }
    
    // Cas spécial: extrapolation pour distance limitative entre 0 et 1.2m
    if (extrapolationDistance) {
        let pourcentageDistance0 = 0; // Toujours 0% quand DL=0
        let pourcentageDistanceMin;
        
        // Vérifier si on a aussi une extrapolation de surface
        if (keyInf === "extrapolation") {
            // Double extrapolation (distance et surface)
            
            // D'abord déterminer le pourcentage pour la surface minimale du tableau à la distance minimale
            const pourcentageDistMinSurfMin = tableau.surfaces[keySup][distanceSuperieureIndex];
            const pourcentageDistMinSurfSupMin = tableau.surfaces[Object.keys(tableau.surfaces)[1]][distanceSuperieureIndex];
            
            // Extrapolation pour surface plus petite (avec la plus petite distance non-nulle)
            pourcentageDistanceMin = extrapolerPourcentageSurface(
                pourcentageDistMinSurfMin,
                pourcentageDistMinSurfSupMin,
                surfaceSuperieure,
                surfaceFacade
            );
        } else if (keyInf === keySup) {
            // Pas d'interpolation de surface (surface dans le tableau ou >100)
            pourcentageDistanceMin = tableau.surfaces[keyInf][distanceSuperieureIndex];
        } else {
            // Extrapolation de distance et interpolation de surface
            const pourcentageDistMinSurfInf = tableau.surfaces[keyInf][distanceSuperieureIndex];
            const pourcentageDistMinSurfSup = tableau.surfaces[keySup][distanceSuperieureIndex];
            
            // Interpolation entre les surfaces à la distance minimale
            pourcentageDistanceMin = pourcentageDistMinSurfSup + 
                ((surfaceFacade - surfaceInferieure) / (surfaceSuperieure - surfaceInferieure)) * 
                (pourcentageDistMinSurfInf - pourcentageDistMinSurfSup);
        }
        
        // Extrapolation entre 0 et la première distance non-nulle
        let pourcentageFinal = extrapolerPourcentage(
            pourcentageDistance0,
            pourcentageDistanceMin,
            distanceSuperieure,
            distanceExacte
        );
        
        // Appliquer la majoration si nécessaire
        if (avecMajoration || avecGicleurs) {
            pourcentageFinal = Math.min(100, pourcentageFinal * 2);
        }
        
        return Math.max(0, Math.min(100, pourcentageFinal));
    }
    
    // Cas spécial: extrapolation pour petites surfaces (< 30m²)
    if (keyInf === "extrapolation") {
        const pourcentageDistInfSurfMin = tableau.surfaces[keySup][distanceInferieureIndex];
        const pourcentageDistInfSurfSupMin = tableau.surfaces[Object.keys(tableau.surfaces)[1]][distanceInferieureIndex];
        
        // Extrapolation pour surface plus petite
        let pourcentageFinal = extrapolerPourcentageSurface(
            pourcentageDistInfSurfMin,
            pourcentageDistInfSurfSupMin,
            surfaceSuperieure,
            surfaceFacade
        );
        
        // Si on a deux distances différentes
        if (distanceInferieure !== distanceSuperieure) {
            const pourcentageDistSupSurfMin = tableau.surfaces[keySup][distanceSuperieureIndex];
            const pourcentageDistSupSurfSupMin = tableau.surfaces[Object.keys(tableau.surfaces)[1]][distanceSuperieureIndex];
            
            const pourcentageDistSup = extrapolerPourcentageSurface(
                pourcentageDistSupSurfMin,
                pourcentageDistSupSurfSupMin,
                surfaceSuperieure,
                surfaceFacade
            );
            
            // Interpolation entre les distances
            pourcentageFinal = pourcentageFinal + 
                ((distanceLimitative - distanceInferieure) / (distanceSuperieure - distanceInferieure)) * 
                (pourcentageDistSup - pourcentageFinal);
        }
        
        // Appliquer la majoration si nécessaire
        if (avecMajoration || avecGicleurs) {
            pourcentageFinal = Math.min(100, pourcentageFinal * 2);
        }
        
        return Math.max(0, Math.min(100, pourcentageFinal));
    }
    
    // Cas normal: interpolation/lecture directe
    let pourcentageFinal;
    
    if (keyInf === keySup) {
        // Cas où la surface correspond exactement à une ligne du tableau ou >100
        if (distanceExacte) {
            pourcentageFinal = tableau.surfaces[keyInf][distanceInferieureIndex];
        } else {
            const pourcentageDistInf = tableau.surfaces[keyInf][distanceInferieureIndex];
            const pourcentageDistSup = tableau.surfaces[keyInf][distanceSuperieureIndex];
            
            pourcentageFinal = pourcentageDistInf + 
                ((distanceLimitative - distanceInferieure) / (distanceSuperieure - distanceInferieure)) * 
                (pourcentageDistSup - pourcentageDistInf);
        }
    } else {
        // Interpolation normale entre deux surfaces du tableau
        
        // ÉTAPE 1: Interpolation selon la DL inférieure
        const pourcentageDistInfSurfInf = tableau.surfaces[keyInf][distanceInferieureIndex];
        const pourcentageDistInfSurfSup = tableau.surfaces[keySup][distanceInferieureIndex];
        
        const pourcentageEtape1 = pourcentageDistInfSurfSup + 
            ((surfaceFacade - surfaceInferieure) / (surfaceSuperieure - surfaceInferieure)) * 
            (pourcentageDistInfSurfInf - pourcentageDistInfSurfSup);
        
        // ÉTAPE 2: Interpolation selon la DL supérieure
        const pourcentageDistSupSurfInf = tableau.surfaces[keyInf][distanceSuperieureIndex];
        const pourcentageDistSupSurfSup = tableau.surfaces[keySup][distanceSuperieureIndex];
        
        const pourcentageEtape2 = pourcentageDistSupSurfSup + 
            ((surfaceFacade - surfaceInferieure) / (surfaceSuperieure - surfaceInferieure)) * 
            (pourcentageDistSupSurfInf - pourcentageDistSupSurfSup);
        
        // ÉTAPE 3: Interpolation finale
        if (distanceExacte) {
            pourcentageFinal = pourcentageEtape1;
        } else {
            pourcentageFinal = pourcentageEtape1 + 
                ((distanceLimitative - distanceInferieure) / (distanceSuperieure - distanceInferieure)) * 
                (pourcentageEtape2 - pourcentageEtape1);
        }
    }
    
    // Appliquer la majoration si nécessaire (briques de verre, verre armé ou gicleurs)
    if (avecMajoration || avecGicleurs) {
        pourcentageFinal = Math.min(100, pourcentageFinal * 2);
    }
    
    // Limiter le pourcentage final entre 0 et 100
    return Math.max(0, Math.min(100, pourcentageFinal));
}

// Fonction pour calculer le pourcentage de baies non protégées selon CNB
function calculerPourcentageCNB(usage, distanceLimitative, surfaceFacade, length, height, avecGicleurs, glassBrick) {
    // Déterminer le rapport L/H
    const rapportLH = determinerRapportLH(length, height);
    
    // Calculer le pourcentage de base
    let pourcentage = interpolationCNB(
        usage, 
        distanceLimitative, 
        surfaceFacade, 
        rapportLH, 
        avecGicleurs
    );
    
    // Appliquer la majoration pour briques de verre/verre armé si nécessaire
    if (glassBrick) {
        pourcentage = Math.min(100, pourcentage * 2);
    }
    
    return pourcentage;
}

// Version spécifique pour 9.10.14 - utilise la fonction calculerPourcentage910x corrigée
function calculerPourcentage91014(usage, distanceLimitative, surfaceFacade, avecGicleurs, avecMajoration) {
    const tableau = {
        usages: usage,
        surfaces: tableau91014[usage].surfaces,
        distances: tableau91014[usage].distances
    };
    
    return calculerPourcentage910x(tableau, distanceLimitative, surfaceFacade, avecGicleurs, avecMajoration);
}

// Version spécifique pour 9.10.15 - utilise la fonction calculerPourcentage910x corrigée
function calculerPourcentage91015(distanceLimitative, surfaceFacade, avecGicleurs, avecMajoration) {
    return calculerPourcentage910x(tableau91015, distanceLimitative, surfaceFacade, avecGicleurs, avecMajoration);
}

function calculateCNB() {
    // Déterminer le système de mesure
    const isImperial = document.getElementById('measurementSystem').value === 'imperial';
    
    // Obtenir les valeurs des champs
    let facadeSurface, length, height, limitingDistance, proposedArea;
    
    if (isImperial) {
        facadeSurface = imperialToMetric(document.getElementById('surface_cnb_imperial').value);
        length = imperialToMetric(document.getElementById('length_cnb_imperial').value);
        height = imperialToMetric(document.getElementById('height_cnb_imperial').value);
        limitingDistance = imperialToMetric(document.getElementById('distance_cnb_imperial').value);
        proposedArea = imperialToMetric(document.getElementById('proposed_cnb_imperial').value);
    } else {
        facadeSurface = parseFloat(document.getElementById('surface_cnb').value);
        length = parseFloat(document.getElementById('length_cnb').value);
        height = parseFloat(document.getElementById('height_cnb').value);
        limitingDistance = parseFloat(document.getElementById('distance_cnb').value);
        proposedArea = parseFloat(document.getElementById('proposed_cnb').value);
    }
    
    const usage = document.getElementById('usage_cnb').value;
    const constructionType = document.getElementById('construction_type_cnb').value;
    const revetementType = document.getElementById('revetement_type_cnb').value;
    const sprinklersOption = document.getElementById('sprinklers_cnb').value;
    const glassBrick = document.getElementById('glass_brick_cnb').checked;
    const withSprinklers = sprinklersOption === "complete";
    
    // Validation des données
    if (!facadeSurface || !length || !height || !limitingDistance) {
        document.getElementById('cnb-result').innerHTML = 
            '<div style="color: red;">Veuillez remplir tous les champs obligatoires.</div>';
        return;
    }
    
    // Calculer le pourcentage autorisé
    const allowedPercentage = calculerPourcentageCNB(
        usage, 
        limitingDistance, 
        facadeSurface, 
        length, 
        height, 
        withSprinklers, 
        glassBrick
    );
    
    // Calculer la surface autorisée
    const allowedArea = (allowedPercentage / 100) * facadeSurface;
    
    // Déterminer si c'est conforme
    let conformity = "";
    if (proposedArea) {
        if (proposedArea <= allowedArea) {
            conformity = `<div style="color: green; font-weight: bold;">✓ CONFORME</div>`;
        } else {
            conformity = `<div style="color: red; font-weight: bold;">✗ NON CONFORME</div>`;
        }
    }
    
    // Afficher les résultats
    const units = isImperial ? " pi²" : " m²";
    const distanceUnits = isImperial ? " pi" : " m";
    
    document.getElementById('cnb-result').innerHTML = `
        <div class="section-title">Résultats selon 3.2.3.</div>
        <strong>Pourcentage de baies non protégées autorisé :</strong> ${allowedPercentage.toFixed(2)}%<br>
        <strong>Surface de baies non protégées autorisée :</strong> ${allowedArea.toFixed(2)}${units}<br>
        ${proposedArea ? `<strong>Surface proposée :</strong> ${proposedArea.toFixed(2)}${units}<br>` : ''}
        ${conformity}
    `;
}

function calculate91014() {
    // Déterminer le système de mesure
    const isImperial = document.getElementById('measurementSystem').value === 'imperial';
    
    // Obtenir les valeurs des champs
    let facadeSurface, limitingDistance, proposedArea;
    
    if (isImperial) {
        facadeSurface = imperialToMetric(document.getElementById('surface_91014_imperial').value);
        limitingDistance = imperialToMetric(document.getElementById('distance_91014_imperial').value);
        proposedArea = imperialToMetric(document.getElementById('proposed_91014_imperial').value);
    } else {
        facadeSurface = parseFloat(document.getElementById('surface_91014').value);
        limitingDistance = parseFloat(document.getElementById('distance_91014').value);
        proposedArea = parseFloat(document.getElementById('proposed_91014').value);
    }
    
    const usage = document.getElementById('usage_91014').value;
    const sprinklersOption = document.getElementById('sprinklers_91014').value;
    const glassBrick = document.getElementById('glass_brick_91014').checked;
    const withSprinklers = sprinklersOption === "complete";
    
    // Validation des données
    if (!facadeSurface || !limitingDistance) {
        document.getElementById('method91014-result').innerHTML = 
            '<div style="color: red;">Veuillez remplir tous les champs obligatoires.</div>';
        return;
    }
    
    // Calculer le pourcentage autorisé
    const allowedPercentage = calculerPourcentage91014(
        usage, 
        limitingDistance, 
        facadeSurface, 
        withSprinklers, 
        glassBrick
    );
    
    // Calculer la surface autorisée
    const allowedArea = (allowedPercentage / 100) * facadeSurface;
    
    // Déterminer si c'est conforme
    let conformity = "";
    if (proposedArea) {
        if (proposedArea <= allowedArea) {
            conformity = `<div style="color: green; font-weight: bold;">✓ CONFORME</div>`;
        } else {
            conformity = `<div style="color: red; font-weight: bold;">✗ NON CONFORME</div>`;
        }
    }
    
    // Afficher les résultats
    const units = isImperial ? " pi²" : " m²";
    
    document.getElementById('method91014-result').innerHTML = `
        <div class="section-title">Résultats selon 9.10.14.</div>
        <strong>Pourcentage de baies non protégées autorisé :</strong> ${allowedPercentage.toFixed(2)}%<br>
        <strong>Surface de baies non protégées autorisée :</strong> ${allowedArea.toFixed(2)}${units}<br>
        ${proposedArea ? `<strong>Surface proposée :</strong> ${proposedArea.toFixed(2)}${units}<br>` : ''}
        ${conformity}
    `;
}

function calculate91015() {
    // Déterminer le système de mesure
    const isImperial = document.getElementById('measurementSystem').value === 'imperial';
    
    // Obtenir les valeurs des champs
    let facadeSurface, limitingDistance, proposedArea;
    
    if (isImperial) {
        facadeSurface = imperialToMetric(document.getElementById('surface_91015_imperial').value);
        limitingDistance = imperialToMetric(document.getElementById('distance_91015_imperial').value);
        proposedArea = imperialToMetric(document.getElementById('proposed_91015_imperial').value);
    } else {
        facadeSurface = parseFloat(document.getElementById('surface_91015').value);
        limitingDistance = parseFloat(document.getElementById('distance_91015').value);
        proposedArea = parseFloat(document.getElementById('proposed_91015').value);
    }
    
    const sprinklersOption = document.getElementById('sprinklers_91015').value;
    const glassBrick = document.getElementById('glass_brick_91015').checked;
    const withSprinklers = sprinklersOption === "complete";
    
    // Validation des données
    if (!facadeSurface || !limitingDistance) {
        document.getElementById('method91015-result').innerHTML = 
            '<div style="color: red;">Veuillez remplir tous les champs obligatoires.</div>';
        return;
    }
    
    // Calculer le pourcentage autorisé
    const allowedPercentage = calculerPourcentage91015(
        limitingDistance, 
        facadeSurface, 
        withSprinklers, 
        glassBrick
    );
    
    // Calculer la surface autorisée
    const allowedArea = (allowedPercentage / 100) * facadeSurface;
    
    // Déterminer si c'est conforme
    let conformity = "";
    if (proposedArea) {
        if (proposedArea <= allowedArea) {
            conformity = `<div style="color: green; font-weight: bold;">✓ CONFORME</div>`;
        } else {
            conformity = `<div style="color: red; font-weight: bold;">✗ NON CONFORME</div>`;
        }
    }
    
    // Afficher les résultats
    const units = isImperial ? " pi²" : " m²";
    
    document.getElementById('method91015-result').innerHTML = `
        <div class="section-title">Résultats selon 9.10.15.</div>
        <strong>Pourcentage de baies vitrées autorisé :</strong> ${allowedPercentage.toFixed(2)}%<br>
        <strong>Surface de baies vitrées autorisée :</strong> ${allowedArea.toFixed(2)}${units}<br>
        ${proposedArea ? `<strong>Surface proposée :</strong> ${proposedArea.toFixed(2)}${units}<br>` : ''}
        ${conformity}
    `;
}

// Fonction d'interpolation principale pour CNB (inchangée)
function interpolationCNB(usage, distanceLimitative, surfaceFacade, rapportLH, avecGicleurs) {
    let tableauUtilise;
    let distancesUtilisees;
    let surfacesUtilisees;
    
    // Déterminer le tableau à utiliser
    if (avecGicleurs) {
        if (usage === "groupes_A_B3_C_D_F3") {
            tableauUtilise = tableauGroupesABCDF3AvecGicleurs;
            distancesUtilisees = limitingDistancesWithSprinklersABCDF3;
            surfacesUtilisees = facadeSurfacesWithSprinklersABCDF3;
        } else {
            tableauUtilise = tableauGroupesEF1F2AvecGicleurs;
            distancesUtilisees = limitingDistancesWithSprinklersEF1F2;
            surfacesUtilisees = facadeSurfacesWithSprinklersEF1F2;
        }
    } else {
        if (usage === "groupes_A_B3_C_D_F3") {
            tableauUtilise = tableauGroupesABCDF3;
            distancesUtilisees = limitingDistancesNoSprinklers;
            surfacesUtilisees = facadeSurfaces;
        } else {
            tableauUtilise = tableauGroupesEF1F2;
            distancesUtilisees = limitingDistancesNoSprinklers;
            surfacesUtilisees = facadeSurfaces;
        }
    }
    
    // Trouver les surfaces encadrantes
    const surfacesEncadrantes = trouverValeurEncadrantes(surfaceFacade, surfacesUtilisees);
    const surfaceInferieure = surfacesEncadrantes.inferieure;
    const surfaceSuperieure = surfacesEncadrantes.superieure;
    
    // Trouver les distances encadrantes
    const distancesEncadrantes = trouverValeurEncadrantes(distanceLimitative, distancesUtilisees);
    const distanceInferieure = distancesEncadrantes.inferieure;
    const distanceSuperieure = distancesEncadrantes.superieure;
    
    // Obtenir les pourcentages aux points encadrants
    let p1, p2, p3, p4;
    
    if (avecGicleurs) {
        // Pour les tableaux avec gicleurs (simples)
        p1 = tableauUtilise[surfaceInferieure] ? tableauUtilise[surfaceInferieure][distancesUtilisees.indexOf(distanceInferieure)] : 0;
        p2 = tableauUtilise[surfaceInferieure] ? tableauUtilise[surfaceInferieure][distancesUtilisees.indexOf(distanceSuperieure)] : 0;
        p3 = tableauUtilise[surfaceSuperieure] ? tableauUtilise[surfaceSuperieure][distancesUtilisees.indexOf(distanceInferieure)] : 0;
        p4 = tableauUtilise[surfaceSuperieure] ? tableauUtilise[surfaceSuperieure][distancesUtilisees.indexOf(distanceSuperieure)] : 0;
    } else {
        // Pour les tableaux sans gicleurs (avec rapports L/H)
        p1 = tableauUtilise[surfaceInferieure] ? tableauUtilise[surfaceInferieure][rapportLH][distancesUtilisees.indexOf(distanceInferieure)] : 0;
        p2 = tableauUtilise[surfaceInferieure] ? tableauUtilise[surfaceInferieure][rapportLH][distancesUtilisees.indexOf(distanceSuperieure)] : 0;
        p3 = tableauUtilise[surfaceSuperieure] ? tableauUtilise[surfaceSuperieure][rapportLH][distancesUtilisees.indexOf(distanceInferieure)] : 0;
        p4 = tableauUtilise[surfaceSuperieure] ? tableauUtilise[surfaceSuperieure][rapportLH][distancesUtilisees.indexOf(distanceSuperieure)] : 0;
    }
    
    // Interpolation bilinéaire
    let resultat;
    
    if (surfaceInferieure === surfaceSuperieure && distanceInferieure === distanceSuperieure) {
        // Valeurs exactes dans le tableau
        resultat = p1;
    } else if (surfaceInferieure === surfaceSuperieure) {
        // Interpolation selon la distance seulement
        resultat = p1 + ((distanceLimitative - distanceInferieure) / (distanceSuperieure - distanceInferieure)) * (p2 - p1);
    } else if (distanceInferieure === distanceSuperieure) {
        // Interpolation selon la surface seulement
        resultat = p1 + ((surfaceFacade - surfaceInferieure) / (surfaceSuperieure - surfaceInferieure)) * (p3 - p1);
    } else {
        // Interpolation bilinéaire complète
        const i1 = p1 + ((distanceLimitative - distanceInferieure) / (distanceSuperieure - distanceInferieure)) * (p2 - p1);
        const i2 = p3 + ((distanceLimitative - distanceInferieure) / (distanceSuperieure - distanceInferieure)) * (p4 - p3);
        resultat = i1 + ((surfaceFacade - surfaceInferieure) / (surfaceSuperieure - surfaceInferieure)) * (i2 - i1);
    }
    
    return Math.max(0, Math.min(100, resultat));
}

// Le reste du code pour les fonctions utilitaires, gestion des onglets, etc. reste inchangé

function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

function toggleMeasurementSystem() {
    const system = document.getElementById('measurementSystem').value;
    const isImperial = (system === 'imperial');
    
    // Listes des champs métriques et impériaux
    const metricFields = document.querySelectorAll('.metric-input');
    const imperialFields = document.querySelectorAll('.imperial-input');
    const unitLabels = document.querySelectorAll('.unit-label');
    
    if (isImperial) {
        // Afficher les champs impériaux et masquer les métriques
        metricFields.forEach(field => field.style.display = 'none');
        imperialFields.forEach(field => field.style.display = 'block');
        unitLabels.forEach(label => {
            if (label.textContent.includes('m²')) {
                label.innerHTML = label.innerHTML.replace('m²', 'pi²');
            }
            if (label.textContent.includes(' m')) {
                label.innerHTML = label.innerHTML.replace(' m', ' pi');
            }
        });
    } else {
        // Afficher les champs métriques et masquer les impériaux
        metricFields.forEach(field => field.style.display = 'block');
        imperialFields.forEach(field => field.style.display = 'none');
        unitLabels.forEach(label => {
            if (label.textContent.includes('pi²')) {
                label.innerHTML = label.innerHTML.replace('pi²', 'm²');
            }
            if (label.textContent.includes(' pi')) {
                label.innerHTML = label.innerHTML.replace(' pi', ' m');
            }
        });
    }
}

function updateCalculatedFields(changedField) {
    // Identifier l'onglet en cours en analysant le nom du champ
    let tabSuffix = '';
    if (changedField.includes('_cnb')) {
        tabSuffix = '_cnb';
    } else if (changedField.includes('_91014')) {
        tabSuffix = '_91014';
    } else if (changedField.includes('_91015')) {
        tabSuffix = '_91015';
    }
    
    // Déterminer le système de mesure
    const isImperial = document.getElementById('measurementSystem').value === 'imperial';
    
    // Obtenir les références aux champs
    let surfaceField, lengthField, heightField;
    let surfaceValue, lengthValue, heightValue;
    
    // Si en mode impérial, convertir les valeurs vers le métrique pour les calculs
    if (isImperial) {
        surfaceField = document.getElementById(`surface${tabSuffix}_imperial`);
        lengthField = document.getElementById(`length${tabSuffix}_imperial`);
        heightField = document.getElementById(`height${tabSuffix}_imperial`);
        
        surfaceValue = surfaceField ? imperialToMetric(parseFloat(surfaceField.value)) : 0;
        lengthValue = lengthField ? imperialToMetric(parseFloat(lengthField.value)) : 0;
        heightValue = heightField ? imperialToMetric(parseFloat(heightField.value)) : 0;
    } else {
        surfaceField = document.getElementById(`surface${tabSuffix}`);
        lengthField = document.getElementById(`length${tabSuffix}`);
        heightField = document.getElementById(`height${tabSuffix}`);
        
        surfaceValue = parseFloat(surfaceField?.value);
        lengthValue = parseFloat(lengthField?.value);
        heightValue = parseFloat(heightField?.value);
    }
    
    const metricSurfaceField = document.getElementById(`surface${tabSuffix}`);
    const metricLengthField = document.getElementById(`length${tabSuffix}`);
    const metricHeightField = document.getElementById(`height${tabSuffix}`);

    // Ne pas faire de calcul si le champ actif est vidé
    if (event.target.value === "") {
        return;
    }
    
    // Ajuster selon le champ qui a été modifié
    if (changedField === `surface${tabSuffix}` || changedField === `surface${tabSuffix}_imperial`) {
        // Si la surface est modifiée et que la longueur ou la hauteur existe, mettre à jour l'autre dimension
        if (lengthValue && lengthValue > 0) {
            // Calculer la hauteur
            const calculatedHeight = surfaceValue / lengthValue;
            
            // Mettre à jour les champs métriques
            if (metricHeightField) metricHeightField.value = calculatedHeight.toFixed(2);
            
            // Mettre à jour les champs impériaux si nécessaire
            if (isImperial && heightField) {
                heightField.value = metricToImperial(calculatedHeight);
            }
        } else if (heightValue && heightValue > 0) {
            // Calculer la longueur
            const calculatedLength = surfaceValue / heightValue;
            
            // Mettre à jour les champs métriques
            if (metricLengthField) metricLengthField.value = calculatedLength.toFixed(2);
            
            // Mettre à jour les champs impériaux si nécessaire
            if (isImperial && lengthField) {
                lengthField.value = metricToImperial(calculatedLength);
            }
        }
    } else if (changedField === `length${tabSuffix}` || changedField === `length${tabSuffix}_imperial`) {
        // Si la longueur est modifiée et que la hauteur existe, calculer la surface
        if (heightValue && heightValue > 0) {
            const calculatedSurface = lengthValue * heightValue;
            
            // Mettre à jour les champs métriques
            if (metricSurfaceField) metricSurfaceField.value = calculatedSurface.toFixed(2);
            
            // Mettre à jour les champs impériaux si nécessaire
            if (isImperial && surfaceField) {
                surfaceField.value = metricToImperial(calculatedSurface);
            }
        }
    } else if (changedField === `height${tabSuffix}` || changedField === `height${tabSuffix}_imperial`) {
        // Si la hauteur est modifiée et que la longueur existe, calculer la surface
        if (lengthValue && lengthValue > 0) {
            const calculatedSurface = lengthValue * heightValue;
            
            // Mettre à jour les champs métriques
            if (metricSurfaceField) metricSurfaceField.value = calculatedSurface.toFixed(2);
            
            // Mettre à jour les champs impériaux si nécessaire
            if (isImperial && surfaceField) {
                surfaceField.value = metricToImperial(calculatedSurface);
            }
        }
    }
    
    // Synchroniser les champs métriques et impériaux si nécessaire
    if (isImperial) {
        // Mettre à jour les champs métriques avec les valeurs calculées
        if (surfaceField && metricSurfaceField && surfaceField.value) {
            metricSurfaceField.value = imperialToMetric(parseFloat(surfaceField.value)).toFixed(2);
        }
        if (lengthField && metricLengthField && lengthField.value) {
            metricLengthField.value = imperialToMetric(parseFloat(lengthField.value)).toFixed(2);
        }
        if (heightField && metricHeightField && heightField.value) {
            metricHeightField.value = imperialToMetric(parseFloat(heightField.value)).toFixed(2);
        }
    }
}

// Fonctions de formatage pour l'affichage détaillé des calculs
function formatCNBCalculationSteps() {
    // Implementation placeholder - cette fonction doit être implémentée selon les besoins
    return "Étapes de calcul CNB à implémenter";
}

function format91014CalculationSteps() {
    // Implementation placeholder - cette fonction doit être implémentée selon les besoins  
    return "Étapes de calcul 9.10.14 à implémenter";
}

function format91015CalculationSteps() {
    // Implementation placeholder - cette fonction doit être implémentée selon les besoins
    return "Étapes de calcul 9.10.15 à implémenter";
}

function copyToClipboard(elementId) {
    let text = "";
    
    // Déterminer quelle méthode utiliser
    if (elementId === 'cnb-result') {
        text = formatCNBCalculationSteps();
    } else if (elementId === 'method91014-result') {
        text = format91014CalculationSteps();
    } else if (elementId === 'method91015-result') {
        text = format91015CalculationSteps();
    } else {
        // Fallback au comportement d'origine si l'ID n'est pas reconnu
        const element = document.getElementById(elementId);
        text = element.innerText;
    }
    
    // Méthode 1: Utiliser l'API Clipboard avec fallback
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text)
            .then(showCopiedFeedback)
            .catch(err => {
                console.error('Erreur Clipboard API:', err);
                fallbackCopyMethod(text, showCopiedFeedback);
            });
    } else {
        // Méthode 2: Fallback pour les contextes non-sécurisés ou navigateurs plus anciens
        fallbackCopyMethod(text, showCopiedFeedback);
    }
    
    function showCopiedFeedback() {
        // Obtenir l'ID du bouton
        let buttonId;
        if (elementId.startsWith('method')) {
            buttonId = elementId.split('-')[0].replace('method', '');
        } else {
            buttonId = elementId.split('-')[0];
        }
        
        const copyButton = document.getElementById(`copy_${buttonId}`);
        const originalButtonText = copyButton.innerHTML;
        copyButton.innerHTML = "✓ Copié!";
        setTimeout(() => {
            copyButton.innerHTML = originalButtonText;
        }, 2000);
    }
    
    function fallbackCopyMethod(text, callback) {
        // Créer un élément textarea temporaire
        const textArea = document.createElement("textarea");
        textArea.value = text;
        
        // Rendre l'élément invisible mais présent dans le DOM
        textArea.style.position = "fixed";
        textArea.style.opacity = 0;
        document.body.appendChild(textArea);
        
        // Sélectionner et copier le texte
        textArea.select();
        
        try {
            const successful = document.execCommand('copy');
            if (successful) {
                callback();
            } else {
                console.error('La copie a échoué');
            }
        } catch (err) {
            console.error('Erreur lors de la copie:', err);
        }
        
        // Nettoyer
        document.body.removeChild(textArea);
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Mettre à jour l'affichage des unités au chargement
    toggleMeasurementSystem();
    
    // Ajouter les écouteurs d'événements pour le changement de système de mesure
    document.getElementById('measurementSystem').addEventListener('change', toggleMeasurementSystem);
});
