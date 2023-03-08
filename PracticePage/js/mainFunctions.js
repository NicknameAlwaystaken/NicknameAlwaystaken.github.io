
var counter;
var pic;
var myImg;

window.onscroll = function() {stickyNavBar()};

var navbar;
var sticky;

function setup() {
    navbar = document.getElementById("navbar");
    sticky = navbar.offsetTop;
    myImg = document.getElementById('myImage');
    counter = 0;
    pic = "img/PeepoSpy.png";
}

function stickyNavBar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
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
function pictureChange() {
    if(counter % 2) {
        pic = "img/PeepoSpy.png";
    }
    else {
        pic = "img/CatMlem.png";
    }
    myImg.src = pic;

    var newWidth = myImg.clientWidth + 5;
    var newHeight = myImg.clientHeight + 5;

    myImg.style.width = newWidth + "px";
    myImg.style.height = newHeight + "px";

    counter++;
    document.getElementById('test').innerHTML = counter;
}