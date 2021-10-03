// 元件引入
import React, { useState } from 'react'
import People from './component/People'
import CartList from './component/CartList'
import CartRecommend from './component/CartRecommend'
import ScrollToTop from 'react-scroll-to-top'
import { Modal, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

// css引入
import '../../style/spacing.css'
import '../../style/button.css'
import '../../style/shoppingcart-cart-list.css'
import '../../style/fons.css'
import '../../style/checkbox.css'

function ShoppingcartCartList(props) {
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
      <div className="container">
        {/* 小人走路流程圖 */}
        <People />

        {/* 購物車清單內容 */}
        <div className="td-mt-75 cartlist checkStyle">
          <CartList member={props.member} />
        </div>

        {/* 其它旅客還購買 */}
        <CartRecommend />
        <ScrollToTop smooth />
      </div>
    </>
  )
}

export default ShoppingcartCartList
