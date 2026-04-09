const tripTimerOverlay = document.querySelector(".trip-timer-overlay");
const tripTimerStage = () => {
  return parseInt(tripTimerOverlay.getAttribute("stage"));
};
const tripTimerContent = document.querySelector(".trip-timer-content");
const tripTimerNextButton = document.querySelector(".trip-timer-next");

const storagePrefix = "trip";
// tripDosage
// tripType
// tripTimestampTrip
// tripTimestampLemonTek

const formatTime = (num) => {
  return String(num).length === 1 ? "0" + String(num) : num;
};

function secondsPassed(fromDate) {
  return Math.floor((fromDate.getTime() - Date.now()) / 1000);
}

function isActiveTimestamp() {
  const loadedTimestamp = loadConfig("TimestampLemonTek");
  let timestamp = loadedTimestamp != null ? parseInt(loadedTimestamp) : null;
  let date = new Date(timestamp);

  return timestamp != null && secondsPassed(date) > 0 ? true : false;
}

function countdown(time, type = "hours", element) {
  const isHours = type === "hours"; // else type = "minutes"
  time = isHours ? time * 3600 : time * 60;
  const loadedTimestamp = loadConfig("TimestampLemonTek");
  let timestamp = loadedTimestamp != null ? parseInt(loadedTimestamp) : null;
  let date = new Date(timestamp);

  // ignore previous timestamp if it was made long ago
  // if (timestamp === null || timestamp === NaN || secondsPassed(date) <= 0) {
  if (!isActiveTimestamp()) {
    timestamp = new Date().getTime() + time * 1000;
    date = new Date(timestamp);
    saveConfig("TimestampLemonTek", timestamp);
  }

  const tempInterval = setInterval(() => {
    // get the exact remaining seconds based on the target timestamp
    const remainingSeconds = secondsPassed(date);
    const doReset = () => {
      return loadConfig("TimestampLemonTek") === "reset";
    };

    if (remainingSeconds <= 0 || doReset()) {
      clearInterval(tempInterval);
      saveConfig("TimestampLemonTek", "");
      element.innerText = doReset()
        ? isHours
          ? "00:00:00"
          : "00:00"
        : isHours
          ? formatTime(time / 3600) + ":00:00"
          : formatTime(time / 60) + ":00";
      const tripTimerTimerPlayButton = document.querySelector(
        ".trip-timer-timer-play-button",
      );
      tripTimerTimerPlayButton.removeAttribute("reset");
      // tripTimerTimerPlayButton.classList.remove(
      //   "trip-timer-timer-play-button-hidden",
      // );
      return;
    }

    // calculate time segments directly from the remaining seconds
    const h = isHours ? formatTime(Math.floor(remainingSeconds / 3600)) : null;
    const min = isHours
      ? formatTime(Math.floor((remainingSeconds % 3600) / 60))
      : formatTime(Math.floor(remainingSeconds / 60));
    const sec = formatTime(remainingSeconds % 60);

    let formattedTime = isHours ? h + ":" : "";
    formattedTime += min + ":" + sec;
    element.innerText = formattedTime;
  }, 500);
}

function saveConfig(itemName, item) {
  localStorage.setItem(storagePrefix + itemName, item);
}

function loadConfig(itemName) {
  return localStorage.getItem(storagePrefix + itemName);
}

function startTimer() {
  const className = "trip-timer-overlay-show";
  if (tripTimerOverlay.classList.contains(className)) return;
  tripTimerOverlay.classList.add(className);
  loadStage(tripTimerStage());
}

function minimizeTimer() {
  const isMinimized =
    tripTimerOverlay.getAttribute("minimized") === "true" ? true : false;

  if (isMinimized) {
    tripTimerOverlay.classList.remove("trip-timer-overlay-minimize");
  } else {
    tripTimerOverlay.classList.add("trip-timer-overlay-minimize");
  }
  if (tripTimerStage() === 7) {
    if (isMinimized)
      tripTimerContent.classList.remove(
        "trip-timer-lemon-tek-tutorial-minimized",
      );
    else
      tripTimerContent.classList.add("trip-timer-lemon-tek-tutorial-minimized");
  }
  tripTimerOverlay.setAttribute("minimized", isMinimized ? "false" : "true");
}

