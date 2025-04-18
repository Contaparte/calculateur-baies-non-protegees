document.addEventListener('DOMContentLoaded', function() {
    // Configuration des événements pour les formulaires
    document.getElementById('form323').addEventListener('submit', function(e) {
        e.preventDefault();
        calculer323();
    });
    
    document.getElementById('form91014').addEventListener('submit', function(e) {
        e.preventDefault();
        calculer91014();
    });
    
    document.getElementById('form91015').addEventListener('submit', function(e) {
        e.preventDefault();
        calculer91015();
    });
    
    // Copier les résultats
    document.getElementById('copier323').addEventListener('click', function() {
        copierResultats('resultContent323');
    });
    
    document.getElementById('copier91014').addEventListener('click', function() {
        copierResultats('resultContent91014');
    });
    
    document.getElementById('copier91015').addEventListener('click', function() {
        copierResultats('resultContent91015');
    });
    
    // Activer les tooltips Bootstrap
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[title]'));
    tooltipTriggerList.map(function(tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Gestion des affichages conditionnels
    document.getElementById('verifierEspacement323').addEventListener('change', function() {
        document.getElementById('spacing_options_323').style.display = this.checked ? 'block' : 'none';
    });
    
    document.getElementById('airesPonderees323').addEventListener('change', function() {
        document.getElementById('weighted_options_323').style.display = this.checked ? 'block' : 'none';
    });
    
    document.getElementById('protectionSoffites323').addEventListener('change', function() {
        document.getElementById('soffit_options_323').style.display = this.checked ? 'block' : 'none';
    });
    
    document.getElementById('verifierEspacement91014').addEventListener('change', function() {
        document.getElementById('spacing_options_91014').style.display = this.checked ? 'block' : 'none';
    });
    
    document.getElementById('protectionSoffites91014').addEventListener('change', function() {
        document.getElementById('soffit_options_91014').style.display = this.checked ? 'block' : 'none';
    });
    
    document.getElementById('verifierEspacement91015').addEventListener('change', function() {
        document.getElementById('spacing_options_91015').style.display = this.checked ? 'block' : 'none';
    });
    
    document.getElementById('protectionSoffites91015').addEventListener('change', function() {
        document.getElementById('soffit_options_91015').style.display = this.checked ? 'block' : 'none';
    });
    
    // Permettre l'activation du bouton calculer avec la touche "Entrée"
    document.querySelectorAll('input').forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const formId = this.closest('form').id;
                if (formId === 'form323') {
                    calculer323();
                } else if (formId === 'form91014') {
                    calculer91014();
                } else if (formId === 'form91015') {
                    calculer91015();
                }
            }
        });
    });
});

// Tableau 3.2.3.1.-B - Usages des groupes A, B3, C, D et F3 - Sans gicleurs
const tableauGroupesAB3CDF3 = {
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
    100: {
        "< 3:1": [0, 7, 7, 8, 9, 11, 16, 22, 30, 40, 51, 65, 80, 97, 100],
        "3:1 à 10:1": [0, 7, 8, 9, 11, 13, 18, 25, 34, 44, 56, 69, 84, 100],
        "> 10:1": [0, 7, 9, 12, 16, 20, 29, 39, 49, 61, 74, 89, 100]
    }
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
        "< 3:1": [0, 4, 4, 6, 8, 11, 20, 33, 49, 69, 92, 100],
        "3:1 à 10:1": [0, 4, 5, 7, 9, 13, 22, 35, 51, 71, 94, 100],
        "> 10:1": [0, 4, 6, 10, 15, 20, 31, 45, 62, 82, 100]
    },
    30: {
        "< 3:1": [0, 4, 4, 5, 7, 10, 18, 28, 42, 58, 77, 100],
        "3:1 à 10:1": [0, 4, 4, 6, 9, 12, 20, 30, 44, 60, 80, 100],
        "> 10:1": [0, 4, 6, 10, 14, 18, 28, 40, 54, 71, 91, 100]
    },
    40: {
        "< 3:1": [0, 4, 4, 5, 6, 8, 14, 22, 32, 44, 59, 76, 94, 100],
        "3:1 à 10:1": [0, 4, 4, 6, 8, 10, 16, 24, 34, 47, 61, 78, 97, 100],
        "> 10:1": [0, 4, 5, 8, 12, 15, 23, 33, 44, 57, 72, 89, 100]
    },
    50: {
        "< 3:1": [0, 4, 4, 5, 6, 7, 12, 18, 26, 36, 48, 61, 76, 93, 100],
        "3:1 à 10:1": [0, 4, 4, 5, 7, 9, 14, 20, 29, 38, 50, 63, 79, 95, 100],
        "> 10:1": [0, 4, 5, 8, 11, 14, 21, 29, 38, 48, 61, 74, 90, 100]
    },
    100: {
        "< 3:1": [0, 4, 4, 4, 5, 5, 8, 11, 15, 20, 26, 32, 40, 48, 58, 68, 79, 100],
        "3:1 à 10:1": [0, 4, 4, 4, 5, 6, 9, 13, 17, 22, 28, 35, 42, 51, 60, 70, 81, 100],
        "> 10:1": [0, 4, 4, 6, 8, 10, 14, 19, 25, 31, 37, 44, 52, 61, 71, 81, 92, 100]
    }
};

