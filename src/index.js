import './style.css';
import { exercises, muscleSliderPresets, muscleGroups, muscleGroupTrans, muscleCategoryTrans, difficultyLevels } from './exercises.js';
import { lang, setLanguageDirect, setThemeDirect, LS_LANG, LS_THEME, saveFavoritesToLocalStorage, restoreFavoritesFromLocalStorage, loadPlan, savePlan, saveAvailableEquipment, saveUserPlan, getUserPlans, deleteUserPlan } from './storage.js';
import { renderCategories, renderMuscleGroups, renderEquipment, renderAvailableEquipment, renderExercises, renderTrainingPlan, safeToggle, updateState, locales, renderDifficulty } from './ui.js';
import { generatePlanLogic } from './logic.js';

// Global State (partially managed here, partially in ui.js for now due to refactor limits)
let new_plan = false;
let muscleSliderValues = {};
let selectedCategory = "";
let selectedMuscleGroup = "";
let selectedDifficulty = "Advanced"; // Default
let availableEquipment = [];
let filteredExercises = [];
let plan = [];

document.addEventListener('DOMContentLoaded', () => {
    init();

    const toggleBtn = document.getElementById('toggleBtn');
    if(toggleBtn) {
        toggleBtn.addEventListener('click', toggleTrainingPlanForm); 
    }

    const generateBtn = document.getElementById('generate');
    if(generateBtn) {
        generateBtn.addEventListener('click', () => {
            new_plan = true; 
            generateTrainingPlan();
        });
    }

    const sliders = document.querySelectorAll('.muscle-slider-input');
    sliders.forEach(slider => {
        slider.addEventListener('input', (e) => {
            updateValue(e.target); 
        });
    });

    const topBtn = document.getElementById('topbtn');
    if (topBtn) {
        topBtn.addEventListener('click', () => {
             topFunction(); 
        });
    }

    const toggleModeBtn = document.getElementById('toggleMode');
    if (toggleModeBtn) {
        toggleModeBtn.addEventListener('click', () => {
             toggleTheme();
        });
    }

    // Save/Load Buttons
    const savePlanBtn = document.getElementById('savePlanBtn');
    if (savePlanBtn) {
        savePlanBtn.addEventListener('click', openSaveModal);
    }

    const loadPlanBtn = document.getElementById('loadPlanBtn');
    if (loadPlanBtn) {
        loadPlanBtn.addEventListener('click', openLoadModal);
    }

    const closeSaveModalBtn = document.getElementById('closeSaveModal');
    if (closeSaveModalBtn) {
        closeSaveModalBtn.addEventListener('click', closeSaveModal);
    }

    const confirmSavePlanBtn = document.getElementById('confirmSavePlan');
    if (confirmSavePlanBtn) {
        confirmSavePlanBtn.addEventListener('click', saveCurrentPlan);
    }

    const closeLoadModalBtn = document.getElementById('closeLoadModal');
    if (closeLoadModalBtn) {
        closeLoadModalBtn.addEventListener('click', closeLoadModal);
    }
    
    // Delete Confirmation Logic
    let planToDeleteIndex = -1;
    const confirmDeleteModal = document.getElementById('confirmDeleteModal');
    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
    const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');

    if (confirmDeleteBtn) {
        confirmDeleteBtn.addEventListener('click', () => {
            if (planToDeleteIndex > -1) {
                deleteUserPlan(planToDeleteIndex);
                renderLoadList();
                const plans = getUserPlans();
                if (plans.length === 0) {
                     document.getElementById('loadPlanBtn').style.display = 'none';
                     closeLoadModal();
                }
                confirmDeleteModal.classList.add('hidden');
                planToDeleteIndex = -1;
            }
        });
    }

    if (cancelDeleteBtn) {
        cancelDeleteBtn.addEventListener('click', () => {
            confirmDeleteModal.classList.add('hidden');
            planToDeleteIndex = -1;
        });
    }
    
    // Wrapper to open confirmation
    window.openDeleteConfirmation = function(index) {
        planToDeleteIndex = index;
        confirmDeleteModal.classList.remove('hidden');
    }

    const daysRange = document.getElementById('daysRange');
    if (daysRange) {
        daysRange.addEventListener('input', (e) => {
             updateDaysValue(e.target.value);
        });        
        updateDaysValue(daysRange.value);
    }
   
    document.getElementById('closeVideo').onclick = () => {
        document.getElementById('videoFrame').src = ''; 
        document.getElementById('videoModal').classList.add('hidden');
    };

    document.getElementById('videoModal').addEventListener('click', function(event) {
        if (!event.target.closest('.video-content')) {
            document.getElementById('videoFrame').src = ''; 
            document.getElementById('videoModal').classList.add('hidden');
        }
    }); 
    
    document.querySelectorAll('.advanced-toggle').forEach(toggle => {
        toggle.addEventListener('click', () => {
            const wrapper = toggle.closest('.advanced-wrapper');
            const content = wrapper.querySelector('.advanced-content');
            const button = toggle.querySelector('.setting-btn');
            const isVisible = content.classList.toggle('visible');
            button.classList.toggle('active', isVisible);
        });
    });

    addLanguageToggleButton();
    
    // Initialize sliders
    const savedValues = localStorage.getItem("muscleSliderValues");
    if (savedValues) {
      muscleSliderValues = JSON.parse(savedValues);
    }
    document.querySelectorAll(".muscle-slider input[type='range']").forEach(slider => {
      const id = slider.id;
      const savedValue = muscleSliderValues[id];
      if (typeof savedValue === "number") {
        slider.value = savedValue;
      }
      const value = parseInt(slider.value, 10);
      muscleSliderValues[id] = value;
      slider.nextElementSibling.textContent = value;
    });

    const savedDays = localStorage.getItem("trainingDays");
    if (savedDays) {
        const days = parseInt(savedDays);
        if (daysRange) {
            daysRange.value = days;
            document.getElementById('daysValue').textContent = days + (lang === 'en' ? " days" : " Tage");
        }
    }
});

