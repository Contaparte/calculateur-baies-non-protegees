// Calculs de baies non protégées selon le CNB
// =============================================

// Tables de données - Code National du Bâtiment
// Tableau 3.2.3.1.-B - Usages des groupes A, B, div. 3, C, D et F, div. 3 - Sans gicleurs
const tableauGroupesABCDF = {
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
        "< 3:1": [0, 7, 7, 7, 8, 9, 13, 17, 22, 29, 37, 46, 56, 67, 79, 91, 100],
        "3:1 à 10:1": [0, 7, 7, 8, 9, 11, 15, 20, 26, 33, 40, 49, 58, 68, 79, 91, 100],
        "> 10:1": [0, 7, 8, 10, 13, 17, 24, 31, 39, 47, 56, 66, 76, 87, 99, 100]
    },
    200: {
        "< 3:1": [0, 7, 7, 7, 8, 9, 11, 14, 18, 23, 28, 34, 41, 48, 56, 65, 74, 95, 100],
        "3:1 à 10:1": [0, 7, 7, 8, 8, 10, 13, 17, 21, 26, 31, 37, 44, 51, 58, 66, 75, 95, 100],
        "> 10:1": [0, 7, 8, 9, 11, 14, 20, 26, 32, 38, 45, 52, 59, 67, 75, 84, 93, 100]
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
        "< 3:1": [0, 4, 4, 6, 8, 11, 20, 32, 48, 67, 89, 100],
        "3:1 à 10:1": [0, 4, 5, 6, 10, 13, 23, 35, 51, 70, 92, 100],
        "> 10:1": [0, 4, 7, 10, 15, 20, 31, 45, 62, 82, 100]
    },
    30: {
        "< 3:1": [0, 4, 4, 5, 7, 10, 17, 27, 40, 56, 75, 96, 100],
        "3:1 à 10:1": [0, 4, 4, 6, 9, 12, 20, 30, 43, 59, 78, 100],
        "> 10:1": [0, 4, 6, 9, 13, 18, 28, 39, 53, 70, 89, 100]
    },
    40: {
        "< 3:1": [0, 4, 4, 5, 6, 8, 14, 22, 32, 44, 59, 76, 95, 100],
        "3:1 à 10:1": [0, 4, 4, 5, 8, 10, 17, 24, 34, 46, 61, 78, 97, 100],
        "> 10:1": [0, 4, 5, 8, 11, 15, 23, 33, 44, 58, 74, 93, 100]
    },
    50: {
        "< 3:1": [0, 4, 4, 5, 6, 7, 12, 18, 26, 36, 48, 62, 78, 96, 100],
        "3:1 à 10:1": [0, 4, 4, 5, 7, 9, 14, 21, 29, 38, 50, 64, 79, 96, 100],
        "> 10:1": [0, 4, 5, 7, 10, 13, 20, 28, 38, 49, 62, 77, 94, 100]
    },
    60: {
        "< 3:1": [0, 4, 4, 4, 5, 7, 11, 16, 22, 30, 40, 51, 64, 79, 95, 100],
        "3:1 à 10:1": [0, 4, 4, 5, 6, 8, 13, 18, 25, 33, 42, 54, 66, 81, 97, 100],
        "> 10:1": [0, 4, 5, 6, 9, 12, 18, 25, 33, 42, 53, 66, 80, 96, 100]
    },
    80: {
        "< 3:1": [0, 4, 4, 4, 5, 6, 9, 13, 18, 24, 32, 40, 50, 61, 74, 88, 100],
        "3:1 à 10:1": [0, 4, 4, 4, 6, 7, 11, 15, 20, 26, 34, 42, 52, 63, 76, 90, 100],
        "> 10:1": [0, 4, 4, 6, 8, 10, 15, 21, 27, 34, 43, 53, 64, 76, 90, 100]
    },
    100: {
        "< 3:1": [0, 4, 4, 4, 5, 6, 8, 11, 15, 20, 26, 33, 41, 50, 60, 72, 85, 100],
        "3:1 à 10:1": [0, 4, 4, 4, 5, 7, 10, 13, 17, 22, 28, 35, 43, 52, 62, 74, 87, 100],
        "> 10:1": [0, 4, 4, 5, 7, 9, 13, 18, 23, 29, 36, 44, 53, 63, 74, 87, 100]
    },
    150: {
        "< 3:1": [0, 4, 4, 4, 4, 5, 6, 8, 11, 14, 18, 23, 29, 35, 42, 50, 59, 76, 96, 100],
        "3:1 à 10:1": [0, 4, 4, 4, 5, 6, 8, 10, 13, 16, 20, 25, 31, 37, 44, 52, 61, 78, 97, 100],
        "> 10:1": [0, 4, 4, 5, 6, 8, 11, 14, 18, 23, 28, 34, 40, 47, 55, 64, 74, 94, 100]
    },
    200: {
        "< 3:1": [0, 4, 4, 4, 4, 5, 6, 7, 9, 11, 14, 18, 22, 27, 32, 38, 44, 57, 72, 89, 100],
        "3:1 à 10:1": [0, 4, 4, 4, 4, 5, 7, 8, 10, 13, 16, 20, 24, 29, 34, 40, 47, 60, 75, 91, 100],
        "> 10:1": [0, 4, 4, 4, 5, 7, 9, 12, 15, 18, 22, 27, 32, 38, 44, 51, 59, 75, 92, 100]
    },
    250: {
        "< 3:1": [0, 4, 4, 4, 4, 4, 5, 6, 8, 9, 12, 15, 18, 22, 26, 31, 36, 46, 58, 72, 100],
        "3:1 à 10:1": [0, 4, 4, 4, 4, 5, 6, 7, 9, 11, 13, 17, 20, 24, 28, 33, 39, 49, 61, 75, 100],
        "> 10:1": [0, 4, 4, 4, 5, 6, 8, 10, 12, 15, 18, 22, 27, 31, 36, 42, 48, 61, 76, 93, 100]
    },
    350: {
        "< 3:1": [0, 4, 4, 4, 4, 4, 5, 5, 6, 7, 9, 11, 13, 16, 19, 22, 26, 33, 41, 50, 74, 100],
        "3:1 à 10:1": [0, 4, 4, 4, 4, 4, 5, 6, 7, 8, 10, 12, 15, 17, 20, 24, 28, 35, 43, 52, 77, 100],
        "> 10:1": [0, 4, 4, 4, 4, 5, 7, 8, 10, 12, 14, 17, 20, 23, 27, 31, 36, 45, 55, 66, 94, 100]
    },
    500: {
        "< 3:1": [0, 4, 4, 4, 4, 4, 4, 5, 5, 6, 7, 8, 10, 12, 14, 16, 18, 23, 29, 35, 52, 72, 95, 100],
        "3:1 à 10:1": [0, 4, 4, 4, 4, 4, 5, 5, 6, 7, 8, 10, 12, 13, 15, 18, 20, 25, 31, 38, 56, 76, 99, 100],
        "> 10:1": [0, 4, 4, 4, 4, 5, 6, 7, 8, 9, 11, 13, 15, 17, 20, 23, 26, 33, 40, 48, 70, 94, 100]
    },
    1000: {
        "< 3:1": [0, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 6, 7, 8, 9, 10, 12, 15, 18, 22, 32, 44, 58, 74, 93, 100],
        "3:1 à 10:1": [0, 4, 4, 4, 4, 4, 4, 4, 5, 5, 6, 7, 8, 9, 10, 12, 13, 16, 20, 24, 35, 47, 62, 78, 97, 100],
        "> 10:1": [0, 4, 4, 4, 4, 4, 5, 5, 6, 7, 8, 9, 10, 12, 13, 15, 17, 21, 26, 31, 44, 59, 76, 95, 100]
    },
    2000: {
        "< 3:1": [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 6, 6, 7, 8, 10, 12, 14, 20, 27, 36, 46, 59, 74, 91, 100],
        "3:1 à 10:1": [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 6, 6, 7, 8, 9, 11, 13, 16, 22, 30, 39, 50, 63, 78, 95, 100],
        "> 10:1": [0, 4, 4, 4, 4, 4, 4, 4, 5, 5, 6, 6, 7, 8, 9, 10, 11, 14, 17, 20, 28, 37, 48, 61, 76, 93, 100]
    }
};

// Tables de données avec gicleurs
const tableauGroupesABCDFAvecGicleurs = {
    10: {
        "< 3:1": [0, 16, 20, 36, 58, 92, 100],
        "3:1 à 10:1": [0, 16, 24, 42, 66, 100],
        "> 10:1": [0, 22, 36, 64, 96, 100]
    },
    15: {
        "< 3:1": [0, 14, 18, 28, 44, 66, 100],
        "3:1 à 10:1": [0, 16, 20, 34, 50, 74, 100],
        "> 10:1": [0, 20, 30, 52, 78, 100]
    },
    20: {
        "< 3:1": [0, 14, 18, 24, 36, 52, 98, 100],
        "3:1 à 10:1": [0, 16, 20, 30, 42, 60, 100],
        "> 10:1": [0, 18, 28, 46, 66, 90, 100]
    },
    25: {
        "< 3:1": [0, 14, 16, 22, 32, 46, 82, 100],
        "3:1 à 10:1": [0, 16, 18, 26, 38, 52, 90, 100],
        "> 10:1": [0, 18, 26, 42, 60, 78, 100]
    },
    30: {
        "< 3:1": [0, 14, 16, 22, 30, 40, 70, 100],
        "3:1 à 10:1": [0, 14, 18, 24, 34, 46, 78, 100],
        "> 10:1": [0, 16, 24, 38, 54, 72, 100]
    },
    40: {
        "< 3:1": [0, 14, 16, 20, 26, 34, 56, 88, 100],
        "3:1 à 10:1": [0, 14, 16, 22, 30, 40, 64, 96, 100],
        "> 10:1": [0, 16, 22, 34, 48, 62, 94, 100]
    },
    50: {
        "< 3:1": [0, 14, 16, 18, 24, 30, 48, 74, 100],
        "3:1 à 10:1": [0, 14, 16, 20, 28, 36, 56, 82, 100],
        "> 10:1": [0, 16, 20, 30, 42, 56, 82, 100]
    },
    60: {
        "< 3:1": [0, 14, 16, 18, 22, 28, 42, 64, 90, 100],
        "3:1 à 10:1": [0, 14, 16, 20, 26, 32, 50, 72, 98, 100],
        "> 10:1": [0, 16, 20, 28, 40, 50, 76, 100]
    },
    80: {
        "< 3:1": [0, 14, 14, 16, 20, 24, 36, 52, 72, 96, 100],
        "3:1 à 10:1": [0, 14, 16, 18, 22, 28, 42, 58, 80, 100],
        "> 10:1": [0, 16, 18, 26, 34, 44, 64, 88, 100]
    },
    100: {
        "< 3:1": [0, 14, 14, 16, 18, 22, 32, 44, 60, 80, 100],
        "3:1 à 10:1": [0, 14, 16, 18, 22, 26, 36, 50, 68, 88, 100],
        "> 10:1": [0, 14, 18, 24, 32, 40, 58, 78, 98, 100]
    },
    150: {
        "< 3:1": [0, 14, 14, 14, 16, 18, 26, 34, 44, 58, 74, 92, 100],
        "3:1 à 10:1": [0, 14, 14, 16, 18, 22, 30, 40, 52, 66, 80, 98, 100],
        "> 10:1": [0, 14, 16, 20, 26, 34, 48, 62, 78, 94, 100]
    },
    200: {
        "< 3:1": [0, 14, 14, 14, 16, 18, 22, 28, 36, 46, 56, 68, 82, 96, 100],
        "3:1 à 10:1": [0, 14, 14, 16, 16, 20, 26, 34, 42, 52, 62, 74, 88, 100],
        "> 10:1": [0, 14, 16, 18, 22, 28, 40, 52, 64, 76, 90, 100]
    },
    250: {
        "< 3:1": [0, 14, 14, 14, 16, 18, 20, 26, 32, 40, 50, 60, 72, 86, 100],
        "3:1 à 10:1": [0, 14, 14, 16, 18, 20, 24, 30, 38, 48, 56, 68, 80, 94, 100],
        "> 10:1": [0, 14, 16, 18, 22, 28, 38, 48, 60, 72, 86, 100]
    },
    350: {
        "< 3:1": [0, 14, 14, 14, 16, 16, 18, 22, 28, 32, 40, 48, 56, 66, 76, 88, 100],
        "3:1 à 10:1": [0, 14, 14, 16, 16, 18, 22, 26, 32, 38, 46, 54, 64, 74, 84, 96, 100],
        "> 10:1": [0, 14, 16, 18, 20, 24, 32, 42, 50, 60, 72, 86, 100]
    },
    500: {
        "< 3:1": [0, 14, 14, 14, 14, 16, 18, 20, 24, 28, 32, 38, 44, 50, 58, 66, 74, 94, 100],
        "3:1 à 10:1": [0, 14, 14, 14, 16, 16, 20, 24, 28, 32, 38, 44, 50, 58, 66, 74, 82, 100],
        "> 10:1": [0, 14, 14, 16, 18, 22, 28, 36, 44, 50, 60, 68, 76, 86, 96, 100]
    },
    1000: {
        "< 3:1": [0, 14, 14, 14, 14, 14, 16, 18, 18, 20, 24, 26, 28, 32, 36, 40, 44, 54, 66, 78, 100],
        "3:1 à 10:1": [0, 14, 14, 14, 14, 16, 18, 20, 22, 24, 28, 30, 34, 38, 42, 46, 52, 62, 74, 86, 100],
        "> 10:1": [0, 14, 14, 16, 16, 18, 22, 26, 32, 38, 42, 48, 54, 60, 66, 72, 78, 92, 100]
    },
    2000: {
        "< 3:1": [0, 14, 14, 14, 14, 14, 14, 16, 16, 18, 18, 20, 22, 24, 26, 28, 30, 34, 40, 46, 66, 88, 100],
        "3:1 à 10:1": [0, 14, 14, 14, 14, 14, 16, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 40, 46, 54, 74, 98, 100],
        "> 10:1": [0, 14, 14, 14, 16, 16, 18, 22, 24, 28, 32, 36, 38, 42, 46, 50, 54, 64, 72, 80, 100]
    }
};

