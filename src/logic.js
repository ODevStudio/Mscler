import { exercises, muscleSliderPresets, difficultyLevels } from './exercises.js';
import compoundUpdates from './data/compound.json' assert { type: 'json' };

function getCompoundEnhancedExercises(exerciseList) {
    return exerciseList.map(ex => {
        const update = compoundUpdates.find(u => u.internalName === ex.internalName);
        if (update) {
            return { ...ex, primeMuscle: update.primeMuscle };
        }
        return ex;
    });
}

function calculateCompoundScore(exercise, usedMuscles, primaryFocusMuscles, secondaryFocusMuscles) {
    let points = 0;
    const primeMuscles = exercise.primeMuscle || [];

    for (const muscle of primeMuscles) {
        const usageCount = usedMuscles.get(muscle) || 0;

        if (usageCount > 2) continue;
        if (usageCount === 2){            
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

function selectExercisesGlobalCompound(
    groupedExercises, 
    primaryFocusMuscles,
    secondaryFocusMuscles
) {
    const usedMuscles = new Map(); 
    const selectedIds = new Set();
    const selectedPerGroup = {}; 
    for (const group of Object.keys(groupedExercises)) {
        selectedPerGroup[group] = [];
    }
    let totalNeeded = 0;
    for (const group of Object.keys(groupedExercises)) {
        totalNeeded += groupedExercises[group].targetCount;
    }

    let iteration = 0;
    while (iteration < totalNeeded) {
        let bestExercise = null;
        let bestScore = -1;
        let bestGroup = null;
        for (const group of Object.keys(groupedExercises)) {
            const { exercises, targetCount } = groupedExercises[group];

            if (selectedPerGroup[group].length >= targetCount) continue;

            const candidates = exercises.filter(ex =>
                ex.favorit !== -1 && !selectedIds.has(ex.id)
            );

            for (const ex of candidates) {
                let score = 0;
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

function buildMuscleGroupArrays(availableExercises) {
    const groups = ["Chest", "Shoulders", "Triceps", "Back", "Biceps",
                    "Quadrizeps", "Hamstrings", "Glutes", "Calves", "Abs", "Forearm"];
    const result = {};
    for (const group of groups) {
        result[group] = availableExercises.filter(ex => ex.muscleGroup === group);
    }
    return result;
}

function buildSubMuscleTargets() {
    return {
        Chest: ["Pectoralis (Mid)", "Pectoralis (Upper)", "Pectoralis (Lower)", "Pectoralis (Outer/Stretch)"],
        Back: ["Latissimus dorsi", "Erector Spinae", "Trapezius (Mid)", "Trapezius (Lower)", "Rhomboids"],
        Shoulders: ["Deltoid (Anterior)", "Deltoid (Lateral)", "Deltoid (Posterior)", "Trapezius (Upper)", "Rotator Cuff"],
        Quadrizeps: ["Rectus Femoris", "Vastus Lateralis", "Vastus Medialis", "Vastus Intermedius"],
        Hamstrings: ["Hamstrings (Knee Flexion)", "Hamstrings (Hip Extension)"],
        Glutes: ["Gluteus Maximus", "Gluteus Medius", "Gluteus Minimus"],
        Triceps: ["Triceps (Long Head)", "Triceps (Lateral Head)", "Triceps (Medial Head)"],
        Biceps: ["Biceps Brachii (Long Head)", "Biceps Brachii (Short Head)", "Brachialis", "Brachioradialis"],
        Calves: ["Gastrocnemius", "Soleus"],
        Abs: ["Rectus Abdominis", "External Obliques", "Internal Obliques", "Transverse Abdominis"],
        Forearm: ["Wrist Flexors", "Wrist Extensors", "Finger Flexors"],
    };
}

function buildMuscleCounts(muscleSliderValues) {
    return {
        Chest: muscleSliderValues["chest"],
        Back: muscleSliderValues["back"],
        Shoulders: muscleSliderValues["shoulders"],
        Biceps: muscleSliderValues["biceps"],
        Triceps: muscleSliderValues["triceps"],
        Quadrizeps: muscleSliderValues["quadrizeps"],
        Hamstrings: muscleSliderValues["hamstrings"],
        Glutes: muscleSliderValues["glutes"],
        Calves: muscleSliderValues["calves"],
        Abs: muscleSliderValues["abs"],
        Forearm: muscleSliderValues["forearm"],
    };
}

function buildDayExercises(groupArrays, subMuscleTargets, muscleCounts, groupNames, weeklySelectedIds) {
    return groupNames.flatMap(name =>
        selectExercisesForGroup(
            groupArrays[name],
            muscleCounts[name],
            subMuscleTargets[name],
            weeklySelectedIds,
            false,
            name
        )
    );
}

// Array order = exercise selection order (affects weeklySelectedIds accumulation).
// The `day` field determines final plan ordering.
// For 5-day plans, selection runs push/pull/legs first, then upper/lower,
// but upper/lower are assigned to days 1-2 in the final plan.
const DAY_CONFIGS = {
    2: [
        { day: 1, name: "plan_upper", groups: ["Chest", "Back", "Shoulders", "Biceps", "Triceps", "Forearm"] },
        { day: 2, name: "plan_lower", groups: ["Quadrizeps", "Hamstrings", "Glutes", "Calves", "Abs"] },
    ],
    3: [
        { day: 1, name: "plan_push", groups: ["Chest", "Shoulders", "Triceps"] },
        { day: 2, name: "plan_pull", groups: ["Back", "Biceps", "Forearm"] },
        { day: 3, name: "plan_legs", groups: ["Quadrizeps", "Hamstrings", "Glutes", "Calves", "Abs"] },
    ],
    4: [
        { day: 1, name: "plan_upper_strength", groups: ["Chest", "Back", "Shoulders", "Biceps", "Triceps", "Forearm"] },
        { day: 2, name: "plan_lower_strength", groups: ["Quadrizeps", "Hamstrings", "Glutes", "Calves", "Abs"] },
        { day: 3, name: "plan_upper", groups: ["Chest", "Back", "Shoulders", "Biceps", "Triceps", "Forearm"] },
        { day: 4, name: "plan_lower", groups: ["Quadrizeps", "Hamstrings", "Glutes", "Calves", "Abs"] },
    ],
    5: [
        { day: 3, name: "plan_push", groups: ["Chest", "Shoulders", "Triceps"] },
        { day: 4, name: "plan_pull", groups: ["Back", "Biceps", "Forearm"] },
        { day: 5, name: "plan_legs", groups: ["Quadrizeps", "Hamstrings", "Glutes", "Calves", "Abs"] },
        { day: 1, name: "plan_upper_strength", groups: ["Chest", "Back", "Shoulders", "Biceps", "Triceps", "Forearm"] },
        { day: 2, name: "plan_lower_strength", groups: ["Quadrizeps", "Hamstrings", "Glutes", "Calves", "Abs"] },
    ],
    6: [
        { day: 1, name: "plan_push_strength", groups: ["Chest", "Shoulders", "Triceps"] },
        { day: 2, name: "plan_pull_strength", groups: ["Back", "Biceps", "Forearm"] },
        { day: 3, name: "plan_legs_strength", groups: ["Quadrizeps", "Hamstrings", "Glutes", "Calves", "Abs"] },
        { day: 4, name: "plan_push", groups: ["Chest", "Shoulders", "Triceps"] },
        { day: 5, name: "plan_pull", groups: ["Back", "Biceps", "Forearm"] },
        { day: 6, name: "plan_legs", groups: ["Quadrizeps", "Hamstrings", "Glutes", "Calves", "Abs"] },
    ],
};

const PRIMARY_FOCUS_MUSCLES = [
    "Pectoralis (Mid)", "Pectoralis (Upper)",
    "Latissimus dorsi", "Erector Spinae",
    "Deltoid (Anterior)", "Deltoid (Lateral)",
    "Rectus Femoris", "Vastus Lateralis",
    "Hamstrings (Knee Flexion)", "Hamstrings (Hip Extension)",
    "Triceps (Long Head)", "Triceps (Lateral Head)",
    "Biceps Brachii (Long Head)", "Biceps Brachii (Short Head)",
    "Gluteus Maximus",
    "Rectus Abdominis",
];

const SECONDARY_FOCUS_MUSCLES = [
    "Pectoralis (Lower)", "Pectoralis (Outer/Stretch)",
    "Trapezius (Mid)", "Trapezius (Lower)", "Rhomboids",
    "Deltoid (Posterior)", "Trapezius (Upper)", "Rotator Cuff",
    "Vastus Medialis", "Vastus Intermedius",
    "Triceps (Medial Head)",
    "Brachialis", "Brachioradialis",
    "Gluteus Medius", "Gluteus Minimus",
    "External Obliques", "Internal Obliques", "Transverse Abdominis",
    "Gastrocnemius", "Soleus",
    "Wrist Flexors", "Wrist Extensors", "Finger Flexors",
];

const COMPOUND_GROUP_ORDER = [
    "Quadrizeps", "Chest", "Back", "Shoulders", "Biceps",
    "Hamstrings", "Glutes", "Triceps", "Abs", "Forearm", "Calves"
];

function buildCompoundPlan(availableExercises, muscleCounts) {
    const enhancedExercises = getCompoundEnhancedExercises(availableExercises);

    const groupedExercises = {};
    for (const group of COMPOUND_GROUP_ORDER) {
        groupedExercises[group] = {
            exercises: enhancedExercises.filter(ex => ex.muscleGroup === group),
            targetCount: muscleCounts[group],
        };
    }

    const selectedPerGroup = selectExercisesGlobalCompound(
        groupedExercises, PRIMARY_FOCUS_MUSCLES, SECONDARY_FOCUS_MUSCLES
    );

    const exercisesDay1 = COMPOUND_GROUP_ORDER.flatMap(g => selectedPerGroup[g]);
    return [{ day: 1, name: "plan_full_body", exercises: exercisesDay1 }];
}

export function generatePlanLogic(days, availableEquipment, muscleSliderValues, difficulty = "Advanced") {
    const difficultyIndex = difficultyLevels.indexOf(difficulty);
    const availableExercises = exercises.filter(ex =>
        availableEquipment.includes(ex.equipment) &&
        difficultyLevels.indexOf(ex.difficulty) <= difficultyIndex
    );

    const muscleCounts = buildMuscleCounts(muscleSliderValues);

    if (days === 1) {
        return buildCompoundPlan(availableExercises, muscleCounts);
    }

    const config = DAY_CONFIGS[days];
    if (!config) {
        return [{ day: 1, name: "plan_none", exercises: [] }];
    }

    const groupArrays = buildMuscleGroupArrays(availableExercises);
    const subMuscleTargets = buildSubMuscleTargets();
    const weeklySelectedIds = new Set();

    const plan = config.map(dayConfig => ({
        day: dayConfig.day,
        name: dayConfig.name,
        exercises: buildDayExercises(groupArrays, subMuscleTargets, muscleCounts, dayConfig.groups, weeklySelectedIds),
    }));

    plan.sort((a, b) => a.day - b.day);
    return plan;
}