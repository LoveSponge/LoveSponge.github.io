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
 // console.log(t.querySelector('.card-actions').querySelector('.view').innerHTML);
 if (t.querySelector('.card-actions').querySelector('.view').innerHTML === "close") {
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

let currentScheme = "white";
function changeColour() {
 function cycler(scheme) {
  document.documentElement.style.setProperty('--header-colour', scheme.hc);
  document.documentElement.style.setProperty('--primary-colour', scheme.pc);
  document.documentElement.style.setProperty('--secondary-colour', scheme.sc);
  document.documentElement.style.setProperty('--accent-colour', scheme.ac);
  document.documentElement.style.setProperty('--header-colour-text', scheme.hct);
  document.documentElement.style.setProperty('--primary-colour-text', scheme.pct);
  document.documentElement.style.setProperty('--secondary-colour-text', scheme.sct);
  document.documentElement.style.setProperty('--accent-colour-text', scheme.act);
 }
 const colourSchemes = {
  white: {
   hc: "#616161",
   pc: "white",
   sc: "white",
   ac: "#00E676",
   hct: "white",
   pct: "black",
   sct: "black",
   act: "black"
  },
  blue: {
   hc: "#1976D2",
   pc: "#2196F3",
   sc: "#64B5F6",
   ac: "#FFC400",
   hct: "white",
   pct: "white",
   sct: "white",
   act: "black"
  },
  purple: {
   hc: "#512DA8",
   pc: "#3F51B5",
   sc: "#9575CD",
   ac: "#F50057",
   hct: "white",
   pct: "white",
   sct: "black",
   act: "black"
  }
 }
 if (currentScheme === "white") {
  cycler(colourSchemes.blue);
  currentScheme = "blue";
 } else if (currentScheme === "blue") {
  cycler(colourSchemes.purple);
  currentScheme = "purple";
 } else if (currentScheme === "purple") {
  cycler(colourSchemes.white);
  currentScheme = "white";
 }
}

let instructions = document.querySelector(".instructions");
if (window.innerWidth >= 768) {
 instructions.innerHTML = "Hovering over any of the elements to the right will allow you to peek, clicking view will open a larger viewer for you to browse the project which you would like to see"; // text for web width
} else {
 instructions.innerHTML = "Swipe down to see the projects I have added to my portfolio, tapping 'view' will enlarge the viewer so that you can see them in more detail."; // text for mobile width
}