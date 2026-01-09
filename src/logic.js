import { exercises, muscleSliderPresets, difficultyLevels } from './exercises.js';

export let compound = false;

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
        const exercisesDay1 = [
        ...selectExercisesForGroup(legQuadrizeps, QuadCount, targetQuadSubMuscles, weeklySelectedIds, compound,"Quadrizeps"),
        ...selectExercisesForGroup(pushBrust, ChestCount, targetChestSubMuscles, weeklySelectedIds, compound,"Chest"),
        ...selectExercisesForGroup(pullRücken, BackCount, targetBackSubMuscles, weeklySelectedIds, compound,"Back"),
        ...selectExercisesForGroup(pushSchultern, ShoulderCount, targetShoulderSubMuscles, weeklySelectedIds, compound,"Shoulders"),
        ...selectExercisesForGroup(pullBiceps, BicepsCount, targetBicepsSubMuscles, weeklySelectedIds, compound,"Biceps"),
        ...selectExercisesForGroup(legHamstrings, HamstringCount, targetHamstringSubMuscles, weeklySelectedIds, compound,"Hamstrings"),
        ...selectExercisesForGroup(legGesäß, GluteCount, targetGluteSubMuscles, weeklySelectedIds, compound,"Glutes"),
        ...selectExercisesForGroup(pushTriceps, TricepsCount, targetTricepsSubMuscles, weeklySelectedIds,compound,"Triceps"),
        ...selectExercisesForGroup(coreBauch, AbsCount, targetAbsSubMuscles, weeklySelectedIds, compound,"Abs"),
        ...selectExercisesForGroup(pullForearm, ForearmCount, targetForearmSubMuscles, weeklySelectedIds,compound,"Forearm"),
        ...selectExercisesForGroup(legWaden, CalfCount, targetCalfSubMuscles, weeklySelectedIds,compound,"Calves")
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