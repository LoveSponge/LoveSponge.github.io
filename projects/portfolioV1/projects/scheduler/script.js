// turn 1 into 01:00 and return as string
function formatTime(t) {
 if (t >= 10) {
  let u = t.toString();
  return u + ":" + "00";
 } else {
  let u = t.toString();
  return "0" + u + ":" + "00";
 }
}
function setConditionalAttrs(gr, th, ct, progressTimeContainer) {
 let currentTime = new Date();
 if (th > gr) {
  progressTimeContainer.setAttribute("style", "width:100%;");
 }
 if (th <= ct) {
  if (th === ct) {
   progressTimeContainer.setAttribute("style", "grid-row:" + gr + "; height:100%; width:" + (currentTime.getMinutes() / 60) * 100 + "%;");
  } else {
   progressTimeContainer.setAttribute("style", "grid-row:" + gr + "; height:100%;");
  }
 } else {
  progressTimeContainer.setAttribute("style", "grid-row:" + gr + ";");
 }
}

function createTimeSlots() {
 let gRow = 1;
 let time = 0;
 let currentTime = new Date();
 document.getElementById("timedate").innerHTML = currentTime.toDateString();
 let currentTimeHours = currentTime.getHours();
 // loop and create, set attrs and append to document body 24 times
 for (let i = 0; i <= 23; i++) {
  // create elements for each grid sector
  let progressTimeContainer = document.createElement("div");
  let timeSlotNodeL = document.createElement("div");
  let timeSlotNodeR = document.createElement("div");
  let activityInputNode = document.createElement("input");
  let textNode = document.createTextNode(formatTime(time));

  // set attributes for every element
  progressTimeContainer.setAttribute("class", "table-body-time-container");
  timeSlotNodeL.setAttribute("class", "table-body-left timeSlot");
  timeSlotNodeR.setAttribute("class", "table-body-right activitySlot");
  timeSlotNodeL.setAttribute("style", "grid-row:" + gRow + ";");
  timeSlotNodeR.setAttribute("style", "grid-row:" + gRow + ";");
  activityInputNode.setAttribute("type", "text");
  activityInputNode.setAttribute("placeholder", "What were you doing at this hour?");

  setConditionalAttrs(gRow, time, currentTimeHours, progressTimeContainer);
  // merge all the elements in a hierachal tree
  timeSlotNodeL.appendChild(textNode);
  timeSlotNodeR.appendChild(activityInputNode);
  document.body.children[1].children[1].appendChild(progressTimeContainer);
  document.body.children[1].children[1].appendChild(timeSlotNodeL);
  document.body.children[1].children[1].appendChild(timeSlotNodeR);
  gRow++;
  time++;
  liveLoad();
 }
}

// style the timebars so that all previous hours are highlighted, and the current hour is highlighted in a percentage representing the minutes
function tableBodyTimeContainerStyle() {
 let currentTime = new Date();
 let tableBodyTimeContainer = document.getElementsByClassName("table-body-time-container");
 // for each time bar that there is, iterate through it and set the inline style
 for (let i = 0; i < tableBodyTimeContainer.length; i++) {
  if (currentTime.getHours() >= i) {
   tableBodyTimeContainer[i].setAttribute("style", "height: 100%; width: 100%");
   if (currentTime.getHours() == i) {
    tableBodyTimeContainer[i].setAttribute("style", "height: 100%; width: " + currentTime.getMinutes() / 60 * 100 + "%;")
   }
  } else {
   tableBodyTimeContainer[i].setAttribute("style", "height: 0%; width: 0%;")
  }
 }
}

function liveLoad() {
 window.setInterval(function () {
  tableBodyTimeContainerStyle();
 }, 1000)
}

// testing accessing function from other file
function boo() {
 alert("boo");
}