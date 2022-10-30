// ADDED JS TO NAVIGATION MENU FOR ALL PAGES

const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".main-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".main-menu li a").forEach((n) =>
  n.addEventListener("click", function () {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// // ADDED FORM SUBMITION ON CONTACT AND BLOG

// // Find the form element on the page
// const formElement = document.querySelector("form");

// // Add an event listener for the 'submit' event
// formElement.addEventListener("submit", function () {
//   // When the form is submitted...
//   // get the task from the input
//   // add the task as a list-item to the <ul>
// });

const formElement = document.querySelector(".message-box button");

const formName = document.querySelector(".message-box input[name=name]");
console.log(formName);
const formEmail = document.querySelector(".message-box input[name=email");
console.log(formEmail);

formElement.addEventListener("click", function () {
  if (formName.value.length == 0 && formEmail.value.length == 0) {
    console.log("Please fill all fields!");
    // window.alert("please fill all fields!");
  } else {
    console.log("submitted!!");
    // window.alert("Message submitted!");
    // formName.value = "";
    // console.log("cleared");
  }
});

// formElement.addEventListener("click", function () {
//   if (formEmail.value.length == 0 ) {
//     console.log("please fill field");
//   } else {
//     console.log("submit");
//   }
// });

// formElement.addEventListener("click", function () {
//   formName.value = "";
//   console.log("cleared");
// });
