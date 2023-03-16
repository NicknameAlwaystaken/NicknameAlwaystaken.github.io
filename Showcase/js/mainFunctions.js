var counter;
var myMarkdown;
function setup() {
  navbar = document.getElementById("navbar");
  sticky = navbar.offsetTop;
  myMarkdown = document.getElementById("markdown");
  counter = 0;
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
    myMarkdown.src = "README.md";
  }
  else {
    myMarkdown.src = "MARKDOWN.md";
  }
  counter++;
}