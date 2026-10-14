/* Amanda Lin Portfolio — 分類頁互動（works/*.html 共用）
   作品資料來自 ../projects.js 的 PROJECTS，頁面用 <body data-cat="ui"> 指定要顯示哪個分類。
   1. 分類切換列
   2. 作品格狀排列（有連結的作品開新分頁，沒有連結的作品放大看原圖）
   3. R18 遮罩（點一次，這次瀏覽的 R18 作品全部解鎖）
   4. 原圖放大（鍵盤 ← → Esc、手機左右滑動） */
(function () {
  'use strict';

  // works/ 在網站根目錄的下一層，但 PROJECTS 裡的圖片路徑是相對於根目錄
  var BASE = '../';

  var CATS = [
    { key: 'ui',      label: 'Web / UI',         href: 'ui.html' },
    { key: 'ad',      label: 'Game/AD Creative', href: 'ad.html' },
    { key: 'brand',   label: 'Brand/LOGO',       href: 'brand.html' },
    { key: 'graphic', label: 'Graphic Design',   href: 'graphic.html' },
    { key: 'illu',    label: 'Illustration',     href: 'illustration.html' }
  ];
  // 已經做好的分類頁；其他分類做好之後，把 key 加進來，切換列就會變成可以點
  var BUILT = ['ui'];

  var catKey = document.body.getAttribute('data-cat');
  var project = (typeof PROJECTS !== 'undefined') ? PROJECTS[catKey] : null;
  var grid = document.getElementById('worksGrid');
  var r18Unlocked = false;

  function make(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function pad2(n) { return n < 10 ? '0' + n : String(n); }

  /* 「遊戲名稱－頁面類型」拆成主標與副標；沒有分隔符號就整句當主標 */
  function splitCaption(text) {
    var m = text.match(/^(.+?)－(.+)$/) || text.match(/^([㐀-鿿]+)-(.+)$/);
    return m ? { title: m[1], sub: m[2] } : { title: text, sub: '' };
  }

  if (!project || !grid) {
    if (grid) grid.appendChild(make('p', 'cat-noscript', '找不到這個分類的作品資料。'));
    return;
  }

  var items = project.works.map(function (w) {
    return { src: w[0], caption: w[1] || '', url: w[2] || null, r18: w[3] === 'r18' };
  });

  /* ---------- 1. 分類切換列 ---------- */
  (function buildSwitch() {
    var nav = document.getElementById('catSwitch');
    if (!nav) return;
    CATS.forEach(function (c) {
      var node;
      if (c.key === catKey) {
        node = make('span', null, c.label);
        node.setAttribute('aria-current', 'page');
      } else if (BUILT.indexOf(c.key) !== -1) {
        node = make('a', null, c.label);
        node.href = c.href;
      } else {
        node = make('span', 'is-soon', c.label);
        node.title = '即將推出';
        node.appendChild(make('i', null, 'SOON'));
      }
      nav.appendChild(node);
    });
  })();

  var count = document.getElementById('catCount');
  if (count) count.textContent = items.length + ' WORKS';

  /* ---------- 2. 作品格狀排列 ---------- */
  function buildCard(it, i) {
    var locked = it.r18 && !r18Unlocked;
    var card = make('figure', 'work-card');
    var media;

    if (it.url && !locked) {
      media = make('a', 'work-media');
      media.href = it.url;
      media.target = '_blank';
      media.rel = 'noopener noreferrer';
      media.setAttribute('aria-label', '開啟頁面：' + it.caption);
    } else {
      media = make('button', 'work-media');
      media.type = 'button';
      if (locked) {
        media.classList.add('is-locked');
        media.setAttribute('aria-label', '成人內容，點擊顯示所有 R18 作品');
        media.addEventListener('click', unlockAll);
      } else {
        media.setAttribute('aria-label', '放大看原圖：' + it.caption);
        media.addEventListener('click', function () { openZoom(i); });
      }
    }
    media.style.backgroundColor = project.tint[i % project.tint.length];

    if (locked) {
      // 沒解鎖之前不載入圖片，避免成人內容在遮罩底下就先下載
      var cover = make('div', 'r18-cover');
      var icon = make('img', 'r18-icon');
      icon.src = BASE + 'assets/r18.png';
      icon.alt = '';
      cover.appendChild(icon);
      cover.appendChild(make('div', 'r18-title', '成人內容'));
      cover.appendChild(make('div', 'r18-hint', '點擊顯示'));
      media.appendChild(cover);
    } else {
      var img = make('img');
      img.alt = it.caption;
      img.decoding = 'async';
      img.loading = i < 4 ? 'eager' : 'lazy';
      img.addEventListener('load', function () { media.classList.add('is-loaded'); media.style.backgroundColor = ''; if (!watcher) setSpan(card); });
      img.addEventListener('error', function () { media.classList.add('is-loaded', 'is-error'); });
      img.src = BASE + it.src;
      media.appendChild(img);
    }
    card.appendChild(media);

    var cap = make('figcaption', 'work-cap');
    cap.appendChild(make('span', 'work-no', pad2(i + 1)));
    var name = make('span', 'work-name');
    var parts = splitCaption(it.caption);
    name.appendChild(make('b', null, parts.title));
    if (parts.sub) name.appendChild(make('small', null, parts.sub));
    cap.appendChild(name);
    if (!locked) cap.appendChild(make('span', 'work-action', it.url ? 'OPEN PAGE ↗' : 'VIEW +'));
    card.appendChild(cap);
    return card;
  }

  /* 緊密排列：量每張卡片的高度，設定它要佔幾列（每列 4px）。
     圖片載入、視窗縮放造成高度改變時會自動重算 */
  var ROW = 4;
  function setSpan(card) {
    card.style.gridRowEnd = 'span ' + Math.max(1, Math.ceil(card.getBoundingClientRect().height / ROW));
  }
  var watcher = (typeof ResizeObserver === 'function')
    ? new ResizeObserver(function (entries) { entries.forEach(function (en) { setSpan(en.target); }); })
    : null;
  function place(card) {
    setSpan(card);
    if (watcher) watcher.observe(card);
  }
  if (!watcher) window.addEventListener('resize', function () {
    Array.prototype.forEach.call(grid.children, setSpan);
  });

  var frag = document.createDocumentFragment();
  items.forEach(function (it, i) { frag.appendChild(buildCard(it, i)); });
  grid.appendChild(frag);
  Array.prototype.forEach.call(grid.children, place);

  /* ---------- 3. R18：解鎖時只重畫還蓋著的卡片 ---------- */
  function unlockAll() {
    r18Unlocked = true;
    var cards = grid.children;
    for (var i = 0; i < cards.length; i++) {
      if (items[i].r18) {
        var next = buildCard(items[i], i);
        if (watcher) watcher.unobserve(cards[i]);
        grid.replaceChild(next, cards[i]);
        place(next);
      }
    }
  }

  /* ---------- 4. 原圖放大 ---------- */
  var zoom = document.getElementById('zoom');
  var zoomImg = document.getElementById('zoomImg');
  var zoomCap = document.getElementById('zoomCap');
  var btnClose = document.getElementById('zoomClose');
  var btnPrev = document.getElementById('zoomPrev');
  var btnNext = document.getElementById('zoomNext');
  var zoomList = [];   // 可以放大的作品編號（有外部連結的作品不放大）
  var zoomPos = 0;
  var opener = null;

  function rebuildZoomList() {
    zoomList = [];
    items.forEach(function (it, i) {
      if (!it.url && !(it.r18 && !r18Unlocked)) zoomList.push(i);
    });
  }

  function showZoom() {
    var i = zoomList[zoomPos];
    var it = items[i];
    zoomImg.src = BASE + it.src;
    zoomImg.alt = it.caption;
    zoomCap.textContent = '';
    zoomCap.appendChild(make('span', 'zoom-no', pad2(i + 1)));
    zoomCap.appendChild(document.createTextNode(it.caption));
    var many = zoomList.length > 1;
    btnPrev.hidden = !many;
    btnNext.hidden = !many;
    // 先把前後兩張抓進快取，翻頁比較順
    [zoomPos - 1, zoomPos + 1].forEach(function (p) {
      var j = zoomList[(p + zoomList.length) % zoomList.length];
      if (j != null && j !== i) new Image().src = BASE + items[j].src;
    });
  }

  function openZoom(i) {
    rebuildZoomList();
    zoomPos = zoomList.indexOf(i);
    if (zoomPos < 0) return;
    opener = document.activeElement;
    showZoom();
    zoom.hidden = false;
    document.documentElement.classList.add('zoom-open');
    btnClose.focus();
  }

  function closeZoom() {
    zoom.hidden = true;
    document.documentElement.classList.remove('zoom-open');
    zoomImg.removeAttribute('src');
    if (opener && opener.focus) opener.focus({ preventScroll: true });
  }

  function stepZoom(d) {
    if (zoomList.length < 2) return;
    zoomPos = (zoomPos + d + zoomList.length) % zoomList.length;
    showZoom();
  }

  btnClose.addEventListener('click', closeZoom);
  btnPrev.addEventListener('click', function () { stepZoom(-1); });
  btnNext.addEventListener('click', function () { stepZoom(1); });
  // 點空白處關閉（點到圖片、按鈕、說明文字不算）
  zoom.addEventListener('click', function (e) { if (e.target === zoom) closeZoom(); });

  document.addEventListener('keydown', function (e) {
    if (zoom.hidden) return;
    if (e.key === 'Escape') { e.preventDefault(); closeZoom(); }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); stepZoom(-1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); stepZoom(1); }
    else if (e.key === 'Tab') {
      // 焦點只在放大視窗裡的按鈕之間循環
      var btns = [btnClose, btnPrev, btnNext].filter(function (b) { return !b.hidden; });
      var at = btns.indexOf(document.activeElement);
      e.preventDefault();
      btns[(at + (e.shiftKey ? -1 : 1) + btns.length) % btns.length].focus();
    }
  });

  // 手機左右滑動換圖
  var touchX = null;
  zoom.addEventListener('touchstart', function (e) { touchX = e.changedTouches[0].clientX; }, { passive: true });
  zoom.addEventListener('touchend', function (e) {
    if (touchX == null) return;
    var dx = e.changedTouches[0].clientX - touchX;
    touchX = null;
    if (Math.abs(dx) > 50) stepZoom(dx < 0 ? 1 : -1);
  }, { passive: true });
})();
