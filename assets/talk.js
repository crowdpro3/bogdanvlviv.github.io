var talk = {
  slides: function() {
    return(
      Array.from(document.getElementsByClassName("talk-slide"))
    );
  },

  activeSlide: function() {
    return(
      this.slides().find(function(slide) {
        return(
          slide.style.display === ""
        );
      })
    );
  },

  numberOfSlides: function() {
    return(
      this.slides().length
    );
  },

  numberOfActiveSlide: 1,

  displaySlide: function(slide) {
    slide.style.display = "";
  },

  hideSlide: function(slide) {
    slide.style.display = "none";
  },

  displayNumberOfSlides: function() {
    document.getElementById("js-talk-number-of-slides").textContent =
      "(" + this.numberOfActiveSlide + "/" + this.numberOfSlides() + ")";
  },

  previousSlide: function() {
    var activeSlide = this.activeSlide();
    var previousSlide = activeSlide.previousElementSibling;

    if (previousSlide) {
      this.hideSlide(activeSlide);
      this.displaySlide(previousSlide);
      this.numberOfActiveSlide -= 1;
      this.displayNumberOfSlides();
    }
  },

  nextSlide: function() {
    var activeSlide = this.activeSlide();
    var nextSlide = activeSlide.nextElementSibling;

    if (nextSlide) {
      this.hideSlide(activeSlide);
      this.displaySlide(nextSlide);
      this.numberOfActiveSlide += 1;
      this.displayNumberOfSlides();
    }
  },

  start: function() {
    this.slides().slice(1).reverse().forEach(function(slide) {
      this.hideSlide(slide);
    }.bind(this));

    this.displayNumberOfSlides();

    document.onkeydown = function(keyboardEvent) {
      keyboardEvent.preventDefault();

      switch(keyboardEvent.key) {
        case "j":
        case "l":
        case "PageDown":
        case "ArrowRight":
          this.nextSlide();
          break;
        case "k":
        case "h":
        case "PageUp":
        case "ArrowLeft":
          this.previousSlide();
          break;
      }
    }.bind(this);

    document.getElementById("js-talk-previous-slide").onclick = function() {
      this.previousSlide();
    }.bind(this);

    document.getElementById("js-talk-next-slide").onclick = function() {
      this.nextSlide();
    }.bind(this);
  }
}

talk.start();
