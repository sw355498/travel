import React from 'react'
import journeyinfoData from './JourneyInfoData/JourneyInfoData'
import JourneyBanner from '../journey/banner/journeyBanner'
import JourneyReservationArea from './reservation_area/journeyReservationArea'
import JourneyShoppingNote from './shopping_notes/journeyShoppingNote'
import JourneyCoustomerReview from './coustomer_review/JourneyCoustomerReview'
import Pagination from '../journey/pagination/Pagination'
import ScrollUp from '../../component/scrollUp'
import '../../style/journey-info.css'

function Journey_info(props) {
  const findResult = journeyinfoData.find(
    (x) => x._id === props.match.params.id
  )
  if (!findResult) {
    return <div>找不到您想要的行程</div>
  }
  return (
    <>
      <JourneyBanner />
      <div className="container td-mt-75 journey-info">
        <div className="row d-flex align-content-md-between tb journey-intro">
          <div className="col-md-6 col-12 journey-info-name">
            <p>{findResult.name}</p>
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-md-end justify-content-center flex-column flex-md-row align-items-center">
            <i className="far fa-heart td-me-50 journey-info-like order-2 order-md-1"></i>
            <p className="journey-info-price order-1 order-md-2">
              TWD{findResult.price} 起
            </p>
          </div>
        </div>
        <div className="row d-flex justify-content-end journey-info-point">
          <div className="d-flex justify-content-md-end justify-content-center td-mt-15 align-items-center">
            {' '}
            5.0 &nbsp;
            <i className="fas fa-star small-star "></i>
            <i className="fas fa-star small-star "></i>
            <i className="fas fa-star small-star "></i>
            <i className="fas fa-star small-star "></i>
            <i className="fas fa-star small-star "></i>
          </div>
        </div>
        <div className="journey-info-smalltitle">
          <p>一&nbsp;行程資訊&nbsp;一</p>
        </div>
        <div className="d-flex flex-row bd-highlight td-mt-25 justify-content-center justify-content-md-start">
          <div className="p-2 bd-highlight text-center ">
            <i className="fas fa-map-marker-alt icon"></i>
          </div>
          <div className="p-2 bd-highlight">
            <div className="text-title-size20 mt-1">
              台灣&nbsp;|&nbsp;{findResult.location}
            </div>
          </div>
        </div>

        <div className="d-flex flex-row bd-highlight td-mt-25 justify-content-center justify-content-md-start text-md-left text-center">
          <div className="p-2 bd-highlight text-center">
            {' '}
            <i className="far fa-clock icon"></i>
          </div>
          <div className="p-2 bd-highlight">
            <div className="text-title-size20 mt-1">{findResult.describe}</div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 justify-content-center d-flex justify-content-md-start">
            <div className="d-flex flex-row bd-highlight td-mt-25 ">
              <div className="p-2 bd-highlight text-center">
                <i className="fas fa-globe"></i>
              </div>
              <div className="p-2 bd-highlight">
                <div className="text-title-size20 mt-1">
                  {findResult.lang}導覽
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8 justify-content-center d-flex justify-content-md-start">
            <div className="d-flex flex-row bd-highlight td-mt-25">
              <div className="p-2 bd-highlight text-center">
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
          <p>{findResult.introname}:</p>
        </div>
        <div className="journey-info-smalltitle td-mt-25">
          <p>{findResult.introcontent}</p>
        </div>
        <div className="journey-info-name mt-40">
          <p>商品說明</p>
        </div>

        <div className="journey-info-smalltitle td-mt-25">
          <p>一&nbsp;行程資訊&nbsp;一</p>
        </div>
        <div className="journey-info-smalltitle td-mt-25">
          {findResult.content}
        </div>

        <div className="journey-info-name td-mt-75 ">
          <p>行程照片</p>
        </div>
        <div className=" td-mt-25 ">
          <img
            src={`/images/data/行程照片/${findResult.img1}`}
            className="journey-info-pic"
            alt=""
          />
        </div>
        <div className=" mt-10 journey-info-pic">
          <img
            src={`/images/data/行程照片/${findResult.img2}`}
            className="journey-info-pic"
            alt=""
          />
        </div>
      </div>
      <JourneyReservationArea />
      <JourneyShoppingNote />
      <JourneyCoustomerReview />
      <Pagination />
      <ScrollUp />
    </>
  )
}

export default Journey_info
