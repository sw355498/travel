//模組引入
import React, { useState, useEffect } from 'react'
import Cards from 'react-credit-cards'

// css引入
import '../../../style/spacing.css'
import '../../../style/button.css'
// import '../../../style/checkbox.css'
import '../../../style/shoppingcart-payment.css'
import '../../../style/fons.css'
import 'react-credit-cards/es/styles-compiled.css'

function PaymentProfile() {
  //信用卡卡號
  const [number, setNumber] = useState('')
  //信用卡持卡人姓名
  const [name, setName] = useState('')
  //信用卡到期日
  const [expiry, setExpiry] = useState('')
  //信用卡CVC確認碼
  const [cvc, setCvc] = useState('')
  const [focus, setFocus] = useState('')

  /*信用卡付款*/
  // let creditCard = document.getElementById('creditCard')
  // let creditCardMaterial = document.getElementById('creditCardMaterial')
  // creditCard.addEventListener('click', function () {
  //   creditCardMaterial.classList.remove('pay-switch')
  //   // transferMaterial.classList.add('pay-switch')
  // })
  /*轉帳代繳*/
  // let transfer = document.getElementById('transfer')
  // let transferMaterial = document.getElementById('transferMaterial')
  // transfer.addEventListener('click', function () {
  //   creditCardMaterial.classList.add('pay-switch')
  //   transferMaterial.classList.remove('pay-switch')
  // })

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
              <div class="col-12 col-lg-6 td-mt-50">
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
                    checked="true"
                  />
                  <span class="text-title-size20">信用卡付款</span>
                  <input
                    class="td-ms-50"
                    type="radio"
                    name="pay"
                    id="transfer"
                  />
                  <span class="text-title-size20">轉帳代繳</span>
                </div>
                {/* 信用卡付款資料填寫 */}
                <div class="td-mt-25 row" id="PaymentForm">
                  <Cards
                    number={number}
                    name={name}
                    expiry={expiry}
                    cvc={cvc}
                    focused={focus}
                  />
                  <form>
                    <div class="col-12 my-2">
                      <input
                      class="form-control"
                        type="tel"
                        name="number"
                        placeholder="卡號"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        onFocus={(e) => setFocus(e.target.name)}
                      />
                    </div>
                    <div class="col-12 mb-2">
                      <input
                      class="form-control"
                        type="text"
                        name="name"
                        placeholder="持卡人姓名"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={(e) => setFocus(e.target.name)}
                      />
                    </div>
                    <div class="col-12 mb-2">
                      <input
                      class="form-control"
                        type="text"
                        name="expiry"
                        placeholder="MM/YY 有效日期"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        onFocus={(e) => setFocus(e.target.name)}
                      />
                    </div>
                    <div class="col-12 mb-2">
                      <input
                      class="form-control"
                        type="tel"
                        name="cvc"
                        placeholder="CVC"
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value)}
                        onFocus={(e) => setFocus(e.target.name)}
                      />
                    </div>
                  </form>
                  {/* <div class="row">
                    <div class="col-12 mb-2">
                      <label>信用卡號:</label>
                    </div>
                    <div class="col-3 col-lg-2">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="4碼"
                        aria-label="信用卡1-4碼"
                      />
                    </div>
                    <div class="col-3 col-lg-2">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="4碼"
                        aria-label="信用卡5-8碼"
                      />
                    </div>
                    <div class="col-3 col-lg-2">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="4碼"
                        aria-label="信用卡9-12碼"
                      />
                    </div>
                    <div class="col-3 col-lg-2">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="4碼"
                        aria-label="信用卡13-16碼"
                      />
                    </div>
                  </div>
                  <div class="row td-mt-25">
                    <div class="col-12 mb-2">
                      <label>有效日期:</label>
                    </div>
                    <div class="col-6 col-lg-2">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="MM"
                        aria-label="有效日期/月"
                      />
                    </div>
                    <div class="col-6 col-lg-2">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="YY"
                        aria-label="有效日期/年"
                      />
                    </div>
                    <div class="col-12 mt-4 mb-2">
                      <label>背面檢驗碼:</label>
                    </div>
                    <div class="col-12 col-lg-2">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="3碼"
                        aria-label="檢驗碼"
                      />
                    </div>
                  </div> */}
                </div>
                {/* 轉帳代繳付款資料填寫 */}
                <div class="td-mt-25 pay-switch" id="transferMaterial">
                  <div class="row td-mt-25">
                    <div class="col-12 mb-2">
                      <label>轉帳帳號:</label>
                    </div>
                    <div class="col-12">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="MM"
                        aria-label="轉帳帳號"
                      />
                    </div>
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
                  <select class="form-select" id="validationDefault04" required>
                    <option selected disabled value="">
                      請選擇發票處理方式
                    </option>
                    <option>電子發票</option>
                    <option>雲端發票捐贈</option>
                    <option>個人紙本發票</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentProfile
