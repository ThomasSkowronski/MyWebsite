const navBar = document.getElementById("navBar");

const aboutHead = document.getElementById("About");
const aboutLink = document.getElementById("aboutLink");

const projectHead = document.getElementById("Project");
const projLink = document.getElementById("projLink");

const resumeHead  = document.getElementById("Resume");
const resumeLink = document.getElementById("resLink");

const body = document.body;

var bgMoveFactor = 3.5;

function updateView() {
  var navRect = navBar.getBoundingClientRect();
  var aboutRect = aboutHead.getBoundingClientRect();
  var projectRect = projectHead.getBoundingClientRect();
  var resumeRect = resumeHead.getBoundingClientRect();

  var scrollBottom = $(window).height()+$(window).scrollTop();
  
  
  if (navRect.bottom > aboutRect.top) {
    aboutLink.style.backgroundColor="var(--secondary)";
    projLink.style.backgroundColor="var(--light)";
    resumeLink.style.backgroundColor="var(--light)";
  } 

  if (navRect.bottom > projectRect.top) {
    aboutLink.style.backgroundColor="var(--light)";
    projLink.style.backgroundColor="var(--secondary)";
    resumeLink.style.backgroundColor="var(--light)";
  }

  if (navRect.bottom > resumeRect.top || scrollBottom == $(document).height()) {
    aboutLink.style.backgroundColor="var(--light)";
    projLink.style.backgroundColor="var(--light)";
    resumeLink.style.backgroundColor="var(--secondary)";
  }

  var yPos = scrollBottom/bgMoveFactor;
  body.style.backgroundPositionY = yPos+"px";

}

var scrollInterval = setInterval(updateView, 10);
