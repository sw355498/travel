// css引入
import '../../../style/spacing.css'
import '../../../style/button.css'
import '../../../style/checkbox.css'
import '../../../style/shoppingcart-payment.css'
import '../../../style/fons.css'
// 圖片引入
import total from '../../../img/total.png'
import ashcan from '../../../img/delete.png'
import collect from '../../../img/collect.png'
import tribe from '../../../img/奇美部落大圖1.png'

function PayContent() {
  return (
    <>
      <div class="accordion td-mt-75 td-mb-25" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button
              class="accordion-button menu-bg"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="true"
              aria-controls="collapseFour"
            >
              <p class="menu-title text-title-size24 my-auto">訂單明細</p>
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse show"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body menu-bg">
              <div class="td-mt-25 shoppingcart-bg">
                {/* 第一筆行程 */}
                <div class="row align-items-center text-center">
                  {/* 行程圖片 */}
                  <div class="col-12 col-lg-5 d-flex justify-content-center">
                    <img
                      class="td-my-25 shoppingcart-img"
                      src={tribe}
                      alt="奇美部落大圖1"
                    />
                  </div>
                  {/* 行程內容 */}
                  <div class="col-12 col-lg-4 text-title-size20">
                    <a class="shoppingcart-title" href="">
                      阿美族 Tatadok 泛舟體驗
                    </a>
                    <div class="td-mt-25">2021-06-26</div>
                    <div class="td-mt-25">人數：1人</div>
                  </div>
                  {/* 收藏.刪除及價錢 */}
                  <div class="col-12 col-lg-3 mb-3 mb-lg-0 d-flex d-lg-block justify-content-evenly align-items-center">
                    <div>
                      <a class="td-mt-25 btn">
                        <img class="collect" src={collect} alt="" />
                      </a>
                    </div>
                    <div>
                      <a class="td-mt-25 btn">
                        <img src={ashcan} alt="" />
                      </a>
                    </div>
                    <div class="text-title-size24 shoppingcart-price td-mt-25">
                      <div>TWD 1,799</div>
                    </div>
                  </div>
                </div>
                {/* 分隔線 */}
                <div class="col-12 shoppingcart-solid"></div>
                {/* 第二筆行程 */}
                <div class="row align-items-center text-center">
                  {/* 行程圖片 */}
                  <div class="col-12 col-lg-5 d-flex justify-content-center">
                    <img
                      class="td-my-25 shoppingcart-img"
                      src={tribe}
                      alt="奇美部落大圖1"
                    />
                  </div>
                  {/* 行程內容 */}
                  <div class="col-12 col-lg-4 text-title-size20">
                    <a class="shoppingcart-title" href="">
                      阿美族 Tatadok 泛舟體驗
                    </a>
                    <div class="td-mt-25">2021-06-26</div>
                    <div class="td-mt-25">人數：1人</div>
                  </div>
                  {/* 收藏.刪除及價錢 */}
                  <div class="col-12 col-lg-3 mb-3 mb-lg-0 d-flex d-lg-block justify-content-evenly align-items-center">
                    <div>
                      <a class="td-mt-25 btn">
                        <img class="collect" src={collect} alt="" />
                      </a>
                    </div>
                    <div>
                      <a class="td-mt-25 btn">
                        <img src={ashcan} alt="" />
                      </a>
                    </div>
                    <div class="text-title-size24 shoppingcart-price td-mt-25">
                      <div>TWD 1,799</div>
                    </div>
                  </div>
                </div>
                {/* 分隔線 */}
                <div class="col-12 shoppingcart-solid"></div>
                {/* 總顯示區塊 */}
                <div class="row align-items-center text-center td-py-25 ">
                  <div class="col-12 col-lg-9 td-my-25 my-lg-0 d-flex justify-content-center justify-content-lg-end align-items-lg-center">
                    <div class="text-title-size20 me-1">2件商品合計</div>
                    <div>
                      <img src={total} alt="total" />
                    </div>
                    <div class="text-title-size24 shoppingcart-price">
                      TWD 3,598
                    </div>
                  </div>
                  <div class="col-12 col-lg-3">
                    <a
                      class="btn td-btn-large-gopay text-title-size24 pt-3 pb-3"
                      href="/page/shoppingcart/shoppingcart-payment.html"
                    >
                      付款
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PayContent
