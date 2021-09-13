import React from 'react'
import Rating from '../../../../component/Rating'

function GuideItem({ guidereview }) {
  return (
    <>
      <div className="container td-mt-25 coustomerreview ">
        <div className="row td-mt-25">
          <div className="col-md-1 col-2 d-flex justify-content-center">
            <img
              src={`/images/data/旅客圖片/${guidereview.guestImg}`}
              alt="旅客1"
              className="coustomerreview-img
        "
            />
          </div>
          <div className="col-md-3 col-4">
            <p className="mb-3">{guidereview.name}</p>
            <label className="ml-5">
              <Rating rating={guidereview.rating}></Rating>
            </label>
          </div>
          <div className="col-6 col-md-8 d-flex justify-content-end"></div>
          <div className="col-2 col-md-1"></div>
          <div className="col-10 td-mt-25 col-md-2">
            <p className="td-mb-15">{guidereview.message}</p>
            <img
              src={`/images/data/旅客評價內行程圖/${guidereview.reviewImg}`}
              alt=""
              className="coustomerreview-journeyimg"
            />
          </div>
        </div>

        <div className="container coustomerreview-area td-mb-25">
          <div className="row td-mt-25">
            <div className="col-1"></div>
            <div className="col-11 d-flex  td-mt-25 align-items-center">
              <img
                src={`/images/data/馬太鞍部落/導遊/${guidereview.guideImg}`}
                alt="旅客1"
                className="coustomerreview-img
        "
              />
              <p className="text-title-size20 coutomerreview-guideresponse">
                {guidereview.guidemessage}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default GuideItem
