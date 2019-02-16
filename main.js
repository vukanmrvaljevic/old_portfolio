var bg = document.querySelector(".bg");
var fg = document.querySelector(".fg");
var link = document.querySelectorAll(".i > a");
var selectLink = 0;

function leInitWrapper() {
  var bgHeight = window.innerHeight;
  var fgHeight = bgHeight * 2;
  
  if (window.innerWidth < 1024) {
    for (var i = 0; i < bg.children.length; i++) {
      bg.children[i].style.backgroundSize = "auto";
      fg.children[i].style.backgroundSize = "auto";
    }
  }
  else {
    for (var i = 0; i < bg.children.length; i++) {
      bg.children[i].style.backgroundSize = "100%";
      fg.children[i].style.backgroundSize = "100%";
    }
  }

  fg.style.top = "";
  fg.style.top = Math.floor(fgHeight / 4 * -1).toString() + "px";
  fg.style.transition = "top 1s";

  for (var i = 0; i < link.length; i++) {
    link[i].setAttribute("page-value", i.toString());
    link[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      selectLink = parseInt(this.getAttribute("page-value"))
      bg.style.top = (selectLink * bgHeight * -1) + "px";
      fg.style.top = (((selectLink * fgHeight) + Math.floor(fgHeight / 4)) * -1) + "px";
      for (var j = 0; j < link.length; j++) {
        link[j].classList.remove("active");
      }
      this.classList.add("active");
    });
  }
}
leInitWrapper();

window.addEventListener("resize", function() {
  leInitWrapper();
});