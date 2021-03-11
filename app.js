//ridiculously simple alert function
//default values declared in the definition

// function myNameIs(first = "Julie", last = "Oelker") {
//   return `Hi, ${first} ${last}!

//   Click OK`;
// }

// alert(myNameIs());

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
