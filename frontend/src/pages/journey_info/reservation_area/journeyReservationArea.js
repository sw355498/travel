import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import DatePicker from './date_picker/DatePicker'
import Counter from './Counter/Counter'
function JourneyReservationArea(props) {
  //目前DatePicker狀態
  const [dateState, setDateState] = useState(new Date())
  
  //設定counter狀態
  const [count, setCount] = useState(0)
  // 目前購物車狀態
  const [mycart, setMycart] = useState([])

  //加入購物車彈跳視窗顯示狀態
  const [show, setShow] = useState(false)

  //加入購物車彈跳視窗商品資訊
  const [journeyName, setJourneyName] = useState('')

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // 將新加入的行程放入至LocalStorage
  const updateCartToLocalStorage = (item) => {
    // 解析目前購物車的資料
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    // 比對當前加入的行程id是否已存在
    const index = currentCart.findIndex((v) => v.id === item.id)

    // found: index! == -1
    if (index > -1) {
      //currentCart[index].amount++
      setJourneyName('這個商品已經加過了')
      handleShow()
      return
    } else {
      currentCart.push(item)
    }

    //將當前的行程資訊加入至LocalStorage
    localStorage.setItem('cart', JSON.stringify(currentCart))

    // 設定資料
    setMycart(currentCart)
    setJourneyName('行程：' + item.name + '已成功加入購物車')
    handleShow()
  }

  const messageModal = (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>加入購物車訊息</Modal.Title>
      </Modal.Header>
      <Modal.Body>{journeyName} </Modal.Body>
      <Modal.Footer>
        <Button
          className="btn journey-reservation-button mx-auto"
          variant="secondary"
          onClick={() => {
            props.history.push('/journey')
          }}
        >
          繼續購物
        </Button>
        <Button
          className="btn journey-reservation-button mx-auto"
          variant="primary"
          onClick={() => {
            props.history.push('/Shoppingcart')
          }}
        >
          前往購物車結帳
        </Button>
      </Modal.Footer>
    </Modal>
  )

  const spinner = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )
  const display = (
    <div className="journey-reservationarea-container td-mt-75 ">
      <div className="necessary"></div>
      <div className="container">
        <div className="journey-info-name ">
          <p>預約日期</p>
        </div>
        <div className="row td-mt-25 d-flex justify-content-center">
          <DatePicker
            dateState={dateState}
            setDateState={setDateState}
          ></DatePicker>
        </div>
        <div className="journey-info-name td-mt-75">
          <p>選擇導遊</p>
        </div>
        <div className="row journey-selectguide d-flex align-content-between">
          <div className="col-4  text-center">
            <div className="card">
              <p className="smalltag">奇美部落</p>
              <img
                src="/images/data/奇美部落/導遊/導遊1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">雅馨</h5>
                <div>
                  {' '}
                  <i className="fas fa-star small-star "></i>
                  <i className="fas fa-star small-star "></i>
                  <i className="fas fa-star small-star "></i>
                  <i className="fas fa-star small-star "></i>
                  <i className="fas fa-star small-star "></i>{' '}
                </div>
                <h5 className="journey-selectguide-title ">奇美部落一日遊</h5>
                <p className="card-text">
                  {' '}
                  讓奇美部落的勇士帶著你順著溪水一路說故事、撒網、抓蝦、野炊、玩耍、盡情融入阿美族文化與大自然嬉戲。讓你放鬆心情慢慢體會古老部落的文化智慧，以及大自然的驚奇。
                </p>
                <button href="#" className="btn td-btn-large-o td-mt-25">
                  選擇
                </button>
              </div>
            </div>
          </div>
          <div className="col-4 text-center d-flex justify-content-center">
            <div className="card">
              <p className="smalltag">奇美部落</p>
              <img
                src="/images/data/奇美部落/導遊/導遊1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">雅馨</h5>
                <div>
                  {' '}
                  <i className="fas fa-star small-star "></i>
                  <i className="fas fa-star small-star "></i>
                  <i className="fas fa-star small-star "></i>
                  <i className="fas fa-star small-star "></i>
                  <i className="fas fa-star small-star "></i>{' '}
                </div>
                <h5 className="journey-selectguide-title ">奇美部落一日遊</h5>
                <p className="card-text">
                  {' '}
                  讓奇美部落的勇士帶著你順著溪水一路說故事、撒網、抓蝦、野炊、玩耍、盡情融入阿美族文化與大自然嬉戲。讓你放鬆心情慢慢體會古老部落的文化智慧，以及大自然的驚奇。
                </p>
                <button href="#" className="btn td-btn-large-o td-mt-25">
                  選擇
                </button>
              </div>
            </div>
          </div>
          <div className="col-4 text-center  d-flex justify-content-end">
            <div className="card">
              <p className="smalltag">奇美部落</p>
              <img
                src="/images/data/奇美部落/導遊/導遊1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title mb-2">雅馨</h5>
                <div>
                  {' '}
                  <i className="fas fa-star small-star "></i>
                  <i className="fas fa-star small-star "></i>
                  <i className="fas fa-star small-star "></i>
                  <i className="fas fa-star small-star "></i>
                  <i className="fas fa-star small-star "></i>{' '}
                </div>
                <h5 className="journey-selectguide-title ">奇美部落一日遊</h5>
                <p className="card-text">
                  {' '}
                  讓奇美部落的勇士帶著你順著溪水一路說故事、撒網、抓蝦、野炊、玩耍、盡情融入阿美族文化與大自然嬉戲。讓你放鬆心情慢慢體會古老部落的文化智慧，以及大自然的驚奇。
                </p>
                <button href="#" className="btn td-btn-large-o td-mt-25">
                  選擇
                </button>
              </div>
            </div>
          </div>
        </div>
        <Counter count={count} setCount={setCount} />
        <div className="d-flex justify-content-center mt--2">
          <button
            className="btn journey-reservation-button"
            onClick={() => {
              updateCartToLocalStorage({
                id: props.findResult._id,
                name: props.findResult.introname,
                amount: count,
                img: props.findResult.img1,
                go_time: dateState,
                guild: '雅馨',
                price: props.findResult.price,
              })
            }}
          >
            加入購物車
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <>
      {messageModal}
      {display}
    </>
  )
}

export default withRouter(JourneyReservationArea)
