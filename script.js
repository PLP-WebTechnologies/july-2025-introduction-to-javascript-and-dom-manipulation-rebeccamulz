/******** Part 1: Basics ********/
let age = 16;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

/******** Part 2: Functions ********/
function square(num) {
  return num * num;
}
console.log("Square of 4:", square(4));

function greet(name) {
  return "Hi " + name;
}
console.log(greet("Alice"));

/******** Part 3: Loops ********/
// For loop
for (let i = 1; i <= 3; i++) {
  console.log("Number:", i);
}

// While loop
let count = 3;
while (count > 0) {
  console.log("Countdown:", count);
  count--;
}

/******** Part 4: DOM ********/
// Change text
document.getElementById("btnText").onclick = function() {
  document.getElementById("message").textContent = "Text changed!";
};

// Toggle color
document.getElementById("btnColor").onclick = function() {
  document.getElementById("message").classList.toggle("highlight");
};

// Add list item
document.getElementById("btnAdd").onclick = function() {
  let li = document.createElement("li");
  li.textContent = "New Item";
  document.getElementById("list").appendChild(li);
};
