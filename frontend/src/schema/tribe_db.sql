-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- 主機： localhost
-- 產生時間： 2021 年 10 月 08 日 22:35
-- 伺服器版本： 10.4.19-MariaDB
-- PHP 版本： 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 資料庫: `tribe_db`
--

-- --------------------------------------------------------

--
-- 資料表結構 `card_data`
--

CREATE TABLE `card_data` (
  `id` int(11) NOT NULL,
  `number` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiry` varchar(4) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `cvc` varchar(3) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `card_data`
--

INSERT INTO `card_data` (`id`, `number`, `name`, `expiry`, `cvc`) VALUES
(1, '5555444433331111', 'JohnSmith', '1020', '737'),
(2, '4111111111111111', 'JohnSmith', '1020', '737'),
(3, '370000000000002', 'JohnSmith', '1020', '737'),
(4, '3600666633334444', 'JohnSmith', '1020', '737'),
(5, '6011601160116611', 'JohnSmith', '1020', '737'),
(6, '5066991111111118', 'JohnSmith', '1020', '737'),
(7, '6250946000000016', 'JohnSmith', '1020', '737'),
(8, '6062828888666688', 'JohnSmith', '1020', '737');

-- --------------------------------------------------------

--
-- 資料表結構 `guild`
--

CREATE TABLE `guild` (
  `id` int(3) UNSIGNED NOT NULL,
  `name` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tribe` varchar(40) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `language` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `license` varchar(6) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `banner1` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `img1` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `img2` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `img3` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `img4` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `video` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `intro_title` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `intro` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `amountRating` int(5) NOT NULL,
  `avatar` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `guild`
--

INSERT INTO `guild` (`id`, `name`, `tribe`, `language`, `license`, `banner1`, `img1`, `img2`, `img3`, `img4`, `video`, `intro_title`, `intro`, `rating`, `amountRating`, `avatar`) VALUES
(1, '瓦丹', '太巴塱部落,靜浦部落,新社部落', '中文', '華語導遊證照', '太巴塱導遊banner.jpg', '太巴塱導遊1.jpg', '太巴塱導遊2.jpg', '太巴塱導遊3.jpg', '太巴塱導遊4.jpeg', 'https://www.youtube.com/embed/0cy7lE9Imuk', '的瘋狂冒險團', '我是雅固，我熱愛我的家鄉跟部落，希望能夠讓更多人看到部落文化。請放心地跟著我，我會帶著你們一覽最美的部落風景，吃最好吃的部落美食，聽最感人的部落故事。\r\n', '5', 27, '太巴塱導遊1.jpg'),
(2, '芭奈‧法老', '水璉部落,太巴塱部落,靜浦部落', '中文,英文', '華語導遊證照', '水璉導遊banner1.png\r\n', '水璉導遊1.jpg', '水璉導遊3.jpg', '水璉導遊5.jpg', '水璉導遊6.jpg', 'https://www.youtube.com/embed/XA3gQOoo9-Q', '的瘋狂冒險團', '大家好我是芭奈‧法老,老人家們的智慧如此珍貴，如果再不傳承，這些寶物極有可能消失不見！\r\n創立了吉籟獵人學校獵人,在獵人學校裡可以學到原住民獵人寶貴的知識與技能。\r\n', '5', 22, '水璉導遊1.jpg'),
(3, '巴隆', '奇美部落,撒固兒部落,水璉部落', '中文', '華語導遊證照', '奇美導遊banner.png\r\n', '奇美導遊1.jpg', '奇美導遊2.jpg', '奇美導遊3.jpg', '奇美導遊4.jpg', 'https://www.youtube.com/embed/du6uL8LsDnA', '的瘋狂冒險團', '各位好我是巴隆，從事旅遊業15年, 也熱愛交朋友, 更熱愛這塊我生長的土地~我將盡所能的介紹奇美部落這個我愛的地方, 我知道的景點, 並希望帶給您們愉快的旅遊回憶~\r\n\r\n', '5', 17, '奇美導遊3.jpg'),
(4, '希達', '馬太鞍部落,奇美部落,靜浦部落', '中文,英文', '華語導遊證照', '馬太鞍banner.jpg\r\n', '馬太鞍導遊1.jpg', '馬太鞍導遊2.jpg', '馬太鞍導遊3.jpg', '馬太鞍導遊4.jpg', 'https://www.youtube.com/embed/iz_cHO_hUbM', '的瘋狂冒險團', '我的名字叫希達，我的部落是一座美麗、安靜的部落，您可以在那裡放鬆身心、享用美味佳餚。在那裡您還可以享受娛樂和舞蹈。相信在我的帶領下您會在馬太鞍部落過得愉快。', '5', 11, '馬太鞍導遊1.jpg'),
(5, '卡拉', '撒固兒部落,馬太鞍部落,奇美部落', '中文', '華語導遊證照', '撒固兒導遊banner.png\r\n', '撒固兒導遊1.jpg', '撒固兒導遊2.jpg', '撒固兒導遊3.jpg', '撒固兒導遊4.jpg', 'https://www.youtube.com/embed/QUGATx_64T4\r\n', '的瘋狂冒險團', '我是卡拉，非常歡迎大家來到部落旅行，我會竭盡我所知，竭盡我所能，為大家講解部落的歷史，部落的文化，讓大家不虛此行。\r\n', '4', 5, '撒固兒導遊3.jpg'),
(6, '阿里曼', '新社部落,奇美部落,撒固兒部落', '英文', '華語導遊證照', '新社導遊banner.jpg', '新社導遊1.jpg', '新社導遊2.jpg', '新社導遊3.jpg', '新社導遊4.jpg', 'https://www.youtube.com/embed/9viHdDVNNH0', '的瘋狂冒險團', '我是素有工藝之家美稱的噶瑪蘭族人，因為噶瑪蘭族人的文化與工藝讓新社部落變得不同！走～沿著台11線海岸公路，讓我帶著你們巡禮水稻田、海岸、部落文化與香蕉絲編織DIY體驗，遠眺那美麗浪漫的新社梯田。', '3', 33, '新社導遊1.jpg'),
(7, '石阿松', '靜浦部落,奇美部落,水璉部落', '中文,英文', '華語導遊證照', '靜浦導遊banner.jpg\r\n', '靜浦導遊1.jpg', '靜浦導遊2.jpg', '靜浦導遊3.jpg', '靜浦導遊4.jpg', 'https://www.youtube.com/embed/6EIr1Hgdwdc', '的瘋狂冒險團', '歡迎大家來到靜浦部落。在深夜、凌晨到出海口利用傳統的三角網捕撈，與海浪搏鬥是族人的日常，一盞一盞頭燈在出海口閃爍，絕對是其他地方看不到的奇妙美景喔！', '4', 18, '靜浦導遊4.jpg');

-- --------------------------------------------------------

--
-- 資料表結構 `journey`
--

CREATE TABLE `journey` (
  `_id` int(5) UNSIGNED NOT NULL,
  `name` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `total_time` tinyint(5) UNSIGNED NOT NULL,
  `price` int(5) UNSIGNED NOT NULL,
  `total_people` int(5) UNSIGNED NOT NULL,
  `journey_img` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `transportation` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `introname` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `rating` int(5) UNSIGNED NOT NULL,
  `status` tinyint(1) NOT NULL,
  `tribe_intro` varchar(2000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `tribe` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `lang` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `needtoknow` varchar(5000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `amountRating` tinyint(5) UNSIGNED NOT NULL,
  `description` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `journey_img2` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `banner_img` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `banner_img2` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `banner_img3` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `banner_img4` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `journey`
--

INSERT INTO `journey` (`_id`, `name`, `total_time`, `price`, `total_people`, `journey_img`, `location`, `transportation`, `introname`, `content`, `rating`, `status`, `tribe_intro`, `tribe`, `lang`, `needtoknow`, `amountRating`, `description`, `journey_img2`, `banner_img`, `banner_img2`, `banner_img3`, `banner_img4`) VALUES
(1, '半日漁獵生活體驗｜走進太陽的部落', 4, 1000, 0, '靜浦-竹筏漫遊.jpg', '花蓮縣豐濱鄉靜浦村3鄰140號', '自行前往', '<p>● 走進傳說中的太陽部落－靜浦部落</p>\r\n<p>● 零距離接觸太平洋特有的浪花蟹生態</p>\r\n<p>● 花蓮海岸旁的部落體驗，開啟豐富的半日漁獵生活</p>', '<p> ◥ 上午場-09：00 / 下午場-14：00 </p>\r\n<p> ◥ 花蓮靜浦部落集合 </p>\r\n<p> ◥ 開啟靜浦部落的半日漁獵生活體驗 </p>\r\n<p> ◥ 踏上膠筏，划向秀姑巒溪(約40分鐘) </p>\r\n<p> ◥ 岸邊找尋浪花蟹X八卦網捕魚體驗(約60分鐘) </p>\r\n<p> ◥ 部落神射手－射箭體驗(約40分鐘) </p>\r\n<p> ◥ 12：00 / 17：00 靜浦部落半日體驗結束 </p>', 5, 0, '<p>花蓮靜浦部落，一個洋溢熱血與熱情的太陽部落</p>', '靜浦部落', '中文，英文', '<p>- 此靜浦部落半日體驗因安排較多戶外活動體驗，較適合10歲以上孩童參加。</p>\r\n<p>- 請提早10~20分鐘前往靜浦部落集合。</p>\r\n<p>- 各項體驗活動時間會視現場執行狀況調整。</p>\r\n<p>- 活動為團進團出，一旦團隊已離岸，無法讓遲到者另行下水出航，亦無法退費。請特別注意勿遲到，以免影響自身權益 。</p>\r\n<p>- 靜浦部落半日體驗多為水上活動，易濺濕衣物，可多帶替換衣物以便現場更換。</p>\r\n<p>- 為顧慮您的安全，活動請遵從部落族人指示，以免發生危險或受傷。</p>', 20, '花蓮海岸旁的部落體驗，開啟豐富的半日漁獵生活', '半日漁獵生活體驗｜走進太陽的部落2.jpg', '靜浦部落1.jpg', '靜浦部落2.jpg', '靜浦部落3.jpg', '靜浦部落4.jpg'),
(2, '划竹筏·八卦網·射箭·追逐浪花蟹一日遊', 8, 1280, 0, '靜浦-追花逐浪花蟹.jpg', '花蓮縣豐濱鄉靜浦村3鄰140號', '自行前往', '<p>08:00 花蓮火車站或酒店出發</p>\r\n\r\n<p>09:30 靜浦部落</p>\r\n\r\n<p>12:00 午餐﹙自理﹚</p>\r\n\r\n<p>14:00~ 麻糬洞-新社梯田-大鼻石山步道-返回花蓮市區</p>\r\n', '<p>● 走進傳說中的太陽部落－靜浦部落</p>\r\n<p>● 在秀姑巒溪上一面體驗划竹筏的樂趣，一面欣賞沿途景色：優雅的長虹橋，背後層山疊翠，旁有幽靜的奚卜蘭島，前方是寬闊的太平洋，山、海、溪、島交織，伴著微風吹襲，黃昏時刻，還能望見純白的鷺鷥群飛過。</p>\r\n<p>● 俐落的收繩索、披掛外網、分開內網，抓好八卦網利用身體擺動用力將網撒出去。流暢的動作，可不是每個人都有辦法。靜浦的捕魚生活，八卦網是重要的一環，歡迎體驗漁民生活</p>\r\n<p>● 嚮往傳說中的神射手</p>\r\n<p>● 石門洞海岸地景，因此處海岸有海蝕洞，形狀如門才有此稱呼，當地人也俗稱此地為麻糬洞。位於台11 線旁石門遊憩區，從木棧道向海岸前行，因角度的關係，海蝕洞從特定方向看過去，像似從前出產過的「March」汽車，所以也被稱為「March 洞」，更因大導演馬丁．史柯西斯拍攝電影《沉默》在此取景而聲名大噪。嗎？到靜浦，放手一搏。拿起傳統弓箭，從上弓弦開始學習，對準標靶，測試看看自己有沒有當獵人的潛力。</p>', 5, 0, '花蓮靜浦部落，一個洋溢熱血與熱情的太陽部', '靜浦部落', '中文', '<p>★ 含專業教練導覽解說、活動費用(划竹筏、追逐浪花蟹二選一，參加其他活動則需另行報價)。</p>\r\n\r\n<p>★ 請穿著排汗快乾衣褲和運動鞋，擔心曬傷則以長袖、長褲為佳，並勿穿著棉質或牛仔褲等易吸水質料服裝。</p>\r\n\r\n<p>★ 若活動當天風浪狀況不佳，或遇豪大雨、打雷、風勢過大、颱風來襲等不可抗力之因素，基於安全考量，將視情況決定活動是否取消。</p>', 8, '在秀姑巒溪上一面體驗划竹筏的樂趣，一面欣賞沿途景色：優雅的長虹橋，背後層山疊翠，旁有幽靜的奚卜蘭島，前方是寬闊的太平洋。', '靜浦部落2.jpg', '靜浦部落5.jpg', '靜浦部落6.jpg', '靜浦部落7.jpg', '靜浦部落1.jpg'),
(3, '噶瑪蘭族文化體驗｜野菜採集文化漫步，飲食饗宴，香蕉絲工藝\r\n', 8, 1200, 0, '香蕉絲體驗.jpg', ' 花蓮縣豐濱鄉花東海岸公路(葛瑪蘭文化展示中心)', '自行前往', '<p>部落導覽→野菜採集體驗→風味餐→香蕉絲工</p>', '<p>跟著噶瑪蘭族族人，漫走在部落傾聽族人遷徙</p>', 5, 0, '座落在花蓮縣豐濱鄉，以噶瑪蘭族為主要族群', '新社部落', '中文', '<p>當天活動多有戶外行程，請來參加學員務必攜帶防曬物品及衣物，穿著長褲和自備環瓶、筷，以及2~3個口罩。</p>', 1, '跟著噶瑪蘭族族人，漫走在部落傾聽族人遷徙的歷史淵源！沿途認識部落常吃的野菜，體驗噶瑪蘭族融於生活中的野菜採集文化！', '新社部落2.jpg', '小湖船澳文化體驗（季節限定）.jpg', '封面裡-新社部落.jpg', '海人家2.jpg', '海人家.jpg'),
(4, '走進大海的部落', 12, 1200, 0, '新社部落藝術品.jpg', ' 花蓮縣豐濱鄉花東海岸公路(葛瑪蘭文化展示中心) ', '專車接送', '<p>跟著部落達人的腳步，一起來場小旅行吧！一邊走訪部落、一邊從分享的故 事中，踏上噶瑪蘭族歷史文化之旅，走入部落的文化展示中心，認識岩棺出土地，遙想新石器時代的神祕生活；接著徜徉在半島梯田的絕美風景裡，再聽族人補充 過去跨越磯崎、新社兩地，親不知子斷崖的感傷故事。</p>', '\r\n<p>09:00-10:30 花蓮火車站—新社部落\r\n\r\n<p>10:30-12:00【導覽】部落及藝術季作品\r\n\r\n<p>12:00-13:00 傳統風味午餐\r\n\r\n<p>13:00-15:00【部落體驗】香蕉絲工坊</p>\r\n\r\n<p>15:00-17:00【火堆論壇】族群裡的原生植物</p>\r\n\r\n<p>17:00-18:00 傳統風味晚餐</p>\r\n\r\n<p>18:00-20:00 新社部落—花蓮火車站</p>', 5, 1, '', '新社部落', '中文，英文', '<p>當天活動多有戶外行程，請來參加學員務必攜帶防曬物品及衣物，穿著長褲和自備環瓶、筷，以及2~3個口罩。</p>', 33, '跟著部落達人的腳步，一起來場小旅行吧！一邊走訪部落、一邊從分享的故 事中，踏上噶瑪蘭族歷史文化之旅，走入部落的文化展示中心，認識岩棺出土地，遙想新石器時代的神祕生活!', '1511056_509912942464471_5152166478911128497_n.jpg', '海部落1.jpg', '海部落2.jpg', '海部落3.jpg', 'P3201106-1024x768.jpg'),
(5, '紅糯米田野餐桌一日遊', 7, 1750, 0, '紅糯米田野餐桌.jpg', '台灣花蓮縣花蓮太巴塱部落', '專車接駁', '<p>太巴塱部落的寶石—紅糯米，是田野餐桌最耀眼的主題，意想不到的多變美味，將要驚艷你的味覺。圍著三角爐灶，在稻田間望山而坐，如同部落家家戶戶相聚談笑的情景。品嘗著飄香的傳統糯米飯，酒糟香蘭燻雞，還有野菜烹製而成的特色料理，更將在部落傳統歌謠中，親手搗麻糬。腳踏著土地的樸實感受，隨著阿美族的傳統文化，吃進嘴裡，感動進心裡。</p>\r\n', '\r\n<p>野菜市集尋寶：\r\n<p>跟著內行人逛市場，探訪太巴塱部落族人熟門熟路的食材採購處，全花蓮野菜最豐富多樣的光復市場，帶著滿滿好奇心，一起採買當季食材、聽野菜介紹。\r\n<p>阿美廚藝教室：\r\n<p>阿美廚藝教室讓你認識太巴塱部落與紅糯米的傳說故事，用傳統的烹調方式製作紅糯米捏捏飯，帶你品米，再教你創新的吃法將酒糟加入辣椒，層層疊疊，製作香味十足的紅糯米酒釀辣椒、以及將最新鮮的野菜從市場帶走\r\n<p>部落文化導覽：</p>\r\n<p>文化悠遠的太巴塱部落，在百年歷史的太巴塱國小即可窺知一二。除此之外，走訪kakitaan祖屋，了解昔日的信仰中心，以及傳統祭儀、社會結構，對太巴塱部落深入認識。</p>\r\n<p>傳統歌謠搗麻糬：</p>\r\n<p>吟唱採收紅糯米時的歌曲，透過歌謠，感謝上天賜予部落族人能夠豐收，以及對祖靈的敬意。在餐桌上，品嚐紅糯米手握飯時刻，就會獻上這首歌謠，在歌曲和享食間，與太巴塱部落傳統文化深刻連結，感受部落祖先代代相傳的部落紅寶石—紅糯米的可貴。）</p>\r\n', 4, 0, '蘊含著深刻文化內容的太巴塱部落，悠久的歷史展現在部落隨處可見的阿美陶、木雕、竹編、織布、傳統手工藝等作品，以及一年一度的豐年祭，這一部落盛事，從祭典前兩周就開始籌備，動員年齡階級，傳承文化內涵。太巴塱部落現今不僅以豐厚文化聞名，復耕有成的紅糯米，更是耀眼紅寶石，期望這一營養或文化意義兼備的美味食物，可以走進更多人的廚房。', '太巴塱部落', '中文', '<p>部分活動將提供含酒精類飲品，如有不適飲酒者，請自行斟酌飲用。</p>\r\n<p>若遇天候不佳或不可抗拒之因素，本公司保有取消或變更行程的權利。並於前1天的20:00於粉絲專頁公佈活動是否取消及後續處理方法。</p>\r\n<p>行程所載明之時間僅供參考，因路況行程順序或時間將視實際情況調整。</p>\r\n<p>請於規定時間內準時集合，行程中如因個人因素私自脫隊或集合不到，本公司不予退費。</p>\r\n<p>車輛依當日人數分配，現場自由選位入座，無法事先指定座位，敬請見諒。</p>\r\n<p>遊客填寫報名表時，請務必填寫真實中文姓名及身分證，以便保險。</p>\r\n<p>參加者請攜帶個人身份證、健保卡等證件。</p>', 6, '太巴塱部落的寶石—紅糯米，是田野餐桌最耀眼的主題，意想不到的多變美味，將要驚艷你的味覺。圍著三角爐灶，在稻田間望山而坐，如同部落家家戶戶相聚談笑的情景。', '1909161444231259632768.jpg', '970c7824b9774e28abe0d5cc28fb2120.jpg', '2009040534151088303867.jpg', '2009040430191730145229.jpg', '2009040507345371714260.jpg'),
(6, '尋訪太陽的故鄉半日遊', 4, 850, 0, '尋訪太陽的故鄉半日遊.jpg', '花蓮縣太巴塱部落', '自行前往', '<p>在地原住民導覽，帶你認識太巴塱部落</p>\r\n<p>了解阿美族傳統的茅草屋、生活器具</p>\r\n<p>拜訪砂荖古井、Saksakay 部落遺址</p>\r\n<p>帶回一瓶自己釀的紅糯米釀酒和親友分享！</p>\r\n<p>享用道地豐富的原住民風味餐！</p>', '<p>部落文化導覽\r\n<p>於當地人興建的「太巴塱周廣輝生活文化館」，了解阿美族傳統的茅草屋、生活器具\r\n<p>參觀具有 300 年以上歷史的砂荖古井、Saksakay 部落遺址，了解千年古屋的搭建方式</p>\r\n\r\n<p>創意 DIY 體驗—紅糯米釀酒製作 DIY</p>\r\n<p>用最能代表太巴塱阿美族文化農作物—在地種植的 「紅糯米」，釀出獨特口感的酒，帶回家與親友分享！</p>\r\n\r\n<p>火的饗宴 - 風味體驗餐</p>\r\n<p>餐點以黑糯米雞油飯為主食，香草烤雞為主餐、配上鹹豬肉、野菜、時令青菜等，和部落人一起享用最道地的部落風味餐</p>', 3, 1, '太巴塱位於花蓮縣光復鄉，是一處古老的阿美族部落，這裡生活著一群太陽 “Ina” 的子民，是目前台灣最大、人口最密集的原住民部落。一趟 4 小時的半日遊，將帶你認識阿美族早期原始的文物，體驗部落人的原始情感，更棒的是，品嚐最道地豐盛的阿美族風味餐！', '太巴塱部落', '中文，英文', '<p>體驗時間：4 小時，依現場狀況為主 活動對象：皆可， 12 歲以下孩童不能自行參與活動，需家長一同參予。</p>', 34, '將帶你認識體驗部落人的原始情感，感受阿美族歌舞的熱情，更棒的是，品嚐最道地豐盛的阿美族風味餐！\r\n在這裡和部落裡的人互動，不僅可以享受島內的文化交流，更能感受到他們對於部落深厚的情感。', '43hAOlgk50VYKuJe9KVdrw_1920.jpg', '_CED4hVxWPEAWApAwoQMuw_1920.jpg', 'F5lTjy3v28CvgKIdHTut2Q_1920.jpg', 'tvobRQWzkNcZXYwiCnpbUw_1920.jpg', 'MdyAmERMpG9Q3HHuZrShMA_1920.jpg'),
(7, '吉籟獵人學校[半日遊]', 8, 1200, 0, '射箭.jpg', '花蓮縣壽豐鄉水璉路179號', '自行前往', '<p>半日遊行程：部落導覽→草編頭冠→射箭→原民舞蹈文化體驗→風味餐 </p>   ', '<p>來到吉賴獵人學校展現你的獵人魂，遵循祖先們入山前的祈福儀式，跟著獵人們認識常用植物，了解植物的特性及各種運用方式。並在獵人們的教導下利用植物學會阿美族的編繩技巧及野外求生的生火技巧，當一位真正的野外獵人！</p>', 3, 0, '淳樸、可愛，在美人山的懷抱之中，悠閒的放牧，與山海共生的耕耘漁獵，在水璉，安居耕獵，閑居遊藝，充沛的生活能量，無限大。', '水璉部落', '中文，英文', '<p>★含專業教練導覽解說 ★請穿著排汗快乾衣褲和運動鞋，擔心曬傷則以長袖、長褲為佳，並勿穿著棉質或牛仔褲</p>', 23, '學會如何用椰子葉製作代表吉籟獵人學校精神象徵及文化意涵的勇士頭編！拿出你的獵人魂，在專業教練正確射箭指導下，成為半日獵人，最後在歡樂的歌聲、輕快的腳步，跟著獵人們一起跳支阿美族的舞蹈吧！', '關於吉籟獵人學生.jpg', '獵人餐.jpg', '207E4EBF-F16D-4269-910B-83B6B6800E7D.jpg', 'unnamed.jpg', '26106.jpg'),
(8, '獵人體驗｜我和浪花蟹有約 （季節限定）', 12, 2400, 0, '浪花蟹.jpg', '花蓮縣壽豐鄉水璉路179號', '自行前往', '<p>一日遊行程：驛站導覽→獵人體驗→獵人餐→浪花蟹體驗→草編體驗→原民舞蹈文化體驗 </p>', '<p>來到吉賴獵人學校展現你的獵人魂，遵循祖先們入山前的祈福儀式，跟著獵人們認識常用植物，了解植物的特性及各種運用方式。並在獵人們的教導下利用植物學會阿美族的編繩技巧及野外求生的生火技巧，當一位真正的野外獵人！</p>', 4, 0, '淳樸、可愛，在美人山的懷抱之中，悠閒的放牧，與山海共生的耕耘漁獵，在水璉，安居耕獵，閑居遊藝，充沛的生活能量，無限大。', '水璉部落', '中文，英文', '<p>當天活動多有戶外行程，請來參加學員務必攜帶防曬物品及衣物，穿著長褲和自備環瓶、筷，以及2~3個口罩。</p>', 5, '一起在吉賴獵人學校展現你的獵人魂及海浪魂。', '浪花蟹.jpg', '獵人2.jpg', '獵人餐.jpg', '浪花蟹22.jpg', 'liyulake_edt.jpg'),
(9, '奇美部落深度旅遊{一}', 5, 1000, 0, '河邊撒網體驗01.jpg', '奇美部落', '自行前往', '<p>奇美文化導覽（祭典文化、生活文化導覽）→</p>\r\n<p>傳統家屋初體驗（內部解說）→</p>\r\n<p>享用部落風味餐→介紹秀姑巒溪→</p>\r\n<p>Misukap（摸蝦）收蝦籠→</p>\r\n<p>認識麥飯石、撿麥飯石→</p>\r\n<p>製作Cifar（傳統器皿）→</p>\r\n<p>體驗烹煮石頭火鍋→賦歸</p>', '<p>旅遊時間：若9:00抵達奇美部落～14:00賦歸</p>\r\n                    <p>若10:00抵達奇美部落～15:00賦歸\r\n                  （以此類推）</p>', 5, 0, '山谷裡隱蔽的現代桃花源 整個奇美部落 是一座活的博物館', '奇美部落', '中文，英文', '<p>- 此半日體驗因安排較多戶外活動體驗，較適合10歲以上孩童參加。 - 請提早10~20分鐘前往部落集</p>', 7, '奇美部落的風味餐飲，採預約制，新鮮在地食材經過巧手烹飪，在傳統阿美族飲食中加入現代創意，成為奇美部落的特色風味餐。', 'Filedata635981526343181263.jpg', 'Filedata635983842180724820.jpg', 'Filedata635981525569731904.jpg', 'Filedata635983820160038143.jpg', 'Filedata635981526400901364.jpg'),
(10, '奇美部落深度旅遊{二}', 8, 900, 0, '採箭筍06.jpg', '奇美部落', '自行前往', '<p>奇美文化導覽（祭典文化、生活文化導覽）</p>\r\n<p>→傳統家屋初體驗（內部解說）</p>\r\n<p>→享用部落風味餐→介紹秀姑巒溪→</p>\r\n<p>Misukap（摸蝦）收蝦籠→</p>\r\n<p>認識麥飯石、撿麥飯石→製作Cifar（傳統器皿）→體驗烹煮石頭火鍋→賦歸</p>', '<p>旅遊時間：若9:00抵達奇美部落～14:00賦歸</p>\r\n                    <p>若10:00抵達奇美部落～15:00賦歸\r\n                   （以此類推）</p>', 3, 0, '山谷裡隱蔽的現代桃花源 整個奇美部落 是一座活的博物館', '奇美部落', '中文', '當天活動多有戶外行程，請來參加學員務必攜帶防曬物品及衣物，穿著長褲和自備環瓶、筷，以及2~3個口罩。', 25, '沿途解說奇美故事、解說秀姑巒溪生態、撒網、抓蝦、野炊、石頭火鍋、奇美御飯團便當、奇美冰涼萬歲飲品，上岸後盥洗、品嚐部落風味餐、傳統屋體驗、部落文化導覽...等。\r\n詳細行程請見：奇美水上思路詳細行程', 'Filedata635981527821595860.jpg', 'Filedata635983842690221715.jpg', 'Filedata635981527244550846.jpg', 'Filedata635981526062380770.jpg', 'Filedata635983820160038143 (1).jpg'),
(11, '馬太鞍水漾濕地樂', 6, 888, 0, '馬太鞍濕地生態旅遊.jpg', '馬太鞍休閒農業區', '專車接駁', '09:00-09:30花蓮火車站→大農大富花海→原住民風味餐→馬太鞍濕地生態文化導覽→水漾農田體驗→種子DIY體驗→賦歸', '馬太鞍休閒農業區位於花蓮縣光復鄉馬錫山腳下，是一處湧泉不絕的天然沼澤濕地，面積廣達12公頃，並孕育出豐富的鳥類、蛙類、底棲性魚類等多樣化自然生態，來到這裡一定要好好了解這塊濕地的生態及文化，除了濕地導覽、水漾農田體驗，也安排了種子diy體驗及教遊客創造屬於自己獨有的工藝品。一二月期間更逢大農大富平地森林園區－花東最大花海花季期間，是絕對不可錯過的景點，適合親子旅遊、騎腳踏車踏青。', 2, 0, '馬太鞍部落（阿美語：Fata\'an，或作vata\'an），是台灣花蓮縣光復鄉馬錫山山腳下的一個阿美族原住民部落，亦是阿美族最大的部落之一，現今以大馬太鞍(大同、大馬、大平、大華村)為部落的中心。[1]。「馬太鞍」由來為馬太鞍族人的祖先輾轉遷來此地，發現長滿「樹豆」（阿美語：Fata\'an），當地的樹豆成為族人的主食。樹豆可以常保不壞，又容易生長，成為馬太鞍人的最愛，常常帶在身上，到處種植，使得附近', '馬太鞍部落', '中文，英文', '部分活動將提供含酒精類飲品，如有不適飲酒者，請自行斟酌飲用。 若遇天候不佳或不可抗拒之因素，本公司保', 33, '來到馬太鞍休閒農業區一定要好好了解這塊濕地的生態及文化，除了濕地導覽、水漾農田體驗，也安排了原住民頭飾diy與舞蹈體驗。', '馬太鞍圖片1.jpg', '流蘇前裙.jfif', '綁腿褲.jfif', '鈴鐺.jfif', '頭飾.jfif'),
(12, '秋遊壽豐馬太鞍', 24, 2988, 0, 'Palakaw」巴拉告生態捕魚法.jpg', '花蓮壽豐鄉', '專車接送', '第一天\r\n\r\n09:00-09:30花蓮火車站→立川漁場摸蜆兼洗褲→特色午餐→漫遊生態園區→雞母狗仔手作體驗→聽青蛙說故事→迎賓餐→壽豐住宿~晚安\r\n\r\n第二天\r\n\r\n健康早餐→瑪布隆農場導覽解說→黑金茶DIY→在地風味餐→馬太鞍溼地導覽解說→種子DIY體驗活動→賦歸', '結合壽豐休閒農業區與馬太鞍休閒農業區（光復）先帶您到立川漁場摸蜆兼洗褲，再一起漫遊壽豐落羽松秘境，紹介多種復育成功的多種蛙類，聆聽大自然的交響樂，並體驗融入「珍惜」的教育意義，結合在地食材製作的雞母狗仔手作DIY，造型口味多變化。\r\n\r\n第二天再到馬太鞍體驗黑金茶DIY，走訪濕地了解在地文化，「種子生態館」目前收藏了近百種種子，除了透過解說而認識食物保種概念外，也教您認識種子，利用各式各樣的種子創作屬於自己的可愛小擺飾～\r\n\r\n\r\n', 3, 1, '「馬太鞍」由來為馬太鞍族人的祖先輾轉遷來此地，發現長滿「樹豆」（阿美語：Fata\'an），當地的樹豆成為族人的主食。樹豆可以常保不壞，又容易生長，成為馬太鞍人的最愛，常常帶在身上，到處種植，使得附近遍布樹豆，因此就通稱此地為馬太鞍。', '', '中文', '當天活動多有戶外行程，請來參加學員務必攜帶防曬物品及衣物，穿著長褲和自備環瓶、筷，以及2~3個口罩。', 0, '來到馬太鞍休閒農業區一定要好好了解這塊濕地的生態及文化，除了濕地導覽、水漾農田體驗，也安排了原住民頭飾diy與舞蹈體驗。', '馬太鞍圖片.jpg', '1517993817-2628026431_n.jpg', 'IMG_9974-cut-Mataian-Wetland.jpg', '流蘇前裙.jfif', '1517994663-2563258574_n.jpg'),
(13, '走進撒固兒', 8, 1000, 0, '撒固兒1.jpg', '台灣 |  撒固兒部落 ', '自行前往', '10:00 花蓮火車站集合\r\n部落文化祭祀廣場→部落野菜市集→部落廚房→佐倉步道→撒固兒瀑布\r\n', '撒固兒部落周邊許多特色景點，如撒固兒野菜市集、國福養生休閒園區、佐倉步道、撒固兒瀑布等，將在地景點與文化特色相結合，以「健康與休閒」作為旅遊相關產業的發展主軸。積極推廣傳統文化、產業，傳承族群文化並且反應出原住民與自然共存，取材自然山林的文化。\r\n \r\n', 1, 0, '撒固兒部落，舊稱加路蘭，面對太平洋背靠加路蘭山，孕育了豐沛且多樣的人文景象與自然生態。擁有豐富的林相、肥沃的土地、海洋的豐沛資源，使得原住民能於山林、平原、海邊取得各式各類型的生態資源。', '撒固兒部落', '中文', '當天活動多有戶外行程，請來參加學員務必攜帶防曬物品及衣物，穿著長褲和自備環瓶、筷，以及2~3個口罩。', 5, '跟著部落長輩們學習如何在部落過生活，將其視為一個課題，如同修學分，讓日常知識、文化做中學的概念，感受它。', '013(7).jpg', '001(7).jpg', '006(5).jpg', '010(6).jpg', '011(7).jpg'),
(14, '聆聽文史典藏半日遊', 4, 800, 0, '撒固兒2.jpg', '台灣 |  撒固兒部落 ', '自行前往', '野菜市集→ 部落廚房→撒固兒故事銅牆→佐倉步道', '了解撒奇萊雅族在奇萊平原的歷史，從舊社分布、山海的子民、平原的火光(達固灣戰役)、隱姓埋名到重返光榮，一一呈現歷史上幾個重要的轉折點，還有各部落的發源地、顛沛流離到族群正名等，隨著耆老們的腳步，往前走、向前看，也不忘根，期待部落年輕人能返鄉，與耆老生活，慢慢找回最初的部落生活與文化。', 3, 0, '撒固兒部落周邊許多特色景點，如撒固兒野菜市集、國福養生休閒園區、佐倉步道、撒固兒瀑布等，將在地景點與文化特色相結合，以「健康與休閒」作為旅遊相關產業的發展主軸。積極推廣傳統文化、產業，傳承族群文化並且反應出原住民與自然共存，取材自然山林的文化。', '撒固兒部落', '中文', '當天活動多有戶外行程，請來參加學員務必攜帶防曬物品及衣物，穿著長褲和自備環瓶、筷，以及2~3個口罩。', 5, '讓人走進歷史軌跡裡，回溯舊時風華。這也是磯崎部落選擇按部就班，走出自己部落特色的原因，要讓東海岸不只有美景烙印在大家的腦海，當地原住民的生活、文化背後的議題，更是旅程中，最美麗的回憶。', '014(5).jpg', '021(6).jpg', '032(2).jpg', '027(6).jpg', '031(2).jpg');

-- --------------------------------------------------------

--
-- 資料表結構 `lang`
--

CREATE TABLE `lang` (
  `id` int(5) UNSIGNED NOT NULL,
  `lang` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 傾印資料表的資料 `lang`
--

INSERT INTO `lang` (`id`, `lang`) VALUES
(1, '中文'),
(2, '英文');

-- --------------------------------------------------------

--
-- 資料表結構 `member`
--

CREATE TABLE `member` (
  `id` int(5) UNSIGNED NOT NULL,
  `member_id` int(5) UNSIGNED DEFAULT NULL,
  `guild_id` int(5) UNSIGNED DEFAULT NULL,
  `guide_review` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `guide_review_star` int(5) UNSIGNED DEFAULT NULL,
  `guide_review_number` int(5) UNSIGNED DEFAULT NULL,
  `guide_review_image` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `member_ avatar` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `member_name` varchar(5) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `member_evaluation` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `member_star` int(5) UNSIGNED DEFAULT NULL,
  `member_collect` int(5) DEFAULT NULL,
  `journey_review_content` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `journey_review_point` int(5) UNSIGNED DEFAULT NULL,
  `sur_name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` int(5) DEFAULT NULL,
  `nation` varchar(5) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `email` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `sex` tinyint(5) DEFAULT NULL,
  `order_time` date DEFAULT NULL,
  `order_status` tinyint(2) UNSIGNED DEFAULT NULL,
  `order_id` int(5) UNSIGNED DEFAULT NULL,
  `pay_status` tinyint(2) UNSIGNED DEFAULT NULL,
  `total_price` int(20) UNSIGNED DEFAULT NULL,
  `journey_id` int(5) UNSIGNED DEFAULT NULL,
  `total_people` int(5) UNSIGNED DEFAULT NULL,
  `journey_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `journey_information` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `info` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `member_order_review` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- 資料表結構 `order_detail`
--

CREATE TABLE `order_detail` (
  `id` int(6) UNSIGNED NOT NULL,
  `guide` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `journey_id` int(6) UNSIGNED NOT NULL,
  `name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `go_time` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` int(6) UNSIGNED NOT NULL,
  `price` int(6) UNSIGNED NOT NULL,
  `order_number` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `order_detail`
--

INSERT INTO `order_detail` (`id`, `guide`, `journey_id`, `name`, `img`, `go_time`, `amount`, `price`, `order_number`) VALUES
(1, '雅馨', 1, '九日漁獵生活', '靜浦-竹筏漫遊.jpg', '2021-09-25', 1, 5000, '84483420211004'),
(2, '瓦丹', 1, '半日漁獵生活體驗｜走進太陽的部落', '靜浦-竹筏漫遊.jpg', '2021-10-08', 1, 1000, '84483420211004'),
(3, '瓦丹', 2, '划竹筏·八卦網·射箭·追逐浪花蟹一日遊', '靜浦-追花逐浪花蟹.jpg', '2021-10-28', 1, 1280, '75350220211007'),
(4, '瓦丹', 1, '半日漁獵生活體驗｜走進太陽的部落', '靜浦-竹筏漫遊.jpg', '2021-10-04', 1, 1000, '75350220211007'),
(5, '瓦丹', 2, '划竹筏·八卦網·射箭·追逐浪花蟹一日遊', '靜浦-追花逐浪花蟹.jpg', '2021-10-28', 1, 1280, '17967320211007'),
(6, '瓦丹', 1, '半日漁獵生活體驗｜走進太陽的部落', '靜浦-竹筏漫遊.jpg', '2021-10-04', 1, 1000, '17967320211007'),
(7, '瓦丹', 2, '划竹筏·八卦網·射箭·追逐浪花蟹一日遊', '靜浦-追花逐浪花蟹.jpg', '2021-10-28', 1, 1280, '46747120211007'),
(8, '瓦丹', 1, '半日漁獵生活體驗｜走進太陽的部落', '靜浦-竹筏漫遊.jpg', '2021-10-04', 1, 1000, '46747120211007'),
(9, '瓦丹', 2, '划竹筏·八卦網·射箭·追逐浪花蟹一日遊', '靜浦-追花逐浪花蟹.jpg', '2021-10-28', 1, 1280, '24427520211007'),
(10, '瓦丹', 1, '半日漁獵生活體驗｜走進太陽的部落', '靜浦-竹筏漫遊.jpg', '2021-10-04', 1, 1000, '24427520211007'),
(11, '瓦丹', 2, '划竹筏·八卦網·射箭·追逐浪花蟹一日遊', '靜浦-追花逐浪花蟹.jpg', '2021-10-28', 1, 1280, '74270020211007'),
(12, '瓦丹', 1, '半日漁獵生活體驗｜走進太陽的部落', '靜浦-竹筏漫遊.jpg', '2021-10-04', 1, 1000, '74270020211007'),
(13, '瓦丹', 1, '半日漁獵生活體驗｜走進太陽的部落', '靜浦-竹筏漫遊.jpg', '2021-10-04', 1, 1000, '75817620211007');

-- --------------------------------------------------------

--
-- 資料表結構 `order_form`
--

CREATE TABLE `order_form` (
  `id` int(6) UNSIGNED NOT NULL,
  `member_email` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `sur_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nation` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `card_number` varchar(16) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `bill_status` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `order_status` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `order_time` date NOT NULL DEFAULT current_timestamp(),
  `order_number` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `order_form`
--

INSERT INTO `order_form` (`id`, `member_email`, `sur_name`, `first_name`, `phone`, `nation`, `address`, `email`, `card_number`, `bill_status`, `order_status`, `order_time`, `order_number`) VALUES
(1, 'test@gmail.com', '1', '123', '09222222', '台灣', '西屯路二段２８２巷１３號', 'yaya14chen@gmail.com', '1233444433332222', '電子發票', '已付款', '2021-10-04', '84483420211004'),
(2, 'test@gmail.com', '1', '123', '09222223', '台灣', '西屯路二段２８２巷１３號', 'tom@test.com', '1233444433332222', '電子發票', '已付款', '2021-10-06', '75817620211007');

-- --------------------------------------------------------

--
-- 資料表結構 `tribes`
--

CREATE TABLE `tribes` (
  `id` int(5) UNSIGNED NOT NULL,
  `tribe` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- 傾印資料表的資料 `tribes`
--

INSERT INTO `tribes` (`id`, `tribe`) VALUES
(1, '靜浦部落'),
(2, '新社部落'),
(3, '太巴塱部落'),
(4, '水璉部落'),
(5, '奇美部落'),
(6, '馬太鞍部落'),
(7, '撒固兒部落');

--
-- 已傾印資料表的索引
--

--
-- 資料表索引 `card_data`
--
ALTER TABLE `card_data`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `guild`
--
ALTER TABLE `guild`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `journey`
--
ALTER TABLE `journey`
  ADD PRIMARY KEY (`_id`);

--
-- 資料表索引 `lang`
--
ALTER TABLE `lang`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `order_form`
--
ALTER TABLE `order_form`
  ADD PRIMARY KEY (`id`);

--
-- 資料表索引 `tribes`
--
ALTER TABLE `tribes`
  ADD PRIMARY KEY (`id`);

--
-- 在傾印的資料表使用自動遞增(AUTO_INCREMENT)
--

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `card_data`
--
ALTER TABLE `card_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `guild`
--
ALTER TABLE `guild`
  MODIFY `id` int(3) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `journey`
--
ALTER TABLE `journey`
  MODIFY `_id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `lang`
--
ALTER TABLE `lang`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `member`
--
ALTER TABLE `member`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `order_form`
--
ALTER TABLE `order_form`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用資料表自動遞增(AUTO_INCREMENT) `tribes`
--
ALTER TABLE `tribes`
  MODIFY `id` int(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