// Tableau 3.2.3.1.-D - Bâtiment protégé par gicleurs - Usages des groupes A, B, C, D et F3
const tableauAvecGicleursGroupesABCDF3 = {
    10: [0, 16, 24, 42, 66, 100],
    15: [0, 16, 20, 34, 50, 74, 100],
    20: [0, 16, 20, 30, 42, 60, 100],
    25: [0, 16, 18, 26, 38, 52, 90, 100],
    30: [0, 14, 18, 24, 34, 46, 78, 100],
    40: [0, 14, 16, 22, 30, 40, 64, 96, 100],
    50: [0, 14, 16, 20, 28, 36, 56, 82, 100],
    60: [0, 14, 16, 20, 26, 32, 50, 72, 98, 100],
    80: [0, 14, 16, 18, 22, 28, 42, 58, 80, 100],
    100: [0, 14, 16, 18, 22, 26, 36, 50, 68, 88, 100],
    150: [0, 14, 14, 16, 20, 22, 30, 40, 52, 66, 82, 100]
};

// Tableau 3.2.3.1.-E - Bâtiment protégé par gicleurs - Usages des groupes E, F1 et F2
const tableauAvecGicleursGroupesEF1F2 = {
    10: [0, 8, 12, 20, 34, 50, 96, 100],
    15: [0, 8, 10, 16, 26, 36, 68, 100],
    20: [0, 8, 10, 14, 22, 30, 54, 86, 100],
    25: [0, 8, 10, 14, 18, 26, 44, 70, 100],
    30: [0, 8, 8, 12, 18, 24, 40, 60, 88, 100],
    40: [0, 8, 8, 12, 16, 20, 32, 48, 68, 94, 100],
    50: [0, 8, 8, 10, 14, 18, 28, 40, 58, 76, 100],
    60: [0, 8, 8, 10, 12, 16, 24, 36, 50, 66, 86, 100],
    80: [0, 8, 8, 10, 12, 14, 20, 30, 40, 52, 66, 84, 100],
    100: [0, 8, 8, 8, 10, 12, 18, 26, 34, 44, 56, 70, 84, 100],
    150: [0, 8, 8, 8, 10, 12, 16, 20, 26, 32, 40, 50, 60, 72, 84, 98, 100],
    200: [0, 8, 8, 8, 8, 10, 14, 18, 22, 28, 34, 42, 50, 60, 68, 80, 92, 100]
};

// Tableau 9.10.14.4-A - Usage habitation, établissement d'affaires et industriel à risques faibles
const tableau91014Habitation = {
    30: [0, 7, 9, 12, 39, 88, 100, 100, 100, 100, 100, 100, 100],
    40: [0, 7, 8, 11, 32, 69, 100, 100, 100, 100, 100, 100, 100],
    50: [0, 7, 8, 10, 28, 57, 100, 100, 100, 100, 100, 100, 100],
    100: [0, 7, 8, 9, 18, 34, 56, 84, 100, 100, 100, 100, 100],
    ">100": [0, 7, 7, 8, 12, 19, 28, 40, 55, 92, 100, 100, 100]
};

