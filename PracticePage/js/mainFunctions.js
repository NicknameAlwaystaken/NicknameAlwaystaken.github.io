
var counter;
var pic;
var myImg;
var myImgDiv;

window.onscroll = function() {stickyNavBar()};

var navbar;
var sticky;

function setup() {
    navbar = document.getElementById("navbar");
    sticky = navbar.offsetTop;
    myImg = document.getElementById('myImage');
    myImgDiv = document.getElementById('myImgDiv');
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

function pictureChange() {
    if(counter % 2) {
        pic = "img/PeepoSpy.png";
    }
    else {
        pic = "img/CatMlem.png";
    }
    //myImg.src = pic;

    var newWidth = myImgDiv.clientWidth + 5;
    var newHeight = myImgDiv.clientHeight + 5;

    myImgDiv.style.width = newWidth + "px";
    myImgDiv.style.height = newHeight + "px";

    counter++;
    document.getElementById('test').innerHTML = counter;
}