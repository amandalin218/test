/* Amanda Lin Portfolio — 首頁互動邏輯
   1. 導覽列 active 切換
   2. 精選作品：按鈕與封面連到分類頁（works/*.html，作品資料在 js/projects.js，由分類頁使用）
   3. ABOUT ME 跳窗
   4. 鍵盤操作（Tab / Enter / 空白鍵 / Esc） */


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

/* ---------- 2. 精選作品：「→」按鈕和封面圖都連到對應的分類頁（works/*.html） ---------- */
document.querySelectorAll('.work-row').forEach(function (row) {
  var link = row.querySelector('a.round-btn[href]');
  var cover = row.querySelector('figure');
  if (!link || !cover) return;
  cover.classList.add('is-clickable');
  cover.addEventListener('click', function () { window.location.href = link.getAttribute('href'); });
});

var el = {
  bio: document.getElementById('bio')
};

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

/* 打開跳窗時記住原本的焦點，關掉後放回去（鍵盤使用者不會迷路） */
var returnFocus = {};

function openOverlay(node) {
  returnFocus[node.id] = document.activeElement;
  node.hidden = false;
  node.classList.remove('is-closing');
  var first = node.querySelector('[tabindex="0"]');
  if (first) first.focus({ preventScroll: true });
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

/* 首頁作品封面、ABOUT 照片（CSS 背景圖）：還沒載完就顯示「載入中…」 */
function showBgLoading(node) {
  var bg = getComputedStyle(node).backgroundImage;
  var m = bg && bg.match(/url\(["']?(.*?)["']?\)/);
  if (m) showLoading(node, m[1]);
}
document.querySelectorAll('.work-row figure, .about-image').forEach(showBgLoading);

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
/* 目前開著的跳窗（只剩 ABOUT ME） */
function topOverlay() {
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
  if (e.key === 'Escape') closeOverlay(el.bio);
});