const tableauGroupesEF1F2AvecGicleurs = {
    10: {
        "< 3:1": [0, 8, 10, 18, 30, 46, 92, 100],
        "3:1 à 10:1": [0, 8, 12, 20, 34, 50, 96, 100],
        "> 10:1": [0, 10, 18, 32, 48, 68, 100]
    },
    15: {
        "< 3:1": [0, 8, 10, 14, 22, 32, 64, 100],
        "3:1 à 10:1": [0, 8, 10, 16, 26, 36, 68, 100],
        "> 10:1": [0, 10, 16, 26, 38, 52, 86, 100]
    },
    20: {
        "< 3:1": [0, 8, 8, 12, 18, 26, 50, 80, 100],
        "3:1 à 10:1": [0, 8, 10, 14, 22, 30, 54, 86, 100],
        "> 10:1": [0, 10, 14, 22, 34, 44, 72, 98, 100]
    },
    25: {
        "< 3:1": [0, 8, 8, 12, 16, 22, 40, 64, 96, 100],
        "3:1 à 10:1": [0, 8, 10, 12, 20, 26, 46, 70, 100],
        "> 10:1": [0, 8, 14, 20, 30, 38, 62, 90, 100]
    },
    30: {
        "< 3:1": [0, 8, 8, 10, 14, 20, 34, 54, 80, 100],
        "3:1 à 10:1": [0, 8, 8, 12, 18, 24, 40, 60, 86, 100],
        "> 10:1": [0, 8, 12, 18, 26, 36, 56, 78, 100]
    },
    40: {
        "< 3:1": [0, 8, 8, 10, 12, 16, 28, 44, 64, 88, 100],
        "3:1 à 10:1": [0, 8, 8, 10, 16, 20, 34, 48, 68, 92, 100],
        "> 10:1": [0, 8, 10, 16, 22, 30, 46, 66, 86, 100]
    },
    50: {
        "< 3:1": [0, 8, 8, 10, 12, 14, 24, 36, 52, 72, 92, 100],
        "3:1 à 10:1": [0, 8, 8, 10, 14, 18, 28, 42, 58, 76, 92, 100],
        "> 10:1": [0, 8, 10, 14, 20, 26, 40, 56, 76, 94, 100]
    },
    60: {
        "< 3:1": [0, 8, 8, 8, 10, 14, 22, 32, 44, 60, 78, 98, 100],
        "3:1 à 10:1": [0, 8, 8, 10, 12, 16, 26, 36, 50, 66, 84, 100],
        "> 10:1": [0, 8, 10, 12, 18, 24, 36, 50, 66, 84, 100]
    },
    80: {
        "< 3:1": [0, 8, 8, 8, 10, 12, 18, 26, 36, 48, 62, 78, 96, 100],
        "3:1 à 10:1": [0, 8, 8, 8, 12, 14, 22, 30, 40, 52, 66, 82, 100],
        "> 10:1": [0, 8, 8, 12, 16, 20, 30, 42, 54, 68, 84, 100]
    },
    100: {
        "< 3:1": [0, 8, 8, 8, 10, 12, 16, 22, 30, 40, 52, 66, 80, 96, 100],
        "3:1 à 10:1": [0, 8, 8, 8, 10, 14, 20, 26, 34, 44, 56, 70, 86, 100],
        "> 10:1": [0, 8, 8, 10, 14, 18, 26, 36, 46, 58, 72, 88, 100]
    },
    150: {
        "< 3:1": [0, 8, 8, 8, 8, 10, 12, 16, 22, 28, 36, 46, 58, 70, 84, 98, 100],
        "3:1 à 10:1": [0, 8, 8, 8, 10, 12, 16, 20, 26, 32, 40, 50, 62, 74, 88, 100],
        "> 10:1": [0, 8, 8, 10, 12, 16, 22, 28, 36, 46, 56, 68, 82, 96, 100]
    },
    200: {
        "< 3:1": [0, 8, 8, 8, 8, 10, 12, 14, 18, 22, 28, 36, 44, 54, 64, 76, 88, 100],
        "3:1 à 10:1": [0, 8, 8, 8, 8, 10, 14, 16, 20, 26, 32, 40, 48, 58, 68, 80, 94, 100],
        "> 10:1": [0, 8, 8, 8, 10, 14, 18, 24, 30, 36, 44, 54, 64, 76, 90, 100]
    },
    250: {
        "< 3:1": [0, 8, 8, 8, 8, 8, 10, 12, 16, 18, 24, 30, 36, 44, 52, 62, 72, 92, 100],
        "3:1 à 10:1": [0, 8, 8, 8, 8, 10, 12, 14, 18, 22, 26, 34, 40, 48, 56, 66, 78, 100],
        "> 10:1": [0, 8, 8, 8, 10, 12, 16, 20, 24, 30, 36, 44, 54, 62, 72, 84, 96, 100]
    },
    350: {
        "< 3:1": [0, 8, 8, 8, 8, 8, 10, 10, 12, 14, 18, 22, 26, 32, 38, 44, 52, 66, 82, 100],
        "3:1 à 10:1": [0, 8, 8, 8, 8, 8, 10, 12, 14, 16, 20, 24, 30, 34, 40, 48, 56, 70, 86, 100],
        "> 10:1": [0, 8, 8, 8, 8, 10, 14, 16, 20, 24, 28, 34, 40, 46, 54, 62, 72, 90, 100]
    },
    500: {
        "< 3:1": [0, 8, 8, 8, 8, 8, 8, 10, 10, 12, 14, 16, 20, 24, 28, 32, 36, 46, 58, 70, 100],
        "3:1 à 10:1": [0, 8, 8, 8, 8, 8, 10, 10, 12, 14, 16, 20, 24, 26, 30, 36, 40, 50, 62, 76, 100],
        "> 10:1": [0, 8, 8, 8, 8, 10, 12, 14, 16, 18, 22, 26, 30, 34, 40, 46, 52, 66, 80, 96, 100]
    },
    1000: {
        "< 3:1": [0, 8, 8, 8, 8, 8, 8, 8, 8, 10, 10, 12, 14, 16, 18, 20, 24, 30, 36, 44, 64, 88, 100],
        "3:1 à 10:1": [0, 8, 8, 8, 8, 8, 8, 8, 10, 10, 12, 14, 16, 18, 20, 24, 26, 32, 40, 48, 70, 94, 100],
        "> 10:1": [0, 8, 8, 8, 8, 8, 10, 10, 12, 14, 16, 18, 20, 24, 26, 30, 34, 42, 52, 62, 88, 100]
    },
    2000: {
        "< 3:1": [0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 10, 10, 12, 12, 14, 16, 20, 24, 28, 40, 54, 72, 92, 100],
        "3:1 à 10:1": [0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 10, 10, 12, 12, 14, 16, 18, 22, 26, 32, 44, 60, 78, 100],
        "> 10:1": [0, 8, 8, 8, 8, 8, 8, 8, 10, 10, 12, 12, 14, 16, 18, 20, 22, 28, 34, 40, 56, 74, 96, 100]
    }
};

// Tableaux pour 9.10.14
const tableau91014 = {
    "habitation": {
        distances: [0, 1.2, 1.5, 2.0, 4.0, 6.0, 8.0, 10.0, 12.0, 16.0, 20.0, 25.0],
        surfaces: {
            "30": [0, 7, 9, 12, 39, 88, 100, null, null, null, null, null],
            "40": [0, 7, 8, 11, 32, 69, 100, null, null, null, null, null],
            "50": [0, 7, 8, 10, 28, 57, 100, null, null, null, null, null],
            "100": [0, 7, 8, 9, 18, 34, 56, 84, 100, null, null, null],
            ">100": [0, 7, 7, 8, 12, 19, 28, 40, 55, 92, 100, null]
        }
    },
    "commercial": {
        distances: [0, 1.2, 1.5, 2.0, 4.0, 6.0, 8.0, 10.0, 12.0, 16.0, 20.0, 25.0],
        surfaces: {
            "30": [0, 4, 4, 6, 20, 44, 80, 100, null, null, null, null],
            "40": [0, 4, 4, 6, 16, 34, 61, 97, 100, null, null, null],
            "50": [0, 4, 4, 5, 14, 29, 50, 79, 100, null, null, null],
            "100": [0, 4, 4, 4, 9, 17, 28, 42, 60, 100, null, null],
            ">100": [0, 4, 4, 4, 6, 10, 14, 20, 27, 46, 70, 100]
        }
    }
};

// Tableaux pour 9.10.15
const tableau91015 = {
    distances: [0, 1.2, 1.5, 2.0, 4.0, 6.0, 8.0, 10.0, 12.0, 16.0, 20.0, 25.0],
    surfaces: {
        "30": [0, 7, 9, 12, 39, 88, 100, null, null, null, null, null],
        "40": [0, 7, 8, 11, 32, 69, 100, null, null, null, null, null],
        "50": [0, 7, 8, 10, 28, 57, 100, null, null, null, null, null],
        "100": [0, 7, 8, 9, 18, 34, 56, 84, 100, null, null, null],
        ">100": [0, 7, 7, 8, 12, 19, 28, 40, 55, 92, 100, null]
    }
};

// ===========================
// FONCTIONS UTILITAIRES
// ===========================

// Fonction de conversion métrique/impérial
function imperialToMetric(value, type = "length") {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return 0;
    
    if (type === "area") {
        return numValue * 0.092903; // pi² vers m²
    } else {
        return numValue * 0.3048; // pi vers m
    }
}

// Fonction de conversion métrique/impérial (inverse)
function metricToImperial(value, type = "length") {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return 0;
    
    if (type === "area") {
        return numValue / 0.092903; // m² vers pi²
    } else {
        return numValue / 0.3048; // m vers pi
    }
}

// Fonction pour changer le système de mesure
function toggleMeasurementSystem() {
    const isImperial = document.getElementById('measurementSystem').value === 'imperial';
    
    // Mettre à jour les étiquettes d'unités
    updateUnitLabels(isImperial);
    
    // Afficher/masquer les champs appropriés
    document.querySelectorAll('.metric-field').forEach(field => {
        field.style.display = isImperial ? 'none' : 'block';
    });
    
    document.querySelectorAll('.imperial-field').forEach(field => {
        field.style.display = isImperial ? 'block' : 'none';
    });
    
    // Configurer les paires de champs pour la synchronisation bidirectionnelle
    if (isImperial) {
        setImperialPlaceholders();
        setupMetricImperialInputPairs();
    } else {
        setMetricPlaceholders();
        setupMetricImperialInputPairs();
    }
    
    // Synchroniser la conversion des valeurs existantes
    syncExistingValues(isImperial);
}

// Fonction pour synchroniser les valeurs existantes lors du changement d'unité
function syncExistingValues(toImperial) {
    const inputPairs = [
        // Onglet CNB
        { metric: 'distance_cnb', imperial: 'distance_cnb_imperial', unit: 'length' },
        { metric: 'surface_cnb', imperial: 'surface_cnb_imperial', unit: 'area' },
        { metric: 'length_cnb', imperial: 'length_cnb_imperial', unit: 'length' },
        { metric: 'height_cnb', imperial: 'height_cnb_imperial', unit: 'length' },
        { metric: 'horizontal_spacing_cnb', imperial: 'horizontal_spacing_cnb_imperial', unit: 'length' },
        { metric: 'vertical_spacing_cnb', imperial: 'vertical_spacing_cnb_imperial', unit: 'length' },
        { metric: 'soffit_distance_cnb', imperial: 'soffit_distance_cnb_imperial', unit: 'length' },
        { metric: 'proposed_area_cnb', imperial: 'proposed_area_cnb_imperial', unit: 'area' },
        
        // Onglet 9.10.14
        { metric: 'distance_91014', imperial: 'distance_91014_imperial', unit: 'length' },
        { metric: 'surface_91014', imperial: 'surface_91014_imperial', unit: 'area' },
        { metric: 'horizontal_spacing_91014', imperial: 'horizontal_spacing_91014_imperial', unit: 'length' },
        { metric: 'vertical_spacing_91014', imperial: 'vertical_spacing_91014_imperial', unit: 'length' },
        { metric: 'soffit_distance_91014', imperial: 'soffit_distance_91014_imperial', unit: 'length' },
        { metric: 'proposed_area_91014', imperial: 'proposed_area_91014_imperial', unit: 'area' },
        
        // Onglet 9.10.15
        { metric: 'distance_91015', imperial: 'distance_91015_imperial', unit: 'length' },
        { metric: 'surface_91015', imperial: 'surface_91015_imperial', unit: 'area' },
        { metric: 'horizontal_spacing_91015', imperial: 'horizontal_spacing_91015_imperial', unit: 'length' },
        { metric: 'vertical_spacing_91015', imperial: 'vertical_spacing_91015_imperial', unit: 'length' },
        { metric: 'soffit_distance_91015', imperial: 'soffit_distance_91015_imperial', unit: 'length' },
        { metric: 'proposed_area_91015', imperial: 'proposed_area_91015_imperial', unit: 'area' }
    ];

    inputPairs.forEach(pair => {
        const sourceElement = document.getElementById(toImperial ? pair.metric : pair.imperial);
        const targetElement = document.getElementById(toImperial ? pair.imperial : pair.metric);
        
        if (sourceElement && targetElement && sourceElement.value) {
            const sourceValue = parseFloat(sourceElement.value);
            if (!isNaN(sourceValue)) {
                let convertedValue;
                if (toImperial) {
                    convertedValue = metricToImperial(sourceValue, pair.unit);
                } else {
                    convertedValue = imperialToMetric(sourceValue, pair.unit);
                }
                targetElement.value = convertedValue > 1 ? convertedValue.toFixed(2) : convertedValue.toFixed(2);
            }
        }
    });
}

// Fonction pour configurer les paires d'entrées métriques/impériales
function setupMetricImperialInputPairs() {
    // Liste des paires de champs (métrique et impérial)
    const inputPairs = [
        // Onglet CNB
        { metric: 'distance_cnb', imperial: 'distance_cnb_imperial', unit: 'length' },
        { metric: 'surface_cnb', imperial: 'surface_cnb_imperial', unit: 'area' },
        { metric: 'length_cnb', imperial: 'length_cnb_imperial', unit: 'length' },
        { metric: 'height_cnb', imperial: 'height_cnb_imperial', unit: 'length' },
        { metric: 'horizontal_spacing_cnb', imperial: 'horizontal_spacing_cnb_imperial', unit: 'length' },
        { metric: 'vertical_spacing_cnb', imperial: 'vertical_spacing_cnb_imperial', unit: 'length' },
        { metric: 'soffit_distance_cnb', imperial: 'soffit_distance_cnb_imperial', unit: 'length' },
        { metric: 'proposed_area_cnb', imperial: 'proposed_area_cnb_imperial', unit: 'area' },
        
        // Onglet 9.10.14
        { metric: 'distance_91014', imperial: 'distance_91014_imperial', unit: 'length' },
        { metric: 'surface_91014', imperial: 'surface_91014_imperial', unit: 'area' },
        { metric: 'horizontal_spacing_91014', imperial: 'horizontal_spacing_91014_imperial', unit: 'length' },
        { metric: 'vertical_spacing_91014', imperial: 'vertical_spacing_91014_imperial', unit: 'length' },
        { metric: 'soffit_distance_91014', imperial: 'soffit_distance_91014_imperial', unit: 'length' },
        { metric: 'proposed_area_91014', imperial: 'proposed_area_91014_imperial', unit: 'area' },
        
        // Onglet 9.10.15
        { metric: 'distance_91015', imperial: 'distance_91015_imperial', unit: 'length' },
        { metric: 'surface_91015', imperial: 'surface_91015_imperial', unit: 'area' },
        { metric: 'horizontal_spacing_91015', imperial: 'horizontal_spacing_91015_imperial', unit: 'length' },
        { metric: 'vertical_spacing_91015', imperial: 'vertical_spacing_91015_imperial', unit: 'length' },
        { metric: 'soffit_distance_91015', imperial: 'soffit_distance_91015_imperial', unit: 'length' },
        { metric: 'proposed_area_91015', imperial: 'proposed_area_91015_imperial', unit: 'area' }
    ];

    // Fonction pour configurer la synchronisation bidirectionnelle
    inputPairs.forEach(pair => {
        const metricElement = document.getElementById(pair.metric);
        const imperialElement = document.getElementById(pair.imperial);
        
        if (metricElement && imperialElement) {
            // Synchronisation métrique vers impérial
            metricElement.addEventListener('input', function() {
                const metricValue = parseFloat(this.value);
                if (!isNaN(metricValue)) {
                    const imperialValue = metricToImperial(metricValue, pair.unit);
                    imperialElement.value = imperialValue > 1 ? imperialValue.toFixed(2) : imperialValue.toFixed(2);
                }
            });
            
            // Synchronisation impérial vers métrique
            imperialElement.addEventListener('input', function() {
                const imperialValue = parseFloat(this.value);
                if (!isNaN(imperialValue)) {
                    const metricValue = imperialToMetric(imperialValue, pair.unit);
                    metricElement.value = metricValue > 1 ? metricValue.toFixed(2) : metricValue.toFixed(2);
                }
            });
        }
    });
}

// Fonction pour déterminer la catégorie du rapport L/H
function determinerRapportLH(longueur, hauteur) {
    const rapportLH = longueur / hauteur;
    const rapportHL = hauteur / longueur;
    const maxRapport = Math.max(rapportLH, rapportHL);
    
    if (maxRapport < 3) return "< 3:1";
    if (maxRapport <= 10) return "3:1 à 10:1";
    return "> 10:1";
}

// Fonction pour trouver les valeurs encadrantes dans un tableau - MODIFIÉE pour extrapolation
function trouverValeurEncadrantes(valeur, tableau) {
    // Cas particulier: valeur exactement 0
    if (valeur === 0) {
        return { inferieure: 0, superieure: 0, extrapolation: false };
    }
    
    // Cas où la valeur est inférieure au premier élément non-nul
    let premierElementNonNul = tableau.find(e => e > 0);
    if (valeur > 0 && valeur < premierElementNonNul) {
        return { 
            inferieure: 0, 
            superieure: premierElementNonNul, 
            extrapolation: true,
            valeurExacte: valeur
        };
    }
    
    // Si la valeur est inférieure au premier élément (et non nulle)
    if (valeur <= tableau[0]) {
        return { inferieure: tableau[0], superieure: tableau[0], extrapolation: false };
    }
    
    // Si la valeur est supérieure au dernier élément
    if (valeur >= tableau[tableau.length - 1]) {
        return { inferieure: tableau[tableau.length - 1], superieure: tableau[tableau.length - 1], extrapolation: false };
    }
    
    // Rechercher les bornes encadrantes
    for (let i = 0; i < tableau.length - 1; i++) {
        if (valeur >= tableau[i] && valeur <= tableau[i + 1]) {
            return { inferieure: tableau[i], superieure: tableau[i + 1], extrapolation: false };
        }
    }
    
    // En cas d'échec (ne devrait jamais arriver si les vérifications ci-dessus sont correctes)
    return { inferieure: tableau[0], superieure: tableau[1], extrapolation: false };
}

// Fonction pour l'extrapolation des valeurs entre 0 et la première valeur non-nulle
function extrapolerPourcentage(pourcentage0, pourcentageMin, distanceMin, distanceExacte) {
    // Avec distanceExacte entre 0 et distanceMin
    // Pourcentage à 0 est généralement 0 dans les tableaux
    const pente = (pourcentageMin - pourcentage0) / distanceMin;
    const pourcentageExtrapole = pourcentage0 + (pente * distanceExacte);
    return Math.max(0, pourcentageExtrapole); // Ne jamais retourner un pourcentage négatif
}

// Fonction pour l'extrapolation des valeurs pour des surfaces inférieures au minimum du tableau
function extrapolerPourcentageSurface(pourcentageSurfaceMin, pourcentageSurfaceSupMin, surfaceSupMin, surfaceReelle) {
    // Calcul de la tendance entre les deux surfaces minimales du tableau
    const tendance = pourcentageSurfaceMin - pourcentageSurfaceSupMin;
    const facteur = surfaceSupMin / surfaceReelle;
    return pourcentageSurfaceMin + tendance * (facteur - 1);
}

// Fonction MODIFIÉE pour calculer un pourcentage à partir de tableaux 9.10.14/9.10.15
function calculateFromTable(tableau, distanceLimitative, surfaceFacade, avecGicleurs = false, avecMajoration = false) {
    const distances = tableau.distances;
    // MODIFICATION CLÉE: Filtrer uniquement les surfaces numériques pour l'extrapolation
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
    
    // Trouver les surfaces encadrantes - SECTION MODIFIÉE
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
        // MODIFICATION PRINCIPALE: Pour les surfaces > 100m², ne pas extrapoler au-delà
        // Utiliser directement les valeurs ">100" du tableau
        surfaceInferieure = surfacesDisponibles[surfacesDisponibles.length - 1];
        surfaceSuperieure = surfaceFacade; // Utilisé pour la formule mais ne sera pas extrapolé
        keyInf = surfacesDisponibles[surfacesDisponibles.length - 1].toString();
        keySup = ">100";
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
            // Extrapolation de distance uniquement (surface dans le tableau)
            pourcentageDistanceMin = tableau.surfaces[keyInf][distanceSuperieureIndex];
        } else {
            // Extrapolation de distance et interpolation de surface - SECTION MODIFIÉE
            const pourcentageDistMinSurfInf = tableau.surfaces[keyInf][distanceSuperieureIndex];
            const pourcentageDistMinSurfSup = tableau.surfaces[keySup][distanceSuperieureIndex];
            
            // MODIFICATION: Pour keySup = ">100", ne pas interpoler mais utiliser directement la valeur
            if (keySup === ">100") {
                pourcentageDistanceMin = pourcentageDistMinSurfSup; // Utiliser directement la valeur ">100"
            } else {
                // Interpolation normale entre les surfaces à la distance minimale
                pourcentageDistanceMin = pourcentageDistMinSurfSup + 
                    ((surfaceFacade - surfaceInferieure) / (surfaceSuperieure - surfaceInferieure)) * 
                    (pourcentageDistMinSurfInf - pourcentageDistMinSurfSup);
            }
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
            surfaceSuperieure, // Surface min du tableau
            surfaceFacade
        );
        
        // Appliquer la majoration si nécessaire
        if (avecMajoration || avecGicleurs) {
            pourcentageFinal = Math.min(100, pourcentageFinal * 2);
        }
        
        return Math.max(0, Math.min(100, pourcentageFinal));
    }
    
    // ÉTAPE 1: Interpolation selon la DL inférieure - SECTION MODIFIÉE
    let pourcentageDistanceInferieure;
    
    if (keyInf === keySup) {
        pourcentageDistanceInferieure = tableau.surfaces[keyInf][distanceInferieureIndex];
    } else {
        const pourcentageDistInfSurfInf = tableau.surfaces[keyInf][distanceInferieureIndex];
        const pourcentageDistInfSurfSup = tableau.surfaces[keySup][distanceInferieureIndex];
        
        // MODIFICATION: Pour keySup = ">100", ne pas interpoler mais utiliser directement la valeur
        if (keySup === ">100") {
            pourcentageDistanceInferieure = pourcentageDistInfSurfSup; // Utiliser directement la valeur ">100"
        } else {
            // Formule MODIFIÉE selon la méthodologie de référence
            pourcentageDistanceInferieure = pourcentageDistInfSurfSup + 
                ((surfaceFacade - surfaceInferieure) / (surfaceSuperieure - surfaceInferieure)) * 
                (pourcentageDistInfSurfInf - pourcentageDistInfSurfSup);
        }
    }

    // Si les distances sont identiques, pas besoin d'interpolation complexe
    if (distanceInferieure === distanceSuperieure) {
        let resultat = pourcentageDistanceInferieure;
        
        // Appliquer la majoration si nécessaire (briques de verre, verre armé ou gicleurs)
        if (avecMajoration || avecGicleurs) {
            resultat = Math.min(100, resultat * 2);
        }
        
        return resultat;
    }
    
    // ÉTAPE 2: Interpolation selon la DL supérieure - SECTION MODIFIÉE
    let pourcentageDistanceSuperieure;
    
    if (keyInf === keySup) {
        pourcentageDistanceSuperieure = tableau.surfaces[keyInf][distanceSuperieureIndex];
    } else {
        const pourcentageDistSupSurfInf = tableau.surfaces[keyInf][distanceSuperieureIndex];
        const pourcentageDistSupSurfSup = tableau.surfaces[keySup][distanceSuperieureIndex];
        
        // MODIFICATION: Pour keySup = ">100", ne pas interpoler mais utiliser directement la valeur
        if (keySup === ">100") {
            pourcentageDistanceSuperieure = pourcentageDistSupSurfSup; // Utiliser directement la valeur ">100"
        } else {
            // Formule MODIFIÉE selon la méthodologie de référence
            pourcentageDistanceSuperieure = pourcentageDistSupSurfSup + 
                ((surfaceFacade - surfaceInferieure) / (surfaceSuperieure - surfaceInferieure)) * 
                (pourcentageDistSupSurfInf - pourcentageDistSupSurfSup);
        }
    }
    
    // ÉTAPE 3: Interpolation finale entre les deux résultats d'interpolation précédents
    let pourcentageFinal = pourcentageDistanceInferieure + 
        ((distanceLimitative - distanceInferieure) / (distanceSuperieure - distanceInferieure)) * 
        (pourcentageDistanceSuperieure - pourcentageDistanceInferieure);
    
    // Appliquer la formule spécifique pour briques de verre ou verre armé
    if (avecMajoration || avecGicleurs) {
        pourcentageFinal = Math.min(100, pourcentageFinal * 2);
    }
    
    return Math.max(0, Math.min(100, pourcentageFinal));
}

// Fonction pour extrapoler les très petites FDR avec DL normale
function extrapolerFDRPetiteDLNormale910x(tableau, distanceLimitative, surfaceFacade, avecGicleurs, avecMajoration) {
    const distances = tableau.distances;
    const surfacesDisponibles = Object.keys(tableau.surfaces).filter(s => s !== ">100").map(Number);
    
    // Trouver les distances encadrantes
    const distancesEncadrantes = trouverValeurEncadrantes(distanceLimitative, distances);
    const distanceInferieure = distancesEncadrantes.inferieure;
    const distanceSuperieure = distancesEncadrantes.superieure;
    const distanceInferieureIndex = distances.indexOf(distanceInferieure);
    const distanceSuperieureIndex = distances.indexOf(distanceSuperieure);
    
    // Utiliser les deux plus petites surfaces du tableau pour l'extrapolation
    const surface1 = surfacesDisponibles[0]; // 30m²
    const surface2 = surfacesDisponibles[1]; // 40m²
    
    // ÉTAPE 1: Extrapolation selon la DL inférieure
    const pourcentageSurf1DistInf = tableau.surfaces[surface1.toString()][distanceInferieureIndex];
    const pourcentageSurf2DistInf = tableau.surfaces[surface2.toString()][distanceInferieureIndex];
    
    // Extrapolation pour surface plus petite
    const pourcentageDistanceInferieure = extrapolerPourcentageSurface(
        pourcentageSurf1DistInf,
        pourcentageSurf2DistInf,
        surface1,
        surfaceFacade
    );
    
    // Si les distances sont identiques, retourner le résultat
    if (distanceInferieure === distanceSuperieure) {
        let resultat = pourcentageDistanceInferieure;
        
        if (avecMajoration || avecGicleurs) {
            resultat = Math.min(100, resultat * 2);
        }
        
        return Math.max(0, Math.min(100, resultat));
    }
    
    // ÉTAPE 2: Extrapolation selon la DL supérieure
    const pourcentageSurf1DistSup = tableau.surfaces[surface1.toString()][distanceSuperieureIndex];
    const pourcentageSurf2DistSup = tableau.surfaces[surface2.toString()][distanceSuperieureIndex];
    
    const pourcentageDistanceSuperieure = extrapolerPourcentageSurface(
        pourcentageSurf1DistSup,
        pourcentageSurf2DistSup,
        surface1,
        surfaceFacade
    );
    
    // ÉTAPE 3: Interpolation entre les distances
    let pourcentageFinal = pourcentageDistanceInferieure + 
        ((distanceLimitative - distanceInferieure) / (distanceSuperieure - distanceInferieure)) * 
        (pourcentageDistanceSuperieure - pourcentageDistanceInferieure);
    
    if (avecMajoration || avecGicleurs) {
        pourcentageFinal = Math.min(100, pourcentageFinal * 2);
    }
    
    return Math.max(0, Math.min(100, pourcentageFinal));
}

// ===========================
// FONCTIONS DE CALCUL PRINCIPALES
// ===========================

