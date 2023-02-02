src =
  "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js";
integrity =
  "sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p";
crossorigin = "anonymous";

function Beyaz() {
  var element = document.body;
  element.classList.toggle("beyaz-mode");
}
function Siyah() {
  var element = document.body;
  element.classList.toggle("siyah-mode");
}
function Gri() {
  var element = document.body;
  element.classList.toggle("gri-mode");
}
function Sarı() {
  var element = document.body;
  element.classList.toggle("sarı-mode");
}
function Doga() {
  var element = document.body;
  element.classList.toggle("doga-mode");
}
function Doga2() {
  var element = document.body;
  element.classList.toggle("doga2-mode");
}
function Deniz() {
  var element = document.body;
  element.classList.toggle("deniz-mode");
}

function gizleGoster() {
  var x = document.getElementById("tema-degis");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
