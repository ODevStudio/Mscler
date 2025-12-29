  const muscleSliderPresets = {
  1: {
    chest: 1,
    back: 1,
    shoulders: 1,
    biceps: 1,
    triceps: 0,
    quadrizeps: 1,
    hamstrings: 1,
    glutes: 0,
    calves: 0,
    abs: 1,
    forearm: 0
  },
  2: {
    chest: 2,
    back: 2,
    shoulders: 1,
    biceps: 1,
    triceps: 1,
    quadrizeps: 2,
    hamstrings: 2,
    glutes: 1,
    calves: 1,
    abs: 1,
    forearm: 0
  },
  3: {
    chest: 2,
    back: 3,
    shoulders: 2,
    biceps: 2,
    triceps: 2,
    quadrizeps: 2,
    hamstrings: 2,
    glutes: 1,
    calves: 1,
    abs: 1,
    forearm: 0
  },
  4: {
    chest: 2,
    back: 2,
    shoulders: 1,
    biceps: 1,
    triceps: 1,
    quadrizeps: 2,
    hamstrings: 2,
    glutes: 1,
    calves: 1,
    abs: 1,
    forearm: 0
  },
  5: {
    chest: 2,
    back: 3,
    shoulders: 2,
    biceps: 2,
    triceps: 2,
    quadrizeps: 2,
    hamstrings: 2,
    glutes: 1,
    calves: 1,
    abs: 1,
    forearm: 0
  },
  6: {
    chest: 2,
    back: 3,
    shoulders: 2,
    biceps: 2,
    triceps: 2,
    quadrizeps: 2,
    hamstrings: 2,
    glutes: 1,
    calves: 1,
    abs: 1,
    forearm: 0
  }
};
const exercises = [
  {
  id: 1,
  favorit: 0,
  name: "Barbell Bench Press",
  muscleGroup: "Chest",
  category: "Upper body",
  effectiveness: 4,
  difficulty: "Intermediate",
  primeMuscle: ["Pectoralis (Mid)"],
  secondaryMuscle: ["Triceps Brachii", "Deltoid (Anterior)"],
  equipment: "Barbell",
  url: "https://www.youtube.com/embed/hWbUlkb5Ms4",
  description: {
    de: "Grundübung für Brustmuskelaufbau.",
    en: "Fundamental exercise for chest muscle development."
  },
  steps: {
    en: "1. Lie on a flat bench with your feet flat on the floor.<br><br>2. Grip the barbell slightly wider than shoulder-width apart, with an overhand grip.<br><br>3. Unrack the barbell and hold it directly above your chest with arms fully extended.<br><br>4. Lower the barbell slowly to your mid-chest, keeping your elbows tucked slightly.<br><br>5. Push the barbell back up to the starting position, extending your arms fully but without locking your elbows.",
    de: "1. Legen Sie sich flach auf eine Bank, die Füße flach auf dem Boden.<br><br>2. Fassen Sie die Langhantel etwas breiter als schulterbreit im Obergriff.<br><br>3. Heben Sie die Langhantel aus der Halterung und halten Sie sie mit vollständig ausgestreckten Armen direkt über Ihrer Brust.<br><br>4. Senken Sie die Langhantel langsam zu Ihrer mittleren Brust ab, wobei Sie die Ellbogen leicht angezogen halten.<br><br>5. Drücken Sie die Langhantel zurück in die Ausgangsposition, strecken Sie die Arme vollständig aus, aber ohne die Ellbogen zu blockieren."
  },
},
{
  id: 3,
  favorit: 0,
  name: "Cable Crossover ladder",
  muscleGroup: "Chest",
  category: "Upper body",
  effectiveness: 4,
  difficulty: "Beginner",
  primeMuscle: ["Pectoralis (Mid)","Pectoralis (Upper)","Pectoralis (Lower)"],
  secondaryMuscle: [],
  equipment: "Cable",
  url: "https://www.youtube.com/embed/0TP9kVcWGic",
  description: {
    de: "Isolationsübung mit konstanter Spannung.",
    en: "Isolation exercise with constant tension."
  },
  steps: {
    en: "This variation uses three handle positions (high, mid, low) in sequence to target all regions of the chest.<br><br>"
        + "<b>1. High Position (targets lower chest):</b> Set pulleys above head height. Step forward slightly, chest up, elbows slightly bent. Pull handles downward in an arc toward your waist, squeeze, then return slowly.<br><br>"
        + "<b>2. Mid Position (targets mid chest):</b> Set pulleys at shoulder height. Bring handles together in front of your chest in a wide arc, squeeze, then return slowly.<br><br>"
        + "<b>3. Low Position (targets upper chest):</b> Set pulleys near the bottom. Pull handles upward in an arc toward chest/shoulder level, squeeze, then return slowly.<br><br>"
        + "Perform the desired reps at one height, then immediately adjust to the next height, moving from high → mid → low (or reverse) for a full ladder set.",
    de: "Diese Variante nutzt drei Griffhöhen (hoch, mittel, tief) nacheinander, um alle Brustbereiche zu trainieren.<br><br>"
        + "<b>1. Hohe Position (untere Brust):</b> Rollen über Kopfhöhe einstellen. Leicht nach vorne treten, Brust aufrecht, Ellbogen leicht gebeugt. Griffe in einem Bogen nach unten zur Taille ziehen, anspannen, dann langsam zurückkehren.<br><br>"
        + "<b>2. Mittlere Position (mittlere Brust):</b> Rollen auf Schulterhöhe einstellen. Griffe in einem weiten Bogen vor der Brust zusammenführen, anspannen, dann langsam zurückkehren.<br><br>"
        + "<b>3. Tiefe Position (obere Brust):</b> Rollen nahe am Boden einstellen. Griffe in einem Bogen nach oben bis auf Brust-/Schulterhöhe ziehen, anspannen, dann langsam zurückkehren.<br><br>"
        + "Gewünschte Wiederholungen in einer Höhe ausführen, dann sofort zur nächsten wechseln – von hoch → mittel → tief (oder umgekehrt) für einen kompletten Ladder-Satz."
  }
},
{
  id: 2,
  favorit: 0,
  name: "Incline Dumbbell Press",
  muscleGroup: "Chest",
  category: "Upper body",
  effectiveness: 4,
  difficulty: "Beginner",
  primeMuscle: ["Pectoralis (Upper)","Pectoralis (Mid)"],
  secondaryMuscle: ["Deltoid (Anterior)", "Triceps Brachii"],
  equipment: "Dumbbell",
  url: "https://www.youtube.com/embed/p2t9daxLpB8",
  description: {
    de: "Gute Übung für den oberen Brustbereich mit großem Bewegungsumfang.",
    en: "Great exercise for the upper chest area with a large range of motion."
  },
  steps: {
    en: "1. Adjust an incline bench to a 30-45 degree angle.<br><br>2. Sit on the bench with a dumbbell in each hand, resting them on your thighs.<br><br>3. Lie back, simultaneously kicking the dumbbells up to shoulder height, palms facing forward.<br><br>4. Lower the dumbbells slowly to the sides of your upper chest, keeping your elbows slightly tucked.<br><br>5. Press the dumbbells back up to the starting position, squeezing your upper chest.",
    de: "1. Stellen Sie eine Schrägbank auf einen Winkel von 30-45 Grad ein.<br><br>2. Setzen Sie sich mit einer Kurzhantel in jeder Hand auf die Bank und legen Sie sie auf Ihren Oberschenkeln ab.<br><br>3. Legen Sie sich zurück und kicken Sie gleichzeitig die Kurzhanteln auf Schulterhöhe, die Handflächen zeigen nach vorne.<br><br>4. Senken Sie die Kurzhanteln langsam zu den Seiten Ihrer oberen Brust ab, wobei Sie die Ellbogen leicht angezogen halten.<br><br>5. Drücken Sie die Kurzhanteln zurück in die Ausgangsposition und spannen Sie dabei Ihre obere Brust an."
  },
},
{
  id: 21,
  favorit: 0,
  name: "Dumbbell Flys",
  muscleGroup: "Chest",
  category: "Upper body",
  effectiveness: 4,
  difficulty: "Novice",
  primeMuscle: ["Pectoralis (Outer/Stretch)"],
  secondaryMuscle: [],
  equipment: "Dumbbell",
  url:"https://www.youtube.com/embed/atcyT99YDeI",
  description: {
    de: "Isolationsübung mit großem Dehnungseffekt für die äußere Brust.",
    en: "Isolation exercise with a strong stretch effect for the outer chest."
  },
  steps: {
    en: "1. Lie on a flat bench with a dumbbell in each hand, palms facing each other.<br><br>2. Extend your arms above your chest with a slight bend in your elbows.<br><br>3. Slowly lower the dumbbells out to your sides in a wide arc until you feel a stretch in your chest.<br><br>4. Squeeze your chest muscles to bring the dumbbells back to the starting position.",
    de: "1. Legen Sie sich flach auf eine Bank, eine Kurzhantel in jeder Hand, die Handflächen zeigen zueinander.<br><br>2. Strecken Sie die Arme mit leicht gebeugten Ellbogen über Ihre Brust.<br><br>3. Senken Sie die Kurzhanteln langsam in einem weiten Bogen zu den Seiten ab, bis Sie eine Dehnung in der Brust spüren.<br><br>4. Spannen Sie Ihre Brustmuskeln an, um die Kurzhanteln zurück in die Ausgangsposition zu bringen."
  },
},
{
  id: 22,
  favorit: 0,
  name: "Parallel Bar Dips (Chest Focused)",
  muscleGroup: "Chest",
  category: "Upper body",
  effectiveness: 4,
  difficulty: "Intermediate",
  primeMuscle: ["Pectoralis (Lower)"],
  secondaryMuscle: ["Triceps Brachii", "Deltoid (Anterior)","Latissimus Dorsi"],
  equipment: "None",
  url: "https://www.youtube.com/embed/iswhjR-_-Xg",
  description: {
    de: "Effektive Übung für untere Brust (Oberkörperneigung nach vorn).",
    en: "Effective lower chest exercise (leaning torso forward)."
  },
  steps: {
    en: "1. Stand between parallel bars, grasping them firmly.<br><br>2. Lean your torso forward slightly and keep your elbows flared out to the sides.<br><br>3. Lower your body by bending your elbows until your chest is stretched.<br><br>4. Push back up to the starting position, squeezing your lower chest.",
    de: "1. Stellen Sie sich zwischen parallele Barren und fassen Sie diese fest an.<br><br>2. Lehnen Sie Ihren Oberkörper leicht nach vorne und halten Sie die Ellbogen seitlich ausgestellt.<br><br>3. Senken Sie Ihren Körper ab, indem Sie die Ellbogen beugen, bis Ihre Brust gedehnt ist.<br><br>4. Drücken Sie sich zurück in die Ausgangsposition und spannen Sie dabei Ihre untere Brust an."
  },
},
{
  id: 23,
  favorit: 0,
  name: "Incline Barbell Bench Press",
  muscleGroup: "Chest",
  category: "Upper body",
  effectiveness: 4,
  difficulty: "Intermediate",
  primeMuscle: ["Pectoralis (Mid)","Pectoralis (Upper)"],
  secondaryMuscle: ["Deltoid (Anterior)", "Triceps Brachii"],
  url: "https://www.youtube.com/embed/vqQ9ok0dEgk",
  equipment: "Barbell",
  description: {
    de: "Fokussiert auf den oberen Brustbereich mit hoher Belastung.",
    en: "Focuses on the upper chest with high load."
  },
  steps: {
    en: "1. Position the bench between 30 and 45 degrees.<br><br>2. Lie flat on the bench with your feet on the ground. With straight arms unrack the bar.<br><br>3. Lower the bar to your mid-chest.<br><br>4. Push the bar back up to the starting position.",
    de: "1. Stellen Sie die Bank zwischen 30 und 45 Grad ein.<br><br>2. Legen Sie sich flach auf die Bank, die Füße auf dem Boden. Heben Sie die Stange mit gestreckten Armen aus der Halterung.<br><br>3. Senken Sie die Stange zu Ihrer mittleren Brust ab.<br><br>4. Drücken Sie die Stange zurück in die Ausgangsposition."
  },
},
{
  id: 24,
  favorit: 0,
  name: "Chest Press Machine",
  muscleGroup: "Chest",
  category: "Upper body",
  effectiveness: 6,
  difficulty: "Novice",
  primeMuscle: ["Pectoralis (Mid)", "Pectoralis (Upper)"],
  secondaryMuscle: ["Triceps Brachii", "Deltoid (Anterior)"],
  equipment: "Machine",
  url: "https://www.youtube.com/embed/zDecGJLyVm8",
  description: {
    de: "Top-Übung, sehr stabil und gut für progressive Überladung.",
    en: "Top-tier exercise, very stable and excellent for progressive overload."
  },
  steps: {
    en: "1. Adjust the seat so the handles are at mid-chest level.<br><br>2. Sit with your back flat against the pad and grasp the handles with an overhand grip.<br><br>3. Push the handles forward until your arms are fully extended, squeezing your chest.<br><br>4. Slowly return to the starting position, controlling the weight.",
    de: "1. Stellen Sie den Sitz so ein, dass sich die Griffe auf mittlerer Brusthöhe befinden.<br><br>2. Setzen Sie sich mit dem Rücken flach an das Polster und fassen Sie die Griffe im Obergriff.<br><br>3. Drücken Sie die Griffe nach vorne, bis Ihre Arme vollständig ausgestreckt sind, und spannen Sie dabei Ihre Brust an.<br><br>4. Kehren Sie langsam und kontrolliert in die Ausgangsposition zurück."
  },
},
{
  id: 80,
  favorit: 0,
  name: "Pec Deck Machine (Butterfly)",
  muscleGroup: "Chest",
  category: "Upper body",
  effectiveness: 4,
  difficulty: "Novice",
  primeMuscle: ["Pectoralis (Mid)", "Pectoralis (Outer/Stretch)"],
  secondaryMuscle: [],
  equipment: "Machine",
  url: "https://www.youtube.com/embed/yD3Oi-GKq98",
  description: {
    de: "Isolationsübung mit Fokus auf die innere Brustkontraktion.",
    en: "Isolation exercise focusing on inner chest contraction."
  },
  steps: {
    en: "1. Adjust the seat so your forearms are comfortably placed on the pads and your elbows are at shoulder height.<br><br>2. Sit with your back flat against the pad and grasp the handles.<br><br>3. Bring the pads together in front of your chest, squeezing your pecs.<br><br>4. Slowly return to the starting position, controlling the weight.",
    de: "1. Stellen Sie den Sitz so ein, dass Ihre Unterarme bequem auf den Polstern liegen und Ihre Ellbogen auf Schulterhöhe sind.<br><br>2. Setzen Sie sich mit dem Rücken flach an das Polster und fassen Sie die Griffe.<br><br>3. Führen Sie die Polster vor Ihrer Brust zusammen und spannen Sie dabei Ihre Brustmuskeln an.<br><br>4. Kehren Sie langsam und kontrolliert in die Ausgangsposition zurück."
  },
},
{
  id: 25,
  favorit: 0,
  name: "Landmine Press",
  muscleGroup: "Chest",
  category: "Upper body",
  effectiveness: 4,
  difficulty: "Intermediate",
  primeMuscle: ["Pectoralis (Upper)", "Pectoralis (Mid)"],
  secondaryMuscle: ["Deltoid (Anterior)", "Triceps Brachii"],
  equipment: "Barbell",
  url:"https://www.youtube.com/embed/hAsA-CXKgi8",
  description: {
    de: "Funktionelle Brustübung mit reduzierter Schulterbelastung.",
    en: "Functional chest exercise with reduced shoulder strain."
  },
  steps: {
    en: "1. Load one end of a barbell into a landmine attachment or secure it in a corner.<br><br>2. Stand facing the anchored end of the barbell, grasping the free end with both hands at chest height.<br><br>3. With a slight bend in your knees and a stable core, press the barbell upward and forward in an arc.<br><br>4. Extend your arms fully, squeezing your chest and shoulders at the top.<br><br>5. Slowly lower the barbell back to the starting position, controlling the movement.",
    de: "1. Laden Sie ein Ende einer Langhantel in eine Landmine-Halterung oder sichern Sie es in einer Ecke.<br><br>2. Stellen Sie sich mit Blick auf das verankerte Ende der Langhantel hin und fassen Sie das freie Ende mit beiden Händen auf Brusthöhe.<br><br>3. Mit leicht gebeugten Knien und einem stabilen Rumpf drücken Sie die Langhantel in einem Bogen nach oben und vorne.<br><br>4. Strecken Sie die Arme vollständig aus und spannen Sie dabei Brust und Schultern oben an.<br><br>5. Senken Sie die Langhantel langsam und kontrolliert in die Ausgangsposition zurück."
  },
},
  //{
  //  id: 81,
  //  favorit: 0,
  //  name: "Incline Chest Press Machine",
  //  muscleGroup: "Chest",
  //  category: "Upper body",
  //  effectiveness: 4,
  //  primeMuscle: ["Pectoralis (Upper)"],
  //  secondaryMuscle: ["Deltoid (Anterior)", "Triceps Brachii"],
  //  equipment: "Machine",
  //url: "https://www.youtube.com/embed/b8fYnZ-usP0",
  //  description: {
  //    de: "Stärkeren Fokus auf obere Muskeln mit Maschinenführung.",
  //    en: "Stronger focus on upper muscles with machine guidance."
  //  }
  //},
//{
//  id: 101,
//  favorit: 0,
//  name: "Single Arm Cable Crossover",
//  muscleGroup: "Chest",
//  category: "Upper body",
//  effectiveness: 4,
//  primeMuscle: ["Pectoralis (Mid)","Pectoralis (Upper)","Pectoralis (Mid)", "Pectoralis (Lower)"],
//  secondaryMuscle: ["Obliques", "Core"],
//  equipment: "Cable",
//  description: {
//    de: "Unilaterale Variante für Muskelansteuerung und Core-Stabilität.",
//    en: "Unilateral variation for muscle control and core stability."
//  }
//},
  //{ id:83, favorit:0, name:"Cable Crossover high", muscleGroup:"Chest", category:"Upper body", effectiveness: 4, // A Tier (General Crossover)
  //  primeMuscle:["Pectoralis (Lower)", "Pectoralis (Mid)"], // Fokus Unten Innen
  //  secondaryMuscle: [],
  //  equipment:"Cable", 
  //  description: {
  //    de: "Isolationsübung für unteren/inneren Brustmuskel (hohe Seilposition).",
  //    en: "Isolation exercise for lower/internal pectoral muscle (high rope position)."
  //  }
  //},
  //{ id:84, favorit:0, name:"Cable Crossover low", muscleGroup:"Chest", category:"Upper body", effectiveness: 4, // A Tier (General Crossover)
  //  primeMuscle:["Pectoralis (Upper)", "Pectoralis (Mid)"], // Fokus Oben Innen
  //  secondaryMuscle: [],
  //  equipment:"Cable", 
  //  description: {
  //    de: "Isolationsübung für oberen/inneren Brustmuskel (niedrige Seilposition).",
  //    en: "Isolation exercise for upper/internal pectoral muscle (low rope position)."
  //  }
  //},
  {
id: 86,
favorit: 0,
name: "Dumbbell Press",
muscleGroup: "Chest",
category: "Upper body",
effectiveness: 4,
difficulty: "Novice",
primeMuscle: ["Pectoralis (Mid)"],
secondaryMuscle: ["Triceps Brachii", "Deltoid (Anterior)"],
equipment: "Dumbbell",
url: "https://www.youtube.com/embed/YQ2s_Y7g5Qk",
description: {
de: "Gute Grundübung mit großem Bewegungsumfang.",
en: "Good basic exercise with a large range of motion."
},
steps: {
en: "1. Lie on a flat bench with a dumbbell in each hand, palms facing each other.<br><br>2. Position the dumbbells on your knees, then lie back, kicking the dumbbells up to your chest.<br><br>3. Extend your arms, holding the dumbbells above your chest.<br><br>4. Lower the dumbbells slowly to the sides of your chest, keeping your elbows slightly tucked.<br><br>5. Press the dumbbells back up to the starting position, squeezing your chest.",
de: "1. Legen Sie sich flach auf eine Bank, eine Kurzhantel in jeder Hand, die Handflächen zeigen zueinander.<br><br>2. Positionieren Sie die Kurzhanteln auf Ihren Knien, legen Sie sich dann zurück und kicken Sie die Kurzhanteln zur Brust.<br><br>3. Strecken Sie die Arme aus und halten Sie die Kurzhanteln über Ihrer Brust.<br><br>4. Senken Sie die Kurzhanteln langsam zu den Seiten Ihrer Brust ab, wobei Sie die Ellbogen leicht angezogen halten.<br><br>5. Drücken Sie die Kurzhanteln zurück in die Ausgangsposition und spannen Sie dabei Ihre Brust an."
},
},
{
id: 87,
favorit: 0,
name: "Push up",
muscleGroup: "Chest",
category: "Upper body",
effectiveness: 2,
difficulty: "Beginner",
  primeMuscle: ["Pectoralis (Mid)"],
  secondaryMuscle: ["Triceps Brachii", "Deltoid (Anterior)", "Serratus Anterior", "Core"],
  equipment: "None",
  url: "https://www.youtube.com/embed/ATink4Ix84A",
  description: {
    de: "Grundlegende Eigengewichtsübung.",
    en: "Basic bodyweight exercise."
  },
  steps: {
    en: "1. Start in a plank position with your hands slightly wider than shoulder-width apart, fingers pointing forward.<br><br>2. Keep your body in a straight line from head to heels, engaging your core.<br><br>3. Lower your chest towards the floor by bending your elbows, keeping them tucked slightly.<br><br>4. Push through your palms to return to the starting plank position, extending your arms fully.",
    de: "1. Beginnen Sie in einer Plank-Position mit den Händen etwas breiter als schulterbreit auseinander, die Finger zeigen nach vorne.<br><br>2. Halten Sie Ihren Körper in einer geraden Linie von Kopf bis zu den Fersen und spannen Sie Ihren Rumpf an.<br><br>3. Senken Sie Ihre Brust zum Boden, indem Sie die Ellbogen beugen und sie leicht angezogen halten.<br><br>4. Drücken Sie sich durch die Handflächen zurück in die Ausgangsposition der Plank, strecken Sie die Arme vollständig aus."
  },
},
{
id: 88,
favorit: 0,
name: "Deficit Pushup",
muscleGroup: "Chest",
category: "Upper body",
effectiveness: 4,
difficulty: "Intermediate",
primeMuscle: ["Pectoralis (Mid)","Pectoralis (Outer/Stretch)"],
secondaryMuscle: ["Triceps Brachii", "Deltoid (Anterior)", "Serratus Anterior", "Core"],
equipment: "None",
url: "https://www.youtube.com/embed/E5Mv2J5GPDE",
  description: {
  de: "Erweiterte Pushup-Version mit besserem Stretch.",
  en: "Extended push-up version with better stretch."
},
steps: {
  en: "1. Place your hands on elevated surfaces (e.g., push-up handles, dumbbells, or yoga blocks) slightly wider than shoulder-width apart.<br><br>2. Assume a plank position, keeping your body straight from head to heels.<br><br>3. Lower your chest past your hand level, allowing for a deeper stretch in the chest.<br><br>4. Push back up to the starting position, extending your arms fully.",
  de: "1. Legen Sie Ihre Hände auf erhöhte Oberflächen (z.B. Liegestützgriffe, Kurzhanteln oder Yogablöcke) etwas breiter als schulterbreit auseinander.<br><br>2. Nehmen Sie eine Plank-Position ein und halten Sie Ihren Körper gerade von Kopf bis zu den Fersen.<br><br>3. Senken Sie Ihre Brust unter das Niveau Ihrer Hände ab, um eine tiefere Dehnung in der Brust zu ermöglichen.<br><br>4. Drücken Sie sich zurück in die Ausgangsposition, strecken Sie die Arme vollständig aus."
},
  steps: {
    en: "1. Place your hands on elevated surfaces (e.g., push-up handles, dumbbells, or yoga blocks) slightly wider than shoulder-width apart.<br><br>2. Assume a plank position, keeping your body straight from head to heels.<br><br>3. Lower your chest past your hand level, allowing for a deeper stretch in the chest.<br><br>4. Push back up to the starting position, extending your arms fully.",
    de: "1. Legen Sie Ihre Hände auf erhöhte Oberflächen (z.B. Liegestützgriffe, Kurzhanteln oder Yogablöcke) etwas breiter als schulterbreit auseinander.<br><br>2. Nehmen Sie eine Plank-Position ein und halten Sie Ihren Körper gerade von Kopf bis zu den Fersen.<br><br>3. Senken Sie Ihre Brust unter das Niveau Ihrer Hände ab, um eine tiefere Dehnung in der Brust zu ermöglichen.<br><br>4. Drücken Sie sich zurück in die Ausgangsposition, strecken Sie die Arme vollständig aus."
  },
},
{
id: 85,
favorit: 0,
name: "Dumbbell Pullover",
muscleGroup: "Chest",
category: "Upper body",
effectiveness: 1,
difficulty: "Intermediate",
primeMuscle: ["Pectoralis (Stretch)"],
secondaryMuscle: ["Latissimus Dorsi", "Serratus Anterior", "Triceps Brachii (Long Head - stretch)"],
url: "https://www.youtube.com/embed/iaRefVKBH8M",
equipment: "Dumbbell",
description: {
  de: "Weniger effektiv für Brusthypertrophie.",
  en: "Less effective for chest hypertrophy."
},
steps: {
  en: "1. Lie perpendicular on a flat bench with your upper back supported, feet flat on the floor, and a dumbbell held with both hands above your chest.<br><br>2. Keeping a slight bend in your elbows, slowly lower the dumbbell in an arc behind your head until you feel a stretch in your chest and lats.<br><br>3. Pull the dumbbell back over your chest using your chest and lat muscles.",
  de: "1. Legen Sie sich quer auf eine flache Bank, wobei Ihr oberer Rücken gestützt wird, die Füße flach auf dem Boden stehen und eine Kurzhantel mit beiden Händen über Ihrer Brust gehalten wird.<br><br>2. Halten Sie die Ellbogen leicht gebeugt und senken Sie die Kurzhantel langsam in einem Bogen hinter Ihren Kopf ab, bis Sie eine Dehnung in Brust und Latissimus spüren.<br><br>3. Ziehen Sie die Kurzhantel mit Ihren Brust- und Latissimusmuskeln zurück über Ihre Brust."
}
},
//{
//  id: 93,
//  favorit: 0,
//  name: "Decline Barbell Press",
//  muscleGroup: "Chest",
//  category: "Upper body",
//  effectiveness: 3,
//  primeMuscle: ["Pectoralis (Lower)"],
//  secondaryMuscle: ["Triceps Brachii", "Deltoid (Anterior)"],
//  equipment: "Barbell",
//  description: {
//    de: "Betont die unteren Brustfasern.",
//    en: "Emphasizes the lower chest fibers."
//  }
//},
//{
//  id: 94,
//  favorit: 0,
//  name: "Decline Dumbbell Press",
//  muscleGroup: "Chest",
//  category: "Upper body",
//  effectiveness: 3,
//  primeMuscle: ["Pectoralis (Lower)"],
//  secondaryMuscle: ["Triceps Brachii", "Deltoid (Anterior)"],
//  equipment: "Dumbbell",
//  description: {
//    de: "Variante mit Kurzhanteln für die untere Brust.",
//    en: "Dumbbell variation for the lower chest."
//  }
//},

{
id: 146,
favorit: 0,
name: "Bottom Half DB Flye",
muscleGroup: "Chest",
category: "Upper body",
effectiveness: 4,
difficulty: "Novice",
primeMuscle: ["Pectoralis (Mid)"],
secondaryMuscle: [],
equipment: "Dumbbell",
url: "https://www.youtube.com/embed/qJzc-iHKGdg",
description: {
  de: "Isolationsübung mit Fokus auf die innere Brustkontraktion.",
  en: "Isolation exercise focusing on inner chest contraction."
},
steps: {
  en: "1. Lie on a flat bench with a dumbbell in each hand, palms facing each other.<br><br>2. Lower the dumbbells only halfway down, maintaining tension on the chest.<br><br>3. Squeeze your chest muscles to bring the dumbbells back to the starting position.",
  de: "1. Legen Sie sich flach auf eine Bank, eine Kurzhantel in jeder Hand, die Handflächen zeigen zueinander.<br><br>2. Senken Sie die Kurzhanteln nur halb ab, um die Spannung auf der Brust aufrechtzuerhalten.<br><br>3. Spannen Sie Ihre Brustmuskeln an, um die Kurzhanteln zurück in die Ausgangsposition zu bringen."
}
},
//{
//  id: 95,
//  favorit: 0,
//  name: "Decline Chest Press Machine",
//  muscleGroup: "Chest",
//  category: "Upper body",
//  effectiveness: 3,
//  primeMuscle: ["Pectoralis (Lower)"],
//  secondaryMuscle: ["Triceps Brachii", "Deltoid (Anterior)"],
//  equipment: "Machine",
//  description: {
//    de: "Geführte Maschinenübung für die untere Brust.",
//    en: "Guided machine exercise for the lower chest."
//  }
//},
{
id: 96,
favorit: 0,
name: "Incline Pushup (Feet Elevated)",
muscleGroup: "Chest",
category: "Upper body",
effectiveness: 2,
difficulty: "Intermediate",
primeMuscle: ["Pectoralis (Upper)"],
secondaryMuscle: ["Triceps Brachii", "Deltoid (Anterior)", "Serratus Anterior", "Core"],
equipment: "None",
url: "https://www.youtube.com/embed/QAF830S96gs",
description: {
  de: "Eigengewichtsübung mit Fokus auf die obere Brust.",
  en: "Bodyweight exercise focusing on the upper chest."
},
steps: {
  en: "1. Place your feet on an elevated surface (e.g., bench, chair) and your hands on the floor, slightly wider than shoulder-width apart.<br><br>2. Keep your body in a straight line from head to heels, engaging your core.<br><br>3. Lower your chest towards the floor by bending your elbows, keeping them tucked slightly.<br><br>4. Push through your palms to return to the starting plank position, extending your arms fully.",
  de: "1. Legen Sie Ihre Füße auf eine erhöhte Oberfläche (z.B. Bank, Stuhl) und Ihre Hände auf den Boden, etwas breiter als schulterbreit auseinander.<br><br>2. Halten Sie Ihren Körper in einer geraden Linie von Kopf bis zu den Fersen und spannen Sie Ihren Rumpf an.<br><br>3. Senken Sie Ihre Brust zum Boden, indem Sie die Ellbogen beugen und sie leicht angezogen halten.<br><br>4. Drücken Sie sich durch die Handflächen zurück in die Ausgangsposition der Plank, strecken Sie die Arme vollständig aus."
},
steps: {
  en: "1. Place your feet on an elevated surface (e.g., bench, chair) and your hands on the floor, slightly wider than shoulder-width apart.<br><br>2. Keep your body in a straight line from head to heels, engaging your core.<br><br>3. Lower your chest towards the floor by bending your elbows, keeping them tucked slightly.<br><br>4. Push through your palms to return to the starting plank position, extending your arms fully.",
  de: "1. Legen Sie Ihre Füße auf eine erhöhte Oberfläche (z.B. Bank, Stuhl) und Ihre Hände auf den Boden, etwas breiter als schulterbreit auseinander.<br><br>2. Halten Sie Ihren Körper in einer geraden Linie von Kopf bis zu den Fersen und spannen Sie Ihren Rumpf an.<br><br>3. Senken Sie Ihre Brust zum Boden, indem Sie die Ellbogen beugen und sie leicht angezogen halten.<br><br>4. Drücken Sie sich durch die Handflächen zurück in die Ausgangsposition der Plank, strecken Sie die Arme vollständig aus."
}
},
{
id: 97,
favorit: 0,
name: "Wide-Grip Barbell Bench Press",
muscleGroup: "Chest",
category: "Upper body",
effectiveness: 4,
difficulty: "Intermediate",
primeMuscle: ["Pectoralis (Outer/Stretch)","Pectoralis (Mid)"],
secondaryMuscle: ["Deltoid (Anterior)"],
equipment: "Barbell",
url: "https://www.youtube.com/embed/hWbUlkb5Ms4",
description: {
  de: "Bankdrück-Variante mit breitem Griff zur Betonung der äußeren Brust.",
  en: "Bench press variation with wide grip to emphasize the outer chest."
},
steps: {
  en: "1. Lie on a flat bench with your feet flat on the floor.<br><br>2. Grip the barbell with a wider-than-shoulder-width overhand grip.<br><br>3. Unrack the barbell and hold it directly above your chest with arms fully extended.<br><br>4. Lower the barbell slowly to your mid-chest, keeping your elbows flared out slightly.<br><br>5. Push the barbell back up to the starting position, extending your arms fully.",
  de: "1. Legen Sie sich flach auf eine Bank, die Füße flach auf dem Boden.<br><br>2. Fassen Sie die Langhantel mit einem breiteren als schulterbreiten Obergriff.<br><br>3. Heben Sie die Langhantel aus der Halterung und halten Sie sie mit vollständig ausgestreckten Armen direkt über Ihrer Brust.<br><br>4. Senken Sie die Langhantel langsam zu Ihrer mittleren Brust ab, wobei Sie die Ellbogen leicht ausgestellt halten.<br><br>5. Drücken Sie die Langhantel zurück in die Ausgangsposition, strecken Sie die Arme vollständig aus."
}
},
{
id: 98,
favorit: 0,
name: "Wide-Grip Pushup",
muscleGroup: "Chest",
category: "Upper body",
effectiveness: 2,
difficulty: "Intermediate",
primeMuscle: ["Pectoralis (Outer/Stretch)"],
secondaryMuscle: ["Deltoid (Anterior)", "Serratus Anterior"],
equipment: "None",
url: "https://www.youtube.com/embed/EsIdzx1J0iA",
description: {
  de: "Liegestütz-Variante mit breitem Griff.",
  en: "Push-up variation with wide grip."
},
steps: {
  en: "1. Start in a plank position with your hands significantly wider than shoulder-width apart, fingers pointing forward.<br><br>2. Keep your body in a straight line from head to heels, engaging your core.<br><br>3. Lower your chest towards the floor by bending your elbows, allowing them to flare out to the sides.<br><br>4. Push through your palms to return to the starting plank position, extending your arms fully.",
  de: "1. Beginnen Sie in einer Plank-Position mit den Händen deutlich breiter als schulterbreit auseinander, die Finger zeigen nach vorne.<br><br>2. Halten Sie Ihren Körper in einer geraden Linie von Kopf bis zu den Fersen und spannen Sie Ihren Rumpf an.<br><br>3. Senken Sie Ihre Brust zum Boden, indem Sie die Ellbogen beugen und sie seitlich ausstellen.<br><br>4. Drücken Sie sich durch die Handflächen zurück in die Ausgangsposition der Plank, strecken Sie die Arme vollständig aus."
}
},
{
id: 99,
favorit: 0,
name: "Incline Dumbbell Flys",
muscleGroup: "Chest",
category: "Upper body",
effectiveness: 4,
difficulty: "Beginner",
primeMuscle: ["Pectoralis (Upper)", "Pectoralis (Outer/Stretch)"],
secondaryMuscle: [],
equipment: "Dumbbell",
url: "https://www.youtube.com/embed/BBh28YvbiSI",
description: {
  de: "Isolationsübung auf der Schrägbank für die obere/äußere Brust.",
  en: "Isolation exercise on the incline bench for the upper/outer chest."
},
steps: {
  en: "1. Adjust an incline bench to a 30-45 degree angle.<br><br>2. Sit on the bench with a dumbbell in each hand, palms facing each other.<br><br>3. Extend your arms above your chest with a slight bend in your elbows.<br><br>4. Slowly lower the dumbbells out to your sides in a wide arc until you feel a stretch in your upper chest.<br><br>5. Squeeze your upper chest muscles to bring the dumbbells back to the starting position.",
  de: "1. Stellen Sie eine Schrägbank auf einen Winkel von 30-45 Grad ein.<br><br>2. Setzen Sie sich mit einer Kurzhantel in jeder Hand auf die Bank, die Handflächen zeigen zueinander.<br><br>3. Strecken Sie die Arme mit leicht gebeugten Ellbogen über Ihre Brust.<br><br>4. Senken Sie die Kurzhanteln langsam in einem weiten Bogen zu den Seiten ab, bis Sie eine Dehnung in der oberen Brust spüren.<br><br>5. Spannen Sie Ihre oberen Brustmuskeln an, um die Kurzhanteln zurück in die Ausgangsposition zu bringen."
}
},
//{
//  id: 100,
//  favorit: 0,
//  name: "Decline Dumbbell Flys",
//  muscleGroup: "Chest",
//  category: "Upper body",
//  effectiveness: 3,
//  primeMuscle: ["Pectoralis (Lower)", "Pectoralis (Outer/Stretch)"],
//  secondaryMuscle: [],
//  equipment: "Dumbbell",
//  description: {
//    de: "Isolationsübung auf der Negativbank für die untere/äußere Brust.",
//    en: "Isolation exercise on the decline bench for the lower/outer chest."
//  }
//},
{
id: 126,
favorit: 0,
name: "Seated Cable Pec Flye",
muscleGroup: "Chest",
category: "Upper body",
effectiveness: 5,
difficulty: "Novice",
primeMuscle: ["Pectoralis (Mid)","Pectoralis (Upper)", "Pectoralis (Lower)"],
secondaryMuscle: [],
equipment: "Cable",
url: "https://www.youtube.com/embed/sgerBKynRWA",
description: {
  de: "Sehr effektive Fly-Variante mit konstanter Spannung für die innere Brust.",
  en: "Very effective fly variation with constant tension for the inner chest."
},
steps: {
  en: "1. Adjust the seat height so the handles are at chest level.<br><br>2. Sit with your back firmly against the pad and grasp the handles.<br><br>3. Bring the handles together in front of your chest, squeezing your pecs.<br><br>4. Slowly return to the starting position, controlling the weight.",
  de: "1. Stellen Sie die Sitzhöhe so ein, dass sich die Griffe auf Brusthöhe befinden.<br><br>2. Setzen Sie sich mit dem Rücken fest an das Polster und fassen Sie die Griffe.<br><br>3. Führen Sie die Griffe vor Ihrer Brust zusammen und spannen Sie dabei Ihre Brustmuskeln an.<br><br>4. Kehren Sie langsam und kontrolliert in die Ausgangsposition zurück."
}
},
{
id: 127,
favorit: 0,
name: "Dumbbell Guillotine Press",
muscleGroup: "Chest",
category: "Upper body",
effectiveness: 4,
difficulty: "Advanced",
primeMuscle: [, "Pectoralis (Stretch)"],
secondaryMuscle: ["Deltoid (Anterior)", "Triceps Brachii"],
equipment: "Dumbbell",
url: "https://www.youtube.com/embed/l9hCEt73xzc",
description: {
  de: "Variante des Schrägbankdrückens mit Hanteln zur Kehle geführt für oberen Brust-Stretch (Vorsicht!).",
  en: "Incline dumbbell press variation brought to the neck for upper chest stretch (caution!)."
},
steps: {
  en: "1. Set up an incline bench to a moderate angle (around 30-45 degrees).<br><br>2. Lie on the bench with a dumbbell in each hand, palms facing each other.<br><br>3. Extend your arms straight up above your chest.<br><br>4. Slowly lower the dumbbells towards your neck/upper chest, keeping your elbows flared out to the sides.<br><br>5. Push the dumbbells back up to the starting position, squeezing your upper chest.",
  de: "1. Stellen Sie eine Schrägbank in einem moderaten Winkel (ca. 30-45 Grad) ein.<br><br>2. Legen Sie sich mit einer Kurzhantel in jeder Hand auf die Bank, die Handflächen zeigen zueinander.<br><br>3. Strecken Sie die Arme gerade über Ihre Brust.<br><br>4. Senken Sie die Kurzhanteln langsam in Richtung Hals/obere Brust ab, wobei Sie die Ellbogen seitlich ausgestellt halten.<br><br>5. Drücken Sie die Kurzhanteln zurück in die Ausgangsposition und spannen Sie dabei Ihre obere Brust an."
}
},
{
id: 128,
favorit: 0,
name: "Smith Machine Bench Press",
muscleGroup: "Chest",
category: "Upper body",
effectiveness: 4,
difficulty: "Novice",
primeMuscle: ["Pectoralis (Mid)", "Pectoralis (Lower)"],
secondaryMuscle: ["Triceps Brachii", "Deltoid (Anterior)"],
equipment: "Machine",
url: "https://www.youtube.com/embed/O5viuEPDXKY",
description: {
  de: "Bankdrücken an der Smith Machine für stabilen Bewegungsablauf.",
  en: "Bench press at the Smith Machine for stable movement pattern."
},
steps: {
  en: "1. Position a flat bench under the Smith machine bar.<br><br>2. Lie on the bench with your feet flat on the floor, and grasp the bar with an overhand grip, slightly wider than shoulder-width apart.<br><br>3. Unrack the bar by rotating it, and lower it slowly to your mid-chest.<br><br>4. Push the bar back up to the starting position, extending your arms fully but without locking your elbows.",
  de: "1. Positionieren Sie eine flache Bank unter der Smith-Maschinenstange.<br><br>2. Legen Sie sich auf die Bank, die Füße flach auf dem Boden, und fassen Sie die Stange im Obergriff, etwas breiter als schulterbreit auseinander.<br><br>3. Heben Sie die Stange durch Drehen aus der Halterung und senken Sie sie langsam zu Ihrer mittleren Brust ab.<br><br>4. Drücken Sie die Stange zurück in die Ausgangsposition, strecken Sie die Arme vollständig aus, aber ohne die Ellbogen zu blockieren."
}
},
{
id: 129,
favorit: 0,
name: "Incline Smith Machine Bench Press",
muscleGroup: "Chest",
category: "Upper body",
effectiveness: 4,
difficulty: "Beginner",
primeMuscle: ["Pectoralis (Upper)","Pectoralis (Mid)"],
secondaryMuscle: ["Triceps Brachii", "Deltoid (Anterior)"],
equipment: "Machine",
url: "https://www.youtube.com/embed/k4n4nwkkAcg",
description: {
  de: "Schrägbankdrücken an der Smith Machine für oberen Brustfokus.",
  en: "Incline bench press at the Smith Machine for upper chest focus."
},
steps: {
  en: "1. Position an incline bench under the Smith machine bar.<br><br>2. Lie on the bench with your feet flat on the floor, and grasp the bar with an overhand grip, slightly wider than shoulder-width apart.<br><br>3. Unrack the bar by rotating it, and lower it slowly to your upper chest.<br><br>4. Push the bar back up to the starting position, extending your arms fully but without locking your elbows.",
  de: "1. Positionieren Sie eine Schrägbank unter der Smith-Maschinenstange.<br><br>2. Legen Sie sich auf die Bank, die Füße flach auf dem Boden, und fassen Sie die Stange im Obergriff, etwas breiter als schulterbreit auseinander.<br><br>3. Heben Sie die Stange durch Drehen aus der Halterung und senken Sie sie langsam zu Ihrer oberen Brust ab.<br><br>4. Drücken Sie die Stange zurück in die Ausgangsposition, strecken Sie die Arme vollständig aus, aber ohne die Ellbogen zu blockieren."
}
},
  // Rücken-Übungen (Back Exercises)
//{
//  id: 202,
//  favorit: 0,
//  name: "Lat Pulldown (Neutral Grip)",
//  muscleGroup: "Back",
//  category: "Core",
//  effectiveness: 5,
//  difficulty: "Beginner",
//  primeMuscle: ["Latissimus dorsi","Trapezius (Mid)", "Rhomboids"],
//  secondaryMuscle: ["Biceps Brachii", "Deltoid (Posterior)", "Forearms"],
//  equipment: "Cable",
//  url: "https://www.youtube.com/embed/IYXRrYXfVLc",
//  description: {
//    de: "Latziehen mit neutralem Griff – gelenkschonende Alternative.",
//    en: "Neutral grip lat pulldown – joint-friendly variation."
//  },
//  steps: {
//    en: "1. Sit at the lat pulldown machine with your knees secured under the pads.<br><br>2. Grasp the neutral-grip bar with both hands, palms facing each other.<br><br>3. Lean back slightly, keeping your chest up, and pull the bar down towards your upper chest.<br><br>4. Squeeze your shoulder blades together at the bottom of the movement.<br><br>5. Slowly return the bar to the starting position, controlling the weight and allowing a full stretch in your lats.",
//    de: "1. Setzen Sie sich an die Latzugmaschine und sichern Sie Ihre Knie unter den Polstern.<br><br>2. Fassen Sie die neutrale Griffstange mit beiden Händen, die Handflächen zeigen zueinander.<br><br>3. Lehnen Sie sich leicht zurück, halten Sie die Brust oben und ziehen Sie die Stange zu Ihrer oberen Brust.<br><br>4. Drücken Sie am unteren Ende der Bewegung die Schulterblätter zusammen.<br><br>5. Führen Sie die Stange langsam und kontrolliert in die Ausgangsposition zurück und lassen Sie die Lats vollständig dehnen."
//  }
//},
  { id: 132, favorit: 0, name: "Chest Supported Row (Machine)", muscleGroup: "Back", category: "Core", effectiveness: 5,
  difficulty: "Novice",
  primeMuscle: ["Rhomboids", "Trapezius (Mid)", "Latissimus dorsi"],
  secondaryMuscle: ["Biceps Brachii", "Deltoid (Posterior)"],
  equipment: "Machine",
  url: "https://www.youtube.com/embed/q8qlHwcuOtc",
  description: {
    de: "Rudern mit Bruststütze zur Reduzierung des Schwungs und Fokus auf den Rücken.",
    en: "Rowing with chest support to reduce momentum and focus on back activation."
  },
  difficulty: "Beginner",
  steps: {
    en: "1. Adjust the machine so your chest is comfortably supported against the pad.<br><br>2. Grasp the handles with your preferred grip (e.g., neutral, pronated).<br><br>3. Pull the handles towards your torso, squeezing your shoulder blades together.<br><br>4. Slowly extend your arms back to the starting position, controlling the weight.",
    de: "1. Stellen Sie die Maschine so ein, dass Ihre Brust bequem am Polster anliegt.<br><br>2. Fassen Sie die Griffe mit Ihrem bevorzugten Griff (z.B. neutral, Obergriff).<br><br>3. Ziehen Sie die Griffe zu Ihrem Oberkörper und drücken Sie dabei Ihre Schulterblätter zusammen.<br><br>4. Strecken Sie die Arme langsam und kontrolliert in die Ausgangsposition zurück."
  }
},

{ id: 6, favorit: 0, name: "Seated Cable Row", muscleGroup: "Back", category: "Core", effectiveness: 5,
  difficulty: "Novice",
  primeMuscle: ["Rhomboids", "Trapezius (Mid)", "Latissimus dorsi"],
  secondaryMuscle: ["Biceps Brachii", "Deltoid (Posterior)", "Erector Spinae"],
  equipment: "Cable",
  url: "https://www.youtube.com/embed/UyI7Sc7ZVdU",
  description: {
    de: "Top-Übung für Rückendichte mit konstanter Spannung.",
    en:  "Top exercise for back thickness with constant tension."
  },
  difficulty: "Intermediate",
  steps: {
    en: "1. Sit on the bench with your feet on the footplate, knees slightly bent.<br><br>2. Grasp the handle (V-bar or straight bar) with both hands.<br><br>3. Lean back slightly, keeping your back straight, and pull the handle towards your lower abdomen.<br><br>4. Squeeze your shoulder blades together at the end of the movement.<br><br>5. Slowly extend your arms back to the starting position, controlling the weight and allowing your lats to stretch.",
    de: "1. Setzen Sie sich auf die Bank, die Füße auf der Fußplatte, die Knie leicht gebeugt.<br><br>2. Fassen Sie den Griff (V-Griff oder Stange) mit beiden Händen.<br><br>3. Lehnen Sie sich leicht zurück, halten Sie den Rücken gerade und ziehen Sie den Griff zum unteren Bauch.<br><br>4. Drücken Sie am Ende der Bewegung die Schulterblätter zusammen.<br><br>5. Strecken Sie die Arme langsam und kontrolliert in die Ausgangsposition zurück und lassen Sie die Lats dehnen."
  }
},

{ id: 203, favorit: 0, name: "Inverted Row", muscleGroup: "Back", category: "Core", effectiveness: 3,
  difficulty: "Beginner",
  primeMuscle: ["Rhomboids", "Trapezius (Mid)", "Latissimus dorsi"],
  secondaryMuscle: ["Biceps Brachii", "Deltoid (Posterior)", "Erector Spinae", "Core"],
  equipment: "None",
  url: "https://www.youtube.com/embed/KOaCM1HMwU0",
  description: {
    de: "Übung an Stange oder stabilem Tisch für Rückendichte mit konstanter Spannung.",
    en:  "Exercise with bar or stable table for back thickness with constant tension."
  },
  steps: {
    en: "1. Position yourself under a horizontal bar (or sturdy table) so your chest is aligned with the bar.<br><br>2. Grasp the bar with an overhand grip, slightly wider than shoulder-width apart.<br><br>3. Keep your body straight from head to heels, engaging your core.<br><br>4. Pull your chest towards the bar, squeezing your shoulder blades together.<br><br>5. Slowly lower yourself back to the starting position, controlling the movement.",
    de: "1. Positionieren Sie sich unter einer horizontalen Stange (oder einem stabilen Tisch), sodass Ihre Brust mit der Stange ausgerichtet ist.<br><br>2. Fassen Sie die Stange im Obergriff, etwas breiter als schulterbreit auseinander.<br><br>3. Halten Sie Ihren Körper gerade von Kopf bis zu den Fersen und spannen Sie Ihren Rumpf an.<br><br>4. Ziehen Sie Ihre Brust zur Stange, indem Sie Ihre Schulterblätter zusammenziehen.<br><br>5. Senken Sie sich langsam und kontrolliert in die Ausgangsposition zurück."
  }
},
  {
  id: 103, favorit: 0, name: "Machine Row (Various)", muscleGroup: "Back", category: "Core", effectiveness: 5,
  difficulty: "Novice",
  primeMuscle: ["Rhomboids", "Trapezius (Mid)", "Latissimus dorsi"],
  secondaryMuscle: ["Biceps Brachii", "Deltoid (Posterior)", "Forearms"],
  equipment: "Machine",
  url: "https://www.youtube.com/embed/_FrrYQxA6kc",
  description: {
    de: "Sehr effektive, stabile Rudervariante.",
    en:  "Very effective and stable rowing variation."
  },
  steps: {
    en: "1. Adjust the machine seat and chest pad for comfortable positioning.<br><br>2. Grasp the handles with your chosen grip (e.g., neutral, wide, close).<br><br>3. Pull the handles towards your torso, squeezing your shoulder blades together.<br><br>4. Slowly extend your arms back to the starting position, controlling the weight.",
    de: "1. Stellen Sie den Sitz und das Brustpolster der Maschine für eine bequeme Positionierung ein.<br><br>2. Fassen Sie die Griffe mit dem gewählten Griff (z.B. neutral, weit, eng).<br><br>3. Ziehen Sie die Griffe zu Ihrem Oberkörper und drücken Sie dabei Ihre Schulterblätter zusammen.<br><br>4. Strecken Sie die Arme langsam und kontrolliert in die Ausgangsposition zurück."
  }
},

{ id: 30, favorit: 0, name: "Lat Pulldown (Various Grips)", muscleGroup: "Back", category: "Core", effectiveness: 5,
  difficulty: "Novice",
  primeMuscle: ["Latissimus dorsi", "Trapezius (Lower)", "Teres major"],
  secondaryMuscle: ["Biceps Brachii", "Rhomboids", "Trapezius (Lower)", "Trapezius (Mid)", "Deltoid (Posterior)", "Forearms"],
  equipment: "Cable",
  url: "https://www.youtube.com/embed/IYXRrYXfVLc",
  description: {
    de: "Top-Alternative zu Klimmzügen, besonders Wide/Neutral Grip.",
    en:  "Top alternative to pull-ups, especially with wide or neutral grip."
  },
  difficulty: "Intermediate",
  steps: {
    en: "1. Sit at the lat pulldown machine with your knees secured under the pads.<br><br>2. Grasp the bar with your chosen grip (wide, neutral, or underhand).<br><br>3. Lean back slightly, keeping your chest up, and pull the bar down towards your upper chest.<br><br>4. Squeeze your shoulder blades together at the bottom of the movement.<br><br>5. Slowly return the bar to the starting position, controlling the weight and allowing a full stretch in your lats.",
    de: "1. Setzen Sie sich an die Latzugmaschine und sichern Sie Ihre Knie unter den Polstern.<br><br>2. Fassen Sie die Stange mit dem gewählten Griff (weit, neutral oder Untergriff).<br><br>3. Lehnen Sie sich leicht zurück, halten Sie die Brust oben und ziehen Sie die Stange zu Ihrer oberen Brust.<br><br>4. Drücken Sie am unteren Ende der Bewegung die Schulterblätter zusammen.<br><br>5. Führen Sie die Stange langsam und kontrolliert in die Ausgangsposition zurück und lassen Sie die Lats vollständig dehnen."
  }
},
//{
//  id: 201,
//  favorit: 0,
//  name: "Lat Pulldown (Wide Grip)",
//  muscleGroup: "Back",
//  category: "Core",
//  effectiveness: 5,
//  difficulty: "Intermediate",
//  primeMuscle: ["Latissimus dorsi","Trapezius (Lower)","Rhomboids" ],
//  secondaryMuscle: ["Teres Major", "Deltoid (Posterior)", "Biceps Brachii", "Forearms"],
//  equipment: "Cable",
//  url: "https://www.youtube.com/embed/IYXRrYXfVLc",
//  description: {
//    de: "Latziehen mit weitem Griff für breite Rückenmuskulatur.",
//    en: "Wide grip lat pulldown for broad back development."
//  },
//  steps: {
//    en: "1. Sit at the lat pulldown machine with your knees secured under the pads.<br><br>2. Grasp the wide bar with a wide, overhand grip.<br><br>3. Lean back slightly, keeping your chest up, and pull the bar down towards your upper chest.<br><br>4. Squeeze your shoulder blades together at the bottom of the movement.<br><br>5. Slowly return the bar to the starting position, controlling the weight and allowing a full stretch in your lats.",
//    de: "1. Setzen Sie sich an die Latzugmaschine und sichern Sie Ihre Knie unter den Polstern.<br><br>2. Fassen Sie die breite Stange mit einem weiten Obergriff.<br><br>3. Lehnen Sie sich leicht zurück, halten Sie die Brust oben und ziehen Sie die Stange zu Ihrer oberen Brust.<br><br>4. Drücken Sie am unteren Ende der Bewegung die Schulterblätter zusammen.<br><br>5. Führen Sie die Stange langsam und kontrolliert in die Ausgangsposition zurück und lassen Sie die Lats vollständig dehnen."
//  }
//},
//{
//  id: 203,
//  favorit: 0,
//  name: "Lat Pulldown (Underhand Grip)",
//  muscleGroup: "Back",
//  category: "Core",
//  effectiveness: 4,
//  difficulty: "Intermediate",
//  primeMuscle: ["Latissimus dorsi","Trapezius (Lower)", "Rhomboids"],
//  secondaryMuscle: ["Biceps Brachii", "Deltoid (Posterior)", "Forearms"],
//  equipment: "Cable",
//  url: "https://www.youtube.com/embed/IYXRrYXfVLc",
//  description: {
//    de: "Latziehen im Untergriff mit stärkerer Bizeps-Beteiligung.",
//    en: "Underhand grip lat pulldown with more biceps activation."
//  },
//  steps: {
//    en: "1. Sit at the lat pulldown machine with your knees secured under the pads.<br><br>2. Grasp the bar with an underhand grip, hands shoulder-width apart.<br><br>3. Lean back slightly, keeping your chest up, and pull the bar down towards your upper chest.<br><br>4. Squeeze your shoulder blades together at the bottom of the movement.<br><br>5. Slowly return the bar to the starting position, controlling the weight and allowing a full stretch in your lats.",
//    de: "1. Setzen Sie sich an die Latzugmaschine und sichern Sie Ihre Knie unter den Polstern.<br><br>2. Fassen Sie die Stange im Untergriff, die Hände schulterbreit auseinander.<br><br>3. Lehnen Sie sich leicht zurück, halten Sie die Brust oben und ziehen Sie die Stange zu Ihrer oberen Brust.<br><br>4. Drücken Sie am unteren Ende der Bewegung die Schulterblätter zusammen.<br><br>5. Führen Sie die Stange langsam und kontrolliert in die Ausgangsposition zurück und lassen Sie die Lats vollständig dehnen."
//  }
//},

{ id: 4, favorit: 0, name: "Pull-ups / Chin-ups", muscleGroup: "Back", category: "Core", effectiveness: 4,
  difficulty: "Advanced",
  primeMuscle: ["Latissimus dorsi", "Trapezius (Lower)", "Rhomboids"],
  secondaryMuscle: ["Biceps Brachii", "Brachialis", "Deltoid (Posterior)", "Forearms", "Core"],
  equipment: "None",
  url: "https://www.youtube.com/embed/yGnp0HU8BnA",
  description: {
    de: "Hervorragende Eigengewichtsübung für den Rücken und Bizpes sekundär.",
    en:  "Excellent bodyweight exercise for the back and secondary biceps."
  },
  steps: {
    en: "1. Grasp a pull-up bar with an overhand grip (pull-ups) or underhand grip (chin-ups), hands slightly wider than shoulder-width apart.<br><br>2. Hang freely with arms fully extended.<br><br>3. Pull your body upwards by engaging your back and arm muscles, aiming to get your chin above the bar.<br><br>4. Slowly lower yourself back to the starting position, controlling the movement.",
    de: "1. Fassen Sie eine Klimmzugstange im Obergriff (Klimmzüge) oder Untergriff (Chin-ups), die Hände etwas breiter als schulterbreit auseinander.<br><br>2. Hängen Sie frei mit vollständig ausgestreckten Armen.<br><br>3. Ziehen Sie Ihren Körper nach oben, indem Sie Ihre Rücken- und Armmuskeln anspannen, mit dem Ziel, Ihr Kinn über die Stange zu bekommen.<br><br>4. Senken Sie sich langsam und kontrolliert in die Ausgangsposition zurück."
  }
},


{ id: 26, favorit: 0, name: "Single-Arm Dumbbell Row", muscleGroup: "Back", category: "Core", effectiveness: 4,
  difficulty: "Intermediate",
  primeMuscle: ["Latissimus dorsi", "Rhomboids"],
  secondaryMuscle: ["Biceps Brachii", "Deltoid (Posterior)", "Erector Spinae", "Obliques", "Forearms"],
  equipment: "Dumbbell",
  url: "https://www.youtube.com/embed/roKtfQZbxzg",
  description: {
    de: "Sehr gute unilaterale Übung für Lat-Wachstum.",
    en:  "Very good unilateral exercise for lat development."
  },
  steps: {
    en: "1. Place one knee and hand on a flat bench, with your back straight and parallel to the floor.<br><br>2. Hold a dumbbell in the opposite hand, letting it hang towards the floor.<br><br>3. Pull the dumbbell up towards your hip, squeezing your back muscles.<br><br>4. Slowly lower the dumbbell back to the starting position, controlling the movement.<br><br>5. Repeat for the desired number of repetitions, then switch sides.",
    de: "1. Platzieren Sie ein Knie und eine Hand auf einer flachen Bank, Ihr Rücken ist gerade und parallel zum Boden.<br><br>2. Halten Sie eine Kurzhantel in der gegenüberliegenden Hand und lassen Sie sie zum Boden hängen.<br><br>3. Ziehen Sie die Kurzhantel zu Ihrer Hüfte hoch und spannen Sie dabei Ihre Rückenmuskeln an.<br><br>4. Senken Sie die Kurzhantel langsam und kontrolliert in die Ausgangsposition zurück.<br><br>5. Wiederholen Sie die gewünschte Anzahl von Wiederholungen und wechseln Sie dann die Seiten."
  }
},
{
  id: 154,
  favorit: 0,
  name: "Chest Supported Incline DB Row",
  muscleGroup: "Back",
  category: "Core",
  effectiveness: 4,
  difficulty: "Novice",
  primeMuscle: ["Latissimus dorsi", "Rhomboids", "Trapezius (Lower)", "Trapezius (Mid)"],
  secondaryMuscle: ["Biceps Brachii", "Deltoid (Posterior)", "Erector Spinae", "Obliques"],
  equipment: "Dumbbell",
  url: "https://www.youtube.com/embed/okCWuhxJEvw",
  description: {
    de: "Rudern mit Bruststütze zur Reduzierung des Schwungs und Fokus auf den Rücken.",
    en: "Rowing with chest support to reduce momentum and focus on back activation."
  },
  steps: {
    en: "1. Set an incline bench at 30–45 degrees and lie face down with a dumbbell in each hand.<br><br>2. Let the arms hang straight down, palms facing in.<br><br>3. Pull the dumbbells up toward your ribs, squeezing your shoulder blades together.<br><br>4. Pause briefly at the top.<br><br>5. Lower the dumbbells back to the starting position.",
    de: "1. Stelle eine Schrägbank auf 30–45 Grad ein und lege dich mit dem Bauch darauf, mit je einer Kurzhantel in jeder Hand.<br><br>2. Lass die Arme gerade nach unten hängen, Handflächen zeigen zueinander.<br><br>3. Ziehe die Hanteln zu den Rippen, Schulterblätter zusammenziehen.<br><br>4. Oben kurz halten.<br><br>5. Kontrolliert zurückführen."
  }
},

{
  id: 147,
  favorit: 0,
  name: "Smith Machine Row",
  muscleGroup: "Back",
  category: "Core",
  effectiveness: 4,
  difficulty: "Beginner",
  primeMuscle: ["Latissimus dorsi", "Rhomboids"],
  secondaryMuscle: ["Biceps Brachii", "Deltoid (Posterior)", "Erector Spinae", "Obliques"],
  equipment: "Machine",
  url: "https://www.youtube.com/embed/Wmivm40AV3Q",
  description: {
    de: "Sehr gute Übung für Lat-Wachstum.",
    en: "Very good exercise for lat development."
  },
  steps: {
    en: "1. Load the Smith machine barbell and set the safeties if needed.<br><br>2. Stand with feet shoulder-width and grip the bar with an overhand grip.<br><br>3. Bend at the hips, keeping your back straight.<br><br>4. Pull the bar toward your lower chest or upper abs.<br><br>5. Pause at the top, then lower under control.",
    de: "1. Belade die Smith-Maschine und stelle ggf. die Sicherungen ein.<br><br>2. Stelle dich schulterbreit hin und greife die Stange im Obergriff.<br><br>3. Beuge dich aus der Hüfte nach vorne mit geradem Rücken.<br><br>4. Ziehe die Stange in Richtung unteren Brustbereich.<br><br>5. Oben kurz halten, dann kontrolliert absenken."
  }
},

{
  id: 28,
  favorit: 0,
  name: "T-Bar Row",
  muscleGroup: "Back",
  category: "Core",
  effectiveness: 2,
  difficulty: "Intermediate",
  primeMuscle: ["Rhomboids", "Trapezius (Mid)", "Latissimus dorsi"],
  secondaryMuscle: ["Biceps Brachii", "Erector Spinae", "Deltoid (Posterior)"],
  equipment: "Machine",
  url: "https://www.youtube.com/embed/yPis7nlbqdY",
  description: {
    de: "Effektive Übung für mittleren Rücken, aber weniger optimal als andere.",
    en: "Effective exercise for mid-back, but less optimal compared to others."
  },
  steps: {
    en: "1. Load the T-bar row machine with appropriate weight.<br><br>2. Stand on the platform and grip the handles.<br><br>3. Keep your back straight and bend slightly at the hips.<br><br>4. Pull the handles toward your torso while squeezing your shoulder blades.<br><br>5. Pause briefly, then lower slowly.",
    de: "1. Belade die T-Bar-Maschine mit dem passenden Gewicht.<br><br>2. Stelle dich auf die Plattform und greife die Griffe.<br><br>3. Halte den Rücken gerade, beuge dich leicht nach vorne.<br><br>4. Ziehe die Griffe zum Rumpf, Schulterblätter zusammenziehen.<br><br>5. Oben kurz halten, dann langsam absenken."
  }
},

{
  id: 155,
  favorit: 0,
  name: "Helms Row",
  muscleGroup: "Back",
  category: "Core",
  effectiveness: 4,
  difficulty: "Intermediate",
  primeMuscle: ["Latissimus dorsi", "Rhomboids"],
  secondaryMuscle: ["Biceps Brachii", "Deltoid (Posterior)", "Erector Spinae", "Obliques"],
  equipment: "Dumbbell",
  url: "https://www.youtube.com/embed/iQ5h8zkflo4",
  description: {
    de: "Sehr gute unilaterale Übung für Lat-Wachstum.",
    en: "Very good unilateral exercise for lat development."
  },
  steps: {
    en: "1. Place one knee and hand on a bench for support, holding a dumbbell in the other hand.<br><br>2. Keep your back straight and shoulders square.<br><br>3. Pull the dumbbell toward your hip.<br><br>4. Squeeze the lat at the top.<br><br>5. Lower slowly with control.<br><br>6. Repeat, then switch sides.",
    de: "1. Stelle ein Knie und eine Hand auf eine Bank, halte die Hantel mit der freien Hand.<br><br>2. Halte den Rücken gerade und Schultern parallel.<br><br>3. Ziehe die Hantel in Richtung Hüfte.<br><br>4. Spanne oben den Latissimus an.<br><br>5. Kontrolliert absenken.<br><br>6. Wiederholen, dann Seite wechseln."
  }
},
{
  id: 29,
  favorit: 0,
  name: "Barbell Row / Pendlay Row",
  muscleGroup: "Back",
  category: "Core",
  effectiveness: 3,
  difficulty: "Intermediate",
  primeMuscle: ["Rhomboids", "Trapezius (Mid)", "Latissimus dorsi"],
  secondaryMuscle: ["Biceps Brachii", "Erector Spinae", "Deltoid (Posterior)", "Hamstrings", "Glutes", "Forearms"],
  equipment: "Barbell",
  url: "https://www.youtube.com/embed/6FZHJGzMFEc",
  description: {
    de: "Gute Grundübung für den Rücken, erfordert gute Technik.",
    en: "Good compound exercise for the back, requires solid technique."
  },
  steps: {
    en: "1. Stand with feet shoulder-width apart, barbell over mid-foot.<br><br>2. Hinge at the hips and grip the bar just outside your knees.<br><br>3. Keep your back flat and chest up.<br><br>4. Pull the bar toward your lower chest while keeping elbows close.<br><br>5. Lower the bar back to the floor with control.",
    de: "1. Stehe schulterbreit, die Langhantel über der Fußmitte.<br><br>2. Beuge dich aus der Hüfte nach vorne und greife die Stange etwas außerhalb der Knie.<br><br>3. Rücken gerade, Brust oben halten.<br><br>4. Ziehe die Hantel zur unteren Brust, Ellbogen nah am Körper.<br><br>5. Kontrolliert absenken."
  }
},

{
  id: 102,
  favorit: 0,
  name: "Straight Arm Pulldown (Cable Lat Prayers)",
  muscleGroup: "Back",
  category: "Core",
  effectiveness: 4,
  difficulty: "Beginner",
  primeMuscle: ["Latissimus dorsi"],
  secondaryMuscle: ["Teres Major", "Triceps Brachii (Long Head - Stabilization)"],
  equipment: "Cable",
  url: "https://www.youtube.com/embed/G9uNaXGTJ4w",
  description: {
    de: "Gute Isolationsübung für den Latissimus.",
    en: "Good isolation exercise for the lats."
  },
  steps: {
    en: "1. Stand facing a cable machine with a straight bar attached to the high pulley.<br><br>2. Grip the bar with both hands, arms straight, and step back slightly.<br><br>3. Pull the bar down in a wide arc until it reaches your thighs, keeping arms straight.<br><br>4. Squeeze your lats at the bottom.<br><br>5. Slowly return to the starting position with control.<br><br>6. Repeat for desired reps.",
    de: "1. Stellen Sie sich vor eine Kabelzugmaschine mit geradem Griff am oberen Zug.<br><br>2. Greifen Sie den Griff mit beiden Händen, Arme gestreckt, treten Sie leicht zurück.<br><br>3. Ziehen Sie den Griff in einem weiten Bogen nach unten bis zu den Oberschenkeln, Arme gestreckt.<br><br>4. Spannen Sie unten den Latissimus an.<br><br>5. Führen Sie den Griff langsam und kontrolliert zurück.<br><br>6. Wiederholen Sie die gewünschte Anzahl an Wiederholungen."
  }
},

{
  id: 131,
  favorit: 0,
  name: "Meadows Row",
  muscleGroup: "Back",
  category: "Core",
  effectiveness: 5,
  difficulty: "Intermediate",
  primeMuscle: ["Rhomboids", "Trapezius (Mid)", "Latissimus dorsi"],
  secondaryMuscle: ["Biceps Brachii", "Deltoid (Posterior)", "Erector Spinae", "Forearms"],
  equipment: "Barbell",
  url: "https://www.youtube.com/embed/uexTkvxwMGM",
  description: {
    de: "Einarmiges Rudern mit Landmine/Langhantel für den oberen Rücken.",
    en: "One-arm row using landmine/barbell for upper back development."
  },
  steps: {
    en: "1. Load one side of a barbell and secure the other end in a landmine attachment or corner.<br><br>2. Stand perpendicular to the bar and grab the thick end with a pronated grip.<br><br>3. Brace your core and pull the barbell toward your hip.<br><br>4. Squeeze the upper back at the top.<br><br>5. Lower with control and repeat.<br><br>6. Switch sides after completing reps.",
    de: "1. Laden Sie eine Seite einer Langhantel und sichern Sie das andere Ende in einer Landmine-Vorrichtung oder Ecke.<br><br>2. Stellen Sie sich seitlich zur Hantel und greifen Sie das dicke Ende mit Obergriff.<br><br>3. Spannen Sie den Rumpf an und ziehen Sie die Hantel in Richtung Hüfte.<br><br>4. Oben die obere Rückenmuskulatur anspannen.<br><br>5. Kontrolliert absenken und wiederholen.<br><br>6. Nach den Wiederholungen die Seite wechseln."
  }
},

//{
//  id: 130, favorit: 0, name: "One Arm Lat Pulldown", muscleGroup: "Back", category: "Core", effectiveness: 5,
//  difficulty: "Intermediate",
//  primeMuscle: ["Latissimus dorsi"],
//  secondaryMuscle: ["Biceps Brachii", "Rhomboids", "Obliques", "Forearms", "Core"],
//  equipment: "Cable",
//  url: "https://www.youtube.com/embed/IYXRrYXfVLc",
//  description: {
//    de: "Unilaterale Latzug-Variante für verbesserte Muskelansteuerung.",
//    en:  "Unilateral lat pulldown variation for improved muscle activation."
//  },
//  steps: {
//    en: "1. Sit at the lat pulldown machine with your knees secured under the pads.<br><br>2. Grasp one handle with a single hand, using an overhand or neutral grip.<br><br>3. Lean back slightly, keeping your chest up, and pull the handle down towards your side.<br><br>4. Squeeze your lat and shoulder blade at the bottom of the movement.<br><br>5. Slowly return the handle to the starting position, controlling the weight and allowing a full stretch in your lat.<br><br>6. Repeat for the desired number of repetitions, then switch arms.",
//    de: "1. Setzen Sie sich an die Latzugmaschine und sichern Sie Ihre Knie unter den Polstern.<br><br>2. Fassen Sie einen Griff mit einer Hand im Ober- oder Neutralgriff.<br><br>3. Lehnen Sie sich leicht zurück, halten Sie die Brust oben und ziehen Sie den Griff zur Seite.<br><br>4. Spannen Sie Ihren Latissimus und Ihr Schulterblatt am unteren Ende der Bewegung an.<br><br>5. Führen Sie den Griff langsam und kontrolliert in die Ausgangsposition zurück und lassen Sie den Latissimus vollständig dehnen.<br><br>6. Wiederholen Sie die gewünschte Anzahl von Wiederholungen und wechseln Sie dann die Arme."
//  }
//},


  // Exercises for den unteren Rücken (Lower Back) - Keeping previous structure/effectiveness
  {
    id: 13,
    favorit: 0,
    name: "Hyperextensions (Back Extensions)",
    muscleGroup: "Back",
    category: "Core",
    effectiveness: 4,
  difficulty: "Beginner",
  primeMuscle: ["Erector Spinae"],
    secondaryMuscle: ["Gluteus Maximus", "Hamstrings"],
    equipment: "Machine",
    url: "https://www.youtube.com/embed/5_ejbGfdAQE",
    description: {
      de: "Stärkt die Rückenstrecker.",
      en: "Strengthens the erector spinae."
    },
    steps: {
      en: "1. Position yourself on the hyperextension bench with your hips just above the pad.<br><br>2. Cross your arms or place your hands behind your head.<br><br>3. Lower your upper body slowly until your torso is roughly perpendicular to the floor.<br><br>4. Contract your lower back to raise your torso back to the starting position.<br><br>5. Do not hyperextend at the top.",
      de: "1. Positioniere dich auf der Hyperextensionsbank, Hüften knapp über dem Polster.<br><br>2. Verschränke die Arme oder halte die Hände hinter dem Kopf.<br><br>3. Senke den Oberkörper langsam ab, bis er etwa senkrecht zum Boden steht.<br><br>4. Spanne die Rückenstrecker an und kehre in die Ausgangsposition zurück.<br><br>5. Nicht überstrecken!"
    }
  },
  {
    id: 51,
    favorit: 0,
    name: "Good Mornings",
    muscleGroup: "Back",
    category: "Core",
    effectiveness: 4,
  difficulty: "Intermediate",
  primeMuscle: ["Erector Spinae"],
    secondaryMuscle: ["Gluteus Maximus", "Hamstrings"],
    equipment: "Barbell",
    url: "https://www.youtube.com/embed/dEJ0FTm-CEk",
    description: {
      de: "Komplex-Übung für hintere Kette. Vorsicht!",
      en: "Complex exercise for the posterior chain. Caution!"
    },
    steps: {
      en: "1. Place a barbell across your upper back, feet shoulder-width apart.<br><br>2. Keep your knees slightly bent and core braced.<br><br>3. Hinge at the hips and lower your torso until it's nearly parallel to the floor.<br><br>4. Reverse the motion by engaging your glutes and hamstrings.<br><br>5. Return to the starting position.",
      de: "1. Lege eine Langhantel auf den oberen Rücken, Füße schulterbreit.<br><br>2. Knie leicht gebeugt, Rumpf angespannt.<br><br>3. Beuge dich aus der Hüfte nach vorne, bis der Oberkörper fast parallel zum Boden ist.<br><br>4. Strecke dich mit Spannung in Gesäß und hinteren Oberschenkeln wieder auf.<br><br>5. In Ausgangsposition zurückkehren."
    }
  },
  {
    id: 52,
    favorit: 0,
    name: "Bird Dog",
    muscleGroup: "Back",
    category: "Core",
    effectiveness: 1,
  difficulty: "Beginner",
  primeMuscle: ["Erector Spinae", "Transverse Abdominis"],
    secondaryMuscle: ["Gluteus Maximus", "Deltoid (Posterior)"],
    equipment: "None",
    url: "https://www.youtube.com/embed/QVRtIHp9h-M",
    description: {
      de: "Funktionelle Übung für Rumpfstabilität.",
      en: "Functional exercise for trunk stability."
    },
    steps: {
      en: "1. Start on all fours with hands under shoulders and knees under hips.<br><br>2. Extend one arm forward and the opposite leg backward.<br><br>3. Keep your hips level and core tight.<br><br>4. Pause briefly, then return to start.<br><br>5. Alternate sides.",
      de: "1. Beginne im Vierfüßlerstand, Hände unter Schultern, Knie unter Hüften.<br><br>2. Strecke einen Arm nach vorne und das gegenüberliegende Bein nach hinten.<br><br>3. Halte die Hüfte stabil und den Rumpf angespannt.<br><br>4. Kurz halten, dann zurückkehren.<br><br>5. Seiten abwechseln."
    }
  },
  {
    id: 53,
    favorit: 0,
    name: "Superman",
    muscleGroup: "Back",
    category: "Core",
    effectiveness: 2,
  difficulty: "Beginner",
  primeMuscle: ["Erector Spinae"],
    secondaryMuscle: ["Gluteus Maximus"],
    equipment: "None",
    url: "https://www.youtube.com/embed/z6PJMT2y8GQ",
    description: {
      de: "Isometrische Übung für Rückenstrecker.",
      en: "Isometric exercise for erector spinae."
    },
    steps: {
      en: "1. Lie face down with arms extended in front of you.<br><br>2. Simultaneously lift arms, chest, and legs off the floor.<br><br>3. Hold the contraction briefly at the top.<br><br>4. Lower slowly to the starting position.",
      de: "1. Lege dich auf den Bauch, Arme nach vorne gestreckt.<br><br>2. Hebe Arme, Brust und Beine gleichzeitig vom Boden ab.<br><br>3. Oben kurz halten.<br><br>4. Langsam wieder absenken."
    }
  },
  {
    id: 54,
    favorit: 0,
    name: "Seated Back Extension Machine",
    muscleGroup: "Back",
    category: "Core",
    effectiveness: 3,
  difficulty: "Novice",
  primeMuscle: ["Erector Spinae"],
    secondaryMuscle: [],
    equipment: "Machine",
    url: "https://www.youtube.com/embed/4sla2xidkD0",
    description: {
      de: "Isolationsübung für unteren Rücken im Sitzen.",
      en: "Isolation exercise for lower back while seated."
    },
    steps: {
      en: "1. Sit on the machine and adjust the back pad to align with your spine.<br><br>2. Cross your arms or grip the handles.<br><br>3. Lean backward against resistance in a controlled manner.<br><br>4. Stop before hyperextending.<br><br>5. Return slowly to starting position.",
      de: "1. Setze dich an das Gerät und passe die Rückenstütze an.<br><br>2. Verschränke die Arme oder greife die Griffe.<br><br>3. Lehne dich langsam gegen den Widerstand nach hinten.<br><br>4. Nicht überstrecken!<br><br>5. Langsam in Ausgangsposition zurückkehren."
    }
  },
  // Shoulder Exercises (Schultern)
  {
    id: 7,
    favorit: 0,
    name: "Overhead Press (Barbell/Standing)",
    muscleGroup: "Shoulders",
    category: "Upper body",
    effectiveness: 3,
  difficulty: "Intermediate",
  primeMuscle: ["Deltoid (Anterior)", "Deltoid (Lateral)"],
    secondaryMuscle: ["Triceps Brachii", "Trapezius (Upper)", "Serratus Anterior", "Core"],
    equipment: "Barbell",
    url: "https://www.youtube.com/embed/G2qpTG1Eh40",
    description: {
      de: "Gute Grundübung, aber Maschinen oft besser für Hypertrophie.",
      en: "Good compound movement, but machines are often better for hypertrophy."
    },
    steps: {
      en: "1. Stand with a barbell racked at shoulder height, grasp it with an overhand grip slightly wider than shoulder-width.<br><br>2. Unrack the bar and take a small step back, engaging your core and glutes.<br><br>3. Press the bar straight overhead until your arms are fully extended, pushing your head slightly forward at the top.<br><br>4. Slowly lower the bar back to the starting position in a controlled manner.",
      de: "1. Stellen Sie sich mit einer Langhantel auf Schulterhöhe hin und fassen Sie sie mit einem Obergriff, etwas breiter als schulterbreit.<br><br>2. Heben Sie die Stange aus der Ablage und treten Sie einen kleinen Schritt zurück, wobei Sie Ihren Rumpf und Ihr Gesäß anspannen.<br><br>3. Drücken Sie die Stange gerade über den Kopf, bis Ihre Arme vollständig gestreckt sind, und schieben Sie Ihren Kopf am oberen Punkt leicht nach vorne.<br><br>4. Senken Sie die Stange langsam und kontrolliert in die Ausgangsposition zurück."
    }
  },
  {
    id: 8,
    favorit: 0,
    name: "Lean in Lateral Raises (Dumbbell)",
    muscleGroup: "Shoulders",
    category: "Upper body",
    effectiveness: 4,
  difficulty: "Novice",
  primeMuscle: ["Deltoid (Lateral)"],
    secondaryMuscle: ["Trapezius (Upper - slight)"],
    equipment: "Dumbbell",
    url: "https://www.youtube.com/embed/BmYuAG2j2co",
    description: {
      de: "Standard-Isolationsübung für die seitlichen Schulterköpfe.",
      en: "Standard isolation exercise for the lateral deltoids."
    },
    steps: {
      en: "1. Stand upright, holding a dumbbell in each hand by your sides, palms facing your body.<br><br>2. Keep a slight bend in your elbows and raise the dumbbells out to the sides until your arms are parallel to the floor (or slightly above).<br><br>3. Focus on leading with your elbows and feeling the contraction in your side deltoids.<br><br>4. Slowly lower the dumbbells back to the starting position with control.",
      de: "1. Stellen Sie sich aufrecht hin und halten Sie eine Kurzhantel in jeder Hand seitlich am Körper, die Handflächen zum Körper gerichtet.<br><br>2. Halten Sie Ihre Ellbogen leicht gebeugt und heben Sie die Kurzhanteln seitlich an, bis Ihre Arme parallel zum Boden (oder leicht darüber) sind.<br><br>3. Konzentrieren Sie sich darauf, mit den Ellbogen zu führen und die Kontraktion in Ihren seitlichen Deltamuskeln zu spüren.<br><br>4. Senken Sie die Kurzhanteln langsam und kontrolliert in die Ausgangsposition zurück."
    }
  },
  {
    id: 31,
    favorit: 0,
    name: "Arnold Press",
    muscleGroup: "Shoulders",
    category: "Upper body",
    effectiveness: 4,
  difficulty: "Intermediate",
  primeMuscle: ["Deltoid (Anterior)", "Deltoid (Lateral)"],
    secondaryMuscle: ["Triceps Brachii", "Rotator Cuff","Serratus Anterior"],
    equipment: "Dumbbell",
    url: "https://www.youtube.com/embed/R-RTgOxrj88",
    description: {
      de: "Drückvariante mit Rotation.",
      en: "Press variation with rotational movement."
    },
    steps: {
      en: "1. Sit on a bench with back support, holding a dumbbell in each hand at shoulder height, palms facing your body.<br><br>2. As you press the dumbbells overhead, rotate your wrists so your palms face forward at the top of the movement.<br><br>3. Extend your arms fully, squeezing your shoulders.<br><br>4. Reverse the motion, rotating your wrists back to the starting position as you lower the dumbbells.",
      de: "1. Setzen Sie sich auf eine Bank mit Rückenlehne und halten Sie in jeder Hand eine Kurzhantel auf Schulterhöhe, die Handflächen zum Körper gerichtet.<br><br>2. Während Sie die Kurzhanteln über den Kopf drücken, drehen Sie Ihre Handgelenke, so dass Ihre Handflächen am oberen Punkt der Bewegung nach vorne zeigen.<br><br>3. Strecken Sie Ihre Arme vollständig aus und spannen Sie Ihre Schultern an.<br><br>4. Kehren Sie die Bewegung um, drehen Sie Ihre Handgelenke zurück in die Ausgangsposition, während Sie die Kurzhanteln senken."
    }
  },
  {
    id: 33,
    favorit: 0,
    name: "Front Raises (Dumbbell/Cable)",
    muscleGroup: "Shoulders",
    category: "Upper body",
    effectiveness: 1,
  difficulty: "Novice",
  primeMuscle: ["Deltoid (Anterior)"],
    secondaryMuscle: ["Serratus Anterior","Deltoid (Lateral)","Pectoralis Major (Sternal)"],
    equipment: "Dumbbell",
    url: "https://www.youtube.com/embed/hRJ6tR5-if0",
    description: {
      de: "Generell unnötig bei ausreichenden Drückübungen.",
      en: "Generally unnecessary if pressing volume is sufficient."
    },
    steps: {
      en: "1. Stand upright, holding a dumbbell in each hand in front of your thighs, palms facing your body (or use a cable machine with a low pulley).<br><br>2. Keep a slight bend in your elbows and raise the dumbbells straight forward and up to shoulder height.<br><br>3. Focus on contracting your front deltoids.<br><br>4. Slowly lower the dumbbells back to the starting position with control.",
      de: "1. Stellen Sie sich aufrecht hin und halten Sie eine Kurzhantel in jeder Hand vor Ihren Oberschenkeln, die Handflächen zum Körper gerichtet (oder verwenden Sie eine Kabelmaschine mit einem niedrigen Kabelzug).<br><br>2. Halten Sie Ihre Ellbogen leicht gebeugt und heben Sie die Kurzhanteln gerade nach vorne und bis auf Schulterhöhe an.<br><br>3. Konzentrieren Sie sich auf die Kontraktion Ihrer vorderen Deltamuskeln.<br><br>4. Senken Sie die Kurzhanteln langsam und kontrolliert in die Ausgangsposition zurück."
    }
  },
  {
    id: 34,
    favorit: 0,
    name: "Dumbbell Shoulder Press (Seated/Standing)",
    muscleGroup: "Shoulders",
    category: "Upper body",
    effectiveness: 4,
  difficulty: "Novice",
  primeMuscle: ["Deltoid (Anterior)", "Deltoid (Lateral)"],
    secondaryMuscle: ["Triceps Brachii", "Trapezius (Upper)", "Core","Pectoralis (Upper)", "Serratus (Antierior)"],
    equipment: "Dumbbell",
    url: "https://www.youtube.com/embed/HzIiNhHhhtA",
    description: {
      de: "Solide freie Gewichtsübung für Schulterentwicklung.",
      en: "Solid free weight exercise for shoulder development."
    },
    steps: {
      en: "1. Sit on a bench with back support (or stand), holding a dumbbell in each hand at shoulder height, palms facing forward.<br><br>2. Press the dumbbells straight overhead until your arms are fully extended.<br><br>3. Slowly lower the dumbbells back to the starting position, controlling the weight.",
      de: "1. Setzen Sie sich auf eine Bank mit Rückenlehne (oder stellen Sie sich hin) und halten Sie in jeder Hand eine Kurzhantel auf Schulterhöhe, die Handflächen nach vorne gerichtet.<br><br>2. Drücken Sie die Kurzhanteln gerade über den Kopf, bis Ihre Arme vollständig gestreckt sind.<br><br>3. Senken Sie die Kurzhanteln langsam und kontrolliert in die Ausgangsposition zurück."
    }
  },
  {
    id: 35,
    favorit: 0,
    name: "Reverse Pec Deck (Rear Delt Fly)",
    muscleGroup: "Shoulders",
    category: "Upper body",
    effectiveness: 5,
  difficulty: "Novice",
  primeMuscle: ["Deltoid (Posterior)"],
    secondaryMuscle: ["Trapezius (Mid)", "Rhomboids"],
    equipment: "Machine",
    url: "https://www.youtube.com/embed/lDLcCD6jVgM",
    description: {
      de: "Top Isolationsübung für die hinteren Schulterköpfe.",
      en: "Top isolation exercise for the rear delts."
    },
    steps: {
      en: "1. Sit facing the reverse pec deck machine, adjusting the seat and handles so your chest is against the pad and your arms can reach the handles.<br><br>2. Grasp the handles, either with a neutral or pronated grip.<br><br>3. Keeping a slight bend in your elbows, pull the handles back by squeezing your shoulder blades together and contracting your rear deltoids.<br><br>4. Slowly return the handles to the starting position, controlling the weight.",
      de: "1. Setzen Sie sich mit dem Gesicht zur Reverse-Pec-Deck-Maschine, passen Sie Sitz und Griffe so an, dass Ihre Brust am Polster anliegt und Ihre Arme die Griffe erreichen können.<br><br>2. Fassen Sie die Griffe, entweder mit einem neutralen oder pronatierten Griff.<br><br>3. Halten Sie Ihre Ellbogen leicht gebeugt und ziehen Sie die Griffe zurück, indem Sie Ihre Schulterblätter zusammenziehen und Ihre hinteren Deltamuskeln anspannen.<br><br>4. Führen Sie die Griffe langsam und kontrolliert in die Ausgangsposition zurück."
    }
  },
  {
    id: 104,
    favorit: 0,
    name: "Face Pulls",
    muscleGroup: "Shoulders",
    category: "Upper body",
    effectiveness: 4,
  difficulty: "Novice",
  primeMuscle: ["Deltoid (Posterior)", "Rotator Cuff"],
    secondaryMuscle: ["Trapezius (Mid)", "Rhomboids"],
    equipment: "Cable",
    url: "https://www.youtube.com/embed/-MODnZdnmAQ",
    description: {
      de: "Wichtige Übung für hintere Schulter, oberen Rücken und Schultergesundheit.",
      en: "Important exercise for rear delts, upper back, and shoulder health."
    },
    steps: {
      en: "1. Set a rope attachment on a cable machine to chest or eye level.<br><br>2. Grasp the rope with a neutral grip (palms facing each other) and step back to create tension.<br><br>3. Pull the rope towards your face, flaring your elbows out to the sides as you pull.<br><br>4. Focus on squeezing your rear deltoids and upper back muscles.<br><br>5. Slowly extend your arms back to the starting position with control.",
      de: "1. Bringen Sie ein Seil an einem Kabelzug auf Brust- oder Augenhöhe an.<br><br>2. Fassen Sie das Seil mit neutralem Griff (Handflächen zeigen zueinander) und treten Sie zurück, um Spannung zu erzeugen.<br><br>3. Ziehen Sie das Seil zu Ihrem Gesicht, wobei Sie Ihre Ellbogen beim Ziehen nach außen spreizen.<br><br>4. Konzentrieren Sie sich darauf, Ihre hinteren Deltamuskeln und die oberen Rückenmuskeln anzuspannen.<br><br>5. Strecken Sie Ihre Arme langsam und kontrolliert in die Ausgangsposition zurück."
    }
  },
  {
    id: 78,
    favorit: 0,
    name: "Cable Lateral Raise",
    muscleGroup: "Shoulders",
    category: "Upper body",
    effectiveness: 6,
    difficulty: "Novice",
    primeMuscle: ["Deltoid (Lateral)"],
    secondaryMuscle: ["Deltoid (Anterior)", "Serratus Anterior"],
    equipment: "Cable",
    url: "https://www.youtube.com/embed/MnMux3Wc0Ac",
    description: {
      de: "Top Isolationsübung für die mittlere Schulter mit konstanter Spannung.",
      en: "Top isolation exercise for the medial delts with constant tension."
    },
    steps: {
      en: "1. Stand sideways to a low pulley cable machine, grasping a D-handle with the hand farthest from the machine (cross-body grip).<br><br>2. Keep a slight bend in your elbow and raise your arm out to the side until it's parallel to the floor (or slightly above).<br><br>3. Focus on feeling the contraction in your side deltoid, avoiding shrugging.<br><br>4. Slowly lower the handle back to the starting position with control.<br><br>5. Complete all reps on one arm before switching.",
      de: "1. Stellen Sie sich seitlich zu einer niedrigen Kabelzugmaschine und fassen Sie einen D-Griff mit der Hand, die am weitesten von der Maschine entfernt ist (Cross-Body-Griff).<br><br>2. Halten Sie Ihren Ellbogen leicht gebeugt und heben Sie Ihren Arm seitlich an, bis er parallel zum Boden (oder leicht darüber) ist.<br><br>3. Konzentrieren Sie sich darauf, die Kontraktion in Ihrem seitlichen Deltamuskel zu spüren und ein Zucken zu vermeiden.<br><br>4. Senken Sie den Griff langsam und kontrolliert in die Ausgangsposition zurück.<br><br>5. Absolvieren Sie alle Wiederholungen auf einem Arm, bevor Sie wechseln."
    }
  },
  {
    id: 79,
    favorit: 0,
    name: "Reverse Cable Crossover (Rear Delt Fly)",
    muscleGroup: "Shoulders",
    category: "Upper body",
    effectiveness: 6,
    difficulty: "Novice",
    primeMuscle: ["Deltoid (Posterior)"],
    secondaryMuscle: ["Trapezius (Mid)", "Rhomboids"],
    equipment: "Cable",
    url: "https://www.youtube.com/embed/uhje8lyqlEQ",
    description: {
      de: "Top Isolationsübung für die hinteren Schulterköpfe mit Kabel.",
      en: "Top isolation exercise for rear delts using cables."
    },
    steps: {
      en: "1. Stand in the middle of a cable crossover machine, setting both pulleys to shoulder height.<br><br>2. Grasp the right handle with your left hand and the left handle with your right hand, crossing your arms in front of you.<br><br>3. Keeping a slight bend in your elbows, pull the handles out and back, squeezing your shoulder blades together and contracting your rear deltoids.<br><br>4. Slowly return the handles to the starting position, controlling the weight.",
      de: "1. Stellen Sie sich in die Mitte einer Kabelzugmaschine und stellen Sie beide Rollen auf Schulterhöhe ein.<br><br>2. Fassen Sie den rechten Griff mit der linken Hand und den linken Griff mit der rechten Hand und kreuzen Sie Ihre Arme vor sich.<br><br>3. Halten Sie Ihre Ellbogen leicht gebeugt und ziehen Sie die Griffe nach außen und hinten, indem Sie Ihre Schulterblätter zusammenziehen und Ihre hinteren Deltamuskeln anspannen.<br><br>4. Führen Sie die Griffe langsam und kontrolliert in die Ausgangsposition zurück."
    }
  },
  {
id: 80,
favorit: 0,
name: "Dumbbell Rear Delt Fly",
muscleGroup: "Shoulders",
category: "Upper body",
effectiveness: 5,
difficulty: "Novice",
primeMuscle: ["Deltoid (Posterior)"],
secondaryMuscle: ["Trapezius (Mid)", "Rhomboids"],
equipment: "Dumbbell",
url: "https://www.youtube.com/embed/34gVHrkaiz0",
description: {
de: "Gute Isolationsübung für die hinteren Schulterköpfe mit Kurzhanteln.",
en: "Good isolation exercise for the rear delts using dumbbells."
},
steps: {
en: "1. Sit on the edge of a bench or stand with feet hip-width apart and hinge at the hips until your torso is nearly parallel to the floor.<br><br>2. Hold a dumbbell in each hand with palms facing each other and maintain a slight bend in the elbows.<br><br>3. With a braced core and neutral spine, raise the dumbbells out to the sides in a wide arc until your upper arms are parallel to the floor, squeezing the rear delts and shoulder blades together.<br><br>4. Lower the weights slowly and under control back to the start position.",
de: "1. Setzen Sie sich auf die vordere Kante einer Bank oder stehen Sie hüftbreit und beugen Sie sich aus der Hüfte, bis der Oberkörper fast parallel zum Boden ist.<br><br>2. Halten Sie in jeder Hand eine Kurzhantel, die Handflächen zueinander gerichtet, die Ellenbogen leicht gebeugt.<br><br>3. Spannen Sie die Körpermitte an und halten Sie die Wirbelsäule neutral; führen Sie die Hanteln in einem weiten Bogen seitlich nach oben, bis die Oberarme parallel zum Boden sind, und ziehen Sie die hinteren Deltamuskeln sowie die Schulterblätter zusammen.<br><br>4. Senken Sie die Hanteln kontrolliert in die Ausgangsposition zurück und wiederholen Sie."
}
},
  {
    id: 105,
    favorit: 0,
    name: "Barbell Shrugs",
    muscleGroup: "Shoulders",
    category: "Upper body",
    effectiveness: 3,
  difficulty: "Beginner",
  primeMuscle: ["Trapezius (Upper)"],
    secondaryMuscle: ["Forearms"],
    equipment: "Barbell",
    url: "https://www.youtube.com/embed/HYZ01ZHqqng",
    description: {
      de: "Übung zur direkten Stärkung des oberen Trapezmuskels.",
      en: "Exercise to directly strengthen the upper trapezius."
    },
    steps: {
      en: "1. Stand with your feet shoulder-width apart, holding a barbell in front of you with an overhand grip.<br><br>2. Shrug your shoulders straight up towards your ears, focusing on contracting your upper traps.<br><br>3. Hold for a second at the top, then slowly lower your shoulders back down with control.",
      de: "1. Stellen Sie sich mit schulterbreit auseinander stehenden Füßen hin und halten Sie eine Langhantel mit Obergriff vor sich.<br><br>2. Zucken Sie mit den Schultern gerade nach oben in Richtung Ihrer Ohren, wobei Sie sich auf die Kontraktion Ihrer oberen Trapezmuskeln konzentrieren.<br><br>3. Eine Sekunde am oberen Punkt halten, dann die Schultern langsam und kontrolliert wieder senken."
    }
  },
  {
    id: 158,
    favorit: 0,
    name: "Machine Shrugs",
    muscleGroup: "Shoulders",
    category: "Upper body",
    effectiveness: 3,
  difficulty: "Novice",
  primeMuscle: ["Trapezius (Upper)"],
    secondaryMuscle: ["Forearms"],
    equipment: "Machine",
    url: "https://www.youtube.com/embed/ua0XuKwKQ9M",
    description: {
      de: "Übung zur direkten Stärkung des oberen Trapezmuskels.",
      en: "Exercise to directly strengthen the upper trapezius."
    },
    steps: {
      en: "1. Sit or stand in a shrug machine, adjusting the seat/pads so your shoulders are aligned with the machine's movement.<br><br>2. Grasp the handles with a firm grip.<br><br>3. Shrug your shoulders straight up, focusing on contracting your upper traps.<br><br>4. Hold briefly at the top, then slowly lower the weight back down with control.",
      de: "1. Setzen Sie sich oder stellen Sie sich in eine Shrug-Maschine und passen Sie Sitz/Polster so an, dass Ihre Schultern mit der Bewegung der Maschine ausgerichtet sind.<br><br>2. Fassen Sie die Griffe fest.<br><br>3. Zucken Sie Ihre Schultern gerade nach oben und konzentrieren Sie sich dabei auf die Kontraktion Ihrer oberen Trapezmuskeln.<br><br>4. Halten Sie kurz am oberen Punkt inne und senken Sie das Gewicht dann langsam und kontrolliert wieder ab."
    }
  },
  {
    id: 157,
    favorit: 0,
    name: "Dumbbell Shrugs",
    muscleGroup: "Shoulders",
    category: "Upper body",
    effectiveness: 3,
  difficulty: "Novice",
  primeMuscle: ["Trapezius (Upper)"],
    secondaryMuscle: ["Forearms"],
    equipment: "Dumbbell",
    url: "https://www.youtube.com/embed/moFqLlptX7Q",
    description: {
      de: "Übung zur direkten Stärkung des oberen Trapezmuskels.",
      en: "Exercise to directly strengthen the upper trapezius."
    },
    steps: {
      en: "1. Stand with your feet shoulder-width apart, holding a dumbbell in each hand by your sides, palms facing your body.<br><br>2. Shrug your shoulders straight up towards your ears, focusing on contracting your upper traps.<br><br>3. Hold for a second at the top, then slowly lower your shoulders back down with control.",
      de: "1. Stellen Sie sich mit schulterbreit auseinander stehenden Füßen hin und halten Sie eine Kurzhantel in jeder Hand seitlich am Körper, die Handflächen zum Körper gerichtet.<br><br>2. Zucken Sie mit den Schultern gerade nach oben in Richtung Ihrer Ohren, wobei Sie sich auf die Kontraktion Ihrer oberen Trapezmuskeln konzentrieren.<br><br>3. Eine Sekunde am oberen Punkt halten, dann die Schultern langsam und kontrolliert wieder senken."
    }
  },
  {
    id: 159,
    favorit: 0,
    name: "Cable Shrugs",
    muscleGroup: "Shoulders",
    category: "Upper body",
    effectiveness: 3,
  difficulty: "Novice",
  primeMuscle: ["Trapezius (Upper)"],
    secondaryMuscle: ["Forearms"],
    equipment: "Cable", // Original JSON had "dumbbell", corrected to "Cable" for consistency
    url: "https://www.youtube.com/embed/Hy6f1Lz_PiA",
    description: {
      de: "Übung zur direkten Stärkung des oberen Trapezmuskels.",
      en: "Exercise to directly strengthen the upper trapezius."
    },
    steps: {
      en: "1. Stand facing a low pulley cable machine, attaching a straight bar or rope attachment.<br><br>2. Grasp the attachment with an overhand or neutral grip and stand upright.<br><br>3. Shrug your shoulders straight up towards your ears, focusing on contracting your upper traps.<br><br>4. Hold briefly at the top, then slowly lower the weight back down with control, allowing for a good stretch.",
      de: "1. Stellen Sie sich vor eine niedrige Kabelzugmaschine und befestigen Sie eine gerade Stange oder ein Seil.<br><br>2. Fassen Sie den Aufsatz mit einem Obergriff oder neutralem Griff und stellen Sie sich aufrecht hin.<br><br>3. Zucken Sie Ihre Schultern gerade nach oben in Richtung Ihrer Ohren und konzentrieren Sie sich dabei auf die Kontraktion Ihrer oberen Trapezmuskeln.<br><br>4. Halten Sie kurz am oberen Punkt inne und senken Sie das Gewicht dann langsam und kontrolliert wieder ab, um eine gute Dehnung zu ermöglichen."
    }
  },
  {
    id: 117,
    favorit: 0,
    name: "Upright Row (Wide Grip/EZ Bar)",
    muscleGroup: "Shoulders",
    category: "Upper body",
    effectiveness: 3,
  difficulty: "Advanced",
  primeMuscle: ["Deltoid (Lateral)", "Trapezius (Upper)"],
    secondaryMuscle: ["Biceps Brachii"],
    equipment: "Barbell",
    url: "https://www.youtube.com/embed/um3VVzqunPU",
    description: {
      de: "Trainiert seitliche Schulter und Trapezius, birgt aber Impingement-Risiko.",
      en: "Targets lateral delts and trapezius, but comes with impingement risk."
    },
    steps: {
      en: "1. Stand with a barbell (or EZ bar) in front of you with a wide overhand grip, hands about 1.5 times shoulder-width apart.<br><br>2. Keep the bar close to your body and pull it straight up towards your chin, leading with your elbows.<br><br>3. Your elbows should flare out to the sides and be higher than your hands at the top of the movement.<br><br>4. Slowly lower the bar back to the starting position with control.",
      de: "1. Stellen Sie sich mit einer Langhantel (oder EZ-Stange) vor sich hin und fassen Sie sie mit einem weiten Obergriff, die Hände etwa 1,5-mal schulterbreit auseinander.<br><br>2. Halten Sie die Stange nah am Körper und ziehen Sie sie gerade nach oben zum Kinn, wobei Sie mit den Ellbogen führen.<br><br>3. Ihre Ellbogen sollten am oberen Punkt der Bewegung nach außen gespreizt und höher als Ihre Hände sein.<br><br>4. Senken Sie die Stange langsam und kontrolliert in die Ausgangsposition zurück."
    }
  },
  {
    id: 121,
    favorit: 0,
    name: "Cable Y-Raise",
    muscleGroup: "Shoulders",
    category: "Upper body",
    effectiveness: 5,
  difficulty: "Beginner",
  primeMuscle: ["Deltoid (Lateral)"],
    secondaryMuscle: ["Rotator Cuff", "Trapezius (Lower)", "Trapezius (Mid)"],
    equipment: "Cable",
    url: "https://www.youtube.com/embed/2OMbdPF7mz4",
    description: {
      de: "Effektive Übung für seitliche Deltoids und unteren/mittleren Trapezius.",
      en: "Effective exercise for lateral delts and lower/mid trapezius."
    },
    steps: {
      en: "1. Set a cable pulley to a low position, attach a D-handle, and stand facing the machine, holding the handle with the opposite hand (cross-body).<br><br>2. Lean forward slightly at the hips.<br><br>3. Keeping your arm straight, raise the cable diagonally upwards and outwards, forming a 'Y' shape with your body, until your arm is at shoulder height or slightly above.<br><br>4. Focus on squeezing your lateral deltoid and middle/lower traps.<br><br>5. Slowly lower the handle back to the starting position with control.",
      de: "1. Stellen Sie eine Kabelrolle auf eine niedrige Position ein, befestigen Sie einen D-Griff und stellen Sie sich der Maschine zugewandt hin, wobei Sie den Griff mit der gegenüberliegenden Hand halten (Cross-Body).<br><br>2. Lehnen Sie sich in den Hüften leicht nach vorne.<br><br>3. Halten Sie Ihren Arm gerade und heben Sie das Kabel diagonal nach oben und außen an, so dass Ihr Körper eine 'Y'-Form bildet, bis Ihr Arm auf Schulterhöhe oder etwas darüber ist.<br><br>4. Konzentrieren Sie sich darauf, Ihre seitlichen Deltamuskeln und die mittleren/unteren Trapezmuskeln anzuspannen.<br><br>5. Senken Sie den Griff langsam und kontrolliert in die Ausgangsposition zurück."
    }
  },
  {
    id: 122,
    favorit: 0,
    name: "Behind-the-Back Cable Lateral Raise",
    muscleGroup: "Shoulders",
    category: "Upper body",
    effectiveness: 5,
  difficulty: "Intermediate",
  primeMuscle: ["Deltoid (Lateral)"],
    secondaryMuscle: ["Deltoid (Anterior)", "Serratus Anterior"],
    equipment: "Cable",
    url: "https://www.youtube.com/embed/lq7eLC30b9w",
    description: {
      de: "Variante des Seithebens mit Fokus auf maximalen Stretch (benötigt Manschette).",
      en: "Lateral raise variation focusing on maximum stretch (requires cuff attachment)."
    },
    steps: {
      en: "1. Stand sideways to a low pulley cable machine. Reach behind your back and grasp the D-handle with the hand farthest from the machine.<br><br>2. Position yourself so the cable crosses behind your body, creating tension.<br><br>3. Keep a slight bend in your elbow and raise your arm out to the side until it's parallel to the floor or slightly above.<br><br>4. Focus on feeling the stretch at the bottom and the contraction in your lateral deltoid.<br><br>5. Slowly lower the handle back to the starting position with control.",
      de: "1. Stellen Sie sich seitlich zu einer niedrigen Kabelzugmaschine. Greifen Sie hinter Ihren Rücken und fassen Sie den D-Griff mit der Hand, die am weitesten von der Maschine entfernt ist.<br><br>2. Positionieren Sie sich so, dass das Kabel hinter Ihrem Körper kreuzt und Spannung erzeugt.<br><br>3. Halten Sie Ihren Ellbogen leicht gebeugt und heben Sie Ihren Arm seitlich an, bis er parallel zum Boden oder etwas darüber ist.<br><br>4. Konzentrieren Sie sich auf die Dehnung am unteren Punkt und die Kontraktion in Ihrem seitlichen Deltamuskel.<br><br>5. Senken Sie den Griff langsam und kontrolliert in die Ausgangsposition zurück."
    }
  },
  {
    id: 123,
    favorit: 0,
    name: "Bent-Over Dumbbell Reverse Fly",
    muscleGroup: "Shoulders",
    category: "Upper body",
    effectiveness: 3,
  difficulty: "Intermediate",
  primeMuscle: ["Deltoid (Posterior)"],
    secondaryMuscle: ["Trapezius (Mid)", "Rhomboids"],
    equipment: "Dumbbell",
    url: "https://www.youtube.com/embed/34gVHrkaiz0",
    description: {
      de: "Freie Gewichtsübung für die hinteren Schulterköpfe.",
      en: "Free weight exercise for the rear delts."
    },
    steps: {
      en: "1. Stand with a slight bend in your knees, bending forward at your hips until your torso is almost parallel to the floor.<br><br>2. Hold a dumbbell in each hand with a neutral grip (palms facing each other), arms hanging straight down.<br><br>3. Keeping a slight bend in your elbows, raise the dumbbells out to the sides in an arc, squeezing your shoulder blades together.<br><br>4. Focus on contracting your rear deltoids.<br><br>5. Slowly lower the dumbbells back to the starting position with control.",
      de: "1. Stellen Sie sich mit leicht gebeugten Knien hin und beugen Sie sich in den Hüften nach vorne, bis Ihr Oberkörper fast parallel zum Boden ist.<br><br>2. Halten Sie in jeder Hand eine Kurzhantel mit neutralem Griff (Handflächen zeigen zueinander), die Arme hängen gerade nach unten.<br><br>3. Halten Sie Ihre Ellbogen leicht gebeugt und heben Sie die Kurzhanteln seitlich in einem Bogen an, wobei Sie Ihre Schulterblätter zusammenziehen.<br><br>4. Konzentrieren Sie sich auf die Kontraktion Ihrer hinteren Deltamuskeln.<br><br>5. Senken Sie die Kurzhanteln langsam und kontrolliert in die Ausgangsposition zurück."
    }
  },
  {
    id: 165,
    favorit: 0,
    name: "Elevated Pike Press",
    muscleGroup: "Shoulders",
    category: "Upper body",
    effectiveness: 3,
  difficulty: "Intermediate",
  primeMuscle: ["Deltoid (Anterior)", "Deltoid (Lateral)"],
    secondaryMuscle: ["Triceps Brachii", "Trapezius (Upper)"],
    equipment: "None", // Typically uses elevated surfaces like boxes or chairs
    url: "https://www.youtube.com/embed/EgY9WFxPFNU",
    description: {
      de: "Solide freie Übung für Schulterentwicklung.",
      en: "Solid free Exercise for shoulder development."
    },
    steps: {
      en: "1. Place your feet on an elevated surface (e.g., sturdy box or chair) and your hands on the floor in front of you, shoulder-width apart, forming an inverted 'V' shape with your body.<br><br>2. Keep your legs and back as straight as possible, with your hips high.<br><br>3. Lower your head towards the floor by bending your elbows, keeping them tucked in or slightly flared.<br><br>4. Push back up to the starting position by extending your arms, focusing on your shoulders and triceps.",
      de: "1. Stellen Sie Ihre Füße auf eine erhöhte Oberfläche (z. B. eine stabile Box oder einen Stuhl) und Ihre Hände schulterbreit auseinander auf den Boden vor sich, so dass Ihr Körper eine umgekehrte 'V'-Form bildet.<br><br>2. Halten Sie Ihre Beine und Ihren Rücken so gerade wie möglich, mit den Hüften hoch.<br><br>3. Senken Sie Ihren Kopf zum Boden, indem Sie Ihre Ellbogen beugen und sie eng am Körper oder leicht gespreizt halten.<br><br>4. Drücken Sie sich durch Strecken der Arme in die Ausgangsposition zurück und konzentrieren Sie sich dabei auf Ihre Schultern und Ihren Trizeps."
    }
  },
  {
    id: 124,
    favorit: 0,
    name: "Band Lateral Raise",
    muscleGroup: "Shoulders",
    category: "Upper body",
    effectiveness: 2,
  difficulty: "Beginner",
  primeMuscle: ["Deltoid (Lateral)"],
    secondaryMuscle: [ "Deltoid (Anterior)", "Serratus Anterior"],
    equipment: "None", // Requires a resistance band
    url: "https://www.youtube.com/embed/__0jIbOwnfI",
    description: {
      de: "Seitheben mit Widerstandsband.",
      en: "Lateral raise with resistance band."
    },
    steps: {
      en: "1. Stand on the middle of a resistance band, holding one end in each hand by your sides.<br><br>2. Keep a slight bend in your elbows and raise your arms out to the sides until your arms are parallel to the floor (or slightly above).<br><br>3. Focus on feeling the contraction in your side deltoids.<br><br>4. Slowly lower your arms back to the starting position with control, resisting the pull of the band.",
      de: "1. Stellen Sie sich auf die Mitte eines Widerstandsbandes und halten Sie je ein Ende in jeder Hand seitlich am Körper.<br><br>2. Halten Sie Ihre Ellbogen leicht gebeugt und heben Sie Ihre Arme seitlich an, bis Ihre Arme parallel zum Boden (oder leicht darüber) sind.<br><br>3. Konzentrieren Sie sich darauf, die Kontraktion in Ihren seitlichen Deltamuskeln zu spüren.<br><br>4. Senken Sie Ihre Arme langsam und kontrolliert in die Ausgangsposition zurück und widerstehen Sie dem Zug des Bandes."
    }
  },
  {
    id: 106,
    favorit: 0,
    name: "Machine Shoulder Press",
    muscleGroup: "Shoulders",
    category: "Upper body",
    effectiveness: 5,
  difficulty: "Novice",
  primeMuscle: ["Deltoid (Anterior)", "Deltoid (Lateral)"],
    secondaryMuscle: ["Triceps Brachii"],
    equipment: "Machine",
    url: "https://www.youtube.com/embed/SCQVmN1gYsk",
    description: {
      de: "Top geführte Drückbewegung für die vorderen Schultern.",
      en: "Top guided pressing movement for the front delts."
    },
    steps: {
      en: "1. Sit in the shoulder press machine, adjusting the seat so the handles are at shoulder height.<br><br>2. Grasp the handles with an overhand grip, hands slightly wider than shoulder-width.<br><br>3. Press the handles straight overhead until your arms are fully extended.<br><br>4. Slowly lower the handles back to the starting position, controlling the weight throughout the movement.",
      de: "1. Setzen Sie sich in die Schulterdrückmaschine und stellen Sie den Sitz so ein, dass die Griffe auf Schulterhöhe sind.<br><br>2. Fassen Sie die Griffe mit einem Obergriff, die Hände etwas breiter als schulterbreit.<br><br>3. Drücken Sie die Griffe gerade über den Kopf, bis Ihre Arme vollständig gestreckt sind.<br><br>4. Senken Sie die Griffe langsam in die Ausgangsposition zurück und kontrollieren Sie das Gewicht während der gesamten Bewegung."
    }
  },
  // Biceps Exercises (Biceps)
  {
    id: 9,
    favorit: 0,
    name: "EZ Bar Bicep Curls",
    muscleGroup: "Biceps",
    category: "Upper body",
    effectiveness: 4,
  difficulty: "Intermediate",
  primeMuscle: ["Biceps Brachii (Short Head)", "Biceps Brachii (Long Head)"],
    secondaryMuscle: ["Brachialis", "Forearms (Flexors)"],
    equipment: "Barbell", 
    url: "https://www.youtube.com/embed/EK747VC37yE",
    description: {
      de: "Solide Bicepsübung mit Handgelenk-schonenderem Griff.",
      en: "Solid biceps exercise with a more wrist-friendly grip."
    },
    steps: {
      en: "1. Stand upright or sit on a bench, holding an EZ curl bar with an underhand grip (palms up), hands positioned on the angled parts of the bar.<br><br>2. Keep your elbows tucked close to your sides and your upper arms stationary.<br><br>3. Curl the bar upwards towards your shoulders, contracting your biceps forcefully at the top.<br><br>4. Slowly lower the bar back to the starting position, controlling the eccentric phase.",
      de: "1. Stellen Sie sich aufrecht hin oder setzen Sie sich auf eine Bank und halten Sie eine EZ-Curl-Stange mit einem Untergriff (Handflächen nach oben), die Hände an den angewinkelten Teilen der Stange positioniert.<br><br>2. Halten Sie Ihre Ellbogen eng am Körper und Ihre Oberarme stationär.<br><br>3. Curlen Sie die Stange nach oben in Richtung Ihrer Schultern und spannen Sie Ihren Bizeps am oberen Punkt kräftig an.<br><br>4. Senken Sie die Stange langsam in die Ausgangsposition zurück und kontrollieren Sie die exzentrische Phase."
    }
  },
  {
    id: 149,
    favorit: 0,
    name: "Preacher Curls (Machine)",
    muscleGroup: "Biceps",
    category: "Upper body",
    effectiveness: 5,
  difficulty: "Novice",
  primeMuscle: ["Biceps Brachii (Short Head)"],
    secondaryMuscle: ["Brachialis"],
    equipment: "Machine",
    url: "https://www.youtube.com/embed/oHbSWPo3swM",
    description: {
      de: "Top Isolationsübung mit Fixierung des Oberarms.",
      en: "Top isolation exercise with upper arm fixation."
    },
    steps: {
      en: "1. Sit on the preacher curl machine, resting your upper arms on the pad.<br><br>2. Grasp the handles with an underhand grip, hands typically shoulder-width apart.<br><br>3. Fully extend your arms, feeling a stretch in your biceps.<br><br>4. Curl the handles upwards, contracting your biceps forcefully at the top.<br><br>5. Slowly lower the handles back to the starting position, maintaining control throughout the movement.",
      de: "1. Setzen Sie sich auf die Preacher-Curl-Maschine und legen Sie Ihre Oberarme auf das Polster.<br><br>2. Fassen Sie die Griffe mit einem Untergriff, die Hände typischerweise schulterbreit auseinander.<br><br>3. Strecken Sie Ihre Arme vollständig aus und spüren Sie eine Dehnung in Ihren Bizeps.<br><br>4. Curlen Sie die Griffe nach oben und spannen Sie Ihren Bizeps am oberen Punkt kräftig an.<br><br>5. Senken Sie die Griffe langsam in die Ausgangsposition zurück und behalten Sie die Kontrolle während der gesamten Bewegung."
    }
  },
  {
    id: 150,
    favorit: 0,
    name: "Preacher Curls (Dumbbell)",
    muscleGroup: "Biceps",
    category: "Upper body",
    effectiveness: 5,
  difficulty: "Novice",
  primeMuscle: ["Biceps Brachii (Short Head)"],
    secondaryMuscle: ["Brachialis"],
    equipment: "Dumbbell",
    url: "https://www.youtube.com/embed/fuK3nFvwgXk",
    description: {
      de: "Top Isolationsübung mit Fixierung des Oberarms.",
      en: "Top isolation exercise with upper arm fixation."
    },
    steps: {
      en: "1. Sit at a preacher curl bench, resting your upper arm (one at a time) on the pad.<br><br>2. Hold a dumbbell with an underhand grip, arm fully extended.<br><br>3. Curl the dumbbell upwards towards your shoulder, contracting your biceps forcefully.<br><br>4. Slowly lower the dumbbell back to the starting position, controlling the eccentric phase.<br><br>5. Complete all reps on one arm before switching to the other.",
      de: "1. Setzen Sie sich auf eine Preacher-Curl-Bank und legen Sie Ihren Oberarm (einen nach dem anderen) auf das Polster.<br><br>2. Halten Sie eine Kurzhantel mit einem Untergriff, der Arm vollständig ausgestreckt.<br><br>3. Curlen Sie die Kurzhantel nach oben in Richtung Ihrer Schulter und spannen Sie Ihren Bizeps kräftig an.<br><br>4. Senken Sie die Kurzhantel langsam in die Ausgangsposition zurück und kontrollieren Sie die exzentrische Phase.<br><br>5. Absolvieren Sie alle Wiederholungen auf einem Arm, bevor Sie zum anderen wechseln."
    }
  },
  {
    id: 36,
    favorit: 0,
    name: "Hammer Curls",
    muscleGroup: "Biceps",
    category: "Upper body",
    effectiveness: 4,
  difficulty: "Novice",
  primeMuscle: ["Brachialis", "Brachioradialis"],
    secondaryMuscle: ["Biceps Brachii"],
    equipment: "Dumbbell",
    url: "https://www.youtube.com/embed/XOEL4MgekYE",
    description: {
      de: "Effektiv für Biceps, Brachialis und Unterarm.",
      en: "Effective for biceps, brachialis, and forearm development."
    },
    steps: {
      en: "1. Stand or sit, holding a dumbbell in each hand with a neutral grip (palms facing each other).<br><br>2. Keep your elbows tucked close to your sides and your upper arms stationary.<br><br>3. Curl the dumbbells upwards towards your shoulders, maintaining the neutral grip.<br><br>4. Slowly lower the dumbbells back to the starting position, controlling the eccentric phase.",
      de: "1. Stellen Sie sich hin oder setzen Sie sich und halten Sie in jeder Hand eine Kurzhantel mit neutralem Griff (Handflächen zeigen zueinander).<br><br>2. Halten Sie Ihre Ellbogen eng am Körper und Ihre Oberarme stationär.<br><br>3. Curlen Sie die Kurzhanteln nach oben in Richtung Ihrer Schultern, wobei Sie den neutralen Griff beibehalten.<br><br>4. Senken Sie die Kurzhanteln langsam in die Ausgangsposition zurück und kontrollieren Sie die exzentrische Phase."
    }
  },
  {
    id: 37,
    favorit: 0,
    name: "Preacher Curls (Barbell)",
    muscleGroup: "Biceps",
    category: "Upper body",
    effectiveness: 4,
  difficulty: "Novice",
  primeMuscle: ["Biceps Brachii (Short Head)"],
    secondaryMuscle: ["Brachialis"],
    url: "https://www.youtube.com/embed/sxA__DoLsgo",
    equipment: "Barbell",
    description: {
      de: "Top Isolationsübung mit Fixierung des Oberarms (DB/Machine bevorzugt).",
      en: "Top isolation exercise with upper arm fixation (DB/Machine preferred)."
    },
    steps: {
      en: "1. Sit at a preacher curl bench, resting your upper arms on the pad.<br><br>2. Grasp an EZ curl bar (or straight bar) with an underhand grip, hands typically shoulder-width apart.<br><br>3. Fully extend your arms, feeling a stretch in your biceps.<br><br>4. Curl the bar upwards, contracting your biceps forcefully at the top.<br><br>5. Slowly lower the bar back to the starting position, maintaining control throughout the movement.",
      de: "1. Setzen Sie sich auf eine Preacher-Curl-Bank und legen Sie Ihre Oberarme auf das Polster.<br><br>2. Fassen Sie eine EZ-Curl-Stange (oder eine gerade Stange) mit einem Untergriff, die Hände typischerweise schulterbreit auseinander.<br><br>3. Strecken Sie Ihre Arme vollständig aus und spüren Sie eine Dehnung in Ihren Bizeps.<br><br>4. Curlen Sie die Stange nach oben und spannen Sie Ihren Bizeps am oberen Punkt kräftig an.<br><br>5. Senken Sie die Stange langsam in die Ausgangsposition zurück und behalten Sie die Kontrolle während der gesamten Bewegung."
    }
  },
  {
    id: 38,
    favorit: 0,
    name: "Incline Dumbbell Curls",
    muscleGroup: "Biceps",
    category: "Upper body",
    effectiveness: 4,
  difficulty: "Novice",
  primeMuscle: ["Biceps Brachii (Long Head)"],
    secondaryMuscle: ["Brachialis"],
    equipment: "Dumbbell",
    url: "https://www.youtube.com/embed/Z0NIYS9nyoQ",
    description: {
      de: "Gute Bicepsübung mit Stretch für den langen Kopf.",
      en: "Great biceps curl with stretch focus on the long head."
    },
    steps: {
      en: "1. Sit on an incline bench set to a 45-60 degree angle, holding a dumbbell in each hand with an underhand grip.<br><br>2. Let your arms hang straight down, feeling a stretch in your biceps.<br><br>3. Keep your upper arms stationary and curl the dumbbells upwards towards your shoulders.<br><br>4. Squeeze your biceps at the top of the movement.<br><br>5. Slowly lower the dumbbells back to the starting position, controlling the eccentric phase and maintaining the stretch.",
      de: "1. Setzen Sie sich auf eine Schrägbank, die in einem Winkel von 45-60 Grad eingestellt ist, und halten Sie in jeder Hand eine Kurzhantel mit einem Untergriff.<br><br>2. Lassen Sie Ihre Arme gerade nach unten hängen und spüren Sie eine Dehnung in Ihren Bizeps.<br><br>3. Halten Sie Ihre Oberarme stationär und curlen Sie die Kurzhanteln nach oben in Richtung Ihrer Schultern.<br><br>4. Spannen Sie Ihren Bizeps am oberen Punkt der Bewegung an.<br><br>5. Senken Sie die Kurzhanteln langsam in die Ausgangsposition zurück, kontrollieren Sie die exzentrische Phase und behalten Sie die Dehnung bei."
    }
  },
  {
    id: 39,
    favorit: 0,
    name: "Cable Curls (Bar/Rope)",
    muscleGroup: "Biceps",
    category: "Upper body",
    effectiveness: 4,
  difficulty: "Novice",
  primeMuscle: ["Biceps Brachii (Long Head)"],
    secondaryMuscle: ["Brachialis"],
    equipment: "Cable",
    url: "https://www.youtube.com/embed/opFVuRi_3b8",
    description: {
      de: "Gleichmäßiger Widerstand, gute Variante.",
      en: "Even resistance – a solid cable curl variation."
    },
    steps: {
      en: "1. Stand facing a low pulley cable machine, attaching a straight bar or rope attachment.<br><br>2. Grasp the attachment with an underhand grip (or neutral for rope), hands shoulder-width apart.<br><br>3. Keep your elbows tucked close to your sides and your upper arms stationary.<br><br>4. Curl the attachment upwards towards your shoulders, contracting your biceps forcefully at the top.<br><br>5. Slowly lower the attachment back to the starting position, controlling the eccentric phase.",
      de: "1. Stellen Sie sich vor eine niedrige Kabelzugmaschine und befestigen Sie eine gerade Stange oder ein Seil.<br><br>2. Fassen Sie den Aufsatz mit einem Untergriff (oder neutral für das Seil), die Hände schulterbreit auseinander.<br><br>3. Halten Sie Ihre Ellbogen eng am Körper und Ihre Oberarme stationär.<br><br>4. Curlen Sie den Aufsatz nach oben in Richtung Ihrer Schultern und spannen Sie Ihren Bizeps am oberen Punkt kräftig an.<br><br>5. Senken Sie den Aufsatz langsam in die Ausgangsposition zurück und kontrollieren Sie die exzentrische Phase."
    }
  },
  {
    id: 138,
    favorit: 0,
    name: "Bayesian Curl",
    muscleGroup: "Biceps",
    category: "Upper body",
    effectiveness: 6,
    difficulty: "Beginner",
    primeMuscle: ["Biceps Brachii (Short Head)", "Biceps Brachii (Long Head)"],
    secondaryMuscle: ["Brachialis"],
    equipment: "Cable",
    url: "https://www.youtube.com/embed/BaSd7C58L3o", 
    description: {
      de: "Top Cable Curl Variante mit Fokus auf voller ROM und Stretch.",
      en: "Top cable curl variant focusing on full ROM and stretch."
    },
    steps: {
      en: "1. Stand in the middle of a cable cross-over machine, with the pulleys set to a low position. Attach D-handles.<br><br>2. Grasp a handle in each hand with an underhand grip, and step forward slightly.<br><br>3. Keep your elbows tucked in and close to your sides, and initiate the curl by bringing your hands towards your shoulders.<br><br>4. Focus on a deep contraction at the top and a full stretch at the bottom, controlling the weight throughout the entire range of motion.",
      de: "1. Stellen Sie sich in die Mitte einer Kabelzugmaschine, wobei die Rollen auf einer niedrigen Position eingestellt sind. Bringen Sie D-Griffe an.<br><br>2. Fassen Sie einen Griff in jeder Hand mit einem Untergriff und treten Sie leicht nach vorne.<br><br>3. Halten Sie Ihre Ellbogen eng am Körper und beginnen Sie mit dem Curl, indem Sie Ihre Hände in Richtung Ihrer Schultern bringen.<br><br>4. Konzentrieren Sie sich auf eine tiefe Kontraktion am oberen Punkt und eine volle Dehnung am unteren Punkt, wobei Sie das Gewicht über den gesamten Bewegungsumfang kontrollieren."
    }
  },
  {
    id: 148,
    favorit: 0,
    name: "Seated Super Bayesian High Cable Curl",
    muscleGroup: "Biceps",
    category: "Upper body",
    effectiveness: 6,
    difficulty: "Beginner",
    primeMuscle: ["Biceps Brachii (Short Head)", "Biceps Brachii (Long Head)"],
    secondaryMuscle: ["Brachialis"],
    equipment: "Cable",
    url: "https://www.youtube.com/embed/jQ9rkfvAbIc", // Duplicate URL with Bayesian Curl
    description: {
      de: "Top Cable Curl Variante mit Fokus auf voller ROM und Stretch.",
      en: "Top cable curl variant focusing on full ROM and stretch."
    },
    steps: {
      en: "1. Sit on a bench or directly on the floor in front of a high pulley cable machine, with the pulley set to a high position. Attach a D-handle.<br><br>2. Grasp the handle with an underhand grip, and lean back slightly to create tension.<br><br>3. Keep your elbow stable and in line with the cable, and curl the handle towards your head/shoulder, focusing on a strong biceps contraction.<br><br>4. Slowly control the handle back to the starting position, allowing for a full stretch in the biceps.",
      de: "1. Setzen Sie sich auf eine Bank oder direkt auf den Boden vor eine hohe Kabelzugmaschine, wobei die Rolle auf einer hohen Position eingestellt ist. Bringen Sie einen D-Griff an.<br><br>2. Fassen Sie den Griff mit einem Untergriff und lehnen Sie sich leicht zurück, um Spannung zu erzeugen.<br><br>3. Halten Sie Ihren Ellbogen stabil und in einer Linie mit dem Kabel und curlen Sie den Griff in Richtung Ihres Kopfes/Ihrer Schulter, wobei Sie sich auf eine starke Bizepskontraktion konzentrieren.<br><br>4. Führen Sie den Griff langsam und kontrolliert in die Ausgangsposition zurück, um eine vollständige Dehnung im Bizeps zu ermöglichen."
    }
  },
  {
    id: 139,
    favorit: 0,
    name: "Preacher Hammer Curl",
    muscleGroup: "Biceps",
    category: "Upper body",
    effectiveness: 5,
  difficulty: "Novice",
  primeMuscle: ["Brachialis", "Brachioradialis"],
    secondaryMuscle: ["Biceps Brachii (Short Head)"],
    equipment: "Dumbbell",
    url: "https://www.youtube.com/embed/oHbSWPo3swM",
    description: {
      de: "Top Hammer Curl Variante auf der Preacher Bank.",
      en: "Top hammer curl variation using the preacher bench."
    },
    steps: {
      en: "1. Sit at a preacher curl bench, resting your upper arm (one at a time) on the pad.<br><br>2. Hold a dumbbell with a neutral grip (palm facing your body), arm fully extended.<br><br>3. Curl the dumbbell upwards towards your shoulder, maintaining the neutral grip.<br><br>4. Slowly lower the dumbbell back to the starting position, controlling the eccentric phase.<br><br>5. Complete all reps on one arm before switching to the other.",
      de: "1. Setzen Sie sich auf eine Preacher-Curl-Bank und legen Sie Ihren Oberarm (einen nach dem anderen) auf das Polster.<br><br>2. Halten Sie eine Kurzhantel mit neutralem Griff (Handfläche zum Körper zeigend), der Arm vollständig ausgestreckt.<br><br>3. Curlen Sie die Kurzhantel nach oben in Richtung Ihrer Schulter, wobei Sie den neutralen Griff beibehalten.<br><br>4. Senken Sie die Kurzhantel langsam in die Ausgangsposition zurück und kontrollieren Sie die exzentrische Phase.<br><br>5. Absolvieren Sie alle Wiederholungen auf einem Arm, bevor Sie zum anderen wechseln."
    }
  },
  {
    id: 140,
    favorit: 0,
    name: "Standing Dumbbell Curl",
    muscleGroup: "Biceps",
    category: "Upper body",
    effectiveness: 4,
  difficulty: "Novice",
  primeMuscle: ["Biceps Brachii (Long Head)", "Biceps Brachii (Short Head)"],
    secondaryMuscle: ["Brachialis", "Forearms (Flexors)"],
    equipment: "Dumbbell",
    url: "https://www.youtube.com/embed/HnHuhf4hEWY",
    description: {
      de: "Klassischer Bicepscurl im Stehen mit Kurzhanteln.",
      en: "Classic standing dumbbell curl."
    },
    steps: {
      en: "1. Stand upright, holding a dumbbell in each hand with an underhand grip (palms forward).<br><br>2. Keep your elbows tucked close to your sides and your upper arms stationary.<br><br>3. Curl the dumbbells upwards towards your shoulders, contracting your biceps forcefully at the top.<br><br>4. You can alternate arms or curl both simultaneously.<br><br>5. Slowly lower the dumbbells back to the starting position, controlling the eccentric phase.",
      de: "1. Stellen Sie sich aufrecht hin und halten Sie in jeder Hand eine Kurzhantel mit einem Untergriff (Handflächen nach vorne).<br><br>2. Halten Sie Ihre Ellbogen eng am Körper und Ihre Oberarme stationär.<br><br>3. Curlen Sie die Kurzhanteln nach oben in Richtung Ihrer Schultern und spannen Sie Ihren Bizeps am oberen Punkt kräftig an.<br><br>4. Sie können die Arme abwechseln oder beide gleichzeitig curlen.<br><br>5. Senken Sie die Kurzhanteln langsam in die Ausgangsposition zurück und kontrollieren Sie die exzentrische Phase."
    }
  },
  {
    id: 141,
    favorit: 0,
    name: "Barbell Curl",
    muscleGroup: "Biceps",
    category: "Upper body",
    effectiveness: 3,
  difficulty: "Intermediate",
  primeMuscle: ["Biceps Brachii (Long Head)", "Biceps Brachii (Short Head)"],
    secondaryMuscle: ["Brachialis", "Forearms (Flexors)"],
    equipment: "Barbell",
    url: "https://www.youtube.com/embed/JnLFSFurrqQ",
    description: {
      de: "Grundübung für den Biceps mit der Langhantel.",
      en: "Fundamental barbell exercise for biceps."
    },
    steps: {
      en: "1. Stand upright, holding a straight barbell with an underhand grip, hands roughly shoulder-width apart.<br><br>2. Keep your elbows tucked close to your sides and your upper arms stationary.<br><br>3. Curl the barbell upwards towards your shoulders, contracting your biceps forcefully at the top.<br><br>4. Slowly lower the barbell back to the starting position, controlling the eccentric phase, and avoid swinging your body.",
      de: "1. Stellen Sie sich aufrecht hin und halten Sie eine gerade Langhantel mit einem Untergriff, die Hände etwa schulterbreit auseinander.<br><br>2. Halten Sie Ihre Ellbogen eng am Körper und Ihre Oberarme stationär.<br><br>3. Curlen Sie die Langhantel nach oben in Richtung Ihrer Schultern und spannen Sie Ihren Bizeps am oberen Punkt kräftig an.<br><br>4. Senken Sie die Langhantel langsam in die Ausgangsposition zurück, kontrollieren Sie die exzentrische Phase und vermeiden Sie das Schwingen des Körpers."
    }
  },
//{ id: 40, favorit: 0, name: "Concentration Curls", muscleGroup: "Biceps", category: "Upper body", effectiveness: 2,
//  primeMuscle: ["Biceps Brachii (Short Head)"],
//  secondaryMuscle: [],
//  equipment: "Dumbbell",
//  description: {
//    de: "Hochkonzentrierte Isolationsübung, aber andere oft besser.",
//    en: "Highly focused isolation exercise, but often outclassed by others."
//  }
//},
//{ id: 107, favorit: 0, name: "Barbell Reverse Curls", muscleGroup: "Biceps", category: "Upper body", effectiveness: 3,
//  primeMuscle: ["Brachioradialis", "Brachialis"],
//  secondaryMuscle: ["Extensors (Forearm)"],
//  equipment: "Barbell",
//  description: {
//    de: "Stärkt Unterarme (Oberseite) und Brachialis.",
//    en: "Strengthens forearms (top side) and brachialis."
//  }
//},

  // Triceps Exercises (Triceps)

  {
    id: 10,
    favorit: 0,
    name: "Dips (Triceps Focused)",
    muscleGroup: "Triceps",
    category: "Upper body",
    effectiveness: 3,
  difficulty: "Intermediate",
  primeMuscle: ["Triceps (Long Head)", "Triceps (Lateral Head)", "Triceps (Medial Head)"],
    secondaryMuscle: ["Deltoid (Anterior)", "Pectoralis Major (Inferior Fibers)", "Core"],
    equipment: "None",
    url: "https://www.youtube.com/embed/KoS_NMmuxMM",
    description: {
      de: "Gute Eigengewichtsübung für Triceps.",
      en: "Good bodyweight exercise for triceps."
    },
    steps: {
      en: "1. Grasp parallel bars with a neutral grip, keeping your arms straight and locking out your elbows.<br><br>2. Lean slightly forward to emphasize the triceps, and slowly lower your body by bending your elbows.<br><br>3. Go down until your shoulders are below your elbows, feeling a stretch in your triceps.<br><br>4. Push back up to the starting position by extending your arms, squeezing your triceps at the top.",
      de: "1. Fassen Sie die Parallelbarren mit einem neutralen Griff, halten Sie Ihre Arme gerade und strecken Sie Ihre Ellbogen.<br><br>2. Lehnen Sie sich leicht nach vorne, um den Trizeps zu betonen, und senken Sie Ihren Körper langsam ab, indem Sie Ihre Ellbogen beugen.<br><br>3. Gehen Sie so weit nach unten, bis Ihre Schultern unter Ihren Ellbogen sind, und spüren Sie eine Dehnung im Trizeps.<br><br>4. Drücken Sie sich durch Strecken der Arme in die Ausgangsposition zurück und spannen Sie den Trizeps am oberen Punkt an."
    }
  },
  {
    id: 41,
    favorit: 0,
    name: "Cable Triceps Pushdown (Bar)",
    muscleGroup: "Triceps",
    category: "Upper body",
    effectiveness: 4,
  difficulty: "Novice",
  primeMuscle: ["Triceps (Lateral Head)", "Triceps (Medial Head)"],
    secondaryMuscle: [],
    equipment: "Cable",
    url: "https://www.youtube.com/embed/6Fzep104f0s",
    description: {
      de: "Solide Isolationsübung für den Triceps.",
      en: "Solid isolation exercise for triceps."
    },
    steps: {
      en: "1. Stand facing a high pulley machine, grasp a straight bar or V-bar with an overhand grip, hands shoulder-width apart.<br><br>2. Tuck your elbows close to your sides and keep them stationary throughout the movement.<br><br>3. Push the bar down by extending your forearms, contracting your triceps forcefully at the bottom.<br><br>4. Slowly allow the bar to return to the starting position, controlling the weight.",
      de: "1. Stellen Sie sich vor eine hohe Kabelzugmaschine, fassen Sie eine gerade Stange oder V-Stange mit einem Obergriff, die Hände schulterbreit auseinander.<br><br>2. Halten Sie Ihre Ellbogen eng am Körper und lassen Sie sie während der gesamten Bewegung stationär.<br><br>3. Drücken Sie die Stange nach unten, indem Sie Ihre Unterarme strecken und Ihren Trizeps am unteren Punkt kräftig anspannen.<br><br>4. Lassen Sie die Stange langsam und kontrolliert in die Ausgangsposition zurückkehren."
    }
  },
  {
    id: 43,
    favorit: 0,
    name: "Dumbbell Triceps Kickbacks",
    muscleGroup: "Triceps",
    category: "Upper body",
    effectiveness: 1,
  difficulty: "Beginner",
  primeMuscle: ["Triceps (Lateral Head)"],
    secondaryMuscle: [],
    equipment: "Dumbbell",
    url: "https://www.youtube.com/embed/m_UlDFNX4mk",
    description: {
      de: "Wenig effektiv, schwer korrekt auszuführen.",
      en: "Not very effective, difficult to perform correctly."
    },
    steps: {
      en: "1. Hold a dumbbell in one hand and place the opposite knee and hand on a flat bench for support.<br><br>2. Keep your upper arm parallel to the floor, with your elbow bent at a 90-degree angle.<br><br>3. Extend your forearm backward, straightening your arm and squeezing your triceps at the top.<br><br>4. Slowly lower the dumbbell back to the starting position.<br><br>5. Complete all reps on one arm before switching.",
      de: "1. Halten Sie eine Kurzhantel in einer Hand und legen Sie das gegenüberliegende Knie und die Hand zur Unterstützung auf eine flache Bank.<br><br>2. Halten Sie Ihren Oberarm parallel zum Boden, wobei Ihr Ellbogen in einem 90-Grad-Winkel gebeugt ist.<br><br>3. Strecken Sie Ihren Unterarm nach hinten aus, strecken Sie Ihren Arm und spannen Sie den Trizeps am oberen Punkt an.<br><br>4. Senken Sie die Kurzhantel langsam in die Ausgangsposition zurück.<br><br>5. Absolvieren Sie alle Wiederholungen auf einem Arm, bevor Sie wechseln."
    }
  },
  {
    id: 45,
    favorit: 0,
    name: "Overhead Triceps Extension (Dumbbell)",
    muscleGroup: "Triceps",
    category: "Upper body",
    effectiveness: 5,
  difficulty: "Beginner",
  primeMuscle: ["Triceps (Long Head)", "Triceps (Medial Head)"],
    secondaryMuscle: [],
    equipment: "Dumbbell",
    url: "https://www.youtube.com/embed/7h3lG2WnLXg",
    description: {
      de: "Gute Isolationsübung mit Stretch für den langen Kopf.",
      en: "Great isolation exercise with a stretch for the long head."
    },
    steps: {
      en: "1. Sit on a bench or stand, holding one dumbbell with both hands, gripping one end.<br><br>2. Extend the dumbbell directly overhead, keeping your arms close to your ears and elbows pointing forward.<br><br>3. Slowly lower the dumbbell behind your head by bending your elbows, feeling a stretch in your triceps.<br><br>4. Extend your arms back to the starting position, squeezing your triceps at the top.",
      de: "1. Setzen Sie sich auf eine Bank oder stellen Sie sich hin und halten Sie eine Kurzhantel mit beiden Händen an einem Ende.<br><br>2. Strecken Sie die Kurzhantel direkt über Ihren Kopf, halten Sie Ihre Arme nah an Ihren Ohren und die Ellbogen nach vorne gerichtet.<br><br>3. Senken Sie die Kurzhantel langsam hinter Ihren Kopf, indem Sie Ihre Ellbogen beugen und eine Dehnung im Trizeps spüren.<br><br>4. Strecken Sie Ihre Arme zurück in die Ausgangsposition und spannen Sie den Trizeps am oberen Punkt an."
    }
  },
  {
    id: 89,
    favorit: 0,
    name: "Overhead Cable Triceps Extension (Bar)",
    muscleGroup: "Triceps",
    category: "Upper body",
    effectiveness: 6,
    difficulty: "Intermediate",
    primeMuscle: ["Triceps (Long Head)", "Triceps (Medial Head)"],
    secondaryMuscle: [],
    equipment: "Cable",
    url: "https://www.youtube.com/embed/9_I1PqZAjdA",
    description: {
      de: "Top Übung für Triceps, exzellenter Stretch und konstante Spannung.",
      en: "Top exercise for triceps, excellent stretch and constant tension."
    },
    steps: {
      en: "1. Stand facing away from a high pulley cable machine, attaching a straight bar or rope attachment.<br><br>2. Grasp the attachment with an overhand grip (or neutral for rope), and extend your arms overhead.<br><br>3. Keeping your elbows fixed and pointed forward, slowly lower the attachment behind your head by bending your elbows.<br><br>4. Extend your arms back to the starting position, feeling a strong contraction in your triceps.",
      de: "1. Stellen Sie sich mit dem Rücken zu einer hohen Kabelzugmaschine und befestigen Sie eine gerade Stange oder ein Seil.<br><br>2. Fassen Sie den Aufsatz mit einem Obergriff (oder neutral für das Seil) und strecken Sie Ihre Arme über den Kopf.<br><br>3. Halten Sie Ihre Ellbogen fixiert und nach vorne gerichtet, senken Sie den Aufsatz langsam hinter Ihren Kopf, indem Sie Ihre Ellbogen beugen.<br><br>4. Strecken Sie Ihre Arme zurück in die Ausgangsposition und spüren Sie eine starke Kontraktion in Ihrem Trizeps."
    }
  },
  {
    id: 166,
    favorit: 0,
    name: "Overhead Triceps Extension (Machine)",
    muscleGroup: "Triceps",
    category: "Upper body",
    effectiveness: 5,
  difficulty: "Novice",
  primeMuscle: ["Triceps (Long Head)", "Triceps (Medial Head)"],
    secondaryMuscle: [],
    equipment: "Machine",
    url: "https://www.youtube.com/embed/Su2-48BDfuc",
    description: {
      de: "Top Übung für Triceps, exzellenter Stretch und konstante Spannung.",
      en: "Top exercise for triceps, excellent stretch and constant tension."
    },
    steps: {
      en: "1. Sit in the overhead triceps extension machine, adjusting the seat and pads as needed.<br><br>2. Grasp the handles, ensuring your elbows are aligned with the machine's pivot point.<br><br>3. Extend your arms fully overhead, pushing the handles up.<br><br>4. Slowly lower the handles by bending your elbows, feeling a stretch in your triceps.<br><br>5. Extend your arms back to the starting position, contracting your triceps.",
      de: "1. Setzen Sie sich in die Überkopf-Trizepsstreckmaschine und passen Sie Sitz und Polster nach Bedarf an.<br><br>2. Fassen Sie die Griffe und stellen Sie sicher, dass Ihre Ellbogen mit dem Drehpunkt der Maschine ausgerichtet sind.<br><br>3. Strecken Sie Ihre Arme vollständig über den Kopf, drücken Sie die Griffe nach oben.<br><br>4. Senken Sie die Griffe langsam ab, indem Sie Ihre Ellbogen beugen und eine Dehnung im Trizeps spüren.<br><br>5. Strecken Sie Ihre Arme zurück in die Ausgangsposition und spannen Sie den Trizeps an."
    }
  },
  {
    id: 90,
    favorit: 0,
    name: "Barbell Skullcrusher (Lying Triceps Extension)",
    muscleGroup: "Triceps",
    category: "Upper body",
    effectiveness: 5,
  difficulty: "Intermediate",
  primeMuscle: ["Triceps (Long Head)", "Triceps (Medial Head)"],
    secondaryMuscle: [],
    equipment: "Barbell",
    url: "https://www.youtube.com/embed/l3rHYPtMUo8",
    description: {
      de: "Sehr effektive Übung für den langen und medialen Kopf.",
      en: "Very effective exercise for the long and medial heads."
    },
    steps: {
      en: "1. Lie on a flat bench, holding an EZ curl bar (or straight bar) with an overhand grip, arms extended straight up over your chest.<br><br>2. Keep your upper arms stationary and perpendicular to the floor.<br><br>3. Slowly lower the bar by bending your elbows, bringing the bar towards your forehead (or slightly behind it).<br><br>4. Extend your arms back to the starting position, squeezing your triceps at the top.<br><br>5. Control the movement throughout to avoid hitting your head.",
      de: "1. Legen Sie sich auf eine flache Bank und halten Sie eine EZ-Curl-Stange (oder eine gerade Stange) mit einem Obergriff, die Arme gerade über Ihrer Brust ausgestreckt.<br><br>2. Halten Sie Ihre Oberarme stationär und senkrecht zum Boden.<br><br>3. Senken Sie die Stange langsam ab, indem Sie Ihre Ellbogen beugen und die Stange in Richtung Ihrer Stirn (oder leicht dahinter) bringen.<br><br>4. Strecken Sie Ihre Arme zurück in die Ausgangsposition und spannen Sie den Trizeps am oberen Punkt an.<br><br>5. Kontrollieren Sie die Bewegung während des gesamten Vorgangs, um nicht den Kopf zu treffen."
    }
  },
  {
    id: 198,
    favorit: 0,
    name: "Dumbbell Skullcrusher (Lying Triceps Extension)",
    muscleGroup: "Triceps",
    category: "Upper body",
    effectiveness: 5,
  difficulty: "Beginner",
  primeMuscle: ["Triceps (Long Head)", "Triceps (Medial Head)"],
    secondaryMuscle: [],
    equipment: "Dumbbell",
    url: "https://www.youtube.com/embed/fbLTzgTKOR8",
    description: {
      de: "Sehr effektive Übung für den langen und medialen Kopf.",
      en: "Very effective exercise for the long and medial heads."
    },
    steps: {
      en: "1. Lie on a flat bench, holding a dumbbell in each hand with a neutral grip (palms facing each other), arms extended straight up over your chest.<br><br>2. Keep your upper arms stationary and perpendicular to the floor.<br><br>3. Slowly lower the dumbbells by bending your elbows, bringing them towards the sides of your head.<br><br>4. Extend your arms back to the starting position, squeezing your triceps at the top.<br><br>5. Control the movement throughout.",
      de: "1. Legen Sie sich auf eine flache Bank und halten Sie in jeder Hand eine Kurzhantel mit neutralem Griff (Handflächen zeigen zueinander), die Arme gerade über Ihrer Brust ausgestreckt.<br><br>2. Halten Sie Ihre Oberarme stationär und senkrecht zum Boden.<br><br>3. Senken Sie die Kurzhanteln langsam ab, indem Sie Ihre Ellbogen beugen und sie zu den Seiten Ihres Kopfes bringen.<br><br>4. Strecken Sie Ihre Arme zurück in die Ausgangsposition und spannen Sie den Trizeps am oberen Punkt an.<br><br>5. Kontrollieren Sie die Bewegung während des gesamten Vorgangs."
    }
  },
  {
    id: 91,
    favorit: 0,
    name: "Cable Triceps Kickback",
    muscleGroup: "Triceps",
    category: "Upper body",
    effectiveness: 4,
  difficulty: "Beginner",
  primeMuscle: ["Triceps (Lateral Head)", "Triceps (Medial Head)"],
    secondaryMuscle: [],
    equipment: "Cable",
    url: "https://www.youtube.com/embed/DYsQWSbj7UM",
    description: {
      de: "Gute Isolationsübung mit konstanter Spannung für Peak Contraction.",
      en: "Good isolation exercise with constant tension for peak contraction."
    },
    steps: {
      en: "1. Stand facing a low pulley cable machine, grasping a single handle with one hand.<br><br>2. Lean slightly forward at the hips, keeping your back straight and your elbow tucked close to your side, bent at 90 degrees.<br><br>3. Extend your forearm backward, straightening your arm and contracting your triceps forcefully.<br><br>4. Slowly return the handle to the starting position, controlling the eccentric phase.<br><br>5. Complete all reps on one arm before switching.",
      de: "1. Stellen Sie sich vor eine niedrige Kabelzugmaschine und fassen Sie einen einzelnen Griff mit einer Hand.<br><br>2. Lehnen Sie sich leicht in den Hüften nach vorne, halten Sie Ihren Rücken gerade und Ihren Ellbogen eng am Körper, im 90-Grad-Winkel gebeugt.<br><br>3. Strecken Sie Ihren Unterarm nach hinten aus, strecken Sie Ihren Arm und spannen Sie den Trizeps kräftig an.<br><br>4. Führen Sie den Griff langsam in die Ausgangsposition zurück und kontrollieren Sie die exzentrische Phase.<br><br>5. Absolvieren Sie alle Wiederholungen auf einem Arm, bevor Sie wechseln."
    }
  },
  {
    id: 108,
    favorit: 0,
    name: "Cable Rope Pushdown",
    muscleGroup: "Triceps",
    category: "Upper body",
    effectiveness: 3,
  difficulty: "Novice",
  primeMuscle: ["Triceps (Lateral Head)", "Triceps (Medial Head)"],
    secondaryMuscle: [],
    equipment: "Cable",
    url: "https://www.youtube.com/embed/-xa-6cQaZKY",
    description: {
      de: "Solide Tricepsübung, aber Bar oft besser bewertet.",
      en: "Solid triceps exercise, but bar is often rated better."
    },
    steps: {
      en: "1. Stand facing a high pulley machine, grasp a rope attachment with a neutral grip.<br><br>2. Tuck your elbows close to your sides and keep them stationary throughout the movement.<br><br>3. Push the rope down, extending your forearms and separating the ends of the rope at the bottom to get a full contraction.<br><br>4. Slowly allow the rope to return to the starting position, controlling the weight.",
      de: "1. Stellen Sie sich vor eine hohe Kabelzugmaschine und fassen Sie ein Seil mit neutralem Griff.<br><br>2. Halten Sie Ihre Ellbogen eng am Körper und lassen Sie sie während der gesamten Bewegung stationär.<br><br>3. Drücken Sie das Seil nach unten, strecken Sie Ihre Unterarme und trennen Sie die Enden des Seils am unteren Punkt, um eine vollständige Kontraktion zu erzielen.<br><br>4. Lassen Sie das Seil langsam und kontrolliert in die Ausgangsposition zurückkehren."
    }
  },
  {
    id: 134,
    favorit: 0,
    name: "Dumbbell Skullcrusher",
    muscleGroup: "Triceps",
    category: "Upper body",
    effectiveness: 4,
  difficulty: "Beginner",
  primeMuscle: ["Triceps (Long Head)", "Triceps (Medial Head)"],
    secondaryMuscle: [],
    equipment: "Dumbbell",
    url: "https://www.youtube.com/embed/jPjhQ2hsAds",
    description: {
      de: "Skullcrusher-Variante mit Kurzhanteln für Handgelenkkomfort.",
      en: "Skullcrusher variation with dumbbells for wrist comfort."
    },
    steps: {
      en: "1. Lie on a flat bench, holding a dumbbell in each hand with a neutral grip (palms facing each other), arms extended straight up over your chest.<br><br>2. Keep your upper arms stationary and perpendicular to the floor.<br><br>3. Slowly lower the dumbbells by bending your elbows, bringing them towards the sides of your head.<br><br>4. Extend your arms back to the starting position, squeezing your triceps at the top.<br><br>5. Control the movement throughout.",
      de: "1. Legen Sie sich auf eine flache Bank und halten Sie in jeder Hand eine Kurzhantel mit neutralem Griff (Handflächen zeigen zueinander), die Arme gerade über Ihrer Brust ausgestreckt.<br><br>2. Halten Sie Ihre Oberarme stationär und senkrecht zum Boden.<br><br>3. Senken Sie die Kurzhanteln langsam ab, indem Sie Ihre Ellbogen beugen und sie zu den Seiten Ihres Kopfes bringen.<br><br>4. Strecken Sie Ihre Arme zurück in die Ausgangsposition und spannen Sie den Trizeps am oberen Punkt an.<br><br>5. Kontrollieren Sie die Bewegung während des gesamten Vorgangs."
    }
  },
  {
    id: 135,
    favorit: 0,
    name: "Machine Dips",
    muscleGroup: "Triceps",
    category: "Upper body",
    effectiveness: 3,
  difficulty: "Novice",
  primeMuscle: ["Triceps (Long Head)", "Triceps (Lateral Head)", "Triceps (Medial Head)"],
    secondaryMuscle: ["Deltoid (Anterior)", "Pectoralis Major (Sternal)"],
    equipment: "Machine",
    url: "https://www.youtube.com/embed/ajWW13UWsmo",
    description: {
      de: "Dip-Variante an der Maschine.",
      en: "Dip variation on the machine."
    },
    steps: {
      en: "1. Sit in the dip machine, grasping the handles with a neutral grip.<br><br>2. Adjust the seat or weight to ensure proper leverage.<br><br>3. Press down on the handles, extending your arms and pushing your body downwards, focusing on your triceps.<br><br>4. Control the movement as you allow the handles to return upwards, bending your elbows and stretching your triceps.<br><br>5. Stop before your shoulders round forward excessively.",
      de: "1. Setzen Sie sich in die Dip-Maschine und fassen Sie die Griffe mit neutralem Griff.<br><br>2. Passen Sie den Sitz oder das Gewicht an, um eine korrekte Hebelwirkung zu gewährleisten.<br><br>3. Drücken Sie die Griffe nach unten, strecken Sie Ihre Arme und drücken Sie Ihren Körper nach unten, wobei Sie sich auf Ihren Trizeps konzentrieren.<br><br>4. Kontrollieren Sie die Bewegung, während Sie die Griffe nach oben zurückkehren lassen, indem Sie Ihre Ellbogen beugen und Ihren Trizeps dehnen.<br><br>5. Halten Sie an, bevor Ihre Schultern übermäßig nach vorne rollen."
    }
  },
  {
    id: 44,
    favorit: 0,
    name: "Close-Grip Bench Press",
    muscleGroup: "Triceps",
    category: "Upper body",
    effectiveness: 4,
  difficulty: "Intermediate",
  primeMuscle: ["Triceps (Long Head)", "Triceps (Lateral Head)", "Triceps (Medial Head)"],
    secondaryMuscle: ["Pectoralis Major (Inner)", "Deltoid (Anterior)"],
    equipment: "Barbell",
    url: "https://www.youtube.com/embed/FiQUzPtS90E",
    description: {
      de: "Gute Compound-Übung mit hoher Belastung für Triceps.",
      en: "Great compound exercise with high load for triceps."
    },
    steps: {
      en: "1. Lie on a flat bench, grasping a barbell with an overhand grip, hands closer than shoulder-width apart (typically shoulder-width or slightly narrower).<br><br>2. Unrack the bar and hold it directly over your chest with arms extended.<br><br>3. Slowly lower the bar towards your lower chest/upper abdomen, keeping your elbows tucked close to your body.<br><br>4. Push the bar back up to the starting position by extending your arms, focusing on contracting your triceps.",
      de: "1. Legen Sie sich auf eine flache Bank und fassen Sie eine Langhantel mit einem Obergriff, die Hände enger als schulterbreit auseinander (typischerweise schulterbreit oder etwas enger).<br><br>2. Heben Sie die Stange aus der Ablage und halten Sie sie direkt über Ihrer Brust mit ausgestreckten Armen.<br><br>3. Senken Sie die Stange langsam in Richtung Ihres unteren Brustkorbs/oberen Bauches, halten Sie Ihre Ellbogen eng am Körper.<br><br>4. Drücken Sie die Stange durch Strecken der Arme zurück in die Ausgangsposition und konzentrieren Sie sich dabei auf die Kontraktion Ihres Trizeps."
    }
  },
  {
    id: 136,
    favorit: 0,
    name: "Diamond Pushups",
    muscleGroup: "Triceps",
    category: "Upper body",
    effectiveness: 3,
  difficulty: "Beginner",
  primeMuscle: ["Triceps (Long Head)", "Triceps (Lateral Head)", "Triceps (Medial Head)"],
    secondaryMuscle: ["Pectoralis Major (Sternal)", "Deltoid (Anterior)"],
    equipment: "None",
    url: "https://www.youtube.com/embed/XtU2VQVuLYs",
    description: {
      de: "Liegestütz-Variante mit engem Handstand für Tricepsfokus.",
      en: "Push-up variation with close grip for triceps focus."
    },
    steps: {
      en: "1. Start in a push-up position, but bring your hands close together directly under your chest, forming a diamond shape with your thumbs and index fingers.<br><br>2. Keep your body in a straight line from head to heels, engaging your core.<br><br>3. Lower your chest towards your hands by bending your elbows, keeping them tucked close to your body.<br><br>4. Push back up to the starting position by extending your arms, focusing on the triceps contraction.",
      de: "1. Beginnen Sie in einer Liegestützposition, aber bringen Sie Ihre Hände dicht zusammen direkt unter Ihre Brust, so dass Daumen und Zeigefinger eine Diamantform bilden.<br><br>2. Halten Sie Ihren Körper in einer geraden Linie vom Kopf bis zu den Fersen und spannen Sie Ihren Rumpf an.<br><br>3. Senken Sie Ihre Brust zu Ihren Händen, indem Sie Ihre Ellbogen beugen und sie eng am Körper halten.<br><br>4. Drücken Sie sich durch Strecken der Arme in die Ausgangsposition zurück und konzentrieren Sie sich dabei auf die Trizeps-Kontraktion."
    }
  },
//{ id: 42, favorit: 0, name: "French Press (Lying Dumbbell Extension)", muscleGroup: "Triceps", category: "Upper body", effectiveness: 3,
//  primeMuscle: ["Triceps (Long Head)", "Triceps (Medial Head)"],
//  secondaryMuscle: [],
//  equipment: "Dumbbell",
//  description: {
//    de: "Effektive Übung für den langen Tricepskopf im Liegen.",
//    en: "Effective exercise for the long head of the triceps while lying down."
//  }
//},
//{ id: 109, favorit: 0, name: "Bench Dips", muscleGroup: "Triceps", category: "Upper body", effectiveness: 2,
//  primeMuscle: ["Triceps (Long Head)", "Triceps (Lateral Head)", "Triceps (Medial Head)"],
//  secondaryMuscle: ["Deltoid (Anterior)"],
//  equipment: "None",
//  description: {
//    de: "Kann Schultern belasten, weniger optimal.",
//    en: "Can strain shoulders, less optimal."
//  }
//},
//{ id: 133, favorit: 0, name: "Overhead Cable Triceps Extension (Rope)", muscleGroup: "Triceps", category: "Upper body", effectiveness: 4,
//  primeMuscle: ["Triceps (Long Head)", "Triceps (Lateral Head)"],
//  secondaryMuscle: [],
//  equipment: "Cable",
//  description: {
//    de: "Überkopf-Tricepsdrücken am Kabel mit Seil für Stretch des langen Kopfes.",
//    en: "Overhead triceps pushdown with rope for stretch of the long head."
//  }
//},
//{ id: 137, favorit: 0, name: "Close-Grip Pushups", muscleGroup: "Triceps", category: "Upper body", effectiveness: 2,
//  primeMuscle: ["Triceps (Long Head)", "Triceps (Lateral Head)", "Triceps (Medial Head)"],
//  secondaryMuscle: ["Pectoralis Major (Sternal)", "Deltoid"],
//  equipment: "None",
//  description: {
//    de: "Liegestütz-Variante mit schulterbreitem oder engerem Griff.",
//    en: "Push-up variation with shoulder-width or closer grip."
//  }
//},

  //Ab Exercises (Bauchmuskeln) - Keeping previous structure/effectiveness

  {
    id: 11,
    favorit: 0,
    name: "Cable Crunch",
    muscleGroup: "Abs",
    category: "Core",
    effectiveness: 5,
  difficulty: "Beginner",
  primeMuscle: ["Rectus Abdominis"],
    secondaryMuscle: [],
    equipment: "Cable",
    url: "https://www.youtube.com/embed/epBrpaGHMcg",
    description: {
      de: "Effektive Übung für die geraden Bauchmuskeln.",
      en: "Effective exercise for the rectus abdominis."
    },
    steps: {
      en: "1. Kneel facing a high pulley machine, grasp a rope attachment, and hold it with both hands behind your head or at your chest.<br><br>2. Keep your hips stationary and crunch your torso down towards your knees, focusing on contracting your abs.<br><br>3. Exhale as you crunch down, and slowly return to the starting position, controlling the movement.<br><br>4. Feel the stretch in your abs at the top before repeating.",
      de: "1. Knien Sie vor einem hohen Kabelzug, fassen Sie einen Seilaufsatz und halten Sie ihn mit beiden Händen hinter dem Kopf oder an der Brust.<br><br>2. Halten Sie Ihre Hüften stationär und beugen Sie Ihren Oberkörper zu den Knien, wobei Sie sich auf die Kontraktion Ihrer Bauchmuskeln konzentrieren.<br><br>3. Atmen Sie beim Beugen aus und kehren Sie langsam und kontrolliert in die Ausgangsposition zurück.<br><br>4. Spüren Sie die Dehnung in Ihren Bauchmuskeln am oberen Punkt, bevor Sie wiederholen."
    }
  },
  {
    id: 12,
    favorit: 0,
    name: "Hanging Leg Raises / Knee Raises",
    muscleGroup: "Abs",
    category: "Core",
    effectiveness: 5,
  difficulty: "Beginner",
  primeMuscle: ["Rectus Abdominis"],
    secondaryMuscle: ["Iliopsoas", "External Obliques"],
    equipment: "None", 
    url: "https://www.youtube.com/embed/irOzFVqJ0IE",
    description: {
      de: "Anspruchsvolle Übung für untere Bauchmuskeln.",
      en: "Challenging exercise for the lower abdominals."
    },
    steps: {
      en: "1. Hang from a pull-up bar with an overhand grip, or position yourself in a captain's chair.<br><br>2. Keep your legs straight (for leg raises) or bent (for knee raises).<br><br>3. Slowly raise your legs/knees towards your chest, focusing on engaging your lower abs to lift your pelvis.<br><br>4. Avoid swinging your body; perform the movement in a controlled manner.<br><br>5. Slowly lower your legs back to the starting position.",
      de: "1. Hängen Sie an einer Klimmzugstange mit einem Obergriff oder positionieren Sie sich in einem Captain's Chair.<br><br>2. Halten Sie Ihre Beine gestreckt (für Beinheben) oder gebeugt (für Knieheben).<br><br>3. Heben Sie Ihre Beine/Knie langsam in Richtung Brust, wobei Sie sich darauf konzentrieren, Ihre unteren Bauchmuskeln zu aktivieren, um Ihr Becken anzuheben.<br><br>4. Vermeiden Sie das Schwingen des Körpers; führen Sie die Bewegung kontrolliert aus.<br><br>5. Senken Sie Ihre Beine langsam in die Ausgangsposition zurück."
    }
  },
  {
    id: 46,
    favorit: 0,
    name: "Plank",
    muscleGroup: "Abs",
    category: "Core",
    effectiveness: 4,
  difficulty: "Novice",
  primeMuscle: ["Rectus Abdominis", "Transverse Abdominis"],
    secondaryMuscle: ["Erector Spinae", "Rotator Cuff", "Gluteus Maximus"],
    equipment: "None",
    url: "https://www.youtube.com/embed/Ui9iNt6VrtE",
    description: {
      de: "Isometrische Kernübung für Rumpfstabilität.",
      en: "Isometric core exercise for trunk stability."
    },
    steps: {
      en: "1. Start in a push-up position, then lower down onto your forearms, keeping your body in a straight line from head to heels.<br><br>2. Engage your core, squeezing your abs and glutes, ensuring your hips don't sag or rise too high.<br><br>3. Keep your neck in a neutral position, looking down at the floor.<br><br>4. Hold this position for the desired duration, maintaining tension throughout your body.",
      de: "1. Beginnen Sie in einer Liegestützposition und senken Sie sich dann auf Ihre Unterarme ab, wobei Ihr Körper eine gerade Linie vom Kopf bis zu den Fersen bildet.<br><br>2. Spannen Sie Ihren Rumpf an, pressen Sie Ihre Bauchmuskeln und Ihr Gesäß zusammen und achten Sie darauf, dass Ihre Hüften weder durchhängen noch zu hoch steigen.<br><br>3. Halten Sie Ihren Nacken in einer neutralen Position und blicken Sie auf den Boden.<br><br>4. Halten Sie diese Position für die gewünschte Dauer, wobei Sie die Spannung im ganzen Körper aufrechterhalten."
    }
  },
  {
    id: 48,
    favorit: 0,
    name: "Ab-Wheel Rollout",
    muscleGroup: "Abs",
    category: "Core",
    effectiveness: 5,
  difficulty: "Intermediate",
  primeMuscle: ["Rectus Abdominis", "Transverse Abdominis"],
    secondaryMuscle: ["Latissimus Dorsi", "Serratus Anterior", "External Obliques", "Rotator Cuff"],
    equipment: "None", // Refers to the ab wheel itself
    url: "https://www.youtube.com/embed/PK4n7qJpOhM",
    description: {
      de: "Anspruchsvolle Anti-Extensions-Übung.",
      en: "Challenging anti-extension exercise."
    },
    steps: {
      en: "1. Kneel on the floor with an ab wheel in front of you.<br><br>2. Grasp the handles of the ab wheel with both hands, keeping your arms straight.<br><br>3. Slowly roll the wheel forward, extending your body as far as you can without letting your lower back sag.<br><br>4. Keep your core tight and engage your abs to pull the wheel back to the starting position.<br><br>5. Maintain control throughout the entire movement.",
      de: "1. Knien Sie auf dem Boden mit einem Bauchrad vor sich.<br><br>2. Fassen Sie die Griffe des Bauchrads mit beiden Händen und halten Sie Ihre Arme gestreckt.<br><br>3. Rollen Sie das Rad langsam nach vorne, strecken Sie Ihren Körper so weit aus, wie Sie können, ohne dass Ihr unterer Rücken durchhängt.<br><br>4. Halten Sie Ihren Rumpf angespannt und aktivieren Sie Ihre Bauchmuskeln, um das Rad in die Ausgangsposition zurückzuziehen.<br><br>5. Behalten Sie während der gesamten Bewegung die Kontrolle."
    }
  },
  {
    id: 153,
    favorit: 0,
    name: "Decline Crunches (Weighted)",
    muscleGroup: "Abs",
    category: "Core",
    effectiveness: 4,
  difficulty: "Intermediate",
  primeMuscle: ["Rectus Abdominis"],
    secondaryMuscle: ["Iliopsoas"],
    equipment: "None", 
    url: "https://www.youtube.com/embed/ZheUsKqU81M",
    description: {
      de: "Effektive Übung für obere Bauchmuskeln.",
      en: "Effective exercise for the upper abdominals."
    },
    steps: {
      en: "1. Lie on a decline bench, hooking your feet under the foot pads.<br><br>2. Place your hands lightly behind your head or across your chest.<br><br>3. (Optional for weighted) Hold a weight plate against your chest.<br><br>4. Exhale and curl your torso upwards, bringing your shoulders towards your hips, focusing on contracting your upper abs.<br><br>5. Slowly lower back down with control, feeling the stretch in your abs.",
      de: "1. Legen Sie sich auf eine Schrägbank und haken Sie Ihre Füße unter die Fußpolster.<br><br>2. Legen Sie Ihre Hände leicht hinter Ihren Kopf oder über Ihre Brust.<br><br>3. (Optional für gewichtete) Halten Sie eine Hantelscheibe an Ihre Brust.<br><br>4. Atmen Sie aus und beugen Sie Ihren Oberkörper nach oben, bringen Sie Ihre Schultern in Richtung Hüfte, wobei Sie sich auf die Kontraktion Ihrer oberen Bauchmuskeln konzentrieren.<br><br>5. Senken Sie sich langsam und kontrolliert wieder ab und spüren Sie die Dehnung in Ihren Bauchmuskeln."
    }
  },
  {
    id: 156,
    favorit: 0,
    name: "Machine Crunch",
    muscleGroup: "Abs",
    category: "Core",
    effectiveness: 4,
  difficulty: "Novice",
  primeMuscle: ["Rectus Abdominis"],
    secondaryMuscle: ["Iliopsoas"],
    equipment: "None", // This should be 'Machine' as it's a machine crunch
    url: "https://www.youtube.com/embed/K2yKEoazT3g",
    description: {
      de: "Effektive Übung für obere Bauchmuskeln.",
      en: "Effective exercise for the upper abdominals."
    },
    steps: {
      en: "1. Sit in an abdominal crunch machine, adjusting the pads so they rest comfortably on your upper chest/shoulders.<br><br>2. Grasp the handles.<br><br>3. Exhale and crunch your torso forward, contracting your abs to bring your chest towards your hips.<br><br>4. Focus on a strong abdominal contraction.<br><br>5. Slowly return to the starting position, controlling the weight.",
      de: "1. Setzen Sie sich in eine Bauchmuskelmaschine und stellen Sie die Polster so ein, dass sie bequem auf Ihrem oberen Brustbereich/Schultern liegen.<br><br>2. Fassen Sie die Griffe.<br><br>3. Atmen Sie aus und beugen Sie Ihren Oberkörper nach vorne, wobei Sie Ihre Bauchmuskeln anspannen, um Ihre Brust in Richtung Hüfte zu bringen.<br><br>4. Konzentrieren Sie sich auf eine starke Bauchkontraktion.<br><br>5. Kehren Sie langsam in die Ausgangsposition zurück und kontrollieren Sie das Gewicht."
    }
  },
  {
    id: 49,
    favorit: 0,
    name: "Decline Sit-ups / Crunches",
    muscleGroup: "Abs",
    category: "Core",
    effectiveness: 4,
  difficulty: "Intermediate",
  primeMuscle: ["Rectus Abdominis"],
    secondaryMuscle: ["Iliopsoas"],
    equipment: "Machine", // Refers to a decline bench
    url: "https://www.youtube.com/embed/K2yKEoazT3g", // Duplicate URL with Machine Crunch, consider if this is intended
    description: {
      de: "Effektive Übung für obere Bauchmuskeln.",
      en: "Effective exercise for the upper abdominals."
    },
    steps: {
      en: "1. Lie on a decline bench, hooking your feet under the foot pads.<br><br>2. Place your hands lightly behind your head or across your chest.<br><br>3. Exhale and curl your torso upwards, bringing your shoulders towards your hips, focusing on contracting your abs.<br><br>4. For sit-ups, come up further, engaging the hip flexors. For crunches, focus solely on abdominal flexion.<br><br>5. Slowly lower back down with control.",
      de: "1. Legen Sie sich auf eine Schrägbank und haken Sie Ihre Füße unter die Fußpolster.<br><br>2. Legen Sie Ihre Hände leicht hinter Ihren Kopf oder über Ihre Brust.<br><br>3. Atmen Sie aus und beugen Sie Ihren Oberkörper nach oben, bringen Sie Ihre Schultern in Richtung Hüfte, wobei Sie sich auf die Kontraktion Ihrer Bauchmuskeln konzentrieren.<br><br>4. Bei Sit-ups kommen Sie weiter hoch und beanspruchen die Hüftbeuger. Bei Crunches konzentrieren Sie sich ausschließlich auf die Beugung des Bauches.<br><br>5. Senken Sie sich langsam und kontrolliert wieder ab."
    }
  },
  {
    id: 50,
    favorit: 0,
    name: "Dragon Flag",
    muscleGroup: "Abs",
    category: "Core",
    effectiveness: 5,
    difficulty:"Advanced",
    primeMuscle: ["Rectus Abdominis", "Transverse Abdominis"],
    secondaryMuscle: ["Latissimus Dorsi", "External Obliques", "Iliopsoas"],
    url: "https://www.youtube.com/embed/kaUqM0JSlGU",
    equipment: "None", // Requires a sturdy bench or pole to grip
    description: {
      de: "Fortgeschrittene Übung für exzentrische Kraft.",
      en: "Advanced exercise for eccentric strength."
    },
    steps: {
      en: "1. Lie on a flat bench, grasping the bench behind your head with both hands for support.<br><br>2. Raise your entire body (legs, hips, torso) off the bench until it forms a straight line, supported only by your shoulders and upper back.<br><br>3. Slowly lower your body down towards the bench, maintaining the straight line and controlling the descent with your core.<br><br>4. Stop just before your body touches the bench and then raise it back up, or focus on controlled eccentric lowerings.",
      de: "1. Legen Sie sich auf eine flache Bank und fassen Sie die Bank hinter Ihrem Kopf mit beiden Händen zur Unterstützung.<br><br>2. Heben Sie Ihren gesamten Körper (Beine, Hüften, Rumpf) von der Bank ab, bis er eine gerade Linie bildet, nur von Ihren Schultern und Ihrem oberen Rücken gestützt.<br><br>3. Senken Sie Ihren Körper langsam zur Bank ab, wobei Sie die gerade Linie beibehalten und den Abstieg mit Ihrem Rumpf kontrollieren.<br><br>4. Halten Sie kurz an, bevor Ihr Körper die Bank berührt, und heben Sie ihn dann wieder an, oder konzentrieren Sie sich auf kontrollierte exzentrische Senkungen."
    }
  },
  {
    id: 110,
    favorit: 0,
    name: "Side Plank",
    muscleGroup: "Abs",
    category: "Core",
    effectiveness: 4,
  difficulty: "Novice",
  primeMuscle: ["External Obliques", "Internal Obliques", "Transverse Abdominis"],
    secondaryMuscle: ["Gluteus Medius"],
    url: "https://www.youtube.com/embed/_R389Jk0tIo",
    equipment: "None",
    description: {
      de: "Isometrische Übung für seitliche Rumpfmuskulatur.",
      en: "Isometric exercise for lateral trunk muscles."
    },
    steps: {
      en: "1. Lie on your side, supporting your body on your forearm (elbow directly under shoulder) and the side of your foot.<br><br>2. Keep your body in a straight line from head to heels, engaging your core and glutes.<br><br>3. Avoid letting your hips sag or rotate.<br><br>4. Hold this position for the desired duration, then switch to the other side.",
      de: "1. Legen Sie sich auf die Seite und stützen Sie Ihren Körper auf Ihren Unterarm (Ellenbogen direkt unter der Schulter) und die Seite Ihres Fußes.<br><br>2. Halten Sie Ihren Körper in einer geraden Linie vom Kopf bis zu den Fersen und spannen Sie Ihren Rumpf und Ihr Gesäß an.<br><br>3. Vermeiden Sie, dass Ihre Hüften durchhängen oder sich drehen.<br><br>4. Halten Sie diese Position für die gewünschte Dauer und wechseln Sie dann zur anderen Seite."
    }
  },
  {
    id: 111,
    favorit: 0,
    name: "Cable Wood Chop",
    muscleGroup: "Abs",
    category: "Core",
    effectiveness: 4,
  difficulty: "Beginner",
  primeMuscle: ["External Obliques", "Internal Obliques"],
    secondaryMuscle: ["Rectus Abdominis", "Serratus Anterior", "Anterior Deltoid"],
    equipment: "Cable",
    url: "https://www.youtube.com/embed/gcGNypjIQDo",
    description: {
      de: "Funktionelle Rotationsübung.",
      en: "Functional rotational exercise."
    },
    steps: {
      en: "1. Stand sideways to a cable machine with a handle set to a high pulley position.<br><br>2. Grasp the handle with both hands and step away from the machine to create tension.<br><br>3. Rotate your torso diagonally downwards and across your body, pulling the handle down and across towards the opposite knee.<br><br>4. Pivot on your feet as needed, keeping your core engaged.<br><br>5. Slowly control the cable back to the starting position.<br><br>6. Complete all reps on one side before switching.",
      de: "1. Stellen Sie sich seitlich zu einem Kabelzug mit einem Griff, der auf einer hohen Rollenposition eingestellt ist.<br><br>2. Fassen Sie den Griff mit beiden Händen und treten Sie von der Maschine weg, um Spannung zu erzeugen.<br><br>3. Drehen Sie Ihren Oberkörper diagonal nach unten und über Ihren Körper, ziehen Sie den Griff nach unten und über das gegenüberliegende Knie.<br><br>4. Drehen Sie bei Bedarf auf Ihren Füßen, halten Sie Ihren Rumpf angespannt.<br><br>5. Kontrollieren Sie das Kabel langsam zurück in die Ausgangsposition.<br><br>6. Absolvieren Sie alle Wiederholungen auf einer Seite, bevor Sie wechseln."
    }
  },
  {
    id: 112,
    favorit: 0,
    name: "Reverse Crunch",
    muscleGroup: "Abs",
    category: "Core",
    effectiveness: 4,
  difficulty: "Intermediate",
  primeMuscle: ["Rectus Abdominis"],
    secondaryMuscle: ["External Obliques"],
    equipment: "None",
    url: "https://www.youtube.com/embed/N5CHqtgiylc",
    description: {
      de: "Konzentriert sich auf das Anheben des Beckens.",
      en: "Focuses on lifting the pelvis."
    },
    steps: {
      en: "1. Lie on your back on the floor, with your knees bent at a 90-degree angle and your feet flat on the floor.<br><br>2. Place your hands by your sides or lightly behind your head.<br><br>3. Engage your abs to lift your hips and lower back off the floor, bringing your knees towards your chest.<br><br>4. Focus on tilting your pelvis upwards, rather than just swinging your legs.<br><br>5. Slowly lower your hips and legs back down with control.",
      de: "1. Legen Sie sich auf den Rücken auf den Boden, wobei Ihre Knie im 90-Grad-Winkel gebeugt und Ihre Füße flach auf dem Boden stehen.<br><br>2. Legen Sie Ihre Hände seitlich ab oder leicht hinter Ihren Kopf.<br><br>3. Spannen Sie Ihre Bauchmuskeln an, um Ihre Hüften und Ihren unteren Rücken vom Boden abzuheben und Ihre Knie in Richtung Brust zu bringen.<br><br>4. Konzentrieren Sie sich darauf, Ihr Becken nach oben zu kippen, anstatt nur Ihre Beine zu schwingen.<br><br>5. Senken Sie Ihre Hüften und Beine langsam und kontrolliert wieder ab."
    }
  },
  {
    id: 118,
    favorit: 0,
    name: "Bicycle Crunches",
    muscleGroup: "Abs",
    category: "Core",
    effectiveness: 4,
  difficulty: "Beginner",
  primeMuscle: ["Rectus Abdominis", "External Obliques", "Internal Obliques"],
    secondaryMuscle: ["Iliopsoas"],
    equipment: "None",
    url: "https://www.youtube.com/embed/wnuLak2onoA",
    description: {
      de: "Dynamische Übung für gerade und schräge Bauchmuskeln.",
      en: "Dynamic exercise for both straight and oblique abdominal muscles."
    },
    steps: {
      en: "1. Lie on your back on the floor with your hands lightly behind your head and your knees bent, feet off the floor.<br><br>2. Bring one knee towards your chest while simultaneously extending the other leg straight out.<br><br>3. As you bring the knee in, twist your torso to bring the opposite elbow towards that knee.<br><br>4. Alternate sides in a continuous, cycling motion, mimicking pedaling a bicycle.<br><br>5. Keep your lower back pressed into the floor throughout the exercise.",
      de: "1. Legen Sie sich auf den Rücken auf den Boden, mit den Händen leicht hinter dem Kopf und den Knien gebeugt, die Füße vom Boden abgehoben.<br><br>2. Bringen Sie ein Knie zur Brust, während Sie gleichzeitig das andere Bein gerade ausstrecken.<br><br>3. Während Sie das Knie hereinziehen, drehen Sie Ihren Oberkörper, um den gegenüberliegenden Ellbogen zu diesem Knie zu bringen.<br><br>4. Wechseln Sie die Seiten in einer kontinuierlichen, radelnden Bewegung, die das Treten eines Fahrrads nachahmt.<br><br>5. Halten Sie Ihren unteren Rücken während der gesamten Übung auf den Boden gedrückt."
    }
  },


  // Quadrizeps-Übungen (Quads)
  {
    id: 14,
    favorit: 0,
    name: "Barbell Back Squat",
    muscleGroup: "Quadrizeps",
    category: "Lower body",
    effectiveness: 5,
  difficulty: "Intermediate",
  primeMuscle: ["Vastus Lateralis", "Vastus Medialis"],
    secondaryMuscle: ["Gluteus Maximus", "Adductors", "Hamstrings", "Erector Spinae", "Core"],
    equipment: "Barbell",
    url: "https://www.youtube.com/embed/V-B_Y-OvOTQ",
    description: {
      de: "Top Grundübung für Beine und Gesäß.",
      en: "Top fundamental exercise for legs and glutes."
    },
    steps: {
      en: "1. Approach a barbell in a squat rack, position it across your upper back (traps), and grasp it with an overhand grip, slightly wider than shoulder-width.<br><br>2. Unrack the bar, take a few steps back, and set your feet shoulder-width apart, toes slightly pointed out.<br><br>3. Brace your core, take a deep breath, and initiate the descent by pushing your hips back and bending your knees as if sitting into a chair.<br><br>4. Descend until your thighs are parallel to the floor or deeper if mobility allows, keeping your chest up and back straight.<br><br>5. Drive through your heels and glutes to powerfully ascend back to the starting position.",
      de: "1. Nähern Sie sich einer Langhantel im Kniebeugenständer, positionieren Sie sie über Ihrem oberen Rücken (Trapezius) und fassen Sie sie mit einem Obergriff, etwas breiter als schulterbreit.<br><br>2. Heben Sie die Stange aus der Ablage, machen Sie ein paar Schritte zurück und stellen Sie Ihre Füße schulterbreit auseinander, die Zehen leicht nach außen.<br><br>3. Spannen Sie Ihren Rumpf an, atmen Sie tief ein und beginnen Sie den Abstieg, indem Sie Ihre Hüften nach hinten schieben und Ihre Knie beugen, als ob Sie sich auf einen Stuhl setzen würden.<br><br>4. Senken Sie ab, bis Ihre Oberschenkel parallel zum Boden sind oder tiefer, wenn die Beweglichkeit es zulässt, halten Sie Ihre Brust aufrecht und den Rücken gerade.<br><br>5. Drücken Sie sich durch Ihre Fersen und Ihr Gesäß, um kraftvoll in die Ausgangsposition zurückzukehren."
    }
  },
  {
    id: 15,
    favorit: 0,
    name: "Leg Press (45 Degree)",
    muscleGroup: "Quadrizeps",
    category: "Lower body",
    effectiveness: 4,
  difficulty: "Novice",
  primeMuscle: ["Vastus Lateralis", "Vastus Medialis"],
    secondaryMuscle: ["Gluteus Maximus", "Hamstrings", "Adductors"],
    equipment: "Machine",
    url: "https://www.youtube.com/embed/1yKAQLVV_XI",
    description: {
      de: "Gute Alternative zu Kniebeugen, hohe Stabilität.",
      en: "Great alternative to squats, high stability."
    },
    steps: {
      en: "1. Sit on the leg press machine with your back flat against the pad and your feet shoulder-width apart on the footplate.<br><br>2. Adjust the safety catches and release the weight.<br><br>3. Slowly lower the footplate towards you by bending your knees, allowing your knees to come close to your chest.<br><br>4. Push the footplate away from you by extending your legs, focusing on contracting your quadriceps.<br><br>5. Do not lock your knees at the top of the movement; maintain a slight bend.",
      de: "1. Setzen Sie sich auf die Beinpresse, wobei Ihr Rücken flach gegen das Polster liegt und Ihre Füße schulterbreit auf der Fußplatte stehen.<br><br>2. Stellen Sie die Sicherheitsarretierungen ein und lösen Sie das Gewicht.<br><br>3. Senken Sie die Fußplatte langsam zu sich, indem Sie Ihre Knie beugen und Ihre Knie nahe an Ihre Brust kommen lassen.<br><br>4. Drücken Sie die Fußplatte von sich weg, indem Sie Ihre Beine strecken, wobei Sie sich auf die Kontraktion Ihrer Quadrizeps konzentrieren.<br><br>5. Verriegeln Sie Ihre Knie am oberen Punkt der Bewegung nicht; behalten Sie eine leichte Beugung bei."
    }
  },
  {
    id: 56,
    favorit: 0,
    name: "Front Squat",
    muscleGroup: "Quadrizeps",
    category: "Lower body",
    effectiveness: 4,
  difficulty: "Advanced",
  primeMuscle: ["Vastus Lateralis", "Vastus Medialis"],
    secondaryMuscle: ["Gluteus Maximus", "Erector Spinae", "Core"],
    equipment: "Barbell",
    url: "https://www.youtube.com/embed/HHxNbhP16UE",
    description: {
      de: "Starker Quad-Fokus, fordert Beweglichkeit und Rumpfkraft.",
      en: "Strong quad focus, requires mobility and core strength."
    },
    steps: {
      en: "1. Position a barbell across the front of your shoulders, resting on your deltoids, with your elbows high and hands gripping the bar.<br><br>2. Unrack the bar and take a few steps back, setting your feet shoulder-width apart.<br><br>3. Keep your torso upright and core braced as you descend into a squat, allowing your knees to track forward.<br><br>4. Go as deep as your mobility allows, maintaining an upright posture.<br><br>5. Drive through your feet to return to the standing position.",
      de: "1. Positionieren Sie eine Langhantel vor Ihren Schultern, auf Ihren Deltamuskeln ruhend, mit hoch erhobenen Ellbogen und den Händen, die die Stange greifen.<br><br>2. Nehmen Sie die Stange aus der Ablage und machen Sie ein paar Schritte zurück, stellen Sie Ihre Füße schulterbreit auseinander.<br><br>3. Halten Sie Ihren Oberkörper aufrecht und Ihren Rumpf angespannt, während Sie in eine Kniebeuge absteigen, lassen Sie Ihre Knie nach vorne gehen.<br><br>4. Gehen Sie so tief, wie Ihre Beweglichkeit es zulässt, und behalten Sie eine aufrechte Haltung bei.<br><br>5. Drücken Sie sich durch Ihre Füße, um in die stehende Position zurückzukehren."
    }
  },
  {
    id: 57,
    favorit: 0,
    name: "Leg Extensions",
    muscleGroup: "Quadrizeps",
    category: "Lower body",
    effectiveness: 4,
  difficulty: "Novice",
  primeMuscle: ["Rectus Femoris", "Vastus Medialis", "Vastus Lateralis", "Vastus Intermedius"],
    secondaryMuscle: [],
    equipment: "Machine",
    url: "https://www.youtube.com/embed/uFbNtqP966A",
    description: {
      de: "Gute Isolationsübung für den Quadrizeps.",
      en: "Good isolation exercise for the quadriceps."
    },
    steps: {
      en: "1. Sit on the leg extension machine with your back flat against the pad and your knees aligned with the machine's pivot point.<br><br>2. Position your ankles just above the padded lever.<br><br>3. Extend your legs fully by contracting your quadriceps, pushing the padded lever upwards.<br><br>4. Squeeze your quads at the top of the movement.<br><br>5. Slowly lower the weight back down with control.",
      de: "1. Setzen Sie sich auf die Beinstreckmaschine mit dem Rücken flach gegen das Polster und den Knien am Drehpunkt der Maschine ausgerichtet.<br><br>2. Positionieren Sie Ihre Knöchel knapp über dem gepolsterten Hebel.<br><br>3. Strecken Sie Ihre Beine vollständig aus, indem Sie Ihre Quadrizeps anspannen und den gepolsterten Hebel nach oben drücken.<br><br>4. Spannen Sie Ihre Quadrizeps am oberen Punkt der Bewegung an.<br><br>5. Senken Sie das Gewicht langsam und kontrolliert wieder ab."
    }
  },
  {
    id: 58,
    favorit: 0,
    name: "Hack Squat",
    muscleGroup: "Quadrizeps",
    category: "Lower body",
    effectiveness: 6,
  difficulty: "Novice",
  primeMuscle: ["Vastus Lateralis", "Vastus Medialis"],
    secondaryMuscle: ["Gluteus Maximus", "Adductors"],
    equipment: "Machine",
    url: "https://www.youtube.com/embed/rYgNArpwE7E",
    description: {
      de: "Top Übung für Quadrizeps-Hypertrophie.",
      en: "Top exercise for quadriceps hypertrophy."
    },
    steps: {
      en: "1. Position yourself in the hack squat machine with your back flat against the pad and your shoulders under the shoulder pads.<br><br>2. Place your feet shoulder-width apart on the footplate.<br><br>3. Unrack the weight and slowly lower yourself by bending your knees, keeping your back pressed against the pad.<br><br>4. Descend as deep as comfortable, aiming for at least thighs parallel to the platform.<br><br>5. Drive through your feet to push the weight back up, fully extending your legs without locking your knees.",
      de: "1. Positionieren Sie sich in der Hack-Kniebeugen-Maschine mit dem Rücken flach gegen das Polster und den Schultern unter den Schulterpolstern.<br><br>2. Stellen Sie Ihre Füße schulterbreit auseinander auf die Fußplatte.<br><br>3. Nehmen Sie das Gewicht aus der Ablage und senken Sie sich langsam ab, indem Sie Ihre Knie beugen und Ihren Rücken gegen das Polster gedrückt halten.<br><br>4. Gehen Sie so tief wie bequem, streben Sie mindestens Oberschenkel parallel zur Plattform an.<br><br>5. Drücken Sie sich durch Ihre Füße, um das Gewicht wieder nach oben zu drücken, strecken Sie Ihre Beine vollständig, ohne Ihre Knie zu verriegeln."
    }
  },
  {
    id: 59,
    favorit: 0,
    name: "Bulgarian Split Squats (Dumbbell)",
    muscleGroup: "Quadrizeps",
    category: "Lower body",
    effectiveness: 5,
  difficulty: "Intermediate",
  primeMuscle: ["Vastus Lateralis", "Vastus Medialis"],
    secondaryMuscle: ["Gluteus Maximus", "Hamstrings", "Adductors", "Gluteus Medius", "Core"],
    equipment: "Dumbbell",
    url: "https://www.youtube.com/embed/htDXu61MPio",
    description: {
      de: "Exzellente unilaterale Übung für Beinkraft und Balance.",
      en: "Excellent unilateral exercise for leg strength and balance."
    },
    steps: {
      en: "1. Stand a few feet in front of a bench or elevated surface, holding a dumbbell in each hand.<br><br>2. Place the top of one foot on the bench behind you.<br><br>3. Keep your torso upright and descend into a lunge, bending both knees until your back knee almost touches the floor.<br><br>4. Ensure your front knee tracks over your toes and your front heel remains on the ground.<br><br>5. Drive through your front heel to return to the starting position.<br><br>6. Complete all reps on one leg before switching to the other.",
      de: "1. Stellen Sie sich ein paar Schritte vor eine Bank oder erhöhte Fläche und halten Sie in jeder Hand eine Kurzhantel.<br><br>2. Legen Sie den oberen Teil eines Fußes auf die Bank hinter sich.<br><br>3. Halten Sie Ihren Oberkörper aufrecht und gehen Sie in einen Ausfallschritt, beugen Sie beide Knie, bis Ihr hinteres Knie fast den Boden berührt.<br><br>4. Stellen Sie sicher, dass Ihr vorderes Knie über Ihren Zehen bleibt und Ihre vordere Ferse auf dem Boden bleibt.<br><br>5. Drücken Sie sich durch Ihre vordere Ferse, um in die Ausgangsposition zurückzukehren.<br><br>6. Absolvieren Sie alle Wiederholungen auf einem Bein, bevor Sie zum anderen wechseln."
    }
  },
  {
    id: 204,
    favorit: 0,
    name: "Bulgarian Split Squats (Bodyweight)",
    muscleGroup: "Quadrizeps",
    category: "Lower body",
    effectiveness: 4,
  difficulty: "Beginner",
  primeMuscle: ["Vastus Lateralis", "Vastus Medialis"],
    secondaryMuscle: ["Gluteus Maximus", "Hamstrings", "Adductors", "Gluteus Medius", "Core"],
    equipment: "None",
    url: "https://www.youtube.com/embed/cpJtJ7Eefy0",
    description: {
      de: "Exzellente unilaterale Übung für Beinkraft und Balance.",
      en: "Excellent unilateral exercise for leg strength and balance."
    },
    steps: {
      en: "1. Stand a few feet in front of a bench or elevated surface.<br><br>2. Place the top of one foot on the bench behind you.<br><br>3. Keep your torso upright and descend into a lunge, bending both knees until your back knee almost touches the floor.<br><br>4. Ensure your front knee tracks over your toes and your front heel remains on the ground.<br><br>5. Drive through your front heel to return to the starting position.<br><br>6. Complete all reps on one leg before switching to the other.",
      de: "1. Stellen Sie sich ein paar Schritte vor eine Bank oder erhöhte Fläche.<br><br>2. Legen Sie den oberen Teil eines Fußes auf die Bank hinter sich.<br><br>3. Halten Sie Ihren Oberkörper aufrecht und gehen Sie in einen Ausfallschritt, beugen Sie beide Knie, bis Ihr hinteres Knie fast den Boden berührt.<br><br>4. Stellen Sie sicher, dass Ihr vorderes Knie über Ihren Zehen bleibt und Ihre vordere Ferse auf dem Boden bleibt.<br><br>5. Drücken Sie sich durch Ihre vordere Ferse, um in die Ausgangsposition zurückzukehren.<br><br>6. Absolvieren Sie alle Wiederholungen auf einem Bein, bevor Sie zum anderen wechseln."
    }
  },
  {
    id: 152,
    favorit: 0,
    name: "Reverse Nordic",
    muscleGroup: "Quadrizeps",
    category: "Lower body",
    effectiveness: 4,
  difficulty: "Advanced",
  primeMuscle: ["Rectus Femoris"],
    secondaryMuscle: ["Core"],
    equipment: "None",
    url: "https://www.youtube.com/embed/D-kqUKEQZZ0",
    description: {
      de: "Fortgeschrittene Isolationsübung, gut für Rectus Femoris Stretch.",
      en: "Advanced isolation exercise, great for rectus femoris stretch."
    },
    steps: {
      en: "1. Kneel on the floor with your torso upright, ideally with your ankles secured by a partner or under a heavy object.<br><br>2. Slowly lean back, keeping your body in a straight line from your knees to your head, feeling a stretch in your quadriceps.<br><br>3. Go back as far as you can control without arching your lower back.<br><br>4. Use your quadriceps to pull your body back to the upright kneeling position.",
      de: "1. Knien Sie auf dem Boden mit aufrechtem Oberkörper, idealerweise mit Ihren Knöcheln von einem Partner oder unter einem schweren Gegenstand gesichert.<br><br>2. Lehnen Sie sich langsam zurück, halten Sie Ihren Körper in einer geraden Linie von den Knien bis zum Kopf und spüren Sie eine Dehnung in Ihren Quadrizeps.<br><br>3. Gehen Sie so weit zurück, wie Sie es kontrollieren können, ohne Ihren unteren Rücken zu überstrecken.<br><br>4. Verwenden Sie Ihre Quadrizeps, um Ihren Körper zurück in die aufrechte Knieposition zu ziehen."
    }
  },
  {
    id: 60,
    favorit: 0,
    name: "Sissy Squats",
    muscleGroup: "Quadrizeps",
    category: "Lower body",
    effectiveness: 3,
  difficulty: "Intermediate",
  primeMuscle: ["Rectus Femoris"],
    secondaryMuscle: ["Core"],
    equipment: "None",
    url: "https://www.youtube.com/embed/eWAjlO4FWPQ",
    description: {
      de: "Fortgeschrittene Isolationsübung, gut für Rectus Femoris Stretch.",
      en: "Advanced isolation exercise, great for rectus femoris stretch."
    },
    steps: {
      en: "1. Stand with your feet shoulder-width apart, holding onto something for balance (e.g., a pole or rack).<br><br>2. Elevate your heels slightly (e.g., on a weight plate) if desired.<br><br>3. Allow your knees to travel far forward while simultaneously leaning your torso backward, keeping a straight line from knees to shoulders.<br><br>4. Go as deep as comfortable, feeling a strong stretch in your quadriceps.<br><br>5. Use your quads to pull your body back to the starting upright position.",
      de: "1. Stellen Sie sich schulterbreit auseinander und halten Sie sich an etwas fest, um das Gleichgewicht zu halten (z.B. eine Stange oder ein Rack).<br><br>2. Erhöhen Sie Ihre Fersen leicht (z.B. auf einer Hantelscheibe), falls gewünscht.<br><br>3. Lassen Sie Ihre Knie weit nach vorne wandern, während Sie gleichzeitig Ihren Oberkörper nach hinten lehnen und eine gerade Linie von den Knien zu den Schultern beibehalten.<br><br>4. Gehen Sie so tief wie bequem, spüren Sie eine starke Dehnung in Ihren Quadrizeps.<br><br>5. Verwenden Sie Ihre Quadrizeps, um Ihren Körper in die aufrechte Ausgangsposition zurückzuziehen."
    }
  },
  {
    id: 113,
    favorit: 0,
    name: "Goblet Squat",
    muscleGroup: "Quadrizeps",
    category: "Lower body",
    effectiveness: 3,
  difficulty: "Novice",
  primeMuscle: ["Vastus Lateralis", "Vastus Medialis"],
    secondaryMuscle: ["Gluteus Maximus", "Adductors", "Core"],
    equipment: "Dumbbell",
    url: "https://www.youtube.com/embed/S2agsLlUSII",
    description: {
      de: "Gute Kniebeugen-Variante für Anfänger und aufrechte Haltung.",
      en: "Good squat variation for beginners and upright posture."
    },
    steps: {
      en: "1. Stand with your feet shoulder-width apart, holding a dumbbell vertically against your chest with both hands.<br><br>2. Keep your elbows tucked in and your chest up.<br><br>3. Initiate the squat by pushing your hips back and bending your knees, descending as if sitting into a chair.<br><br>4. Go as deep as possible while maintaining an upright torso and keeping your heels on the ground.<br><br>5. Drive through your heels to return to the standing position.",
      de: "1. Stellen Sie sich schulterbreit auseinander und halten Sie eine Kurzhantel senkrecht an Ihre Brust mit beiden Händen.<br><br>2. Halten Sie Ihre Ellbogen eng am Körper und Ihre Brust aufrecht.<br><br>3. Beginnen Sie die Kniebeuge, indem Sie Ihre Hüften nach hinten schieben und Ihre Knie beugen, senken Sie sich ab, als ob Sie sich auf einen Stuhl setzen würden.<br><br>4. Gehen Sie so tief wie möglich, während Sie einen aufrechten Oberkörper beibehalten und Ihre Fersen auf dem Boden halten.<br><br>5. Drücken Sie sich durch Ihre Fersen, um in die stehende Position zurückzukehren."
    }
  },
  {
    id: 160,
    favorit: 0,
    name: "Dumbbell Step-Up",
    muscleGroup: "Quadrizeps",
    category: "Lower body",
    effectiveness: 3,
  difficulty: "Intermediate",
  primeMuscle: ["Vastus Lateralis", "Vastus Medialis"],
    secondaryMuscle: ["Gluteus Maximus", "Adductors", "Core"],
    equipment: "Dumbbell",
    url: "https://www.youtube.com/embed/3FNfi_PrP9Y",
    description: {
      de: "Unilaterale Übung für Beinkraft und Balance.",
      en: "Unilateral exercise for leg strength and balance."
    },
    steps: {
      en: "1. Stand in front of a sturdy box or bench, holding a dumbbell in each hand.<br><br>2. Place one foot firmly on the box.<br><br>3. Drive through your elevated heel to step up onto the box, bringing your trailing leg up to meet the first.<br><br>4. Step back down with control, alternating the lead leg for each repetition or completing all reps on one side before switching.",
      de: "1. Stellen Sie sich vor eine stabile Kiste oder Bank und halten Sie in jeder Hand eine Kurzhantel.<br><br>2. Stellen Sie einen Fuß fest auf die Kiste.<br><br>3. Drücken Sie sich durch die erhöhte Ferse, um auf die Kiste zu steigen, und ziehen Sie Ihr nachfolgendes Bein nach, um das erste zu treffen.<br><br>4. Steigen Sie kontrolliert wieder herunter, wechseln Sie das führende Bein für jede Wiederholung oder absolvieren Sie alle Wiederholungen auf einer Seite, bevor Sie wechseln."
    }
  },
  {
    id: 125,
    favorit: 0,
    name: "Smith Machine Squat",
    muscleGroup: "Quadrizeps",
    category: "Lower body",
    effectiveness: 5,
  difficulty: "Beginner",
  primeMuscle: ["Vastus Lateralis", "Vastus Medialis"],
    secondaryMuscle: ["Gluteus Maximus", "Adductors", "Hamstrings"],
    equipment: "Machine",
    url: "https://www.youtube.com/embed/J2D2J7RO_tA",
    description: {
      de: "Kniebeuge an der Smith Machine, erlaubt variablen Fußstand für Fokus.",
      en: "Smith machine squat, allows variable foot positioning for focus."
    },
    steps: {
      en: "1. Position a bench or step under the Smith machine bar, if desired, to adjust foot placement.<br><br>2. Step under the bar and place it across your upper back, gripping it with both hands.<br><br>3. Unrack the bar and take your desired foot stance (e.g., feet slightly forward for more quad emphasis).<br><br>4. Descend into a squat, keeping your back straight and controlled by the machine's fixed path.<br><br>5. Drive through your feet to push the bar back up, extending your legs.",
      de: "1. Positionieren Sie eine Bank oder Stufe unter der Smith-Maschinenstange, falls gewünscht, um die Fußposition anzupassen.<br><br>2. Treten Sie unter die Stange und legen Sie sie über Ihren oberen Rücken, fassen Sie sie mit beiden Händen.<br><br>3. Nehmen Sie die Stange aus der Ablage und nehmen Sie Ihren gewünschten Fußstand ein (z.B. Füße leicht nach vorne für mehr Quadrizeps-Betonung).<br><br>4. Senken Sie sich in eine Kniebeuge ab, halten Sie Ihren Rücken gerade und kontrolliert durch den festen Pfad der Maschine.<br><br>5. Drücken Sie sich durch Ihre Füße, um die Stange wieder nach oben zu drücken und Ihre Beine zu strecken."
    }
  },
  {
    id: 147,
    favorit: 0,
    name: "Horizontal Leg Press",
    muscleGroup: "Quadrizeps",
    category: "Lower body",
    effectiveness: 3,
  difficulty: "Novice",
  primeMuscle: ["Vastus Lateralis", "Vastus Medialis"],
    secondaryMuscle: ["Gluteus Maximus", "Hamstrings", "Adductors"],
    equipment: "Machine",
    url: "https://www.youtube.com/embed/gKQxAgT7etM",
    description: {
      de: "Beinpresse mit horizontaler Schlittenbewegung, oft weniger effektiv als 45 Grad.",
      en: "Horizontal leg press, often less effective than 45-degree version."
    },
    steps: {
      en: "1. Sit in the horizontal leg press machine with your back flat against the pad and your feet flat on the footplate.<br><br>2. Unrack the weight.<br><br>3. Bend your knees to bring the footplate towards you, allowing your knees to come towards your chest.<br><br>4. Push the footplate away from you by extending your legs, contracting your quadriceps.<br><br>5. Do not lock your knees at the top of the movement; maintain a slight bend.",
      de: "1. Setzen Sie sich in die horizontale Beinpresse mit dem Rücken flach gegen das Polster und den Füßen flach auf der Fußplatte.<br><br>2. Nehmen Sie das Gewicht aus der Ablage.<br><br>3. Beugen Sie Ihre Knie, um die Fußplatte zu sich zu bringen, lassen Sie Ihre Knie zu Ihrer Brust kommen.<br><br>4. Drücken Sie die Fußplatte von sich weg, indem Sie Ihre Beine strecken und Ihre Quadrizeps anspannen.<br><br>5. Verriegeln Sie Ihre Knie am oberen Punkt der Bewegung nicht; behalten Sie eine leichte Beugung bei."
    }
  },

  //{
  //  id: 205,
  //  favorit: 0,
  //  name: "Pistol Squats",
  //  muscleGroup: "Quadrizeps",
  //  category: "Lower body",
  //  effectiveness: 4,
  //  primeMuscle: ["Vastus Lateralis", "Vastus Medialis"],
  //  secondaryMuscle: ["Gluteus Maximus", "Hamstrings", "Adductors", "Gluteus Medius", "Core"],
  //  equipment: "None",
  //  description: {
  //    de: "Exzellente unilaterale Übung für Beinkraft und Balance.",
  //    en: "Excellent unilateral exercise for leg strength and balance."
  //  }
  //},

  // Hamstrings-Übungen
  {
    id: 17,
    favorit: 0,
    name: "Leg Curl Machine (Lying/Seated)",
    muscleGroup: "Hamstrings",
    category: "Lower body",
    effectiveness: 5,
  difficulty: "Novice",
  primeMuscle: ["Hamstrings (Knee Flexion)"],
    secondaryMuscle: ["Gastrocnemius"],
    equipment: "Machine",
    url: "https://www.youtube.com/embed/yv0aAY7M1mk",
    description: {
      de: "Standard Isolationsübung für die Hamstrings.",
      en: "Standard isolation exercise for the hamstrings."
    },
    difficulty: "Beginner",
    steps: {
      en: "1. Lie face down on the leg curl machine, positioning your Achilles tendon against the padded lever.<br><br>2. Adjust the machine so your knees are just off the edge of the bench.<br><br>3. Grasp the handles for stability.<br><br>4. Curl your legs upward, bringing the padded lever towards your glutes, squeezing your hamstrings.<br><br>5. Slowly lower the weight back to the starting position, controlling the movement.",
      de: "1. Legen Sie sich bäuchlings auf die Beinbeugemaschine und positionieren Sie Ihre Achillessehne gegen den gepolsterten Hebel.<br><br>2. Stellen Sie die Maschine so ein, dass Ihre Knie knapp über der Kante der Bank liegen.<br><br>3. Fassen Sie die Griffe zur Stabilisierung.<br><br>4. Beugen Sie Ihre Beine nach oben, bringen Sie den gepolsterten Hebel in Richtung Ihres Gesäßes und spannen Sie dabei Ihre Oberschenkelrückseite an.<br><br>5. Senken Sie das Gewicht langsam und kontrolliert in die Ausgangsposition zurück."
    }
  },
  {
    id: 16,
    favorit: 0,
    name: "Barbell Romanian Deadlift (RDL)",
    muscleGroup: "Hamstrings",
    category: "Lower body",
    effectiveness: 5,
  difficulty: "Intermediate",
  primeMuscle: ["Hamstrings (Hip Extension)"],
    secondaryMuscle: ["Gluteus Maximus", "Erector Spinae", "Forearms", "Core", "Latissimus dorsi","Soleus"],
    equipment: "Barbell",
    url: "https://www.youtube.com/embed/3fJwfg51cv0",
    description: {
      de: "Sehr gute Übung für die gesamte hintere Kette (Hip Hinge).",
      en: "Great exercise for the entire posterior chain (hip hinge)."
    },
    steps: {
      en: "1. Stand with your feet hip-width apart, holding a barbell with an overhand grip, hands slightly wider than shoulder-width.<br><br>2. Keep a slight bend in your knees and your back straight.<br><br>3. Hinge at your hips, pushing your glutes back as you lower the barbell towards the floor, keeping it close to your legs.<br><br>4. Lower until you feel a strong stretch in your hamstrings, typically around mid-shin level, or just below the knees.<br><br>5. Squeeze your glutes and hamstrings to reverse the movement, returning to the standing position.",
      de: "1. Stellen Sie sich hüftbreit auseinander, halten Sie eine Langhantel mit einem Obergriff, die Hände etwas breiter als schulterbreit.<br><br>2. Halten Sie Ihre Knie leicht gebeugt und Ihren Rücken gerade.<br><br>3. Beugen Sie sich in den Hüften, schieben Sie Ihr Gesäß nach hinten, während Sie die Langhantel zum Boden senken, halten Sie sie dabei nah an Ihren Beinen.<br><br>4. Senken Sie ab, bis Sie eine starke Dehnung in Ihren Hamstrings spüren, typischerweise auf halber Schienbeinlänge oder knapp unterhalb der Knie.<br><br>5. Spannen Sie Ihre Gesäßmuskeln und Hamstrings an, um die Bewegung umzukehren und in die stehende Position zurückzukehren."
    }
  },
  {
    id: 151,
    favorit: 0,
    name: "Dumbbell Romanian Deadlift (RDL)",
    muscleGroup: "Hamstrings",
    category: "Lower body",
    effectiveness: 5,
  difficulty: "Beginner",
  primeMuscle: ["Hamstrings (Hip Extension)"],
    secondaryMuscle: ["Gluteus Maximus", "Erector Spinae", "Forearms", "Core", "Latissimus dorsi","Soleus"],
    equipment: "Dumbbell",
    url: "https://www.youtube.com/embed/VRwSgUoj7uI",
    description: {
      de: "Sehr gute Übung für die gesamte hintere Kette (Hip Hinge).",
      en: "Great exercise for the entire posterior chain (hip hinge)."
    },
    steps: {
      en: "1. Stand with your feet hip-width apart, holding a dumbbell in each hand in front of your thighs.<br><br>2. Keep a slight bend in your knees and your back straight.<br><br>3. Hinge at your hips, pushing your glutes back as you lower the dumbbells towards the floor, keeping them close to your legs.<br><br>4. Lower until you feel a strong stretch in your hamstrings, typically around mid-shin level, or just below the knees.<br><br>5. Squeeze your glutes and hamstrings to reverse the movement, returning to the standing position.",
      de: "1. Stellen Sie sich hüftbreit auseinander, halten Sie eine Kurzhantel in jeder Hand vor Ihren Oberschenkeln.<br><br>2. Halten Sie Ihre Knie leicht gebeugt und Ihren Rücken gerade.<br><br>3. Beugen Sie sich in den Hüften, schieben Sie Ihr Gesäß nach hinten, während Sie die Kurzhanteln zum Boden senken, halten Sie sie dabei nah an Ihren Beinen.<br><br>4. Senken Sie ab, bis Sie eine starke Dehnung in Ihren Hamstrings spüren, typischerweise auf halber Schienbeinlänge oder knapp unterhalb der Knie.<br><br>5. Spannen Sie Ihre Gesäßmuskeln und Hamstrings an, um die Bewegung umzukehren und in die stehende Position zurückzukehren."
    }
  },
  {
    id: 61,
    favorit: 0,
    name: "Good Mornings",
    muscleGroup: "Hamstrings",
    category: "Lower body",
    effectiveness: 3,
  difficulty: "Intermediate",
  primeMuscle: ["Hamstrings (Hip Extension)"],
    secondaryMuscle: ["Gluteus Maximus", "Erector Spinae"],
    equipment: "Barbell",
    url: "https://www.youtube.com/embed/dEJ0FTm-CEk",
    description: {
      de: "Effektive Übung für die hintere Kette, Vorsicht bei Ausführung.",
      en: "Effective exercise for the posterior chain, be cautious with execution."
    },
    steps: {
      en: "1. Place a barbell across your upper back, similar to a squat, with a comfortable stance.<br><br>2. Keep a slight bend in your knees and maintain a straight back.<br><br>3. Hinge at your hips, lowering your torso forward until it's nearly parallel to the floor, feeling a stretch in your hamstrings.<br><br>4. Squeeze your hamstrings and glutes to bring your torso back up to the starting position.",
      de: "1. Legen Sie eine Langhantel wie bei einer Kniebeuge über Ihren oberen Rücken, mit einem bequemen Stand.<br><br>2. Halten Sie Ihre Knie leicht gebeugt und Ihren Rücken gerade.<br><br>3. Beugen Sie sich in den Hüften und senken Sie Ihren Oberkörper nach vorne, bis er fast parallel zum Boden ist, und spüren Sie eine Dehnung in Ihren Hamstrings.<br><br>4. Spannen Sie Ihre Hamstrings und Gesäßmuskeln an, um Ihren Oberkörper wieder in die Ausgangsposition zu bringen."
    }
  },
  {
    id: 62,
    favorit: 0,
    name: "Nordic Hamstring Curls",
    muscleGroup: "Hamstrings",
    category: "Lower body",
    effectiveness: 4,
  difficulty: "Intermediate",
  primeMuscle: ["Hamstrings (Knee Flexion)"],
    secondaryMuscle: ["Gastrocnemius", "Glutes (Isometric Stabilization)"],
    equipment: "None",
    url: "https://www.youtube.com/embed/fzpYiRtzmFA",
    description: {
      de: "Sehr anspruchsvolle, effektive exzentrische Übung.",
      en: "Very challenging and effective eccentric exercise."
    },
    steps: {
      en: "1. Kneel on the floor with your ankles securely anchored (e.g., under a stable bench or with a partner holding them).<br><br>2. Keep your torso straight and slowly lean forward, controlling the descent with your hamstrings.<br><br>3. Resist as long as possible until you can no longer control the movement, then catch yourself with your hands.<br><br>4. Push off the floor with your hands to return to the starting position, or perform only the eccentric (lowering) portion.",
      de: "1. Knien Sie auf dem Boden mit sicher verankerten Knöcheln (z.B. unter einer stabilen Bank oder von einem Partner gehalten).<br><br>2. Halten Sie Ihren Oberkörper gerade und lehnen Sie sich langsam nach vorne, kontrollieren Sie den Abstieg mit Ihren Hamstrings.<br><br>3. Widerstehen Sie so lange wie möglich, bis Sie die Bewegung nicht mehr kontrollieren können, und fangen Sie sich dann mit den Händen ab.<br><br>4. Drücken Sie sich mit den Händen vom Boden ab, um in die Ausgangsposition zurückzukehren, oder führen Sie nur den exzentrischen (senkenden) Teil aus."
    }
  },
  {
    id: 199, // Note: This ID is a duplicate of the Nordic Hamstring Curls. Consider changing if these are distinct exercises in your system.
    favorit: 0,
    name: "Forward Lunges",
    muscleGroup: "Hamstrings",
    category: "Lower body",
    effectiveness: 2,
  difficulty: "Novice",
  primeMuscle: ["Hamstrings (Knee Flexion)"],
    secondaryMuscle: ["Gastrocnemius", "Glutes (Isometric Stabilization)"],
    equipment: "None", // Can also be Dumbbell or Barbell
    url: "https://www.youtube.com/embed/g8-Ge9S0aUw",
    description: {
      de: "Freie Übung mit Eigengewicht oder Dumbells.",
      en: "Free movement exercise with bodyweight or dumbells."
    },
    steps: {
      en: "1. Stand with your feet hip-width apart.<br><br>2. Take a large step forward with one leg, lowering your hips until both knees are bent at approximately a 90-degree angle.<br><br>3. Ensure your front knee is directly above your ankle and your back knee hovers just above the floor.<br><br>4. Push off your front foot to return to the starting position.<br><br>5. Alternate legs for each repetition.",
      de: "1. Stellen Sie sich hüftbreit auseinander.<br><br>2. Machen Sie einen großen Schritt nach vorne mit einem Bein und senken Sie Ihre Hüften, bis beide Knie ungefähr einen 90-Grad-Winkel bilden.<br><br>3. Stellen Sie sicher, dass Ihr vorderes Knie direkt über Ihrem Knöchel ist und Ihr hinteres Knie knapp über dem Boden schwebt.<br><br>4. Stoßen Sie sich mit dem vorderen Fuß ab, um in die Ausgangsposition zurückzukehren.<br><br>5. Wechseln Sie die Beine für jede Wiederholung."
    }
  },
  {
    id: 63,
    favorit: 0,
    name: "Glute-Ham Raise (GHR)",
    muscleGroup: "Hamstrings",
    category: "Lower body",
    effectiveness: 5,
  difficulty: "Intermediate",
  primeMuscle: ["Hamstrings (Knee Flexion)", "Hamstrings (Hip Extension)"],
    secondaryMuscle: ["Gluteus Maximus", "Gastrocnemius", "Erector Spinae"],
    url: "https://www.youtube.com/embed/SBGYSfoqyfU",
    equipment: "Machine",
    description: {
      de: "Komplexe, sehr effektive Übung für die hintere Kette.",
      en: "Complex, very effective exercise for the posterior chain."
    },
    steps: {
      en: "1. Set up on a GHR machine, securing your feet and positioning your knees just behind the pivot.<br><br>2. Start with your body upright and slowly lower your torso towards the floor, controlling the movement primarily with your hamstrings.<br><br>3. Aim to keep your body in a straight line from your shoulders to your knees.<br><br>4. Use your hamstrings and glutes to pull yourself back up to the starting position.",
      de: "1. Stellen Sie sich auf einer GHR-Maschine auf, sichern Sie Ihre Füße und positionieren Sie Ihre Knie knapp hinter dem Drehpunkt.<br><br>2. Beginnen Sie mit aufrechtem Körper und senken Sie Ihren Oberkörper langsam zum Boden, wobei Sie die Bewegung hauptsächlich mit Ihren Hamstrings kontrollieren.<br><br>3. Versuchen Sie, Ihren Körper in einer geraden Linie von den Schultern bis zu den Knien zu halten.<br><br>4. Verwenden Sie Ihre Hamstrings und Gesäßmuskeln, um sich wieder in die Ausgangsposition zu ziehen."
    }
  },
  {
    id: 64,
    favorit: 0,
    name: "Single-Leg Romanian Deadlift (SLRDL)",
    muscleGroup: "Hamstrings",
    category: "Lower body",
    effectiveness: 4,
  difficulty: "Intermediate",
  primeMuscle: ["Hamstrings (Hip Extension)"],
    secondaryMuscle: ["Gluteus Maximus", "Gluteus Medius", "Erector Spinae", "Core","Soleus"],
    equipment: "Dumbbell",
    url: "https://www.youtube.com/embed/GoKjrvJi-Iw",
    description: {
      de: "Gute unilaterale Übung für Balance und hintere Kette.",
      en: "Good unilateral exercise for balance and the posterior chain."
    },
    steps: {
      en: "1. Stand on one leg, holding a dumbbell in the hand opposite to your standing leg.<br><br>2. Keep a slight bend in your standing knee.<br><br>3. Hinge at your hips, lowering the dumbbell towards the floor while extending your non-standing leg straight back for balance.<br><br>4. Keep your back straight and your core engaged.<br><br>5. Lower until you feel a stretch in your hamstring, then squeeze your glute and hamstring to return to the upright position.<br><br>6. Complete all reps on one side before switching to the other.",
      de: "1. Stellen Sie sich auf ein Bein und halten Sie eine Kurzhantel in der Hand, die Ihrem stehenden Bein gegenüberliegt.<br><br>2. Halten Sie Ihr stehendes Knie leicht gebeugt.<br><br>3. Beugen Sie sich in den Hüften, senken Sie die Kurzhantel zum Boden, während Sie Ihr nicht-stehendes Bein gerade nach hinten strecken, um das Gleichgewicht zu halten.<br><br>4. Halten Sie Ihren Rücken gerade und Ihren Rumpf angespannt.<br><br>5. Senken Sie ab, bis Sie eine Dehnung in Ihrem Hamstring spüren, dann spannen Sie Ihr Gesäß und Ihren Hamstring an, um in die aufrechte Position zurückzukehren.<br><br>6. Absolvieren Sie alle Wiederholungen auf einer Seite, bevor Sie zur anderen wechseln."
    }
  },
  {
    id: 114,
    favorit: 0,
    name: "Cable Pull Through",
    muscleGroup: "Hamstrings",
    category: "Lower body",
    effectiveness: 3,
  difficulty: "Beginner",
  primeMuscle: ["Hamstrings (Hip Extension)"],
    secondaryMuscle: ["Erector Spinae", "Gluteus Maximus"],
    equipment: "Cable",
    url: "https://www.youtube.com/embed/pv8e6OSyETE",
    description: {
      de: "Gute Hip-Hinge Variante für Anfänger oder als Finisher.",
      en: "Good hip-hinge variation for beginners or as a finisher."
    },
    steps: {
      en: "1. Stand facing away from a low cable pulley, with a rope attachment between your legs.<br><br>2. Bend at your hips, allowing your torso to hinge forward and the rope to pull through your legs.<br><br>3. Keep a slight bend in your knees and your back straight.<br><br>4. Drive your hips forward, squeezing your glutes and hamstrings to stand upright, pulling the cable through.<br><br>5. Control the movement as you return to the starting position.",
      de: "1. Stellen Sie sich mit dem Rücken zu einem niedrigen Kabelzug, mit einem Seilaufsatz zwischen Ihren Beinen.<br><br>2. Beugen Sie sich in den Hüften, lassen Sie Ihren Oberkörper nach vorne schwenken und das Seil durch Ihre Beine ziehen.<br><br>3. Halten Sie Ihre Knie leicht gebeugt und Ihren Rücken gerade.<br><br>4. Drücken Sie Ihre Hüften nach vorne, spannen Sie Ihr Gesäß und Ihre Hamstrings an, um aufrecht zu stehen und das Kabel durchzuziehen.<br><br>5. Kontrollieren Sie die Bewegung, wenn Sie in die Ausgangsposition zurückkehren."
    }
  },
  {
    id: 119,
    favorit: 0,
    name: "Stiff-Legged Deadlift",
    muscleGroup: "Hamstrings",
    category: "Lower body",
    effectiveness: 3,
  difficulty: "Intermediate",
  primeMuscle: ["Hamstrings (Hip Extension)"],
    secondaryMuscle: ["Erector Spinae", "Gluteus Maximus", "Forearms"],
    equipment: "Barbell", // Can also be Dumbbell
    url: "https://www.youtube.com/embed/CN_7cz3P-1U",
    description: {
      de: "Ähnlich RDL, oft mit mehr Stretch/unterem Rücken.",
      en: "Similar to RDL, often with more stretch/lower back involvement."
    },
    steps: {
      en: "1. Stand with your feet hip-width apart, holding a barbell with an overhand grip in front of your thighs.<br><br>2. Keep your legs almost straight (a very slight bend in the knees, but locked throughout the movement).<br><br>3. Hinge at your hips, lowering the barbell towards the floor by pushing your glutes back.<br><br>4. Keep your back straight and the bar close to your body.<br><br>5. Lower until you feel a significant stretch in your hamstrings, then return to the upright position by contracting your hamstrings and glutes.",
      de: "1. Stellen Sie sich hüftbreit auseinander, halten Sie eine Langhantel mit einem Obergriff vor Ihren Oberschenkeln.<br><br>2. Halten Sie Ihre Beine fast gerade (eine sehr leichte Beugung in den Knien, aber während der gesamten Bewegung gesperrt).<br><br>3. Beugen Sie sich in den Hüften, senken Sie die Langhantel zum Boden, indem Sie Ihr Gesäß nach hinten schieben.<br><br>4. Halten Sie Ihren Rücken gerade und die Stange nah am Körper.<br><br>5. Senken Sie ab, bis Sie eine deutliche Dehnung in Ihren Hamstrings spüren, kehren Sie dann in die aufrechte Position zurück, indem Sie Ihre Hamstrings und Ihr Gesäß anspannen."
    }
  },

//{ id: 65, favorit: 0, name: "Swiss Ball Leg Curls", muscleGroup: "Hamstrings", category: "Lower body", effectiveness: 2,
//  primeMuscle: ["Hamstrings (Knee Flexion)"],
//  secondaryMuscle: ["Gluteus Maximus", "Erector Spinae", "Core"],
//  equipment: "None",
//  description: {
//    de: "Funktionelle Übung mit Instabilität, weniger Last.",
//    en: "Functional exercise with instability, lower load."
//  }
//},
//{ id: 69, favorit: 0, name: "Jump Rope", muscleGroup: "Calves", category: "Lower body", effectiveness: 2,
//  primeMuscle: ["Gastrocnemius", "Soleus"], secondaryMuscle: ["Tibialis Anterior", "Quadriceps"], equipment: "None",
//  description: {
//    de: "Funktionelle Übung für Wadenausdauer.",
//    en: "Functional exercise for calf endurance."
//  }
//},
//{ id: 70, favorit: 0, name: "Stair Climbing on Tiptoes", muscleGroup: "Calves", category: "Lower body", effectiveness: 2,
//  primeMuscle: ["Gastrocnemius", "Soleus"], secondaryMuscle: [], equipment: "None",
//  description: {
//    de: "Funktionelle Übung für Wadenausdauer.",
//    en: "Functional exercise for calf endurance."
//  }
//},

{
    id: 18,
    favorit: 0,
    name: "Standing Calf Raises",
    muscleGroup: "Calves",
    category: "Lower body",
    effectiveness: 4,
  difficulty: "Novice",
  primeMuscle: ["Gastrocnemius", "Soleus"],
    secondaryMuscle: [],
    equipment: "Machine", // Or "None" if bodyweight, "Dumbbell" for weighted
    url: "https://www.youtube.com/embed/6lR2JdxUh7w",
    description: {
      de: "Unilaterale Übung für gleichmäßige Entwicklung.",
      en: "Unilateral exercise for balanced development."
    },
    steps: {
      en: "1. Stand on a standing calf raise machine with your shoulders under the pads and the balls of your feet on the elevated platform, heels off.<br><br>2. Lower your heels as far as possible to get a deep stretch in your calves.<br><br>3. Push through the balls of your feet to raise your heels as high as possible, contracting your calves forcefully at the top.<br><br>4. Slowly lower back down with control.",
      de: "1. Stellen Sie sich auf eine stehende Wadenhebe-Maschine, wobei Ihre Schultern unter den Polstern und die Fußballen auf der erhöhten Plattform stehen, die Fersen sind frei.<br><br>2. Senken Sie Ihre Fersen so weit wie möglich ab, um eine tiefe Dehnung in Ihren Waden zu erhalten.<br><br>3. Drücken Sie sich durch die Fußballen nach oben, heben Sie Ihre Fersen so hoch wie möglich an und spannen Sie Ihre Waden oben kräftig an.<br><br>4. Senken Sie sich langsam und kontrolliert wieder ab."
    }
  },
  {
    id: 19,
    favorit: 0,
    name: "Seated Calf Raises",
    muscleGroup: "Calves",
    category: "Lower body",
    effectiveness: 3,
  difficulty: "Novice",
  primeMuscle: ["Soleus"],
    secondaryMuscle: [],
    equipment: "Machine",
    url: "https://www.youtube.com/embed/6pfj0G7VKdM",
    description: {
      de: "Fokussiert auf den Soleus-Muskel.",
      en: "Focuses on the soleus muscle."
    },
    steps: {
      en: "1. Sit on a seated calf raise machine, placing the balls of your feet on the footplate and positioning your lower thighs under the padded lever.<br><br>2. Adjust the machine so the pads rest comfortably on your thighs, just above your knees.<br><br>3. Slowly lower your heels as far as possible to stretch your calves.<br><br>4. Push up with the balls of your feet, raising the weight as high as possible, focusing on squeezing the lower part of your calf (soleus).<br><br>5. Slowly lower back down with control.",
      de: "1. Setzen Sie sich auf eine sitzende Wadenheben-Maschine, stellen Sie die Fußballen auf die Fußplatte und positionieren Sie Ihre unteren Oberschenkel unter dem gepolsterten Hebel.<br><br>2. Stellen Sie die Maschine so ein, dass die Polster bequem auf Ihren Oberschenkeln, knapp über den Knien, aufliegen.<br><br>3. Senken Sie Ihre Fersen langsam so weit wie möglich ab, um Ihre Waden zu dehnen.<br><br>4. Drücken Sie sich mit den Fußballen nach oben, heben Sie das Gewicht so hoch wie möglich an und konzentrieren Sie sich dabei auf das Anspannen des unteren Teils Ihrer Wade (Soleus).<br><br>5. Senken Sie langsam und kontrolliert wieder ab."
    }
  },
  {
    id: 66,
    favorit: 0,
    name: "Donkey Calf Raises",
    muscleGroup: "Calves",
    category: "Lower body",
    effectiveness: 4,
  difficulty: "Novice",
  primeMuscle: ["Gastrocnemius","Soleus"],
    secondaryMuscle: [],
    equipment: "Machine", // Can also be done with bodyweight/partner
    url: "https://www.youtube.com/embed/TdOIZ9F3whU",
    description: {
      de: "Wadenheben mit vorgebeugtem Oberkörper für Stretch.",
      en: "Calf raises with a bent torso to emphasize the stretch."
    },
    steps: {
      en: "1. If using a machine: Position your lower back under the pad and the balls of your feet on the platform.<br><br>2. Bend forward at the hips, keeping your legs straight or with a slight bend.<br><br>3. Lower your heels as far as comfortable to stretch your calves.<br><br>4. Push through the balls of your feet to raise your heels as high as possible, squeezing your calves.<br><br>5. Slowly lower back down. (If bodyweight: Bend forward at hips, have a partner sit on your lower back, or use a belt with weights.)",
      de: "1. Wenn Sie eine Maschine verwenden: Positionieren Sie Ihren unteren Rücken unter dem Polster und die Fußballen auf der Plattform.<br><br>2. Beugen Sie sich in den Hüften nach vorne, halten Sie Ihre Beine gerade oder leicht gebeugt.<br><br>3. Senken Sie Ihre Fersen so weit wie bequem ab, um Ihre Waden zu dehnen.<br><br>4. Drücken Sie sich durch die Fußballen nach oben, heben Sie Ihre Fersen so hoch wie möglich an und spannen Sie Ihre Waden an.<br><br>5. Senken Sie sich langsam wieder ab. (Ohne Gerät: Beugen Sie sich in den Hüften nach vorne, lassen Sie sich von einem Partner auf den unteren Rücken setzen oder verwenden Sie einen Gürtel mit Gewichten.)"
    }
  },
  {
    id: 67,
    favorit: 0,
    name: "Single-Leg Calf Raises",
    muscleGroup: "Calves",
    category: "Lower body",
    effectiveness: 3,
  difficulty: "Intermediate",
  primeMuscle: ["Gastrocnemius", "Soleus"],
    secondaryMuscle: [],
    equipment: "None", // Can also use dumbbell
    url: "https://www.youtube.com/embed/Ovzq9hlKOSk",
    description: {
      de: "Unilaterale Übung für gleichmäßige Entwicklung.",
      en: "Unilateral exercise for balanced development."
    },
    steps: {
      en: "1. Stand on one leg with the ball of your foot on an elevated surface (e.g., a step or curb), with your heel hanging off.<br><br>2. Hold onto something for balance if needed, or hold a dumbbell in the hand opposite to your working leg.<br><br>3. Slowly lower your heel as far as comfortable to get a full stretch in your calf.<br><br>4. Push up onto the ball of your foot, raising your heel as high as possible, squeezing your calf at the top.<br><br>5. Slowly lower back down.<br><br>6. Complete all reps on one leg before switching.",
      de: "1. Stellen Sie sich auf ein Bein mit dem Fußballen auf eine erhöhte Fläche (z.B. eine Stufe oder Bordsteinkante), wobei Ihre Ferse überhängt.<br><br>2. Halten Sie sich bei Bedarf fest, um das Gleichgewicht zu halten, oder halten Sie eine Kurzhantel in der Hand, die dem arbeitenden Bein gegenüberliegt.<br><br>3. Senken Sie Ihre Ferse langsam so weit wie möglich ab, um eine vollständige Dehnung in Ihrer Wade zu erhalten.<br><br>4. Drücken Sie sich auf den Fußballen nach oben, heben Sie Ihre Ferse so hoch wie möglich an und spannen Sie Ihre Wade oben an.<br><br>5. Senken Sie sich langsam wieder ab.<br><br>6. Absolvieren Sie alle Wiederholungen auf einem Bein, bevor Sie wechseln."
    }
  },
  {
    id: 68,
    favorit: 0,
    name: "Calf Raises on Leg Press",
    muscleGroup: "Calves",
    category: "Lower body",
    effectiveness: 3,
  difficulty: "Beginner",
  primeMuscle: ["Gastrocnemius", "Soleus"],
    secondaryMuscle: [],
    equipment: "Machine",
    url: "https://www.youtube.com/embed/S6DTPNZ_-F4",
    description: {
      de: "Wadenheben mit hoher Gewichtsbelastung.",
      en: "Calf raises with high weight load."
    },
    steps: {
      en: "1. Sit on a leg press machine with the balls of your feet on the lower edge of the footplate, with your heels hanging off.<br><br>2. Release the safety catches and fully extend your knees, but do not lock them.<br><br>3. Slowly lower your heels by flexing your ankles, getting a deep stretch in your calves.<br><br>4. Push through the balls of your feet to press the weight up, contracting your calves fully.<br><br>5. Slowly control the weight back down.",
      de: "1. Setzen Sie sich auf eine Beinpresse mit den Fußballen am unteren Rand der Fußplatte, wobei Ihre Fersen überhängen.<br><br>2. Lösen Sie die Sicherheitsarretierungen und strecken Sie Ihre Knie vollständig aus, aber verriegeln Sie sie nicht.<br><br>3. Senken Sie Ihre Fersen langsam durch Beugen der Knöchel ab, um eine tiefe Dehnung in Ihren Waden zu erzielen.<br><br>4. Drücken Sie sich durch die Fußballen, um das Gewicht nach oben zu drücken und Ihre Waden vollständig zu kontrahieren.<br><br>5. Kontrollieren Sie das Gewicht langsam wieder nach unten."
    }
  },
  {
    id: 115,
    favorit: 0,
    name: "Tibialis Raise",
    muscleGroup: "Calves",
    category: "Lower body",
    effectiveness: 2,
  difficulty: "Beginner",
  primeMuscle: ["Tibialis Anterior"],
    secondaryMuscle: [],
    equipment: "None", // Can also use a tib bar or resistance band
    url: "https://www.youtube.com/embed/VzIcGAgBiaM",
    description: {
      de: "Stärkt den vorderen Schienbeinmuskel.",
      en: "Strengthens the anterior shin muscle."
    },
    steps: {
      en: "1. Sit on a bench or stand against a wall with your heels on the ground and your toes pointing up.<br><br>2. Keeping your heels down, slowly lift your toes towards your shins, contracting the muscle on the front of your lower leg (tibialis anterior).<br><br>3. Hold the contraction briefly.<br><br>4. Slowly lower your toes back down to the starting position.<br><br>5. For added resistance, you can loop a resistance band over your toes and anchor it under your heel, or use a specialized tib bar.",
      de: "1. Setzen Sie sich auf eine Bank oder stellen Sie sich an eine Wand mit den Fersen auf dem Boden und den Zehen nach oben gerichtet.<br><br>2. Halten Sie Ihre Fersen unten und heben Sie Ihre Zehen langsam zu Ihren Schienbeinen an, wobei Sie den Muskel an der Vorderseite Ihres Unterschenkels (Tibialis anterior) anspannen.<br><br>3. Halten Sie die Kontraktion kurz.<br><br>4. Senken Sie Ihre Zehen langsam in die Ausgangsposition zurück.<br><br>5. Für zusätzlichen Widerstand können Sie ein Widerstandsband über Ihre Zehen legen und es unter Ihrer Ferse verankern, oder eine spezielle Tibialis-Stange verwenden."
    }
  },
  //Gesäß (Glutes)
    {
      id: 20,
      favorit: 0,
      name: "Barbell Hip Thrust",
      muscleGroup: "Glutes",
      category: "Lower body",
      effectiveness: 3,
  difficulty: "Beginner",
  primeMuscle: ["Gluteus Maximus"],
      secondaryMuscle: ["Hamstrings", "Adductors", "Quadriceps"],
      equipment: "Barbell",
      url: "https://www.youtube.com/embed/EF7jXP17DPE",
      description: {
        de: "Effektiv, aber oft unkomfortabel im Setup.",
        en: "Effective, but often uncomfortable to set up."
      },
      steps: {
        en: "1. Sit on the floor with your upper back against a bench and a barbell over your hips.<br><br>2. Roll the barbell so it's directly over your hips, padding if necessary.<br><br>3. Drive through your heels, lifting your hips towards the ceiling until your body forms a straight line from shoulders to knees.<br><br>4. Squeeze your glutes at the top.<br><br>5. Slowly lower your hips back down.",
        de: "1. Setzen Sie sich mit dem oberen Rücken an eine Bank und einer Langhantel über Ihren Hüften auf den Boden.<br><br>2. Rollen Sie die Langhantel so, dass sie sich direkt über Ihren Hüften befindet, polstern Sie sie bei Bedarf.<br><br>3. Drücken Sie sich durch die Fersen und heben Sie Ihre Hüften zur Decke, bis Ihr Körper eine gerade Linie von den Schultern bis zu den Knien bildet.<br><br>4. Spannen Sie Ihre Gesäßmuskeln am oberen Punkt an.<br><br>5. Senken Sie Ihre Hüften langsam wieder ab."
      }
    },
    {
      id: 71,
      favorit: 0,
      name: "Walking Lunges",
      muscleGroup: "Glutes",
      category: "Lower body",
      effectiveness: 5,
  difficulty: "Intermediate",
  primeMuscle: ["Gluteus Maximus", "Gluteus Medius"],
      secondaryMuscle: ["Quadriceps", "Hamstrings", "Adductors", "Core"],
      equipment: "Dumbbell",
      url: "https://www.youtube.com/embed/eFWCn5iEbTU",
      description: {
        de: "Top Übung für die gesamte Gesäßmuskulatur.",
        en: "Top exercise for the entire gluteal muscle group."
      },
      steps: {
        en: "1. Stand with your feet hip-width apart, holding a dumbbell in each hand.<br><br>2. Take a large step forward with one leg, lowering your hips until both knees are bent at approximately a 90-degree angle.<br><br>3. Push off your back foot and bring it forward to meet the front foot, or immediately step into the next lunge with the other leg.<br><br>4. Continue alternating legs as you walk forward.",
        de: "1. Stellen Sie sich hüftbreit auseinander, mit einer Kurzhantel in jeder Hand.<br><br>2. Machen Sie einen großen Schritt nach vorne mit einem Bein und senken Sie Ihre Hüften, bis beide Knie ungefähr einen 90-Grad-Winkel bilden.<br><br>3. Stoßen Sie sich mit dem hinteren Fuß ab und ziehen Sie ihn nach vorne, um den vorderen Fuß zu treffen, oder machen Sie sofort den nächsten Ausfallschritt mit dem anderen Bein.<br><br>4. Wechseln Sie die Beine ab, während Sie vorwärts gehen."
      }
    },
    {
      id: 72,
      favorit: 0,
      name: "Cable Kickbacks",
      muscleGroup: "Glutes",
      category: "Lower body",
      effectiveness: 4,
  difficulty: "Beginner",
  primeMuscle: ["Gluteus Maximus"],
      secondaryMuscle: ["Hamstrings", "Erector Spinae"],
      equipment: "Cable",
      url: "https://www.youtube.com/embed/SqO-VUEak2M",
      description: {
        de: "Gute Isolationsübung für den oberen Gluteus Maximus.",
        en: "Good isolation exercise for the upper gluteus maximus."
      },
      steps: {
        en: "1. Attach an ankle cuff to a low cable pulley and then to one of your ankles.<br><br>2. Stand facing the cable machine, holding onto the frame for support.<br><br>3. Keeping your leg straight or slightly bent, kick your leg backward and upward, focusing on squeezing your glutes.<br><br>4. Slowly return your leg to the starting position.<br><br>5. Complete all reps on one side before switching to the other.",
        de: "1. Befestigen Sie eine Knöchelmanschette an einem niedrigen Kabelzug und dann an einem Ihrer Knöchel.<br><br>2. Stellen Sie sich mit dem Gesicht zur Kabelmaschine und halten Sie sich am Rahmen fest.<br><br>3. Halten Sie Ihr Bein gerade oder leicht gebeugt und treten Sie es nach hinten und oben, wobei Sie sich auf das Anspannen Ihrer Gesäßmuskeln konzentrieren.<br><br>4. Führen Sie Ihr Bein langsam in die Ausgangsposition zurück.<br><br>5. Absolvieren Sie alle Wiederholungen auf einer Seite, bevor Sie zur anderen wechseln."
      }
    },
    {
      id: 73,
      favorit: 0,
      name: "Frog Pumps",
      muscleGroup: "Glutes",
      category: "Lower body",
      effectiveness: 2,
  difficulty: "Beginner",
  primeMuscle: ["Gluteus Maximus"],
      secondaryMuscle: [],
      equipment: "None",
      url: "https://www.youtube.com/embed/wklI-e2WpFQ",
      description: {
        de: "Wenig effektiv für Hypertrophie.",
        en: "Not very effective for hypertrophy."
      },
      steps: {
        en: "1. Lie on your back with your knees bent and feet together, allowing your knees to fall open to the sides (like a frog).<br><br>2. Bring your heels close to your glutes.<br><br>3. Drive your hips upward, squeezing your glutes at the top.<br><br>4. Slowly lower your hips back down.",
        de: "1. Legen Sie sich auf den Rücken, die Knie angewinkelt und die Füße zusammen, lassen Sie die Knie zu den Seiten fallen (wie ein Frosch).<br><br>2. Bringen Sie Ihre Fersen nah an Ihre Gesäßmuskeln.<br><br>3. Drücken Sie Ihre Hüften nach oben und spannen Sie dabei Ihre Gesäßmuskeln am oberen Punkt an.<br><br>4. Senken Sie Ihre Hüften langsam wieder ab."
      }
    },
    {
      id: 74,
      favorit: 0,
      name: "Step-ups (Weighted)",
      muscleGroup: "Glutes",
      category: "Lower body",
      effectiveness: 4,
  difficulty: "Intermediate",
  primeMuscle: ["Gluteus Maximus", "Gluteus Medius"],
      secondaryMuscle: ["Quadriceps", "Hamstrings", "Core"],
      equipment: "Dumbbell",
      url: "https://www.youtube.com/embed/37tVohr7LcE",
      description: {
        de: "Gute funktionelle unilaterale Übung, betont obere Glutes.",
        en: "Good functional unilateral exercise, emphasizes the upper glutes."
      },
      steps: {
        en: "1. Stand in front of a sturdy box or bench, holding a dumbbell in each hand.<br><br>2. Place one foot firmly on the box.<br><br>3. Drive through your elevated heel to step up onto the box, bringing your trailing leg up to meet the first.<br><br>4. Step back down with control, alternating the lead leg for each repetition or completing all reps on one side before switching.",
        de: "1. Stellen Sie sich vor eine stabile Kiste oder Bank und halten Sie in jeder Hand eine Kurzhantel.<br><br>2. Stellen Sie einen Fuß fest auf die Kiste.<br><br>3. Drücken Sie sich durch die erhöhte Ferse, um auf die Kiste zu steigen, und ziehen Sie Ihr nachfolgendes Bein nach, um das erste zu treffen.<br><br>4. Steigen Sie kontrolliert wieder herunter, wechseln Sie das führende Bein für jede Wiederholung oder absolvieren Sie alle Wiederholungen auf einer Seite, bevor Sie wechseln."
      }
    },
    {
      id: 75,
      favorit: 0,
      name: "Barbell Glute Bridge",
      muscleGroup: "Glutes",
      category: "Lower body",
      effectiveness: 3,
  difficulty: "Beginner",
  primeMuscle: ["Gluteus Maximus"],
      secondaryMuscle: ["Hamstrings", "Adductors"],
      equipment: "Barbell",
      url: "https://www.youtube.com/embed/DQv1IMQDbE4",
      description: {
        de: "Einfacher als Hip Thrust, aber weniger ROM.",
        en: "Simpler than the hip thrust, but with less range of motion."
      },
      steps: {
        en: "1. Lie on your back with your knees bent, feet flat on the floor, and a barbell resting across your hips (pad if needed).<br><br>2. Drive through your heels, lifting your hips off the floor towards the ceiling.<br><br>3. Squeeze your glutes at the top, forming a straight line from your shoulders to your knees.<br><br>4. Slowly lower your hips back down to the starting position.",
        de: "1. Legen Sie sich auf den Rücken, die Knie angewinkelt, die Füße flach auf dem Boden und eine Langhantel ruht über Ihren Hüften (bei Bedarf polstern).<br><br>2. Drücken Sie sich durch die Fersen, heben Sie Ihre Hüften vom Boden zur Decke.<br><br>3. Spannen Sie Ihre Gesäßmuskeln am oberen Punkt an und bilden Sie eine gerade Linie von Ihren Schultern bis zu Ihren Knien.<br><br>4. Senken Sie Ihre Hüften langsam in die Ausgangsposition zurück."
      }
    },
    {
      id: 76,
      favorit: 0,
      name: "Hip Abduction Machine (Seated/Standing)",
      muscleGroup: "Glutes",
      category: "Lower body",
      effectiveness: 5,
  difficulty: "Novice",
  primeMuscle: ["Gluteus Maximus", "Gluteus Medius"],
      secondaryMuscle: ["Tensor Fasciae Latae (TFL)"],
      equipment: "Machine",
      url: "https://www.youtube.com/embed/uwKOs7z3O3g",
      description: {
        de: "Top Isolationsübung für die seitlichen/oberen Gesäßmuskeln.",
        en: "Top isolation exercise for the lateral/upper glutes."
      },
      steps: {
        en: "1. **Seated:** Sit on the machine with your back flat against the pad and your knees against the outer pads. Push your legs outwards against the resistance.<br><br>2. **Standing:** Stand on the machine with one leg against the pad. Push your leg outwards to the side against the resistance.<br><br>3. In both variations, focus on squeezing your glutes as you abduct your legs.<br><br>4. Slowly return to the starting position.",
        de: "1. **Sitzend:** Setzen Sie sich auf die Maschine mit dem Rücken flach gegen das Polster und den Knien gegen die äußeren Polster. Drücken Sie Ihre Beine gegen den Widerstand nach außen.<br><br>2. **Stehend:** Stellen Sie sich auf die Maschine mit einem Bein gegen das Polster. Drücken Sie Ihr Bein gegen den Widerstand zur Seite nach außen.<br><br>3. Bei beiden Variationen konzentrieren Sie sich darauf, Ihre Gesäßmuskeln anzuspannen, während Sie Ihre Beine abduzieren.<br><br>4. Kehren Sie langsam in die Ausgangsposition zurück."
      }
    },
    {
      id: 27,
      favorit: 0,
      name: "45° Back Extension (Glute Focused)",
      muscleGroup: "Glutes",
      category: "Lower body",
      effectiveness: 5,
  difficulty: "Beginner",
  primeMuscle: ["Gluteus Maximus"],
      secondaryMuscle: ["Hamstrings (Hip Extension)", "Erector Spinae"],
      equipment: "Machine",
      url: "https://www.youtube.com/embed/5_ejbGfdAQE",
      description: {
        de: "Top Übung für Glutes/Hams in gedehnter und verkürzter Position.",
        en: "Top exercise for glutes and hamstrings in stretched and shortened positions."
      },
      steps: {
        en: "1. Adjust the machine so your hips are at the top of the pad and your heels are secured.<br><br>2. Cross your arms over your chest or hold a weight to your chest.<br><br>3. Hinge at your hips, lowering your upper body until it's almost perpendicular to the floor.<br><br>4. Squeeze your glutes to bring your torso back up, avoiding excessive hyperextension of your lower back.",
        de: "1. Stellen Sie die Maschine so ein, dass sich Ihre Hüften am oberen Rand des Polsters befinden und Ihre Fersen gesichert sind.<br><br>2. Verschränken Sie Ihre Arme vor der Brust oder halten Sie ein Gewicht an die Brust.<br><br>3. Beugen Sie sich in den Hüften und senken Sie Ihren Oberkörper, bis er fast senkrecht zum Boden steht.<br><br>4. Spannen Sie Ihre Gesäßmuskeln an, um Ihren Oberkörper wieder nach oben zu bringen, vermeiden Sie dabei eine übermäßige Überstreckung des unteren Rückens."
      }
    },
    {
      id: 120,
      favorit: 0,
      name: "Banded Side Walks / Monster Walks",
      muscleGroup: "Glutes",
      category: "Lower body",
      effectiveness: 2,
  difficulty: "Beginner",
  primeMuscle: ["Gluteus Maximus", "Gluteus Medius"],
      secondaryMuscle: ["Tensor Fasciae Latae (TFL)"],
      equipment: "None",
      url: "https://www.youtube.com/embed/po3I8qoRC2c",
      description: {
        de: "Eher für Warm-up/Aktivierung geeignet als für Hypertrophie.",
        en: "More suited for warm-up/activation than hypertrophy."
      },
      steps: {
        en: "1. Place a resistance band around your ankles, knees, or thighs (higher up is easier).<br><br>2. **Side Walks:** Take small, shuffling steps to the side, maintaining tension on the band throughout.<br><br>3. **Monster Walks:** Take small steps forward and slightly outward at a diagonal, creating a wide 'monster' stance, always keeping tension on the band.<br><br>4. Keep a slight bend in your knees and a controlled pace.",
        de: "1. Legen Sie ein Widerstandsband um Ihre Knöchel, Knie oder Oberschenkel (höher oben ist einfacher).<br><br>2. **Seitliche Gänge:** Machen Sie kleine, schlurfende Schritte zur Seite und halten Sie dabei die Spannung auf dem Band.<br><br>3. **Monster-Gänge:** Machen Sie kleine Schritte nach vorne und leicht nach außen diagonal, um eine breite 'Monster'-Haltung zu erzeugen, und halten Sie dabei immer Spannung auf dem Band.<br><br>4. Halten Sie Ihre Knie leicht gebeugt und ein kontrolliertes Tempo."
      }
    },
    {
      id: 142,
      favorit: 0,
      name: "Smith Machine Lunge (Front Foot Elevated)",
      muscleGroup: "Glutes",
      category: "Lower body",
      effectiveness: 5,
  difficulty: "Intermediate",
  primeMuscle: ["Gluteus Maximus"],
      secondaryMuscle: ["Quadriceps", "Hamstrings", "Adductors"],
      equipment: "Machine",
      url: "https://www.youtube.com/embed/D67vFEHz55A",
      description: {
        de: "Smith Machine Lunge mit vorderem Fuß erhöht für maximalen Glute-Stretch.",
        en: "Smith machine lunge with elevated front foot for maximum glute stretch."
      },
      steps: {
        en: "1. Position a small platform or weight plate in front of the Smith machine.<br><br>2. Place one foot on the elevated surface, directly under the bar, and the other foot behind you.<br><br>3. Unrack the bar and descend into a lunge, allowing your front knee to travel forward over your toes to maximize glute stretch.<br><br>4. Drive through your front heel to return to the starting position.<br><br>5. Complete all reps on one side before switching.",
        de: "1. Stellen Sie eine kleine Plattform oder Hantelscheibe vor die Smith-Maschine.<br><br>2. Stellen Sie einen Fuß auf die erhöhte Fläche, direkt unter die Stange, und den anderen Fuß hinter sich.<br><br>3. Nehmen Sie die Stange aus der Ablage und gehen Sie in einen Ausfallschritt, wobei Sie Ihr vorderes Knie über Ihre Zehen nach vorne bewegen, um die Dehnung der Gesäßmuskeln zu maximieren.<br><br>4. Drücken Sie sich durch die vordere Ferse, um in die Ausgangsposition zurückzukehren.<br><br>5. Absolvieren Sie alle Wiederholungen auf einer Seite, bevor Sie wechseln."
      }
    },
    {
      id: 143,
      favorit: 0,
      name: "Machine Hip Thrust",
      muscleGroup: "Glutes",
      category: "Lower body",
      effectiveness: 4,
  difficulty: "Novice",
  primeMuscle: ["Gluteus Maximus"],
      secondaryMuscle: ["Hamstrings", "Adductors"],
      equipment: "Machine",
      url: "https://www.youtube.com/embed/ZSPmIyX9RZs",
      description: {
        de: "Hip Thrust an einer speziellen Maschine für Komfort und Stabilität.",
        en: "Hip thrust on a special machine for comfort and stability."
      },
      steps: {
        en: "1. Sit in the machine with your back against the backrest and your feet flat on the footplate.<br><br>2. Position the hip pad comfortably across your hips.<br><br>3. Drive through your feet to extend your hips upward against the resistance of the machine.<br><br>4. Squeeze your glutes at the top of the movement.<br><br>5. Slowly lower your hips back to the starting position with control.",
        de: "1. Setzen Sie sich in die Maschine mit dem Rücken an die Rückenlehne und den Füßen flach auf die Fußplatte.<br><br>2. Positionieren Sie das Hüftpolster bequem über Ihren Hüften.<br><br>3. Drücken Sie sich durch Ihre Füße, um Ihre Hüften gegen den Widerstand der Maschine nach oben zu strecken.<br><br>4. Spannen Sie Ihre Gesäßmuskeln am oberen Punkt der Bewegung an.<br><br>5. Senken Sie Ihre Hüften langsam und kontrolliert in die Ausgangsposition zurück."
      }
    },
    {
      id: 144,
      favorit: 0,
      name: "Single-Leg Dumbbell Hip Thrust",
      muscleGroup: "Glutes",
      category: "Lower body",
      effectiveness: 4,
  difficulty: "Intermediate",
  primeMuscle: ["Gluteus Maximus", "Gluteus Medius"],
      secondaryMuscle: ["Hamstrings"],
      equipment: "Dumbbell",
      url: "https://www.youtube.com/embed/lzDgRRuBdqY",
      description: {
        de: "Einbeinige Hip Thrust Variante mit Kurzhantel.",
        en: "Single-leg hip thrust variation with a dumbbell."
      },
      steps: {
        en: "1. Sit on the floor with your upper back against a bench, one foot flat on the floor, and the other leg extended straight or bent with the foot off the ground.<br><br>2. Place a dumbbell across the hip of the leg that's on the ground.<br><br>3. Drive through the heel of your grounded foot, lifting your hips towards the ceiling.<br><br>4. Squeeze your glute at the top, ensuring your hips are level.<br><br>5. Slowly lower your hips back down.<br><br>6. Complete all reps on one side before switching.",
        de: "1. Setzen Sie sich mit dem oberen Rücken an eine Bank auf den Boden, einen Fuß flach auf den Boden und das andere Bein ausgestreckt oder angewinkelt mit dem Fuß vom Boden.<br><br>2. Legen Sie eine Kurzhantel über die Hüfte des Beins, das auf dem Boden ist.<br><br>3. Drücken Sie sich durch die Ferse Ihres geerdeten Fußes und heben Sie Ihre Hüften zur Decke.<br><br>4. Spannen Sie Ihre Gesäßmuskeln am oberen Punkt an und stellen Sie sicher, dass Ihre Hüften waagerecht sind.<br><br>5. Senken Sie Ihre Hüften langsam wieder ab.<br><br>6. Absolvieren Sie alle Wiederholungen auf einer Seite, bevor Sie wechseln."
      }
    },
    {
      id: 5,
      favorit: 0,
      name: "Deadlift (Conventional/Sumo)",
      muscleGroup: "Glutes",
      category: "Lower body",
      effectiveness: 5,
  difficulty: "Intermediate",
  primeMuscle: ["Gluteus Maximus", "Erector Spinae"],
      secondaryMuscle: ["Hamstrings (Hip Extension)", "Quadriceps", "Trapezius (Upper)", "Trapezius (Mid)", "Latissimus Dorsi", "Forearms", "Core"],
      equipment: "Barbell",
      url: "https://www.youtube.com/embed/ZaTM37cfiDs",
      description: {
        de: "Komplexe Grundübung, sehr effektiv für Gesamtstärke, moderat für reine Rückenhypertrophie.",
        en: "Complex compound lift, highly effective for total strength, moderate for pure back hypertrophy."
      },
      steps: {
        en: "1. Stand with your feet hip-width apart, with a barbell on the floor in front of you.<br><br>2. Hinge at your hips and bend your knees to grab the barbell.<br><br>3. Keeping your back straight, lift the barbell off the floor.<br><br>4. Stand up straight, squeezing your glutes.<br><br>5. Lower the barbell back to the floor.",
        de: "1. Stellen Sie sich mit hüftbreit auseinander stehenden Füßen hin, mit einer Langhantel auf dem Boden vor Ihnen.<br><br>2. Beugen Sie sich in den Hüften und beugen Sie die Knie, um die Langhantel zu greifen.<br><br>3. Heben Sie die Langhantel mit geradem Rücken vom Boden ab.<br><br>4. Stehen Sie gerade auf und spannen Sie dabei Ihre Gesäßmuskeln an.<br><br>5. Senken Sie die Langhantel wieder auf den Boden."
      }
    },
    {
      id: 145,
      favorit: 0,
      name: "Cable Hip Abduction",
      muscleGroup: "Glutes",
      category: "Lower body",
      effectiveness: 3,
  difficulty: "Beginner",
  primeMuscle: ["Gluteus Medius", "Gluteus Minimus"],
      secondaryMuscle: ["Tensor Fasciae Latae (TFL)"],
      equipment: "Cable",
      url: "https://www.youtube.com/embed/c-tYIj_23-s",
      description: {
        de: "Isolationsübung für die seitliche Gesäßmuskulatur.",
        en: "Isolation exercise for the side glutes."
      },
      steps: {
        en: "1. Stand with your side to a low cable pulley with an ankle cuff attached.<br><br>2. Attach the cuff to your outside ankle.<br><br>3. Raise your leg out to the side, keeping it straight.<br><br>4. Squeeze your glutes at the top.<br><br>5. Lower your leg slowly.<br><br>6. Repeat on the other side.",
        de: "1. Stellen Sie sich seitlich zu einem niedrigen Kabelzug mit befestigter Knöchelmanschette.<br><br>2. Befestigen Sie die Manschette an Ihrem äußeren Knöchel.<br><br>3. Heben Sie Ihr Bein seitlich an und halten Sie es dabei gerade.<br><br>4. Spannen Sie Ihre Gesäßmuskeln oben an.<br><br>5. Senken Sie Ihr Bein langsam wieder ab.<br><br>6. Auf der anderen Seite wiederholen."
      }
    },


//forearms

{
  id: 188,
  favorit: 0,
  name: "Plate Pinches",
  muscleGroup: "Forearm",
  category: "Upper body",
  effectiveness: 4,
  difficulty: "Beginner",
  primeMuscle: ["Finger Flexors","Wrist Flexors"],
  secondaryMuscle: [],
  equipment: "Barbell",
  url: "",
  description: {
    de: "Halten von Hantelscheiben mit den Fingerspitzen zur Stärkung der Griffkraft.",
    en: "Pinching weight plates with fingertips to build grip strength."
  },
  steps: {
    en: "1. Pinch one or two plates together using fingertips.<br><br>2. Keep shoulders relaxed and arms straight.<br><br>3. Hold for 20-45 seconds.<br><br>4. Switch hands and repeat.",
    de: "1. Klemmen Sie eine oder zwei Hantelscheiben zwischen die Fingerspitzen.<br><br>2. Schultern entspannt, Arme gestreckt halten.<br><br>3. 20-45 Sekunden halten.<br><br>4. Hand wechseln und wiederholen."
  }
},
{
  id: 172,
  favorit: 0,
  name: "Plate Pinches",
  muscleGroup: "Forearm",
  category: "Upper body",
  effectiveness: 4,
  difficulty: "Beginner",
  primeMuscle: ["Finger Flexors","Wrist Flexors"],
  secondaryMuscle: [],
  equipment: "Dumbbell",
  url: "",
  description: {
    de: "Halten von Hantelscheiben mit den Fingerspitzen zur Stärkung der Griffkraft.",
    en: "Pinching weight plates with fingertips to build grip strength."
  },
  steps: {
    en: "1. Pinch one or two plates together using fingertips.<br><br>2. Keep shoulders relaxed and arms straight.<br><br>3. Hold for 20-45 seconds.<br><br>4. Switch hands and repeat.",
    de: "1. Klemmen Sie eine oder zwei Hantelscheiben zwischen die Fingerspitzen.<br><br>2. Schultern entspannt, Arme gestreckt halten.<br><br>3. 20-45 Sekunden halten.<br><br>4. Hand wechseln und wiederholen."
  }
},
{
  id: 173,
  favorit: 0,
  name: "Farmers Carry",
  muscleGroup: "Forearm",
  category: "Upper body",
  effectiveness: 4,
  difficulty: "Beginner",
  primeMuscle: ["Finger Flexors", "Wrist Flexors"],
  secondaryMuscle: ["Brachioradialis", "Traps"],
  equipment: "Dumbbells",
  url: "",
  description: {
    de: "Gehen mit schweren Kurzhanteln zur Verbesserung der Griffkraft und Unterarmstabilität.",
    en: "Walking while holding heavy dumbbells to build grip strength and stability."
  },
  steps: {
    en: "1. Pick up two heavy dumbbells with a firm grip.<br><br>2. Stand upright and engage core.<br><br>3. Walk forward for a set distance or time.<br><br>4. Lower weights safely.",
    de: "1. Nehmen Sie zwei schwere Kurzhanteln mit festem Griff auf.<br><br>2. Aufrecht stehen und Core anspannen.<br><br>3. Eine bestimmte Strecke oder Zeit gehen.<br><br>4. Gewichte sicher absetzen."
  }
},
{
  id: 174,
  favorit: 0,
  name: "Barbell Reverse Grip Curl",
  muscleGroup: "Forearm",
  category: "Upper body",
  effectiveness: 5,
  difficulty: "Intermediate",
  primeMuscle: ["Wrist Extensors","Wrist Flexors" ],
  secondaryMuscle: ["Brachioradialis"],
  equipment: "Barbell",
  url: "https://www.youtube.com/embed/FkF2ug_Oyyk",
  description: {
    de: "Curls mit Obergriff zur Betonung der Unterarmstrecker.",
    en: "Curls using an overhand grip to target the forearm extensors."
  },
  steps: {
    en: "1. Hold a barbell with an overhand grip shoulder-width apart.<br><br>2. Keep elbows close to body.<br><br>3. Curl weight upward while keeping wrists straight.<br><br>4. Lower slowly.",
    de: "1. Halten Sie die Langhantel schulterbreit im Obergriff.<br><br>2. Ellbogen nah am Körper halten.<br><br>3. Gewicht nach oben curlen, Handgelenke gerade.<br><br>4. Langsam absenken."
  }
},
{
  id: 175,
  favorit: 0,
  name: "Hand Grippers",
  muscleGroup: "Forearm",
  category: "Upper body",
  effectiveness: 3,
  difficulty: "Novice",
  primeMuscle: ["Finger Flexors", "Wrist Flexors"],
  secondaryMuscle: [],
  equipment: "None",
  url: "",
  description: {
    de: "Grifftrainer zusammendrücken zur Verbesserung der Fingerkraft.",
    en: "Squeezing a hand gripper to build finger strength."
  },
  steps: {
    en: "1. Hold a gripper in one hand.<br><br>2. Squeeze until the handles touch.<br><br>3. Release slowly.<br><br>4. Switch hands after reps.",
    de: "1. Grifftrainer in eine Hand nehmen.<br><br>2. Zusammendrücken bis die Griffe sich berühren.<br><br>3. Langsam lösen.<br><br>4. Nach Wiederholungen die Hand wechseln."
  }
},
{
  id: 176,
  favorit: 0,
  name: "Dumbbell Wrist Curl",
  muscleGroup: "Forearm",
  category: "Upper body",
  effectiveness: 6,
  difficulty: "Intermediate",
  primeMuscle: ["Wrist Flexors","Finger Flexors"],
  secondaryMuscle: [],
  equipment: "Dumbbell",
  url: "https://www.youtube.com/embed/2wPpcJBe03o",
  description: {
    de: "Handgelenkcurls im Sitzen zur Stärkung der Unterarmbeuger.",
    en: "Seated wrist curls to strengthen the forearm flexors."
  },
  steps: {
    en: "1. Sit and rest forearms on thighs with palms up.<br><br>2. Let dumbbells roll to fingertips.<br><br>3. Curl wrists upward.<br><br>4. Lower slowly.",
    de: "1. Setzen Sie sich und legen Sie die Unterarme auf die Oberschenkel, Handflächen oben.<br><br>2. Hantel bis zu den Fingerspitzen abrollen lassen.<br><br>3. Handgelenke nach oben curlen.<br><br>4. Langsam absenken."
  }
},
{
  id: 177,
  favorit: 0,
  name: "Dumbbell Wrist Extension",
  muscleGroup: "Forearm",
  category: "Upper body",
  effectiveness: 6,
  difficulty: "Intermediate",
  primeMuscle: ["Wrist Extensors"],
  secondaryMuscle: ["Brachioradialis"],
  equipment: "Dumbbell",
  url: "https://www.youtube.com/embed/UcwgCTkVvIQ",
  description: {
    de: "Handgelenkstreckertraining mit Kurzhanteln.",
    en: "Dumbbell wrist extensions to train the wrist extensor muscles."
  },
  steps: {
    en: "1. Sit and rest forearms on thighs, palms facing down.<br><br>2. Lift dumbbells by extending wrists.<br><br>3. Hold briefly at the top.<br><br>4. Lower slow and controlled.",
    de: "1. Setzen Sie sich und legen Sie Unterarme auf die Oberschenkel, Handflächen nach unten.<br><br>2. Hanteln durch Strecken der Handgelenke heben.<br><br>3. Oben kurz halten.<br><br>4. Langsam absenken."
  }
},

{
  id: 179,
  favorit: 0,
  name: "Cable Wrist Curl",
  muscleGroup: "Forearm",
  category: "Upper body",
  effectiveness: 6,
  difficulty: "Beginner",
  primeMuscle: ["Wrist Flexors","Finger Flexors"],
  secondaryMuscle: [],
  equipment: "Cable Machine",
  url: "https://www.youtube.com/embed/WVAaKJvToe0",
  description: {
    de: "Handgelenkcurls am Kabelzug für konstanten Widerstand.",
    en: "Cable wrist curls for constant tension throughout the movement."
  },
  steps: {
    en: "1. Use a handle attachment. The cable should be set all the way to the bottom of the machine.<br><br>2. Face away from the cable machine. Stagger your stance so you have a better base of support.<br><br>3. Start with your elbow at a 90 degree angle with your palm facing down. Flex and extend at the wrist.",
    de: "1. Verwenden Sie einen Griffaufsatz. Das Kabel sollte bis ganz nach unten an der Maschine eingestellt sein.<br><br>2. Drehen Sie sich von der Kabelmaschine weg. Stellen Sie sich versetzt hin, damit Sie einen besseren Halt haben.<br><br>3. Beginnen Sie mit einem 90-Grad-Winkel im Ellbogen und der Handfläche nach unten. Beugen und strecken Sie das Handgelenk."
  }
},
{
  id: 180,
  favorit: 0,
  name: "Cable Wrist Extension",
  muscleGroup: "Forearm",
  category: "Upper body",
  effectiveness: 5,
  difficulty: "Beginner",
  primeMuscle: ["Wrist Extensors"],
  secondaryMuscle: ["Brachioradialis"],
  equipment: "Cable Machine",
  url: "https://www.youtube.com/embed/_JiYn7I9F_k",
  description: {
    de: "Handgelenkstreckung am Kabelzug für gleichmäßige Spannung.",
    en: "Cable wrist extensions for consistent resistance."
  },
  steps: {
    en: "1. Use a handle attachment with an overhand grip. The cable should be set all the way to the bottom of the machine.<br><br>2. Face away from the cable machine. Stagger your stance so you have a better base of support.<br><br>3. Start with your elbow at a 90 degree angle with your palm facing down. Flex and extend at the wrist.",
    de: "1. Verwenden Sie einen Griffaufsatz im Obergriff. Das Kabel sollte bis ganz nach unten an der Maschine eingestellt sein.<br><br>2. Drehen Sie sich von der Kabelmaschine weg. Stellen Sie sich versetzt hin, damit Sie einen besseren Halt haben.<br><br>3. Beginnen Sie mit einem 90-Grad-Winkel im Ellbogen und der Handfläche nach unten. Beugen und strecken Sie das Handgelenk."
  }
},
//{
//  id: 181,
//  favorit: 0,
//  name: "Machine Grip Trainer",
//  muscleGroup: "Forearm",
//  category: "Upper body",
//  effectiveness: 5,
//  difficulty: 2,
//  primeMuscle: ["Finger Flexors", "Thumb Flexors"],
//  secondaryMuscle: ["Wrist Flexors"],
//  equipment: "Grip Machine",
//  url: "",
//  description: {
//    de: "Griffmaschine zur Steigerung der Griff- und Unterarmkraft.",
//    en: "Grip machine training to increase forearm and grip strength."
//  },
//  steps: {
//    en: "1. Sit at the machine and grab the handles.<br><br>2. Squeeze handles together fully.<br><br>3. Release slowly.<br><br>4. Repeat to fatigue.",
//    de: "1. Setzen Sie sich an die Griffmaschine und greifen Sie die Griffe.<br><br>2. Griffe vollständig zusammendrücken.<br><br>3. Langsam lösen.<br><br>4. Bis zur Ermüdung wiederholen."
//  }
//},
{
  id: 182,
  favorit: 0,
  name: "Dead Hang",
  muscleGroup: "Forearm",
  category: "Upper body",
  effectiveness: 4,
  difficulty: "Beginner",
  primeMuscle: ["Finger Flexors", "Wrist Flexors"],
  secondaryMuscle: ["Brachioradialis", "Lats"],
  equipment: "None",
  url: "https://www.youtube.com/embed/XPcT3capkyk",
  description: {
    de: "Isometrisches Hängen an einer Stange.",
    en: "Isometric hangs on a pull-up bar."
  },
  steps: {
    en: "1. Grip a pull-up bar with palms facing forward.<br><br>2. Hang with arms fully extended.<br><br>3. Hold for recommended amount of time, keeping your core engaged.<br><br>4. Rest and repeat.",
    de: "1. Greifen Sie eine Klimmzugstange mit den Handflächen nach vorne gerichtet. <br><br>2. Hängen Sie sich mit vollständig ausgestreckten Armen daran. <br><br>3. Halten Sie diese Position für die empfohlene Zeit und spannen Sie dabei Ihre Körpermitte an."
  }
},
{
  id: 183,
  favorit: 0,
  name: "Dumbbell Reverse Grip Curl",
  muscleGroup: "Forearm",
  category: "Upper body",
  effectiveness: 5,
  difficulty: "Intermediate",
  primeMuscle: ["Wrist Extensors", "Wrist Flexors"],
  secondaryMuscle: ["Brachioradialis"],
  equipment: "Dumbbell",
  url: "https://www.youtube.com/embed/59EuFkx9akU",
  description: {
    de: "Curls mit Obergriff zur Betonung der Unterarmstrecker.",
    en: "Curls using an overhand grip to target the forearm extensors."
  },
  steps: {
    en: "1. Hold Dumbbells with an overhand grip shoulder-width apart.<br><br>2. Keep elbows close to body.<br><br>3. Curl weight upward while keeping wrists straight.<br><br>4. Lower slowly.",
    de: "1. Halten Sie die Kurzhanteln schulterbreit im Obergriff.<br><br>2. Ellbogen nah am Körper halten.<br><br>3. Gewicht nach oben curlen, Handgelenke gerade.<br><br>4. Langsam absenken."
  }
},
{
  id: 184,
  favorit: 0,
  name: "Cable Bar Reverse Grip Curl",
  muscleGroup: "Forearm",
  category: "Upper body",
  effectiveness: 5,
  difficulty: "Beginner",
  primeMuscle: ["Wrist Extensors","Wrist Flexors" ],
  secondaryMuscle: ["Brachioradialis"],
  equipment: "Dumbbell",
  url: "https://www.youtube.com/embed/QbQcUdX7rqA",
  description: {
    de: "Cable Bar Curls mit Obergriff zur Betonung der Unterarmstrecker.",
    en: "Cable Bar Curls using an overhand grip to target the forearm extensors."
  },
  steps: {
    en: "1. Use a bar attachment. The cable should be set all the way to the bottom of the machine.<br><br>2. Face the cable machine.<br><br>3. Stagger your stance so you have a better base of support. Face your palm down. Flex at the elbow and extend.",
    de: "1. Verwenden Sie einen Stangenaufsatz. Das Kabel sollte ganz unten an der Maschine befestigt sein.<br><br>2. Stellen Sie sich vor die Kabelmaschine.<br><br>3. Stellen Sie sich mit versetzten Füßen hin, damit Sie einen besseren Halt haben. Die Handflächen zeigen nach unten. Beugen Sie die Ellbogen und strecken Sie sie wieder."
  }
},
{
  id: 185,
  favorit: 0,
  name: "Barbell Wrist Curl",
  muscleGroup: "Forearm",
  category: "Upper body",
  effectiveness: 6,
  difficulty: "Beginner",
  primeMuscle: ["Wrist Flexors","Finger Flexors"],
  secondaryMuscle: [],
  equipment: "Barbell",
  url: "https://www.youtube.com/embed/-iTo53bhtGQ",
  description: {
    de: "Handgelenkcurls im Sitzen zur Stärkung der Unterarmbeuger.",
    en: "Seated wrist curls to strengthen the forearm flexors."
  },
  steps: {
    en: "1. Sit and rest forearms on thighs with palms up.<br><br>2. Let the Barbell roll to fingertips.<br><br>3. Curl wrists upward.<br><br>4. Lower slowly.",
    de: "1. Setzen Sie sich und legen Sie die Unterarme auf die Oberschenkel, Handflächen oben.<br><br>2. Hantel bis zu den Fingerspitzen abrollen lassen.<br><br>3. Handgelenke nach oben curlen.<br><br>4. Langsam absenken."
  }
},
{
  id: 186,
  favorit: 0,
  name: "Reverse Barbell Wrist Extension",
  muscleGroup: "Forearm",
  category: "Upper body",
  effectiveness: 6,
  difficulty: "Intermediate",
  primeMuscle: ["Wrist Extensors"],
  secondaryMuscle: ["Brachioradialis"],
  equipment: "Barbell",
  url: "https://www.youtube.com/embed/B0royWb-3EY",
  description: {
    de: "Handgelenkstreckertraining mit Langhantel.",
    en: "Barbell wrist extensions to train the wrist extensor muscles."
  },
  steps: {
    en: "1. Sit and rest forearms on thighs, palms facing down.<br><br>2. Lift Barbell by extending wrists.<br><br>3. Hold briefly at the top.<br><br>4. Lower slow and controlled.",
    de: "1. Setzen Sie sich und legen Sie Unterarme auf die Oberschenkel, Handflächen nach unten.<br><br>2. Hantel durch Strecken der Handgelenke heben.<br><br>3. Oben kurz halten.<br><br>4. Langsam absenken."
  }
},
];



