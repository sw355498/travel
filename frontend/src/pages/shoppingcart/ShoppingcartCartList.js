// 元件引入
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import People from './component/People'

// css引入
import '../../style/spacing.css'
import '../../style/button.css'
import '../../style/checkbox.css'
import '../../style/shoppingcart-cart-list.css'
import '../../style/fons.css'

// 圖片引入
import triangle from '../../img/三角.png'
import total from '../../img/total.png'
import ashcan from '../../img/delete.png'
import tribe from '../../img/奇美部落大圖1.png'
import matanki from '../../img/馬太鞍部落03.jpg'
import jingpu from '../../img/靜浦06.jpg'
import sibilian from '../../img/水璉部落3.jpg'

function ShoppingcartCartList() {
  return (
    <>
      <Header />
      {/* 內容 */}
      <div className="container td-content">
        {/* 小人走路流程圖 */}
        <People />

        {/* 購物車清單內容 */}
        <div className="td-mt-75">
          <div className="text-title-size24 d-none d-lg-block">
            <span>購物車</span>
            <span className="text-black-50">- 填寫資料與付款 - 訂購完成</span>
          </div>
          <div className="td-mt-25 shoppingcart-bg">
            <div className="text-title-size28 shoppingcart-title text-center td-pt-25 d-lg-none d-block">
              購物車
            </div>
            {/* 第一筆行程 */}
            <div className="row align-items-center text-center">
              {/* checkbox */}
              <div className="col-3 col-lg-1">
                <input className="my-auto" type="checkbox" />
              </div>
              {/* 行程圖片 */}
              <div className="col-9 col-lg-4 d-flex justify-content-start justify-content-lg-center">
                <img
                  className="td-my-25 shoppingcart-img"
                  src={tribe}
                  alt="奇美部落大圖1"
                />
              </div>
              {/* 行程內容 */}
              <div className="col-12 col-lg-4 text-title-size20">
                <a className="shoppingcart-title" href="/">
                  阿美族 Tatadok 泛舟體驗
                </a>
                <div className="td-mt-25">2021-06-26</div>
                <div className="td-mt-25">人數：1人</div>
              </div>
              {/* 收藏.刪除及價錢 */}
              <div className="col-12 col-lg-3 mb-3 mb-lg-0 d-flex d-lg-block justify-content-evenly align-items-center">
                <div>
                  <a className="td-mt-25 btn">
                    <img className="collect" src="/img/collect.png" alt="" />
                  </a>
                </div>
                <div>
                  <a className="td-mt-25 btn">
                    <img src={ashcan} alt="" />
                  </a>
                </div>
                <div className="text-title-size24 shoppingcart-price td-mt-25">
                  <div>TWD 1,799</div>
                </div>
              </div>
            </div>
            {/* 分隔線 */}
            <div className="col-12 shoppingcart-solid"></div>
            {/* 第二筆行程 */}
            <div className="row align-items-center text-center">
              {/* heckbox */}
              <div className="col-3 col-lg-1">
                <input className="my-auto" type="checkbox" />
              </div>
              {/* 行程圖片 */}
              <div className="col-9 col-lg-4 d-flex justify-content-start justify-content-lg-center">
                <img
                  className="td-my-25 shoppingcart-img"
                  src={tribe}
                  alt="奇美部落大圖1"
                />
              </div>
              {/* 行程內容 */}
              <div className="col-12 col-lg-4 text-title-size20">
                <a className="shoppingcart-title" href="">
                  阿美族 Tatadok 泛舟體驗
                </a>
                <div className="td-mt-25">2021-06-26</div>
                <div className="td-mt-25">人數：1人</div>
              </div>
              {/* 收藏.刪除及價錢 */}
              <div className="col-12 col-lg-3 mb-3 mb-lg-0 d-flex d-lg-block justify-content-evenly align-items-center">
                <div>
                  <a className="td-mt-25 btn">
                    <img className="collect" src="/img/collect.png" alt="" />
                  </a>
                </div>
                <div>
                  <a className="td-mt-25 btn">
                    <img src={ashcan} alt="" />
                  </a>
                </div>
                <div className="text-title-size24 shoppingcart-price td-mt-25">
                  <div>TWD 1,799</div>
                </div>
              </div>
            </div>
            {/* 分隔線 */}
            <div className="col-12 shoppingcart-solid"></div>
            {/* 總顯示區塊 */}
            <div className="row align-items-center text-center td-py-25 ">
              <div className="col-3 col-lg-1">
                <input className="my-auto" type="checkbox" />
              </div>
              <div className="col-9 col-lg-4 d-flex justify-content-start justify-content-lg-center">
                <button className="btn text-title-size20">全選 (0)</button>
                <button className="btn text-title-size20">
                  刪除已選項目
                  <img src={triangle} alt="" />
                </button>
              </div>
              <div className="col-12 col-lg-4 td-my-25 my-lg-0 d-flex justify-content-center justify-content-lg-end align-items-lg-center">
                <div className="text-title-size20 me-1">2件商品合計</div>
                <div>
                  <img src={total} alt="total" />
                </div>
                <div className="text-title-size24 shoppingcart-price">
                  TWD 3,598
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <a
                  className="btn td-btn-large-gopay text-title-size24 pt-3 pb-3"
                  href="/page/shoppingcart/shoppingcart-payment.html"
                >
                  前往結帳
                </a>
              </div>
            </div>
          </div>
          {/* 繼續購物連結 */}
          <div className="d-flex justify-content-end td-mt-25">
            <a
              className="text-title-size24 shoppingcart-continue"
              href="/page/jounery/journey.html"
            >
              繼續購物 ＞
            </a>
          </div>
        </div>
        {/* 其旅客還購買web版 */}
        <div className="td-mt-75 d-none d-lg-block">
          <div className="text-title-size28">其它旅客還購買</div>
          <div className="shoppingcart-bg">
            <div className="d-flex justify-content-around td-my-25">
              {/* 第一項推薦 */}
              <div className="card td-my-25 recommend-card">
                <img
                  className="recommend-img"
                  src={matanki}
                  alt="馬太鞍部落03"
                  title="馬太鞍部落03"
                />
                <div className="card-body">
                  <h5 className="card-title">馬太鞍部落</h5>
                  <p
                    className="card-text recommend-text"
                    title="馬太鞍是一個阿美族（邦查）部落的稱呼，位在花蓮縣光復鄉馬錫山山腳下，早期是一群阿美族人生活在馬太鞍溪與烏卡蓋溪（現今大興溪）形成的一塊沖積扇地形，後來因鹽水港製糖廠（現今花蓮糖廠）的設立，在原來靠北的土地上廣植蔗糖原料－甘蔗，而使得當地的阿美族人不得不往南遷移。"
                  >
                    馬太鞍是一個阿美族（邦查）部落的稱呼，位在花蓮縣光復鄉馬錫山山腳下，早期是一群阿美族人生活在馬太鞍溪與烏卡蓋溪（現今大興溪）形成的一塊沖積扇地形，後來因鹽水港製糖廠（現今花蓮糖廠）的設立，在原來靠北的土地上廣植蔗糖原料－甘蔗，而使得當地的阿美族人不得不往南遷移。
                  </p>
                  <a href="#" className="btn td-btn-medium-o">
                    查看
                  </a>
                </div>
              </div>
              {/* 第二項推薦 */}
              <div className="card td-my-25 recommend-card">
                <img
                  className="recommend-img"
                  src={jingpu}
                  alt="靜浦06"
                  title="靜浦06"
                />
                <div className="card-body">
                  <h5 className="card-title">靜浦部落</h5>
                  <p
                    className="card-text recommend-text"
                    title="靜浦部落，一個洋溢熱血與熱情的太陽部落，跟著靜浦部落達人，體驗超精彩的漁獵生活吧！划上膠筏欣賞秀姑巒溪出海口豐富生態景致，學習智慧古法捕捉浪花蟹，還可體驗傳統拉弓射箭趣，簡單的半日時光，深度體驗靜浦部落生活樂！"
                  >
                    靜浦部落，一個洋溢熱血與熱情的太陽部落，跟著靜浦部落達人，體驗超精彩的漁獵生活吧！划上膠筏欣賞秀姑巒溪出海口豐富生態景致，學習智慧古法捕捉浪花蟹，還可體驗傳統拉弓射箭趣，簡單的半日時光，深度體驗靜浦部落生活樂！
                  </p>
                  <a href="#" className="btn td-btn-medium-o">
                    查看
                  </a>
                </div>
              </div>
              {/* 第三項推薦 */}
              <div className="card td-my-25 recommend-card">
                <img
                  className="recommend-img"
                  src={sibilian}
                  alt="水璉部落3"
                  title="水璉部落3"
                />
                <div className="card-body">
                  <h5 className="card-title">水璉部落</h5>
                  <p
                    className="card-text recommend-text"
                    title="阿美族語中的水璉部落，寫作Ciwidian知維地岸，是「此地多蛭」的意思。聽起來，以為水璉是個荒蕪之地，然而，這裡卻是和平閒適的小盆地，在山海的包圍下，從牧牛平原到高深峽谷，從溪流沿岸到動人沙灘，都展現出水璉之美，在靜謐中，帶有無限生命力。"
                  >
                    阿美族語中的水璉部落，寫作Ciwidian知維地岸，是「此地多蛭」的意思。聽起來，以為水璉是個荒蕪之地，然而，這裡卻是和平閒適的小盆地，在山海的包圍下，從牧牛平原到高深峽谷，從溪流沿岸到動人沙灘，都展現出水璉之美，在靜謐中，帶有無限生命力。
                  </p>
                  <a href="#" className="btn td-btn-medium-o">
                    查看
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 其旅客還購買rwd版 */}
        <div className="shoppingcart-bg td-mt-75 td-mb-25  d-block d-lg-none">
          <div className="text-title-size28 shoppingcart-title text-center td-pt-25 d-lg-none d-block">
            其它旅客還購買
          </div>
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {/* 第一項推薦 */}
              <div className="carousel-item active ">
                <div className="card td-my-25 recommend-card container p-0">
                  <img
                    className="recommend-img"
                    src={matanki}
                    alt="馬太鞍部落03"
                    title="馬太鞍部落03"
                  />
                  <div className="card-body">
                    <h5 className="card-title">馬太鞍部落</h5>
                    <p
                      className="card-text recommend-text"
                      title="馬太鞍是一個阿美族（邦查）部落的稱呼，位在花蓮縣光復鄉馬錫山山腳下，早期是一群阿美族人生活在馬太鞍溪與烏卡蓋溪（現今大興溪）形成的一塊沖積扇地形，後來因鹽水港製糖廠（現今花蓮糖廠）的設立，在原來靠北的土地上廣植蔗糖原料－甘蔗，而使得當地的阿美族人不得不往南遷移。"
                    >
                      馬太鞍是一個阿美族（邦查）部落的稱呼，位在花蓮縣光復鄉馬錫山山腳下，早期是一群阿美族人生活在馬太鞍溪與烏卡蓋溪（現今大興溪）形成的一塊沖積扇地形，後來因鹽水港製糖廠（現今花蓮糖廠）的設立，在原來靠北的土地上廣植蔗糖原料－甘蔗，而使得當地的阿美族人不得不往南遷移。
                    </p>
                    <a href="#" className="btn td-btn-medium-o">
                      查看
                    </a>
                  </div>
                </div>
              </div>
              {/* 第二項推薦 */}
              <div className="carousel-item">
                <div className="card td-my-25 recommend-card container p-0">
                  <img
                    className="recommend-img"
                    src={jingpu}
                    alt="靜浦06"
                    title="靜浦06"
                  />
                  <div className="card-body">
                    <h5 className="card-title">靜浦部落</h5>
                    <p
                      className="card-text recommend-text"
                      title="靜浦部落，一個洋溢熱血與熱情的太陽部落，跟著靜浦部落達人，體驗超精彩的漁獵生活吧！划上膠筏欣賞秀姑巒溪出海口豐富生態景致，學習智慧古法捕捉浪花蟹，還可體驗傳統拉弓射箭趣，簡單的半日時光，深度體驗靜浦部落生活樂！"
                    >
                      靜浦部落，一個洋溢熱血與熱情的太陽部落，跟著靜浦部落達人，體驗超精彩的漁獵生活吧！划上膠筏欣賞秀姑巒溪出海口豐富生態景致，學習智慧古法捕捉浪花蟹，還可體驗傳統拉弓射箭趣，簡單的半日時光，深度體驗靜浦部落生活樂！
                    </p>
                    <a href="#" className="btn td-btn-medium-o">
                      查看
                    </a>
                  </div>
                </div>
              </div>
              {/* 第三項推薦 */}
              <div className="carousel-item">
                <div className="card td-my-25 recommend-card container p-0">
                  <img
                    className="recommend-img"
                    src={sibilian}
                    alt="水璉部落3"
                    title="水璉部落3"
                  />
                  <div className="card-body">
                    <h5 className="card-title">水璉部落</h5>
                    <p
                      className="card-text recommend-text"
                      title="阿美族語中的水璉部落，寫作Ciwidian知維地岸，是「此地多蛭」的意思。聽起來，以為水璉是個荒蕪之地，然而，這裡卻是和平閒適的小盆地，在山海的包圍下，從牧牛平原到高深峽谷，從溪流沿岸到動人沙灘，都展現出水璉之美，在靜謐中，帶有無限生命力。"
                    >
                      阿美族語中的水璉部落，寫作Ciwidian知維地岸，是「此地多蛭」的意思。聽起來，以為水璉是個荒蕪之地，然而，這裡卻是和平閒適的小盆地，在山海的包圍下，從牧牛平原到高深峽谷，從溪流沿岸到動人沙灘，都展現出水璉之美，在靜謐中，帶有無限生命力。
                    </p>
                    <a href="#" className="btn td-btn-medium-o">
                      查看
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bg-dark"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bg-dark"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default ShoppingcartCartList
