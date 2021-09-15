//模組,元件引入
import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import moment from 'moment'
import { Modal, Button } from 'react-bootstrap'

// css引入
import '../../../style/spacing.css'
import '../../../style/button.css'
// import '../../../style/checkbox.css'
import '../../../style/shoppingcart-payment.css'
import '../../../style/fons.css'

function PayContent(props) {
  const [mycart, setMycart] = useState([])
  const [mycartDisplay, setMycartDisplay] = useState([])

  function getCartFromLocalStorage() {
    const newCart = localStorage.getItem('cart') || '[]'

    console.log(JSON.parse(newCart))

    setMycart(JSON.parse(newCart))
  }

  useEffect(() => {
    getCartFromLocalStorage()
  }, [])

  useEffect(() => {
    // mycartDisplay運算
    let newMycartDisplay = []

    //尋找mycartDisplay
    for (let i = 0; i < mycart.length; i++) {
      //尋找mycartDisplay中有沒有此mycart[i].id
      //有找到會返回陣列成員的索引值
      //沒找到會返回-1
      const index = newMycartDisplay.findIndex(
        (value) => value.id === mycart[i].id
      )
      //有的話就數量+1
      if (index !== -1) {
        //每次只有加1個數量
        //newMycartDisplay[index].amount++
        //假設是加數量的
        newMycartDisplay[index].amount += mycart[i].amount
      } else {
        //沒有的話就把項目加入，數量為1
        const newItem = { ...mycart[i] }
        newMycartDisplay = [...newMycartDisplay, newItem]
      }
    }

    // console.log(newMycartDisplay)
    setMycartDisplay(newMycartDisplay)
  }, [mycart])

  // 計算總價用的函式
  const sum = (items) => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    return total
  }

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
                {/* 購物車清單內容 */}
                {mycartDisplay.map((item, index) => {
                  console.log('顯示', mycartDisplay)
                  return (
                    <div
                      className="row align-items-center text-center"
                      key={item.id}
                    >
                      {/* 行程圖片 */}
                      <div className="col-12 col-lg-5 d-flex justify-content-center">
                        <img
                          className="td-my-25 shoppingcart-img"
                          src={`/images/data/行程照片/${item.img}`}
                          alt={item.img}
                        />
                      </div>
                      {/* 行程內容 */}
                      <div className="col-12 col-lg-4 text-title-size20">
                        <a className="shoppingcart-title" href="/">
                          {item.name}
                        </a>
                        <div className="td-mt-25">{moment(item.go_time).format('YYYY-MM-DD')}</div>
                        <div className="td-mt-25">帶團導遊：{item.guild}</div>
                        <div className="td-mt-25">人數： {item.amount} 人</div>
                      </div>
                      {/* 價錢 */}
                      <div className="col-12 col-lg-3 mb-3 mb-lg-0 d-flex d-lg-block justify-content-evenly align-items-center ">
                        <div className="text-title-size24 shoppingcart-price td-mt-25">
                          <div>TWD {parseFloat(item.price) * item.amount}</div>
                        </div>
                      </div>
                      <div className="shoppingcart-solid"></div>
                    </div>
                  )
                })}
                {/* 總顯示區塊 */}
                <div class="row align-items-center text-center td-py-25 ">
                  <div class="col-12 col-lg-6 td-my-25 my-lg-0 d-flex justify-content-center justify-content-lg-end align-items-lg-center">
                    <div class="text-title-size20 me-1">
                      {mycartDisplay.length}件商品合計
                    </div>
                    <div>
                      <img src="/images/total.png" alt="total" />
                    </div>
                    <div class="text-title-size24 shoppingcart-price">
                      TWD {sum(mycartDisplay)}
                    </div>
                  </div>
                  <div class="col-12 col-lg-3">
                    <button
                      className="btn td-btn-large-gopay text-title-size24 pt-3 pb-3"
                      href="/page/shoppingcart/shoppingcart-payment.html"
                    >
                      付款
                    </button>
                  </div>
                  <div class="col-12 col-lg-3">
                    <button
                      to="/journey"
                      className="btn td-btn-large-gopay text-title-size24 pt-3 pb-3"
                      onClick={() => {
                        props.history.push('/Shoppingcart')
                      }}
                    >
                      <span>回上一步</span>
                    </button>
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

export default withRouter(PayContent)