const muscleGroups = {
"Upper body": ["Chest", "Shoulders", "Biceps", "Triceps","Forearm"],
"Core": ["Abs", "Back"],
"Lower body": ["Quadrizeps", "Hamstrings", "Calves", "Glutes"]
};
const muscleCategoryTrans = {
  en: {
    "Upper body": "Upper body",
    "Core": "Core",
    "Lower body": "Lower body"
  },
  de: {
    "Upper body": "Oberkörper",
    "Core": "Rumpf",
    "Lower body": "Unterkörper"
  }
};

const muscleGroupTrans = {
  en: {
    "Chest": "Chest",
    "Shoulders": "Shoulders",
    "Biceps": "Biceps",
    "Triceps": "Triceps",
    "Abs": "Abs",
    "Back": "Back",
    "Quadrizeps": "Quadriceps",
    "Hamstrings": "Hamstrings",
    "Calves": "Calves",
    "Forearm": "Forearm",
    "Glutes": "Glutes"
  },
  de: {
    "Chest": "Brust",
    "Shoulders": "Schultern",
    "Biceps": "Bizeps",
    "Triceps": "Trizeps",
    "Abs": "Bauch",
    "Back": "Rücken",
    "Quadrizeps": "Quadrizeps",
    "Hamstrings": "Oberschenkelrückseite",
    "Calves": "Waden",
    "Forearm": "Unterarm",
    "Glutes": "Gesäß"
  }
};
const equipmentTypes = ["None", "Barbell", "Dumbbell", "Cable", "Machine"];
const equipmentTypestrans = {
  en: {
    "None": "None",
    "Barbell": "Barbell",
    "Dumbbell": "Dumbbell",
    "Cable": "Cable",
    "Machine": "Machine"
  },
  de: {
    "None": "Keine",
    "Barbell": "Langhantel",
    "Dumbbell": "Kurzhantel",
    "Cable": "Seilzug",
    "Machine": "Gerät"
  }
};
