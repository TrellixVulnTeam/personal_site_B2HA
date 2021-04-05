"use strict";

const header = document.querySelector(".header");
const nav = document.querySelector(".navigation");

const stickyNav = function (entries) {
	const [entry] = entries;

	if (!entry.isIntersecting) nav.classList.add("sticky");
	else nav.classList.remove("sticky");
};

const observer = new IntersectionObserver(stickyNav, {
	root: null,
	threshold: 0,
});
observer.observe(header);