// Fonction principale pour les calculs CNB
function calculateCNB() {
    // Déterminer le système de mesure et récupérer les valeurs
    const isImperial = document.getElementById('measurementSystem').value === 'imperial';
    
    let limitingDistance, surface, length, height;
    
    if (isImperial) {
        limitingDistance = imperialToMetric(document.getElementById('distance_cnb_imperial').value);
        surface = imperialToMetric(document.getElementById('surface_cnb_imperial').value, "area");
        length = imperialToMetric(document.getElementById('length_cnb_imperial').value);
        height = imperialToMetric(document.getElementById('height_cnb_imperial').value);
    } else {
        limitingDistance = parseFloat(document.getElementById('distance_cnb').value);
        surface = parseFloat(document.getElementById('surface_cnb').value);
        length = parseFloat(document.getElementById('length_cnb').value);
        height = parseFloat(document.getElementById('height_cnb').value);
    }
    
    const usage = document.getElementById('usage_cnb').value;
    const sprinklersOption = document.getElementById('sprinklers_cnb').value;
    const response = document.getElementById('response_cnb').checked;
    
    // Validation des entrées
    if (isNaN(limitingDistance) || isNaN(surface) || isNaN(length) || isNaN(height)) {
        document.getElementById('cnb-result').innerHTML = '<div class="error">Veuillez remplir tous les champs numériques requis.</div>';
        return;
    }
    
    if (limitingDistance < 0 || surface <= 0 || length <= 0 || height <= 0) {
        document.getElementById('cnb-result').innerHTML = '<div class="error">Les valeurs doivent être positives (surface, longueur et hauteur > 0).</div>';
        return;
    }
    
    // Ajustement pour le délai d'intervention
    if (response) {
        limitingDistance = limitingDistance / 2;
    }
    
    // Déterminer le rapport L/H
    const rapportLH = determinerRapportLH(length, height);
    
    // Sélectionner le tableau approprié
    const avecGicleurs = sprinklersOption === "complete";
    let tableauUtilise;
    
    if (usage === "groupes_ABCDF") {
        tableauUtilise = avecGicleurs ? tableauGroupesABCDFAvecGicleurs : tableauGroupesABCDF;
    } else {
        tableauUtilise = avecGicleurs ? tableauGroupesEF1F2AvecGicleurs : tableauGroupesEF1F2;
    }
    
    // Récupérer les surfaces disponibles dans le tableau
    const surfacesDisponibles = Object.keys(tableauUtilise).map(Number).sort((a, b) => a - b);
    
    // Trouver les surfaces encadrantes
    let surfaceInferieure, surfaceSuperieure;
    
    if (surface <= surfacesDisponibles[0]) {
        surfaceInferieure = surfaceSuperieure = surfacesDisponibles[0];
    } else if (surface >= surfacesDisponibles[surfacesDisponibles.length - 1]) {
        surfaceInferieure = surfaceSuperieure = surfacesDisponibles[surfacesDisponibles.length - 1];
    } else {
        for (let i = 0; i < surfacesDisponibles.length - 1; i++) {
            if (surface > surfacesDisponibles[i] && surface <= surfacesDisponibles[i + 1]) {
                surfaceInferieure = surfacesDisponibles[i];
                surfaceSuperieure = surfacesDisponibles[i + 1];
                break;
            }
        }
    }
    
    // Calculer le pourcentage par interpolation/extrapolation
    let pourcentage;
    
    if (surfaceInferieure === surfaceSuperieure) {
        // Pas d'interpolation nécessaire pour la surface
        const tableauSurface = tableauUtilise[surfaceInferieure][rapportLH];
        const distancesRef = [0, 1.2, 1.5, 2.0, 2.5, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 18, 20, 25, 30, 35, 40, 45, 50];
        
        // Trouver les distances encadrantes
        const distancesEncadrantes = trouverValeurEncadrantes(limitingDistance, distancesRef);
        const distanceInferieure = distancesEncadrantes.inferieure;
        const distanceSuperieure = distancesEncadrantes.superieure;
        const distanceInferieureIndex = distancesRef.indexOf(distanceInferieure);
        const distanceSuperieureIndex = distancesRef.indexOf(distanceSuperieure);
        
        if (distanceInferieure === distanceSuperieure) {
            pourcentage = tableauSurface[distanceInferieureIndex];
        } else {
            const pourcentageInferieur = tableauSurface[distanceInferieureIndex];
            const pourcentageSuperieur = tableauSurface[distanceSuperieureIndex];
            pourcentage = pourcentageInferieur + 
                ((limitingDistance - distanceInferieure) / (distanceSuperieure - distanceInferieure)) * 
                (pourcentageSuperieur - pourcentageInferieur);
        }
    } else {
        // Interpolation entre deux surfaces
        const tableauSurfaceInf = tableauUtilise[surfaceInferieure][rapportLH];
        const tableauSurfaceSup = tableauUtilise[surfaceSuperieure][rapportLH];
        const distancesRef = [0, 1.2, 1.5, 2.0, 2.5, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 18, 20, 25, 30, 35, 40, 45, 50];
        
        // Interpolation pour chaque distance, puis interpolation finale
        const distancesEncadrantes = trouverValeurEncadrantes(limitingDistance, distancesRef);
        const distanceInferieure = distancesEncadrantes.inferieure;
        const distanceSuperieure = distancesEncadrantes.superieure;
        const distanceInferieureIndex = distancesRef.indexOf(distanceInferieure);
        const distanceSuperieureIndex = distancesRef.indexOf(distanceSuperieure);
        
        let pourcentageDistanceInferieure, pourcentageDistanceSuperieure;
        
        if (distanceInferieure === distanceSuperieure) {
            const pourcentageSurfInf = tableauSurfaceInf[distanceInferieureIndex];
            const pourcentageSurfSup = tableauSurfaceSup[distanceInferieureIndex];
            pourcentage = pourcentageSurfSup + 
                ((surface - surfaceInferieure) / (surfaceSuperieure - surfaceInferieure)) * 
                (pourcentageSurfInf - pourcentageSurfSup);
        } else {
            // Interpolation pour distance inférieure
            const pourcentageSurfInfDistInf = tableauSurfaceInf[distanceInferieureIndex];
            const pourcentageSurfSupDistInf = tableauSurfaceSup[distanceInferieureIndex];
            pourcentageDistanceInferieure = pourcentageSurfSupDistInf + 
                ((surface - surfaceInferieure) / (surfaceSuperieure - surfaceInferieure)) * 
                (pourcentageSurfInfDistInf - pourcentageSurfSupDistInf);
            
            // Interpolation pour distance supérieure
            const pourcentageSurfInfDistSup = tableauSurfaceInf[distanceSuperieureIndex];
            const pourcentageSurfSupDistSup = tableauSurfaceSup[distanceSuperieureIndex];
            pourcentageDistanceSuperieure = pourcentageSurfSupDistSup + 
                ((surface - surfaceInferieure) / (surfaceSuperieure - surfaceInferieure)) * 
                (pourcentageSurfInfDistSup - pourcentageSurfSupDistSup);
            
            // Interpolation finale entre les distances
            pourcentage = pourcentageDistanceInferieure + 
                ((limitingDistance - distanceInferieure) / (distanceSuperieure - distanceInferieure)) * 
                (pourcentageDistanceSuperieure - pourcentageDistanceInferieure);
        }
    }
    
    // Appliquer la majoration pour gicleurs partiels
    if (sprinklersOption === "partial") {
        pourcentage = Math.min(100, pourcentage * 2);
    }
    
    // Calculer la surface maximale de baies non protégées
    const surfaceMaxBaies = surface * (pourcentage / 100);
    
    // Déterminer si une extrapolation a été utilisée
    const surfacesTableau = surfacesDisponibles;
    const distancesTableau = [0, 1.2, 1.5, 2.0, 2.5, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 18, 20, 25, 30, 35, 40, 45, 50];
    const premiereDLNonNulle = distancesTableau.find(d => d > 0);
    
    let extrapolationInfo = "";
    if (surface < surfacesTableau[0] || surface > surfacesTableau[surfacesTableau.length - 1] || 
        (limitingDistance > 0 && limitingDistance < premiereDLNonNulle)) {
        extrapolationInfo = `
            <div class="extrapolation-notice">
                <strong>Notice d'extrapolation:</strong><br>
                ${surface < surfacesTableau[0] ? "La surface de la façade de rayonnement (" + surface.toFixed(2) + " m²) est inférieure à la valeur minimale du tableau de référence (" + surfacesTableau[0] + " m²).<br>" : ""}
                ${surface > surfacesTableau[surfacesTableau.length - 1] ? "La surface de la façade de rayonnement (" + surface.toFixed(2) + " m²) est supérieure à la valeur maximale du tableau de référence (" + surfacesTableau[surfacesTableau.length - 1] + " m²).<br>" : ""}
                ${limitingDistance > 0 && limitingDistance < premiereDLNonNulle ? "La distance limitative (" + limitingDistance.toFixed(2) + " m) est inférieure à la valeur minimale non-nulle du tableau de référence (" + premiereDLNonNulle + " m).<br>" : ""}
                Une extrapolation a été effectuée pour obtenir un résultat plus précis.
            </div>
        `;
        
        // Ajout de détails sur la méthode d'extrapolation pour le cas spécial
        if (surface < surfacesTableau[0] && limitingDistance >= premiereDLNonNulle) {
            extrapolationInfo += `
                <div class="extrapolation-details">
                    <strong>Méthode d'extrapolation utilisée:</strong><br>
                    Pour ce cas de figure particulier (surface < ${surfacesTableau[0]} m² et DL ≥ ${premiereDLNonNulle} m),
                    le calcul suit les trois étapes suivantes:
                    <br>1. Interpolation selon la 1ère surface de référence (${surfacesTableau[0]} m²)
                    <br>2. Interpolation selon la 2ème surface de référence (${surfacesTableau[1]} m²)
                    <br>3. Extrapolation à partir de ces deux valeurs pour la surface réelle (${surface.toFixed(2)} m²)
                </div>
            `;
        }
    }
    
    // Afficher les résultats
    let resultHTML = `
        <div class="calculation-data">
            <strong>Données de calcul :</strong><br>
            ${response ? "Distance limitative ajustée : " + (isImperial ? metricToImperial(limitingDistance).toFixed(2) + " pi" : limitingDistance.toFixed(2) + " m") + "<br>" : ""}
            Type d'usage : ${usage === "groupes_ABCDF" ? "Groupes A, B (div. 3), C, D et F (div. 3)" : "Groupes E, F1 et F2"}<br>
            Surface totale de la façade : ${isImperial ? metricToImperial(surface, "area").toFixed(2) + " pi²" : surface.toFixed(2) + " m²"}<br>
            Longueur : ${isImperial ? metricToImperial(length).toFixed(2) + " pi" : length.toFixed(2) + " m"}<br>
            Hauteur : ${isImperial ? metricToImperial(height).toFixed(2) + " pi" : height.toFixed(2) + " m"}<br>
            Rapport L/H ou H/L : ${rapportLH}<br>
            Protection par gicleurs : ${sprinklersOption === "complete" ? "Complète" : sprinklersOption === "partial" ? "Partielle" : "Aucune"}<br>
        </div>
        
        <div class="results">
            <strong>Résultats :</strong><br>
            Pourcentage maximal de baies non protégées : ${pourcentage.toFixed(2)}%<br>
            Surface maximale de baies non protégées : ${isImperial ? metricToImperial(surfaceMaxBaies, "area").toFixed(2) + " pi²" : surfaceMaxBaies.toFixed(2) + " m²"}
        </div>
        
        ${extrapolationInfo}
    `;
    
    document.getElementById('cnb-result').innerHTML = resultHTML;
}