// Tableau 9.10.14.4-A - Usage commercial et industriel à risques moyens
const tableau91014Commercial = {
    30: [0, 4, 4, 6, 20, 44, 80, 100, 100, 100, 100, 100, 100],
    40: [0, 4, 4, 6, 16, 34, 61, 97, 100, 100, 100, 100, 100],
    50: [0, 4, 4, 5, 14, 29, 50, 79, 100, 100, 100, 100, 100],
    100: [0, 4, 4, 4, 9, 17, 28, 42, 60, 100, 100, 100, 100],
    ">100": [0, 4, 4, 4, 6, 10, 14, 20, 27, 46, 70, 100, 100]
};

// Tableau 9.10.15.4 - Habitations
const tableau91015 = {
    30: [0, 7, 9, 12, 39, 88, 100, 100, 100, 100, 100],
    40: [0, 7, 8, 11, 32, 69, 100, 100, 100, 100, 100],
    50: [0, 7, 8, 10, 28, 57, 100, 100, 100, 100, 100],
    100: [0, 7, 8, 9, 18, 34, 56, 84, 100, 100, 100],
    150: [0, 7, 7, 8, 9, 10, 13, 17, 22, 29, 37, 46, 56, 67, 79, 93, 100],
    250: [0, 7, 7, 7, 8, 9, 10, 13, 16, 20, 25, 30, 36, 43, 51, 59, 68, 87, 100],
    350: [0, 7, 7, 7, 8, 8, 9, 11, 14, 16, 20, 24, 28, 33, 38, 44, 50, 64, 81, 99, 100],
    500: [0, 7, 7, 7, 7, 8, 9, 10, 12, 14, 16, 19, 22, 25, 29, 33, 37, 47, 59, 71, 100]
};

// Distances limitatives pour les tableaux
const distancesLimitatives323 = [0, 1.2, 1.5, 2.0, 2.5, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 16.0];
const distancesLimitatives91014 = [0, 1.2, 1.5, 2.0, 4.0, 6.0, 8.0, 10.0, 12.0, 16.0, 20.0, 25.0, 30.0];
const distancesLimitatives91015 = [0, 1.2, 1.5, 2.0, 4.0, 6.0, 8.0, 10.0, 12.0, 16.0, 20.0];
const distancesLimitativesGicleursABCDF3 = [0, 1.2, 1.5, 2.0, 2.5, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0];
const distancesLimitativesGicleursEF1F2 = [0, 1.2, 1.5, 2.0, 2.5, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 15.0];

// Fonctions utilitaires
function getRatioCategory(length, height) {
    const ratio = length / height;
    
    if (ratio < 3) {
        return "< 3:1";
    } else if (ratio <= 10) {
        return "3:1 à 10:1";
    } else {
        return "> 10:1";
    }
}

function interpolate(x, x1, x2, y1, y2) {
    if (x1 === x2) return y1;
    return y1 + ((x - x1) / (x2 - x1)) * (y2 - y1);
}

function findBounds(value, array) {
    // Si la valeur est inférieure au premier élément
    if (value <= array[0]) {
        return { lower: array[0], upper: array[1] };
    }
    
    // Si la valeur est supérieure au dernier élément
    if (value >= array[array.length - 1]) {
        return { lower: array[array.length - 2], upper: array[array.length - 1] };
    }
    
    // Recherche des bornes
    for (let i = 0; i < array.length - 1; i++) {
        if (value >= array[i] && value <= array[i + 1]) {
            return { lower: array[i], upper: array[i + 1] };
        }
    }
    
    return { lower: array[0], upper: array[1] }; // Valeur par défaut
}

