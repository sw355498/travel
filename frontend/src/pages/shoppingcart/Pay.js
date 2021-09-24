// 元件引入
import PayPeople from './component/PayPeople'
import PayMember from './component/PayMember'
import PaymentProfile from './component/PaymentProfile'
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
    name: '',
    surName: '',
    nation: '',
    phone: '',
    address: '',
    email: '',
    paymentMethod: '',
    payNumber: '',
    payCardName: '',
    payExpiry: '',
    payCvc: '',
    bill: '',
  })

  // 每個欄位的錯誤訊息
  const [fieldErrors, setFieldErrors] = useState({
    name: '',
    surName: '',
    nation: '',
    phone: '',
    address: '',
    email: '',
  })
  // //付款方式
  // const [paymentMethod, setPaymentMethod] = useState('')
  // //信用卡卡號
  // const [payNumber, setPayNumber] = useState('')
  // //信用卡持卡人姓名
  // const [payCardName, setPayCardName] = useState('')
  // //信用卡到期日
  // const [payExpiry, setPayExpiry] = useState('')
  // //信用卡CVC確認碼
  // const [payCvc, setPayCvc] = useState('')
  // //發票處理方式
  // const [bill, setBill] = useState('')

  return (
    <>
      {/* 內容  */}
      <div class="container-lg td-content checkStyle">
        {/* 小人走路流程圖 */}
        <PayPeople />
        {/* <PayMember
          fields={fields}
          setFields={setFields}
          fieldErrors={fieldErrors}
          setFieldErrors={setFieldErrors}
        /> */}
        {/* 付款資訊 */}
        {/* <PaymentProfile
          setPaymentMethod={setPaymentMethod}
          setPayNumber={setPayNumber}
          setPayCardName={setPayCardName}
          setPayExpiry={setPayExpiry}
          setPayCvc={setPayCvc}
          bill={bill}
          setBill={setBill}
        /> */}
        {/* 訂單明細 */}
        <PayContent
          fields={fields}
          // paymentMethod={paymentMethod}
          // payNumber={payNumber}
          // payCardName={payCardName}
          // payExpiry={payExpiry}
          // payCvc={payCvc}
          // bill={bill}
        />
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