// --- Initialization ---
function init() {
  let savedLang  = localStorage.getItem(LS_LANG)  || 'en';
  const savedTheme = localStorage.getItem(LS_THEME) || 'light';
  
  selectedDifficulty = localStorage.getItem("selectedDifficulty") || "Advanced";

  if (!locales[savedLang]) savedLang = 'en';

  setLanguageDirect(savedLang);
  setThemeDirect(savedTheme);

  const toggleBtn = document.getElementById('toggleMode');
  if (toggleBtn) {
    switch (savedTheme) {
      case 'light':
        toggleBtn.textContent = 'Dark mode';
        break;
      case 'dark':
        toggleBtn.textContent = 'Glass mode';
        break;
      case 'glass':
        toggleBtn.textContent = 'Light mode';
        break;
      default:
        toggleBtn.textContent = 'Dark mode';
    }
  }

  restoreFavoritesFromLocalStorage(exercises);

  const loadedData = loadPlan();
  plan = loadedData.plan;
  availableEquipment = loadedData.availableEquipment;

  if (plan && plan.length > 0) {
    toggleTrainingPlanForm();
    renderTrainingPlan(plan, plan.length, openVideo, shuffleExercise);
    const saveBtn = document.getElementById('savePlanBtn');
    if (saveBtn) saveBtn.style.display = 'inline-block';
  }

  const userPlans = getUserPlans();
  if (userPlans && userPlans.length > 0) {
      const loadBtn = document.getElementById('loadPlanBtn');
      if (loadBtn) loadBtn.style.display = 'inline-block';
  }

  updateUILanguage();
  updateFilteredExercises();
  
  // Render initial UI state
  renderCategories(selectedCategory, onSelectCategory);
  renderEquipment(availableEquipment, onFilterEq);
  renderAvailableEquipment(availableEquipment, onToggleEq);
  renderDifficulty(selectedDifficulty, onSelectDifficulty);
}

