import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import Rating from '../../../component/Rating'
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios'
const serverURI = 'http://localhost:3001'

function JourneyItem(props) {
  //原本的code
  // const onClick = () => {
  //   API.toggleJourneyLike(product._id).then(handleClick)
  //   handleShow()
  // }
  const { product, selected, handleClick } = props

  //登入後才能收藏
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const messageModal = (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Title className="d-flex justify-content-center td-mt-25 td-mb-15 text-title-size40">
        <img className="td-logo-img" src="/images/logo.png" alt="logo" />
        <img
          className="td-logo-text"
          src="/images/花島（黑）.png"
          alt="花島（黑）"
        />
        {/* 歡迎來到花島! */}
      </Modal.Title>
      <Modal.Body className="text-center text-title-size38 td-mb-15">
        請先登入會員!
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="btn journey-reservation-button mx-auto"
          variant="secondary"
          onClick={handleClose}
        >
          關閉
        </Button>
      </Modal.Footer>
    </Modal>
  )
  //改寫
  const Like = async (id, e) => {
    try {
      await axios.put(
        `${serverURI}/api/journeys/${id}/like`,
        {},
        {
          withCredentials: true,
        }
      )
      console.log('收藏成功')
    } catch (e) {
      console.error(e.response.data.message)
      handleShow()
    }
  }
  const onClick = () => {
    Like(product._id).then(handleClick)
  }
  //轉化price to 貨幣型態
  const tranferPriceFormat = product.price
  const digitsRE = /(\d{3})(?=\d)/g

  function currency(value, currency, decimals) {
    value = parseFloat(value)
    if (!isFinite(value) || (!value && value !== 0)) return ''
    currency = currency != null ? currency : 'TWD'
    decimals = decimals != null ? decimals : 0
    var stringified = Math.abs(value).toFixed(decimals)
    var _int = decimals ? stringified.slice(0, -1 - decimals) : stringified
    var i = _int.length % 3
    var head = i > 0 ? _int.slice(0, i) + (_int.length > 3 ? ',' : '') : ''
    var _float = decimals ? stringified.slice(-1 - decimals) : ''
    var sign = value < 0 ? '-' : ''
    return (
      sign + currency + head + _int.slice(i).replace(digitsRE, '$1,') + _float
    )
  }
  const PriceFormated = currency(tranferPriceFormat)

  return (
    <>
      <div className="row filter-result td-mb-25">
        <div
          className="col-md-4 col-12 filter-result-imgarea d-flex align-content-between "
          key={product._id}
        >
          <img src={`/images/data/行程照片/${product.journey_img}`} alt="" />
        </div>
        <div className="col-md-5 flex-md-column  mt-md-4 mb-3">
          <div className="col-md-12 d-flex flex-column justify-content-md-between journey-infocss">
            <div className="col-md-12 order-0">
              <div className="d-flex justify-content-between mt-3 mt-md-0">
                <div className="title text-left  ">{product.name}</div>
                <div className="tag m-md-2">
                  <i className="fas fa-tags  flex-grow-1">{product.tribe}</i>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="col-9 col-md-12">
                <div className="d-flex align-items-center mt-md-3 mt-5 mt-md-0">
                  <label className="ml-5 ">
                    <Rating
                      rating={product.rating}
                      amountRating={product.amountRating}
                    ></Rating>
                    {product.amountRating && (
                      <span className="td-ms-15">
                        {product.amountRating + '則評論'}
                      </span>
                    )}
                  </label>
                </div>
              </div>
              <div className="col-3 text-center mt-5 mt-md-0">
                <i
                  className={clsx(
                    'far fa-heart mb-1 fa-heart-show',
                    selected && 'fw-bold'
                  )}
                  style={{ cursor: 'pointer' }}
                  onClick={onClick}
                ></i>
              </div>
            </div>
            <div className="content mt-5 mt-md-0">{product.description}</div>
          </div>
        </div>
        <div className="col-md-3 journey-price mt-md-4 mb-3 mt-2">
          <div className="row ">
            <div className=" col-12 d-flex flex-md-column align-items-center justify-content-between journey-price-content ">
              <p className="mt-lg-3">{PriceFormated}</p>

              <Link
                className="td-btn-medium-w"
                to={`journey_Info/${product._id}`}
              >
                <span className="text-center">詳細</span>
              </Link>
              <i
                className={clsx(
                  'far fa-heart mb-1 fa-heart-hide ',
                  selected && 'fw-bold'
                )}
                style={{ cursor: 'pointer' }}
                onClick={onClick}
              ></i>
            </div>
          </div>
          <div className="d-flex flex-md-column align-items-center justify-content-around align-items-center"></div>
        </div>
      </div>

      {messageModal}
    </>
  )
}

export default JourneyItem