// Fonction principale pour les calculs 9.10.14
function calculate91014() {
    // Déterminer le système de mesure et récupérer les valeurs
    const isImperial = document.getElementById('measurementSystem').value === 'imperial';
    
    let limitingDistance, surface;
    
    if (isImperial) {
        limitingDistance = imperialToMetric(document.getElementById('distance_91014_imperial').value);
        surface = imperialToMetric(document.getElementById('surface_91014_imperial').value, "area");
    } else {
        limitingDistance = parseFloat(document.getElementById('distance_91014').value);
        surface = parseFloat(document.getElementById('surface_91014').value);
    }
    
    const usage = document.getElementById('usage_91014').value;
    const sprinklersOption = document.getElementById('sprinklers_91014').value;
    const glassBrick = document.getElementById('glass_brick_91014').checked;
    const response = document.getElementById('response_91014').checked;
    
    // Validation des entrées
    if (isNaN(limitingDistance) || isNaN(surface)) {
        document.getElementById('method91014-result').innerHTML = '<div class="error">Veuillez remplir tous les champs numériques requis.</div>';
        return;
    }
    
    if (limitingDistance < 0 || surface <= 0) {
        document.getElementById('method91014-result').innerHTML = '<div class="error">Les valeurs doivent être positives (surface > 0).</div>';
        return;
    }
    
    // Ajustement pour le délai d'intervention
    if (response) {
        limitingDistance = limitingDistance / 2;
    }
    
    // Sélectionner le tableau approprié
    const tableau = tableau91014[usage];
    
    // Calculer le pourcentage en utilisant la fonction modifiée
    const avecGicleurs = sprinklersOption === "complete";
    const avecMajoration = glassBrick || sprinklersOption === "partial";
    
    const pourcentage = calculateFromTable(tableau, limitingDistance, surface, avecGicleurs, avecMajoration);
    
    // Calculer la surface maximale de baies non protégées
    const surfaceMaxBaies = surface * (pourcentage / 100);
    
    // Déterminer si une extrapolation a été utilisée
    const surfacesDisponibles = Object.keys(tableau.surfaces).filter(s => s !== ">100").map(Number);
    const premiereDLNonNulle = tableau.distances.find(d => d > 0);
    
    let extrapolationInfo = "";
    if (surface < surfacesDisponibles[0] || surface > surfacesDisponibles[surfacesDisponibles.length - 1] || 
        (limitingDistance > 0 && limitingDistance < premiereDLNonNulle)) {
        extrapolationInfo = `
            <div class="extrapolation-notice">
                <strong>Notice d'extrapolation:</strong><br>
                ${surface < surfacesDisponibles[0] ? "La surface de la façade de rayonnement (" + surface.toFixed(2) + " m²) est inférieure à la valeur minimale du tableau de référence (" + surfacesDisponibles[0] + " m²).<br>" : ""}
                ${limitingDistance > 0 && limitingDistance < premiereDLNonNulle ? "La distance limitative (" + limitingDistance.toFixed(2) + " m) est inférieure à la valeur minimale non-nulle du tableau de référence (" + premiereDLNonNulle + " m).<br>" : ""}
                Une extrapolation a été effectuée pour obtenir un résultat plus précis.
            </div>
        `;
        
        // Ajout de détails sur la méthode d'extrapolation pour le cas spécial
        if (surface < surfacesDisponibles[0] && limitingDistance >= premiereDLNonNulle) {
            extrapolationInfo += `
                <div class="extrapolation-details">
                    <strong>Méthode d'extrapolation utilisée:</strong><br>
                    Pour ce cas de figure particulier (surface < ${surfacesDisponibles[0]} m² et DL ≥ ${premiereDLNonNulle} m),
                    le calcul suit les trois étapes suivantes:
                    <br>1. Interpolation selon la 1ère surface de référence (${surfacesDisponibles[0]} m²)
                    <br>2. Interpolation selon la 2ème surface de référence (${surfacesDisponibles[1]} m²)
                    <br>3. Extrapolation à partir de ces deux valeurs pour la surface réelle (${surface.toFixed(2)} m²)
                </div>
            `;
        }
    }

    // Afficher les résultats
    let resultHTML = `
        <div class="calculation-data">
            <strong>Données de calcul :</strong><br>
            ${response ? "Distance limitative ajustée : " + (isImperial ? metricToImperial(limitingDistance).toFixed(2) + " pi" : limitingDistance.toFixed(2) + " m") + "<br>" : ""}
            Type d'usage : ${usage === "habitation" ? "Habitation, établissement d'affaires et établissement industriel à risques faibles" : "Établissement commercial et établissement industriel à risques moyens"}<br>
            Surface totale de la façade : ${isImperial ? metricToImperial(surface, "area").toFixed(2) + " pi²" : surface.toFixed(2) + " m²"}<br>
            Protection par gicleurs : ${sprinklersOption === "complete" ? "Complète" : sprinklersOption === "partial" ? "Partielle" : "Aucune"}<br>
            ${glassBrick ? "Majoration pour briques de verre/verre armé appliquée (x2)<br>" : ""}
        </div>
        
        <div class="results">
            <strong>Résultats :</strong><br>
            Pourcentage maximal de baies non protégées : ${pourcentage.toFixed(2)}%<br>
            Surface maximale de baies non protégées : ${isImperial ? metricToImperial(surfaceMaxBaies, "area").toFixed(2) + " pi²" : surfaceMaxBaies.toFixed(2) + " m²"}
        </div>
        
        ${extrapolationInfo}
    `;
    
    document.getElementById('method91014-result').innerHTML = resultHTML;
}

// Fonction principale pour les calculs 9.10.15
function calculate91015() {
    // Déterminer le système de mesure et récupérer les valeurs
    const isImperial = document.getElementById('measurementSystem').value === 'imperial';
    
    let limitingDistance, surface;
    
    if (isImperial) {
        limitingDistance = imperialToMetric(document.getElementById('distance_91015_imperial').value);
        surface = imperialToMetric(document.getElementById('surface_91015_imperial').value, "area");
    } else {
        limitingDistance = parseFloat(document.getElementById('distance_91015').value);
        surface = parseFloat(document.getElementById('surface_91015').value);
    }
    
    const sprinklersOption = document.getElementById('sprinklers_91015').value;
    const glassBrick = document.getElementById('glass_brick_91015').checked;
    const response = document.getElementById('response_91015').checked;
    
    // Validation des entrées
    if (isNaN(limitingDistance) || isNaN(surface)) {
        document.getElementById('method91015-result').innerHTML = '<div class="error">Veuillez remplir tous les champs numériques requis.</div>';
        return;
    }
    
    if (limitingDistance < 0 || surface <= 0) {
        document.getElementById('method91015-result').innerHTML = '<div class="error">Les valeurs doivent être positives (surface > 0).</div>';
        return;
    }
    
    // Ajustement pour le délai d'intervention
    if (response) {
        limitingDistance = limitingDistance / 2;
    }
    
    // Calculer le pourcentage en utilisant la fonction modifiée
    const avecGicleurs = sprinklersOption === "complete";
    const avecMajoration = glassBrick || sprinklersOption === "partial";
    
    const pourcentage = calculateFromTable(tableau91015, limitingDistance, surface, avecGicleurs, avecMajoration);
    
    // Calculer la surface maximale de baies vitrées
    const surfaceMaxBaies = surface * (pourcentage / 100);
    
    // Déterminer si une extrapolation a été utilisée
    const surfacesDisponibles = Object.keys(tableau91015.surfaces).filter(s => s !== ">100").map(Number);
    const premiereDLNonNulle = tableau91015.distances.find(d => d > 0);
    
    let extrapolationInfo = "";
    if (surface < surfacesDisponibles[0] || surface > surfacesDisponibles[surfacesDisponibles.length - 1] || 
        (limitingDistance > 0 && limitingDistance < premiereDLNonNulle)) {
        extrapolationInfo = `
            <div class="extrapolation-notice">
                <strong>Notice d'extrapolation:</strong><br>
                ${surface < surfacesDisponibles[0] ? "La surface de la façade de rayonnement (" + surface.toFixed(2) + " m²) est inférieure à la valeur minimale du tableau de référence (" + surfacesDisponibles[0] + " m²).<br>" : ""}
                ${limitingDistance > 0 && limitingDistance < premiereDLNonNulle ? "La distance limitative (" + limitingDistance.toFixed(2) + " m) est inférieure à la valeur minimale non-nulle du tableau de référence (" + premiereDLNonNulle + " m).<br>" : ""}
                Une extrapolation a été effectuée pour obtenir un résultat plus précis.
            </div>
        `;
        
        // Ajout de détails sur la méthode d'extrapolation pour le cas spécial
        if (surface < surfacesDisponibles[0] && limitingDistance >= premiereDLNonNulle) {
            extrapolationInfo += `
                <div class="extrapolation-details">
                    <strong>Méthode d'extrapolation utilisée:</strong><br>
                    Pour ce cas de figure particulier (surface < ${surfacesDisponibles[0]} m² et DL ≥ ${premiereDLNonNulle} m),
                    le calcul suit les trois étapes suivantes:
                    <br>1. Interpolation selon la 1ère surface de référence (${surfacesDisponibles[0]} m²)
                    <br>2. Interpolation selon la 2ème surface de référence (${surfacesDisponibles[1]} m²)
                    <br>3. Extrapolation à partir de ces deux valeurs pour la surface réelle (${surface.toFixed(2)} m²)
                </div>
            `;
        }
    }

    // Afficher les résultats
    let resultHTML = `
        <div class="calculation-data">
            <strong>Données de calcul :</strong><br>
            ${response ? "Distance limitative ajustée : " + (isImperial ? metricToImperial(limitingDistance).toFixed(2) + " pi" : limitingDistance.toFixed(2) + " m") + "<br>" : ""}
            Surface totale de la façade : ${isImperial ? metricToImperial(surface, "area").toFixed(2) + " pi²" : surface.toFixed(2) + " m²"}<br>
            Protection par gicleurs : ${sprinklersOption === "complete" ? "Complète" : sprinklersOption === "partial" ? "Partielle" : "Aucune"}<br>
            ${glassBrick ? "Majoration pour briques de verre/verre armé appliquée (x2)<br>" : ""}
        </div>
        
        <div class="results">
            <strong>Résultats :</strong><br>
            Pourcentage maximal de baies vitrées : ${pourcentage.toFixed(2)}%<br>
            Surface maximale de baies vitrées : ${isImperial ? metricToImperial(surfaceMaxBaies, "area").toFixed(2) + " pi²" : surfaceMaxBaies.toFixed(2) + " m²"}
        </div>
        
        ${extrapolationInfo}
    `;
    
    document.getElementById('method91015-result').innerHTML = resultHTML;
}

// ===========================
// FONCTIONS D'ESPACEMENT ET VÉRIFICATIONS
// ===========================

// Fonction pour calculer l'espacement horizontal requis
function calculateHorizontalSpacing() {
    const isImperial = document.getElementById('measurementSystem').value === 'imperial';
    const activeTab = document.querySelector('.tab-content:not([style*="display: none"])').id;
    
    let limitingDistance, proposedArea;
    
    if (activeTab === 'cnb') {
        if (isImperial) {
            limitingDistance = imperialToMetric(document.getElementById('distance_cnb_imperial').value);
            proposedArea = imperialToMetric(document.getElementById('proposed_area_cnb_imperial').value, "area");
        } else {
            limitingDistance = parseFloat(document.getElementById('distance_cnb').value);
            proposedArea = parseFloat(document.getElementById('proposed_area_cnb').value);
        }
    } else if (activeTab === 'method91014') {
        if (isImperial) {
            limitingDistance = imperialToMetric(document.getElementById('distance_91014_imperial').value);
            proposedArea = imperialToMetric(document.getElementById('proposed_area_91014_imperial').value, "area");
        } else {
            limitingDistance = parseFloat(document.getElementById('distance_91014').value);
            proposedArea = parseFloat(document.getElementById('proposed_area_91014').value);
        }
    } else if (activeTab === 'method91015') {
        if (isImperial) {
            limitingDistance = imperialToMetric(document.getElementById('distance_91015_imperial').value);
            proposedArea = imperialToMetric(document.getElementById('proposed_area_91015_imperial').value, "area");
        } else {
            limitingDistance = parseFloat(document.getElementById('distance_91015').value);
            proposedArea = parseFloat(document.getElementById('proposed_area_91015').value);
        }
    }
    
    if (isNaN(limitingDistance) || isNaN(proposedArea) || limitingDistance <= 0 || proposedArea <= 0) {
        alert('Veuillez entrer des valeurs valides pour la distance limitative et la surface proposée.');
        return;
    }
    
    // Calcul selon la formule: espacement = 2 × √(surface proposée / DL)
    const spacing = 2 * Math.sqrt(proposedArea / limitingDistance);
    
    const resultText = isImperial ? 
        `Espacement horizontal minimal requis : ${metricToImperial(spacing).toFixed(2)} pi` : 
        `Espacement horizontal minimal requis : ${spacing.toFixed(2)} m`;
    
    alert(resultText);
}

