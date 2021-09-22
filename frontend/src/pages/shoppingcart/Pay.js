// 元件引入
import PayPeople from './component/PayPeople'
import PayMember from './component/PayMember'
import PaymentProfile from './component/PaymentProfile'
import PayContent from './component/PayContent'
import ScrollToTop from 'react-scroll-to-top'
import React, { useState, useEffect } from 'react'

// css引入
import '../../style/spacing.css'
import '../../style/button.css'
import '../../style/fons.css'
import '../../style/shoppingcart-payment.css'
import '../../style/shoopcart-process.css'
import 'react-credit-cards/es/styles-compiled.css'

function Pay(props) {
  // 姓氏
  const [surName, setSurName] = useState('')
  // 名字
  const [name, setName] = useState('')
  // 聯絡電話
  const [phone, setPhone] = useState('')
  //國家
  const [nation, setNation] = useState('')
  // 地址
  const [address, setAddress] = useState('')
  // 信箱
  const [email, setEmail] = useState('')

  //信用卡卡號
  const [payNumber, setPayNumber] = useState('')
  //信用卡持卡人姓名
  const [payCardName, setPayCardName] = useState('')
  //信用卡到期日
  const [payExpiry, setPayExpiry] = useState('')
  //信用卡CVC確認碼
  const [payCvc, setPayCvc] = useState('')
  //發票處理方式
  const [bill, setBill] = useState('')
  return (
    <>
      {/* 內容  */}
      <div class="container-lg td-content checkStyle">
        {/* 小人走路流程圖 */}
        <PayPeople />

        {/* 訂購人資訊 */}
        <PayMember
          surName={surName}
          setSurName={setSurName}
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          nation={nation}
          setNation={setNation}
          address={address}
          setAddress={setAddress}
          email={email}
          setEmail={setEmail}
        />

        {/* 付款資訊 */}
        <PaymentProfile
          setPayNumber={setPayNumber}
          setPayCardName={setPayCardName}
          setPayExpiry={setPayExpiry}
          setPayCvc={setPayCvc}
          bill={bill}
          setBill={setBill}
        />

        {/* 訂單明細 */}
        <PayContent
          surName={surName}
          name={name}
          phone={phone}
          nation={nation}
          address={address}
          email={email}
          payNumber={payNumber}
          payCardName={payCardName}
          payExpiry={payExpiry}
          payCvc={payCvc}
          bill={bill}
        />
        <ScrollToTop smooth />
      </div>
    </>
  )
}

export default Pay
