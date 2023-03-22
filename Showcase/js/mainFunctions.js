var counter;
var htmlToPrint = "showcasesnippet"
var downloadedFilename = 'nicknamealwaystaken_portfolio.pdf'

function generatePDF() {
  const details = document.querySelectorAll('#showcasesnippet details')
  const hr = document.querySelectorAll('#showcasesnippet hr')
  const anchor = document.querySelectorAll('#showcasesnippet a')
  const removable = document.querySelectorAll('#showcasesnippet .removableinpdfprint')
  const summaries = document.querySelectorAll('#showcasesnippet summary')
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(`
  details > summary {
    list-style: none;
  }
  
  details > summary::marker, // Latest Chrome, Edge, Firefox
  details > summary::-webkit-details-marker // Safari
  {
    display: none;
  }
  details > summary:first-of-type {
    counter-increment: none;
  }
  `);
  // Apply the stylesheet to a document:
  document.adoptedStyleSheets = [sheet];

  Array.from(removable).forEach(function(obj, idx) { 
      obj.innerHTML = '';
  });
  Array.from(anchor).forEach(function(obj, idx) { 
      obj.innerHTML = obj.innerHTML.replace("(link)", "");
      obj.removeAttribute("href");
  });
  Array.from(hr).forEach(function(obj, idx) {
      obj.style.display = "none";
  });
  Array.from(details).forEach(function(obj, idx) {
    if (!obj.open) {
      obj.open = true;
    } else {
      obj.open = false;
    }
    obj = obj.innerHTML
  });
  Array.from(summaries).forEach(function(obj, idx) {
    obj = obj.innerHTML
  });
  const element = document.getElementById(htmlToPrint).innerHTML;
  html2pdf().from(element).save(downloadedFilename);
  
}

function downloadCode() {
  document.getElementById('filename').innerHTML = downloadedFilename
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