//ridiculously simple alert function
//default values declared in the definition

// function myNameIs(first = "Julie", last = "Oelker") {
//   return `Hi, ${first} ${last}!

//   Click OK`;
// }

// alert(myNameIs());

//make it dependent on clicking the Save
//button, similar issue to project9,
//on page load, the console.log is triggered

const form = document.querySelector("#text-form");
form.onSubmit = alert(myNameIs());

function myNameIs(first = "Julie", last = "Oelker") {
  return `Hi, ${first} ${last}! 
    
  Click OK`;
}

// ridiculously simple IIFE
const cubed = (function (x) {
  return x * x * x;
})(4);

console.log(cubed);