// Fonction pour calculer l'espacement vertical requis
function calculateVerticalSpacing() {
    const isImperial = document.getElementById('measurementSystem').value === 'imperial';
    const activeTab = document.querySelector('.tab-content:not([style*="display: none"])').id;
    
    let limitingDistance, proposedArea;
    
    if (activeTab === 'cnb') {
        if (isImperial) {
            limitingDistance = imperialToMetric(document.getElementById('distance_cnb_imperial').value);
            proposedArea = imperialToMetric(document.getElementById('proposed_area_cnb_imperial').value, "area");
        } else {
            limitingDistance = parseFloat(document.getElementById('distance_cnb').value);
            proposedArea = parseFloat(document.getElementById('proposed_area_cnb').value);
        }
    } else if (activeTab === 'method91014') {
        if (isImperial) {
            limitingDistance = imperialToMetric(document.getElementById('distance_91014_imperial').value);
            proposedArea = imperialToMetric(document.getElementById('proposed_area_91014_imperial').value, "area");
        } else {
            limitingDistance = parseFloat(document.getElementById('distance_91014').value);
            proposedArea = parseFloat(document.getElementById('proposed_area_91014').value);
        }
    } else if (activeTab === 'method91015') {
        if (isImperial) {
            limitingDistance = imperialToMetric(document.getElementById('distance_91015_imperial').value);
            proposedArea = imperialToMetric(document.getElementById('proposed_area_91015_imperial').value, "area");
        } else {
            limitingDistance = parseFloat(document.getElementById('distance_91015').value);
            proposedArea = parseFloat(document.getElementById('proposed_area_91015').value);
        }
    }
    
    if (isNaN(limitingDistance) || isNaN(proposedArea) || limitingDistance <= 0 || proposedArea <= 0) {
        alert('Veuillez entrer des valeurs valides pour la distance limitative et la surface proposée.');
        return;
    }
    
    // Calcul selon la formule: espacement = 1,2 × √(surface proposée / DL)
    const spacing = 1.2 * Math.sqrt(proposedArea / limitingDistance);
    
    const resultText = isImperial ? 
        `Espacement vertical minimal requis : ${metricToImperial(spacing).toFixed(2)} pi` : 
        `Espacement vertical minimal requis : ${spacing.toFixed(2)} m`;
    
    alert(resultText);
}

// Fonction pour vérifier l'espacement horizontal
function checkHorizontalSpacing() {
    const isImperial = document.getElementById('measurementSystem').value === 'imperial';
    const activeTab = document.querySelector('.tab-content:not([style*="display: none"])').id;
    
    let limitingDistance, proposedArea, currentSpacing;
    
    if (activeTab === 'cnb') {
        if (isImperial) {
            limitingDistance = imperialToMetric(document.getElementById('distance_cnb_imperial').value);
            proposedArea = imperialToMetric(document.getElementById('proposed_area_cnb_imperial').value, "area");
            currentSpacing = imperialToMetric(document.getElementById('horizontal_spacing_cnb_imperial').value);
        } else {
            limitingDistance = parseFloat(document.getElementById('distance_cnb').value);
            proposedArea = parseFloat(document.getElementById('proposed_area_cnb').value);
            currentSpacing = parseFloat(document.getElementById('horizontal_spacing_cnb').value);
        }
    } else if (activeTab === 'method91014') {
        if (isImperial) {
            limitingDistance = imperialToMetric(document.getElementById('distance_91014_imperial').value);
            proposedArea = imperialToMetric(document.getElementById('proposed_area_91014_imperial').value, "area");
            currentSpacing = imperialToMetric(document.getElementById('horizontal_spacing_91014_imperial').value);
        } else {
            limitingDistance = parseFloat(document.getElementById('distance_91014').value);
            proposedArea = parseFloat(document.getElementById('proposed_area_91014').value);
            currentSpacing = parseFloat(document.getElementById('horizontal_spacing_91014').value);
        }
    } else if (activeTab === 'method91015') {
        if (isImperial) {
            limitingDistance = imperialToMetric(document.getElementById('distance_91015_imperial').value);
            proposedArea = imperialToMetric(document.getElementById('proposed_area_91015_imperial').value, "area");
            currentSpacing = imperialToMetric(document.getElementById('horizontal_spacing_91015_imperial').value);
        } else {
            limitingDistance = parseFloat(document.getElementById('distance_91015').value);
            proposedArea = parseFloat(document.getElementById('proposed_area_91015').value);
            currentSpacing = parseFloat(document.getElementById('horizontal_spacing_91015').value);
        }
    }
    
    if (isNaN(limitingDistance) || isNaN(proposedArea) || isNaN(currentSpacing) || 
        limitingDistance <= 0 || proposedArea <= 0 || currentSpacing < 0) {
        alert('Veuillez entrer des valeurs valides pour tous les champs.');
        return;
    }
    
    const requiredSpacing = 2 * Math.sqrt(proposedArea / limitingDistance);
    const isCompliant = currentSpacing >= requiredSpacing;
    
    const statusText = isCompliant ? "✅ CONFORME" : "❌ NON CONFORME";
    const currentSpacingText = isImperial ? metricToImperial(currentSpacing).toFixed(2) + " pi" : currentSpacing.toFixed(2) + " m";
    const requiredSpacingText = isImperial ? metricToImperial(requiredSpacing).toFixed(2) + " pi" : requiredSpacing.toFixed(2) + " m";
    
    alert(`${statusText}\n\nEspacement horizontal actuel : ${currentSpacingText}\nEspacement horizontal requis : ${requiredSpacingText}`);
}

// Fonction pour vérifier l'espacement vertical
function checkVerticalSpacing() {
    const isImperial = document.getElementById('measurementSystem').value === 'imperial';
    const activeTab = document.querySelector('.tab-content:not([style*="display: none"])').id;
    
    let limitingDistance, proposedArea, currentSpacing;
    
    if (activeTab === 'cnb') {
        if (isImperial) {
            limitingDistance = imperialToMetric(document.getElementById('distance_cnb_imperial').value);
            proposedArea = imperialToMetric(document.getElementById('proposed_area_cnb_imperial').value, "area");
            currentSpacing = imperialToMetric(document.getElementById('vertical_spacing_cnb_imperial').value);
        } else {
            limitingDistance = parseFloat(document.getElementById('distance_cnb').value);
            proposedArea = parseFloat(document.getElementById('proposed_area_cnb').value);
            currentSpacing = parseFloat(document.getElementById('vertical_spacing_cnb').value);
        }
    } else if (activeTab === 'method91014') {
        if (isImperial) {
            limitingDistance = imperialToMetric(document.getElementById('distance_91014_imperial').value);
            proposedArea = imperialToMetric(document.getElementById('proposed_area_91014_imperial').value, "area");
            currentSpacing = imperialToMetric(document.getElementById('vertical_spacing_91014_imperial').value);
        } else {
            limitingDistance = parseFloat(document.getElementById('distance_91014').value);
            proposedArea = parseFloat(document.getElementById('proposed_area_91014').value);
            currentSpacing = parseFloat(document.getElementById('vertical_spacing_91014').value);
        }
    } else if (activeTab === 'method91015') {
        if (isImperial) {
            limitingDistance = imperialToMetric(document.getElementById('distance_91015_imperial').value);
            proposedArea = imperialToMetric(document.getElementById('proposed_area_91015_imperial').value, "area");
            currentSpacing = imperialToMetric(document.getElementById('vertical_spacing_91015_imperial').value);
        } else {
            limitingDistance = parseFloat(document.getElementById('distance_91015').value);
            proposedArea = parseFloat(document.getElementById('proposed_area_91015').value);
            currentSpacing = parseFloat(document.getElementById('vertical_spacing_91015').value);
        }
    }
    
    if (isNaN(limitingDistance) || isNaN(proposedArea) || isNaN(currentSpacing) || 
        limitingDistance <= 0 || proposedArea <= 0 || currentSpacing < 0) {
        alert('Veuillez entrer des valeurs valides pour tous les champs.');
        return;
    }
    
    const requiredSpacing = 1.2 * Math.sqrt(proposedArea / limitingDistance);
    const isCompliant = currentSpacing >= requiredSpacing;
    
    const statusText = isCompliant ? "✅ CONFORME" : "❌ NON CONFORME";
    const currentSpacingText = isImperial ? metricToImperial(currentSpacing).toFixed(2) + " pi" : currentSpacing.toFixed(2) + " m";
    const requiredSpacingText = isImperial ? metricToImperial(requiredSpacing).toFixed(2) + " pi" : requiredSpacing.toFixed(2) + " m";
    
    alert(`${statusText}\n\nEspacement vertical actuel : ${currentSpacingText}\nEspacement vertical requis : ${requiredSpacingText}`);
}

// Fonction pour vérifier la distance sous avant-toit
function checkSoffitDistance() {
    const isImperial = document.getElementById('measurementSystem').value === 'imperial';
    const activeTab = document.querySelector('.tab-content:not([style*="display: none"])').id;
    
    let limitingDistance, proposedArea, currentDistance;
    
    if (activeTab === 'cnb') {
        if (isImperial) {
            limitingDistance = imperialToMetric(document.getElementById('distance_cnb_imperial').value);
            proposedArea = imperialToMetric(document.getElementById('proposed_area_cnb_imperial').value, "area");
            currentDistance = imperialToMetric(document.getElementById('soffit_distance_cnb_imperial').value);
        } else {
            limitingDistance = parseFloat(document.getElementById('distance_cnb').value);
            proposedArea = parseFloat(document.getElementById('proposed_area_cnb').value);
            currentDistance = parseFloat(document.getElementById('soffit_distance_cnb').value);
        }
    } else if (activeTab === 'method91014') {
        if (isImperial) {
            limitingDistance = imperialToMetric(document.getElementById('distance_91014_imperial').value);
            proposedArea = imperialToMetric(document.getElementById('proposed_area_91014_imperial').value, "area");
            currentDistance = imperialToMetric(document.getElementById('soffit_distance_91014_imperial').value);
        } else {
            limitingDistance = parseFloat(document.getElementById('distance_91014').value);
            proposedArea = parseFloat(document.getElementById('proposed_area_91014').value);
            currentDistance = parseFloat(document.getElementById('soffit_distance_91014').value);
        }
    } else if (activeTab === 'method91015') {
        if (isImperial) {
            limitingDistance = imperialToMetric(document.getElementById('distance_91015_imperial').value);
            proposedArea = imperialToMetric(document.getElementById('proposed_area_91015_imperial').value, "area");
            currentDistance = imperialToMetric(document.getElementById('soffit_distance_91015_imperial').value);
        } else {
            limitingDistance = parseFloat(document.getElementById('distance_91015').value);
            proposedArea = parseFloat(document.getElementById('proposed_area_91015').value);
            currentDistance = parseFloat(document.getElementById('soffit_distance_91015').value);
        }
    }
    
    if (isNaN(limitingDistance) || isNaN(proposedArea) || isNaN(currentDistance) || 
        limitingDistance <= 0 || proposedArea <= 0 || currentDistance < 0) {
        alert('Veuillez entrer des valeurs valides pour tous les champs.');
        return;
    }
    
    const requiredDistance = Math.sqrt(proposedArea / limitingDistance);
    const isCompliant = currentDistance >= requiredDistance;
    
    const statusText = isCompliant ? "✅ CONFORME" : "❌ NON CONFORME";
    const currentDistanceText = isImperial ? metricToImperial(currentDistance).toFixed(2) + " pi" : currentDistance.toFixed(2) + " m";
    const requiredDistanceText = isImperial ? metricToImperial(requiredDistance).toFixed(2) + " pi" : requiredDistance.toFixed(2) + " m";
    
    alert(`${statusText}\n\nDistance sous avant-toit actuelle : ${currentDistanceText}\nDistance sous avant-toit requise : ${requiredDistanceText}`);
}

