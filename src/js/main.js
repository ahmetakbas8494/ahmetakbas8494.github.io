// setting default language to polish
let lang = "pl"; // either "en" or "pl"
const isEnglish = lang === "en" ? true : false;
function selectLanguage(en, pl) {
  return isEnglish ? en : pl;
}

// getting parameters from URL
const params = new URLSearchParams(window.location.search);
const type = params.get("t");
let weight = parseFloat(params.get("w"));
// cleaning the URL
//history.replaceState(null, "", "/"); // uncomment if commented

// getting all the elements to update their text content
const guideTitle = document.querySelector(".guide-title");
const aboutTitle = document.querySelector(".about-title");
const infoTitle = document.querySelector(".info-title");
const infoDescription = document.querySelector(".info-description");
const dosageTypes = document.querySelectorAll(".dosage-type");
const dosageTitle = document.querySelector(".dosage-title");
const bagContentAmount = document.querySelector(".bag-content > div");
const bagContentTitle = document.querySelector(".bag-content-title");
const bagContentDescription = document.querySelector(
  ".bag-content-description",
);
const lemonTekTitle = document.querySelector(".lemon-tek-title");
const steps = document.querySelectorAll(".steps");

// getting images to load correct representations of the mushroom
const aboutImage = document.querySelector(".about-image");

let dosageDisclaimers; // defined later based on the type of mushroom

// universal tutorial descriptions for all types of mushrooms
let tutorialDescriptions = [
  [
    "Grind mushrooms into a fine powder to increase the surface area.",
    "Zmiel grzyby na drobny proszek, aby zwiększyć powierzchnię styku.",
  ],
  [
    "Place the mushroom powder into a clean glass or jar.",
    "Umieść proszek grzybowy w czystej szklance lub słoiku.",
  ],
  [
    "Pour fresh lemon or lime juice until the powder is completely covered.",
    "Zalej proszek świeżym sokiem z cytryny lub limonki, aż zostanie całkowicie zakryty.",
  ],
  [
    "Stir well and let it sit for 15–20 minutes, mixing occasionally.",
    "Dobrze wymieszaj i odstaw na 15–20 minut, mieszając co jakiś czas.",
  ],
  [
    "Drink the mixture as a shot or strain it first to remove solids.",
    'Wypij miksturę jako "shot" lub przecedź ją wcześniej, aby usunąć resztki.',
  ],
];

for (let step of steps) {
  let stepNumber = step.getAttribute("step");
  step.querySelector("h3").innerText = selectLanguage(
    "Step " + stepNumber,
    "Krok " + stepNumber,
  );
  step.querySelector("p").innerText = selectLanguage(
    tutorialDescriptions[stepNumber - 1][0],
    tutorialDescriptions[stepNumber - 1][1],
  );
}

