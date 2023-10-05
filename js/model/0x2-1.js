function x021(type) {
    if (type === 1) return elseVP;
  
    fnd(".con-2").forEach((e) => {
      e = e.style;
      e.position = "absolute";
      e.bottom = "177px";
      e.left = "152px";
    });
    fnd(".con-2 input").forEach((e) => {
      e = e.style;
      e.marginBottom = "4px";
    });
    fnd("#obywatelImage").forEach((e) => {
      e = e.style;
      e.zIndex = "10";
      e.asepctRatio = "184/244";
      e.height = "160px";
      e.borderRadius = "20px";
    });
    fnd("#obywatelFlag").forEach((e) => {
      e = e.style;
      e.height = "40px";
      e.position = "relative";
      e.top = "8px";
      e.left = "5px";
    });
    fnd(".con-1").forEach((e) => {
      e = e.style;
      e.display = "grid";
      e.position = "absolute";
      e.left = "25px";
      e.top = "20px";
    });
  
    fnd("#time").forEach((e) => {
      e = e.style;
      e.fontSize = "12px";
      e.color = "black";
      e.display = "flex";
      e.justifyContent = "center";
      e.marginBottom = "10px";
    });
  
    setTimeout(() => {
      fnd("#time-input").forEach((e) => {
        e = e.style;
        e.fontSize = "12px";
        e.marginLeft = "4px";
        e.color = "black !important";
      });
    }, 2);
  
    fnd(".input").forEach((e) => {
      e = e.style;
      e.height = "40px";
      e.fontSize = "14.5px";
      e.background = "none";
      e.border = "none";
      e.width = "150px";
      e.fontWeight = "bold";
    });
  
    return console.log("[ + ] Viewport style loaded");
  }
  