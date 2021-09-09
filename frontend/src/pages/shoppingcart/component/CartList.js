//模組,元件引入
import React, { useState } from 'react'
import { withRouter, Link } from 'react-router-dom'
import QuantityButton from './QuantityButton'

// css引入
import '../../../style/spacing.css'
import '../../../style/button.css'
import '../../../style/checkbox.css'
import '../../../style/shoppingcart-cart-list.css'
import '../../../style/fons.css'

// 圖片引入
import triangle from '../../../img/三角.png'
import total from '../../../img/total.png'
import ashcan from '../../../img/delete.png'
import collect from '../../../img/collect.png'
import tribe from '../../../img/奇美部落大圖1.png'

function CartList(props) {
  const [people, setPeople] = useState(1)

  const PeopleQuantity = (value) => {
    setPeople(people + value)
  }

  const [price, setPrice] = useState(1700)
  return (
    <>
      <div className="text-title-size24 d-none d-lg-block fw-bold">
        <span>花島｜購物車</span>
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
            <div className="td-mt-25">帶團導遊：巴隆</div>
            <div className="td-mt-25">
              人數：
              <QuantityButton PeopleQuantity={PeopleQuantity} value={-1}/>
              {people}
              <QuantityButton PeopleQuantity={PeopleQuantity} value={1}/>
              人
            </div>
          </div>
          {/* 收藏.刪除及價錢 */}
          <div className="col-12 col-lg-3 mb-3 mb-lg-0 d-flex d-lg-block justify-content-evenly align-items-center ">
            <div>
              <a className="td-mt-25 btn">
                <img className="collect" src={collect} alt="" />
              </a>
            </div>
            <div>
              <a className="td-mt-25 btn">
                <img src={ashcan} alt="" />
              </a>
            </div>
            <div className="text-title-size24 shoppingcart-price td-mt-25">
              <div>TWD {price * people}</div>
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
            <div className="td-mt-25">帶團導遊：巴隆</div>
            <div className="td-mt-25">參團人數：1人</div>
          </div>
          {/* 收藏.刪除及價錢 */}
          <div className="col-12 col-lg-3 mb-3 mb-lg-0 d-flex d-lg-block justify-content-evenly align-items-center">
            <div>
              <a className="td-mt-25 btn text-center">
                <img className="collect" src={collect} alt="" />
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
              <img src="/images/三角.png" alt="" />
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
            <button
              className="btn td-btn-large-gopay text-title-size24 pt-3 pb-3"
              onClick={() => {
                props.history.push('/Pay')
              }}
            >
              前往結帳
            </button>
            {/* <Link
              className="btn td-btn-large-gopay text-title-size24 pt-3 pb-3"
              href="/Shoppingcart/Pay"
            >
              前往結帳
            </Link> */}
          </div>
        </div>
      </div>
      {/* 繼續購物連結 */}
      <div className="d-flex justify-content-end td-mt-25">
        <Link to="/journey" className="text-title-size24 shoppingcart-continue">
          <span>繼續購物 ＞</span>
        </Link>
      </div>
    </>
  )
}

export default withRouter(CartList)