// changing text content based on the type of mushroom
// melmak strain
if (type === "mel") {
  dosageDisclaimers = [
    {
      min: 0.1,
      max: 0.3,
      index: 0,
      description: {
        en: 'Sub-perceptual and grounding. You won\'t experience a "trip" or visuals; instead, expect a subtle enhancement in focus, mood, and creativity. It’s designed to integrate seamlessly into your daily routine.',
        pl: 'Dawka subtelna i uziemiająca. Nie doświadczysz "tripu" ani wizualizacji; zamiast tego oczekuj delikatnej poprawy koncentracji, nastroju i kreatywności. Idealna do codziennego funkcjonowania.',
      },
    },

    {
      min: 0.4,
      max: 0.9,
      index: 1,
      description: {
        en: 'The "Museum Dose." You’ll feel a light body high, heightened senses, and brighter colors. It’s perfect for social settings or nature walks where you want to stay functional but feel a distinct euphoric "spark."',
        pl: 'Tzw. "Dawka Muzealna". Poczujesz lekki body high, wyostrzone zmysły i żywsze kolory. Idealna na wyjścia towarzyskie lub spacery na łonie natury, gdzie chcesz zachować sprawność, czując wyraźną euforię.',
      },
    },

    {
      min: 1.0,
      max: 1.7,
      index: 2,
      description: {
        en: "A true psychedelic threshold. Due to Melmak’s high potency, this dose introduces flowing patterns, geometric visuals, and deep introspection. Your perception of time and space will begin to shift significantly.",
        pl: "Prawdziwy próg psychodeliczny. Ze względu na wysoką moc Melmaka, ta dawka wprowadza płynne wzory, geometryczne wizualizacje i głęboką introspekcję. Postrzeganie czasu i przestrzeni zacznie się znacząco zmieniać.",
      },
    },

    {
      min: 1.8,
      max: 2.6,
      index: 3,
      description: {
        en: 'A powerful, immersive journey. Expect heavy visual distortions, intense emotional processing, and a strong physical "body load." This range requires a safe environment, as the line between you and your surroundings starts to blur.',
        pl: "Potężna, immersyjna podróż. Oczekuj silnych zniekształceń wizualnych, intensywnych procesów emocjonalnych i wyraźnego fizycznego obciążenia (body load). Wymaga bezpiecznego otoczenia, ponieważ granica między Tobą a otoczeniem zaczyna się zacierać.",
      },
    },

    {
      min: 2.7,
      max: 100,
      index: 4,
      description: {
        en: "Full immersion into the psychedelic void. This leads to total ego dissolution and mystical experiences where physical reality is replaced by complex internal landscapes. Only for experienced voyagers who respect the extreme strength of the Melmak strain.",
        pl: "Pełne zanurzenie w psychodelicznej pustce. Prowadzi do całkowitego rozpuszczenia ego i mistycznych doświadczeń, w których fizyczna rzeczywistość zostaje zastąpiona przez złożone wewnętrzne krajobrazy. Tylko dla doświadczonych podróżników.",
      },
    },
  ];

  // changing the about image to match the mushroom type
  aboutImage.src = "src/img/melmak-small.png";

  // updating text content based on the language
  guideTitle.innerText = selectLanguage(
    "Melmak Guide",
    "Przewodnik po Melmaku",
  );
  aboutTitle.innerText = selectLanguage(
    "About Melmak & Dosage",
    "O Melmaku i dawkowaniu",
  );
  infoTitle.innerText = selectLanguage("Melmak Strain", "Odmiana Melmak");
  infoDescription.innerText = selectLanguage(
    "Melmak is a unique, highly potent Psilocybe cubensis strain known for its thick stems, small caps, and intense effects. It's renowned for deep visual and cognitive experiences.",
    "Melmak to unikalna, niezwykle silna odmiana Psilocybe cubensis, charakteryzująca się grubymi trzonami, niewielkimi kapeluszami i intensywnym działaniem. Słynie z zapewniania głębokich doznań wizualnych i poznawczych.",
  );
  dosageTitle.innerText = selectLanguage("Dosage Guide", "Dawkowanie");
  bagContentAmount.innerText = weight + "g";
  bagContentTitle.innerText = selectLanguage(
    "Bag contains " + weight + "g of Melmak",
    "Torba zawiera " + weight + "g Melmaka",
  );
  lemonTekTitle.innerText = selectLanguage(
    "Lemon Tek Guide",
    "Lemon Tek Poradnik",
  );

  for (let e of dosageDisclaimers) {
    // matching the dosage type with the disclaimer
    let dosageElement = dosageTypes[e.index];
    let currentDosageDisclaimer = dosageDisclaimers[e.index];
    let dosageType = dosageElement.classList[1];
    if (dosageType === "micro") {
      dosageElement.innerText =
        currentDosageDisclaimer.min +
        "g - " +
        currentDosageDisclaimer.max +
        "g";
    } else if (dosageType === "low") {
      dosageElement.innerText =
        currentDosageDisclaimer.min +
        "g - " +
        currentDosageDisclaimer.max +
        "g";
    } else if (dosageType === "medium") {
      dosageElement.innerText =
        currentDosageDisclaimer.min +
        "g - " +
        currentDosageDisclaimer.max +
        "g";
    } else if (dosageType === "strong") {
      dosageElement.innerText =
        currentDosageDisclaimer.min +
        "g - " +
        currentDosageDisclaimer.max +
        "g";
    } else if (dosageType === "heroic") {
      dosageElement.innerText = currentDosageDisclaimer.min + "g+";
    }

    // looad dosage disclaimers based on the weight of the mushrooms in the bag
    if (weight >= e.min && weight <= e.max) {
      bagContentDescription.innerText = selectLanguage(
        e.description.en,
        e.description.pl,
      );
    }
  }
}
