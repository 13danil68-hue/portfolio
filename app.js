// Danila Tyumentsev portfolio: RU/EN copy, brands, bento case grid, animated case dialog.
// Language: ?lang=en / ?lang=ru in the link wins, then the saved choice, then the browser language.
const copy = {
  ru: {
    navWork: 'Кейсы', navContact: 'Контакты', location: 'Пермь · работаю удалённо · открыт к проектам',
    first: 'Данила', last: 'Тюменцев', role: 'Creative Producer / AI Creator',
    intro: 'Креативный и контент-продюсер. Придумываю форматы, концепции и сценарии для брендов и блогеров. Веду производство сам или с командой - от идеи до готового видео: AI-генерация, реальные съёмки, VFX, звук и монтаж.',
    viewWork: 'Смотреть кейсы ↓', resume: 'Скачать резюме ↗', fullCycle: 'От идеи до финального кадра',
    stat1: '140 млн+', stat1Label: 'просмотров на роликах, где я делал AI-часть', stat2: '84,1 млн', stat2Label: 'просмотров на одном Reels',
    stat3: '48 млн', stat3Label: 'YouTube Shorts за 2026 год', stat4Label: 'брендов: банки, ритейл, финтех, FMCG',
    brandsLabel: '01 / Бренды', brandsTitle: 'Делал креативы<br><span class="soft">для брендов</span>',
    brandsIntro: 'Многие проекты под NDA. Подробнее о задачах, решениях и процессе расскажу на собеседовании.',
    publicLbl: 'Открытые проекты:',
    selected: '02 / Кейсы', works: 'Публичные<br><span class="soft">проекты</span>', workIntro: 'Открой кейс - внутри видео, задача, что сделал и результат.',
    processLabel: '03 / Продюсирование и продакшн', processTitle: 'Одна идея.<br><span class="soft">Весь продакшн.</span>',
    processIntro: 'Разрабатываю контентные форматы, ставлю задачи команде и контролирую сроки и качество. Сам работаю с AI-видео, персонажами, аватарами, VFX и монтажом.',
    step1: 'Идея и сценарий', step1Text: 'Хуки, история, раскадровка.', step2: 'Генерация и герои', step2Text: 'Консистентные персонажи, AI-аватары, VFX, ComfyUI-workflow.',
    step3: 'Голос и музыка', step3Text: 'Озвучка, липсинг, музыка в Suno, саунд-дизайн.', step4: 'Монтаж и вариации', step4Text: 'Сборка, графика, вариации хуков под тесты.',
    producer1: 'Форматы и идеи', producer1Text: 'Разрабатываю рубрики, серийные форматы, сценарии и хуки для Reels и Shorts. Отслеживаю тренды и собираю банк референсов под задачи проекта.',
    producer2: 'Команда и качество', producer2Text: 'Ставлю задачи дизайнерам, монтажёрам, AI-креаторам, блогерам и UGC-креаторам. Координирую работу, контролирую сроки и качество, обучаю специалистов.',
    producer3: 'Процессы и автоматизация', producer3Text: 'Выстраиваю повторяемый процесс выпуска контента. Использую собственные сборки для автомонтажа и систему мониторинга трендов, созданную вместе с разработчиком.',
    toolsLbl: 'Инструменты',
    contactLabel: '04 / На связи', contactTitle: 'Беру креатив от идеи<br><span class="soft">до финального файла</span>',
    footer: 'Данила Тюменцев · Creative Producer / AI Creator', top: 'Наверх ↑', loadError: 'Не удалось загрузить кейсы. Обновите страницу.',
    task: 'Задача', did: 'Что сделал', result: 'Результат', close: 'Закрыть', watch: 'Открыть кейс', clip: 'Ролик', still: 'Кадр',
    kindCase: 'Кейс', gallery: 'Кадры и материалы',
  },
  en: {
    navWork: 'Work', navContact: 'Contact', location: 'Perm, Russia · remote · open to projects',
    first: 'Danila', last: 'Tyumentsev', role: 'Creative Producer / AI Creator',
    intro: 'Creative and content producer. I develop formats, concepts and scripts for brands and creators. I handle production myself or lead a team - from idea to finished video: AI generation, live footage, VFX, sound and editing.',
    viewWork: 'Explore work ↓', resume: 'Download resume ↗', fullCycle: 'From idea to the final frame',
    stat1: '140M+', stat1Label: 'views on videos where I did the AI work', stat2: '84.1M', stat2Label: 'views on a single Reel',
    stat3: '48M', stat3Label: 'YouTube Shorts views in 2026', stat4Label: 'brands: banking, retail, fintech, FMCG',
    brandsLabel: '01 / Brands', brandsTitle: 'Brands I have<br><span class="soft">made creatives for</span>',
    brandsIntro: 'Many projects are under NDA. I can discuss the briefs, solutions and creative process in more detail during an interview.',
    publicLbl: 'Open projects:',
    selected: '02 / Work', works: 'Public<br><span class="soft">projects</span>', workIntro: 'Open a case to see the video, the task, what I did and the result.',
    processLabel: '03 / Producing and production', processTitle: 'One idea.<br><span class="soft">The whole production.</span>',
    processIntro: 'I develop content formats, brief the team and oversee deadlines and quality. I also create AI videos, characters, avatars and VFX, and edit the final cut.',
    step1: 'Idea and script', step1Text: 'Hooks, story, storyboard.', step2: 'Generation and characters', step2Text: 'Consistent characters, AI avatars, VFX, ComfyUI workflows.',
    step3: 'Voice and music', step3Text: 'Voice-over, lip sync, music in Suno, sound design.', step4: 'Edit and variations', step4Text: 'Assembly, graphics, hook variations for testing.',
    producer1: 'Formats and ideas', producer1Text: 'I develop recurring series, scripts and hooks for Reels and Shorts. I track trends and build a reference library around each project’s goals.',
    producer2: 'Team and quality', producer2Text: 'I brief designers, editors, AI creators, bloggers and UGC creators. I coordinate their work, oversee deadlines and quality, and train specialists.',
    producer3: 'Processes and automation', producer3Text: 'I build repeatable content production workflows using custom automated editing tools and a trend-monitoring system created with a developer.',
    toolsLbl: 'Tools',
    contactLabel: '04 / Get in touch', contactTitle: 'From idea<br><span class="soft">to final file</span>',
    footer: 'Danila Tyumentsev · Creative Producer / AI Creator', top: 'Back to top ↑', loadError: 'Could not load the projects. Please refresh the page.',
    task: 'The task', did: 'What I did', result: 'The result', close: 'Close', watch: 'Open case', clip: 'Video', still: 'Still',
    kindCase: 'Case', gallery: 'Stills and materials',
  },
};
const categories = { ads: ['AI-реклама', 'AI ads'], animation: ['Анимация', 'Animation'], characters: ['Персонажи', 'Characters'], series: ['AI-сериалы', 'AI series'],
  vfx: ['AI-VFX', 'AI VFX'], avatars: ['AI-аватары', 'AI avatars'], social: ['Соцсети', 'Social'], concepts: ['Концепты', 'Concepts'], product: ['Продуктовые визуалы', 'Product visuals'], music: ['Музыкальные клипы', 'Music videos'] };
