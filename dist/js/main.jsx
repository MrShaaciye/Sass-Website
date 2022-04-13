const menuBtn = document.querySelector(".menu-btn");
const burger = document.querySelector(".menu-btn-burger");
const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav-list");
const navItem = document.querySelectorAll(".nav-list-item");

let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
	if (!showMenu) {
		burger.classList.add("open");
		nav.classList.add("open");
		navList.classList.add("open");
		navItem.forEach((item) => item.classList.add("open"));
		showMenu = true;
	} else {
		burger.classList.remove("open");
		nav.classList.remove("open");
		navList.classList.remove("open");
		navItem.forEach((item) => item.classList.remove("open"));
		showMenu = false;
	}
}
