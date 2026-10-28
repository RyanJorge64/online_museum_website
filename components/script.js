const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Data ---------- */
const events = [{
		year: '900',
		title: 'Early island trade',
		text: 'Traders from across Asia reach the archipelago. Goods, languages and beliefs begin to mix in coastal settlements.'
	},
	{
		year: '1521',
		title: 'Foreign contact',
		text: 'European ships arrive, and the islands enter a wider world of maritime routes that will change local culture for centuries.'
	},
	{
		year: '1565',
		title: 'The galleon trade begins',
		text: 'Manila becomes a hub linking Asia and the Americas. Food, art, religion and customs flow both ways.'
	},
	{
		year: '1898',
		title: 'A new nation',
		text: 'The Philippines declares independence. Ports and border control are reorganized under new governments.'
	},
	{
		year: 'Today',
		title: 'Heritage goes digital',
		text: 'Photographs, records and stories are scanned, tagged and shared, so anyone with a phone can reach them.'
	}
];

  const video = document.getElementById('hero-video');
  const btn = document.getElementById('playPauseBtn');

  btn.addEventListener('click', () => {
    if (video.paused) {
      video.play();
      btn.innerHTML = '<i class="fa-regular fa-circle-pause"></i>';
    } else {
      video.pause();
      btn.innerHTML = '<i class="fa-regular fa-circle-play"></i>';
    }
  });

/* ---------- Scroll reveal (IntersectionObserver) ---------- */
const io = new IntersectionObserver((entries) => {
	entries.forEach((e) => {
		if (!e.isIntersecting) return;
		e.target.classList.add('in');
		io.unobserve(e.target);
	});
}, {
	threshold: 0.15,
	rootMargin: '0px 0px -8% 0px'
});

function observeReveals(root = document) {
	root.querySelectorAll('[data-reveal]:not(.in)').forEach((el) => {
		const siblings = [...el.parentElement.children].filter((c) => c.hasAttribute('data-reveal'));
		el.style.setProperty('--d', Math.min(siblings.indexOf(el), 5) * 90 + 'ms');
		io.observe(el);
	});
}


const grid = document.getElementById('exhibitGrid');
observeReveals();


/* ---------- Timeline ---------- */
const track = document.getElementById('tlTrack');
const panel = document.getElementById('tlPanel');
const progress = document.getElementById('tlProgress');
events.forEach((ev, i) => {
	const b = document.createElement('button');
	b.className = 'tl-dot';
	b.textContent = ev.year;
	b.setAttribute('role', 'tab');
	b.addEventListener('click', () => showEvent(i));
	track.appendChild(b);
});

function showEvent(i) {
	const dots = track.querySelectorAll('.tl-dot');
	dots.forEach((d, n) => {
		d.classList.toggle('active', n === i);
		d.classList.toggle('reached', n <= i);
		d.setAttribute('aria-selected', n === i);
	});
	progress.style.width = (i / (events.length - 1)) * 100 + '%';
	panel.classList.remove('swap');
	panel.innerHTML = `<h3>${events[i].title}</h3><p>${events[i].text}</p>`;
	void panel.offsetWidth;
	if (!reduce) panel.classList.add('swap');
}
/* The timeline plays itself once when it scrolls into view */
let played = false;
new IntersectionObserver((entries, obs) => {
	if (!entries[0].isIntersecting || played) return;
	played = true;
	obs.disconnect();
	let i = 0;
	showEvent(0);
	if (reduce) return;
	const t = setInterval(() => {
		i++;
		showEvent(i);
		if (i >= events.length - 1) clearInterval(t);
	}, 900);
	track.addEventListener('click', () => clearInterval(t), {
		once: true
	});
}, {
	threshold: 0.5
}).observe(track);

/* ---------- Active nav link ---------- */
const links = document.querySelectorAll('.listlink');
const navObs = new IntersectionObserver((entries) => {
	entries.forEach((e) => {
		if (!e.isIntersecting) return;
		links.forEach((l) => l.classList.toggle('current', l.getAttribute('href') === '#' + e.target.id));
	});
}, {
	threshold: 0.4
});
document.querySelectorAll('main section[id]').forEach((s) => navObs.observe(s));