const nda = [['Пятёрочка', 'Pyaterochka', 'маскоты, реализм, мультипликация', 'mascots, realistic and animated video'], ['Яндекс Пэй', 'Yandex Pay', 'реализм, анимация, AI-музыка', 'realistic video, animation, AI music'],
  ['Maggi', 'Maggi', 'мультфильмы и реализм', 'cartoons and realistic video'], ['Haier', 'Haier', 'AI вместо съёмок', 'AI instead of live shoots'], ['Ростелеком', 'Rostelecom', 'рекламные AI-креативы', 'AI ad creatives'],
  ['BIOCAD', 'BIOCAD', 'AI-креативы', 'AI creatives'], ['БКС', 'BCS', 'рекламные AI-креативы', 'AI ad creatives'], ['ВинЛаб', 'WineLab', 'рекламные AI-креативы', 'AI ad creatives'],
  ['Маркетплейсы', 'Marketplaces', 'карточки товаров', 'product cards']];
const toolGroups = [
  {label: ['Видео', 'Video'], items: ['Higgsfield', 'Kling', 'Veo', 'Seedance', 'Sora', 'Runway', 'HeyGen']},
  {label: ['Картинки', 'Images'], items: ['Midjourney', 'Nano Banana', 'Flux', 'ComfyUI', 'Photoshop']},
  {label: ['Монтаж', 'Editing'], items: ['Premiere Pro', 'After Effects', 'CapCut']},
  {label: ['Звук, озвучка и музыка', 'Sound, voice-over and music'], items: ['ElevenLabs', 'Suno']},
  {label: ['Сценарии и идеи', 'Scripts and ideas'], items: ['ChatGPT', 'Claude']},
];
// client case order and bento sizes (4 columns on desktop, 2 on tablet and phone)
const layout = [['uralsib', 'big'], ['bonche', 'big'], ['danmax', 'tall'], ['zelenovka', 'tall'], ['doston', 'tall'], ['easy-payments', 'tall'], ['maksik', 'big'], ['ai-series', 'big']];

