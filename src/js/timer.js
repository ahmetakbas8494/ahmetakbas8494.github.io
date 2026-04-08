const tripTimerOverlay = document.querySelector(".trip-timer-overlay");
const tripTimerStage = tripTimerOverlay.getAttribute("stage");
const tripTimerStageType = tripTimerOverlay.getAttribute("stagetype");
const tripTimerContent = document.querySelector(".trip-timer-content");

function startTimer() {
  const className = "trip-timer-overlay-show";
  if (tripTimerOverlay.classList.contains(className)) return;
  tripTimerOverlay.classList.add(className);
  document.body.style.overflow = "hidden";
  loadStage(tripTimerStage, tripTimerStageType);
}

function minimizeTimer() {
  const isMinimized =
    tripTimerOverlay.getAttribute("minimized") === "true" ? true : false;

  if (isMinimized) {
    tripTimerOverlay.classList.remove("trip-timer-overlay-minimize");
  } else {
    tripTimerOverlay.classList.add("trip-timer-overlay-minimize");
  }
  document.body.style.overflow = isMinimized ? "hidden" : "auto";
  tripTimerOverlay.setAttribute("minimized", isMinimized ? "false" : "true");
}

function closeTimer() {
  document.body.style.overflow = "auto";
  tripTimerOverlay.classList.remove("trip-timer-overlay-minimize");
  tripTimerOverlay.classList.remove("trip-timer-overlay-show");
  tripTimerOverlay.setAttribute("minimized", "false");
  setTimeout(() => {
    tripTimerContent.innerHTML = "";
  }, 500);
}

function nextTimer() {}

function loadStage(num, type) {
  num = parseInt(num);

  // stage 1: choosing amount of shrooms for consumption
  if (num === 1) {
    const tripTimerContentTitle = document.createElement("h1");
    tripTimerContentTitle.classList.add("trip-timer-content-title");
    tripTimerContentTitle.innerText = "Wybierz dawkę";

    const tripTimerInputAmount = document.createElement("input");
    tripTimerInputAmount.setAttribute("id", "trip-timer-input-amount");
    tripTimerInputAmount.setAttribute("type", "number");
    tripTimerInputAmount.setAttribute("placeholder", "ex. 1");
    tripTimerInputAmount.setAttribute("step", "0.1");
    tripTimerInputAmount.setAttribute("min", "0.1");
    tripTimerInputAmount.setAttribute("max", "10");

    const tripTimerInputAmountLabel = document.createElement("label");
    tripTimerInputAmountLabel.setAttribute("for", "trip-timer-input-amount");
    tripTimerInputAmountLabel.appendChild(tripTimerInputAmount);
    tripTimerInputAmountLabel.append(" g");

    const tripTimerAmountDescription = document.createElement("p");
    tripTimerAmountDescription.classList.add("trip-timer-amount-description");
    tripTimerAmountDescription.innerText = selectLanguage(
      timerTranslation.tripTimerAmountDescription,
    );

    tripTimerContent.appendChild(tripTimerContentTitle);
    tripTimerContent.appendChild(tripTimerInputAmountLabel);
    tripTimerContent.appendChild(tripTimerAmountDescription);

    // rules: max 10, min 0.1, no more than 1 place after comma
    tripTimerInputAmount.addEventListener("input", (e) => {
      let value = e.target.value.replace("-", "");
      // min 0.1
      if (num < 0.1 || num === 0) {
        value = "0.1";
      }
      // max 10
      if (parseFloat(value) > 10) {
        value = "10";
      }
      // no more than 1 place after comma
      if (value.includes(".")) {
        const [integer, fraction] = value.split(".");
        if (fraction.length > 1) {
          value = `${integer}.${fraction.charAt(0)}`;
        }
      }
      e.target.value = value;
      for (let e of dosageTranslation.mushrooms.melmak) {
        if (value >= e.min && value <= e.max) {
          tripTimerAmountDescription.innerText = selectLanguage(e.description);
        } else if (value === "")
          tripTimerAmountDescription.innerText = selectLanguage(
            timerTranslation.tripTimerAmountDescription,
          );
      }
    });
  }
}
