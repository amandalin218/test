/* Amanda Lin Portfolio — 互動邏輯
   1. 作品資料（PROJECTS）→ 在 projects.js
   2. 精選作品跳窗（分頁縮圖、OPEN PAGE、原圖放大、手機左右滑動）
   3. ABOUT ME 跳窗
   4. 鍵盤操作（Tab / Enter / 空白鍵 / 方向鍵 / Esc） */

// 作品資料（PROJECTS）已移到 projects.js，首頁彈窗與 works/ 分類頁共用，要先載入 projects.js


/* ---------- 1. 導覽列：依目前所在區域切換 active ---------- */
const navLinks = Array.from(document.querySelectorAll('.nav-link[href^="#"]'));
const navSections = ['home', 'works', 'about']
  .map(function (id) { return document.getElementById(id); })
  .filter(Boolean);

function setActiveNav(id) {
  navLinks.forEach(function (link) {
    link.classList.toggle('active', link.getAttribute('href') === '#' + id);
  });
}

navLinks.forEach(function (link) {
  link.addEventListener('click', function () {
    var id = link.getAttribute('href').slice(1);
    setActiveNav(id);
  });
});

if (navSections.length && 'IntersectionObserver' in window) {
  var navObserver = new IntersectionObserver(function (entries) {
    var visible = entries
      .filter(function (entry) { return entry.isIntersecting; })
      .sort(function (a, b) { return b.intersectionRatio - a.intersectionRatio; });

    if (visible.length) setActiveNav(visible[0].target.id);
  }, {
    rootMargin: '-22% 0px -58% 0px',
    threshold: [0, 0.1, 0.25, 0.5]
  });

  navSections.forEach(function (section) { navObserver.observe(section); });
}

if (window.location.hash && navSections.some(function (section) {
  return '#' + section.id === window.location.hash;
})) {
  setActiveNav(window.location.hash.slice(1));
} else {
  setActiveNav('home');
}

/* ---------- 2. 精選作品跳窗 ---------- */
var PAGE_SIZE = 6;
var state = { key: null, index: 0 };
// R18 作品：點一次「顯示」後，這次瀏覽（重新整理前）全部解鎖
var r18Unlocked = false;
function isLocked(it) { return !!(it && it.r18 && !r18Unlocked); }

var el = {
  gallery: document.getElementById('gallery'),
  main: document.getElementById('lbMain'),
  link: document.getElementById('lbLink'),
  r18: document.getElementById('lbR18'),
  thumbs: document.getElementById('lbThumbs'),
  num: document.getElementById('lbNum'),
  title: document.getElementById('lbTitle'),
  cap: document.getElementById('lbCap'),
  nav: document.getElementById('lbNav'),
  prev: document.getElementById('lbPrev'),
  next: document.getElementById('lbNext'),
  count: document.getElementById('lbCount'),
  bio: document.getElementById('bio'),
  zoom: document.getElementById('zoom'),
  zoomImg: document.getElementById('zoomImg')
};

function items(key) {
  var p = PROJECTS[key];
  if (!p) return [];
  return (p.works || []).map(function (w, i) {
    return { src: w[0] || null, caption: w[1] || '', url: w[2] || null, r18: w[3] === 'r18', color: p.tint[i % p.tint.length] };
  });
}

/* 縮圖路徑：assets/xxx.webp → thumbs/assets/xxx.webp（寬高最大 360px） */
function thumbOf(src) {
  return src ? 'thumbs/' + src : null;
}

/* 預先下載圖片（同一張只會下載一次，並留在記憶體避免被回收） */
var preloaded = {};
function preloadImage(src) {
  if (!src || preloaded[src]) return;
  var img = new Image();
  img.decoding = 'async';
  img.src = src;
  preloaded[src] = img;
}

