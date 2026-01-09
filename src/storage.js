// --- Storage & Config ---
export const LS_LANG  = 'etp_lang';
export const LS_THEME = 'etp_theme'; 
const LOG_STORE_KEY = 'exerciseLogs_v1';

export let lang = 'en';

export function setLanguageDirect(code) {
  lang = code;
  localStorage.setItem(LS_LANG, lang);
}

export function setThemeDirect(mode) {
  const html = document.documentElement;
  const newTheme = (mode === 'dark') ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem(LS_THEME, newTheme);
}

// Favorites
export function saveFavoritesToLocalStorage(exercises) {
  const favoriteMap = {};
  exercises.forEach(ex => {
    if (ex.favorit !== 0) {
      favoriteMap[ex.id] = ex.favorit;
    }
  });
  localStorage.setItem('exerciseFavorites', JSON.stringify(favoriteMap));
}

export function restoreFavoritesFromLocalStorage(exercises) {
  const stored = localStorage.getItem('exerciseFavorites');
  if (!stored) return;

  const favoriteMap = JSON.parse(stored);
  exercises.forEach(ex => {
    if (favoriteMap.hasOwnProperty(ex.id)) {
      ex.favorit = favoriteMap[ex.id];
    }
  });
}

// Logs
export function getLogKey(ex) { return `exlog-${ex.id}`; }

function _readLogStore() {
  try { return JSON.parse(localStorage.getItem(LOG_STORE_KEY) || '{}'); }
  catch { return {}; }
}

function _writeLogStore(store) {
  localStorage.setItem(LOG_STORE_KEY, JSON.stringify(store));
}

export function loadExerciseLog(key) {
  const store = _readLogStore();
  return store[key] || { w1:'', r1:'', w2:'', r2:'', w3:'', r3:'' , w4:'', r4:'' , w5:'', r5:'' };
}

export function saveExerciseLog(key, data) {
  const store = _readLogStore();
  store[key] = data;
  _writeLogStore(store);
}

// Plan & Equipment
export function savePlan(plan) {
  try {
    localStorage.setItem('savedTrainingPlan', JSON.stringify(plan || []));
  } catch (err) {
    console.error('Error saving to localStorage:', err);
  }
  if (plan && plan.length > 0) return true;
  return false;
}

export function loadPlan() {
    let availableEquipment = [];
    let plan = [];
    try {
        const savedAvailableLS = localStorage.getItem('savedAvailableEquipment');
        if (savedAvailableLS) {
            availableEquipment = JSON.parse(savedAvailableLS) || [];
        } 
    } catch (err) {
        availableEquipment = [];
    }
  
    try {
        const savedPlanString = localStorage.getItem('savedTrainingPlan');
        if (savedPlanString) {
            plan = JSON.parse(savedPlanString) || [];
        }
    } catch (error) {
        localStorage.removeItem('savedTrainingPlan');
    }
    return { plan, availableEquipment };
}

export function saveAvailableEquipment(eq) {
    localStorage.setItem('savedAvailableEquipment', JSON.stringify(eq || []));
}
