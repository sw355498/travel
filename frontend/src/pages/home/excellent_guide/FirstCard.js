import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../../../component/Rating'

function FirstCard({ JourneyGuideInfo }) {
  const cardTribeSplit = JourneyGuideInfo[4].tribe.split(',')
  console.log(cardTribeSplit[0])
  return (
    <div className="col-md-6 col-12 text-center d-flex justify-content-md-center ">
      <div className="card">
        <div className="card-body">
          <div className=" d-flex justify-content-center position-relative">
            <img
              src={`/images/data/導遊圖片/${JourneyGuideInfo[4].avatar}`}
              className="card-img-top guideImgBig"
              alt="..."
            />
            <div>
              <p className="text-right smalltag"> {cardTribeSplit[0]}</p>
            </div>
          </div>
          <h5 className="card-title td-mt-25">{JourneyGuideInfo[4].name}</h5>
          <Rating
            rating={JourneyGuideInfo[4].rating}
            className="td-mt-25"
          ></Rating>
          <h6>{JourneyGuideInfo[4].intro_title}</h6>
          <p className="card-text td-mt-25">{JourneyGuideInfo[4].intro}</p>
          <Link
            to={`GuildInfo/${JourneyGuideInfo[4].id}`}
            className="btn td-btn-large-o td-mt-50"
          >
            預約
          </Link>
          <div id="coustomer-review">
            <h5 className="coustomer-review">旅客評價</h5>
            <div className="link-left"></div>
            <div className="link-right"></div>
          </div>
          <div className="review-area">
            <div className="card">
              <div className="row">
                <div className="col-lg-4 col-md-12 d-flex justify-content-lg-end align-items-lg-center justify-content-center align-items-md-center guide-firstcomment">
                  <img
                    src="/images/data/旅客圖片/male3-70.jpg"
                    className="card-img-top "
                    alt="..."
                  />
                </div>
                <div className="col-lg-8 col-md-12 d-flex justify-content-start align-items-center text-left coustomer-name">
                  <div className="card-body">
                    <h5 className="card-title">Sara</h5>
                    <i className="fas fa-star mt-2 small-star"></i>
                    <i className="fas fa-star small-star"></i>
                    <i className="fas fa-star small-star"></i>
                    <i className="fas fa-star small-star"></i>
                    <i className="fas fa-star small-star"></i>
                  </div>
                </div>
                <div className="col-12">
                  <p className="card-text text-left">
                    導遊有夠帥，專業解說，貼心服務 ，有機會會再次購買服務。
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row">
                <div className="col-lg-4 col-md-12 d-flex justify-content-lg-end align-items-lg-center justify-content-center align-items-md-center">
                  <img
                    src="images/data/旅客圖片/male3-70.jpg"
                    className="card-img-top "
                    alt="..."
                  />
                </div>
                <div className="col-lg-8 col-md-12 d-flex justify-content-start align-items-center text-left coustomer-name">
                  <div className="card-body">
                    <h5 className="card-title">Sara</h5>
                    <i className="fas fa-star mt-2 small-star"></i>
                    <i className="fas fa-star small-star"></i>
                    <i className="fas fa-star small-star"></i>
                    <i className="fas fa-star small-star"></i>
                    <i className="fas fa-star small-star"></i>
                  </div>
                </div>
                <div className="col-12">
                  <p className="card-text text-left">
                    導遊有夠帥，專業解說，貼心服務 ，有機會會再次購買服務。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FirstCard
