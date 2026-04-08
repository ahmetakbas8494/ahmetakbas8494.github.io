window.addEventListener("load", () => {
  if (type !== "mel" || isNaN(weight) || weight <= 0) {
    alert("⚠️ Please scan QR code on the bag to access the guide.");
    return;
  }
  let loadingScreen = document.querySelector(".loading");
  document.querySelector(".wrapper div").classList.add("loaded");
  setTimeout(() => {
    loadingScreen.innerHTML = "";
    loadingScreen.classList.add("hidden");
    setTimeout(() => {
      document.body.removeChild(loadingScreen);
    }, 500);
  }, 500);
});
