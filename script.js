const dropdownBtns = document.querySelectorAll(".dropdown-btn");
const burger = document.querySelector(".burger img");
const navbar = document.querySelector(".navbar");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".close");

dropdownBtns.forEach((btn) => {
    btn.addEventListener("click", () => btn.classList.toggle("active"));
});

burger.addEventListener("click", () => {
    navbar.classList.add("active");
    close.classList.add("active");
    overlay.classList.add("active");
});

close.addEventListener("click", () => {
    navbar.classList.remove("active");
    close.classList.remove("active");
    overlay.classList.remove("active");
});
