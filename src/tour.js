import { driver } from './driver.js';
import { lang } from './storage.js';
let driverObj;
const tourContent = {
    en: {
        next: "Next",
        prev: "Previous",
        done: "Finish",
        steps: [
            {
                element: '#toggleLang',
                title: 'Language',
                description: 'Click here to switch languages (English, German, Spanish, French).'
            },
            {
                element: '#toggleMode',
                title: 'Theme',
                description: 'Switch between Light, Dark, and Glass themes.'
            },
            {
                element: '#exer',
                title: 'Filters',
                description: 'Use these filters to find exercises by category, muscle group, or difficulty.'
            },
            {
                element: '#toggleBtn',
                title: 'Training Plan',
                description: 'Click here to start creating your personalized training plan.'
            },
            {
                element: '#trainingPlanForm',
                title: 'Training Days',
                description: 'Select how many days a week you want to train (1-6). Equipment you have,  and max difficulty of exercises.'
            },
            {
                element: '#generate',
                title: 'Generate',
                description: 'Click here to generate your plan!'
            }
        ]
    },
    de: {
        next: "Weiter",
        prev: "Zurück",
        done: "Fertig",
        steps: [
            {
                element: '#toggleLang',
                title: 'Sprache',
                description: 'Hier klicken, um die Sprache zu wechseln (Englisch, Deutsch, Spanisch, Französisch).'
            },
            {
                element: '#toggleMode',
                title: 'Design',
                description: 'Wechsle zwischen Hell, Dunkel und Glas-Design.'
            },
            {
                element: '#exer',
                title: 'Filter',
                description: 'Nutze diese Filter, um Übungen nach Kategorie, Muskelgruppe oder Schwierigkeit zu finden.'
            },
            {
                element: '#toggleBtn',
                title: 'Trainingsplan',
                description: 'Klicke hier, um deinen persönlichen Trainingsplan zu erstellen.'
            },
            {
                element: '#trainingPlanForm',
                title: 'Trainingstage',
                description: 'Wählen Sie aus, an wie vielen Tagen pro Woche Sie trainieren möchten (1–6). Welche Geräte Sie haben und den maximalen Schwierigkeitsgrad der Übungen.'
            },
            {
                element: '#generate',
                title: 'Erstellen',
                description: 'Klicke hier, um deinen Plan zu generieren!'
            }
        ]
    },
    es: {
        next: "Siguiente",
        prev: "Anterior",
        done: "Terminar",
        steps: [
            {
                element: '#toggleLang',
                title: 'Idioma',
                description: 'Haga clic aquí para cambiar de idioma (inglés, alemán, español, francés).'
            },
            {
                element: '#toggleMode',
                title: 'Tema',
                description: 'Cambia entre los temas Claro, Oscuro y Cristal.'
            },
            {
                element: '#exer',
                title: 'Filtros',
                description: 'Utilice estos filtros para buscar ejercicios por categoría, grupo muscular o dificultad.'
            },
            {
                element: '#toggleBtn',
                title: 'Plan de entrenamiento',
                description: 'Haga clic aquí para comenzar a crear su plan de entrenamiento personalizado.'
            },
            {
                element: '#trainingPlanForm',
                title: 'Días de entrenamiento',
                description: 'Selecciona cuántos días a la semana quieres entrenar (1-6). El equipo que tienes y la dificultad máxima de los ejercicios.'
            },
            {
                element: '#generate',
                title: 'Generar',
                description: '¡Haga clic aquí para generar su plan!'
            }
        ]
    },
    fr: {
        next: "Suivant",
        prev: "Précédent",
        done: "Terminer",
        steps: [
            {
                element: '#toggleLang',
                title: 'Langue',
                description: 'Cliquez ici pour changer de langue (anglais, allemand, espagnol, français).'
            },
            {
                element: '#toggleMode',
                title: 'Thème',
                description: 'Basculer entre les thèmes Clair, Sombre et Verre.'
            },
            {
                element: '#exer',
                title: 'Filtres',
                description: 'Utilisez ces filtres pour trouver des exercices par catégorie, groupe musculaire ou difficulté.'
            },
            {
                element: '#toggleBtn',
                title: 'Plan d\'entraînement',
                description: 'Cliquez ici pour commencer à créer votre plan d\'entraînement personnalisé.'
            },
            {
                element: '#trainingPlanForm',
                title: 'Jours d\'entraînement',
                description: 'Sélectionnez le nombre de jours par semaine où vous souhaitez vous entraîner (1 à 6). Équipement dont vous disposez et difficulté maximale des exercices.'
            },
            {
                element: '#generate',
                title: 'Générer',
                description: 'Cliquez ici pour générer votre plan !'
            }
        ]
    }
};

function getDriverConfig(content) {
    return {
        showProgress: true,
        allowClose: true,
        overlayClickBehavior: "close",
        doneBtnText: content.done,
        nextBtnText: content.next,
        prevBtnText: content.prev,
        onDestroyed: () => {
            localStorage.setItem('mscler_tour_seen', 'true');
        }
    };
}

function getSteps(content) {
    return [
        {
            element: '#toggleLang',
            popover: {
                title: content.steps[0].title,
                description: content.steps[0].description,
                side: "left",
                align: 'start'
            }
        },
        {
            element: '#toggleMode',
            popover: {
                title: content.steps[1].title,
                description: content.steps[1].description,
                side: "left",
                align: 'start'
            }
        },
        {
            element: '#exer',
            popover: {
                title: content.steps[2].title,
                description: content.steps[2].description,
                side: "bottom",
                align: 'start'
            }
        },
        {
            element: '#toggleBtn',
            popover: {
                title: content.steps[3].title,
                description: content.steps[3].description,
                side: "bottom",
                align: 'start'
            },
            onNextClick: () => {
                 const btn = document.getElementById('toggleBtn');
                 // Only click if we are not already in the form view
                 if (document.getElementById('trainingPlanForm').style.display === 'none') {
                     btn.click();
                 }
                 if(driverObj) driverObj.moveNext();
            }
        },
        {
            element: '#trainingPlanForm',
            popover: {
                title: content.steps[4].title,
                description: content.steps[4].description,
                side: "top",
                align: 'start'
            }
        },
        {
            element: '#generate',
            popover: {
                title: content.steps[5].title,
                description: content.steps[5].description,
                side: "top",
                align: 'start'
            }
        }
    ];
}

export function startTour() {
    const currentLang = lang || 'en';
    const content = tourContent[currentLang] || tourContent.en;

    driverObj = driver(getDriverConfig(content));
    driverObj.setSteps(getSteps(content));
    driverObj.drive();
}

export function updateTourLanguage() {
    if (driverObj && driverObj.isActive()) {
        const currentLang = lang || 'en';
        const content = tourContent[currentLang] || tourContent.en;

        driverObj.setConfig(getDriverConfig(content));
        driverObj.setSteps(getSteps(content));
        
        const idx = driverObj.getActiveIndex();
        if (typeof idx !== 'undefined') {
            driverObj.drive(idx);
        }
    }
}
