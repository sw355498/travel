import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import InputTextField from './InputTextField'
import SelectField from './SelectField'
import Cards from 'react-credit-cards'
import moment from 'moment'
import axios from 'axios'
function PayData(props) {
  // spinner用的狀態
  const [isLoading, setIsLoading] = useState(false)

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
  //LocalStorage
  const [mycart, setMycart] = useState([])
  const [mycartDisplay, setMycartDisplay] = useState([])

  // 自動1秒後關閉指示的spinner
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => setIsLoading(false), 1000)
    }
  }, [isLoading])

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

  // 處理每個欄位的變動，只能用於文字類的欄位
  const handleFieldChange = (e) => {
    // 更新輸入欄位的變動
    // 用新輸入的屬性值和原物件作合併
    const updatedFields = {
      ...props.fields,
      [e.target.name]: e.target.value,
    }

    props.setFields(updatedFields)
  }

  // 整個表單有任何變動(ex.某個欄位有輸入)
  // 使用者正在改有錯誤的欄位，清除某個欄位的錯誤訊息
  const handleFormChange = (e) => {
    console.log('更新欄位: ', e.target.name)

    // 該欄位的錯誤訊息清空
    const updatedFieldErrors = {
      ...props.fieldErrors,
      [e.target.name]: '',
    }

    props.setFieldErrors(updatedFieldErrors)
  }

  // 表單有不合法的檢查出現時
  const handleFormInvalid = (e) => {
    // 擋住錯誤訊息預設呈現方式(跳出的訊息泡泡)
    e.preventDefault()

    const updatedFieldErrors = {
      ...props.fieldErrors,
      [e.target.name]: e.target.validationMessage,
    }

    props.setFieldErrors(updatedFieldErrors)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formdata = new FormData(e.target)
    for (let pair of formdata.entries()) {
      console.log(pair)
    }
    // 送到伺服器
    for (let i = 0; i < mycartDisplay.length; i++) {
      try {
        let guide_id = mycartDisplay[i].guild
        let journey_id = mycartDisplay[i].name
        let sur_name = props.fields.surName
        let name = props.fields.name
        let phone = props.fields.phone
        let nation = props.fields.nation
        let address = props.fields.address
        let email = props.fields.email
        let go_time = moment(mycartDisplay[i].go_time).format('YYYY-MM-DD')
        let total_amount = mycartDisplay[i].amount
        let total_price = mycartDisplay[i].amount * mycartDisplay[i].price
        let card_number = number
        let bill_status = props.bill
        const response = await axios.post(`http://localhost:3002/pay`, {
          guide_id,
          journey_id,
          sur_name,
          name,
          phone,
          nation,
          address,
          email,
          go_time,
          total_amount,
          total_price,
          card_number,
          bill_status,
        })
      } catch (e) {
        console.error(e)
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
      <div class="accordion td-mt-75" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button menu-bg"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <p class="menu-title text-title-size24 my-auto">訂購人資訊</p>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body menu-bg">
              <form
                onChange={handleFormChange}
                onInvalid={handleFormInvalid}
                onSubmit={handleSubmit}
              >
                <div class="row">
                  {/* <姓名區塊 */}
                  <div class="col-12 col-lg-6">
                    <InputTextField
                      name="name"
                      label="姓名"
                      state={props.fields.name}
                      setState={handleFieldChange}
                      error={props.fieldErrors.name}
                      required
                    />
                  </div>

                  {/* 姓氏區塊 */}
                  <div class="col-12 col-lg-6">
                    <InputTextField
                      name="surName"
                      label="姓氏"
                      state={props.fields.surName}
                      setState={handleFieldChange}
                      error={props.fieldErrors.surName}
                      required
                    />
                  </div>

                  {/* 連絡電話區塊 */}
                  <div class="col-12 col-lg-6">
                    <InputTextField
                      name="phone"
                      type="tel"
                      label="連絡電話"
                      state={props.fields.phone}
                      setState={handleFieldChange}
                      error={props.fieldErrors.phone}
                      minLength="10"
                      maxLength="10"
                      required
                    />
                  </div>
                  {/* 選擇國家區塊 */}
                  <div class="col-12 col-lg-6">
                    <SelectField
                      name="nation"
                      label="國家/地區"
                      state={props.fields.nation}
                      setState={handleFieldChange}
                      error={props.fieldErrors.nation}
                      required
                    >
                      <option selected disabled value="">
                        請選擇國家
                      </option>
                      <option>台灣</option>
                      <option>日本</option>
                      <option>韓國</option>
                      <option>其它</option>
                    </SelectField>
                  </div>

                  {/* 聯絡地址 */}
                  <div class="col-12">
                    <InputTextField
                      name="address"
                      label="聯絡地址"
                      state={props.fields.address}
                      setState={handleFieldChange}
                      error={props.fieldErrors.address}
                      required
                    />
                  </div>

                  {/* 聯絡信箱 */}
                  <div class="col-12">
                    <InputTextField
                      name="email"
                      type="email"
                      label="電子郵件"
                      state={props.fields.email}
                      setState={handleFieldChange}
                      error={props.fieldErrors.email}
                      required
                    />
                  </div>
                </div>

                {/* 信用卡付款資料填寫 */}
                <div class="td-mt-50 row" id="PaymentForm">
                  <span class="text-title-size20">信用卡付款</span>
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
                    type="submit"
                    className="btn td-btn-large-gopay text-title-size24 pt-3 pb-3"
                  >
                    確認
                  </button>
                  <button
                    to="/journey"
                    className="btn td-btn-large-gopay text-title-size24 pt-3 pb-3 ms-4"
                    onClick={() => {
                      props.history.push('/Shoppingcart')
                    }}
                  >
                    <span>回上一步</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  return <>{isLoading ? loading : display}</>
}

export default withRouter(PayData)
