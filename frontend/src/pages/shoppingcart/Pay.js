// 元件引入
import PayPeople from './component/PayPeople'
import PayContent from './component/PayContent'
import ScrollToTop from 'react-scroll-to-top'
import React, { useState } from 'react'
import PayData from './component/PayData'
// css引入
import '../../style/spacing.css'
import '../../style/button.css'
import '../../style/fons.css'
import '../../style/shoppingcart-payment.css'
import '../../style/shoopcart-process.css'
import 'react-credit-cards/es/styles-compiled.css'

function Pay(props) {
  // const [step, setStep] = useState(1)

  // 狀態為物件，處理多個欄位
  const [fields, setFields] = useState({
    firstName: '',
    surName: '',
    nation: '',
    phone: '',
    address: '',
    email: '',
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    bill: '',
  })

  // 每個欄位的錯誤訊息
  const [fieldErrors, setFieldErrors] = useState({
    firstName: '',
    surName: '',
    nation: '',
    phone: '',
    address: '',
    email: '',
    number: '',
    name: '',
    expiry: '',
    cvc: '',
    bill: '',
  })
  return (
    <>
      {/* 內容  */}
      <div class="container-lg td-content checkStyle">
        {/* 小人走路流程圖 */}
        <PayPeople />
        {/* 訂單明細 */}
        <PayContent fields={fields} />
        {/* 聯絡及付款資訊 */}
        <PayData
          fields={fields}
          setFields={setFields}
          fieldErrors={fieldErrors}
          setFieldErrors={setFieldErrors}
        />
        <ScrollToTop smooth />
      </div>
    </>
  )
}

export default Pay