// --- Logic Handlers ---

function onSelectCategory(category) {
    selectedCategory = category;
    selectedMuscleGroup = "";
    document.getElementById('muscleGroupContainer').style.display = 'block';
    renderCategories(selectedCategory, onSelectCategory);
    renderMuscleGroups(selectedCategory, selectedMuscleGroup, onSelectMuscle);
    updateFilteredExercises();
    updateListTitle();
}

function onSelectMuscle(muscle) {
    selectedMuscleGroup = muscle;
    renderMuscleGroups(selectedCategory, selectedMuscleGroup, onSelectMuscle);
    updateFilteredExercises();
    updateListTitle();
}

function onSelectDifficulty(difficulty) {
    selectedDifficulty = difficulty;
    localStorage.setItem("selectedDifficulty", difficulty);
    renderDifficulty(selectedDifficulty, onSelectDifficulty);
    updateFilteredExercises();
}

function onFilterEq(equipment) {
    if (availableEquipment.includes(equipment)) {
        availableEquipment = availableEquipment.filter(eq => eq !== equipment);
    } else {
        availableEquipment.push(equipment);
    }
    saveAvailableEquipment(availableEquipment);
    renderEquipment(availableEquipment, onFilterEq);
    renderAvailableEquipment(availableEquipment, onToggleEq);
    updateFilteredExercises();
}

function onToggleEq(equipment) {
    if (availableEquipment.includes(equipment)) {
        availableEquipment = availableEquipment.filter(eq => eq !== equipment);
    } else {
        availableEquipment.push(equipment);
    }
    saveAvailableEquipment(availableEquipment);
    renderAvailableEquipment(availableEquipment, onToggleEq);
    renderEquipment(availableEquipment, onFilterEq);
    updateFilteredExercises();
}

function openVideo(embedUrl) {
  document.getElementById('videoFrame').src = embedUrl;
  document.getElementById('videoModal').classList.remove('hidden');
}

function updateValue(slider) {
    const value = parseInt(slider.value, 10);
    const id = slider.id;
    muscleSliderValues[id] = value;
    slider.nextElementSibling.textContent = value;
    localStorage.setItem("muscleSliderValues", JSON.stringify(muscleSliderValues));
}

function updateDaysValue(val) {
  const days = parseInt(val);
  const dayUnit = locales[lang].ui.days_unit || (lang === 'en' ? " days" : " Tage");
  document.getElementById('daysValue').textContent = days + dayUnit;

  const preset = muscleSliderPresets[days];
  if (!preset) return;

  for (let muscle in preset) {
    const newValue = preset[muscle];
    muscleSliderValues[muscle] = newValue;
    const input = document.getElementById(muscle);
    const display = input?.nextElementSibling;
    if (input) input.value = newValue;
    if (display) display.textContent = newValue;
  }
}

function toggleTrainingPlanForm() {
    const formContainer = document.getElementById('trainingPlanForm');
    const listContainer = document.getElementById('exerciseList');
    const toggleBtn = document.getElementById('toggleBtn');
    const trainingPlanOutput = document.getElementById('trainingPlanOutput');
    const exer = document.getElementById('exer');

    if (formContainer.style.display === 'none') {
        formContainer.style.display = 'block';
        trainingPlanOutput.style.display = 'block';
        listContainer.style.display = 'none';
        exer.style.display = 'none';
        toggleBtn.textContent = locales[lang].ui.exercises_btn || (lang === 'en' ? 'Exercises' : 'Übungen');
        renderAvailableEquipment(availableEquipment, onToggleEq);
        renderDifficulty(selectedDifficulty, onSelectDifficulty);
    } else {
        formContainer.style.display = 'none';
        trainingPlanOutput.style.display = 'none';
        listContainer.style.display = 'block';
        exer.style.display = 'block';
        toggleBtn.textContent =  locales[lang].ui.training_btn || (lang === 'en' ? 'Training' : 'Training');
        renderDifficulty(selectedDifficulty, onSelectDifficulty);
    }
}

