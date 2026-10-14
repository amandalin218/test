/* Amanda Lin Portfolio — 作品資料（works/ 分類頁使用）
   新增或修改作品，只要改這個檔案。 */

// 作品資料：每一筆 = [圖片路徑, 副標, 連結(沒有就 null), 'r18'(成人內容才加)]
// 標了 'r18' 的作品，縮圖和大圖會先蓋上白色遮罩 + R18 標誌，點一次確認後才顯示
// tint = 圖片還沒放上前的佔位色
const PROJECTS = {
  illu: {
    num: '05', title: 'Illustration', cover: 'images/works/illustration/cat-coffee.webp',
    tint: ['#DCE7EF','#CBDCE8','#E3E9E2','#D5DEE9','#E8DFD8','#CFD9E3'],
    works: [
      ['images/works/illustration/cat-coffee.webp', '貓咪插畫', null],
      ['images/works/illustration/macbookpro.webp', 'Mr. MacBook Pro 擬人插畫', null],
      ['images/works/illustration/sisters.webp', '人物插畫', null],
      ['images/works/illustration/ginkgo.webp', '人物插畫', null],
      ['images/works/illustration/red-beret.webp', '紅帽女孩跟練畫', null],
      ['images/works/illustration/cafe-chat.webp', '人物插畫', null],
      ['images/works/illustration/shark.webp', '鯊魚插畫', null],
      ['images/works/illustration/zodiac.webp', '十二星座 Q 版角色插畫', null],
      ['images/works/illustration/stickers.webp', 'Q 版大頭貼表情圖組', null],
      ['images/works/illustration/camera-girl.webp', '攝影女孩跟練畫', null],
      ['images/works/illustration/whaleshark.webp', '鯨鯊插畫', null],
      ['images/works/illustration/birthday.webp', '手寫字卡設計', null]
    ]
  },
  ui: {
    num: '01', title: 'UI/UX', cover: 'images/site/covers/angel-love.webp',
    tint: ['#D8E3EC','#E2E8EE','#CDD9E4','#E6EAED','#D2DCE6','#DDE5EB'],
    works: [
      ['images/works/ui/dragonnest-awaken.webp', '新龍之谷－覺醒系統改版活動頁', 'https://amandalin218.github.io/test/20160318_IceDragoncome/index.html'],
      ['images/works/ui/dragonnest-machina.webp', '新龍之谷－瑪奇娜新職業登場活動頁', 'https://amandalin218.github.io/test/20150717_machina/index.html'],
      ['images/works/ui/dragonnest-hero80.webp', '新龍之谷－英雄 80 嶇起座談報名頁', 'https://amandalin218.github.io/test/20150616_meeting/index.html'],
      ['images/works/ui/saint-tianmeng.webp', '聖鬥士－天猛之復生改版活動頁', 'https://amandalin218.github.io/test/20141204sy_web/index.html'],
      ['images/works/ui/queensblade-points.webp', '女皇之刃－點數轉移公告頁', 'https://amandalin218.github.io/test/operation_20141031/index.html'],
      ['images/works/ui/wulin2.webp', '武林 2－上市宣傳活動頁', 'https://amandalin218.github.io/test/20160621_ob/index.html'],
      ['images/works/ui/shushan-icefire.webp', '蜀山縹渺錄－冰火集改版活動頁', 'https://amandalin218.github.io/test/20161222_ss_index/index.html'],
      ['images/works/ui/shushan-dragonboat.webp', '蜀山縹渺錄－端午節活動頁', 'https://amandalin218.github.io/test/johnya_20180613/index.html'],
      ['images/works/ui/pw-territory.webp', '完美世界－領土爭霸戰活動頁', 'https://amandalin218.github.io/test/20161222pw_index/index.html'],
      ['images/works/ui/pw-lingyun-guard.webp', '完美世界 凌雲異界－守護永恆活動頁', 'https://amandalin218.github.io/test/20160728html/index.html'],
      ['images/works/ui/pw-lingyun-star.webp', '完美世界 凌雲異界－星運滿點儲值活動頁', 'https://amandalin218.github.io/test/20160805/index.html'],
      ['images/works/ui/moonshadow-points.webp', '月影傳說－點數轉移公告頁', 'https://amandalin218.github.io/test/operation_20141124/index.html'],
      ['images/works/ui/windfantasy-points.webp', '風色幻想－點數轉移公告頁', 'https://amandalin218.github.io/test/ago_20140930/index.html'],
      ['images/works/ui/shiguang.webp', '天使之戀－時光幻域改版活動頁', 'https://amandalin218.github.io/test/20160903AL/default.html'],
      ['images/works/ui/lingdong.webp', '天使之戀－靈動幻境改版活動頁', 'https://amandalin218.github.io/test/AL_Web/default.html'],
      ['images/works/ui/garden.webp', '天使之戀－花園夜事活動頁', 'https://amandalin218.github.io/test/flow_20150325/index.html'],
      ['images/works/ui/rainbow-card.webp', '萌萌彩虹島－卡牌大師改版活動頁', 'https://amandalin218.github.io/test/howcom_20150804/index.html'],
      ['images/works/ui/rainbow-halloween.webp', '萌萌彩虹島－萬聖驚魂夜活動頁', 'https://amandalin218.github.io/test/20141016index/index.html'],
      ['images/works/ui/rainbow-update.webp', '萌萌彩虹島－改版活動頁面', 'https://amandalin218.github.io/test/20140811html/index.html'],
      ['images/works/ui/rainbow-park.webp', '萌萌彩虹島－吉恩蒂亞公園改版頁', 'https://amandalin218.github.io/test/gpark_20141216_1/index.html'],
      ['images/works/ui/rainbow-points.webp', '萌萌彩虹島－點數轉移公告頁', 'https://amandalin218.github.io/test/operation_20160715/index.html'],
      ['images/works/ui/aika-newyear.webp', 'AIKA 芙蘭戰記－元月送好禮活動頁', 'https://amandalin218.github.io/test/jan_20150115/index.html'],
      ['images/works/ui/gf-newyear.webp', 'GF 迎新春 2018 年節活動頁', 'https://amandalin218.github.io/test/20180109index/index.html'],
      ['images/works/ui/newparadise-redpack.webp', '臺灣新樂園－百萬紅包年節活動頁', 'https://amandalin218.github.io/test/sp_20150210_all/index.html'],
      ['images/works/ui/starpower-candy.webp', '星勢力－糖果虎點蚊香新年活動頁', 'https://amandalin218.github.io/test/20160105_newyear/index.html'],
      ['images/works/ui/gf-xmas.webp', 'GF 雙誕嘉年華年度活動頁', 'https://amandalin218.github.io/test/chrica_20151222/index.html'],
      ['images/works/ui/lucky777.webp', '樂享奇城－LUCKY 777 拉霸活動頁', 'https://amandalin218.github.io/test/201807_slot/index.html'],
      ['images/works/ui/coldjoke-familymart.webp', '十萬個冷笑話－全家儲值好禮活動頁', 'https://amandalin218.github.io/test/20160121_mycard/index.html'],
      ['images/works/ui/coldjoke-mycard.webp', '十萬個冷笑話－指定通路 MyCard 儲值活動頁', 'https://amandalin218.github.io/test/20180816_Mycardtw/index.html'],
      ['images/works/ui/tunshi-mycard.webp', '吞食天地 M－MyCard 儲值活動頁', 'https://amandalin218.github.io/test/index/index.html'],
      ['images/works/r18/ui/wy-yuji-site.webp', '慾姬-官網', null, 'r18'],
      ['images/works/r18/ui/wy-yuji-preorder.webp', '慾姬-事前預約', null, 'r18'],
      ['images/works/r18/ui/wy-bana-comic.webp', 'Banabana 漫畫平台開幕頁面', null, 'r18'],
      ['images/works/r18/ui/wy-bana-doujin.webp', '妖界黃昏二創活動頁面', null, 'r18'],
      ['images/works/r18/ui/wy-banabana-beast.webp', '奇想之戰Ｒ-事前預約', null, 'r18'],
      ['images/works/r18/ui/wy-win99.webp', '印度博弈網站設計', null, 'r18']
    ]
  },
  brand: {
    num: '03', title: 'Brand', cover: 'images/works/brand/banabana-2.webp',
    tint: ['#F0E8DB','#E7DCC9','#F3EDE3','#E1D6C4','#EEE6D9','#E9DECD'],
    works: [
      ['images/works/brand/banabana-2.webp', 'BanaBana 平台 LOGO 設計', null],
      ['images/works/brand/poster.webp', '金門風獅爺投稿得獎作品', null],
      ['images/works/brand/card.webp', '農機吉祥物造型設計', null],
      ['images/works/brand/mujiguoliu.webp', '「無印果流」流動劇團 Logo 提案', null],
      ['images/works/brand/pay2go.webp', '智付寶 LOGO 提案', null],
      ['images/works/brand/app.webp', '慾姬遊戲 LOGO 設計', null]
    ]
  },
  ad: {
    num: '02', title: 'AD Creative', cover: 'images/site/covers/yokai.webp',
    tint: ['#E0DCE8','#D4CFE0','#E8E3F0','#CFC9DD','#DED8EA','#D9D3E4'],
    works: [
      ['images/works/ad/yokai-dusk-app.webp', '妖界黃昏 APP AD', null],
      ['images/works/ad/zhengzhan.webp', '龍戰四方', null],
      ['images/works/ad/nirvana.webp', '瑯琊榜 風起長林', null],
      ['images/works/ad/pay2go-dogyear.webp', '智付寶－狗年紅包活動', null],
      ['images/works/ad/yokai-ball-app.webp', '妖怪滾珠 APP AD', null],
      ['images/works/ad/eplay-summer.webp', 'e-PLAY－瘋狂一夏', null],
      ['images/works/ad/pay2go-lantern.webp', '智付寶 × 嘉義燈會', null],
      ['images/works/ad/pay2go-shop.webp', '智付寶－網路商店消費', null],
      ['images/works/ad/slot-gold15.webp', '遊戲大亂鬥 SLOT', null],
      ['images/works/ad/slot-caishen.webp', '遊戲大亂鬥 SLOT', null],
      ['images/works/ad/slot-tianming.webp', '遊戲大亂鬥 SLOT', null],
      ['images/works/ad/slot-myth.webp', '遊戲大亂鬥 SLOT', null],
      ['images/works/ad/slot-xianxia.webp', '遊戲大亂鬥 SLOT', null],
      ['images/works/ad/slot-comic.webp', '遊戲大亂鬥 SLOT', null],
      ['images/works/ad/slot-food.webp', '遊戲大亂鬥 SLOT', null],
      ['images/works/ad/slot-dragonboat.webp', '遊戲大亂鬥 SLOT', null],
      ['images/works/ad/slot-fishing.webp', 'BANA SLOT', null],
      ['images/works/ad/slot-xmas.webp', '遊戲大亂鬥 SLOT', null],
      ['images/works/ad/slot-detective.webp', '遊戲大亂鬥 SLOT', null],
      ['images/works/ad/slot-beauty.webp', '遊戲大亂鬥 SLOT', null],
      ['images/works/ad/slot-koi.webp', '遊戲大亂鬥 SLOT', null],
      ['images/works/r18/ad/bana-01.webp', 'Banabana成人漫畫', null, 'r18'],  
      ['images/works/r18/ad/bana-02.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 02
      ['images/works/r18/ad/bana-03.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 03
      ['images/works/r18/ad/bana-04.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 04
      ['images/works/r18/ad/bana-05.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 05
      ['images/works/r18/ad/bana-06.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 06
      ['images/works/r18/ad/bana-07.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 07
      ['images/works/r18/ad/bana-08.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 08
      ['images/works/r18/ad/bana-09.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 09
      ['images/works/r18/ad/bana-10.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 10
      ['images/works/r18/ad/bana-11.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 11
      ['images/works/r18/ad/bana-12.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 12
      ['images/works/r18/ad/bana-13.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 13
      ['images/works/r18/ad/bana-14.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 14
      ['images/works/r18/ad/bana-15.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 15
      ['images/works/r18/ad/bana-16.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 16
      ['images/works/r18/ad/bana-17.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 17
      ['images/works/r18/ad/bana-18.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 18
      ['images/works/r18/ad/bana-19.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 19
      ['images/works/r18/ad/bana-20.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 20
      ['images/works/r18/ad/bana-21.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 21
      ['images/works/r18/ad/bana-22.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 22
      ['images/works/r18/ad/bana-23.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 23
      ['images/works/r18/ad/bana-24.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 24
      ['images/works/r18/ad/bana-25.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 25
      ['images/works/r18/ad/bana-26.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 26
      ['images/works/r18/ad/bana-27.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 27
      ['images/works/r18/ad/bana-28.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 28
      ['images/works/r18/ad/bana-29.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 29
      ['images/works/r18/ad/bana-30.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 30
      ['images/works/r18/ad/bana-31.webp', 'Banabana成人漫畫', null, 'r18'],  // 待放圖 31
      ['images/works/r18/ad/bana-32.webp', 'Banabana成人漫畫', null, 'r18'],  
      ['images/works/r18/ad/bana-33.webp', 'Banabana成人漫畫', null, 'r18'],  
    ]
  },
  graphic: {
    num: '04', title: 'Graphic', cover: 'images/works/graphic/recruit-dm.webp',
    tint: ['#E4E7EA','#D9DEE3','#ECEFF1','#CED5DB','#E0E5E9','#D4DAE0'],
    works: [
      ['images/works/graphic/recruit-dm.webp', '華義 2025 校園徵才 DM－標準色版', null],
      ['images/works/graphic/recruit-2025.webp', '華義 2025 校園徵才 DM－妖界黃昏版', null],
      ['images/works/graphic/lamungan.webp', '新東陽南投服務區文宣插畫', null],
      ['images/works/graphic/zhugong-postcards.webp', '遊戲「主公你好壞」明信片套組', null],
      ['images/works/graphic/theatre-dm.webp', '無印果流流動劇團「主婦的米」明信片', null],
      ['images/works/graphic/wedding-invite.webp', '手繪婚禮邀請卡', null]
    ]
  }
}
