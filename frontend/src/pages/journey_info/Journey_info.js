import React, { useState, useEffect, useCallback } from 'react'
import ScrollToTop from 'react-scroll-to-top'

import Rating from '../../component/Rating'
import JourneyBanner from '../journey/banner/journeyBanner'
import Like from './Like'
import JourneyReservationArea from './reservation_area/journeyReservationArea'
import JourneyCoustomerReview from './coustomer_review/journeyCoustomerReview'
import Pagination from '../journey/pagination/Pagination'
import '../../style/journey-info.css'

import API from '../../api'

function Journey_info(props) {
  const [findResult, setFindResult] = useState(null)
  const id = props.match.params.id

  const fetchAndUpdateJourneysLike = useCallback(async () => {
    API.fetchJourney(id).then(setFindResult)
  }, [id])

  useEffect(() => {
    fetchAndUpdateJourneysLike()
  }, [fetchAndUpdateJourneysLike])
  return findResult ? (
    <>
      <JourneyBanner />
      <div className="container td-mt-75 journey-info">
        <div className="row d-flex align-content-md-between tb journey-intro">
          <div className="col-md-6 col-12 journey-info-name">
            <p>{findResult.name}</p>
          </div>

          <div className="col-md-6 col-12 d-flex justify-content-md-end justify-content-center flex-column flex-md-row align-items-center">
            <Like
              findResult={findResult}
              selected={findResult.status}
              handleClick={fetchAndUpdateJourneysLike}
            />
            <p className="journey-info-price order-1 order-md-2">
              TWD{findResult.price} 起
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          {' '}
          <Rating rating={findResult.rating}></Rating>
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
            <div className="text-title-size20 mt-1">{`行程長度：約${findResult.total_time}小時`}</div>
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
            src={`/images/data/行程照片/${findResult.journey_img}`}
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
      <JourneyReservationArea findResult={findResult} />

      <div className="container td-mt-75 journey-watchoutnote">
        <div className="td-mt-25">&nbsp;</div>
        <div className="journey-info-name ">
          <p>備註</p>
        </div>
        <div className="td-mt-25 ">
          <p>{findResult.needtoknow}</p>
        </div>
        <div className="td-md-25">&nbsp;</div>
      </div>

      <div className="container td-mt-75 journey-notes">
        <div className="journey-info-name ">
          <p>取消政策</p>
        </div>
        <div className="td-mt-25">
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
      <Pagination />
      <ScrollToTop smooth />
    </>
  ) : (
    <div>Loading</div>
  )
}

export default Journey_info
