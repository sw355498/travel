//模組,元件引入
import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'

// css引入
import '../../../style/spacing.css'
import '../../../style/button.css'
import '../../../style/checkbox.css'
import '../../../style/shoppingcart-cart-list.css'
import '../../../style/fons.css'

function CartList(props) {
  const [mycart, setMycart] = useState([])
  const [mycartDisplay, setMycartDisplay] = useState([])
  //切換頁面載入的指示圖示
  const [dataLoading, setDataLoading] = useState(false)

  function getCartFromLocalStorage() {
    // 開啟載入的指示圖示
    setDataLoading(true)

    const newCart = localStorage.getItem('cart') || '[]'

    // console.log(JSON.parse(newCart))

    setMycart(JSON.parse(newCart))
  }

  useEffect(() => {
    getCartFromLocalStorage()
  }, [])

  useEffect(() => {
    // 每次mycart資料有改變，1秒後關閉載入指示
    setTimeout(() => setDataLoading(false), 1000)

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

  // 更新購物車中的商品數量
  const updateCartToLocalStorage = (item, isAdded = true) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    // 確認 localstorage 有沒有這個id
    const index = currentCart.findIndex((v) => v.id === item.id)

    // found: index! == -1
    if (index > -1) {
      isAdded ? currentCart[index].amount++ : currentCart[index].amount--
    }

    localStorage.setItem('cart', JSON.stringify(currentCart))
    // 設定資料
    setMycart(currentCart)
  }

  // 計算總價用的函式
  const sum = (items) => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].amount * items[i].price
    }
    return total
  }

  // 刪除購物車中的商品
  const deleteCartToLocalStorage = (item) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []
    // 確認 localstorage 有沒有這個id
    // const index = currentCart.findIndex((v) => v.id === item.id)
    currentCart.splice(currentCart.indexOf(item,1))
    localStorage.setItem('cart', JSON.stringify(currentCart))
    // 設定資料
    setMycart(currentCart)
  }

  const loading = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const display = (
    <>
      <div className="text-title-size24 d-none d-lg-block fw-bold">
        <span>花島｜購物車</span>
      </div>
      <div className="td-mt-25 shoppingcart-bg">
        <div className="text-title-size28 shoppingcart-title text-center td-pt-25 d-lg-none d-block">
          購物車
        </div>
        {/* 購物車清單內容 */}
        {mycartDisplay.map((item, index) => {
          return (
            <div className="row align-items-center text-center" key={item.id}>
              {/* checkbox */}
              <div className="col-3 col-lg-1">
                <input className="my-auto" type="checkbox" />
              </div>
              {/* 行程圖片 */}
              <div className="col-9 col-lg-4 d-flex justify-content-start justify-content-lg-center">
                <img
                  className="td-my-25 shoppingcart-img"
                  src={`/images/data/行程照片/${item.img}`}
                  alt={item.img}
                />
              </div>
              {/* 行程內容 */}
              <div className="col-12 col-lg-4 text-title-size20 td-my-25">
                <a className="shoppingcart-title" href="/">
                  {item.name}
                </a>
                <div className="td-mt-25">{item.go_time}</div>
                <div className="td-mt-25">帶團導遊：{item.guild}</div>
                <div className="td-mt-25">
                  人數：
                  <button
                    className="td-btn-people"
                    onClick={() => {
                      if (item.amount === 1) return
                      updateCartToLocalStorage(item, false)
                    }}
                  >
                    -
                  </button>
                  {item.amount}
                  <button
                    className="td-btn-people"
                    onClick={() => updateCartToLocalStorage(item, true)}
                  >
                    +
                  </button>
                  人
                </div>
              </div>
              {/* 收藏.刪除及價錢 */}
              <div className="col-12 col-lg-3 mb-3 mb-lg-0 d-flex d-lg-block justify-content-evenly align-items-center ">
                <div>
                  <button className="td-mt-25 btn">
                    <img
                      className="collect"
                      src="/images/collect.png"
                      alt="收藏"
                    />
                  </button>
                </div>
                <div>
                  <button
                    className="td-mt-25 btn"
                    onClick={() => deleteCartToLocalStorage(item)}
                  >
                    <img src="/images/delete.png" alt="刪除" />
                  </button>
                </div>
                <div className="text-title-size24 shoppingcart-price td-mt-25">
                  <div>TWD {parseFloat(item.price) * item.amount}</div>
                </div>
              </div>
              <div className="shoppingcart-solid"></div>
            </div>
          )
        })}
        {/* 總顯示區塊 */}
        <div className="row align-items-center text-center td-py-25">
          <div className="col-3 col-lg-1">
            <input className="my-auto" type="checkbox" />
          </div>
          <div className="col-9 col-lg-4 d-flex justify-content-start justify-content-lg-center">
            <button className="btn text-title-size20">全選 (0)</button>
            <button className="btn text-title-size20">
              刪除已選項目
              <img src="/images/三角.png" alt="刪除" />
            </button>
          </div>
          <div className="col-12 col-lg-4 td-my-25 my-lg-0 d-flex justify-content-center justify-content-lg-end align-items-lg-center">
            <div className="text-title-size20 me-1">
              {mycartDisplay.length}件商品合計
            </div>
            <div>
              <img src="/images/total.png" alt="total" />
            </div>
            <div className="text-title-size24 shoppingcart-price">
              TWD {sum(mycartDisplay)}
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
  // 以資料載入的指示狀態來切換要出現的畫面
  return dataLoading ? loading : display
}

export default withRouter(CartList)
