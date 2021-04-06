"use strict";

const header = document.querySelector(".header");
const nav = document.querySelector(".navigation");
const navLink = document.querySelectorAll(".navigation__link");
const navCheck = document.querySelector(".navigation__checkbox");
const aboutSection = document.querySelector(".about");
const aboutCheck = document.querySelector(".about__checkbox");
const aboutBtnText = document.querySelector(".about__button--text");

const stickyNav = function (entries) {
	const [entry] = entries;

	if (!entry.isIntersecting) nav.classList.add("sticky");
	else nav.classList.remove("sticky");
};

const observer = new IntersectionObserver(stickyNav, {
	root: null,
	threshold: 0.3,
});
observer.observe(header);

navLink.forEach((el) => {
	el.addEventListener("click", function (e) {
		e.preventDefault();

		const id = this.getAttribute("href");

		if (navCheck.checked) {
			navCheck.checked = false;
		}

		document.querySelector(id).scrollIntoView({
			behavior: "smooth",
		});
	});
});

aboutCheck.addEventListener("click", function () {
	if (aboutCheck.checked) aboutBtnText.innerHTML = "See less";
	else aboutBtnText.innerHTML = "See more";
});
