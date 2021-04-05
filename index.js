"use strict";

const header = document.querySelector(".header");
const nav = document.querySelector(".navigation");
const navLink = document.querySelectorAll(".navigation__link");

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
		console.log(id);

		document.querySelector(id).scrollIntoView({
			behavior: "smooth",
		});
	});
});
