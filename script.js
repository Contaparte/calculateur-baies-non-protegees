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
    // Version simplifiée du tableau 3.2.3.1.-B et 3.2.3.1.-C
    // Dans une implémentation réelle, vous devriez avoir les tableaux complets
    
    // Structure pour les tableaux: {surface: {rapport: [pourcentages pour différentes distances]}}
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
            // Ajoutez d'autres surfaces selon le tableau complet
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
            // Ajoutez d'autres surfaces selon le tableau complet
        }
    };
    
    // Distances limitative correspondant aux colonnes dans les tableaux ci-dessus
    const distances = {
        'A-D-F3': [0, 1.2, 1.5, 2.0, 2.5, 3.0, 4.0, 5.0, 6.0],
        'E-F12': [0, 1.2, 1.5, 2.0, 2.5, 3.0, 4.0, 5.0, 6.0, 7.0]
    };
    
    // Pour cet exemple, nous simplifions et retournons un pourcentage basé sur la distance limitative
    // Dans une implémentation réelle, vous interpoleriez les valeurs des tableaux
    
    let pourcentage = 0;
    
    // Simplification pour l'exemple
    if (distanceLimitative < 1.2) {
        pourcentage = 0;
    } else if (distanceLimitative < 2.0) {
        pourcentage = usage === 'A-D-F3' ? 10 : 5;
    } else if (distanceLimitative < 3.0) {
        pourcentage = usage === 'A-D-F3' ? 30 : 15;
    } else if (distanceLimitative < 4.0) {
        pourcentage = usage === 'A-D-F3' ? 50 : 25;
    } else if (distanceLimitative < 6.0) {
        pourcentage = usage === 'A-D-F3' ? 90 : 45;
    } else {
        pourcentage = 100;
    }
    
    return pourcentage;
}

function calculerPourcentageMaximal91014(usage, surfaceFacade, distanceLimitative) {
    // Version simplifiée du tableau 9.10.14.4.-A
    // Dans une implémentation réelle, vous devriez avoir le tableau complet
    
    let pourcentage = 0;
    
    // Simplification pour l'exemple
    if (distanceLimitative < 1.2) {
        pourcentage = 0;
    } else if (distanceLimitative < 2.0) {
        pourcentage = usage === 'C-D-F3' ? 10 : 5;
    } else if (distanceLimitative < 3.0) {
        pourcentage = usage === 'C-D-F3' ? 20 : 10;
    } else if (distanceLimitative < 4.0) {
        pourcentage = usage === 'C-D-F3' ? 30 : 15;
    } else if (distanceLimitative < 6.0) {
        pourcentage = usage === 'C-D-F3' ? 50 : 25;
    } else if (distanceLimitative < 8.0) {
        pourcentage = usage === 'C-D-F3' ? 70 : 35;
    } else if (distanceLimitative < 10.0) {
        pourcentage = usage === 'C-D-F3' ? 90 : 45;
    } else {
        pourcentage = usage === 'C-D-F3' ? 100 : 55;
    }
    
    // Ajuster en fonction de la surface de la façade (simplification)
    if (surfaceFacade > 100) {
        pourcentage *= 0.8;
    } else if (surfaceFacade < 30) {
        pourcentage *= 1.2;
    }
    
    return pourcentage;
}

function calculerPourcentageMaximal91015(surfaceFacade, distanceLimitative) {
    // Version simplifiée du tableau 9.10.15.4
    // Dans une implémentation réelle, vous devriez avoir le tableau complet
    
    let pourcentage = 0;
    
    // Simplification pour l'exemple
    if (distanceLimitative < 1.2) {
        pourcentage = 0;
    } else if (distanceLimitative < 2.0) {
        pourcentage = 8;
    } else if (distanceLimitative < 4.0) {
        pourcentage = 20;
    } else if (distanceLimitative < 6.0) {
        pourcentage = 40;
    } else if (distanceLimitative < 8.0) {
        pourcentage = 60;
    } else if (distanceLimitative < 10.0) {
        pourcentage = 80;
    } else {
        pourcentage = 100;
    }
    
    // Ajuster en fonction de la surface de la façade (simplification)
    if (surfaceFacade > 100) {
        pourcentage *= 0.8;
    } else if (surfaceFacade < 30) {
        pourcentage *= 1.2;
    }
    
    return pourcentage;
}

function determinerConstructionRevetement323(usage, pourcentageMaximalBaies) {
    // Version simplifiée de la détermination du type de construction et revêtement requis
    // selon le tableau 3.2.3.7.
    
    if (pourcentageMaximalBaies <= 10) {
        return "Construction incombustible, revêtement incombustible, degré de résistance au feu de 1h (usages A, B3, C, D, F3) ou 2h (usages E, F1, F2)";
    } else if (pourcentageMaximalBaies <= 25) {
        return "Construction combustible ou incombustible, revêtement incombustible, degré de résistance au feu de 1h (usages A, B3, C, D, F3) ou 2h (usages E, F1, F2)";
    } else if (pourcentageMaximalBaies <= 50) {
        return "Construction combustible ou incombustible, revêtement incombustible, degré de résistance au feu de 45 min (usages A, B3, C, D, F3) ou 1h (usages E, F1, F2)";
    } else {
        return "Construction combustible ou incombustible, revêtement combustible ou incombustible, degré de résistance au feu de 45 min (usages A, B3, C, D, F3) ou 1h (usages E, F1, F2)";
    }
}

function determinerConstructionRevetement91014(usage, pourcentageMaximalBaies, distanceLimitative, typeBatiment) {
    // Version simplifiée de la détermination du type de construction et revêtement requis
    // selon le tableau 9.10.14.5.-A
    
    if (typeBatiment === 'garage' && distanceLimitative >= 0.6) {
        return "Aucun degré de résistance au feu requis";
    }
    
    if (pourcentageMaximalBaies <= 10) {
        return "Construction incombustible, revêtement incombustible, degré de résistance au feu de 1h (usages C, D, F3) ou 2h (usages E, F1, F2)";
    } else if (pourcentageMaximalBaies <= 25) {
        return "Construction combustible ou incombustible, revêtement incombustible, degré de résistance au feu de 1h (usages C, D, F3) ou 2h (usages E, F1, F2)";
    } else if (pourcentageMaximalBaies <= 50) {
        return "Construction combustible ou incombustible, revêtement incombustible, degré de résistance au feu de 45 min (usages C, D, F3) ou 1h (usages E, F1, F2)";
    } else {
        return "Construction combustible ou incombustible, revêtement combustible ou incombustible, degré de résistance au feu de 45 min (usages C, D, F3) ou 1h (usages E, F1, F2)";
    }
}

function determinerConstructionRevetement91015(distanceLimitative) {
    // Version simplifiée de la détermination du type de construction et revêtement requis
    // selon les articles 9.10.15.5.
    
    if (distanceLimitative < 0.6) {
        return "Degré de résistance au feu de 45 min, revêtement incombustible ou métallique";
    } else if (distanceLimitative < 1.2) {
        return "Degré de résistance au feu de 45 min, revêtement incombustible, métallique ou combustible selon certaines conditions";
    } else {
        return "Aucune restriction sur le type de construction ou de revêtement";
    }
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
