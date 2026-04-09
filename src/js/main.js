// manually setting default language to polish
// let lang = "pl"; // either "en" or "pl"

// getting parameters from URL
const params = new URLSearchParams(window.location.search);
const type = params.get("t");
let weight = parseFloat(params.get("w").replace(/[^0-9.]/g, ""));
let lang = params.get("l")
// cleaning the URL
//history.replaceState(null, "", "/"); // uncomment if commented

const isEnglish = lang === "en" ? true : false;
function selectLanguage(source) {
  return isEnglish ? source["en"] : source["pl"];
}

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
const tripTimerTitle = document.querySelector(".trip-timer-title");
const tripTimerDescription = document.querySelector(".trip-timer-description");
const tripTimerStart = document.querySelector(".trip-timer-start");
const tripTimerNext = document.querySelector(".trip-timer-next");

// getting images to load correct representations of the mushroom
const aboutImage = document.querySelector(".about-image");

for (let step of steps) {
  let stepNumber = step.getAttribute("step");
  step.querySelector("h3").innerText =
    selectLanguage(lemonTekTranslation.tutorial.step) + " " + stepNumber;
  step.querySelector("p").innerText = selectLanguage(
    lemonTekTranslation.tutorial.descriptions[stepNumber - 1],
  );
}

// changing text content based on the type of mushroom
// melmak strain
if (type === "mel") {
  // changing the about image to match the mushroom type
  aboutImage.src = "src/img/melmak-small.png";

  // updating text content based on the language
  guideTitle.innerText = selectLanguage(guideTranslation.title);
  aboutTitle.innerText = selectLanguage(guideTranslation.about.title);
  infoTitle.innerText = selectLanguage(guideTranslation.info.title);
  infoDescription.innerText = selectLanguage(guideTranslation.info.description);
  dosageTitle.innerText = selectLanguage(dosageTranslation.title);
  bagContentAmount.innerText = weight + "g";
  bagContentTitle.innerText =
    selectLanguage(guideTranslation.bag.content)[0] +
    " " +
    weight +
    selectLanguage(guideTranslation.bag.content)[1];
  lemonTekTitle.innerText = selectLanguage(lemonTekTranslation.title);
  tripTimerTitle.innerText = selectLanguage(timerTranslation.tripTimerTitle);
  tripTimerDescription.innerText = selectLanguage(
    timerTranslation.tripTimerDescription,
  );
  tripTimerStart.innerText = selectLanguage(timerTranslation.tripTimerStart);
  tripTimerNext.innerText = selectLanguage(timerTranslation.tripTimerNext);

  for (let e of dosageTranslation.mushrooms.melmak) {
    // matching the dosage type with the disclaimer
    let dosageElement = dosageTypes[e.index];
    let currentDosageDisclaimer = dosageTranslation.mushrooms.melmak[e.index];
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
      bagContentDescription.innerText = selectLanguage(e.description);
    }
  }
}
