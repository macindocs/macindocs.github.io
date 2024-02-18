window.logo = document.getElementsByClassName("logo")[0];

var i = 0;

document.documentElement.addEventListener("click", function() {
  move();
});

function move() {
  if (i == 0) {
    i = 1;
    logo.style.opacity = "1";
    playSound("./assets/latest-boot.m4a", false);
    var elem = document.getElementById("macBar");
    elem.style.opacity = "1";
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
