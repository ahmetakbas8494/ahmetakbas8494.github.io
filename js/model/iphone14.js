function Iphone14(type) {
    if (type === 2) return elseVP;
    fnd(".con-2").forEach((e) => {
      e = e.style;
      e.positon = "aboslute";
      e.bottom = "145px";
      e.left = "163px";
    });
    fnd(".con-2 input").forEach((e) => {
      e = e.style;
      e.marginBottom = "20px";
    });
    fnd("#obywatelImage").forEach((e) => {
      e = e.style;
      e.asepctRatio = "218/274";
      e.height = "160px";
    });
    fnd(".con-1").forEach((e) => {
      e = e.style;
      e.display = "grid";
      e.position = "absolute";
      e.left = "25px";
      e.top = "20px";
    });
  
    fnd("#obywatelFlag").forEach((e) => {
      e = e.style;
      e.marginTop = "1.4rem";
      e.aspectRatio = "566/390";
      e.height = "40px";
    });
  
    fnd("#time").forEach((e) => {
      e = e.style;
      e.fontSize = "16px";
      e.color = "black";
      e.display = "flex";
      e.justifyContent = "center";
    });
  
    fnd("#time-input").forEach((e) => {
      e = e.style;
      e.fontSize = "16px";
      e.color = "black";
      e.marginLeft = "04.rem";
    });
  
    fnd(".input").forEach((e) => {
      e = e.style;
      e.height = "40px";
      e.fontSize = "20px";
      e.background = "none";
      e.border = "none";
      e.width = "180px";
      e.fontWeight = "bold";
    });
  
    return console.log("[ + ] Viewport style loaded");
  }
  