import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import DatePicker from './date_picker/DatePicker'
import GuideCard from './GuideCard/GuideCard'
import API from '../../../api'

function JourneyReservationArea(props) {
  //目前DatePicker狀態
  const [dateState, setDateState] = useState(new Date())
  //載入導遊資料
  // const [JourneyGuideInfo, setJourneyGuideInfo] = useState(GuideData)
  const [JourneyGuideInfo, setJourneyGuideInfo] = useState(null)
  const { findResult } = props

  useEffect(() => {
    API.fetchJourneyInfoGuide().then(setJourneyGuideInfo)
  }, [])

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
  const spinner = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )
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
        {JourneyGuideInfo ? (
          <GuideCard
            findResult={findResult}
            JourneyGuideInfo={JourneyGuideInfo}
            updateCartToLocalStorage={updateCartToLocalStorage}
            dateState={dateState}
          />
        ) : (
          <div>{spinner}</div>
        )}
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