// Fonction de calcul pour Section 3.2.3
function calculer323() {
    const usage = document.getElementById('usage323').value;
    const revetement = document.getElementById('revetement323').value;
    const gicleurs = document.getElementById('gicleurs323').value;
    let distanceLimitative = parseFloat(document.getElementById('distanceLimitative323').value);
    const surfaceFacade = parseFloat(document.getElementById('surfaceFacade323').value);
    const longueurFacade = parseFloat(document.getElementById('longueurFacade323').value);
    const hauteurFacade = parseFloat(document.getElementById('hauteurFacade323').value);
    const verreArme = document.getElementById('verreArme323').checked;
    const delaiIntervention = document.getElementById('delaiIntervention323').checked;
    const surfaceProposee = parseFloat(document.getElementById('surfaceProposee323').value);
    const batimentExempte = document.getElementById('batimentExempte323').value;
    
    // Vérification des entrées
    if (isNaN(distanceLimitative) || isNaN(surfaceFacade) || isNaN(longueurFacade) || isNaN(hauteurFacade) || isNaN(surfaceProposee)) {
        alert('Veuillez entrer des valeurs numériques valides.');
        return;
    }
    
    // Si le délai d'intervention est plus de 10 min, la distance limitative est réduite de moitié
    if (delaiIntervention && gicleurs === 'non') {
        distanceLimitative = distanceLimitative / 2;
    }
    
    // Calcul du rapport L/H
    const rapportLH = longueurFacade / hauteurFacade;
    let categorieRapport = getRatioCategory(longueurFacade, hauteurFacade);
    
    // Choix du tableau et calcul du pourcentage maximal
    let pourcentageMaximal = 0;
    
    if (batimentExempte === 'garage' && distanceLimitative >= 3) {
        pourcentageMaximal = 100;
    } else if (batimentExempte === 'rdc' && distanceLimitative >= 9) {
        pourcentageMaximal = 100;
    } else {
        // Déterminer les tableaux et distances à utiliser
        let tableauUtilise, distancesUtilisees, surfacesDisponibles;
        
        if (gicleurs === 'oui') {
            if (usage === 'A-D-F3') {
                tableauUtilise = tableauAvecGicleursGroupesABCDF3;
                distancesUtilisees = distancesLimitativesGicleursABCDF3;
            } else { // 'E-F12'
                tableauUtilise = tableauAvecGicleursGroupesEF1F2;
                distancesUtilisees = distancesLimitativesGicleursEF1F2;
            }
            surfacesDisponibles = Object.keys(tableauUtilise).map(Number);
            
            // Trouver les bornes pour l'interpolation
            const { lower: lowerDistance, upper: upperDistance } = findBounds(distanceLimitative, distancesUtilisees);
            const lowerDistanceIndex = distancesUtilisees.indexOf(lowerDistance);
            const upperDistanceIndex = distancesUtilisees.indexOf(upperDistance);
            
            // Trouver la surface la plus proche
            let surfaceProche = surfacesDisponibles[0];
            for (const surface of surfacesDisponibles) {
                if (Math.abs(surface - surfaceFacade) < Math.abs(surfaceProche - surfaceFacade)) {
                    surfaceProche = surface;
                }
            }
            
            // Si la surface est supérieure à la plus grande catégorie disponible
            if (surfaceFacade > Math.max(...surfacesDisponibles)) {
                surfaceProche = Math.max(...surfacesDisponibles);
            }
            
            // Interpolation entre les distances
            const pctLower = tableauUtilise[surfaceProche.toString()][categorieRapport][lowerDistanceIndex];
            const pctUpper = tableauUtilise[surfaceProche.toString()][categorieRapport][upperDistanceIndex];
            pourcentageMaximal = interpolate(distanceLimitative, lowerDistance, upperDistance, pctLower, pctUpper);
        }
        
        // Méthode alternative pour les grandes surfaces si la distance limitative est >= 1.2m
        if (distanceLimitative >= 1.2) {
            let pourcentageAlternatif;
            
            if (usage === 'A-D-F3') {
                pourcentageAlternatif = (distanceLimitative * distanceLimitative) / surfaceFacade * 100;
            } else { // E-F12
                pourcentageAlternatif = (distanceLimitative * distanceLimitative) / (2 * surfaceFacade) * 100;
            }
            
            // Ne pas utiliser la méthode alternative si elle donne un pourcentage inférieur
            pourcentageMaximal = Math.max(pourcentageMaximal, pourcentageAlternatif);
        }
        
        // Ajustements pour verre armé et gicleurs
        if (verreArme) {
            pourcentageMaximal *= 2;
        }
        
        // Maximum 100%
        if (pourcentageMaximal > 100) {
            pourcentageMaximal = 100;
        }
    }
    
    const surfaceMaximale = (surfaceFacade * pourcentageMaximal) / 100;
    
    // Déterminer le type de construction et revêtement requis
    const constructionRevetement = determinerConstructionRevetement323(usage, pourcentageMaximal, revetement);
    
    // Vérifier si la surface proposée respecte la limite
    const conformite = surfaceProposee <= surfaceMaximale ? "Conforme" : "Non conforme";
    
    // Afficher les résultats
    const resultContent = `
        <p><strong>Distance limitative appliquée:</strong> ${distanceLimitative.toFixed(2)} m</p>
        <p><strong>Rapport L/H:</strong> ${rapportLH.toFixed(2)} (${categorieRapport})</p>
        <p><strong>Surface de la façade de rayonnement:</strong> ${surfaceFacade.toFixed(2)} m²</p>
        <p><strong>Pourcentage maximal de baies non protégées autorisé:</strong> ${pourcentageMaximal.toFixed(2)}%</p>
        <p><strong>Surface maximale de baies non protégées autorisée:</strong> ${surfaceMaximale.toFixed(2)} m²</p>
        <p><strong>Surface proposée de baies non protégées:</strong> ${surfaceProposee.toFixed(2)} m² (${conformite})</p>
        <p><strong>Construction et revêtement requis:</strong> ${constructionRevetement}</p>
    `;
    
    document.getElementById('resultContent323').innerHTML = resultContent;
    document.getElementById('results323').style.display = 'block';
    document.getElementById('copier323').style.display = 'inline-block';
}
            }
            
            // Interpolation entre les distances
            const pctLower = tableauUtilise[surfaceProche][lowerDistanceIndex];
            const pctUpper = tableauUtilise[surfaceProche][upperDistanceIndex];
            pourcentageMaximal = interpolate(distanceLimitative, lowerDistance, upperDistance, pctLower, pctUpper);
            
        } else { // Sans gicleurs
            if (usage === 'A-D-F3') {
                tableauUtilise = tableauGroupesAB3CDF3;
            } else { // 'E-F12'
                tableauUtilise = tableauGroupesEF1F2;
            }
            distancesUtilisees = distancesLimitatives323;
            surfacesDisponibles = Object.keys(tableauUtilise).map(Number);
            
            // Trouver les bornes pour l'interpolation
            const { lower: lowerDistance, upper: upperDistance } = findBounds(distanceLimitative, distancesUtilisees);
            const lowerDistanceIndex = distancesUtilisees.indexOf(lowerDistance);
            const upperDistanceIndex = distancesUtilisees.indexOf(upperDistance);
            
            // Trouver la surface la plus proche
            let surfaceProche = surfacesDisponibles[0];
            for (const surface of surfacesDisponibles) {
                if (Math.abs(surface - surfaceFacade) < Math.abs(surfaceProche - surfaceFacade)) {
                    surfaceProche = surface;
                }
            }
            
            // Si la surface est supérieure à la plus grande catégorie disponible
            if (surfaceFacade > Math.max(...surfacesDisponibles)) {
                surfaceProche = Math.max(...surfacesDisponibles);
            }
            
            // Interpolation entre les distances
            const pctLower = tableauUtilise[surfaceProche.toString()][categorieRapport][lowerDistanceIndex];
            const pctUpper = tableauUtilise[surfaceProche.toString()][categorieRapport][upperDistanceIndex];
            pourcentageMaximal = interpolate(distanceLimitative, lowerDistance, upperDistance, pctLower, pctUpper);
        }
        
        // Méthode alternative pour les grandes surfaces si la distance limitative est >= 1.2m
        if (distanceLimitative >= 1.2) {
            let pourcentageAlternatif;
            
            if (usage === 'A-D-F3') {
                pourcentageAlternatif = (distanceLimitative * distanceLimitative) / surfaceFacade * 100;
            } else { // E-F12
                pourcentageAlternatif = (distanceLimitative * distanceLimitative) / (2 * surfaceFacade) * 100;
            }
            
            // Ne pas utiliser la méthode alternative si elle donne un pourcentage inférieur
            pourcentageMaximal = Math.max(pourcentageMaximal, pourcentageAlternatif);
        }
        
        // Ajustements pour verre armé et gicleurs
        if (verreArme) {
            pourcentageMaximal *= 2;
        }
        
        // Maximum 100%
        if (pourcentageMaximal > 100) {
            pourcentageMaximal = 100;
        }
    }
    
    const surfaceMaximale = (surfaceFacade * pourcentageMaximal) / 100;
    
    // Vérification des options de soffites
    let soffitResult = "";
    if (document.getElementById('protectionSoffites323') && document.getElementById('protectionSoffites323').checked) {
        const soffit_distance = parseFloat(document.getElementById('soffit_distance_323').value);
        const soffit_protected = document.getElementById('soffit_protected_323').checked;
        
        if (soffit_distance < 0.45) {
            soffitResult = "<p><strong>Protection des soffites :</strong> NON CONFORME - Aucun soffite ne peut faire saillie si la distance est < 0,45 m</p>";
        } else if (soffit_distance < 1.2) {
            if (soffit_protected) {
                soffitResult = "<p><strong>Protection des soffites :</strong> CONFORME - Le soffite est protégé comme exigé</p>";
            } else {
                soffitResult = "<p><strong>Protection des soffites :</strong> NON CONFORME - Le soffite doit être protégé</p>";
            }
        } else {
            soffitResult = "<p><strong>Protection des soffites :</strong> CONFORME - Aucune protection spéciale requise (distance > 1,2 m)</p>";
        }
    }
    
    // Vérification de l'espacement des baies
    let spacingResult = "";
    if (document.getElementById('verifierEspacement323') && document.getElementById('verifierEspacement323').checked) {
        const horizontalSpacing = parseFloat(document.getElementById('horizontal_spacing_323').value);
        const verticalSpacing = parseFloat(document.getElementById('vertical_spacing_323').value);
        
        if (horizontalSpacing < 2.0 || verticalSpacing < 2.0) {
            spacingResult = "<p><strong>Espacement des baies :</strong> NON CONFORME - L'espacement doit être d'au moins 2 m</p>";
        } else {
            spacingResult = "<p><strong>Espacement des baies :</strong> CONFORME - L'espacement respecte le minimum de 2 m</p>";
        }
    }
    
    // Déterminer le type de construction et revêtement requis
    const constructionRevetement = determinerConstructionRevetement323(usage, pourcentageMaximal, revetement);
    
    // Vérifier si la surface proposée respecte la limite
    const conformite = surfaceProposee <= surfaceMaximale ? "Conforme" : "Non conforme";
    
    // Afficher les résultats
    const resultContent = `
        <p><strong>Distance limitative appliquée:</strong> ${distanceLimitative.toFixed(2)} m</p>
        <p><strong>Rapport L/H:</strong> ${rapportLH.toFixed(2)} (${categorieRapport})</p>
        <p><strong>Surface de la façade de rayonnement:</strong> ${surfaceFacade.toFixed(2)} m²</p>
        <p><strong>Pourcentage maximal de baies non protégées autorisé:</strong> ${pourcentageMaximal.toFixed(2)}%</p>
        <p><strong>Surface maximale de baies non protégées autorisée:</strong> ${surfaceMaximale.toFixed(2)} m²</p>
        <p><strong>Surface proposée de baies non protégées:</strong> ${surfaceProposee.toFixed(2)} m² (${conformite})</p>
        <p><strong>Construction et revêtement requis:</strong> ${constructionRevetement}</p>
        ${spacingResult}
        ${soffitResult}
    `;
    
    document.getElementById('resultContent323').innerHTML = resultContent;
    document.getElementById('results323').style.display = 'block';
    document.getElementById('copier323').style.display = 'inline-block';
}
