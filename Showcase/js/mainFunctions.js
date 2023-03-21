var counter;
var htmlToPrint = "showcasesnippet"

function generatePDF() {

  const element = document.getElementById(htmlToPrint);
  document.getElementById(htmlToPrint).style.border = "1px solid black";
  html2pdf().from(element).save('download.pdf');
}

function downloadCode() {
  generatePDF();
  setTimeout(function () { window.location = window.location; }, 3000);
}
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
  if (counter % 2 == 0) {
    myMarkdown.src = "README.md";
  }
  else {
    myMarkdown.src = "MARKDOWN.md";
  }
  counter++;
}