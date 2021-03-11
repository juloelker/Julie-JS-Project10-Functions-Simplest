//ridiculously simple alert function
//default values declared in the definition

// function myNameIs(first = "Julie", last = "Oelker") {
//   return `Hi, ${first} ${last}!

//   Click OK`;
// }

// alert(myNameIs());

//Make it dependent on clicking the Save
//button even if no text is entered.
// Two issues:
// 1. On page load, the alert is triggered immediately.
// Removed the () when calling myName function.

// 2. Using myName(fname
// = "Julie", lname = "Oelker") directly in the
// function parameters caused the first
// parameter not to display in the alert,
// got "Hi [onclickevent] Oelker!"
// Fixed this by placing the values inside the
// function.

const btn = document.querySelector("#txt-btn");
btn.addEventListener("click", myName);

function myName(fname, lname) {
  fname = "Julie";
  lname = "Oelker";
  alert(`Hi ${fname} ${lname}! Click OK!`);
}

// ridiculously simple IIFE
const cubed = (function (x) {
  return x * x * x;
})(4);

console.log(cubed);
