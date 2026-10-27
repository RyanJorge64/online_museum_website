const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Data ---------- */
const exhibits = [{
		id: 'rice-terraces',
		title: 'Banaue Rice Terraces',
		cat: 'Photographs',
		icon: 'fa-mountain',
		meta: 'Ifugao, Cordillera',
		text: 'Carved into the mountains by hand over generations, the terraces show how a community shaped a landscape and still farms it today. This archive holds photographs of each planting season.'
	},
	{
		id: 'baybayin',
		title: 'Baybayin Script',
		cat: 'Stories',
		icon: 'fa-pen-nib',
		meta: 'Pre-colonial writing',
		text: 'Baybayin was used across the islands before Spanish rule. Read how the script worked, where it appears in surviving documents, and how designers and students are reviving it.'
	},
	{
		id: 'galleon-trade',
		title: 'The Galleon Trade',
		cat: 'Videos',
		icon: 'fa-ship',
		meta: 'Manila to Acapulco',
		text: 'For over two centuries, ships carried silk, silver and spices between Manila and Mexico. This short film traces one voyage and the port workers who made it possible.'
	},
	{
		id: 'customs-house',
		title: 'The Customs House',
		cat: 'Photographs',
		icon: 'fa-stamp',
		meta: 'Border control',
		text: 'See how customs administration grew from simple port tolls into the system that inspects and records cargo today, through scanned ledgers and period photographs.'
	},
	{
		id: 'walled-city',
		title: 'Walled City Stories',
		cat: 'Stories',
		icon: 'fa-church',
		meta: 'Intramuros, Manila',
		text: 'Churches, gates and stone walls hold the memory of a city that was both a fortress and a trading hub. Read accounts from residents and historians.'
	},
	{
		id: 'harbor-footage',
		title: 'Harbor Life',
		cat: 'Videos',
		icon: 'fa-anchor',
		meta: 'Maritime heritage',
		text: 'Archival and new footage of fishing boats, ferries and dockside markets, showing how maritime trade still shapes daily life in coastal towns.'
	}
];

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

/* ---------- Exhibit cards ---------- */
const grid = document.getElementById('exhibitGrid');
grid.innerHTML = exhibits.map((x) => `
  <button class="exhibit" data-reveal data-cat="${x.cat}" data-id="${x.id}">
    <div class="ex-art"><i class="fa-solid ${x.icon}"></i></div>
    <div class="ex-body">
      <p class="meta">${x.cat} · ${x.meta}</p>
      <h3>${x.title}</h3>
      <p>${x.text.split('. ')[0]}.</p>
    </div>
  </button>`).join('');
observeReveals();

document.querySelectorAll('.chip').forEach((chip) => chip.addEventListener('click', () => {
	document.querySelectorAll('.chip').forEach((c) => c.classList.toggle('active', c === chip));
	const f = chip.dataset.filter;
	grid.querySelectorAll('.exhibit').forEach((card) => {
		card.classList.toggle('hide', f !== 'all' && card.dataset.cat !== f);
	});
}));


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