let lang = "en";
const params = new URLSearchParams(window.location.search);
history.replaceState(null, "", "/");
const type = params.get("t");
let weight = params.get("w");
weight = parseFloat(weight);

window.addEventListener("load", () => {
  if (type !== "mel" || isNaN(weight) || weight <= 0) {
    alert("⚠️ Please scan QR code on the bag to access the guide.");
    return;
  }
  let loadingScreen = document.querySelector(".loading");
  document.querySelector(".wrapper div").classList.add("loaded");
  setTimeout(() => {
    loadingScreen.innerHTML = "";
    setTimeout(() => {
      console.log("removing loading screen");
      loadingScreen.classList.add("hidden");
    }, 1);
  }, 500);
});

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
const steps = document.querySelectorAll(".steps");
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
  step.querySelector("h3").innerText =
    lang === "en" ? "Step " + stepNumber : "Krok " + stepNumber;
  step.querySelector("p").innerText =
    lang === "en"
      ? tutorialDescriptions[stepNumber - 1][0]
      : tutorialDescriptions[stepNumber - 1][1];
}

const aboutImage = document.querySelector(".about-image");
aboutImage.src = "/img/melmak-small.png";
const lemonTekTitle = document.querySelector(".lemon-tek-title");
lemonTekTitle.innerText =
  lang === "en" ? "Lemon Tek Guide" : "Lemon Tek Poradnik";

const guide = document.querySelector(".guide");

if (type === "mel") {
  guideTitle.innerText =
    lang === "en" ? "Melmak Guide" : "Przewodnik po Melmaku";

  aboutTitle.innerText =
    lang === "en" ? "About Melmak & Dosage" : "O Melmaku i dawkowaniu";

  infoTitle.innerText = lang === "en" ? "Melmak Strain" : "Odmiana Melmak";

  infoDescription.innerText =
    lang === "en"
      ? "Melmak is a unique, highly potent Psilocybe cubensis strain known for its thick stems, small caps, and intense effects. It's renowned for deep visual and cognitive experiences."
      : "Melmak to unikalna, niezwykle silna odmiana Psilocybe cubensis, charakteryzująca się grubymi trzonami, niewielkimi kapeluszami i intensywnym działaniem. Słynie z zapewniania głębokich doznań wizualnych i poznawczych.";

  dosageTitle.innerText = lang === "en" ? "Dosage Guide" : "Dawkowanie";

  for (let dosageElement of dosageTypes) {
    let dosageType = dosageElement.classList[1];
    if (dosageType === "micro") {
      dosageElement.innerText = "0.1g - 0.3g";
    } else if (dosageType === "low") {
      dosageElement.innerText = "0.4g - 0.9g";
    } else if (dosageType === "medium") {
      dosageElement.innerText = "1.0g - 1.7g";
    } else if (dosageType === "strong") {
      dosageElement.innerText = "1.8g - 2.6g";
    } else if (dosageType === "heroic") {
      dosageElement.innerText = "2.7g+";
    }
  }

  let dosageDisclaimers = [
    [
      0,
      0.3,
      'Sub-perceptual and grounding. You won\'t experience a "trip" or visuals; instead, expect a subtle enhancement in focus, mood, and creativity. It’s designed to integrate seamlessly into your daily routine.',
      'Dawka subtelna i uziemiająca. Nie doświadczysz "tripu" ani wizualizacji; zamiast tego oczekuj delikatnej poprawy koncentracji, nastroju i kreatywności. Idealna do codziennego funkcjonowania.',
    ],
    [
      0.4,
      0.9,
      'The "Museum Dose." You’ll feel a light body high, heightened senses, and brighter colors. It’s perfect for social settings or nature walks where you want to stay functional but feel a distinct euphoric "spark."',
      'Tzw. "Dawka Muzealna". Poczujesz lekki body high, wyostrzone zmysły i żywsze kolory. Idealna na wyjścia towarzyskie lub spacery na łonie natury, gdzie chcesz zachować sprawność, czując wyraźną euforię.',
    ],
    [
      1.0,
      1.7,
      "A true psychedelic threshold. Due to Melmak’s high potency, this dose introduces flowing patterns, geometric visuals, and deep introspection. Your perception of time and space will begin to shift significantly.",
      "Prawdziwy próg psychodeliczny. Ze względu na wysoką moc Melmaka, ta dawka wprowadza płynne wzory, geometryczne wizualizacje i głęboką introspekcję. Postrzeganie czasu i przestrzeni zacznie się znacząco zmieniać.",
    ],
    [
      1.8,
      2.6,
      'A powerful, immersive journey. Expect heavy visual distortions, intense emotional processing, and a strong physical "body load." This range requires a safe environment, as the line between you and your surroundings starts to blur.',
      "Potężna, immersyjna podróż. Oczekuj silnych zniekształceń wizualnych, intensywnych procesów emocjonalnych i wyraźnego fizycznego obciążenia (body load). Wymaga bezpiecznego otoczenia, ponieważ granica między Tobą a otoczeniem zaczyna się zacierać.",
    ],
    [
      2.7,
      100,
      "Full immersion into the psychedelic void. This leads to total ego dissolution and mystical experiences where physical reality is replaced by complex internal landscapes. Only for experienced voyagers who respect the extreme strength of the Melmak strain.",
      "Pełne zanurzenie w psychodelicznej pustce. Prowadzi do całkowitego rozpuszczenia ego i mistycznych doświadczeń, w których fizyczna rzeczywistość zostaje zastąpiona przez złożone wewnętrzne krajobrazy. Tylko dla doświadczonych podróżników.",
    ],
  ];

  bagContentAmount.innerText = weight + "g";
  bagContentTitle.innerText =
    lang === "en"
      ? "Bag contains " + weight + "g of Melmak"
      : "Torba zawiera " + weight + "g Melmaka";

  for (let e of dosageDisclaimers) {
    if (weight >= e[0] && weight <= e[1]) {
      bagContentDescription.innerText = lang === "en" ? e[2] : e[3];
    }
  }
}
