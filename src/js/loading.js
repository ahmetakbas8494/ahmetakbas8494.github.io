const loadingScreen = document.querySelector(".loading");
const loadingWrapper = document.querySelector(".wrapper");
const loadingText = document.querySelector(".loading-text");

window.addEventListener("load", () => {
  if (type !== "mel" || isNaN(weight) || weight <= 0) {
    // alert("⚠️ Please scan QR code on the bag to access the guide.");
    navigator.vibrate(200);
    loadingText.classList.add("show");
    loadingWrapper.classList.add("denied");
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
