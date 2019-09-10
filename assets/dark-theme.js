var darkTheme = {
  darkCSS: document.getElementById("js-dark-theme"),

  enable: function() {
    this.darkCSS.media = "";
  },

  disable: function() {
    this.darkCSS.media = this.darkCSS.dataset.originalMedia;
  },

  start: function() {
    this.darkCSS.dataset.originalMedia = this.darkCSS.media;

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
