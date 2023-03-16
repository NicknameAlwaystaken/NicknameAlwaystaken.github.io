var counter = 0

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
    document.getElementById("p1").src = "README.md";
  }
  else {
    document.getElementById("p1").src = "MARKDOWN.md";
  }
  counter++;
}