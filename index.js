//grab the different elements used in the animation.
const navBar = document.getElementById("navBar");

const aboutHead = document.getElementById("About");
const aboutLink = document.getElementById("aboutLink");

const projectHead = document.getElementById("Project");
const projLink = document.getElementById("projLink");

const resumeHead  = document.getElementById("Resume");
const resumeLink = document.getElementById("resLink");

const body = document.body;

//decides how intense the paralax  effect is from the background
var bgMoveFactor = 2.5;

function updateView() {
  var navRect = navBar.getBoundingClientRect();
  var aboutRect = aboutHead.getBoundingClientRect();
  var projectRect = projectHead.getBoundingClientRect();
  var resumeRect = resumeHead.getBoundingClientRect();

  //checks how far the viewer is scrolled
  var scrollBottom = $(window).height()+$(window).scrollTop();
  
  
  //Depending on where the viewer is on the page, each link in the nav bar will be highlighted with a transition animation.

  //The scroll height is used in the bottom section to catch the case where the bottom element has not yet
  //  intersected with the nav bar but the page is scrolled to the bottom.
  if (navRect.bottom > aboutRect.top) {
    aboutLink.style.backgroundColor="var(--dark)";
    projLink.style.backgroundColor="var(--light)";
    resumeLink.style.backgroundColor="var(--light)";
  } 

  if (navRect.bottom > projectRect.top) {
    aboutLink.style.backgroundColor="var(--light)";
    projLink.style.backgroundColor="var(--dark)";
    resumeLink.style.backgroundColor="var(--light)";
  }

  if (navRect.bottom > resumeRect.top || scrollBottom == $(document).height()) {
    aboutLink.style.backgroundColor="var(--light)";
    projLink.style.backgroundColor="var(--light)";
    resumeLink.style.backgroundColor="var(--dark)";
  }

  var yPos = scrollBottom/bgMoveFactor;
  body.style.backgroundPositionY = yPos+"px";

}

//executes this function at an interval in order to animate the background and keep checking for which section the page is on.
var scrollInterval = setInterval(updateView, 10);
