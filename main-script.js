let body = document.querySelector("body");
let wrapper = document.querySelector(".wrapper");
let header = document.querySelector(".header");
let intro = document.querySelector(".intro");
let projects = document.querySelector(".projects");
let allProjects = document.querySelectorAll(".project-card");
let colourBtn = document.querySelector(".colour");

function view(t) {
 let targetButton = t.innerHTML;
 let targetProjectCard = t.parentNode.parentNode;
 let targetIframe = t.parentNode.parentNode.children[1].children[0];
 if (targetButton === "view") {
  wrapper.setAttribute("style", "grid-template-columns: var(--viewer-wrapper-template-columns)");
  body.setAttribute("style", "overflow-y: hidden;");
  for (project of allProjects) {
   project.setAttribute("style", "display: none;");
  }
  targetProjectCard.setAttribute("style", "transform: scaleY(1); grid-column: var(--viewer-project-card-grid); grid-row: var(--viewer-project-card-grid);");
  targetIframe.setAttribute("scrolling", "auto");
  window.scrollTo(0, body.scrollHeight);
  t.innerHTML = "close";
 } else if (targetButton === "close") {
  wrapper.setAttribute("style", "");
  body.setAttribute("style", "");
  for (project of allProjects) {
   project.setAttribute("style", "");
  }
  targetProjectCard.setAttribute("style", "");
  targetIframe.setAttribute("scrolling", "no");
  t.innerHTML = "view";
 }
}

function onloader() {
 let iframes = document.querySelectorAll("iframe");
 for (iframe of iframes) {
  iframe.setAttribute("scrolling", "no");
 }
}

function peek(t) {
 if (window.innerWidth >= 768) {
  for (project of allProjects) {
   project.setAttribute("style", "display: none;");
  }
  t.setAttribute("style", "");
 } else {
  // do nothing for mobile view
 }
}

function offPeek(t) {
 if (t.children[3].children[2].innerHTML === "close") {
  // do nothing if the viewer is currently open
 } else {
  if (window.innerWidth >= 768) {
   for (project of allProjects) {
    project.setAttribute("style", "");
   }
  } else {
   // do nothing for mobile view
  }
 }
}