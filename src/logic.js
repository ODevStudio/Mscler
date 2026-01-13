import { exercises, muscleSliderPresets, difficultyLevels } from './exercises.js';
import compoundUpdates from './data/compound.json' assert { type: 'json' };

export let compound = false;

// Merge primeMuscle data from update.json for compound exercises (1-day plans only)
function getCompoundEnhancedExercises(exerciseList) {
    return exerciseList.map(ex => {
        const update = compoundUpdates.find(u => u.internalName === ex.internalName);
        if (update) {
            return { ...ex, primeMuscle: update.primeMuscle };
        }
        return ex;
    });
}

// Select exercises for 1-day compound plans - global selection across all muscle groups
function calculateCompoundScore(exercise, usedMuscles, primaryFocusMuscles, secondaryFocusMuscles) {
    let points = 0;
    const primeMuscles = exercise.primeMuscle || [];

    for (const muscle of primeMuscles) {
        // ÄNDERUNG: Hole die aktuelle Anzahl der Nutzungen (0 falls noch nicht vorhanden)
        const usageCount = usedMuscles.get(muscle) || 0;

        // ÄNDERUNG: Nur überspringen, wenn der Muskel schon 2-mal (oder öfter) benutzt wurde
        if (usageCount >= 2) continue;
        if (usageCount == 2){            
            if (primaryFocusMuscles.includes(muscle)) {
                points += 1;
            } else if (secondaryFocusMuscles.includes(muscle)) {
                points += 0.5;
            }
        }
        else{
            if (primaryFocusMuscles.includes(muscle)) {
                points += 2;
            } else if (secondaryFocusMuscles.includes(muscle)) {
                points += 1;
            }
        }
    }

    return (exercise.effectiveness + 10) * points;
}

// Select exercises for 1-day compound plans - global selection across all muscle groups
function selectExercisesGlobalCompound(
    groupedExercises, 
    primaryFocusMuscles,
    secondaryFocusMuscles
) {
    // ÄNDERUNG: Map statt Set, um die Häufigkeit zu zählen
    const usedMuscles = new Map(); 
    const selectedIds = new Set();
    const selectedPerGroup = {}; 

    // Initialize selected arrays for each group
    for (const group of Object.keys(groupedExercises)) {
        selectedPerGroup[group] = [];
    }

    // Calculate total exercises needed
    let totalNeeded = 0;
    for (const group of Object.keys(groupedExercises)) {
        totalNeeded += groupedExercises[group].targetCount;
    }

    let iteration = 0;
    while (iteration < totalNeeded) {
        let bestExercise = null;
        let bestScore = -1;
        let bestGroup = null;

        // Find best exercise across ALL groups that still need exercises
        for (const group of Object.keys(groupedExercises)) {
            const { exercises, targetCount } = groupedExercises[group];

            if (selectedPerGroup[group].length >= targetCount) continue;

            const candidates = exercises.filter(ex =>
                ex.favorit !== -1 && !selectedIds.has(ex.id)
            );

            for (const ex of candidates) {
                let score = 0;
                // Hier wird nun die Map an calculateCompoundScore übergeben
                const calculatedScore = calculateCompoundScore(ex, usedMuscles, primaryFocusMuscles, secondaryFocusMuscles);
                
                if(ex.favorit === 1 && calculatedScore > 0){
                    score = 1000;
                } else {
                    score = calculatedScore;
                }

                if (score > bestScore) {
                    bestScore = score;
                    bestExercise = ex;
                    bestGroup = group;
                }
            }
        }

        if (!bestExercise || bestScore <= 20) break;

        selectedPerGroup[bestGroup].push(bestExercise);
        selectedIds.add(bestExercise.id);
        
        (bestExercise.primeMuscle || []).forEach(m => {
            const currentCount = usedMuscles.get(m) || 0;
            usedMuscles.set(m, currentCount + 1);
        });

        iteration++;

        //const isFav = bestExercise.favorit === 1 ? '[FAV] ' : '';
        //const availablePrimary = primaryFocusMuscles
        //    .filter(m => (usedMuscles.get(m) || 0) < 2)
        //    .map(m => `${m} (${usedMuscles.get(m) || 0})`);
        //const availableSecondary = secondaryFocusMuscles
        //    .filter(m => (usedMuscles.get(m) || 0) < 2)
        //    .map(m => `${m} (${usedMuscles.get(m) || 0})`);
        //console.log(`${isFav}${bestExercise.internalName} (${bestGroup}) | Score: ${bestScore.toFixed(0)} | Eff: ${bestExercise.effectiveness}`);
        //console.log(`  Available Primary: [${availablePrimary.join(', ')}]`);
        //console.log(`  Available Secondary: [${availableSecondary.join(', ')}]`);
        //const contributingMuscles = (bestExercise.primeMuscle || [])
        //    .filter(m => (usedMuscles.get(m) || 0) < 2);
        //console.log(`  -> Contributing Muscles: [${contributingMuscles.join(', ')}]`);
    }

    return selectedPerGroup;
}