const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches, hover = matchMedia('(hover: hover) and (pointer: fine)').matches;
const L = () => (lang === 'ru' ? 0 : 1), T = (k) => copy[lang][k], cat = (c) => c.categories.filter((k) => k !== 'concepts').map((k) => categories[k][L()]).join(' / ');

let lang = 'ru', cases = [], active = null, opener = null;
(() => {
  const q = new URLSearchParams(location.search).get('lang');
  let saved = null; try { saved = localStorage.getItem('portfolio-language'); } catch {}
  lang = q === 'en' || q === 'ru' ? q : saved === 'en' || saved === 'ru' ? saved : /^ru|^uk|^be|^kk/i.test(navigator.language || 'ru') ? 'ru' : 'en';
})();

function translate() {
  document.documentElement.lang = lang;
  document.title = lang === 'ru' ? 'Данила Тюменцев - Creative Producer / AI Creator' : 'Danila Tyumentsev - Creative Producer / AI Creator';
  $$('[data-i]').forEach((e) => { if (copy[lang][e.dataset.i] != null) e.innerHTML = copy[lang][e.dataset.i]; });
  $$('.resume').forEach((e) => (e.href = `assets/resume-${lang}.pdf`));
  const b = $('#language'); b.textContent = lang === 'ru' ? 'EN' : 'RU'; b.setAttribute('aria-label', lang === 'ru' ? 'Switch to English' : 'Переключить на русский');
  $('#close-dialog').setAttribute('aria-label', T('close'));
  const chip = (n) => `<div class="brand-chip glass"><b>${n[L()]}<span class="nda-what">${n[L() + 2]}</span></b></div>`;
  $('#nda-track').innerHTML = nda.map(chip).join('');
  $('#tools').innerHTML = `<p class="lbl">${T('toolsLbl')}</p><div class="tool-groups">` + toolGroups.map((g) => `<div class="tool-group"><h3>${g.label[L()]}</h3><div class="tool-items">${g.items.map((t) => `<span class="t">${t}</span>`).join('')}</div></div>`).join('') + '</div>';
  render(); runCounters();
  if (active) renderCase(active.c, active.v, true);
}

function render() {
  if (!cases.length) return;
  const byId = Object.fromEntries(cases.map((c) => [c.id, c]));
  $('#public-brands').innerHTML = `<span class="lbl">${T('publicLbl')}</span>` + layout.filter(([id]) => byId[id] && id !== 'ai-series')
    .map(([id]) => `<button class="glass sheen" data-id="${id}">${esc(byId[id].brand[lang])}<span>↗</span></button>`).join('');
  $('#grid').innerHTML = layout.filter(([id]) => byId[id]).map(([id, size], i) => {
    const c = byId[id];
    return `<button class="card ${size} reveal" style="--d:${(i % 4) * 0.06}s" data-id="${id}" aria-label="${T('watch')}: ${esc(c.brand[lang])}">
      <img class="cover" src="${c.poster}" alt="" loading="lazy" style="object-position:${c.id === 'bonche' ? '30% center' : 'center 28%'}">
      <div class="top"><span class="num">${String(i + 1).padStart(2, '0')}</span><span class="play" aria-hidden="true">${c.videos.length ? '▶' : '↗'}</span></div>
      <div class="info glass"><p class="fmt">${esc(cat(c))}</p><h3>${esc(c.brand[lang])}</h3><span class="metric">${esc(c.metric[lang])}</span></div></button>`;
  }).join('');
  observe();
}

