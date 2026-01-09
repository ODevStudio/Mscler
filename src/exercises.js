import { exercisesBase } from './data/exercises-base.js';
import { muscleSliderPresets, muscleGroups, equipmentTypes, difficultyLevels } from './data/constants.js';

import de from './locales/de.js';
import en from './locales/en.js';
import es from './locales/es.js';
import fr from './locales/fr.js';

const supportedLanguages = { en, de, es, fr };

export { muscleSliderPresets, muscleGroups, equipmentTypes, difficultyLevels };

// Helper to build translation objects
function buildTranslationMap(key) {
    const map = {};
    for (const [langCode, localeData] of Object.entries(supportedLanguages)) {
        map[langCode] = localeData[key] || {};
    }
    return map;
}

export const muscleCategoryTrans = buildTranslationMap('categories');
export const muscleGroupTrans = buildTranslationMap('muscleGroups');
export const equipmentTypestrans = buildTranslationMap('equipment');
export const difficultyLevelsTrans = buildTranslationMap('difficulty');

// Merge Base Data with Translations
export const exercises = exercisesBase.map(base => {
    const nameObj = {};
    const descObj = {};
    const stepsObj = {};

    for (const [langCode, localeData] of Object.entries(supportedLanguages)) {
        const exData = localeData.exercises[base.id] || {};
        
        nameObj[langCode] = exData.name || base.internalName;
        descObj[langCode] = exData.description || "";
        stepsObj[langCode] = exData.steps || "";
    }

    return {
        ...base,
        name: nameObj,        
        description: descObj, 
        steps: stepsObj,      
        
        getName(languageCode) {
            return this.name[languageCode] || this.name['en'] || base.internalName;
        }
    };
});