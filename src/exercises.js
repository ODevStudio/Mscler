import { exercisesBase } from './data/exercises-base.js';
import { muscleSliderPresets, muscleGroups, equipmentTypes, difficultyLevels } from './data/constants.js';

// Import all supported locales here
import de from './locales/de.js';
import en from './locales/en.js';
import es from './locales/es.js';
import fr from './locales/fr.js';

// Define supported languages map
const supportedLanguages = { en, de, es, fr };

// Re-export constants
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
    // Create localized objects for properties that need translation
    const nameObj = {};
    const descObj = {};
    const stepsObj = {};

    for (const [langCode, localeData] of Object.entries(supportedLanguages)) {
        const exData = localeData.exercises[base.id] || {};
        
        // Use translated name if available, otherwise fallback to internalName
        nameObj[langCode] = exData.name || base.internalName;
        descObj[langCode] = exData.description || "";
        stepsObj[langCode] = exData.steps || "";
    }

    return {
        ...base,
        name: nameObj,         // Now an object: { en: "Name", de: "Name" }
        description: descObj,  // Now an object: { en: "Desc", de: "Desc" }
        steps: stepsObj,       // Now an object: { en: "Steps", de: "Steps" }
        
        // Helper to get localized name directly if needed (legacy support or convenience)
        getName(languageCode) {
            return this.name[languageCode] || this.name['en'] || base.internalName;
        }
    };
});