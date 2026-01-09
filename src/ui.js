import { exercises, muscleCategoryTrans, muscleGroupTrans, equipmentTypes, equipmentTypestrans, muscleGroups, difficultyLevels, difficultyLevelsTrans } from './exercises.js';
import { lang, loadExerciseLog, saveExerciseLog, getLogKey } from './storage.js';
import { generatePlanLogic } from './logic.js';
import de from './locales/de.js';
import en from './locales/en.js';
import es from './locales/es.js';
import fr from './locales/fr.js';

export const locales = { en, de, es, fr };

// --- UI Globals (filtered state) ---
export let selectedCategory = "";
export let selectedMuscleGroup = "";
export let filteredExercises = [];
export let availableEquipment = [];

// --- Helper Functions ---
function getTxt(obj) {
    if (typeof obj === 'string') return obj;
    if (!obj) return "";
    return obj[lang] || obj['en'] || "";
}

export function safeToggle(showEl, hideEl) {
  if (hideEl && hideEl.style) hideEl.style.display = 'none';
  if (!showEl || !showEl.style) return;
  showEl.style.display = (showEl.style.display === 'none' || !showEl.style.display) ? 'block' : 'none';
}

function renderLogPanelHTML(panelId, logData) {
  const log1 = locales[lang].ui.set || 'Set';
  const log2 = locales[lang].ui.weight || 'Weight';
  const log3 = locales[lang].ui.repetitions || 'Repetitions';
  return `
  <div class="tooltip log-panel" id="${panelId}" style="display:none;">
    <div class="log-grid">
      <div></div><div class="log-head">${log2} kg/lb</div><div class="log-head">${log3}</div>
      <div>${log1} 1</div>
      <input class="log-input" type="number" step="0.5" data-log="${panelId}" name="w1" value="${logData.w1 ?? ''}">
      <input class="log-input" type="number" step="1"   data-log="${panelId}" name="r1" value="${logData.r1 ?? ''}">
      <div>${log1} 2</div>
      <input class="log-input" type="number" step="0.5" data-log="${panelId}" name="w2" value="${logData.w2 ?? ''}">
      <input class="log-input" type="number" step="1"   data-log="${panelId}" name="r2" value="${logData.r2 ?? ''}">
      <div>${log1} 3</div>
      <input class="log-input" type="number" step="0.5" data-log="${panelId}" name="w3" value="${logData.w3 ?? ''}">
      <input class="log-input" type="number" step="1"   data-log="${panelId}" name="r3" value="${logData.r3 ?? ''}">
      <div>${log1} 4</div>
      <input class="log-input" type="number" step="0.5" data-log="${panelId}" name="w4" value="${logData.w4 ?? ''}">
      <input class="log-input" type="number" step="1"   data-log="${panelId}" name="r4" value="${logData.r4 ?? ''}">
      <div>${log1} 5</div>
      <input class="log-input" type="number" step="0.5" data-log="${panelId}" name="w5" value="${logData.w5 ?? ''}">
      <input class="log-input" type="number" step="1"   data-log="${panelId}" name="r5" value="${logData.r5 ?? ''}">
    </div>
    <button class="log-clear" data-clear="${panelId}">Clear</button>
  </div>`;
}

function refreshLogPanels(storageKey, skipPanel = null) {
  const data = loadExerciseLog(storageKey);
  document.querySelectorAll(`.log-panel[data-log-key="${storageKey}"]`).forEach(p => {
    if (skipPanel && p === skipPanel) return;
    p.querySelectorAll('input[data-log]').forEach(inp => {
      if (Object.prototype.hasOwnProperty.call(data, inp.name)) {
        inp.value = data[inp.name] || '';
      }
    });
  });
}