// ===========================
// FONCTIONS DE FORMATAGE ET COPIE
// ===========================

// Fonction pour formater les calculs pour la méthode CNB
function formatCNBCalculationSteps() {
    // Déterminer le système de mesure et récupérer les valeurs
    const isImperial = document.getElementById('measurementSystem').value === 'imperial';
    
    let limitingDistance, surface, length, height;
    
    if (isImperial) {
        limitingDistance = imperialToMetric(document.getElementById('distance_cnb_imperial').value);
        surface = imperialToMetric(document.getElementById('surface_cnb_imperial').value, "area");
        length = imperialToMetric(document.getElementById('length_cnb_imperial').value);
        height = imperialToMetric(document.getElementById('height_cnb_imperial').value);
    } else {
        limitingDistance = parseFloat(document.getElementById('distance_cnb').value);
        surface = parseFloat(document.getElementById('surface_cnb').value);
        length = parseFloat(document.getElementById('length_cnb').value);
        height = parseFloat(document.getElementById('height_cnb').value);
    }
    
    const usage = document.getElementById('usage_cnb').value;
    const sprinklersOption = document.getElementById('sprinklers_cnb').value;
    const response = document.getElementById('response_cnb').checked;
    
    // Ajustement pour le délai d'intervention
    if (response) {
        limitingDistance = limitingDistance / 2;
    }
    
    // Déterminer le rapport L/H
    const rapportLH = determinerRapportLH(length, height);
    
    // Préparer le texte formaté
    let output = `${usage === "groupes_ABCDF" ? "Tableau 3.2.3.1.-B" : "Tableau 3.2.3.1.-C"}:\n`;
    output += `DL: ${limitingDistance.toFixed(2)}m\n`;
    output += `Surface de la FDR: ${surface.toFixed(2)}m²\n`;
    output += `Longueur: ${length.toFixed(2)}m\n`;
    output += `Hauteur: ${height.toFixed(2)}m\n`;
    output += `Rapport L/H: ${rapportLH}\n`;
    output += `Protection par gicleurs: ${sprinklersOption === "complete" ? "Complète" : sprinklersOption === "partial" ? "Partielle" : "Aucune"}\n\n`;
    
    // Note: La logique complète de formatage serait similaire aux autres méthodes
    // mais adaptée aux tableaux CNB avec interpolation selon L/H et surfaces
    
    return output;
}

// Fonction pour formater les calculs pour la méthode 9.10.14
function format91014CalculationSteps() {
    // Déterminer le système de mesure et récupérer les valeurs
    const isImperial = document.getElementById('measurementSystem').value === 'imperial';
    
    let limitingDistance, surface;
    
    if (isImperial) {
        limitingDistance = imperialToMetric(document.getElementById('distance_91014_imperial').value);
        surface = imperialToMetric(document.getElementById('surface_91014_imperial').value, "area");
    } else {
        limitingDistance = parseFloat(document.getElementById('distance_91014').value);
        surface = parseFloat(document.getElementById('surface_91014').value);
    }
    
    const usage = document.getElementById('usage_91014').value;
    const sprinklersOption = document.getElementById('sprinklers_91014').value;
    const glassBrick = document.getElementById('glass_brick_91014').checked;
    const response = document.getElementById('response_91014').checked;
    
    // Ajustement pour le délai d'intervention
    if (response) {
        limitingDistance = limitingDistance / 2;
    }
    
    // Préparer le texte formaté
    let output = "Tableau 9.10.14.4.-A:\n";
    output += `DL: ${limitingDistance.toFixed(2)}m\n`;
    output += `Surface de la FDR: ${surface.toFixed(2)}m²\n\n`;
    
    // Déterminer les distances et surfaces disponibles
    const tableau = {
        usages: usage,
        surfaces: tableau91014[usage].surfaces,
        distances: tableau91014[usage].distances
    };
    
    // Logique de formatage des étapes de calcul...
    // (Cette partie serait développée selon la méthode d'interpolation utilisée)
    
    return output;
}

// Fonction pour formater les calculs pour la méthode 9.10.15
function format91015CalculationSteps() {
    // Déterminer le système de mesure et récupérer les valeurs
    const isImperial = document.getElementById('measurementSystem').value === 'imperial';
    
    let limitingDistance, surface;
    
    if (isImperial) {
        limitingDistance = imperialToMetric(document.getElementById('distance_91015_imperial').value);
        surface = imperialToMetric(document.getElementById('surface_91015_imperial').value, "area");
    } else {
        limitingDistance = parseFloat(document.getElementById('distance_91015').value);
        surface = parseFloat(document.getElementById('surface_91015').value);
    }
    
    const sprinklersOption = document.getElementById('sprinklers_91015').value;
    const glassBrick = document.getElementById('glass_brick_91015').checked;
    const response = document.getElementById('response_91015').checked;
    
    // Ajustement pour le délai d'intervention
    if (response) {
        limitingDistance = limitingDistance / 2;
    }
    
    // Préparer le texte formaté
    let output = "Tableau 9.10.15.4.:\n";
    output += `DL: ${limitingDistance.toFixed(2)}m\n`;
    output += `Surface de la FDR: ${surface.toFixed(2)}m²\n\n`;
    
    // Logique de formatage des étapes de calcul...
    // (Cette partie serait développée selon la méthode d'interpolation utilisée)
    
    return output;
}

// Fonction pour copier dans le presse-papiers
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

// ===========================
// FONCTIONS D'INTERFACE UTILISATEUR
// ===========================

// Fonction pour mettre à jour les étiquettes des unités en fonction du système de mesure
function updateUnitLabels(isImperial) {
    const unitLabels = document.querySelectorAll('.unit-label');
    
    unitLabels.forEach(label => {
        // Préserver les tooltips en modifiant seulement le nœud de texte
        const textNodes = Array.from(label.childNodes).filter(node => node.nodeType === 3);
        if (textNodes.length > 0) {
            let labelText = textNodes[0].nodeValue;
            
            if (isImperial) {
                // Remplacer les unités métriques par des unités impériales
                if (labelText.includes('(m)')) {
                    labelText = labelText.replace('(m)', '(pi)');
                } else if (labelText.includes('(m²)')) {
                    labelText = labelText.replace('(m²)', '(pi²)');
                }
            } else {
                // Remplacer les unités impériales par des unités métriques
                if (labelText.includes('(pi)')) {
                    labelText = labelText.replace('(pi)', '(m)');
                } else if (labelText.includes('(pi²)')) {
                    labelText = labelText.replace('(pi²)', '(m²)');
                }
            }
            
            textNodes[0].nodeValue = labelText;
        }
    });
}

// Fonction pour définir les placeholders pour les champs métriques
function setMetricPlaceholders() {
    // Onglet CNB
    document.getElementById('distance_cnb').placeholder = "Ex: 3,0";
    document.getElementById('surface_cnb').placeholder = "Ex: 100";
    document.getElementById('length_cnb').placeholder = "Ex: 10,0";
    document.getElementById('height_cnb').placeholder = "Ex: 3,0";
    document.getElementById('horizontal_spacing_cnb').placeholder = "Ex: 2,0";
    document.getElementById('vertical_spacing_cnb').placeholder = "Ex: 2,0";
    document.getElementById('soffit_distance_cnb').placeholder = "Ex: 0,5";
    document.getElementById('proposed_area_cnb').placeholder = "Ex: 50";
    
    // Onglet 9.10.14
    document.getElementById('distance_91014').placeholder = "Ex: 3,0";
    document.getElementById('surface_91014').placeholder = "Ex: 100";
    document.getElementById('horizontal_spacing_91014').placeholder = "Ex: 2,0";
    document.getElementById('vertical_spacing_91014').placeholder = "Ex: 2,0";
    document.getElementById('soffit_distance_91014').placeholder = "Ex: 0,5";
    document.getElementById('proposed_area_91014').placeholder = "Ex: 50";
    
    // Onglet 9.10.15
    document.getElementById('distance_91015').placeholder = "Ex: 3,0";
    document.getElementById('surface_91015').placeholder = "Ex: 100";
    document.getElementById('horizontal_spacing_91015').placeholder = "Ex: 2,0";
    document.getElementById('vertical_spacing_91015').placeholder = "Ex: 2,0";
    document.getElementById('soffit_distance_91015').placeholder = "Ex: 0,5";
    document.getElementById('proposed_area_91015').placeholder = "Ex: 50";
}

// Fonction pour définir les placeholders pour les champs impériaux
function setImperialPlaceholders() {
    // Onglet CNB
    document.getElementById('distance_cnb_imperial').placeholder = "Ex: 10,0";
    document.getElementById('surface_cnb_imperial').placeholder = "Ex: 1076";
    document.getElementById('length_cnb_imperial').placeholder = "Ex: 33,0";
    document.getElementById('height_cnb_imperial').placeholder = "Ex: 10,0";
    document.getElementById('horizontal_spacing_cnb_imperial').placeholder = "Ex: 6,6";
    document.getElementById('vertical_spacing_cnb_imperial').placeholder = "Ex: 6,6";
    document.getElementById('soffit_distance_cnb_imperial').placeholder = "Ex: 1,6";
    document.getElementById('proposed_area_cnb_imperial').placeholder = "Ex: 538";
    
    // Onglet 9.10.14
    document.getElementById('distance_91014_imperial').placeholder = "Ex: 10,0";
    document.getElementById('surface_91014_imperial').placeholder = "Ex: 1076";
    document.getElementById('horizontal_spacing_91014_imperial').placeholder = "Ex: 6,6";
    document.getElementById('vertical_spacing_91014_imperial').placeholder = "Ex: 6,6";
    document.getElementById('soffit_distance_91014_imperial').placeholder = "Ex: 1,6";
    document.getElementById('proposed_area_91014_imperial').placeholder = "Ex: 538";
    
    // Onglet 9.10.15
    document.getElementById('distance_91015_imperial').placeholder = "Ex: 10,0";
    document.getElementById('surface_91015_imperial').placeholder = "Ex: 1076";
    document.getElementById('horizontal_spacing_91015_imperial').placeholder = "Ex: 6,6";
    document.getElementById('vertical_spacing_91015_imperial').placeholder = "Ex: 6,6";
    document.getElementById('soffit_distance_91015_imperial').placeholder = "Ex: 1,6";
    document.getElementById('proposed_area_91015_imperial').placeholder = "Ex: 538";
}

// Fonction pour changer d'onglet
function showTab(tabName) {
    // Cacher tous les contenus d'onglets
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.style.display = 'none';
    });
    
    // Retirer la classe active de tous les boutons d'onglets
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Afficher le contenu de l'onglet sélectionné
    document.getElementById(tabName).style.display = 'block';
    
    // Ajouter la classe active au bouton d'onglet sélectionné
    event.target.classList.add('active');
}

// ===========================
// INITIALISATION
// ===========================

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Configuration initiale du système de mesure
    toggleMeasurementSystem();
    
    // Afficher l'onglet CNB par défaut
    showTab('cnb');
    
    // Configurer les event listeners pour la synchronisation des unités
    setupMetricImperialInputPairs();
});
