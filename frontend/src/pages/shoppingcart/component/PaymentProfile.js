//模組引入
import React, { useState, useEffect } from 'react'
import Cards from 'react-credit-cards'

function PaymentProfile(props) {
  //信用卡卡號
  const [number, setNumber] = useState('')
  //信用卡持卡人姓名
  const [name, setName] = useState('')
  //信用卡到期日
  const [expiry, setExpiry] = useState('')
  //信用卡CVC確認碼
  const [cvc, setCvc] = useState('')
  //輸入資料時的聚焦
  const [focus, setFocus] = useState('')

  const [mycart, setMycart] = useState([])
  const [mycartDisplay, setMycartDisplay] = useState([])
  // 付款區塊切換
  const [cardDisplay, setCardDisplay] = useState('pay-switch')
  const [transferDisplay, setTransferDisplay] = useState('pay-switch')
  /*信用卡付款*/
  function creditCardPayment() {
    setCardDisplay('')
    setTransferDisplay('pay-switch')
  }
  /*轉帳代繳*/
  function transfer() {
    setCardDisplay('pay-switch')
    setTransferDisplay('')
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
      <div class="accordion td-mt-75" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTree">
            <button
              class="accordion-button menu-bg"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTree"
              aria-expanded="true"
              aria-controls="collapseTree"
            >
              <p class="menu-title text-title-size24 my-auto">付款資訊</p>
            </button>
          </h2>
          <div
            id="collapseTree"
            class="accordion-collapse collapse show"
            aria-labelledby="headingTree"
            data-bs-parent="#accordionExample"
          >
            {/* 付款方式 */}
            <div class="accordion-body menu-bg">
              <from class="col-12 td-mt-50">
                <label for="validationDefault04" class="form-label">
                  <span class="text-title-size20">付款方式</span>
                  <span class="text-danger td-ms-15 text-title-size20">*</span>
                </label>
                <div class="">
                  <input
                    class="td-ms-50"
                    type="radio"
                    name="pay"
                    id="creditCard"
                    onChange={() => {
                      creditCardPayment()
                      props.setPaymentMethod('信用卡付款')
                    }}
                  />
                  <span class="text-title-size20">信用卡付款</span>
                  <input
                    class="td-ms-50"
                    type="radio"
                    name="pay"
                    id="transfer"
                    onChange={() => {
                      transfer()
                      props.setPaymentMethod('轉帳代繳')
                    }}
                  />
                  <span class="text-title-size20">轉帳代繳</span>
                </div>
                {/* 信用卡付款資料填寫 */}
                <div class={`td-mt-25 row ${cardDisplay}`} id="PaymentForm">
                  <Cards
                    number={number}
                    name={name}
                    expiry={expiry}
                    cvc={cvc}
                    focused={focus}
                  />

                  <div class="col-12 my-3">
                    <input
                      class="form-control"
                      type="tel"
                      name="number"
                      placeholder="卡號"
                      value={number}
                      maxlength="16"
                      minLength="16"
                      onChange={(e) => {
                        props.setPayNumber(e.target.value)
                        setNumber(e.target.value)
                      }}
                      onFocus={(e) => setFocus(e.target.name)}
                    />
                  </div>
                  <div class="col-12 mb-3">
                    <input
                      class="form-control"
                      type="text"
                      name="name"
                      placeholder="持卡人姓名"
                      value={name}
                      onChange={(e) => {
                        props.setPayCardName(e.target.value)
                        setName(e.target.value)
                      }}
                      onFocus={(e) => setFocus(e.target.name)}
                    />
                  </div>
                  <div class="col-12 mb-3">
                    <input
                      class="form-control"
                      type="text"
                      name="expiry"
                      placeholder="MM/YY 有效日期"
                      value={expiry}
                      maxlength="4"
                      onChange={(e) => {
                        props.setPayExpiry(e.target.value)
                        setExpiry(e.target.value)
                      }}
                      onFocus={(e) => setFocus(e.target.name)}
                    />
                  </div>
                  <div class="col-12 mb-3">
                    <input
                      class="form-control"
                      type="tel"
                      name="cvc"
                      placeholder="CVC"
                      value={cvc}
                      maxlength="3"
                      onChange={(e) => {
                        props.setPayCvc(e.target.value)
                        setCvc(e.target.value)
                      }}
                      onFocus={(e) => setFocus(e.target.name)}
                    />
                  </div>
                </div>
                {/* 轉帳代繳付款資料填寫 */}
                <div
                  class={`td-mt-25 ${transferDisplay}`}
                  id="transferMaterial"
                >
                  <div class="td-mt-25">
                    <div class="col-12 td-mt-25">
                      <select
                        class="form-select"
                        id="validationDefault04"
                        required
                      >
                        <option selected disabled value="">
                          銀行代碼
                        </option>
                        <option>004 台灣銀行</option>
                        <option>005 土地銀行</option>
                        <option>006 合作銀行</option>
                        <option>007 第一商業銀行</option>
                        <option>008 華南商業銀行</option>
                        <option>012 台北富邦銀行</option>
                        <option>013 國泰世華銀行銀行</option>
                        <option>021 花旗(台灣)銀行</option>
                        <option>053 台中商業銀行</option>
                        <option>102 華泰商業銀行</option>
                        <option>700 中華郵政</option>
                        <option>803 聯邦商業銀行</option>
                        <option>808 玉山銀行</option>
                        <option>822 中國信託商業銀行</option>
                      </select>
                    </div>
                    <div class="col-12 td-mt-25">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="請輸入轉帳帳號"
                        aria-label="轉帳帳號"
                      />
                    </div>
                    <div class="col-12 td-mt-25">
                      <input
                        type="text"
                        class="form-control"
                        placeholder={sum(mycartDisplay)}
                        aria-label="轉帳金額"
                        disabled
                      />
                    </div>
                    <p class="fs-6 mt-2 text-danger">*請於24小時內完成轉帳</p>
                  </div>
                </div>
                {/* 發票資料 */}
                <div class="col-12 td-mt-50">
                  <label for="validationDefault04" class="form-label">
                    <span class="text-title-size20">發票資料</span>
                    <span class="text-danger td-ms-15 text-title-size20">
                      *
                    </span>
                  </label>
                  <select
                    value={props.bill}
                    class="form-select"
                    id="validationDefault04"
                    onChange={(e) => {
                      props.setBill(e.target.value)
                    }}
                    required
                  >
                    <option selected disabled value="">
                      請選擇發票處理方式
                    </option>
                    <option>電子發票</option>
                    <option>雲端發票捐贈</option>
                    <option>個人紙本發票</option>
                  </select>
                </div>
                <div class="td-mt-50 d-flex justify-content-center justify-content-lg-end">
                  <button
                    className="btn td-btn-large-gopay text-title-size24 pt-3 pb-3"
                    // onClick={handleSubmit}
                  >
                    確認
                  </button>
                </div>
              </from>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentProfile
