import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import InputTextField from './InputTextField'
import SelectNation from './SelectNation'
import SelectBill from './SelectBill'
import Cards from 'react-credit-cards'
import moment from 'moment'
import axios from 'axios'
function PayData(props) {
  // spinner用的狀態
  const [isLoading, setIsLoading] = useState(false)
  // Cards輸入資料時的聚焦
  const [focus, setFocus] = useState('')
  // LocalStorage
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
        let first_name = props.fields.firstName
        let phone = props.fields.phone
        let nation = props.fields.nation
        let address = props.fields.address
        let email = props.fields.email
        let go_time = moment(mycartDisplay[i].go_time).format('YYYY-MM-DD')
        let total_amount = mycartDisplay[i].amount
        let total_price = mycartDisplay[i].amount * mycartDisplay[i].price
        let card_number = props.fields.number
        let bill_status = props.fields.bill
        await axios.post(`http://localhost:3002/pay`, {
          guide_id,
          journey_id,
          sur_name,
          first_name,
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
      <div class="accordion td-mt-75 td-mb-25" id="accordionExample">
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
                      name="firstName"
                      label="姓名"
                      state={props.fields.firstName}
                      setState={handleFieldChange}
                      setFocus={setFocus}
                      error={props.fieldErrors.firstName}
                      maxLength="50"
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
                      setFocus={setFocus}
                      error={props.fieldErrors.surName}
                      maxLength="50"
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
                      setFocus={setFocus}
                      error={props.fieldErrors.phone}
                      minLength="10"
                      maxLength="10"
                      required
                    />
                  </div>

                  {/* 選擇國家區塊 */}
                  <div class="col-12 col-lg-6">
                    <SelectNation
                      name="nation"
                      label="國家/地區"
                      state={props.fields.nation}
                      setState={handleFieldChange}
                      setFocus={setFocus}
                      error={props.fieldErrors.nation}
                      required
                    ></SelectNation>
                  </div>

                  {/* 聯絡地址 */}
                  <div class="col-12">
                    <InputTextField
                      name="address"
                      label="聯絡地址"
                      state={props.fields.address}
                      setState={handleFieldChange}
                      setFocus={setFocus}
                      error={props.fieldErrors.address}
                      maxLength="50"
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
                      setFocus={setFocus}
                      error={props.fieldErrors.email}
                      maxLength="50"
                      required
                    />
                  </div>
                </div>

                {/* 信用卡付款資料填寫 */}
                <div class="td-mt-50 row" id="PaymentForm">
                  <span class="text-title-size20">信用卡付款</span>
                  <Cards
                    number={props.fields.number}
                    name={props.fields.name}
                    expiry={props.fields.expiry}
                    cvc={props.fields.cvc}
                    focused={focus}
                  />

                  <div class="col-12">
                    <InputTextField
                      name="number"
                      type="tel"
                      label="卡號"
                      state={props.fields.number}
                      setState={handleFieldChange}
                      error={props.fieldErrors.number}
                      minLength="16"
                      maxLength="16"
                      setFocus={setFocus}
                      required
                    />
                  </div>
                  <div class="col-12">
                    <InputTextField
                      name="name"
                      type="text"
                      label="持卡人姓名"
                      state={props.fields.name}
                      setState={handleFieldChange}
                      error={props.fieldErrors.name}
                      maxLength="50"
                      setFocus={setFocus}
                      required
                    />
                  </div>
                  <div class="col-12">
                    <InputTextField
                      name="expiry"
                      type="tel"
                      label="有效日期"
                      state={props.fields.expiry}
                      setState={handleFieldChange}
                      error={props.fieldErrors.expiry}
                      minLength="4"
                      maxLength="4"
                      setFocus={setFocus}
                      required
                    />
                  </div>
                  <div class="col-12">
                    <InputTextField
                      name="cvc"
                      type="tel"
                      label="cvc"
                      state={props.fields.cvc}
                      setState={handleFieldChange}
                      error={props.fieldErrors.cvc}
                      minLength="3"
                      maxLength="3"
                      setFocus={setFocus}
                      required
                    />
                  </div>
                </div>
                {/* 發票資料 */}
                <div class="col-12 td-mt-50">
                  <SelectBill
                    name="bill"
                    label="發票資料"
                    state={props.fields.bill}
                    setState={handleFieldChange}
                    error={props.fieldErrors.bill}
                    required
                  ></SelectBill>
                </div>
                <div class="td-mt-50 d-flex justify-content-center justify-content-lg-end">
                  <button
                    type="submit"
                    className="btn td-btn-large-gopay text-title-size24 pt-3 pb-3"
                  >
                    付款
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