function closeTimer() {
  tripTimerOverlay.classList.remove("trip-timer-overlay-minimize");
  tripTimerOverlay.classList.remove("trip-timer-overlay-show");
  tripTimerOverlay.setAttribute("minimized", "false");
  setTimeout(() => {
    tripTimerContent.innerHTML = "";
  }, 500);
}

function nextTimer(el = null) {
  const currentStage = parseInt(tripTimerStage());
  let nextStage = currentStage + 1;

  if (currentStage === 1)
    saveConfig(
      "Dosage",
      document.getElementById("trip-timer-input-amount").value,
    );
  else if (currentStage === 2) {
    const selectedMethod = el.getAttribute("method");
    saveConfig("Type", selectedMethod);
    nextStage = selectedMethod === "dry" ? 8 : nextStage;
  }
  tripTimerOverlay.setAttribute("stage", nextStage);
  const isContentEmpty = tripTimerContent.innerHTML === "";

  if (!isContentEmpty) tripTimerContent.innerHTML = "";
  loadStage(nextStage);
}

function loadStage(num) {
  num = parseInt(num);
  console.log("Loading stage " + num);
  const stageTranslation = timerTranslation.tripTimerStages["stage" + num];

  const tripTimerContentTitle = document.createElement("h1");
  tripTimerContentTitle.classList.add("trip-timer-content-title");
  tripTimerContentTitle.innerText = selectLanguage(
    stageTranslation.tripTimerContentTitle,
  );
  tripTimerContent.appendChild(tripTimerContentTitle);

  // unhide the skip (next) button
  if ([1, 2, 8, 9].includes(num))
    tripTimerNextButton.setAttribute("disabled", "");
  else tripTimerNextButton.removeAttribute("disabled", "");

  // stage 1: choosing amount of shrooms for consumption
  if (num === 1) {
    const tripTimerInputAmount = document.createElement("input");
    tripTimerInputAmount.setAttribute("id", "trip-timer-input-amount");
    tripTimerInputAmount.setAttribute("type", "number");
    tripTimerInputAmount.setAttribute("placeholder", "1");
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
      stageTranslation.tripTimerAmountDescription,
    );

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
          tripTimerNextButton.removeAttribute("disabled");
        } else if (value === "" || value === "0") {
          tripTimerAmountDescription.innerText = selectLanguage(
            timerTranslation.tripTimerAmountDescription,
          );
          tripTimerNextButton.setAttribute("disabled", "");
        }
      }
    });
  }
  // stage 2: method of consumption
  else if (num === 2) {
    // method: lemon tek
    const tripTimerLemonTekButton = document.createElement("button");
    tripTimerLemonTekButton.setAttribute("method", "lemontek");
    tripTimerLemonTekButton.setAttribute("onclick", "nextTimer(this)");
    tripTimerLemonTekButton.innerText = selectLanguage(
      stageTranslation.lemonTek.button,
    );

    const tripTimerLemonTekDescription = document.createElement("p");
    tripTimerLemonTekDescription.innerText = selectLanguage(
      stageTranslation.lemonTek.description,
    );

    // method: dry
    const tripTimerDryButton = document.createElement("button");
    tripTimerDryButton.setAttribute("method", "dry");
    tripTimerDryButton.setAttribute("onclick", "nextTimer(this)");
    tripTimerDryButton.innerText = selectLanguage(stageTranslation.dry.button);

    const tripTimerDryDescription = document.createElement("p");
    tripTimerDryDescription.innerText = selectLanguage(
      stageTranslation.dry.description,
    );

    for (let e of [
      tripTimerLemonTekButton,
      tripTimerLemonTekDescription,
      tripTimerDryButton,
      tripTimerDryDescription,
    ]) {
      tripTimerContent.appendChild(e);
    }
  }
  // ===  LEMON TEK ONLY  ===
  // stage 3: equipment and ingredients
  else if (num === 3) {
    const tripTimerEquipmentDescription = document.createElement("p");
    tripTimerEquipmentDescription.style.fontWeight = "bold";
    tripTimerEquipmentDescription.style.lineHeight = "1.6";
    tripTimerEquipmentDescription.innerText = selectLanguage(
      stageTranslation.description,
    );
    tripTimerContent.appendChild(tripTimerEquipmentDescription);
  }
  // stages 4-7: tutorial
  else if ([4, 5, 6, 7].includes(num)) {
    const tripTimerLemonTekTutorialImage = document.createElement("img");
    tripTimerLemonTekTutorialImage.classList.add(
      "trip-timer-lemon-tek-tutorial-img",
    );
    tripTimerLemonTekTutorialImage.src = "src/img/" + stageTranslation.img;
    tripTimerLemonTekTutorialImage.alt = stageTranslation.img;
    tripTimerLemonTekTutorialImage.style.width = "6rem";
    tripTimerLemonTekTutorialImage.style.aspectRatio = "1/1";

    const tripTimerLemonTekTutorialDescription = document.createElement("p");
    tripTimerLemonTekTutorialDescription.innerText = selectLanguage(
      stageTranslation.description,
    );

    const newElements = [
      tripTimerLemonTekTutorialImage,
      tripTimerLemonTekTutorialDescription,
    ];

    // stage 7: timer
    if (num === 7) {
      const tripTimerLemonTekTutorialTimer = document.createElement("div");
      tripTimerLemonTekTutorialTimer.classList.add(
        "trip-timer-lemon-tek-tutorial-timer",
      );

      // 20 minute timer
      const tripTimerTimer = document.createElement("h3");
      tripTimerTimer.setAttribute("timeType", "minutes");
      tripTimerTimer.setAttribute("time", "20");
      tripTimerTimer.innerText = "20:00";

      const tripTimerTimerPlayButton = document.createElement("button");
      tripTimerTimerPlayButton.classList.add("trip-timer-timer-play-button");
      tripTimerTimerPlayButton.innerText = "▶︎";

      // const onClickTimer = () => {
      //   tripTimerTimerPlayButton.setAttribute("reset", "");
      //   tripTimerTimerPlayButton.classList.add(
      //     "trip-timer-timer-play-button-hidden",
      //   );
      //   countdown(20, "minutes", tripTimerTimer);
      // };

      const thisCountDown = () => countdown(20, "minutes", tripTimerTimer);

      if (isActiveTimestamp()) {
        tripTimerTimerPlayButton.setAttribute("reset", "");
        tripTimerTimerPlayButton.innerText = "Reset";
        thisCountDown();
      }

      tripTimerTimerPlayButton.addEventListener("click", () => {
        tripTimerTimerPlayButton.style.transform = "scale(0.9)";
        setTimeout(
          () => (tripTimerTimerPlayButton.style.transform = "scale(1)"),
          500,
        );

        if (tripTimerTimerPlayButton.hasAttribute("reset")) {
          tripTimerTimerPlayButton.innerText = "▶︎";
          saveConfig("TimestampLemonTek", "reset");
        } else {
          tripTimerTimerPlayButton.setAttribute("reset", "");
          saveConfig("TimestampLemonTek", "reset");
          tripTimerTimerPlayButton.innerText = "Reset";
          thisCountDown();
        }
      });

      tripTimerLemonTekTutorialTimer.appendChild(tripTimerTimer);
      tripTimerLemonTekTutorialTimer.appendChild(tripTimerTimerPlayButton);

      newElements.push(tripTimerLemonTekTutorialTimer);
    }
    for (let e of newElements) tripTimerContent.appendChild(e);
  }
  // === === ===  === === ===

  // stage 8: getting ready to consume the mushroom
}
