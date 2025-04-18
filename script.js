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

// Fonctions de calcul pour chaque méthode
function calculer323() {
    const usage = document.getElementById('usage323').value;
    const construction = document.getElementById('construction323').value;
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
    let categorieRapport;
    if (rapportLH < 3) {
        categorieRapport = "< 3:1";
    } else if (rapportLH <= 10) {
        categorieRapport = "3:1 à 10:1";
    } else {
        categorieRapport = "> 10:1";
    }
    
    // Obtenir le pourcentage maximal selon les tableaux 3.2.3.1.-B ou 3.2.3.1.-C
    let pourcentageMaximal;
    
    // Simplifié pour cet exemple - dans une application réelle, les tableaux seraient consultés
    // Cette fonction simule la consultation des tableaux
    pourcentageMaximal = calculerPourcentageMaximal323(usage, surfaceFacade, categorieRapport, distanceLimitative);
    
    // Ajustements pour verre armé et gicleurs
    if (verreArme) {
        pourcentageMaximal *= 2;
    }
    if (gicleurs === 'oui') {
        pourcentageMaximal *= 2;
    }
    
    // Maximum 100%
    if (pourcentageMaximal > 100) {
        pourcentageMaximal = 100;
    }
    
    // Pour les bâtiments exemptés
    if (batimentExempte === 'garage' && distanceLimitative >= 3) {
        pourcentageMaximal = 100;
    } else if (batimentExempte === 'rdc' && distanceLimitative >= 9) {
        pourcentageMaximal = 100;
    }
    
    const surfaceMaximale = (surfaceFacade * pourcentageMaximal) / 100;
    
    // Déterminer le type de construction et revêtement requis
    const construction_revêtement = determinerConstructionRevetement323(usage, pourcentageMaximal);
    
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
        <p><strong>Construction et revêtement requis:</strong> ${construction_revêtement}</p>
    `;
    
    document.getElementById('resultContent323').innerHTML = resultContent;
    document.getElementById('results323').style.display = 'block';
    document.getElementById('copier323').style.display = 'inline-block';
}

function calculer91014() {
    const usage = document.getElementById('usage91014').value;
    const typeBatiment = document.getElementById('typeBatiment91014').value;
    let distanceLimitative = parseFloat(document.getElementById('distanceLimitative91014').value);
    const surfaceFacade = parseFloat(document.getElementById('surfaceFacade91014').value);
    const revetementExterieur = document.getElementById('revetementExterieur91014').value;
    const verreArme = document.getElementById('verreArme91014').checked;
    const gicleurs = document.getElementById('gicleurs91014').value;
    const delaiIntervention = document.getElementById('delaiIntervention91014').checked;
    const surfaceProposee = parseFloat(document.getElementById('surfaceProposee91014').value);
    
    // Vérification des entrées
    if (isNaN(distanceLimitative) || isNaN(surfaceFacade) || isNaN(surfaceProposee)) {
        alert('Veuillez entrer des valeurs numériques valides.');
        return;
    }
    
    // Si le délai d'intervention est plus de 10 min, la distance limitative est réduite de moitié
    if (delaiIntervention && gicleurs === 'non') {
        distanceLimitative = distanceLimitative / 2;
    }
    
    // Calculer le pourcentage maximal selon le tableau 9.10.14.4.-A
    let pourcentageMaximal = calculerPourcentageMaximal91014(usage, surfaceFacade, distanceLimitative);
    
    // Ajustements pour verre armé et gicleurs
    if (verreArme) {
        pourcentageMaximal *= 2;
    }
    if (gicleurs === 'oui') {
        pourcentageMaximal *= 2;
    }
    
    // Maximum 100%
    if (pourcentageMaximal > 100) {
        pourcentageMaximal = 100;
    }
    
    // Méthode alternative si distance limitative >= 1.2m
    if (distanceLimitative >= 1.2) {
        let pourcentageAlternatif;
        
        if (usage === 'C-D-F3') {
            pourcentageAlternatif = (distanceLimitative * distanceLimitative) / surfaceFacade * 100;
        } else { // E-F12
            pourcentageAlternatif = (distanceLimitative * distanceLimitative) / (2 * surfaceFacade) * 100;
        }
        
        pourcentageMaximal = Math.max(pourcentageMaximal, pourcentageAlternatif);
        
        if (pourcentageMaximal > 100) {
            pourcentageMaximal = 100;
        }
    }
    
    // Exemptions spéciales pour garage ou bâtiment secondaire non attenant
    if (typeBatiment === 'garage' && distanceLimitative >= 0.6) {
        // Aucun degré de résistance au feu requis
        pourcentageMaximal = pourcentageMaximal;
    }
    
    const surfaceMaximale = (surfaceFacade * pourcentageMaximal) / 100;
    
    // Déterminer le type de construction et revêtement requis
    const construction_revêtement = determinerConstructionRevetement91014(usage, pourcentageMaximal, distanceLimitative, typeBatiment);
    
    // Vérifier si la surface proposée respecte la limite
    const conformite = surfaceProposee <= surfaceMaximale ? "Conforme" : "Non conforme";
    
    // Afficher les résultats
    const resultContent = `
        <p><strong>Distance limitative appliquée:</strong> ${distanceLimitative.toFixed(2)} m</p>
        <p><strong>Surface de la façade de rayonnement:</strong> ${surfaceFacade.toFixed(2)} m²</p>
        <p><strong>Pourcentage maximal de baies non protégées autorisé:</strong> ${pourcentageMaximal.toFixed(2)}%</p>
        <p><strong>Surface maximale de baies non protégées autorisée:</strong> ${surfaceMaximale.toFixed(2)} m²</p>
        <p><strong>Surface proposée de baies non protégées:</strong> ${surfaceProposee.toFixed(2)} m² (${conformite})</p>
        <p><strong>Construction et revêtement requis:</strong> ${construction_revêtement}</p>
    `;
    
    document.getElementById('resultContent91014').innerHTML = resultContent;
    document.getElementById('results91014').style.display = 'block';
    document.getElementById('copier91014').style.display = 'inline-block';
}

function calculer91015() {
    const typeHabitation = document.getElementById('typeHabitation91015').value;
    let distanceLimitative = parseFloat(document.getElementById('distanceLimitative91015').value);
    const surfaceFacade = parseFloat(document.getElementById('surfaceFacade91015').value);
    const revetementExterieur = document.getElementById('revetementExterieur91015').value;
    const verreArme = document.getElementById('verreArme91015').checked;
    const gicleurs = document.getElementById('gicleurs91015').value;
    const delaiIntervention = document.getElementById('delaiIntervention91015').checked;
    const surfaceProposee = parseFloat(document.getElementById('surfaceProposee91015').value);
    
    // Vérification des entrées
    if (isNaN(distanceLimitative) || isNaN(surfaceFacade) || isNaN(surfaceProposee)) {
        alert('Veuillez entrer des valeurs numériques valides.');
        return;
    }
    
    // Si le délai d'intervention est plus de 10 min, la distance limitative est réduite de moitié
    if (delaiIntervention && gicleurs === 'non') {
        distanceLimitative = distanceLimitative / 2;
    }
    
    // Calculer le pourcentage maximal selon le tableau 9.10.15.4
    let pourcentageMaximal = calculerPourcentageMaximal91015(surfaceFacade, distanceLimitative);
    
    // Ajustements pour verre armé et gicleurs
    if (verreArme) {
        pourcentageMaximal *= 2;
    }
    if (gicleurs === 'oui') {
        pourcentageMaximal *= 2;
    }
    
    // Maximum 100%
    if (pourcentageMaximal > 100) {
        pourcentageMaximal = 100;
    }
    
    // Méthode alternative si distance limitative >= 1.2m
    if (distanceLimitative >= 1.2) {
        const pourcentageAlternatif = (distanceLimitative * distanceLimitative) / surfaceFacade * 100;
        
        pourcentageMaximal = Math.max(pourcentageMaximal, pourcentageAlternatif);
        
        if (pourcentageMaximal > 100) {
            pourcentageMaximal = 100;
        }
    }
    
    const surfaceMaximale = (surfaceFacade * pourcentageMaximal) / 100;
    
    // Déterminer le type de construction et revêtement requis
    const constructionRevetement = determinerConstructionRevetement91015(distanceLimitative);
    
    // Vérifier si la surface proposée respecte la limite
    const conformite = surfaceProposee <= surfaceMaximale ? "Conforme" : "Non conforme";
    
    // Afficher les résultats
    const resultContent = `
        <p><strong>Distance limitative appliquée:</strong> ${distanceLimitative.toFixed(2)} m</p>
        <p><strong>Surface de la façade de rayonnement:</strong> ${surfaceFacade.toFixed(2)} m²</p>
        <p><strong>Pourcentage maximal de baies vitrées autorisé:</strong> ${pourcentageMaximal.toFixed(2)}%</p>
        <p><strong>Surface maximale de baies vitrées autorisée:</strong> ${surfaceMaximale.toFixed(2)} m²</p>
        <p><strong>Surface proposée de baies vitrées:</strong> ${surfaceProposee.toFixed(2)} m² (${conformite})</p>
        <p><strong>Construction et revêtement requis:</strong> ${constructionRevetement}</p>
    `;
    
    document.getElementById('resultContent91015').innerHTML = resultContent;
    document.getElementById('results91015').style.display = 'block';
    document.getElementById('copier91015').style.display = 'inline-block';
}

// Fonctions auxiliaires pour les calculs
function calculerPourcentageMaximal323(usage, surfaceFacade, categorieRapport, distanceLimitative) {
    // Structure des tableaux 3.2.3.1-B et 3.2.3.1-C
    const tableaux = {
        'A-D-F3': { // Tableau 3.2.3.1.-B
            '10': {
                '< 3:1': [0, 8, 10, 18, 29, 46, 91, 100],
                '3:1 à 10:1': [0, 8, 12, 21, 33, 50, 96, 100],
                '> 10:1': [0, 11, 18, 32, 48, 68, 100]
            },
            '15': {
                '< 3:1': [0, 7, 9, 14, 22, 33, 63, 100],
                '3:1 à 10:1': [0, 8, 10, 17, 25, 37, 67, 100],
                '> 10:1': [0, 10, 15, 26, 39, 53, 87, 100]
            },
            '20': {
                '< 3:1': [0, 7, 9, 12, 18, 26, 49, 81, 100],
                '3:1 à 10:1': [0, 8, 10, 15, 21, 30, 53, 85, 100],
                '> 10:1': [0, 9, 14, 23, 33, 45, 72, 100]
            },
            '25': {
                '< 3:1': [0, 7, 8, 11, 16, 23, 41, 66, 98, 100],
                '3:1 à 10:1': [0, 8, 9, 13, 19, 26, 45, 70, 100],
                '> 10:1': [0, 9, 13, 21, 30, 39, 62, 90, 100]
            },
            '30': {
                '< 3:1': [0, 7, 8, 11, 15, 20, 35, 56, 83, 100],
                '3:1 à 10:1': [0, 7, 9, 12, 17, 23, 39, 61, 88, 100],
                '> 10:1': [0, 8, 12, 19, 27, 36, 56, 79, 100]
            },
            '40': {
                '< 3:1': [0, 7, 8, 10, 13, 17, 28, 44, 64, 89, 100],
                '3:1 à 10:1': [0, 7, 8, 11, 15, 20, 32, 48, 69, 93, 100],
                '> 10:1': [0, 8, 11, 17, 24, 31, 47, 66, 88, 100]
            },
            '50': {
                '< 3:1': [0, 7, 8, 9, 12, 15, 24, 37, 53, 72, 96, 100],
                '3:1 à 10:1': [0, 7, 8, 10, 14, 18, 28, 41, 57, 77, 100],
                '> 10:1': [0, 8, 10, 15, 21, 28, 41, 57, 76, 97, 100]
            },
            '100': {
                '< 3:1': [0, 7, 7, 8, 9, 11, 16, 22, 30, 40, 51, 65, 80, 97, 100],
                '3:1 à 10:1': [0, 7, 8, 9, 11, 13, 18, 25, 34, 44, 56, 69, 84, 100],
                '> 10:1': [0, 7, 9, 12, 16, 20, 29, 39, 49, 61, 74, 89, 100]
            }
        },
        'E-F12': { // Tableau 3.2.3.1.-C
            '10': {
                '< 3:1': [0, 4, 5, 9, 15, 23, 46, 77, 100],
                '3:1 à 10:1': [0, 4, 6, 10, 17, 25, 48, 79, 100],
                '> 10:1': [0, 5, 9, 16, 24, 34, 58, 91, 100]
            },
            '15': {
                '< 3:1': [0, 4, 5, 7, 11, 16, 32, 53, 79, 100],
                '3:1 à 10:1': [0, 4, 5, 8, 13, 18, 34, 55, 82, 100],
                '> 10:1': [0, 5, 8, 13, 19, 26, 43, 66, 93, 100]
            },
            '20': {
                '< 3:1': [0, 4, 4, 6, 9, 13, 25, 40, 61, 85, 100],
                '3:1 à 10:1': [0, 4, 5, 7, 11, 15, 27, 43, 63, 87, 100],
                '> 10:1': [0, 5, 7, 11, 17, 22, 36, 53, 74, 99, 100]
            },
            '25': {
                '< 3:1': [0, 4, 4, 6, 8, 11, 20, 33, 49, 69, 92, 100],
                '3:1 à 10:1': [0, 4, 5, 7, 9, 13, 22, 35, 51, 71, 94, 100],
                '> 10:1': [0, 4, 6, 10, 15, 20, 31, 45, 62, 82, 100]
            },
            '30': {
                '< 3:1': [0, 4, 4, 5, 7, 10, 18, 28, 42, 58, 77, 100],
                '3:1 à 10:1': [0, 4, 4, 6, 9, 12, 20, 30, 44, 60, 80, 100],
                '> 10:1': [0, 4, 6, 10, 14, 18, 28, 40, 54, 71, 91, 100]
            },
            '40': {
                '< 3:1': [0, 4, 4, 5, 6, 8, 14, 22, 32, 44, 59, 76, 94, 100],
                '3:1 à 10:1': [0, 4, 4, 6, 8, 10, 16, 24, 34, 47, 61, 78, 97, 100],
                '> 10:1': [0, 4, 5, 8, 12, 15, 23, 33, 44, 57, 72, 89, 100]
            },
            '50': {
                '< 3:1': [0, 4, 4, 5, 6, 7, 12, 18, 26, 36, 48, 61, 76, 93, 100],
                '3:1 à 10:1': [0, 4, 4, 5, 7, 9, 14, 20, 29, 38, 50, 63, 79, 95, 100],
                '> 10:1': [0, 4, 5, 8, 11, 14, 21, 29, 38, 48, 61, 74, 90, 100]
            },
            '100': {
                '< 3:1': [0, 4, 4, 4, 5, 5, 8, 11, 15, 20, 26, 32, 40, 48, 58, 68, 79, 100],
                '3:1 à 10:1': [0, 4, 4, 4, 5, 6, 9, 13, 17, 22, 28, 35, 42, 51, 60, 70, 81, 100],
                '> 10:1': [0, 4, 4, 6, 8, 10, 14, 19, 25, 31, 37, 44, 52, 61, 71, 81, 92, 100]
            }
        }
    };
    
    // Distances limitative correspondant aux colonnes dans les tableaux
    const distances = {
        'A-D-F3': [0, 1.2, 1.5, 2.0, 2.5, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 16.0],
        'E-F12': [0, 1.2, 1.5, 2.0, 2.5, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 16.0, 18.0, 20.0]
    };
    
    // Trouver la catégorie de surface la plus proche
    const surfacesDisponibles = Object.keys(tableaux[usage]).map(Number);
    let surfaceCategorie = surfacesDisponibles[0];
    for (const surface of surfacesDisponibles) {
        if (Math.abs(surface - surfaceFacade) < Math.abs(surfaceCategorie - surfaceFacade)) {
            surfaceCategorie = surface;
        }
    }
    
    // Si la surface est supérieure à la plus grande catégorie disponible, utiliser la plus grande
    if (surfaceFacade > Math.max(...surfacesDisponibles)) {
        surfaceCategorie = Math.max(...surfacesDisponibles);
    }
    
    // Trouver les indices et les pourcentages pour l'interpolation
    const distancesTableau = distances[usage];
    let indiceInf = 0;
    let indiceSup = 0;
    
    for (let i = 0; i < distancesTableau.length; i++) {
        if (distancesTableau[i] <= distanceLimitative) {
            indiceInf = i;
        }
        if (distancesTableau[i] >= distanceLimitative && (indiceSup === 0 || distancesTableau[i] < distancesTableau[indiceSup])) {
            indiceSup = i;
        }
    }
    
    // Si la distance limitative est supérieure à la plus grande valeur du tableau, retourner 100%
    if (distanceLimitative > distancesTableau[distancesTableau.length - 1]) {
        return 100;
    }
    
    // Si les indices sont les mêmes, pas besoin d'interpolation
    if (indiceInf === indiceSup) {
        return tableaux[usage][surfaceCategorie.toString()][categorieRapport][indiceInf];
    }
    
    // Interpolation entre les deux indices
    const distInf = distancesTableau[indiceInf];
    const distSup = distancesTableau[indiceSup];
    const pctInf = tableaux[usage][surfaceCategorie.toString()][categorieRapport][indiceInf];
    const pctSup = tableaux[usage][surfaceCategorie.toString()][categorieRapport][indiceSup];
    
    // Interpolation linéaire
    return pctInf + ((distanceLimitative - distInf) / (distSup - distInf)) * (pctSup - pctInf);
}

function calculerPourcentageMaximal91014(usage, surfaceFacade, distanceLimitative) {
    // Structure du tableau 9.10.14.4.-A
    const tableau = {
        'C-D-F3': { // Pour les usages des groupes A, B, division 3, C, D et F, division 3
            '10': [0, 7, 9, 12, 39, 88, 100],
            '15': [0, 7, 9, 10, 28, 57, 100],
            '20': [0, 7, 8, 9, 18, 34, 56, 84, 100],
            '30': [0, 7, 8, 9, 12, 19, 28, 40, 55, 92, 100],
            '40': [0, 7, 7, 8, 9, 13, 18, 26, 36, 48, 62, 79, 98, 100],
            '50': [0, 7, 7, 8, 9, 11, 16, 22, 30, 40, 51, 65, 80, 97, 100],
            '100': [0, 7, 7, 8, 9, 10, 13, 17, 22, 29, 37, 46, 56, 67, 79, 93, 100]
        },
        'E-F12': { // Pour les usages des groupes E et F, divisions 1 et 2
            '10': [0, 4, 5, 9, 15, 23, 46, 77, 100],
            '15': [0, 4, 5, 7, 11, 16, 32, 53, 79, 100],
            '20': [0, 4, 4, 6, 9, 13, 25, 40, 61, 85, 100],
            '30': [0, 4, 4, 5, 7, 10, 18, 28, 42, 58, 77, 100],
            '40': [0, 4, 4, 5, 6, 8, 14, 22, 32, 44, 59, 76, 94, 100],
            '50': [0, 4, 4, 5, 6, 7, 12, 18, 26, 36, 48, 61, 76, 93, 100],
            '100': [0, 4, 4, 4, 5, 5, 8, 11, 15, 20, 26, 32, 40, 48, 58, 68, 79, 100]
        }
    };
    
    // Distances limitative correspondant aux colonnes dans le tableau
    const distances = [0, 1.2, 1.5, 2.0, 2.5, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 16.0, 18.0, 20.0];
    
    // Trouver la catégorie de surface la plus proche
    const surfacesDisponibles = Object.keys(tableau[usage]).map(Number);
    let surfaceCategorie = surfacesDisponibles[0];
    for (const surface of surfacesDisponibles) {
        if (Math.abs(surface - surfaceFacade) < Math.abs(surfaceCategorie - surfaceFacade)) {
            surfaceCategorie = surface;
        }
    }
    
    // Si la surface est supérieure à la plus grande catégorie disponible, utiliser la plus grande
    if (surfaceFacade > Math.max(...surfacesDisponibles)) {
        surfaceCategorie = Math.max(...surfacesDisponibles);
    }
    
    // Trouver les indices et les pourcentages pour l'interpolation
    let indiceInf = 0;
    let indiceSup = 0;
    
    for (let i = 0; i < distances.length; i++) {
        if (distances[i] <= distanceLimitative) {
            indiceInf = i;
        }
        if (distances[i] >= distanceLimitative && (indiceSup === 0 || distances[i] < distances[indiceSup])) {
            indiceSup = i;
        }
    }
    
    // Si la distance limitative est supérieure à la plus grande valeur du tableau, retourner 100%
    if (distanceLimitative > distances[distances.length - 1]) {
        return 100;
    }
    
    // Si les indices sont les mêmes, pas besoin d'interpolation
    if (indiceInf === indiceSup) {
        return tableau[usage][surfaceCategorie.toString()][indiceInf];
    }
    
    // Interpolation entre les deux indices
    const distInf = distances[indiceInf];
    const distSup = distances[indiceSup];
    const pctInf = tableau[usage][surfaceCategorie.toString()][indiceInf];
    const pctSup = tableau[usage][surfaceCategorie.toString()][indiceSup];
    
    // Interpolation linéaire
    return pctInf + ((distanceLimitative - distInf) / (distSup - distInf)) * (pctSup - pctInf);
}

function calculerPourcentageMaximal91015(surfaceFacade, distanceLimitative) {
    // Structure du tableau 9.10.15.4
    const tableau = {
        '30': [0, 7, 9, 12, 39, 88, 100],
        '40': [0, 7, 8, 11, 32, 69, 100],
        '50': [0, 7, 8, 10, 28, 57, 100],
        '100': [0, 7, 8, 9, 18, 34, 56, 84, 100],
        '150': [0, 7, 7, 8, 9, 10, 13, 17, 22, 29, 37, 46, 56, 67, 79, 93, 100],
        '250': [0, 7, 7, 7, 8, 9, 10, 13, 16, 20, 25, 30, 36, 43, 51, 59, 68, 87, 100],
        '350': [0, 7, 7, 7, 8, 8, 9, 11, 14, 16, 20, 24, 28, 33, 38, 44, 50, 64, 81, 99, 100],
        '500': [0, 7, 7, 7, 7, 8, 9, 10, 12, 14, 16, 19, 22, 25, 29, 33, 37, 47, 59, 71, 100]
    };
    
    // Distances limitative correspondant aux colonnes dans le tableau
    const distances = [0, 1.2, 1.5, 2.0, 2.5, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0, 13.0, 14.0, 16.0, 18.0, 20.0, 25.0];
    
    // Trouver la catégorie de surface la plus proche
    const surfacesDisponibles = Object.keys(tableau).map(Number);
    let surfaceCategorie = surfacesDisponibles[0];
    for (const surface of surfacesDisponibles) {
        if (Math.abs(surface - surfaceFacade) < Math.abs(surfaceCategorie - surfaceFacade)) {
            surfaceCategorie = surface;
        }
    }
    
    // Si la surface est supérieure à la plus grande catégorie disponible, utiliser la plus grande
    if (surfaceFacade > Math.max(...surfacesDisponibles)) {
        surfaceCategorie = Math.max(...surfacesDisponibles);
    }
    
    // Trouver les indices et les pourcentages pour l'interpolation
    let indiceInf = 0;
    let indiceSup = 0;
    
    for (let i = 0; i < distances.length; i++) {
        if (distances[i] <= distanceLimitative) {
            indiceInf = i;
        }
        if (distances[i] >= distanceLimitative && (indiceSup === 0 || distances[i] < distances[indiceSup])) {
            indiceSup = i;
        }
    }
    
    // Si la distance limitative est supérieure à la plus grande valeur du tableau, retourner 100%
    if (distanceLimitative > distances[distances.length - 1]) {
        return 100;
    }
    
    // Si les indices sont les mêmes, pas besoin d'interpolation
    if (indiceInf === indiceSup) {
        return tableau[surfaceCategorie.toString()][indiceInf];
    }
    
    // Interpolation entre les deux indices
    const distInf = distances[indiceInf];
    const distSup = distances[indiceSup];
    const pctInf = tableau[surfaceCategorie.toString()][indiceInf];
    const pctSup = tableau[surfaceCategorie.toString()][indiceSup];
    
    // Interpolation linéaire
    return pctInf + ((distanceLimitative - distInf) / (distSup - distInf)) * (pctSup - pctInf);
}

function copierResultats(elementId) {
    const resultElement = document.getElementById(elementId);
    const text = resultElement.innerText;
    
    // Créer un élément temporaire pour la copie
    const tempElement = document.createElement('textarea');
    tempElement.value = text;
    document.body.appendChild(tempElement);
    
    // Sélectionner et copier le texte
    tempElement.select();
    document.execCommand('copy');
    
    // Supprimer l'élément temporaire
    document.body.removeChild(tempElement);
    
    // Alerter l'utilisateur
    alert('Résultats copiés dans le presse-papier');
}
