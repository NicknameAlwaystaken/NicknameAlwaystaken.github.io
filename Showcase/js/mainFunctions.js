var counter = 0
var myMarkdown;
function setup() {
  navbar = document.getElementById("navbar");
  sticky = navbar.offsetTop;
  myImg = document.getElementById('myImage');
  counter = 0;
  pic = "img/PeepoSpy.png";
}
function homePage() {
  window.location.href = "https://nicknamealwaystaken.github.io";
}
function practicePage() {
  window.location.href = "https://nicknamealwaystaken.github.io/PracticePage";
}
function showcasePage() {
  window.location.href = "https://nicknamealwaystaken.github.io/Showcase";
}
function changeMarkdown() {
  if(counter % 2 == 0) {
    document.getElementById("markdown").src = "README.md";
  }
  else {
    document.getElementById("markdown").src = "MARKDOWN.md";
  }
  counter++;
}