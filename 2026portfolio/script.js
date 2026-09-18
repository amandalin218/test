/* Amanda Lin Portfolio — 互動邏輯
   1. 作品資料（PROJECTS）
   2. 精選作品跳窗（分頁縮圖、OPEN PAGE、原圖放大）
   3. ABOUT ME 跳窗 */

// 作品資料：每一筆 = [圖片路徑, 副標, 連結(沒有就 null)]
// tint = 圖片還沒放上前的佔位色
const PROJECTS = {
  illu: {
    num: '01', title: 'Illustration', cover: 'assets/opt-work-cat-coffee.jpg',
    tint: ['#DCE7EF','#CBDCE8','#E3E9E2','#D5DEE9','#E8DFD8','#CFD9E3'],
    works: [
      ['assets/opt-work-cat-coffee.jpg', '貓咪插畫', null],
      ['assets/opt-work-illu-cafe-chat.jpg', '人物插畫', null],
      ['assets/opt-work-illu-sisters.jpg', '人物插畫', null],
      ['assets/opt-work-illu-ginkgo.jpg', '人物插畫', null],
      ['assets/opt-work-illu-macbookpro.jpg', 'Mr. MacBook Pro 擬人插畫', null],
      ['assets/opt-work-illu-red-beret.jpg', '紅帽女孩跟練畫', null],
      ['assets/opt-work-illu-camera-girl.jpg', '攝影女孩跟練畫', null],
      ['assets/opt-work-illu-zodiac.jpg', '十二星座 Q 版角色插畫', null],
      ['assets/opt-work-illu-stickers.jpg', 'Q 版大頭貼表情圖組', null],
      ['assets/opt-work-illu-shark.jpg', '鯊魚插畫', null],
      ['assets/opt-work-illu-whaleshark.jpg', '鯨鯊插畫', null],
      ['assets/opt-work-illu-birthday.jpg', '手寫字卡設計', null]
    ]
  },
  ui: {
    num: '02', title: 'UI/UX', cover: 'assets/opt-work-angel-love.jpg',
    tint: ['#D8E3EC','#E2E8EE','#CDD9E4','#E6EAED','#D2DCE6','#DDE5EB'],
    works: [
      ['assets/ui-dragonnest-awaken.jpg', '新龍之谷－覺醒系統改版活動頁', 'https://amandalin218.github.io/test/20160318_IceDragoncome/index.html'],
      ['assets/ui-dragonnest-machina.jpg', '新龍之谷－瑪奇娜新職業登場活動頁', 'https://amandalin218.github.io/test/20150717_machina/index.html'],
      ['assets/ui-dragonnest-hero80.jpg', '新龍之谷－英雄 80 嶇起座談報名頁', 'https://amandalin218.github.io/test/20150616_meeting/index.html'],
      ['assets/ui-saint-tianmeng.jpg', '聖鬥士－天猛之復生改版活動頁', 'https://amandalin218.github.io/test/20141204sy_web/index.html'],
      ['assets/ui-queensblade-points.jpg', '女皇之刃－點數轉移公告頁', 'https://amandalin218.github.io/test/operation_20141031/index.html'],
      ['assets/ui-wulin2.jpg', '武林 2－上市宣傳活動頁', 'https://amandalin218.github.io/test/20160621_ob/index.html'],
      ['assets/ui-shushan-icefire.jpg', '蜀山縹渺錄－冰火集改版活動頁', 'https://amandalin218.github.io/test/20161222_ss_index/index.html'],
      ['assets/ui-shushan-dragonboat.jpg', '蜀山縹渺錄－端午節活動頁', 'https://amandalin218.github.io/test/johnya_20180613/index.html'],
      ['assets/ui-pw-territory.jpg', '完美世界－領土爭霸戰活動頁', 'https://amandalin218.github.io/test/20161222pw_index/index.html'],
      ['assets/ui-pw-lingyun-guard.jpg', '完美世界 凌雲異界－守護永恆活動頁', 'https://amandalin218.github.io/test/20160728html/index.html'],
      ['assets/ui-pw-lingyun-star.jpg', '完美世界 凌雲異界－星運滿點儲值活動頁', 'https://amandalin218.github.io/test/20160805/index.html'],
      ['assets/ui-moonshadow-points.jpg', '月影傳說－點數轉移公告頁', 'https://amandalin218.github.io/test/operation_20141124/index.html'],
      ['assets/ui-windfantasy-points.jpg', '風色幻想－點數轉移公告頁', 'https://amandalin218.github.io/test/ago_20140930/index.html'],
      ['assets/ui-shiguang.jpg', '天使之戀－時光幻域改版活動頁', 'https://amandalin218.github.io/test/20160903AL/default.html'],
      ['assets/ui-lingdong.jpg', '天使之戀－靈動幻境改版活動頁', 'https://amandalin218.github.io/test/AL_Web/default.html'],
      ['assets/ui-garden.jpg', '天使之戀－花園夜事活動頁', 'https://amandalin218.github.io/test/flow_20150325/index.html'],
      ['assets/ui-rainbow-card.jpg', '萌萌彩虹島－卡牌大師改版活動頁', 'https://amandalin218.github.io/test/howcom_20150804/index.html'],
      ['assets/ui-rainbow-halloween.jpg', '萌萌彩虹島－萬聖驚魂夜活動頁', 'https://amandalin218.github.io/test/20141016index/index.html'],
      ['assets/ui-rainbow-update.jpg', '萌萌彩虹島－改版活動頁面', 'https://amandalin218.github.io/test/20140811html/index.html'],
      ['assets/ui-rainbow-park.jpg', '萌萌彩虹島－吉恩蒂亞公園改版頁', 'https://amandalin218.github.io/test/gpark_20141216_1/index.html'],
      ['assets/ui-rainbow-points.jpg', '萌萌彩虹島－點數轉移公告頁', 'https://amandalin218.github.io/test/operation_20160715/index.html'],
      ['assets/ui-aika-newyear.jpg', 'AIKA 芙蘭戰記－元月送好禮活動頁', 'https://amandalin218.github.io/test/jan_20150115/index.html'],
      ['assets/ui-gf-newyear.jpg', 'GF 迎新春 2018 年節活動頁', 'https://amandalin218.github.io/test/20180109index/index.html'],
      ['assets/ui-newparadise-redpack.jpg', '臺灣新樂園－百萬紅包年節活動頁', 'https://amandalin218.github.io/test/sp_20150210_all/index.html'],
      ['assets/ui-starpower-candy.jpg', '星勢力－糖果虎點蚊香新年活動頁', 'https://amandalin218.github.io/test/20160105_newyear/index.html'],
      ['assets/ui-gf-xmas.jpg', 'GF 雙誕嘉年華年度活動頁', 'https://amandalin218.github.io/test/chrica_20151222/index.html'],
      ['assets/ui-lucky777.jpg', '樂享奇城－LUCKY 777 拉霸活動頁', 'https://amandalin218.github.io/test/201807_slot/index.html'],
      ['assets/ui-coldjoke-familymart.jpg', '十萬個冷笑話－全家儲值好禮活動頁', 'https://amandalin218.github.io/test/20160121_mycard/index.html'],
      ['assets/ui-coldjoke-mycard.jpg', '十萬個冷笑話－指定通路 MyCard 儲值活動頁', 'https://amandalin218.github.io/test/20180816_Mycardtw/index.html'],
      ['assets/ui-tunshi-mycard.jpg', '吞食天地 M－MyCard 儲值活動頁', 'https://amandalin218.github.io/test/index/index.html'],
      ['assets/ui-wy-yuji-site.jpg', '慾姬-官網', null],
      ['assets/ui-wy-yuji-preorder.jpg', '慾姬-事前預約', null],
      ['assets/ui-wy-bana-comic.jpg', 'Banabana 漫畫平台開幕頁面', null],
      ['assets/ui-wy-bana-doujin.jpg', '妖界黃昏二創活動頁面', null],
      ['assets/ui-wy-banabana-beast.jpg', '奇想之戰Ｒ-事前預約', null],
      ['assets/ui-wy-win99.jpg', '印度博弈網站設計', null]
    ]
  },
  brand: {
    num: '03', title: 'Brand', cover: 'assets/opt-work-banabana-2.jpg',
    tint: ['#F0E8DB','#E7DCC9','#F3EDE3','#E1D6C4','#EEE6D9','#E9DECD'],
    works: [
      ['assets/opt-work-banabana-2.jpg', 'BanaBana 平台 LOGO 設計', null],
      ['assets/opt-work-brand-poster.jpg', '金門風獅爺投稿得獎作品', null],
      ['assets/opt-work-brand-card.jpg', '農機吉祥物造型設計', null],
      ['assets/opt-work-brand-mujiguoliu.jpg', '「無印果流」流動劇團 Logo 提案', null],
      ['assets/opt-work-brand-pay2go.jpg', '智付寶 LOGO 提案', null],
      ['assets/opt-work-brand-app.jpg', '慾姬遊戲 LOGO 設計', null]
    ]
  },
  ad: {
    num: '04', title: 'AD Creative', cover: 'assets/opt-work-yokai.jpg',
    tint: ['#E0DCE8','#D4CFE0','#E8E3F0','#CFC9DD','#DED8EA','#D9D3E4'],
    works: [
      ['assets/ad-yokai-dusk-app.jpg', '妖界黃昏 APP AD', null],
      ['assets/ad-yokai-ball-app.jpg', '妖怪滾珠 APP AD', null],
      ['assets/ad-nirvana.jpg', '瑯琊榜 風起長林', null],
      ['assets2/ad-eplay-summer.jpg', 'e-PLAY－瘋狂一夏', null],
      ['assets/ad-zhengzhan.jpg', '龍戰四方', null],
      ['assets/ad-pay2go-dogyear.jpg', '智付寶－狗年紅包活動', null],
      ['assets/ad-pay2go-lantern.jpg', '智付寶 × 嘉義燈會', null],
      ['assets/ad-pay2go-shop.jpg', '智付寶－網路商店消費', null],
      ['assets/ad-slot-gold15.jpg', '遊戲大亂鬥 SLOT', null],
      ['assets/ad-slot-caishen.jpg', '遊戲大亂鬥 SLOT', null],
      ['assets/ad-slot-tianming.jpg', '遊戲大亂鬥 SLOT', null],
      ['assets/ad-slot-myth.jpg', '遊戲大亂鬥 SLOT', null],
      ['assets/ad-slot-xianxia.jpg', '遊戲大亂鬥 SLOT', null],
      ['assets/ad-slot-comic.jpg', '遊戲大亂鬥 SLOT', null],
      ['assets/ad-slot-food.jpg', '遊戲大亂鬥 SLOT', null],
      ['assets/ad-slot-dragonboat.jpg', '遊戲大亂鬥 SLOT', null],
      ['assets/ad-slot-fishing.jpg', 'BANA SLOT', null],
      ['assets/ad-slot-xmas.jpg', '遊戲大亂鬥 SLOT', null],
      ['assets/ad-slot-detective.jpg', '遊戲大亂鬥 SLOT', null],
      ['assets/ad-slot-beauty.jpg', '遊戲大亂鬥 SLOT', null],
      ['assets/ad-slot-koi.jpg', '遊戲大亂鬥 SLOT', null],
      ['assets2/ad-bana-01.jpg', 'Banabana成人漫畫', null],  
      ['assets2/ad-bana-02.jpg', 'Banabana成人漫畫', null],  // 待放圖 02
      ['assets2/ad-bana-03.jpg', 'Banabana成人漫畫', null],  // 待放圖 03
      ['assets2/ad-bana-04.jpg', 'Banabana成人漫畫', null],  // 待放圖 04
      ['assets2/ad-bana-05.jpg', 'Banabana成人漫畫', null],  // 待放圖 05
      ['assets2/ad-bana-06.jpg', 'Banabana成人漫畫', null],  // 待放圖 06
      ['assets2/ad-bana-07.jpg', 'Banabana成人漫畫', null],  // 待放圖 07
      ['assets2/ad-bana-08.jpg', 'Banabana成人漫畫', null],  // 待放圖 08
      ['assets2/ad-bana-09.jpg', 'Banabana成人漫畫', null],  // 待放圖 09
      ['assets2/ad-bana-10.jpg', 'Banabana成人漫畫', null],  // 待放圖 10
      ['assets2/ad-bana-11.jpg', 'Banabana成人漫畫', null],  // 待放圖 11
      ['assets2/ad-bana-12.jpg', 'Banabana成人漫畫', null],  // 待放圖 12
      ['assets2/ad-bana-13.jpg', 'Banabana成人漫畫', null],  // 待放圖 13
      ['assets2/ad-bana-14.jpg', 'Banabana成人漫畫', null],  // 待放圖 14
      ['assets2/ad-bana-15.jpg', 'Banabana成人漫畫', null],  // 待放圖 15
      ['assets2/ad-bana-16.jpg', 'Banabana成人漫畫', null],  // 待放圖 16
      ['assets2/ad-bana-17.jpg', 'Banabana成人漫畫', null],  // 待放圖 17
      ['assets2/ad-bana-18.jpg', 'Banabana成人漫畫', null],  // 待放圖 18
      ['assets2/ad-bana-19.jpg', 'Banabana成人漫畫', null],  // 待放圖 19
      ['assets2/ad-bana-20.jpg', 'Banabana成人漫畫', null],  // 待放圖 20
      ['assets2/ad-bana-21.jpg', 'Banabana成人漫畫', null],  // 待放圖 21
      ['assets2/ad-bana-22.jpg', 'Banabana成人漫畫', null],  // 待放圖 22
      ['assets2/ad-bana-23.jpg', 'Banabana成人漫畫', null],  // 待放圖 23
      ['assets2/ad-bana-24.jpg', 'Banabana成人漫畫', null],  // 待放圖 24
      ['assets2/ad-bana-25.jpg', 'Banabana成人漫畫', null],  // 待放圖 25
      ['assets2/ad-bana-26.jpg', 'Banabana成人漫畫', null],  // 待放圖 26
      ['assets2/ad-bana-27.jpg', 'Banabana成人漫畫', null],  // 待放圖 27
      ['assets2/ad-bana-28.jpg', 'Banabana成人漫畫', null],  // 待放圖 28
      ['assets2/ad-bana-29.jpg', 'Banabana成人漫畫', null],  // 待放圖 29
      ['assets2/ad-bana-30.jpg', 'Banabana成人漫畫', null],  // 待放圖 30
      ['assets2/ad-bana-31.jpg', 'Banabana成人漫畫', null],  // 待放圖 31
      ['assets2/ad-bana-32.jpg', 'Banabana成人漫畫', null],  
      ['assets2/ad-bana-33.jpg', 'Banabana成人漫畫', null],  
    ]
  },
  graphic: {
    num: '05', title: 'Graphic', cover: 'assets/opt-work-recruit-dm.jpg',
    tint: ['#E4E7EA','#D9DEE3','#ECEFF1','#CED5DB','#E0E5E9','#D4DAE0'],
    works: [
      ['assets/opt-work-recruit-dm.jpg', '華義 2025 校園徵才 DM－標準色版', null],
      ['assets/opt-work-graphic-recruit-2025.jpg', '華義 2025 校園徵才 DM－妖界黃昏版', null],
      ['assets/opt-work-graphic-lamungan.jpg', '新東陽南投服務區文宣插畫', null],
      ['assets/opt-work-graphic-zhugong-postcards.jpg', '遊戲「主公你好壞」明信片套組', null],
      ['assets/opt-work-graphic-theatre-dm.jpg', '無印果流流動劇團「主婦的米」明信片', null],
      ['assets/opt-work-graphic-wedding-invite.jpg', '手繪婚禮邀請卡', null]
    ]
  }
}