/* 圖片下載完（或失敗）後執行 cb；已經下載好就立刻執行 */
function whenLoaded(src, cb) {
  preloadImage(src);
  var img = preloaded[src];
  if (!img || (img.complete && img.naturalWidth)) { cb(); return; }
  img.addEventListener('load', cb, { once: true });
  img.addEventListener('error', cb, { once: true });
}

/* 幫某個元素顯示「載入中…」，直到 src 下載完。
   token 用來避免快速切換時，舊圖片載完把新圖片的提示拿掉 */
function showLoading(node, src) {
  if (!node) return;
  if (!src) { node.classList.remove('is-loading'); return; }
  var token = (node._loadToken || 0) + 1;
  node._loadToken = token;
  node.classList.add('is-loading');
  whenLoaded(src, function () {
    if (node._loadToken === token) node.classList.remove('is-loading');
  });
}

/* 預先下載某一頁的縮圖 + 大圖 */
function preloadPage(list, page) {
  var slice = list.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE);
  slice.forEach(function (it) { preloadImage(thumbOf(it.src)); });
  slice.forEach(function (it) { preloadImage(it.src); });
}

function render() {
  var p = PROJECTS[state.key];
  if (!p) return;
  var list = items(state.key);
  var cur = list[state.index];
  var pages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  var page = Math.floor(state.index / PAGE_SIZE);

  // 先抓目前這張，再抓這一頁其他大圖，最後抓下一頁的縮圖
  if (cur && cur.src) preloadImage(cur.src);
  preloadPage(list, page);
  list.slice((page + 1) * PAGE_SIZE, (page + 2) * PAGE_SIZE).forEach(function (it) {
    preloadImage(thumbOf(it.src));
  });

  // 大圖疊兩層：上層原圖、下層縮圖。縮圖已經載好會先出現，原圖載完就蓋上去，不會空白
  el.main.style.backgroundImage = cur && cur.src
    ? 'url(' + cur.src + '), url(' + thumbOf(cur.src) + ')'
    : 'none';
  showLoading(el.main, cur && cur.src);
  el.main.style.backgroundColor = cur && cur.src ? 'transparent' : (cur ? cur.color : '#EAF0F5');
  el.main.classList.toggle('has-link', !!(cur && cur.url));
  el.main.classList.toggle('is-zoomable', canZoom(cur));
  // R18 遮罩：還沒解鎖就蓋住大圖
  el.r18.hidden = !isLocked(cur);
  // 可以放大時，鍵盤也能用 Tab 選到大圖、按 Enter 放大
  if (canZoom(cur)) {
    el.main.setAttribute('role', 'button');
    el.main.setAttribute('tabindex', '0');
    el.main.setAttribute('aria-label', '放大看原圖：' + cur.caption);
  } else {
    el.main.removeAttribute('role');
    el.main.removeAttribute('tabindex');
    el.main.removeAttribute('aria-label');
  }
  if (cur && cur.url) el.link.href = cur.url;

  el.num.textContent = p.num;
  el.title.textContent = p.title;
  el.cap.textContent = cur ? cur.caption : '';

  el.thumbs.innerHTML = '';
  list.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE).forEach(function (it, j) {
    var i = page * PAGE_SIZE + j;
    var d = document.createElement('div');
    d.className = 'lb-thumb' + (i === state.index ? ' is-active' : '');
    d.setAttribute('role', 'button');
    d.setAttribute('tabindex', '0');
    d.setAttribute('aria-label', (i + 1) + '. ' + it.caption);
    if (i === state.index) d.setAttribute('aria-current', 'true');
    d.style.backgroundColor = it.color;
    if (it.src) {
      d.style.backgroundImage = 'url(' + thumbOf(it.src) + ')';
      showLoading(d, thumbOf(it.src));
    }
    if (isLocked(it)) {
      var m = document.createElement('div');
      m.className = 'r18-mask';
      m.innerHTML = '<img src="assets/r18.png" alt="R18">';
      d.appendChild(m);
    }
    d.addEventListener('click', function () {
      state.index = i;
      render();
      // 用鍵盤選縮圖時，重畫後把焦點留在同一張縮圖上
      var again = el.thumbs.children[j];
      if (again && document.activeElement === document.body) again.focus();
    });
    el.thumbs.appendChild(d);
  });

  el.nav.hidden = pages < 2;
  el.count.textContent = '第 ' + (page + 1) + ' / ' + pages + ' 頁';
  el.prev.classList.toggle('is-hidden', page === 0);
  el.next.classList.toggle('is-hidden', page >= pages - 1);
}