function generateTrainingPlan() {
    const days = parseInt(document.getElementById('daysRange').value);
    localStorage.setItem("trainingDays", days.toString());
    
    plan = generatePlanLogic(days, availableEquipment, muscleSliderValues, selectedDifficulty);
    
    savePlan(plan);
    renderTrainingPlan(plan, days, openVideo, shuffleExercise);
    
    const saveBtn = document.getElementById('savePlanBtn');
    if (saveBtn) saveBtn.style.display = 'inline-block';
}

function shuffleExercise(dayIndex, exerciseIndex, muscleGroup, equipment) {
    const day = plan.find(d => d.day === dayIndex);
    if (!day) return;

    const currentExercise = day.exercises[exerciseIndex];
    const usedExerciseIds = new Set(
        day.exercises.filter((ex, i) => i !== exerciseIndex).map(ex => ex.id)
    );

    const difficultyIndex = difficultyLevels.indexOf(selectedDifficulty);

    let alternatives = exercises.filter(ex =>
        ex.muscleGroup === muscleGroup &&
        availableEquipment.includes(ex.equipment) &&
        difficultyLevels.indexOf(ex.difficulty) <= difficultyIndex &&
        ex.favorit !== -1 &&
        ex.id !== currentExercise.id &&
        !usedExerciseIds.has(ex.id)
    );

    if (alternatives.length === 0) {
         alternatives = exercises.filter(ex =>
            ex.muscleGroup === muscleGroup &&
            ex.equipment === equipment &&
            ex.favorit !== -1 &&
            ex.id !== currentExercise.id
        );
    }

    alternatives.sort((a, b) => b.effectiveness - a.effectiveness);
    const topAlternatives = alternatives.slice(0, Math.min(3, alternatives.length));
    
    if (topAlternatives.length > 0) {
        const randomIndex = Math.floor(Math.random() * topAlternatives.length);
        day.exercises[exerciseIndex] = topAlternatives[randomIndex];
        savePlan(plan);
        renderTrainingPlan(plan, plan.length, openVideo, shuffleExercise);
    } else {
        console.log("No alternative found.");
    }
}

function updateFilteredExercises() {
    filteredExercises = [...exercises];
    
    const difficultyIndex = difficultyLevels.indexOf(selectedDifficulty);
    filteredExercises = filteredExercises.filter(ex => {
        return difficultyLevels.indexOf(ex.difficulty) <= difficultyIndex;
    });

    if (selectedMuscleGroup) {
        filteredExercises = filteredExercises.filter(ex => ex.muscleGroup === selectedMuscleGroup);
    } else if (selectedCategory) {
        filteredExercises = filteredExercises.filter(ex => ex.category === selectedCategory);
    }
    if (availableEquipment.length > 0) {
        filteredExercises = filteredExercises.filter(ex => availableEquipment.includes(ex.equipment));
    }
    filteredExercises.sort((a, b) => b.effectiveness - a.effectiveness);
    
    renderExercises(filteredExercises, openVideo, (e, ex, val) => {
        e.stopPropagation();
        ex.favorit = ex.favorit === val ? 0 : val;
        updateFilteredExercises();
        saveFavoritesToLocalStorage(exercises);
    });
}

function updateListTitle() {
    const title = document.getElementById('listTitle');
    const prefix = locales[lang].ui.exercises_for || (lang === 'en' ? 'Exercises for' : 'Übungen für');
    
    if (selectedMuscleGroup) {
        const name = (muscleGroupTrans && muscleGroupTrans[lang] && muscleGroupTrans[lang][selectedMuscleGroup]) ? muscleGroupTrans[lang][selectedMuscleGroup] : selectedMuscleGroup;
        title.textContent = `${prefix} ${name}`;
    } else if (selectedCategory) {
        const name = (muscleCategoryTrans && muscleCategoryTrans[lang] && muscleCategoryTrans[lang][selectedCategory]) ? muscleCategoryTrans[lang][selectedCategory] : selectedCategory;
        title.textContent = `${prefix} ${name}`;
    } else {
        title.textContent = locales[lang].ui.all_exercises || (lang === 'en' ? "All exercises" : "Alle Übungen");
    }
}

