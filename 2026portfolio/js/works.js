/* Amanda Lin Portfolio — 分類頁互動（works/*.html 共用）
   作品資料來自 ../js/projects.js 的 PROJECTS，頁面用 <body data-cat="ui"> 指定要顯示哪個分類。
   1. 分類切換列
   2. 作品格狀排列（有連結的作品開新分頁，沒有連結的作品放大看原圖）
   3. R18 作品集中放在頁面最下方的「18+ CONTENT」區，點一次才顯示（這次瀏覽有效）
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
  var BUILT = ['ui', 'ad', 'brand', 'graphic', 'illu'];

  var catKey = document.body.getAttribute('data-cat');
  var project = (typeof PROJECTS !== 'undefined') ? PROJECTS[catKey] : null;
  var grid = document.getElementById('worksGrid');
  var r18Unlocked = false;
  var displayNo = [];   // 作品編號：依畫面上的位置（由上到下、由左到右）排，不是資料檔的順序

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

  /* ---------- 1. 分類切換列：「作品分類」＋ 01–05 編號，整組放在圓角框裡 ---------- */
  (function buildSwitch() {
    var nav = document.getElementById('catSwitch');
    if (!nav) return;
    nav.appendChild(make('span', 'cat-switch-label', '作品分類'));
    var list = make('div', 'cat-switch-list');
    CATS.forEach(function (c, i) {
      var node;
      if (c.key === catKey) {
        node = make('span', null);
        node.setAttribute('aria-current', 'page');
      } else if (BUILT.indexOf(c.key) !== -1) {
        node = make('a', null);
        node.href = c.href;
      } else {
        node = make('span', 'is-soon');
        node.title = '即將推出';
      }
      node.appendChild(make('i', 'cat-no', pad2(i + 1)));
      node.appendChild(document.createTextNode(c.label));
      if (node.className === 'is-soon') node.appendChild(make('em', null, 'SOON'));
      list.appendChild(node);
    });
    nav.appendChild(list);
  })();

  var count = document.getElementById('catCount');
  if (count) count.textContent = items.length + ' WORKS';

  /* ---------- 2. 作品格狀排列 ---------- */
  function buildCard(it, i) {
    var card = make('figure', 'work-card');
    card.setAttribute('data-i', i);
    var media;

    if (it.url) {
      media = make('a', 'work-media');
      media.href = it.url;
      media.target = '_blank';
      media.rel = 'noopener noreferrer';
      media.setAttribute('aria-label', '開啟頁面：' + it.caption);
    } else {
      media = make('button', 'work-media');
      media.type = 'button';
      media.setAttribute('aria-label', '放大看原圖：' + it.caption);
      media.addEventListener('click', function () { openZoom(i); });
    }
    media.style.backgroundColor = project.tint[i % project.tint.length];

    var img = make('img');
    img.alt = it.caption;
    img.decoding = 'async';
    img.loading = i < 4 ? 'eager' : 'lazy';
    img.addEventListener('load', function () { media.classList.add('is-loaded'); media.style.backgroundColor = ''; if (!watcher) setSpan(card); });
    img.addEventListener('error', function () { media.classList.add('is-loaded', 'is-error'); });
    img.src = BASE + it.src;
    media.appendChild(img);
    card.appendChild(media);

    var cap = make('figcaption', 'work-cap');
    cap.appendChild(make('span', 'work-no', pad2(displayNo[i] || i + 1)));
    var name = make('span', 'work-name');
    var parts = splitCaption(it.caption);
    name.appendChild(make('b', null, parts.title));
    if (parts.sub) name.appendChild(make('small', null, parts.sub));
    cap.appendChild(name);
    cap.appendChild(make('span', 'work-action', it.url ? 'OPEN PAGE ↗' : 'VIEW +'));
    card.appendChild(cap);
    return card;
  }

  /* 緊密排列：量每張卡片的高度，設定它要佔幾列（每列 4px）。
     圖片載入、視窗縮放造成高度改變時會自動重算 */
  var ROW = 4;
  var allGrids = [];
  function setSpan(card) {
    card.style.gridRowEnd = 'span ' + Math.max(1, Math.ceil(card.getBoundingClientRect().height / ROW));
    scheduleRenumber();
  }

  /* 編號依畫面位置重排：同一個格狀區內，先比上緣、再比左緣。
     欄數或圖片高度改變、視窗縮放後都會重算 */
  var renumberQueued = false;
  function scheduleRenumber() {
    if (renumberQueued) return;
    renumberQueued = true;
    requestAnimationFrame(function () { renumberQueued = false; renumber(); });
  }
  function renumber() {
    var n = 0;
    allGrids.forEach(function (g) {
      var list = Array.prototype.map.call(g.children, function (card) {
        var r = card.getBoundingClientRect();
        return { card: card, top: Math.round(r.top), left: Math.round(r.left), i: +card.getAttribute('data-i') };
      });
      list.sort(function (a, b) { return (a.top - b.top) || (a.left - b.left); });
      list.forEach(function (o) {
        n++;
        displayNo[o.i] = n;
        var no = o.card.querySelector('.work-no');
        var t = pad2(n);
        if (no && no.textContent !== t) no.textContent = t;
      });
    });
  }
  var watcher = (typeof ResizeObserver === 'function')
    ? new ResizeObserver(function (entries) { entries.forEach(function (en) { setSpan(en.target); }); })
    : null;
  if (!watcher) window.addEventListener('resize', function () {
    allGrids.forEach(function (g) { Array.prototype.forEach.call(g.children, setSpan); });
  });

  function fill(target, idxList) {
    var frag = document.createDocumentFragment();
    idxList.forEach(function (i) { frag.appendChild(buildCard(items[i], i)); });
    target.appendChild(frag);
    Array.prototype.forEach.call(target.children, function (card) {
      setSpan(card);
      if (watcher) watcher.observe(card);
    });
  }

  var normalIdx = [], r18Idx = [];
  items.forEach(function (it, i) { (it.r18 ? r18Idx : normalIdx).push(i); });

  // 欄數由 <div class="works-grid" data-cols="3"> 決定（css 在 css/works.css）
  if (grid.getAttribute('data-cols')) grid.dataset.cols = grid.getAttribute('data-cols');
  allGrids.push(grid);
  fill(grid, normalIdx);

  /* ---------- 3. R18：集中在最下方，點一次才載入圖片 ---------- */
  if (r18Idx.length) {
    var section = make('section', 'r18-section');
    section.setAttribute('aria-label', '成人內容');
    var gate = make('button', 'r18-gate');
    gate.type = 'button';
    var icon = make('img', 'r18-gate-icon');
    icon.src = BASE + 'images/site/r18.png';
    icon.alt = '';
    gate.appendChild(icon);
    var txt = make('span', 'r18-gate-text');
    txt.appendChild(make('b', null, '18+ CONTENT'));
    txt.appendChild(make('small', null, '成人內容 · ' + r18Idx.length + ' WORKS · 點擊顯示'));
    gate.appendChild(txt);
    section.appendChild(gate);
    grid.parentNode.insertBefore(section, grid.nextSibling);

    gate.addEventListener('click', function () {
      r18Unlocked = true;
      section.removeChild(gate);
      section.classList.add('is-open');
      var head = make('div', 'r18-head');
      head.appendChild(make('b', null, '18+ CONTENT'));
      head.appendChild(make('small', null, '成人內容 · ' + r18Idx.length + ' WORKS'));
      section.appendChild(head);
      var g2 = make('div', 'works-grid');
      if (grid.getAttribute('data-cols')) g2.setAttribute('data-cols', grid.getAttribute('data-cols'));
      section.appendChild(g2);
      allGrids.push(g2);
      fill(g2, r18Idx);
    });
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
      if (!it.url && (!it.r18 || r18Unlocked)) zoomList.push(i);
    });
    zoomList.sort(function (a, b) { return (displayNo[a] || a + 1) - (displayNo[b] || b + 1); });
  }

  function showZoom() {
    var i = zoomList[zoomPos];
    var it = items[i];
    zoomImg.src = BASE + it.src;
    zoomImg.alt = it.caption;
    zoomCap.textContent = '';
    zoomCap.appendChild(make('span', 'zoom-no', pad2(displayNo[i] || i + 1)));
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
