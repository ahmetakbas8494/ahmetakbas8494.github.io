function modifyUrl(title, url) {
    if (typeof history.pushState != "undefined") {
      var obj = {
        Title: title,
        Url: url,
      };
      history.pushState(obj, obj.Title, obj.Url);
    }
  }
  function elseVP() {
    document.body.remove();
    return console.log("[ - ] Unknown viewport");
  }
  function fnd(elem) {
    return document.querySelectorAll(elem);
  }
  function monthName(num) {
    if (num === 1) {
      return "stycznia";
    } else if (num === 2) {
      return "lutego";
    } else if (num === 3) {
      return "marca";
    } else if (num === 4) {
      return "kwietnia";
    } else if (num === 5) {
      return "maja";
    } else if (num === 6) {
      return "czerwca";
    } else if (num === 7) {
      return "lipca";
    } else if (num === 8) {
      return "sierpnia";
    } else if (num === 9) {
      return "września";
    } else if (num === 10) {
      return "października";
    } else if (num === 11) {
      return "listopada";
    } else if (num === 12) {
      return "grudnia";
    }
  }
  
  function insertInfo(info, query) {
    for (var i = 0; i < info; i++) {
      document.querySelector(query + "(" + (i + 1) + ")");
    }
  }
  
  function disableScroll() {
    document.body.style.overflowY = "hidden";
  }
  
  function monthZero(month) {
    if (parseInt(month / 10) === 0) {
      return "0" + month;
    } else {
      return month;
    }
  }
  
  