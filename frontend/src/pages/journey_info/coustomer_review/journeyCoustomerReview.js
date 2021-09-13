import React from 'react'

function JourneyCoustomerReview() {
  const options = [
    { name: '5星好評', value: '5' },
    { name: '4星好評', value: '4' },
    { name: '3星好評', value: '3' },
    { name: '2星好評', value: '2' },
    { name: '1星好評', value: '1' },
  ]
  const reviwer = [
    {
      name: 'Joe',
      rating: '5',
      message: '好玩',
      guestImg: 'male1-70.jpg',
      reviewImg: '水璉部落6.jpg',
    },
  ]
  return (
    <>
      <div className="container td-mt-75 coustomerreview ">
        <div className="journey-info-name ">
          <p>旅客評價</p>
        </div>
        <div className="row td-mt-25">
          <div className="col-md-1 col-2 d-flex justify-content-center">
            <img
              src="/images/data/旅客圖片/male1-70.jpg"
              alt="旅客1"
              className="coustomerreview-img
        "
            />
          </div>
          <div className="col-md-3 col-4">
            <p className="mb-3">Joe</p>
            <label className="ml-5">
              {' '}
              <i className="fas fa-star small-star "></i>
              <i className="fas fa-star small-star "></i>
              <i className="fas fa-star small-star "></i>
              <i className="fas fa-star small-star "></i>
              <i className="fas fa-star small-star "></i>{' '}
            </label>
          </div>
          <div className="col-6 col-md-8 d-flex justify-content-end">
            <button className="td-btn-large-Sort text-content-size16">
              排序<i className="fas fa-align-left"></i>
            </button>
          </div>

          <div className="col-2 col-md-1"></div>
          <div className="col-10 td-mt-25 col-md-2 ">
            <p className="td-mb-15">獨木舟好好玩，謝謝C大帶我們去玩。</p>
            <img
              src="/images/data/旅客評價內行程圖/水璉部落6.jpg"
              alt=""
              className="coustomerreview-journeyimg"
            />
          </div>
        </div>
      </div>

      <div className="container coustomerreview-area td-mb-25">
        <div className="row td-mt-25">
          <div className="col-1"></div>
          <div className="col-11 d-flex  td-mt-25 align-items-center">
            <img
              src="/images/data/旅客圖片/woman1-70.jpg"
              alt="旅客1"
              className="coustomerreview-img
        "
            />
            <p className="text-title-size20 coutomerreview-guideresponse">
              很開心你會喜歡，歡迎下次再來。
            </p>
          </div>
        </div>
      </div>

      <div className="container td-mt-25 coustomerreview ">
        <div className="row td-mt-25">
          <div className="col-md-1 col-2 d-flex justify-content-center">
            <img
              src="/images/data/旅客圖片/male1-70.jpg"
              alt="旅客1"
              className="coustomerreview-img
        "
            />
          </div>
          <div className="col-md-3 col-4">
            <p className="mb-3">Joe</p>
            <label className="ml-5">
              {' '}
              <i className="fas fa-star small-star "></i>
              <i className="fas fa-star small-star "></i>
              <i className="fas fa-star small-star "></i>
              <i className="fas fa-star small-star "></i>
              <i className="fas fa-star small-star "></i>{' '}
            </label>
          </div>
          <div className="col-6 col-md-8 d-flex justify-content-end"></div>
          <div className="col-2 col-md-1"></div>
          <div className="col-10 td-mt-25 col-md-2">
            <p className="td-mb-15">獨木舟好好玩，謝謝C大帶我們去玩。</p>
            <img
              src="/images/data/旅客評價內行程圖/水璉部落6.jpg"
              alt=""
              className="coustomerreview-journeyimg"
            />
          </div>
        </div>
      </div>

      <div className="container coustomerreview-area td-mb-25">
        <div className="row td-mt-25">
          <div className="col-1"></div>
          <div className="col-11 d-flex  td-mt-25 align-items-center">
            <img
              src="/images/data/旅客圖片/woman1-70.jpg"
              alt="旅客1"
              className="coustomerreview-img
        "
            />
            <p className="text-title-size20 coutomerreview-guideresponse">
              很開心你會喜歡，歡迎下次再來。
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default JourneyCoustomerReview