function attachLogHandlers(panelId, storageKey, root = document) {
  const panel = root === document
    ? document.getElementById(panelId)
    : root.querySelector(`#${panelId}`);
  if (!panel) return;

  panel.classList.add('log-panel');
  panel.dataset.logKey = storageKey;

  const syncFromPanel = () => {
    const inputs = panel.querySelectorAll('input[data-log]');
    const data = {};
    inputs.forEach(inp => { data[inp.name] = inp.value; });
    saveExerciseLog(storageKey, data);
    refreshLogPanels(storageKey, panel);
  };

  panel.querySelectorAll('input[data-log]').forEach(inp => {
    inp.addEventListener('input',  syncFromPanel);
    inp.addEventListener('change', syncFromPanel);
  });

  const clearBtn = panel.querySelector(`[data-clear="${panelId}"]`);
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      const empty = { w1:'', r1:'', w2:'', r2:'', w3:'', r3:'', w4:'', r4:'', w5:'', r5:'' };
      saveExerciseLog(storageKey, empty);
      panel.querySelectorAll('input[data-log]').forEach(inp => { inp.value = ''; });
      refreshLogPanels(storageKey, panel);
    });
  }
}

// --- Main Render Functions ---

export function renderCategories(currentCategory, onSelectCategory) {
  const container = document.getElementById('categories');
  if (!container) return;
  container.innerHTML = '';

  Object.keys(muscleGroups).forEach(category => {
    const btn = document.createElement('button');
    btn.textContent = muscleCategoryTrans[lang][category];
    btn.onclick = () => onSelectCategory(category);
    if (category === currentCategory) btn.classList.add('active');
    container.appendChild(btn);
  });
}

export function renderMuscleGroups(currentCategory, currentMuscleGroup, onSelectMuscle) {
  const container = document.getElementById('muscleGroups');
  if (!container) return;
  container.innerHTML = '';
  if (currentCategory) {
    muscleGroups[currentCategory].forEach(muscle => {
      const btn = document.createElement('button');
      btn.textContent = muscleGroupTrans[lang][muscle];
      btn.onclick = () => onSelectMuscle(muscle);
      if (muscle === currentMuscleGroup) btn.classList.add('active');
      container.appendChild(btn);
    });
  }
}

export function renderEquipment(currentAvailableEquipment, onFilterEq) {
  const container = document.getElementById('equipment');
  if (!container) return;
  container.innerHTML = '';

  equipmentTypes.forEach(eq => {
    const btn = document.createElement('button');
    btn.textContent = equipmentTypestrans[lang][eq]; 
    btn.setAttribute('data-eq', eq);
    btn.onclick = () => onFilterEq(eq);
    if (currentAvailableEquipment.includes(eq)) btn.classList.add('active');
    container.appendChild(btn);
  });
}

export function renderAvailableEquipment(currentAvailableEquipment, onToggleEq) {
  const container = document.getElementById('availableEquipment');
  if (!container) return;
  container.innerHTML = '';

  equipmentTypes.forEach(eq => {
    const btn = document.createElement('button');
    btn.textContent = equipmentTypestrans[lang][eq];
    btn.classList.add('equipment-btn');
    if (currentAvailableEquipment.includes(eq)) btn.classList.add('active');
    btn.onclick = () => onToggleEq(eq);
    container.appendChild(btn);
  });
}

export function renderDifficulty(currentDifficulty, onSelectDifficulty) {
    const containers = [document.getElementById('difficultyButtons'), document.getElementById('planDifficultyButtons')];
    
    containers.forEach(container => {
        if (!container) return;
        container.innerHTML = '';
        
        difficultyLevels.forEach(level => {
            const btn = document.createElement('button');
            btn.textContent = difficultyLevelsTrans[lang][level];
            
            if (level === currentDifficulty) {
                btn.classList.add('active');
            }
            
            btn.onclick = () => onSelectDifficulty(level);
            container.appendChild(btn);
        });
    });
}

