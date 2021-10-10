//模組,元件引入
import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'

function PayContent(props) {
  const [mycart, setMycart] = useState([])
  const [mycartDisplay, setMycartDisplay] = useState([])

  //轉換成貨幣形式
  const digitsRE = /(\d{3})(?=\d)/g

  function currency(value, currency, decimals) {
    value = parseFloat(value)
    if (!isFinite(value) || (!value && value !== 0)) return ''
    currency = currency != null ? currency : 'TWD '
    decimals = decimals != null ? decimals : 0
    var stringified = Math.abs(value).toFixed(decimals)
    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified
    var i = _int.length % 3
    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : ''
    var _float = decimals ? stringified.slice(-1 - decimals) : ''
    var sign = value < 0 ? '-' : ''
    return (
      sign + currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float
    )
  }

  function getCartFromLocalStorage() {
    const newCart = localStorage.getItem('cart') || '[]'
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
      <div className="accordion td-mt-75" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button menu-bg"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="true"
              aria-controls="collapseFour"
            >
              <p className="menu-title text-title-size24 my-auto">訂單明細</p>
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse show"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body menu-bg">
              <div className="td-mt-25 shoppingcart-bg">
                {/* 購物車清單內容 */}
                {mycartDisplay.map((item, index) => {
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
                        <div className="td-mt-25">
                          {moment(item.go_time).format('YYYY-MM-DD')}
                        </div>
                        <div className="td-mt-25">帶團導遊：{item.guild}</div>
                        <div className="td-mt-25">
                          人數：
                          <span className="fw-bold text-title-size24">
                            {' '}
                            {item.amount}
                          </span>{' '}
                          人
                        </div>
                      </div>
                      {/* 價錢 */}
                      <div className="col-12 col-lg-3 mb-3 mb-lg-0 d-flex d-lg-block justify-content-evenly align-items-center ">
                        <div className="text-title-size24 shoppingcart-price td-mt-25">
                          <div>
                            {currency(parseFloat(item.price) * item.amount)}
                          </div>
                        </div>
                      </div>
                      <div className="shoppingcart-solid"></div>
                    </div>
                  )
                })}
                {/* 總顯示區塊 */}
                <div className="row align-items-center text-center td-py-25 ">
                  <div className="col-12 td-my-25 my-lg-0 d-flex justify-content-center align-items-lg-center">
                    <div className="text-title-size20 me-1">
                      <span className="fw-bold text-title-size24">
                        {mycartDisplay.length}
                      </span>
                      件商品合計
                    </div>
                    <div>
                      <img src="/images/total.png" alt="total" />
                    </div>
                    <div className="text-title-size24 shoppingcart-price">
                      {currency(sum(mycartDisplay))}
                    </div>
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
