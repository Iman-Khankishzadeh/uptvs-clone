const menuList = document.querySelector(".menu-list");
const menuIcon = document.querySelector(".menu-icon");
const exitBtn = document.querySelector(".exit-icon");

menuIcon.addEventListener("click", () => {
  menuList.style.display = "inline-block";
});

exitBtn.addEventListener("click", () => {
  menuList.style.display = "none";
});