// ---------- case dialog ----------
function renderCase(c, vi = 0, keep) {
  const t = c[lang], gal = c.gallery || [];
  $('#dialog-kind').textContent = T('kindCase');
  $('#case-content').innerHTML = `<div class="case-layout">
    <div class="stage-col"><div class="stage" id="stage"></div>
      ${c.videos.length > 1 ? `<div class="thumbs" role="group" aria-label="${T('clip')}">${c.videos.map((v, i) => `<button data-video="${i}" aria-pressed="${i === vi}" aria-label="${T('clip')} ${i + 1}"><img src="${v.poster || c.poster}" alt="" loading="lazy"></button>`).join('')}</div>` : ''}
      <p class="cap" id="cap"></p></div>
    <div class="case-text"><p class="eyebrow">${esc(cat(c))}</p><h2 id="case-title">${esc(t.t)}</h2>
      <span class="case-metric"><span class="dot" style="background:var(--paper)"></span>${esc(c.metric[lang])}</span>
      <div class="facts">${[['task', 'q'], ['did', 'd'], ['result', 'r']].map(([l, k], i) => `<article class="glass"><h3><i>${i + 1}</i>${T(l)}</h3><p>${esc(t[k])}</p></article>`).join('')}</div>
      ${c.external ? `<div class="external">${c.external.map((l) => `<a class="glass sheen" href="${esc(l.url)}" target="_blank" rel="noopener noreferrer">${esc(l[lang])} ↗</a>`).join('')}</div>` : ''}
    </div></div>
    ${gal.length ? `<p class="gallery-head">${T('gallery')}</p><div class="gallery">${gal.map((u, i) => `<button data-zoom="${u}" aria-label="${T('still')} ${i + 1}"><img src="${u}" alt="${esc(c.brand[lang])} - ${T('still').toLowerCase()} ${i + 1}" loading="lazy"></button>`).join('')}</div>` : ''}`;
  selectVideo(vi, !keep);
}

function selectVideo(i, autoplay) {
  if (!active) return;
  const c = active.c, v = c.videos[i], st = $('#stage'); active.v = i;
  const poster = v ? v.poster || c.poster : c.poster;
  const img = new Image();
  img.onload = () => { const r = img.naturalWidth / img.naturalHeight; st.style.aspectRatio = r; st.style.width = `min(100%, calc(78vh * ${r}))`; };
  img.src = poster;
  st.innerHTML = v ? `<video controls playsinline preload="metadata" poster="${poster}" aria-label="${esc(c[lang].t)}"><source src="${v.src}" type="video/mp4"></video>` : `<img src="${poster}" alt="${esc(c[lang].t)}">`;
  st.classList.remove('swap'); void st.offsetWidth; st.classList.add('swap');
  $('#cap').textContent = v?.label ? v.label[lang] : '';
  $$('[data-video]').forEach((b) => b.setAttribute('aria-pressed', Number(b.dataset.video) === i));
  if (v && autoplay) $('video', st).play().catch(() => {});
}

function openCase(id, vi = 0) {
  const c = cases.find((x) => x.id === id); if (!c) return;
  opener = document.activeElement; active = { c, v: vi };
  renderCase(c, vi);
  const d = $('#case-dialog'); d.classList.remove('closing');
  if (!d.open) d.showModal();
  d.scrollTop = 0; document.body.classList.add('modal-open');
  history.replaceState(null, '', `${location.search}#case-${id}`);
  pauseReel(true);
}
function closeCase() {
  const d = $('#case-dialog'); if (!d.open || d.classList.contains('closing')) return;
  $$('video', d).forEach((v) => v.pause());
  if (reduced) return d.close();
  d.classList.add('closing'); setTimeout(() => d.close(), 280);
}
$('#case-dialog').addEventListener('close', () => {
  const d = $('#case-dialog'); d.classList.remove('closing');
  $('#case-content').innerHTML = ''; active = null; $('#lightbox').hidden = true;
  document.body.classList.remove('modal-open'); history.replaceState(null, '', `${location.search}#work`);
  if (opener?.isConnected) opener.focus({ preventScroll: true });
  pauseReel(false);
});
$('#case-dialog').addEventListener('cancel', (e) => { e.preventDefault(); if (!$('#lightbox').hidden) $('#lightbox').hidden = true; else closeCase(); });
$('#case-dialog').addEventListener('click', (e) => {
  if (e.target.id === 'case-dialog') return closeCase();
  const z = e.target.closest('[data-zoom]'); if (z) { const lb = $('#lightbox'); $('img', lb).src = z.dataset.zoom; lb.hidden = false; return; }
  if (e.target.closest('#lightbox')) { $('#lightbox').hidden = true; return; }
  const b = e.target.closest('[data-video]'); if (b) selectVideo(Number(b.dataset.video), true);
});
$('#close-dialog').addEventListener('click', closeCase);