/* 有圖片、且該筆沒有外部連結（有連結的改用 OPEN PAGE）時，就能點大圖看原圖 */
function canZoom(cur) {
  return !!(cur && cur.src && !cur.url && !isLocked(cur));
}

/* 換到上一張 / 下一張（鍵盤方向鍵、手機滑動共用） */
function step(d) {
  var list = items(state.key);
  if (!list.length) return;
  state.index = (state.index + d + list.length) % list.length;
  render();
}

function pageStep(d) {
  var list = items(state.key);
  var pages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  var page = Math.min(pages - 1, Math.max(0, Math.floor(state.index / PAGE_SIZE) + d));
  state.index = page * PAGE_SIZE;
  render();
}

/* 打開跳窗時記住原本的焦點，關掉後放回去（鍵盤使用者不會迷路） */
var returnFocus = {};

function openOverlay(node) {
  returnFocus[node.id] = document.activeElement;
  node.hidden = false;
  node.classList.remove('is-closing');
  var first = node.querySelector('[tabindex="0"]');
  if (first) first.focus({ preventScroll: true });
}

function openGallery(key) {
  state.key = key;
  state.index = 0;
  render();
  openOverlay(el.gallery);
}

function closeOverlay(node) {
  if (!node || node.hidden) return;
  node.classList.add('is-closing');
  setTimeout(function () {
    node.hidden = true;
    node.classList.remove('is-closing');
  }, 300);
  var back = returnFocus[node.id];
  if (back && back.focus) back.focus({ preventScroll: true });
}

document.querySelectorAll('.round-btn[data-open]').forEach(function (n) {
  var key = n.getAttribute('data-open');
  // 「→」按鈕和同一列的封面圖，點了都會打開跳窗
  var cover = n.closest('.work-row') && n.closest('.work-row').querySelector('figure');
  // 滑鼠移到按鈕上（或手機手指按下）時就先開始下載第一頁，點開時多半已經好了
  var warm = function () {
    var list = items(key);
    list.slice(0, PAGE_SIZE).forEach(function (it) { preloadImage(thumbOf(it.src)); });
    if (list[0]) preloadImage(list[0].src);
  };
  [n, cover].filter(Boolean).forEach(function (t) {
    t.addEventListener('click', function () { openGallery(key); });
    t.addEventListener('pointerenter', warm, { once: true });
    t.addEventListener('touchstart', warm, { once: true, passive: true });
  });
  if (cover) cover.classList.add('is-clickable');
});