export function selectExercisesForGroup(
    availableGroupExercises,
    targetCount,
    targetSubMuscles = [],
    alreadySelectedIds = new Set(),
    prioritizeCompounds = false,
    muscleGroup = null
) {
    let candidates = availableGroupExercises.filter(ex => ex.favorit !== -1);
    const initialCandidateCount = candidates.length;

    if (initialCandidateCount < targetCount) {
        const fallbackEquipments = ["None"];
        const needed = targetCount - initialCandidateCount;

        const fallback = exercises
            .filter(ex =>
                fallbackEquipments.includes(ex.equipment) &&
                ex.favorit !== -1 &&
                (!muscleGroup || ex.muscleGroup === muscleGroup) &&
                !candidates.some(c => c.id === ex.id)
            )
            .slice(0, needed);

        if (fallback.length > 0) {
            candidates = candidates.concat(fallback);
        }
    }

    const selected = [];
    const selectedIdsInThisCall = new Set();
    const primeMusclesCovered = new Set();
    const subMusclesCovered = new Set();

    const checkOverlap = (exercise) => {
        const primeMuscles = exercise.primeMuscle || [];
        if (primeMuscles.length === 0) return false;

        const newMuscles = primeMuscles.filter(m => !primeMusclesCovered.has(m));
        const overlapRatio = (primeMuscles.length - newMuscles.length) / primeMuscles.length;
        return overlapRatio > 0.7 && newMuscles.length <= 1;
    };

    const favorites = candidates
        .filter(ex => ex.favorit === 1)
        .sort((a, b) => b.effectiveness - a.effectiveness);

    for (const fav of favorites) {
        if (selected.length >= targetCount) break;
        if (alreadySelectedIds.has(fav.id)) continue;

        const isFatiguing = (fav.primeMuscle || []).every(m => primeMusclesCovered.has(m));
        if (!isFatiguing) {
            selected.push(fav);
            selectedIdsInThisCall.add(fav.id);
            (fav.primeMuscle || []).forEach(m => primeMusclesCovered.add(m));
            (fav.primeMuscle || []).filter(m => targetSubMuscles.includes(m)).forEach(sm => subMusclesCovered.add(sm));
        }
    }
    const sortedCandidates = candidates
    .filter(ex => !selectedIdsInThisCall.has(ex.id))
    .sort((a, b) => {
        return b.effectiveness - a.effectiveness;
    });
    for (const exercise of sortedCandidates) {
        if (selected.length >= targetCount) break;
        if (alreadySelectedIds.has(exercise.id)) continue;
        if (!checkOverlap(exercise)) {
            selected.push(exercise);
            selectedIdsInThisCall.add(exercise.id);
            (exercise.primeMuscle || []).forEach(m => primeMusclesCovered.add(m));
            (exercise.primeMuscle || []).filter(m => targetSubMuscles.includes(m)).forEach(sm => subMusclesCovered.add(sm));
        }
    }

    const remainingSlots = targetCount - selected.length;
    if (remainingSlots > 0) {
        const finalFallbackCandidates = candidates.filter(ex =>
            !selectedIdsInThisCall.has(ex.id) &&
            !alreadySelectedIds.has(ex.id)
        );

        finalFallbackCandidates.sort((a, b) => {
            if (b.effectiveness !== a.effectiveness) return b.effectiveness - a.effectiveness;
            return 0;
        });

        for (const exercise of finalFallbackCandidates) {
            if (selected.length >= targetCount) break;
            selected.push(exercise);
            selectedIdsInThisCall.add(exercise.id);
        }
    }
    
    if (selected.length < targetCount) {
        const remainingNeeded = targetCount - selected.length;
        const reusable = exercises.filter(ex =>
            alreadySelectedIds.has(ex.id) &&
            ex.muscleGroup === muscleGroup &&
            !selectedIdsInThisCall.has(ex.id)
        ).slice(0, remainingNeeded);

        if (reusable.length > 0) {
            for (const ex of reusable) {
                selected.push(ex);
                selectedIdsInThisCall.add(ex.id);
            }
        }
    }

    selected.sort((a, b) => {
        if (prioritizeCompounds) {
            const countMuscles = (ex) => {
                const primeNew = (ex.primeMuscle || []).filter(m => !primeMusclesCovered.has(m)).length;
                const secondary = (ex.secondaryMuscle || []).length;
                return primeNew + secondary;
            };

            const aScore = countMuscles(a);
            const bScore = countMuscles(b);

            if (bScore !== aScore) return bScore - aScore;
        }
        return b.effectiveness - a.effectiveness;
    });

    selected.forEach(ex => alreadySelectedIds.add(ex.id));

    return selected.slice(0, targetCount);
}

