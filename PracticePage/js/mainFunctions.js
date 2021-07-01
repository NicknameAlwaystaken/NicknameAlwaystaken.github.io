
var counter = 0;

myImg = document.getElementById('myImage');

window.onscroll = function() {stickyNavBar()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickyNavBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function picture() {
    if(counter % 2) {
    var pic = "img/PeepoSpy.png";
    }
    else {
    var pic = "img/CatMlem.png";
    }
    myImg.src = pic;

    var newWidth = myImg.clientWidth + 5;
    var newHeight = myImg.clientHeight + 5;

    myImg.style.width = newWidth + "px";
    myImg.style.height = newHeight + "px";

    document.getElementById('test').innerHTML = counter;
    counter++;
}