import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import Rating from '../../../component/Rating'
import API from '../../../api'

function JourneyItem(props) {
  const { product, selected, handleClick } = props

  const onClick = () => {
    API.toggleJourneyLike(product._id).then(handleClick)
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
    <div className="row filter-result td-mb-25">
      <div
        className="col-md-4 col-12 filter-result-imgarea d-flex align-content-between "
        key={product._id}
      >
        <img src={`/images/data/行程照片/${product.journey_img}`} alt="" />
      </div>
      <div className="col-md-5 flex-md-column journey-info mt-lg-4 mb-3">
        <div className="row ">
          <div className="col-md-12 order-1">
            <div className="d-flex justify-content-between mt-lg-2 mt-md-3 ">
              <div className="title text-left  ">{product.name}</div>
              <div className="tag m-md-2">
                <i className="fas fa-tags  flex-grow-1">{product.tribe}</i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 reviewStar">
          <div>
            <div className="row">
              <div className="col-9 col-md-12">
                <div className="d-flex align-items-center">
                  <label className="ml-5">
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
              <div className="col-3">
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
          </div>
        </div>
        <div className="col-12 reviewStar-content">
          <div className="content ">{product.description}</div>
        </div>
      </div>
      <div className="col-md-3 journey-price  mt-md-4">
        <div className="row">
          <div className="col-7 col-md-12 d-md-flex justify-content-md-center">
            <p className="mt-lg-3">{PriceFormated}</p>
          </div>
          <div className="col-5 col-md-12 d-flex flex-md-column align-items-md-center justify-content-end">
            <Link
              className="td-btn-medium-w "
              to={`journey_Info/${product._id}`}
            >
              <span className="text-center">詳細</span>
            </Link>
            <i
              className={clsx(
                'far fa-heart mb-1 fa-heart-hide',
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
  )
}

export default JourneyItem
