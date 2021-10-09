// 元件引入
import React, { useState } from 'react'
import PayPeople from './component/PayPeople'
import PayContent from './component/PayContent'
import ScrollToTop from 'react-scroll-to-top'
import PayData from './component/PayData'
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
// css引入
import '../../style/spacing.css'
import '../../style/button.css'
import '../../style/fons.css'
import '../../style/shoppingcart-payment.css'
import '../../style/shoopcart-process.css'
import 'react-credit-cards/es/styles-compiled.css'

function Pay(props) {
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

  //未登入顯示彈跳視窗
  const [show, setShow] = useState(true)
  const handleClose = () => setShow(false)

  if (!props.member) {
    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Body className="text-center text-title-size24 td-mt-50 td-mb-25">
            請先登入會員
          </Modal.Body>
          <Modal.Footer>
            <Link
              to="/Login"
              className="btn journey-reservation-button mx-auto"
            >
              前往登入會員
            </Link>
          </Modal.Footer>
        </Modal>
        )
      </>
    )
  }
  return (
    <>
      {/* 內容  */}
      <div className="container-lg td-content checkStyle">
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
          member={props.member}
        />
        <ScrollToTop smooth />
      </div>
    </>
  )
}

export default Pay