/* 首頁作品封面、ABOUT 照片（CSS 背景圖）：還沒載完就顯示「載入中…」 */
function showBgLoading(node) {
  var bg = getComputedStyle(node).backgroundImage;
  var m = bg && bg.match(/url\(["']?(.*?)["']?\)/);
  if (m) showLoading(node, m[1]);
}
document.querySelectorAll('.work-row figure, .about-image').forEach(showBgLoading);

/* 頁面載入完、瀏覽器閒下來後，偷偷先把每個分類第一頁的縮圖抓好 */
window.addEventListener('load', function () {
  var idle = window.requestIdleCallback || function (fn) { setTimeout(fn, 1500); };
  idle(function () {
    Object.keys(PROJECTS).forEach(function (key) {
      items(key).slice(0, PAGE_SIZE).forEach(function (it) { preloadImage(thumbOf(it.src)); });
    });
  });
});
el.gallery.addEventListener('click', function (e) {
  if (e.target === el.gallery) closeOverlay(el.gallery);
});
document.querySelectorAll('[data-close="gallery"]').forEach(function (n) {
  n.addEventListener('click', function () { closeOverlay(el.gallery); });
});
el.prev.addEventListener('click', function () { pageStep(-1); });
el.next.addEventListener('click', function () { pageStep(1); });

/* 手機：在大圖上左右滑動換上一張 / 下一張 */
var touchStart = null;
el.main.addEventListener('touchstart', function (e) {
  if (e.touches.length !== 1) { touchStart = null; return; }
  touchStart = { x: e.touches[0].clientX, y: e.touches[0].clientY };
}, { passive: true });
el.main.addEventListener('touchend', function (e) {
  if (!touchStart) return;
  var dx = e.changedTouches[0].clientX - touchStart.x;
  var dy = e.changedTouches[0].clientY - touchStart.y;
  touchStart = null;
  if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy) * 1.5) step(dx < 0 ? 1 : -1);
});

/* R18 遮罩：點了就解鎖全部 R18 作品 */
el.r18.addEventListener('click', function (e) {
  e.stopPropagation();
  r18Unlocked = true;
  render();
  if (canZoom(items(state.key)[state.index])) el.main.focus({ preventScroll: true });
});

/* 大圖 → 原圖放大 */
el.main.addEventListener('click', function (e) {
  if (e.target.closest('.lb-link')) return;
  var cur = items(state.key)[state.index];
  if (!canZoom(cur)) return;
  showLoading(el.zoomImg.parentNode, cur.src);
  el.zoomImg.src = cur.src;
  el.zoomImg.alt = cur.caption;
  openOverlay(el.zoom);
});
function closeZoom() {
  el.zoom.hidden = true;
  var back = returnFocus.zoom;
  if (back && back.focus) back.focus({ preventScroll: true });
}
el.zoom.addEventListener('click', closeZoom);

/* ---------- 3. ABOUT ME 跳窗 ---------- */
document.querySelectorAll('[data-bio]').forEach(function (n) {
  n.addEventListener('click', function () {
    openOverlay(el.bio);
    var photo = el.bio.querySelector('.bio-photo');
    if (photo) showBgLoading(photo);
  });
});
if (el.bio) {
  el.bio.addEventListener('click', function (e) {
    if (e.target === el.bio || e.target.closest('.js-close')) closeOverlay(el.bio);
  });
}

/* ---------- 鍵盤 ---------- */
/* 目前最上層、開著的跳窗 */
function topOverlay() {
  if (!el.zoom.hidden) return el.zoom;
  if (!el.gallery.hidden) return el.gallery;
  if (el.bio && !el.bio.hidden) return el.bio;
  return null;
}

document.addEventListener('keydown', function (e) {
  // 用 div 做的按鈕：Enter / 空白鍵 = 點一下
  var t = e.target;
  if ((e.key === 'Enter' || e.key === ' ') && t.getAttribute && t.getAttribute('role') === 'button') {
    e.preventDefault();
    t.click();
    return;
  }
  // 跳窗開著時，Tab 只在跳窗裡面繞，不會跑到後面的網頁
  var top = topOverlay();
  if (e.key === 'Tab' && top) {
    var f = Array.from(top.querySelectorAll('[tabindex="0"], a[href]'))
      .filter(function (n) { return n.getClientRects().length > 0; });
    if (!f.length) { e.preventDefault(); return; }
    var first = f[0], last = f[f.length - 1];
    if (!top.contains(document.activeElement)) { e.preventDefault(); first.focus(); }
    else if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    return;
  }
  if (e.key === 'Escape') {
    if (!el.zoom.hidden) { closeZoom(); return; }
    closeOverlay(el.gallery);
    closeOverlay(el.bio);
    return;
  }
  if (el.gallery.hidden || !el.zoom.hidden) return;
  if (e.key === 'ArrowRight') step(1);
  if (e.key === 'ArrowLeft') step(-1);
});