// ---------- page interactions ----------
document.addEventListener('click', (e) => {
  const o = e.target.closest('[data-open]'); if (o) return openCase(o.dataset.open, Number(o.dataset.v || 0));
  const c = e.target.closest('[data-id]'); if (c && !c.closest('dialog')) return openCase(c.dataset.id);
});
$('#language').addEventListener('click', () => {
  lang = lang === 'ru' ? 'en' : 'ru';
  try { localStorage.setItem('portfolio-language', lang); } catch {}
  history.replaceState(null, '', `?lang=${lang}${location.hash}`);
  translate();
});

// hover preview: a card plays its first video muted only while the pointer is on it (desktop)
if (hover) {
  document.addEventListener('pointerover', (e) => {
    const card = e.target.closest('.card'); if (!card || card.dataset.pv) return;
    const c = cases.find((x) => x.id === card.dataset.id); if (!c?.videos.length) return;
    card.dataset.pv = '1';
    const v = document.createElement('video'); Object.assign(v, { muted: true, loop: true, playsInline: true, src: c.videos[0].src }); v.className = 'preview';
    card.insertBefore(v, card.querySelector('.top'));
    v.play().then(() => v.classList.add('on')).catch(() => {});
    card.addEventListener('pointerleave', () => { v.classList.remove('on'); setTimeout(() => { v.pause(); v.remove(); delete card.dataset.pv; }, 500); }, { once: true });
  });
  // glass sheen follows the pointer
  document.addEventListener('pointermove', (e) => {
    const s = e.target.closest('.sheen'); if (!s) return;
    const r = s.getBoundingClientRect(); s.style.setProperty('--mx', `${e.clientX - r.left}px`); s.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
}

// reveal on scroll
const io = 'IntersectionObserver' in window ? new IntersectionObserver((es) => es.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } }), { rootMargin: '0px 0px -8% 0px' }) : null;
function observe() { $$('.reveal:not(.in)').forEach((el) => (io && !reduced && el.getBoundingClientRect().top > innerHeight * 0.9 ? io.observe(el) : setTimeout(() => el.classList.add('in'), 40))); }

// stat counters
let counted = false, counterEpoch = 0;
function runCounters() {
  const epoch = ++counterEpoch;
  $$('.count').forEach((el) => {
    const target = el.dataset.i ? T(el.dataset.i) : (el.dataset.countTarget || el.textContent);
    el.dataset.countTarget = target;
    const m = target.trim().match(/^([\d]+)([.,]\d+)?(.*)$/); if (!m) return;
    const end = parseFloat(m[1] + (m[2] ? '.' + m[2].slice(1) : '')), dec = m[2] ? m[2].length - 1 : 0, sep = m[2] ? m[2][0] : '', tail = m[3];
    const fmt = (x) => (dec ? x.toFixed(dec).replace('.', sep) : Math.round(x)) + tail;
    if (counted || reduced) { el.textContent = fmt(end); return; }
    el.textContent = fmt(0);
    const go = () => { if (epoch !== counterEpoch) return; const t0 = performance.now(); const step = (t) => { if (epoch !== counterEpoch) return; const k = Math.min(1, (t - t0) / 1600); el.textContent = fmt(end * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(step); }; requestAnimationFrame(step); };
    const o = new IntersectionObserver((es) => { if (es[0].isIntersecting) { o.disconnect(); go(); } }); o.observe(el);
  });
  counted = true;
}

// muted showreel behind the hero: plays only while visible, skipped on reduced motion or data saver
const reel = $('#reel'); let reelBlocked = reduced || navigator.connection?.saveData;
function pauseReel(p) { if (reelBlocked) return; p ? reel.pause() : reelVisible && reel.play().catch(() => {}); }
let reelVisible = true;
if (!reelBlocked) {
  reel.preload = 'auto'; reel.play().catch(() => {});
  new IntersectionObserver((es) => { reelVisible = es[0].isIntersecting; pauseReel(!reelVisible || !!active); }).observe(reel);
}

// background wave parallax
if (!reduced) { let raf = 0; addEventListener('scroll', () => { if (raf) return; raf = requestAnimationFrame(() => { raf = 0; document.documentElement.style.setProperty('--scroll', Math.min(1, scrollY / (document.body.scrollHeight - innerHeight || 1)).toFixed(3)); }); }, { passive: true }); }

translate(); observe();
fetch('cases.json?v=6').then((r) => { if (!r.ok) throw Error(r.status); return r.json(); }).then((data) => {
  cases = data; render();
  if (location.hash.startsWith('#case-')) openCase(location.hash.slice(6));
}).catch(() => ($('#load-error').hidden = false));