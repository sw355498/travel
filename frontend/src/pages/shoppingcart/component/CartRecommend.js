// css引入
import '../../../style/spacing.css'
import '../../../style/button.css'
import '../../../style/checkbox.css'
import '../../../style/shoppingcart-cart-list.css'
import '../../../style/fons.css'

// 圖片引入
import matanki from '../../../img/馬太鞍部落03.jpg'
import jingpu from '../../../img/靜浦06.jpg'
import sibilian from '../../../img/水璉部落3.jpg'

function CartTitle() {
  return (
    <>
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
    </>
  )
}

export default CartTitle
