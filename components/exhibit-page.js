/* Scroll reveal and active table-of-contents link for exhibit pages. */
const io = new IntersectionObserver((entries) => {
	entries.forEach((e) => {
		if (!e.isIntersecting) return;
		e.target.classList.add('in');
		io.unobserve(e.target);
	});
}, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });

document.querySelectorAll('[data-reveal]').forEach((el) => {
	const siblings = [...el.parentElement.children].filter((c) => c.hasAttribute('data-reveal'));
	el.style.setProperty('--d', Math.min(siblings.indexOf(el), 5) * 90 + 'ms');
	io.observe(el);
});

/* Highlight the section being read in the "On this page" list */
const tocLinks = [...document.querySelectorAll('.toc a[href^="#"]')];
const tocObs = new IntersectionObserver((entries) => {
	entries.forEach((e) => {
		if (!e.isIntersecting) return;
		tocLinks.forEach((a) => a.classList.toggle('current', a.getAttribute('href') === '#' + e.target.id));
	});
}, { rootMargin: '-20% 0px -65% 0px' });
tocLinks.forEach((a) => {
	const target = document.querySelector(a.getAttribute('href'));
	if (target) tocObs.observe(target);
});