export function generatePlanLogic(days, availableEquipment, muscleSliderValues, difficulty = "Advanced") {
    // Filter by Equipment AND Difficulty
    const difficultyIndex = difficultyLevels.indexOf(difficulty);
    const availableExercises = exercises.filter(ex => 
        availableEquipment.includes(ex.equipment) && 
        difficultyLevels.indexOf(ex.difficulty) <= difficultyIndex
    );
    
    // Group exercises
    const pushBrust = availableExercises.filter(ex => ex.muscleGroup === "Chest");
    const pushSchultern = availableExercises.filter(ex => ex.muscleGroup === "Shoulders");
    const pushTriceps = availableExercises.filter(ex => ex.muscleGroup === "Triceps");
    const pullRücken = availableExercises.filter(ex => ex.muscleGroup === "Back");
    const pullBiceps = availableExercises.filter(ex => ex.muscleGroup === "Biceps");
    const legQuadrizeps = availableExercises.filter(ex => ex.muscleGroup === "Quadrizeps");
    const legHamstrings = availableExercises.filter(ex => ex.muscleGroup === "Hamstrings");
    const legGesäß = availableExercises.filter(ex => ex.muscleGroup === "Glutes");
    const legWaden = availableExercises.filter(ex => ex.muscleGroup === "Calves");
    const coreBauch = availableExercises.filter(ex => ex.muscleGroup === "Abs");
    const pullForearm = availableExercises.filter(ex => ex.muscleGroup === "Forearm");

    // Sub-muscles
    const targetChestSubMuscles = ["Pectoralis (Mid)","Pectoralis (Upper)", "Pectoralis (Lower)","Pectoralis (Outer/Stretch)"];
    const targetBackSubMuscles = ["Latissimus dorsi", "Erector Spinae", "Trapezius (Mid)", "Trapezius (Lower)","Rhomboids" ];
    const targetShoulderSubMuscles = ["Deltoid (Anterior)", "Deltoid (Lateral)", "Deltoid (Posterior)", "Trapezius (Upper)","Rotator Cuff"];
    const targetQuadSubMuscles = ["Rectus Femoris", "Vastus Lateralis", "Vastus Medialis", "Vastus Intermedius"];
    const targetHamstringSubMuscles = ["Hamstrings (Knee Flexion)","Hamstrings (Hip Extension)" ];
    const targetGluteSubMuscles = ["Gluteus Maximus", "Gluteus Medius", "Gluteus Minimus"];
    const targetTricepsSubMuscles = ["Triceps (Long Head)", "Triceps (Lateral Head)", "Triceps (Medial Head)"];
    const targetBicepsSubMuscles = ["Biceps Brachii (Long Head)", "Biceps Brachii (Short Head)", "Brachialis", "Brachioradialis"];
    const targetCalfSubMuscles = ["Gastrocnemius", "Soleus"];
    const targetAbsSubMuscles = ["Rectus Abdominis", "External Obliques", "Internal Obliques","Transverse Abdominis"];
    const targetForearmSubMuscles = ["Wrist Flexors", "Wrist Extensors", "Finger Flexors"];
    const primaryFocusMuscles = [
    // Chest (First 2)
    "Pectoralis (Mid)",
    "Pectoralis (Upper)",
    
    // Back (First 2)
    "Latissimus dorsi",
    "Erector Spinae",
    
    // Shoulder (First 2)
    "Deltoid (Anterior)",
    "Deltoid (Lateral)",
    
    // Quad (First 2)
    "Rectus Femoris",
    "Vastus Lateralis",
    
    // Hamstring (First 2 - alle, da nur 2 vorhanden)
    "Hamstrings (Knee Flexion)",
    "Hamstrings (Hip Extension)",
    
    // Triceps (First 2)
    "Triceps (Long Head)",
    "Triceps (Lateral Head)",
    
    // Biceps (First 2)
    "Biceps Brachii (Long Head)",
    "Biceps Brachii (Short Head)",
    
    // Glute (First 1)
    "Gluteus Maximus",
    
    // Abs (First 1)
    "Rectus Abdominis"
];
const secondaryFocusMuscles = [
    // Chest (Rest)
    "Pectoralis (Lower)",
    "Pectoralis (Outer/Stretch)",
    
    // Back (Rest)
    "Trapezius (Mid)",
    "Trapezius (Lower)",
    "Rhomboids",
    
    // Shoulder (Rest)
    "Deltoid (Posterior)",
    "Trapezius (Upper)",
    "Rotator Cuff",
    
    // Quad (Rest)
    "Vastus Medialis",
    "Vastus Intermedius",
    
    // Hamstring (Rest)
    // Leer, da beide oben sind
    
    // Triceps (Rest)
    "Triceps (Medial Head)",
    
    // Biceps (Rest)
    "Brachialis",
    "Brachioradialis",
    
    // Glute (Rest)
    "Gluteus Medius",
    "Gluteus Minimus",
    
    // Abs (Rest)
    "External Obliques",
    "Internal Obliques",
    "Transverse Abdominis",
    
    // Calf (Complete Group)
    "Gastrocnemius",
    "Soleus",
    
    // Forearm (Complete Group)
    "Wrist Flexors",
    "Wrist Extensors",
    "Finger Flexors"
];

    let plan = [];
    let weeklySelectedIds = new Set();

    const ChestCount = muscleSliderValues["chest"];
    const BackCount =  muscleSliderValues["back"];
    const ShoulderCount =  muscleSliderValues["shoulders"];
    const BicepsCount =   muscleSliderValues["biceps"];
    const TricepsCount =   muscleSliderValues["triceps"];
    const QuadCount =  muscleSliderValues["quadrizeps"];
    const HamstringCount =  muscleSliderValues["hamstrings"];
    const GluteCount =  muscleSliderValues["glutes"];
    const CalfCount =  muscleSliderValues["calves"];
    const AbsCount =  muscleSliderValues["abs"];
    const ForearmCount =  muscleSliderValues["forearm"];


    if (days === 1) {
        // Enhanced exercises with compound primeMuscle data from update.json
        const enhancedExercises = getCompoundEnhancedExercises(availableExercises);

        // Build grouped exercises object for global selection
        const groupedExercises = {
            Quadrizeps: { exercises: enhancedExercises.filter(ex => ex.muscleGroup === "Quadrizeps"), targetCount: QuadCount },
            Chest: { exercises: enhancedExercises.filter(ex => ex.muscleGroup === "Chest"), targetCount: ChestCount },
            Back: { exercises: enhancedExercises.filter(ex => ex.muscleGroup === "Back"), targetCount: BackCount },
            Shoulders: { exercises: enhancedExercises.filter(ex => ex.muscleGroup === "Shoulders"), targetCount: ShoulderCount },
            Biceps: { exercises: enhancedExercises.filter(ex => ex.muscleGroup === "Biceps"), targetCount: BicepsCount },
            Hamstrings: { exercises: enhancedExercises.filter(ex => ex.muscleGroup === "Hamstrings"), targetCount: HamstringCount },
            Glutes: { exercises: enhancedExercises.filter(ex => ex.muscleGroup === "Glutes"), targetCount: GluteCount },
            Triceps: { exercises: enhancedExercises.filter(ex => ex.muscleGroup === "Triceps"), targetCount: TricepsCount },
            Abs: { exercises: enhancedExercises.filter(ex => ex.muscleGroup === "Abs"), targetCount: AbsCount },
            Forearm: { exercises: enhancedExercises.filter(ex => ex.muscleGroup === "Forearm"), targetCount: ForearmCount },
            Calves: { exercises: enhancedExercises.filter(ex => ex.muscleGroup === "Calves"), targetCount: CalfCount }
        };

        // Global selection - picks best exercise across ALL groups each iteration
        const selectedPerGroup = selectExercisesGlobalCompound(groupedExercises, primaryFocusMuscles, secondaryFocusMuscles);

        // Combine all selected exercises in order
        const exercisesDay1 = [
            ...selectedPerGroup.Quadrizeps,
            ...selectedPerGroup.Chest,
            ...selectedPerGroup.Back,
            ...selectedPerGroup.Shoulders,
            ...selectedPerGroup.Biceps,
            ...selectedPerGroup.Hamstrings,
            ...selectedPerGroup.Glutes,
            ...selectedPerGroup.Triceps,
            ...selectedPerGroup.Abs,
            ...selectedPerGroup.Forearm,
            ...selectedPerGroup.Calves
        ];

        plan = [{ day: 1, name: "plan_full_body", exercises: exercisesDay1 }];
    } else if (days === 2) {
        const upperDay = [
        ...selectExercisesForGroup(pushBrust, ChestCount, targetChestSubMuscles, weeklySelectedIds,false,"Chest"),
        ...selectExercisesForGroup(pullRücken, BackCount, targetBackSubMuscles, weeklySelectedIds,false,"Back"),
        ...selectExercisesForGroup(pushSchultern, ShoulderCount, targetShoulderSubMuscles, weeklySelectedIds,false,"Shoulders"),
        ...selectExercisesForGroup(pullBiceps, BicepsCount, targetBicepsSubMuscles, weeklySelectedIds,false,"Biceps"),
        ...selectExercisesForGroup(pushTriceps, TricepsCount, targetTricepsSubMuscles, weeklySelectedIds,false,"Triceps"),
        ...selectExercisesForGroup(pullForearm, ForearmCount, targetForearmSubMuscles, weeklySelectedIds,false,"Forearm"),
        ];
        const lowerDay = [
        ...selectExercisesForGroup(legQuadrizeps, QuadCount, targetQuadSubMuscles, weeklySelectedIds,false,"Quadrizeps"),
        ...selectExercisesForGroup(legHamstrings, HamstringCount, targetHamstringSubMuscles, weeklySelectedIds,false,"Hamstrings"),
        ...selectExercisesForGroup(legGesäß, GluteCount, targetGluteSubMuscles, weeklySelectedIds,false,"Glutes"),
        ...selectExercisesForGroup(legWaden, CalfCount, targetCalfSubMuscles, weeklySelectedIds,false,"Calves"),
        ...selectExercisesForGroup(coreBauch, AbsCount, targetAbsSubMuscles, weeklySelectedIds,false,"Abs"),
        ];
        plan = [
        { day: 1, name: "plan_upper", exercises: upperDay },
        { day: 2, name: "plan_lower", exercises: lowerDay }
        ];
    } else if (days === 3) {
        const pushDay = [
          ...selectExercisesForGroup(pushBrust, ChestCount, targetChestSubMuscles, weeklySelectedIds,false,"Chest"),
          ...selectExercisesForGroup(pushSchultern, ShoulderCount, targetShoulderSubMuscles, weeklySelectedIds,false,"Shoulders"),
          ...selectExercisesForGroup(pushTriceps, TricepsCount, targetTricepsSubMuscles, weeklySelectedIds,false,"Triceps"),
        ];
        const pullDay = [
        ...selectExercisesForGroup(pullRücken,BackCount, targetBackSubMuscles, weeklySelectedIds,false,"Back"),
        ...selectExercisesForGroup(pullBiceps, BicepsCount, targetBicepsSubMuscles, weeklySelectedIds,false,"Biceps"),
        ...selectExercisesForGroup(pullForearm, ForearmCount, targetForearmSubMuscles, weeklySelectedIds,false,"Forearm"),
        ];
        const legDay = [
        ...selectExercisesForGroup(legQuadrizeps, QuadCount, targetQuadSubMuscles, weeklySelectedIds,false,"Quadrizeps"),
        ...selectExercisesForGroup(legHamstrings, HamstringCount, targetHamstringSubMuscles, weeklySelectedIds,false,"Hamstrings"),
        ...selectExercisesForGroup(legGesäß, GluteCount, targetGluteSubMuscles, weeklySelectedIds,false,"Glutes"),
        ...selectExercisesForGroup(legWaden, CalfCount, targetCalfSubMuscles, weeklySelectedIds,false,"Calves"),
        ...selectExercisesForGroup(coreBauch, AbsCount, targetAbsSubMuscles, weeklySelectedIds,false,"Abs"),
        ];
        plan = [
        { day: 1, name: "plan_push", exercises: pushDay },
        { day: 2, name: "plan_pull", exercises: pullDay },
        { day: 3, name: "plan_legs", exercises: legDay }
        ];
    } else if (days === 4) {
        const upperDay1 = [
        ...selectExercisesForGroup(pushBrust, ChestCount, targetChestSubMuscles, weeklySelectedIds,false,"Chest"),
        ...selectExercisesForGroup(pullRücken, BackCount, targetBackSubMuscles, weeklySelectedIds,false,"Back"),
        ...selectExercisesForGroup(pushSchultern, ShoulderCount, targetShoulderSubMuscles, weeklySelectedIds,false,"Shoulders"),
        ...selectExercisesForGroup(pullBiceps, BicepsCount, targetBicepsSubMuscles, weeklySelectedIds,false,"Biceps"),
        ...selectExercisesForGroup(pushTriceps, TricepsCount, targetTricepsSubMuscles, weeklySelectedIds,false,"Triceps"),
        ...selectExercisesForGroup(pullForearm, ForearmCount, targetForearmSubMuscles, weeklySelectedIds,false,"Forearm"),
        ];
        const lowerDay1 = [
        ...selectExercisesForGroup(legQuadrizeps, QuadCount, targetQuadSubMuscles, weeklySelectedIds,false,"Quadrizeps"),
        ...selectExercisesForGroup(legHamstrings, HamstringCount, targetHamstringSubMuscles, weeklySelectedIds,false,"Hamstrings"),
        ...selectExercisesForGroup(legGesäß,  GluteCount, targetGluteSubMuscles, weeklySelectedIds,false,"Glutes"),
        ...selectExercisesForGroup(legWaden,  CalfCount, targetCalfSubMuscles, weeklySelectedIds,false,"Calves"),
        ...selectExercisesForGroup(coreBauch, AbsCount, targetAbsSubMuscles, weeklySelectedIds,false,"Abs"),
        ];
        const upperDay2 = [
        ...selectExercisesForGroup(pushBrust,  ChestCount, targetChestSubMuscles, weeklySelectedIds,false,"Chest"),
        ...selectExercisesForGroup(pullRücken, BackCount, targetBackSubMuscles, weeklySelectedIds,false,"Back"),
        ...selectExercisesForGroup(pushSchultern, ShoulderCount, targetShoulderSubMuscles, weeklySelectedIds,false,"Shoulders"),
        ...selectExercisesForGroup(pullBiceps, BicepsCount, targetBicepsSubMuscles, weeklySelectedIds,false,"Biceps"),
        ...selectExercisesForGroup(pushTriceps, TricepsCount, targetTricepsSubMuscles, weeklySelectedIds,false,"Triceps"),
        ...selectExercisesForGroup(pullForearm, ForearmCount, targetForearmSubMuscles, weeklySelectedIds,false,"Forearm"),
        ];
        const lowerDay2 = [
        ...selectExercisesForGroup(legQuadrizeps, QuadCount, targetQuadSubMuscles, weeklySelectedIds,false,"Quadrizeps"),
        ...selectExercisesForGroup(legHamstrings, HamstringCount, targetHamstringSubMuscles, weeklySelectedIds,false,"Hamstrings"),
        ...selectExercisesForGroup(legGesäß, GluteCount, targetGluteSubMuscles, weeklySelectedIds,false,"Glutes"),
        ...selectExercisesForGroup(legWaden, CalfCount, targetCalfSubMuscles, weeklySelectedIds,false,"Calves"),
        ...selectExercisesForGroup(coreBauch, AbsCount, targetAbsSubMuscles, weeklySelectedIds,false,"Abs"),
        ];

        plan = [
        { day: 1, name: "plan_upper_strength", exercises: upperDay1 },
        { day: 2, name: "plan_lower_strength", exercises: lowerDay1 },
        { day: 3, name: "plan_upper", exercises: upperDay2 }, 
        { day: 4, name: "plan_lower", exercises: lowerDay2 }
        ];
    } else if (days === 5) {
        const pushDay = [
          ...selectExercisesForGroup(pushBrust, ChestCount, targetChestSubMuscles, weeklySelectedIds,false,"Chest"),
          ...selectExercisesForGroup(pushSchultern, ShoulderCount, targetShoulderSubMuscles, weeklySelectedIds,false,"Shoulders"),
          ...selectExercisesForGroup(pushTriceps, TricepsCount, targetTricepsSubMuscles, weeklySelectedIds,false,"Triceps"),
        ];
        const pullDay = [
        ...selectExercisesForGroup(pullRücken,BackCount, targetBackSubMuscles, weeklySelectedIds,false,"Back"),
        ...selectExercisesForGroup(pullBiceps, BicepsCount, targetBicepsSubMuscles, weeklySelectedIds,false,"Biceps"),
        ...selectExercisesForGroup(pullForearm, ForearmCount, targetForearmSubMuscles, weeklySelectedIds,false,"Forearm"),
        ];
        const legDay = [
        ...selectExercisesForGroup(legQuadrizeps, QuadCount, targetQuadSubMuscles, weeklySelectedIds,false,"Quadrizeps"),
        ...selectExercisesForGroup(legHamstrings, HamstringCount, targetHamstringSubMuscles, weeklySelectedIds,false,"Hamstrings"),
        ...selectExercisesForGroup(legGesäß, GluteCount, targetGluteSubMuscles, weeklySelectedIds,false,"Glutes"),
        ...selectExercisesForGroup(legWaden, CalfCount, targetCalfSubMuscles, weeklySelectedIds,false,"Calves"),
        ...selectExercisesForGroup(coreBauch, AbsCount, targetAbsSubMuscles, weeklySelectedIds,false,"Abs"),
        ];

        const upperDay = [
        ...selectExercisesForGroup(pushBrust,  ChestCount, targetChestSubMuscles, weeklySelectedIds,false,"Chest"),
        ...selectExercisesForGroup(pullRücken, BackCount, targetBackSubMuscles, weeklySelectedIds,false,"Back"),
        ...selectExercisesForGroup(pushSchultern, ShoulderCount, targetShoulderSubMuscles, weeklySelectedIds,false,"Shoulders"),
        ...selectExercisesForGroup(pullBiceps, BicepsCount, targetBicepsSubMuscles, weeklySelectedIds,false,"Biceps"),
        ...selectExercisesForGroup(pushTriceps, TricepsCount, targetTricepsSubMuscles, weeklySelectedIds,false,"Triceps"),
        ...selectExercisesForGroup(pullForearm, ForearmCount, targetForearmSubMuscles, weeklySelectedIds,false,"Forearm"),
        ];

        const lowerDay = [
        ...selectExercisesForGroup(legQuadrizeps, QuadCount, targetQuadSubMuscles, weeklySelectedIds,false,"Quadrizeps"),
        ...selectExercisesForGroup(legHamstrings, HamstringCount, targetHamstringSubMuscles, weeklySelectedIds,false,"Hamstrings"),
        ...selectExercisesForGroup(legGesäß, GluteCount, targetGluteSubMuscles, weeklySelectedIds,false,"Glutes"),
        ...selectExercisesForGroup(legWaden, CalfCount, targetCalfSubMuscles, weeklySelectedIds,false,"Calves"),
        ...selectExercisesForGroup(coreBauch, AbsCount, targetAbsSubMuscles, weeklySelectedIds,false,"Abs"),
        ];

        plan = [
        { day: 1, name: "plan_upper_strength", exercises: upperDay },
        { day: 2, name: "plan_lower_strength", exercises: lowerDay },
        { day: 3, name: "plan_push", exercises: pushDay },
        { day: 4, name: "plan_pull", exercises: pullDay },
        { day: 5, name: "plan_legs", exercises: legDay }
        ];
    } else if (days === 6) {
        const pushDay1 = [
          ...selectExercisesForGroup(pushBrust, ChestCount, targetChestSubMuscles, weeklySelectedIds,false,"Chest"),
          ...selectExercisesForGroup(pushSchultern, ShoulderCount, targetShoulderSubMuscles, weeklySelectedIds,false,"Shoulders"),
          ...selectExercisesForGroup(pushTriceps, TricepsCount, targetTricepsSubMuscles, weeklySelectedIds,false,"Triceps"),
        ];
        const pullDay1 = [
        ...selectExercisesForGroup(pullRücken,BackCount, targetBackSubMuscles, weeklySelectedIds,false,"Back"),
        ...selectExercisesForGroup(pullBiceps, BicepsCount, targetBicepsSubMuscles, weeklySelectedIds,false,"Biceps"),
        ...selectExercisesForGroup(pullForearm, ForearmCount, targetForearmSubMuscles, weeklySelectedIds,false,"Forearm"),
        ];
        const legDay1 = [
        ...selectExercisesForGroup(legQuadrizeps, QuadCount, targetQuadSubMuscles, weeklySelectedIds,false,"Quadrizeps"),
        ...selectExercisesForGroup(legHamstrings, HamstringCount, targetHamstringSubMuscles, weeklySelectedIds,false,"Hamstrings"),
        ...selectExercisesForGroup(legGesäß, GluteCount, targetGluteSubMuscles, weeklySelectedIds,false,"Glutes"),
        ...selectExercisesForGroup(legWaden, CalfCount, targetCalfSubMuscles, weeklySelectedIds,false,"Calves"),
        ...selectExercisesForGroup(coreBauch, AbsCount, targetAbsSubMuscles, weeklySelectedIds,false,"Abs"),
        ];

        const pushDay2 = [
          ...selectExercisesForGroup(pushBrust, ChestCount, targetChestSubMuscles, weeklySelectedIds,false,"Chest"),
          ...selectExercisesForGroup(pushSchultern, ShoulderCount, targetShoulderSubMuscles, weeklySelectedIds,false,"Shoulders"),
          ...selectExercisesForGroup(pushTriceps, TricepsCount, targetTricepsSubMuscles, weeklySelectedIds,false,"Triceps"),
        ];
        const pullDay2 = [
        ...selectExercisesForGroup(pullRücken,BackCount, targetBackSubMuscles, weeklySelectedIds,false,"Back"),
        ...selectExercisesForGroup(pullBiceps, BicepsCount, targetBicepsSubMuscles, weeklySelectedIds,false,"Biceps"),
        ...selectExercisesForGroup(pullForearm, ForearmCount, targetForearmSubMuscles, weeklySelectedIds,false,"Forearm"),
        ];
        const legDay2 = [
        ...selectExercisesForGroup(legQuadrizeps, QuadCount, targetQuadSubMuscles, weeklySelectedIds,false,"Quadrizeps"),
        ...selectExercisesForGroup(legHamstrings, HamstringCount, targetHamstringSubMuscles, weeklySelectedIds,false,"Hamstrings"),
        ...selectExercisesForGroup(legGesäß, GluteCount, targetGluteSubMuscles, weeklySelectedIds,false,"Glutes"),
        ...selectExercisesForGroup(legWaden, CalfCount, targetCalfSubMuscles, weeklySelectedIds,false,"Calves"),
        ...selectExercisesForGroup(coreBauch, AbsCount, targetAbsSubMuscles, weeklySelectedIds,false,"Abs"),
        ];

        plan = [
        { day: 1, name: "plan_push_strength", exercises: pushDay1 },
        { day: 2, name: "plan_pull_strength", exercises: pullDay1 },
        { day: 3, name: "plan_legs_strength", exercises: legDay1 },
        { day: 4, name: "plan_push", exercises: pushDay2 },
        { day: 5, name: "plan_pull", exercises: pullDay2 },
        { day: 6, name: "plan_legs", exercises: legDay2 } 
        ];
    } else {
        plan = [{ day: 1, name: "plan_none", exercises: [] }];
    }
    
    return plan;
}