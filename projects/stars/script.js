function run() {
 let star = "*";
 let stars = "";
 let mx = 5;
 let userNum = document.getElementById("userNum").value;
 let consoleOut = document.getElementById("consoleOut");

 console.clear();
 consoleOut.innerHTML = "";

 if (!userNum.length) {
  mx = 5;
 } else if (userNum > 50) {
  let ays = confirm("Large numbers could crash your internet browser, are you sure?");
  ays ? mx = userNum : mx = 5;
 } else if (isNaN(userNum)) {
  alert("I haven't added the support for letters yet! Please only enter numbers.");
  mx = 5;
 } else {
  mx = userNum;
 }
 for (let i = 0; i < mx; i++) {
  stars = stars + star;
  let newp = document.createElement("p");
  newp.textContent = stars;
  document.body.children[3].appendChild(newp);
  if (stars.length == mx) {
   for (let j = mx - 1; j > 0; j--) {
    stars = stars.substr(0, j);
    let newp = document.createElement("p");
    newp.textContent = stars;
    document.body.children[3].appendChild(newp);
   }
  }
 }
}