export function renderExercises(exercisesToRender, onOpenVideo, onToggleFav) {
  const container = document.getElementById('exercises');
  if (!container) return;
  container.innerHTML = '';

  if (exercisesToRender.length === 0) {
    container.innerHTML = '<p>' +
      (locales[lang].ui.choose_category || 'Choose a category or muscle group to show exercises.') +
      '</p>';
    return;
  }

  exercisesToRender.forEach((ex, idx) => {
    const card = document.createElement('div');
    card.className = 'card';

    const muscleGroupText = locales[lang].ui.muscle || 'Muscle';
    const deviceText      = locales[lang].ui.device || 'Device';
    const effectivityText = locales[lang].ui.effectivity || 'Effectivity';
    const difficultyText  = locales[lang].ui.difficulty_level || 'Difficulty';

    const titleDiv = document.createElement('div');
    titleDiv.className = 'exercise-title';
    titleDiv.textContent = getTxt(ex.name);
    card.appendChild(titleDiv);

    const metaGrid = document.createElement('div');
    metaGrid.className = 'meta-grid';
    
    const createItem = (label, value) => {
        const div = document.createElement('div');
        const b = document.createElement('b');
        b.textContent = label + ': ';
        div.appendChild(b);
        div.appendChild(document.createTextNode(value));
        return div;
    };

    metaGrid.appendChild(createItem(muscleGroupText, muscleGroupTrans[lang][ex.muscleGroup]));
    metaGrid.appendChild(createItem(effectivityText, '★'.repeat(ex.effectiveness)));
    metaGrid.appendChild(createItem(deviceText, equipmentTypestrans[lang][ex.equipment]));
    metaGrid.appendChild(createItem(difficultyText, difficultyLevelsTrans[lang][ex.difficulty]));
    
    card.appendChild(metaGrid);

    const descDiv = document.createElement('div');
    descDiv.className = 'exercise-desc';
    descDiv.textContent = getTxt(ex.description);
    card.appendChild(descDiv);

    const btnRow = document.createElement('div');
    btnRow.className = 'button-row';
    const tooltipId  = `tooltip-${idx}`;
    const logKey     = getLogKey(ex);
    const logPanelId = `log-list-${ex.id}`;

    const detailsBtn = document.createElement('button');
    detailsBtn.className = 'detail-btn';
    detailsBtn.textContent = 'Details';
    btnRow.appendChild(detailsBtn);

    const logBtn = document.createElement('button');
    logBtn.className = 'log-btn';
    logBtn.textContent = 'Log';
    btnRow.appendChild(logBtn);

    const videoBtn = document.createElement('button');
    videoBtn.className = 'button-with-icon';
    if (ex.url && ex.url.includes("youtube.com/embed/")) {
        videoBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="icon"><path d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z" fill="#ffffff"></path></svg><span class="text">YOUTUBE</span>`;
        videoBtn.onclick = () => onOpenVideo(ex.url);
    } else {
        videoBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="icon"><path d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z" fill="#ffffff"></path></svg><span class="text">YOUTUBE SEARCH</span>`;
        videoBtn.onclick = () => window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(getTxt(ex.name))}+${lang === 'en' ? 'exercise' : 'Übung'}`, '_blank');
    }
    btnRow.appendChild(videoBtn);

    const favBtn = document.createElement('button');
    favBtn.className = `fav-btn ${ex.favorit === 1 ? 'favorite' : ''}`;
    favBtn.textContent = ex.favorit === 1 ? '★' : '☆';
    favBtn.onclick = (e) => onToggleFav(e, ex, 1);
    btnRow.appendChild(favBtn);

    const disableBtn = document.createElement('button');
    disableBtn.className = `disable-btn ${ex.favorit === -1 ? 'unwanted' : ''}`;
    disableBtn.textContent = '✕';
    disableBtn.onclick = (e) => onToggleFav(e, ex, -1);
    btnRow.appendChild(disableBtn);

    card.appendChild(btnRow);

    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.id = tooltipId;
    tooltip.style.display = 'none';
    tooltip.innerHTML = `<strong>${lang === 'en' ? 'Steps' : 'Ablauf'}:</strong><br>${getTxt(ex.steps)}`;
    card.appendChild(tooltip);

    const logData = loadExerciseLog(logKey);
    const logPanelContainer = document.createElement('div');
    logPanelContainer.innerHTML = renderLogPanelHTML(logPanelId, logData); 
    const logPanel = logPanelContainer.firstElementChild;
    card.appendChild(logPanel);

    detailsBtn.onclick = (e) => { 
        e.stopPropagation(); 
        safeToggle(tooltip, logPanel); 
        detailsBtn.classList.toggle('active', tooltip.style.display === 'block');
        logBtn.classList.remove('active');
    };
    logBtn.onclick = (e) => { 
        e.stopPropagation(); 
        safeToggle(logPanel, tooltip); 
        logBtn.classList.toggle('active', logPanel.style.display === 'block');
        detailsBtn.classList.remove('active');
        refreshLogPanels(logKey); 
    };

    container.appendChild(card);
    attachLogHandlers(logPanelId, logKey, card);
  });
}

export function renderTrainingPlan(plan, days, onOpenVideo, onShuffle) {
  const container = document.getElementById('trainingPlanOutput');
  if (!container) return;
  container.innerHTML = ''; 

  if (plan.length === 0 || plan[0].exercises.length === 0) {
    const card = document.createElement('div');
    card.className = 'card gradient-border';
    card.style.marginTop = '20px';
    const p = document.createElement('p');
    p.textContent = locales[lang].ui.choose_training || 'Please choose at least one training method...';
    card.appendChild(p);
    container.appendChild(card);
    return;
  }

  const yourPersonalPlanText = locales[lang].ui.your_personal || 'Your personal';
  const dayText = locales[lang].ui.day || 'day';
  const planText = locales[lang].ui.plan || 'plan';
  
  const headerDiv = document.createElement('div');
  headerDiv.style.marginTop = '5px';
  const h2 = document.createElement('h2');
  h2.textContent = `${yourPersonalPlanText} ${days}-${dayText} ${planText}:`;
  headerDiv.appendChild(h2);
  const planWrapper = document.createElement('div');
  planWrapper.style.marginTop = '15px';
  headerDiv.appendChild(planWrapper);
  container.appendChild(headerDiv);

  plan.forEach(day => {
    const dayCard = document.createElement('div');
    dayCard.className = 'card gradient-border';
    
    // Translate day name
    const dayName = locales[lang].ui[day.name] || day.name;
    
    const h4 = document.createElement('h4');
    h4.textContent = `${locales[lang].ui.day_capitalize || 'Day'} ${day.day}: ${dayName}`; 
    dayCard.appendChild(h4);

    const exerciseListDiv = document.createElement('div');
    exerciseListDiv.style.marginTop = '10px';
    dayCard.appendChild(exerciseListDiv);

    day.exercises.forEach((ex, index) => {
        const exCard = document.createElement('div');
        exCard.className = 'exercise-card';
        
        const exHeader = document.createElement('div');
        exHeader.className = 'exercise-header';
        const exTitle = document.createElement('div');
        exTitle.className = 'exercise-title';
        exTitle.textContent = getTxt(ex.name);
        exHeader.appendChild(exTitle);
        exCard.appendChild(exHeader);

        const metaHTML = `
            <div class="meta-grid">
                <div><b>${locales[lang].ui.muscle || 'Muscle'}:</b> ${muscleGroupTrans[lang][ex.muscleGroup]}</div>
                <div><b>${locales[lang].ui.effectivity || 'Effectivity'}:</b> ${'★'.repeat(ex.effectiveness)}</div>
                <div><b>${locales[lang].ui.device || 'Device'}:</b> ${equipmentTypestrans[lang][ex.equipment]}</div>
                <div><b>${locales[lang].ui.difficulty_level || 'Difficulty'}:</b> ${difficultyLevelsTrans[lang][ex.difficulty]}</div>
            </div>
        `;
        const metaDiv = document.createElement('div');
        metaDiv.innerHTML = metaHTML;
        exCard.appendChild(metaDiv);
        
        const descDiv = document.createElement('div');
        descDiv.className = 'exercise-desc';
        descDiv.textContent = getTxt(ex.description);
        exCard.appendChild(descDiv);

        const btnRow = document.createElement('div');
        btnRow.className = 'button-row';
        
        const detailsBtn = document.createElement('button');
        detailsBtn.className = 'detail-btn';
        detailsBtn.textContent = 'Details';
        btnRow.appendChild(detailsBtn);

        const logBtn = document.createElement('button');
        logBtn.className = 'log-btn';
        logBtn.textContent = 'Log';
        btnRow.appendChild(logBtn);

        const videoBtn = document.createElement('button');
        videoBtn.className = 'button-with-icon';
        if (ex.url && ex.url.includes("youtube.com/embed/")) {
            videoBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="icon"><path d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z" fill="#ffffff"></path></svg><span class="text">YOUTUBE</span>`;
            videoBtn.onclick = () => onOpenVideo(ex.url);
        } else {
            videoBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="icon"><path d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z" fill="#ffffff"></path></svg><span class="text">YOUTUBE SEARCH</span>`;
            videoBtn.onclick = () => window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(getTxt(ex.name))}+${lang === 'en' ? 'exercise' : 'Übung'}`, '_blank');
        }
        btnRow.appendChild(videoBtn);

        const shuffleBtn = document.createElement('button');
        shuffleBtn.className = 'shuffle';
        shuffleBtn.innerHTML = `<svg class="svg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2 7h-2v-2h2c3.49 0 5.48 1.221 6.822 2.854-.41.654-.754 1.312-1.055 1.939-1.087-1.643-2.633-2.793-5.767-2.793zm16 10c-3.084 0-4.604-1.147-5.679-2.786-.302.627-.647 1.284-1.06 1.937 1.327 1.629 3.291 2.849 6.739 2.849v3l6-4-6-4v3zm0-10v3l6-4-6-4v3c-5.834 0-7.436 3.482-8.85 6.556-1.343 2.921-2.504 5.444-7.15 5.444h-2v2h2c5.928 0 7.543-3.511 8.968-6.609 1.331-2.893 2.479-5.391 7.032-5.391z"/></svg>`;
        shuffleBtn.onclick = () => onShuffle(day.day, index, ex.muscleGroup, ex.equipment);
        btnRow.appendChild(shuffleBtn);

        exCard.appendChild(btnRow);

        const tooltipId = `tooltip-${day.day}-${index}`;
        const tooltip = document.createElement('div');
        tooltip.className = 'tooltip';
        tooltip.id = tooltipId;
        tooltip.style.display = 'none';
        tooltip.innerHTML = `<strong>${lang === 'en' ? 'Steps' : 'Ablauf'}:</strong><br>${getTxt(ex.steps)}`;
        exCard.appendChild(tooltip);

        const logKey = getLogKey(ex);
        const logPanelId = `log-plan-${day.day}-${ex.id}`;
        const logData = loadExerciseLog(logKey);
        const logPanelContainer = document.createElement('div');
        logPanelContainer.innerHTML = renderLogPanelHTML(logPanelId, logData);
        const logPanel = logPanelContainer.firstElementChild;
        exCard.appendChild(logPanel);

        detailsBtn.onclick = (e) => { 
            e.stopPropagation(); 
            safeToggle(tooltip, logPanel); 
            detailsBtn.classList.toggle('active', tooltip.style.display === 'block');
            logBtn.classList.remove('active');
        };
        logBtn.onclick = (e) => { 
            e.stopPropagation(); 
            safeToggle(logPanel, tooltip); 
            logBtn.classList.toggle('active', logPanel.style.display === 'block');
            detailsBtn.classList.remove('active');
            refreshLogPanels(logKey); 
        };

        exerciseListDiv.appendChild(exCard);
        setTimeout(() => { attachLogHandlers(logPanelId, logKey, exCard); }, 0);
    });

    planWrapper.appendChild(dayCard);
  });
}

export function updateState(newState) {
    if (newState.category !== undefined) selectedCategory = newState.category;
    if (newState.muscleGroup !== undefined) selectedMuscleGroup = newState.muscleGroup;
    if (newState.availableEquipment !== undefined) availableEquipment = newState.availableEquipment;
}