/* ---------- 2. 精選作品跳窗 ---------- */
var PAGE_SIZE = 6;
var state = { key: null, index: 0 };

var el = {
  gallery: document.getElementById('gallery'),
  main: document.getElementById('lbMain'),
  link: document.getElementById('lbLink'),
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
    return { src: w[0] || null, caption: w[1] || '', url: w[2] || null, color: p.tint[i % p.tint.length] };
  });
}

function preloadImage(src) {
  if (!src) return;
  var img = new Image();
  img.decoding = 'async';
  img.src = src;
}

function render() {
  var p = PROJECTS[state.key];
  if (!p) return;
  var list = items(state.key);
  var cur = list[state.index];
  if (cur && cur.src) preloadImage(cur.src);
  var nextItem = list[state.index + 1];
  if (nextItem && nextItem.src) preloadImage(nextItem.src);
  var pages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  var page = Math.floor(state.index / PAGE_SIZE);

  el.main.style.backgroundImage = cur && cur.src ? 'url(' + cur.src + ')' : 'none';
  el.main.style.backgroundColor = cur && cur.src ? 'transparent' : (cur ? cur.color : '#EAF0F5');
  el.main.classList.toggle('has-link', !!(cur && cur.url));
  el.main.classList.toggle('is-zoomable', canZoom(cur));
  if (cur && cur.url) el.link.href = cur.url;

  el.num.textContent = p.num;
  el.title.textContent = p.title;
  el.cap.textContent = cur ? cur.caption : '';

  el.thumbs.innerHTML = '';
  list.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE).forEach(function (it, j) {
    var i = page * PAGE_SIZE + j;
    var d = document.createElement('div');
    d.className = 'lb-thumb' + (i === state.index ? ' is-active' : '');
    d.style.backgroundColor = it.color;
    if (it.src) d.style.backgroundImage = 'url(' + it.src + ')';
    d.addEventListener('click', function () { state.index = i; render(); });
    el.thumbs.appendChild(d);
  });

  el.nav.hidden = pages < 2;
  el.count.textContent = '第 ' + (page + 1) + ' / ' + pages + ' 頁';
  el.prev.classList.toggle('is-hidden', page === 0);
  el.next.classList.toggle('is-hidden', page >= pages - 1);
}

