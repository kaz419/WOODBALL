/* ============================================
   BAR WOOD BALL - Internationalization (i18n)
   Languages: ja (Japanese), en (English), th (Thai)
   ============================================ */

const translations = {
  // --- Navigation ---
  "nav.home": { ja: "HOME", en: "HOME", th: "HOME" },
  "nav.about": { ja: "ABOUT", en: "ABOUT", th: "ABOUT" },
  "nav.stores": { ja: "STORES", en: "STORES", th: "STORES" },
  "nav.menu": { ja: "MENU", en: "MENU", th: "MENU" },
  "nav.schedule": { ja: "SCHEDULE", en: "SCHEDULE", th: "SCHEDULE" },
  "nav.contact": { ja: "CONTACT", en: "CONTACT", th: "CONTACT" },

  // --- Hero ---
  "hero.desc": {
    ja: "バンコクで最高の夜を。<br>2009年創業、変わらないおもてなしの心。",
    en: "The best night in Bangkok.<br>Unchanged hospitality since 2009.",
    th: "ค่ำคืนที่ดีที่สุดในกรุงเทพ<br>การบริการที่ไม่เปลี่ยนแปลงตั้งแต่ปี 2009"
  },
  "hero.explore": { ja: "EXPLORE", en: "EXPLORE", th: "EXPLORE" },

  // --- About ---
  "about.label": { ja: "ABOUT US", en: "ABOUT US", th: "ABOUT US" },
  "about.title": {
    ja: "ウッドボールについて",
    en: "About Wood Ball",
    th: "เกี่ยวกับ Wood Ball"
  },
  "about.heading": {
    ja: "バンコクで愛され続ける<br>カラオケバー",
    en: "A Karaoke Bar<br>Loved in Bangkok",
    th: "คาราโอเกะบาร์<br>ที่ได้รับความนิยมในกรุงเทพ"
  },
  "about.desc1": {
    ja: "KARAOKE BAR ウッドボールは、タイ・バンコクを拠点に複数店舗を展開するカラオケバーです。2009年の創業以来、オーナーのとっぴーがバンコクでお客様に最高の夜を提供し続けています。",
    en: "KARAOKE BAR WOOD BALL is a karaoke bar chain based in Bangkok, Thailand. Since its founding in 2009, owner Toppie has been providing the best nightlife experience to customers in Bangkok.",
    th: "KARAOKE BAR WOOD BALL คือเชนคาราโอเกะบาร์ที่ตั้งอยู่ในกรุงเทพฯ ประเทศไทย ตั้งแต่ก่อตั้งในปี 2009 เจ้าของ Toppie ได้มอบประสบการณ์ยามค่ำคืนที่ดีที่สุดให้กับลูกค้าในกรุงเทพฯ"
  },
  "about.desc2": {
    ja: "トンロー、プロンポン、タニヤをはじめ、パタヤ、シラチャ、そして日本の盛岡にも店舗を構え、どこでも変わらない「ウッドボール品質」のおもてなしをお届けします。",
    en: "With locations in Thonglor, Phrom Phong, Taniya, Pattaya, Sriracha, and even Morioka in Japan, we deliver the same \"Wood Ball quality\" hospitality everywhere.",
    th: "ด้วยสาขาในทองหล่อ พร้อมพงษ์ ธนิยะ พัทยา ศรีราชา และแม้แต่โมริโอกะในญี่ปุ่น เราให้บริการ \"คุณภาพ Wood Ball\" เหมือนกันทุกที่"
  },
  "about.stat1": { ja: "バンコク在住", en: "Years in Bangkok", th: "ปีในกรุงเทพ" },
  "about.stat2": { ja: "タイ国内展開", en: "Locations in Thailand", th: "สาขาในไทย" },
  "about.stat3": { ja: "お客様の笑顔", en: "Happy Customers", th: "รอยยิ้มลูกค้า" },
  "about.stat1.suffix": { ja: "年+", en: "+", th: "+" },
  "about.stat2.suffix": { ja: "店舗+", en: "+", th: "+" },
  "about.stat3.suffix": { ja: "+", en: "+", th: "+" },

  // --- Stores ---
  "stores.label": { ja: "OUR STORES", en: "OUR STORES", th: "OUR STORES" },
  "stores.title": { ja: "店舗一覧", en: "Our Stores", th: "สาขาของเรา" },
  "stores.filter.all": { ja: "ALL", en: "ALL", th: "ทั้งหมด" },
  "stores.filter.woodball": { ja: "WOOD BALL", en: "WOOD BALL", th: "WOOD BALL" },
  "stores.filter.group": { ja: "グループ店", en: "GROUP", th: "กลุ่ม" },

  // Store names
  "store.thonglor": { ja: "ウッドボール トンロー店", en: "Wood Ball Thonglor", th: "Wood Ball ทองหล่อ" },
  "store.prompong": { ja: "ウッドボール プロンポン店", en: "Wood Ball Phrom Phong", th: "Wood Ball พร้อมพงษ์" },
  "store.taniya": { ja: "ウッドボール タニヤ店", en: "Wood Ball Taniya", th: "Wood Ball ธนิยะ" },
  "store.pattaya": { ja: "ウッドボール パタヤビーチ店", en: "Wood Ball Pattaya Beach", th: "Wood Ball พัทยาบีช" },
  "store.sriracha": { ja: "ウッドボール シラチャ店", en: "Wood Ball Sriracha", th: "Wood Ball ศรีราชา" },
  "store.morioka": { ja: "ウッドボール 盛岡店", en: "Wood Ball Morioka", th: "Wood Ball โมริโอกะ" },
  "store.roof": { ja: "The Roof Bar & Diner", en: "The Roof Bar & Diner", th: "The Roof Bar & Diner" },
  "store.orion": { ja: "オリオンスナックバー", en: "Orion Snack Bar", th: "โอไรออน สแน็คบาร์" },
  "store.shinya": { ja: "深夜食堂 バンコク店", en: "Shinya Shokudo Bangkok", th: "ชินยะ โชคุโด กรุงเทพ" },
  "store.aoba": { ja: "おでん青葉", en: "Oden Aoba", th: "โอเด้ง อาโอบะ" },
  "store.nanahoshi": { ja: "七星ラーメン シラチャ店", en: "Nanahoshi Ramen Sriracha", th: "นานาโฮชิ ราเมน ศรีราชา" },

  // Store areas
  "store.thonglor.area": { ja: "📍 スクンビット Soi 53", en: "📍 Sukhumvit Soi 53", th: "📍 สุขุมวิท ซอย 53" },
  "store.prompong.area": { ja: "📍 スクンビット Soi 22", en: "📍 Sukhumvit Soi 22", th: "📍 สุขุมวิท ซอย 22" },
  "store.taniya.area": { ja: "📍 タニヤ通り", en: "📍 Taniya Road", th: "📍 ถนนธนิยะ" },
  "store.pattaya.area": { ja: "📍 ウォーキングストリート, パタヤ", en: "📍 Walking Street, Pattaya", th: "📍 วอล์คกิ้งสตรีท พัทยา" },
  "store.sriracha.area": { ja: "📍 シラチャ ナコン5通り", en: "📍 Si Racha Nakhon 5, Sriracha", th: "📍 ศรีราชานคร 5 ศรีราชา" },
  "store.morioka.area": { ja: "📍 岩手県盛岡市", en: "📍 Morioka, Iwate, Japan", th: "📍 โมริโอกะ อิวาเตะ ญี่ปุ่น" },
  "store.roof.area": { ja: "📍 バンコク", en: "📍 Bangkok", th: "📍 กรุงเทพ" },
  "store.orion.area": { ja: "📍 スクンビット Soi 53", en: "📍 Sukhumvit Soi 53", th: "📍 สุขุมวิท ซอย 53" },
  "store.shinya.area": { ja: "📍 スクンビット Soi 55", en: "📍 Sukhumvit Soi 55", th: "📍 สุขุมวิท ซอย 55" },
  "store.aoba.area": { ja: "📍 スクンビット Soi 53", en: "📍 Sukhumvit Soi 53", th: "📍 สุขุมวิท ซอย 53" },
  "store.nanahoshi.area": { ja: "📍 シラチャ", en: "📍 Sriracha", th: "📍 ศรีราชา" },

  // Store hours
  "store.hours": { ja: "🕐 18:00 - 01:00", en: "🕐 18:00 - 01:00", th: "🕐 18:00 - 01:00" },
  "store.thonglor.hours": { ja: "🕐 18:00 - 02:00", en: "🕐 18:00 - 02:00", th: "🕐 18:00 - 02:00" },
  "store.pattaya.hours": { ja: "🕐 18:00 - 04:00", en: "🕐 18:00 - 04:00", th: "🕐 18:00 - 04:00" },
  "store.sriracha.hours": { ja: "🕐 18:00 - Late", en: "🕐 18:00 - Late", th: "🕐 18:00 - Late" },
  "store.morioka.hours": { ja: "🕐 19:00 - 02:00", en: "🕐 19:00 - 02:00", th: "🕐 19:00 - 02:00" },
  "store.roof.hours": { ja: "🕐 17:00 - 00:00", en: "🕐 17:00 - 00:00", th: "🕐 17:00 - 00:00" },
  "store.orion.hours": { ja: "🕐 18:00 - 02:00", en: "🕐 18:00 - 02:00", th: "🕐 18:00 - 02:00" },
  "store.shinya.hours": { ja: "🕐 17:00 - 06:00", en: "🕐 17:00 - 06:00", th: "🕐 17:00 - 06:00" },
  "store.aoba.hours": { ja: "🕐 17:00 - 03:00", en: "🕐 17:00 - 03:00", th: "🕐 17:00 - 03:00" },
  "store.nanahoshi.hours": { ja: "🕐 11:00 - 22:00", en: "🕐 11:00 - 22:00", th: "🕐 11:00 - 22:00" },

  // Store map hint
  "store.map.hint": { ja: "▶ 地図を見る", en: "▶ View Map", th: "▶ ดูแผนที่" },

  // --- Menu ---
  "menu.label": { ja: "OUR MENU", en: "OUR MENU", th: "OUR MENU" },
  "menu.title": { ja: "メニュー", en: "Menu", th: "เมนู" },
  "menu.tab.drinks": { ja: "DRINKS", en: "DRINKS", th: "เครื่องดื่ม" },
  "menu.tab.food": { ja: "FOOD", en: "FOOD", th: "อาหาร" },
  "menu.tab.karaoke": { ja: "KARAOKE", en: "KARAOKE", th: "คาราโอเกะ" },

  "menu.beer": { ja: "ビール / BEER", en: "BEER", th: "เบียร์ / BEER" },
  "menu.whisky": { ja: "ウイスキー / WHISKY", en: "WHISKY", th: "วิสกี้ / WHISKY" },
  "menu.cocktail": { ja: "カクテル / COCKTAIL", en: "COCKTAIL", th: "ค็อกเทล / COCKTAIL" },
  "menu.sake": { ja: "焼酎・日本酒 / SHOCHU & SAKE", en: "SHOCHU & SAKE", th: "โชจู & สาเก" },
  "menu.snacks": { ja: "おつまみ / SNACKS", en: "SNACKS", th: "ของทานเล่น / SNACKS" },
  "menu.food": { ja: "フード / FOOD", en: "FOOD", th: "อาหาร / FOOD" },
  "menu.karaoke.title": { ja: "カラオケ料金 / KARAOKE", en: "KARAOKE RATES", th: "ราคาคาราโอเกะ / KARAOKE" },
  "menu.party": { ja: "パーティープラン / PARTY", en: "PARTY PLANS", th: "แพ็คเกจปาร์ตี้ / PARTY" },

  "menu.singha": { ja: "シンハー（生）", en: "Singha (Draft)", th: "สิงห์ (สด)" },
  "menu.chang": { ja: "チャーン（生）", en: "Chang (Draft)", th: "ช้าง (สด)" },
  "menu.asahi": { ja: "アサヒスーパードライ", en: "Asahi Super Dry", th: "อาซาฮี ซุปเปอร์ดราย" },
  "menu.heineken": { ja: "ハイネケン", en: "Heineken", th: "ไฮเนเก้น" },
  "menu.kaku": { ja: "角ハイボール", en: "Kaku Highball", th: "คาคุ ไฮบอล" },
  "menu.jack": { ja: "ジャックダニエル", en: "Jack Daniel's", th: "แจ็ค แดเนียลส์" },
  "menu.mekhong": { ja: "メコンウイスキー（ボトル）", en: "Mekhong Whisky (Bottle)", th: "แม่โขง วิสกี้ (ขวด)" },
  "menu.nikka": { ja: "ニッカフロンティア", en: "Nikka Frontier", th: "นิกกะ ฟรอนเทียร์" },
  "menu.gin": { ja: "ジントニック", en: "Gin & Tonic", th: "จินโทนิค" },
  "menu.mojito": { ja: "モヒート", en: "Mojito", th: "โมฮีโต" },
  "menu.cassis": { ja: "カシスオレンジ", en: "Cassis Orange", th: "แคสซิส ออเรนจ์" },
  "menu.special": { ja: "ウッドボールスペシャル", en: "Wood Ball Special", th: "Wood Ball สเปเชียล" },
  "menu.imo": { ja: "芋焼酎（グラス）", en: "Sweet Potato Shochu (Glass)", th: "โชจูมันหวาน (แก้ว)" },
  "menu.mugi": { ja: "麦焼酎（グラス）", en: "Barley Shochu (Glass)", th: "โชจูข้าวบาร์เลย์ (แก้ว)" },
  "menu.nihonshu": { ja: "日本酒（冷/熱燗）", en: "Sake (Cold/Hot)", th: "สาเก (เย็น/ร้อน)" },

  "menu.edamame": { ja: "枝豆", en: "Edamame", th: "ถั่วแระญี่ปุ่น" },
  "menu.fries": { ja: "フライドポテト", en: "French Fries", th: "เฟรนช์ฟรายส์" },
  "menu.karaage": { ja: "鶏の唐揚げ", en: "Fried Chicken", th: "ไก่ทอดญี่ปุ่น" },
  "menu.somtam": { ja: "ソムタム", en: "Som Tam", th: "ส้มตำ" },
  "menu.padthai": { ja: "パッタイ", en: "Pad Thai", th: "ผัดไทย" },
  "menu.kaopad": { ja: "カオパッド（チャーハン）", en: "Kao Pad (Fried Rice)", th: "ข้าวผัด" },
  "menu.yakisoba": { ja: "焼きそば", en: "Yakisoba", th: "ยากิโซบะ" },

  "menu.karaoke.free": { ja: "カラオケ歌い放題（1時間）", en: "All-you-can-sing Karaoke (1 hour)", th: "คาราโอเกะร้องไม่อั้น (1 ชม.)" },
  "menu.karaoke.free.price": { ja: "無料", en: "FREE", th: "ฟรี" },
  "menu.karaoke.note": { ja: "※ ワンドリンクオーダー制", en: "* One drink minimum order", th: "* สั่งเครื่องดื่มขั้นต่ำ 1 แก้ว" },
  "menu.karaoke.desc": {
    ja: "※ 日本語・タイ語・英語の楽曲を多数ご用意しております。<br>※ 最新曲も随時追加中！",
    en: "* We offer a wide selection of Japanese, Thai, and English songs.<br>* Latest songs added regularly!",
    th: "* มีเพลงญี่ปุ่น ไทย และอังกฤษให้เลือกมากมาย<br>* เพิ่มเพลงใหม่ล่าสุดเป็นประจำ!"
  },
  "menu.nomihoudai": { ja: "飲み放題（2時間）", en: "All-you-can-drink (2 hours)", th: "ดื่มไม่อั้น (2 ชม.)" },
  "menu.private": { ja: "貸切プラン", en: "Private Party Plan", th: "แพ็คเกจปาร์ตี้ส่วนตัว" },
  "menu.private.price": { ja: "要相談", en: "Contact us", th: "ติดต่อสอบถาม" },
  "menu.party.desc": {
    ja: "※ 歓送迎会、誕生日パーティー、各種イベントに対応いたします。<br>※ 詳細はお気軽にお問い合わせください。",
    en: "* We host farewell parties, birthday parties, and various events.<br>* Please feel free to contact us for details.",
    th: "* รองรับงานเลี้ยงส่ง งานวันเกิด และอีเวนต์ต่างๆ<br>* สอบถามรายละเอียดเพิ่มเติมได้เลย"
  },
  "menu.disclaimer": {
    ja: "※ 価格はすべて参考価格です。店舗により異なる場合がございます。",
    en: "* All prices are approximate and may vary by location.",
    th: "* ราคาทั้งหมดเป็นราคาโดยประมาณ อาจแตกต่างกันในแต่ละสาขา"
  },

  // --- Schedule ---
  "schedule.label": { ja: "SCHEDULE", en: "SCHEDULE", th: "SCHEDULE" },
  "schedule.title": { ja: "出勤スケジュール", en: "Staff Schedule", th: "ตารางเข้างาน" },
  "schedule.desc": {
    ja: "オーナー とっぴーの出勤スケジュール",
    en: "Owner Toppie's Weekly Schedule",
    th: "ตารางเข้างานของเจ้าของ Toppie"
  },
  "schedule.period": {
    ja: "📅 2025年2月24日〜3月31日",
    en: "📅 Feb 24 - Mar 31, 2025",
    th: "📅 24 ก.พ. - 31 มี.ค. 2025"
  },
  "schedule.mon": { ja: "月曜", en: "MON", th: "จันทร์" },
  "schedule.tue": { ja: "火曜", en: "TUE", th: "อังคาร" },
  "schedule.wed": { ja: "水曜", en: "WED", th: "พุธ" },
  "schedule.thu": { ja: "木曜", en: "THU", th: "พฤหัส" },
  "schedule.fri": { ja: "金曜", en: "FRI", th: "ศุกร์" },
  "schedule.sat": { ja: "土曜", en: "SAT", th: "เสาร์" },
  "schedule.sun": { ja: "日曜", en: "SUN", th: "อาทิตย์" },
  "schedule.mon.store": {
    ja: "シラチャ店<br>22時頃〜",
    en: "Sriracha<br>From ~10PM",
    th: "ศรีราชา<br>ตั้งแต่ ~22:00"
  },
  "schedule.tue.store": {
    ja: "パタヤ店<br>22時頃〜",
    en: "Pattaya<br>From ~10PM",
    th: "พัทยา<br>ตั้งแต่ ~22:00"
  },
  "schedule.wed.store": { ja: "―", en: "―", th: "―" },
  "schedule.thu.store": {
    ja: "トンロー店<br>＋オリオン<br>22時頃〜",
    en: "Thonglor<br>+ Orion<br>From ~10PM",
    th: "ทองหล่อ<br>+ โอไรออน<br>ตั้งแต่ ~22:00"
  },
  "schedule.fri.store": {
    ja: "トンロー店<br>22時頃〜",
    en: "Thonglor<br>From ~10PM",
    th: "ทองหล่อ<br>ตั้งแต่ ~22:00"
  },
  "schedule.sat.store": { ja: "OFF", en: "OFF", th: "OFF" },
  "schedule.sun.store": { ja: "OFF", en: "OFF", th: "OFF" },
  "schedule.note": {
    ja: "※ スケジュールは変更になる場合がございます。最新情報はSNSをご確認ください。",
    en: "* Schedule may change. Please check our social media for the latest updates.",
    th: "* ตารางอาจมีการเปลี่ยนแปลง กรุณาตรวจสอบข่าวสารล่าสุดทาง SNS"
  },

  // --- Contact ---
  "contact.label": { ja: "CONTACT", en: "CONTACT", th: "CONTACT" },
  "contact.title": { ja: "お問い合わせ", en: "Contact Us", th: "ติดต่อเรา" },
  "contact.heading": {
    ja: "お気軽にご連絡ください",
    en: "Feel free to contact us",
    th: "ติดต่อเราได้เลย"
  },
  "contact.desc": {
    ja: "ご予約・貸切パーティー・イベントのご相談など、お気軽にお問い合わせください。",
    en: "For reservations, private parties, events, and inquiries, please don't hesitate to reach out.",
    th: "สำหรับการจอง ปาร์ตี้ส่วนตัว อีเวนต์ และสอบถาม โปรดติดต่อเราได้เลย"
  },
  "contact.phone": { ja: "電話", en: "Phone", th: "โทรศัพท์" },
  "contact.form.name": { ja: "お名前", en: "Name", th: "ชื่อ" },
  "contact.form.name.placeholder": { ja: "山田 太郎", en: "John Smith", th: "ชื่อ-นามสกุล" },
  "contact.form.email": { ja: "メールアドレス", en: "Email", th: "อีเมล" },
  "contact.form.store": { ja: "店舗", en: "Store", th: "สาขา" },
  "contact.form.store.placeholder": { ja: "店舗をお選びください", en: "Select a store", th: "เลือกสาขา" },
  "contact.form.message": { ja: "メッセージ", en: "Message", th: "ข้อความ" },
  "contact.form.message.placeholder": {
    ja: "ご予約・お問い合わせ内容をご記入ください",
    en: "Please enter your reservation or inquiry details",
    th: "กรุณากรอกรายละเอียดการจองหรือสอบถาม"
  },
  "contact.form.submit": { ja: "送信する", en: "Send", th: "ส่ง" },
  "contact.form.success": { ja: "送信しました!", en: "Sent!", th: "ส่งแล้ว!" },

  "contact.store.thonglor": { ja: "トンロー店", en: "Thonglor", th: "ทองหล่อ" },
  "contact.store.prompong": { ja: "プロンポン店", en: "Phrom Phong", th: "พร้อมพงษ์" },
  "contact.store.taniya": { ja: "タニヤ店", en: "Taniya", th: "ธนิยะ" },
  "contact.store.pattaya": { ja: "パタヤビーチ店", en: "Pattaya Beach", th: "พัทยาบีช" },
  "contact.store.sriracha": { ja: "シラチャ店", en: "Sriracha", th: "ศรีราชา" },
  "contact.store.morioka": { ja: "盛岡店", en: "Morioka", th: "โมริโอกะ" },
  "contact.store.other": { ja: "その他", en: "Other", th: "อื่นๆ" },

  // --- Footer ---
  "footer.copyright": {
    ja: "&copy; 2025 BAR WOOD BALL. All Rights Reserved.",
    en: "&copy; 2025 BAR WOOD BALL. All Rights Reserved.",
    th: "&copy; 2025 BAR WOOD BALL. All Rights Reserved."
  }
};

// --- Language Switcher Logic ---
let currentLang = localStorage.getItem('woodball-lang') || 'ja';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('woodball-lang', lang);

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key] && translations[key][lang]) {
      el.innerHTML = translations[key][lang];
    }
  });

  // Update all data-i18n-placeholder elements
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[key] && translations[key][lang]) {
      el.placeholder = translations[key][lang];
    }
  });

  // Update active button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update html lang
  document.documentElement.lang = lang;
}

// Init on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  // Setup language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setLanguage(btn.dataset.lang);
    });
  });

  // Apply saved language
  setLanguage(currentLang);
});
