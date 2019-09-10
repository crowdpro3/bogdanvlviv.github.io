var darkTheme = {
  darkCSS: document.getElementById("js-dark-theme"),

  enable: function() {
    this.darkCSS.media = "";
    window.sessionStorage.setItem("darkTheme", "enable")
  },

  disable: function() {
    this.darkCSS.media = this.darkCSS.dataset.originalMedia;
    window.sessionStorage.setItem("darkTheme", "disable")
  },

  start: function() {
    this.darkCSS.dataset.originalMedia = this.darkCSS.media;

    if (window.sessionStorage.getItem("darkTheme") === "enable") {
      this.enable();
    } else if (window.sessionStorage.getItem("darkTheme") === "disable") {
      this.disable();
    }

    var previousOnKeyUp = document.onkeyup;
    document.onkeyup = function(keyboardEvent) {
      if (previousOnKeyUp) {
        previousOnKeyUp(keyboardEvent);
      }

      switch(keyboardEvent.key) {
        case "d":
          keyboardEvent.preventDefault();
          this.enable();
          break;
        case "s":
          keyboardEvent.preventDefault();
          this.disable();
          break;
      }
    }.bind(this);
  }
}

darkTheme.start();
