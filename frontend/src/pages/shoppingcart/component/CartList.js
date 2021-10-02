//模組,元件引入
import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import moment from 'moment'

function CartList(props) {
  const [mycart, setMycart] = useState([])
  const [mycartDisplay, setMycartDisplay] = useState([])
  //切換頁面載入的指示圖示
  const [dataLoading, setDataLoading] = useState(false)

  const [show, setShow] = useState('d-none')

  function getCartFromLocalStorage() {
    // 開啟載入的指示圖示
    setDataLoading(true)
    const newCart = localStorage.getItem('cart') || '[]'
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

    //將當前選擇的行程從localStorage移除
    const index = currentCart.findIndex((v) => v.id === item.id)
    currentCart.splice(currentCart.indexOf(currentCart[index]), 1)
    localStorage.setItem('cart', JSON.stringify(currentCart))
    // 設定資料
    setMycart(currentCart)
  }

  // checkbox全選設定：全部
  function checkAll() {
    let ckeckOne = document.getElementsByName('ckeckOne')
    let ckeckAll = document.getElementById('all')
    for (let i = 0; i < ckeckOne.length; i++) {
      if (ckeckAll.checked) {
        ckeckOne[i].checked = true
      } else {
        ckeckOne[i].checked = false
      }
    }
  }

  // checkbox全選設定：單一
  function checkOne(item) {
    let ckeckOne = document.getElementsByName('ckeckOne')
    let flag = true
    for (let i = 0; i < ckeckOne.length; i++) {
      if (!ckeckOne[i].checked) {
        document.getElementById('all').checked = false //將all的按鈕顯示去掉
        flag = false
        break
      }
      if (flag) {
        document.getElementById('all').checked = true
      }
    }
  }

  // 刪除checkbox已勾選項目
  function deleteCheck(item) {
    let ckeckOne = document.getElementsByName('ckeckOne')
    for (let i = 0; i < ckeckOne.length; i++) {
      if (ckeckOne[i].checked) {
        deleteCartToLocalStorage(item[i])
      }
    }
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
              <div
                className="col-3 col-lg-1"
                onClick={() => {
                  checkOne(item)
                }}
              >
                <input
                  className="my-auto checkbox-size"
                  type="checkbox"
                  name="ckeckOne"
                />
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
                <Link
                  to={`journey_Info/${item.id}`}
                  className="shoppingcart-title"
                  href="/"
                >
                  {item.name}
                </Link>
                <div className="td-mt-25">
                  {moment(item.go_time).format('YYYY-MM-DD')}
                </div>
                <div className="td-mt-25">帶團導遊：{item.guild}</div>
                <div className="td-mt-25 d-flex justify-content-center align-items-center">
                  <button
                    className="td-ms-15 td-btn-medium-blueborder"
                    onClick={() => {
                      if (item.amount === 1) return
                      updateCartToLocalStorage(item, false)
                    }}
                  >
                    <i className="fas fa-minus"></i>
                  </button>
                  <p className="td-ms-15 text-nowrap">參加人數 {item.amount}</p>

                  <button
                    className="td-ms-15 td-btn-medium-blueborder"
                    onClick={() => updateCartToLocalStorage(item, true)}
                  >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>
              </div>
              {/* 收藏.刪除及價錢 */}
              <div className="col-12 col-lg-3 mb-3 mb-lg-0 d-flex d-lg-block justify-content-evenly align-items-center ">
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
        <div
          className={`row align-items-center text-center td-py-25 ${
            mycartDisplay.length === 0 ? 'd-none' : 'd-flex'
          }`}
        >
          <div className="col-3 col-lg-1">
            <input
              className="my-auto checkbox-size"
              type="checkbox"
              id="all"
              onClick={() => {
                checkAll()
              }}
            />
          </div>
          <div className="col-9 col-lg-3 d-flex justify-content-start justify-content-lg-center">
            <button
              className="btn td-btn-large-delete text-title-size20"
              onClick={() => {
                deleteCheck(mycartDisplay)
              }}
            >
              刪除已選項目
            </button>
          </div>
          <div className="col-12 col-lg-5 td-my-25 my-lg-0 d-flex justify-content-center justify-content-lg-end align-items-lg-center">
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
              下一步
            </button>
          </div>
        </div>
        <div
          className={`row align-items-center text-center td-py-25 ${
            mycartDisplay.length === 0 ? 'd-block' : 'd-none'
          }`}
        >
          <div className="col-12 td-my-25 d-flex justify-content-center">
            購物車內無任何商品
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
