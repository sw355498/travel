import React, { useState, useEffect, useCallback } from 'react'
import ScrollToTop from 'react-scroll-to-top'
import LazyLoad from 'react-lazyload'
import Rating from '../../component/Rating'
import Like from './Like'
import JourneyReservationArea from './reservation_area/journeyReservationArea'
import JourneyCoustomerReview from './coustomer_review/journeyCoustomerReview'
import GoogleMapApi from './GoogleMapApi'
import '../../style/journey-info.css'

import API from '../../api'

function Journey_info(props) {
  const [findResult, setFindResult] = useState(null)
  const [MapApi, setMapApi] = useState(null)
  const id = props.match.params.id

  const fetchAndUpdateJourneysLike = useCallback(async () => {
    API.fetchJourney(id).then(setFindResult)
  }, [id])

  useEffect(() => {
    fetchAndUpdateJourneysLike()
  }, [fetchAndUpdateJourneysLike])

  const fetchMapApi = useCallback(async () => {
    API.fetchMapApiKey().then(setMapApi)
  }, [])

  useEffect(() => {
    fetchMapApi()
  }, [fetchMapApi])

  //轉換成貨幣形式
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
  return findResult ? (
    <>
      <section>
        <div className="container td-mt-75">
          <div
            id="carouselExampleIndicators"
            className="carousel slide carousel-fade "
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 0"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={`/images/data/小banner圖/${findResult.banner_img}`}
                  className="d-block w-100"
                  alt="#"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={`/images/data/小banner圖/${findResult.banner_img2}`}
                  className="d-block w-100"
                  alt="#"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={`/images/data/小banner圖/${findResult.banner_img3}`}
                  className="d-block w-100"
                  alt="#"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={`/images/data/小banner圖/${findResult.banner_img4}`}
                  className="d-block w-100"
                  alt="#"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
      <div className="container td-mt-75 journey-info">
        <div className="row d-flex align-content-md-between tb journey-intro">
          <div className="col-md-6 col-12 journey-info-name">
            <p>{findResult.name}</p>
          </div>

          <div className="col-md-6 col-12 d-flex justify-content-md-end justify-content-center flex-column flex-md-row align-items-center ">
            <Like
              findResult={findResult}
              selected={findResult.status}
              handleClick={fetchAndUpdateJourneysLike}
            />
            <p className="journey-info-price order-1 order-md-2 ">
              {`${currency(findResult.price)} 起`}
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-md-end justify-content-center td-mt-25">
          {' '}
          <Rating rating={findResult.rating}></Rating>
        </div>
        <div className="journey-info-smalltitle">
          <p>一&nbsp;行程資訊&nbsp;一</p>
        </div>
        <div className="d-flex flex-row bd-highlight td-mt-25 justify-content-center justify-content-md-start">
          <div className="p-2 bd-highlight text-center my-auto ">
            <i className="fas fa-map-marker-alt icon "></i>
          </div>
          <div className="p-2 bd-highlight">
            <div className="text-title-size20 mt-1">
              台灣&nbsp;|&nbsp;{findResult.location}
            </div>
          </div>
        </div>
        <div className="d-flex flex-row bd-highlight td-mt-25 justify-content-center justify-content-md-start text-md-left text-center">
          <div className="p-2 bd-highlight text-center my-auto">
            {' '}
            <i className="far fa-clock icon"></i>
          </div>
          <div className="p-2 bd-highlight">
            <div className="text-title-size20 mt-1">{`行程長度：約${findResult.total_time}小時`}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 justify-content-center d-flex justify-content-md-start">
            <div className="d-flex flex-row bd-highlight td-mt-25 ">
              <div className="p-2 bd-highlight text-center my-auto">
                <i className="fas fa-globe "></i>
              </div>
              <div className="p-2 bd-highlight ">
                <div className="text-title-size20 mt-1 ">
                  {findResult.lang}導覽
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 justify-content-center d-flex justify-content-md-start ">
            <div className="d-flex flex-row bd-highlight td-mt-25">
              <div className="p-2 bd-highlight text-center my-auto">
                <i className="fas fa-motorcycle"></i>
              </div>
              <div className="p-2 bd-highlight">
                <div className="text-title-size20 mt-1">
                  {findResult.transportation}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="journey-info-smalltitle td-mt-25">
          <p>一&nbsp;行程簡介&nbsp;一</p>
        </div>
        <div className="journey-info-smalltitle td-mt-25">
          <p dangerouslySetInnerHTML={{ __html: findResult.introname }}></p>
        </div>
        <div className="journey-info-name mt-40">
          <p>行程說明</p>
        </div>
        <div className="journey-info-smalltitle td-mt-25">
          <p>一&nbsp;行程資訊&nbsp;一</p>
        </div>
        <div className="journey-info-smalltitle td-mt-25">
          <p dangerouslySetInnerHTML={{ __html: findResult.content }}></p>
        </div>
        <div className="journey-info-name td-mt-75 ">
          <p>行程照片</p>
        </div>
        <div className=" td-mt-25 ">
          <img
            src={`/images/data/行程照片/${findResult.journey_img}`}
            className="journey-info-pic"
            alt=""
          />
        </div>
        <div className=" mt-10 journey-info-pic td-mb-25">
          <img
            src={`/images/data/行程照片/${findResult.journey_img2}`}
            className="journey-info-pic"
            alt=""
          />
        </div>
        <div className="journey-info-name mt-40 td-mb-25">
          <p>體驗地點</p>
        </div>
        <LazyLoad>
          {MapApi ? (
            <GoogleMapApi findResult={findResult} MapApi={MapApi} />
          ) : (
            <div>Loading</div>
          )}
        </LazyLoad>
      </div>

      <JourneyReservationArea findResult={findResult} />

      <div className="container td-mt-75 journey-watchoutnote">
        <div className="td-mt-25">&nbsp;</div>
        <div className="journey-info-name ">
          <p>備註</p>
        </div>
        <div className="td-mt-25 journey-info-smalltitle p">
          <p dangerouslySetInnerHTML={{ __html: findResult.needtoknow }}></p>
        </div>
        <div className="td-md-25">&nbsp;</div>
      </div>

      <div className="container td-mt-75 journey-notes">
        <div className="journey-info-name ">
          <p>取消政策</p>
        </div>
        <div className="td-mt-25 journey-info-smalltitle p">
          <p>- 所選日期 3 天（含）之前取消，收取手續費 0%</p>
          <p> - 所選日期 0 ~ 2 天之間取消，收取手續費 100%</p>
          <p className="remark">
            注意：由於站內商品來自全球各地，訂單取消時間將依該供應商所在時區判定。供應商需
            2-5
            個工作天進行取消流程，依照您購買的商品取消政策收取手續費，並於取消流程完成後14
            個工作天內退款 。
          </p>
        </div>
      </div>
      <JourneyCoustomerReview />
      <ScrollToTop smooth />
    </>
  ) : (
    <div>Loading</div>
  )
}

export default Journey_info