/* 只有 UI/UX 分類、且該筆沒有外部連結時，才能點大圖看原圖 */
function canZoom(cur) {
  return !!(cur && cur.src && state.key === 'ui' && !cur.url);
}

function pageStep(d) {
  var list = items(state.key);
  var pages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  var page = Math.min(pages - 1, Math.max(0, Math.floor(state.index / PAGE_SIZE) + d));
  state.index = page * PAGE_SIZE;
  render();
}

function openGallery(key) {
  state.key = key;
  state.index = 0;
  el.gallery.hidden = false;
  el.gallery.classList.remove('is-closing');
  render();
}

function closeOverlay(node) {
  if (!node || node.hidden) return;
  node.classList.add('is-closing');
  setTimeout(function () {
    node.hidden = true;
    node.classList.remove('is-closing');
  }, 300);
}

document.querySelectorAll('[data-open]').forEach(function (n) {
  n.addEventListener('click', function () { openGallery(n.getAttribute('data-open')); });
});
el.gallery.addEventListener('click', function (e) {
  if (e.target === el.gallery) closeOverlay(el.gallery);
});
document.querySelectorAll('[data-close="gallery"]').forEach(function (n) {
  n.addEventListener('click', function () { closeOverlay(el.gallery); });
});
el.prev.addEventListener('click', function () { pageStep(-1); });
el.next.addEventListener('click', function () { pageStep(1); });

