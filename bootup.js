var i = 0;
window.doneboot = false;
document.documentElement.addEventListener("click", function() {
  move();
});

function move() {
  if (i == 0 && !window.doneboot) {
    i = 1;
    document.documentElement.style.opacity = "1";
    playSound("./assets/latest-boot.m4a", false);
    var elem = document.getElementById("macBar");
    elem.style.opacity = "1";
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        window.doneboot = true;
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}