function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme') || 'light';

    // Three-way cycle: light -> dark -> glass -> light
    let newTheme;
    let buttonText;

    switch (currentTheme) {
        case 'light':
            newTheme = 'dark';
            buttonText = 'Glass mode';
            break;
        case 'dark':
            newTheme = 'glass';
            buttonText = 'Light mode';
            break;
        case 'glass':
        default:
            newTheme = 'light';
            buttonText = 'Dark mode';
            break;
    }

    setThemeDirect(newTheme);
    const toggleBtn = document.getElementById('toggleMode');
    if (toggleBtn) toggleBtn.textContent = buttonText;
}

function updateUILanguage() {
    const ui = locales[lang].ui;
    const elements = {
        'toggleBtn': ui.exercises_btn,
        'generate': ui.generate_training,
        'musclegrp': ui.muscle_groups,
        'category': ui.category,
        'devicefilter': ui.device_filter,
        'difficultyfilter': ui.difficulty_level,
        'difficultyPlan': ui.difficulty_level,
        'listTitle': ui.all_exercises,
        'create': ui.create_training,
        'generate': ui.generate_training,
        'trainingdays': ui.training_days,
        'available': ui.available_equipment,
        'advanced-label': ui.advanced_settings,
        'hint': ui.click_hint,
    };
    for (const [id, text] of Object.entries(elements)) {
        const element = document.querySelector(`#${id}`);
        if (element) element.textContent = text;
    }
}

function addLanguageToggleButton() {
  const toggleModeBtn = document.getElementById('toggleMode');
  if(!document.getElementById('toggleLang') && toggleModeBtn) {
      const langToggleBtn = document.createElement('button');
      langToggleBtn.id = 'toggleLang';
      langToggleBtn.textContent = lang.toUpperCase();
      langToggleBtn.onclick = toggleLanguage;
      toggleModeBtn.parentNode.insertBefore(langToggleBtn, toggleModeBtn.nextSibling);
  }
}

function toggleLanguage() {
  const langs = ['en', 'de', 'es', 'fr'];
  const currentIndex = langs.indexOf(lang);
  const newLang = langs[(currentIndex + 1) % langs.length];
  
  setLanguageDirect(newLang);
  const langToggleBtn = document.getElementById('toggleLang');
  if (langToggleBtn) langToggleBtn.textContent = newLang.toUpperCase();
  
  updateUILanguage();
  renderCategories(selectedCategory, onSelectCategory);
  renderEquipment(availableEquipment, onFilterEq);
  renderAvailableEquipment(availableEquipment, onToggleEq);
  renderDifficulty(selectedDifficulty, onSelectDifficulty);
  if (plan && plan.length > 0) {
      renderTrainingPlan(plan, localStorage.getItem("trainingDays") || plan.length, openVideo, shuffleExercise);
  }
  
  if (selectedCategory) {
      renderMuscleGroups(selectedCategory, selectedMuscleGroup, onSelectMuscle);
  }
  updateFilteredExercises();
  updateListTitle();
  updateDaysValue(document.getElementById('daysRange').value);
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

window.onscroll = function() {
    const topbutton = document.getElementById("topbtn");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topbutton.style.display = "block";
    } else {
        topbutton.style.display = "none";
    }
};

// --- Save/Load Logic ---

function openSaveModal() {
    document.getElementById('saveModal').classList.remove('hidden');
    document.getElementById('planNameInput').value = '';
    document.getElementById('planNameInput').focus();
}

function closeSaveModal() {
    document.getElementById('saveModal').classList.add('hidden');
}