/* 大圖 → 原圖放大 */
el.main.addEventListener('click', function (e) {
  if (e.target.closest('.lb-link')) return;
  var cur = items(state.key)[state.index];
  if (!canZoom(cur)) return;
  el.zoomImg.src = cur.src;
  el.zoom.hidden = false;
});
el.zoom.addEventListener('click', function () { el.zoom.hidden = true; });

/* ---------- 3. ABOUT ME 跳窗 ---------- */
document.querySelectorAll('[data-bio]').forEach(function (n) {
  n.addEventListener('click', function () {
    el.bio.hidden = false;
    el.bio.classList.remove('is-closing');
  });
});
if (el.bio) {
  el.bio.addEventListener('click', function (e) {
    if (e.target === el.bio || e.target.closest('.js-close')) closeOverlay(el.bio);
  });
}

/* ---------- 鍵盤 ---------- */
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!el.zoom.hidden) { el.zoom.hidden = true; return; }
    closeOverlay(el.gallery);
    closeOverlay(el.bio);
    return;
  }
  if (el.gallery.hidden || !el.zoom.hidden) return;
  var list = items(state.key);
  if (e.key === 'ArrowRight') { state.index = (state.index + 1) % list.length; render(); }
  if (e.key === 'ArrowLeft') { state.index = (state.index - 1 + list.length) % list.length; render(); }
});
