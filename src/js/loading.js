const loadingScreen = document.querySelector(".loading");
const loadingWrapper = document.querySelector(".wrapper");
const loadingText = document.querySelector(".loading-text");
const guideSection = document.querySelector(".guide-section");

window.addEventListener("load", () => {
  const isEssentialsGiven =
    ["mel"].includes(type) || ["pl", "en"].includes(lang);

  if (!isEssentialsGiven) {
    loadingText.innerText = selectLanguage(guideTranslation.denied);
    document.body.removeChild(guideSection);
    loadingText.classList.add("show");
    return;
  }

  loadingWrapper.querySelector("div").classList.add("show");
  setTimeout(() => {
    loadingScreen.innerHTML = "";
    loadingScreen.classList.add("hidden");
    setTimeout(() => {
      document.body.removeChild(loadingScreen);
    }, 500);
  }, 500);
});
