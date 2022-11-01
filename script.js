// ADDED JS TO NAVIGATION MENU FOR ALL PAGES

const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".main-menu");

// referenced code from https://www.youtube.com/watch?v=flItyHiDm7E&ab_channel=codefoxx to add slide function and hamburger "x" to menu
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".main-menu li a").forEach(function (n) {
  n.addEventListener("click", function () {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

// // ADDED FORM SUBMITION ON CONTACT AND BLOG

const formElement = document.querySelector(".message-box button");

const formName = document.querySelector(".message-box input[name=name]");
// console.log(formName);
const formEmail = document.querySelector(".message-box input[name=email");
// console.log(formEmail);
const formText = document.querySelector(".message-box textarea[name=message]");
// console.log(formText);

formElement.addEventListener("click", function () {
  if (
    formName.value.length == 0 ||
    formEmail.value.length == 0 ||
    formText.value.length == 0
  ) {
    // console.log("Please fill all fields!");
    window.alert("please fill all fields!");
  } else {
    // console.log("submitted!!");
    window.alert("Message submitted!");
  }
});