function saveCurrentPlan() {
    const name = document.getElementById('planNameInput').value.trim();
    if (!name) {
        alert("Please enter a name.");
        return;
    }

    const planData = {
        name: name,
        date: new Date().toISOString(),
        plan: plan,
        days: document.getElementById('daysRange').value,
        availableEquipment: availableEquipment,
        muscleSliderValues: muscleSliderValues,
        selectedDifficulty: selectedDifficulty
    };

    if (!saveUserPlan(planData)) {
        alert("Limit of 50 plans reached. Please delete some plans before saving.");
        return;
    }
    closeSaveModal();
    
    const loadBtn = document.getElementById('loadPlanBtn');
    if (loadBtn) loadBtn.style.display = 'inline-block';
}

function openLoadModal() {
    renderLoadList();
    document.getElementById('loadModal').classList.remove('hidden');
}

function closeLoadModal() {
    document.getElementById('loadModal').classList.add('hidden');
}

function renderLoadList() {
    const list = document.getElementById('savedPlansList');
    list.innerHTML = '';
    const plans = getUserPlans();

    if (plans.length === 0) {
        list.innerHTML = '<p>No saved plans.</p>';
        return;
    }

    plans.forEach((p, index) => {
        const row = document.createElement('div');
        row.className = 'saved-plan-item';
        
        const info = document.createElement('div');
        info.className = 'plan-info';
        info.innerHTML = `<strong>${p.name}</strong><small>${new Date(p.date).toLocaleDateString()} • ${p.days} Days</small>`;
        row.appendChild(info);

        const btnGroup = document.createElement('div');
        btnGroup.className = 'plan-actions';
        
        const loadBtn = document.createElement('button');
        loadBtn.textContent = 'Load';
        loadBtn.className = 'btn-success';
        loadBtn.onclick = () => loadUserPlanWrapper(index);
        
        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.className = 'unwanted';
        delBtn.onclick = () => deleteUserPlanWrapper(index);

        btnGroup.appendChild(loadBtn);
        btnGroup.appendChild(delBtn);
        row.appendChild(btnGroup);

        list.appendChild(row);
    });
}

function loadUserPlanWrapper(index) {
    const plans = getUserPlans();
    const p = plans[index];
    if (!p) return;

    // Restore State
    plan = p.plan;
    availableEquipment = p.availableEquipment;
    muscleSliderValues = p.muscleSliderValues;
    selectedDifficulty = p.selectedDifficulty;
    const days = parseInt(p.days);

    // Update Days UI
    const dayUnit = locales[lang].ui.days_unit || (lang === 'en' ? " days" : " Tage");
    document.getElementById('daysValue').textContent = days + dayUnit;
    document.getElementById('daysRange').value = days;
    
    // Restore difficulty UI
    localStorage.setItem("selectedDifficulty", selectedDifficulty);
    renderDifficulty(selectedDifficulty, onSelectDifficulty);

    // Restore sliders
    for (let key in muscleSliderValues) {
        const slider = document.getElementById(key);
        if (slider) {
            slider.value = muscleSliderValues[key];
            const display = slider.nextElementSibling;
            if (display) display.textContent = muscleSliderValues[key];
        }
    }
    
    // Restore Equipment UI
    renderAvailableEquipment(availableEquipment, onToggleEq);
    renderEquipment(availableEquipment, onFilterEq);

    // Save to current session storage
    savePlan(plan);
    localStorage.setItem("trainingDays", days.toString());
    saveAvailableEquipment(availableEquipment);
    localStorage.setItem("muscleSliderValues", JSON.stringify(muscleSliderValues));

    renderTrainingPlan(plan, days, openVideo, shuffleExercise);
    
    const formContainer = document.getElementById('trainingPlanForm');
    if (formContainer.style.display === 'none') {
        toggleTrainingPlanForm();
    }

    closeLoadModal();
    
    document.getElementById('savePlanBtn').style.display = 'inline-block';
}

function deleteUserPlanWrapper(index) {

    if (window.openDeleteConfirmation) {

        window.openDeleteConfirmation(index);

    }

}
