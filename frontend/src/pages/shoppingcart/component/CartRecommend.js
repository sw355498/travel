//元件引入
import React, { useState, useEffect } from 'react'
import JourneyData from '../../../data/journeyInfoData'
import { withRouter, Link } from 'react-router-dom'
// css引入
import '../../../style/spacing.css'
import '../../../style/button.css'
// import '../../../style/checkbox.css'
import '../../../style/shoppingcart-cart-list.css'
import '../../../style/fons.css'

function CartTitle(props) {
  const [recommends, setRecommends] = useState(JourneyData)
  //暫時使用星級篩選
  let attach = recommends.Info.filter((recommend) => recommend.rating >= 5)
  return (
    <>
      {/* 其旅客還購買web版 */}
      <div className="td-mt-75 d-none d-lg-block">
        <div className="text-title-size28 fw-bold">其它旅客還購買</div>
        <div className="shoppingcart-bg">
          <div className="d-flex justify-content-around td-my-25">
            {/* 第一項推薦 */}
            <div className="card td-my-25 recommend-card">
              <img
                className="recommend-img"
                src={`/images/data/行程照片/${attach[0].img1}`}
                alt={attach[0].img1}
                title={attach[0].img1}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{attach[0].introname}</h5>
                <p
                  className="card-text recommend-text"
                  title={attach[0].introcontent}
                >
                  {attach[0].introcontent}
                </p>
                <Link
                  to={`journey_Info/${attach[0]._id}`}
                  className="btn td-btn-medium-o m-3"
                >
                  查看
                </Link>
              </div>
            </div>
            {/* 第二項推薦 */}
            <div className="card td-my-25 recommend-card text-center">
              <img
                className="recommend-img"
                src={`/images/data/行程照片/${attach[1].img1}`}
                alt={attach[1].img1}
                title={attach[1].img1}
              />
              <div className="card-body">
                <h5 className="card-title">{attach[1].introname}</h5>
                <p
                  className="card-text recommend-text"
                  title={attach[1].introcontent}
                >
                  {attach[1].introcontent}
                </p>
                <Link
                  to={`journey_Info/${attach[1]._id}`}
                  className="btn td-btn-medium-o m-3"
                >
                  查看
                </Link>
              </div>
            </div>
            {/* 第三項推薦 */}
            <div className="card td-my-25 recommend-card text-center">
              <img
                className="recommend-img"
                src={`/images/data/行程照片/${attach[2].img1}`}
                alt={attach[2].img1}
                title={attach[2].img1}
              />
              <div className="card-body">
                <h5 className="card-title">{attach[2].introname}</h5>
                <p
                  className="card-text recommend-text"
                  title={attach[2].introcontent}
                >
                  {attach[2].introcontent}
                </p>
                <Link
                  to={`journey_Info/${attach[2]._id}`}
                  className="btn td-btn-medium-o m-3"
                >
                  查看
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 其旅客還購買rwd版 */}
      <div className="shoppingcart-bg td-mt-75 td-mb-25  d-lg-none">
        <div className="text-title-size28 shoppingcart-title text-center td-pt-25 d-lg-none d-block">
          其它旅客還購買
        </div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* 第一項推薦 */}
            <div className="carousel-item active">
              <div className="card td-my-25 recommend-card container p-0">
                <img
                  className="recommend-img"
                  src={`/images/data/行程照片/${attach[0].img1}`}
                  alt={attach[0].img1}
                  title={attach[0].img1}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{attach[0].introname}</h5>
                  <p
                    className="card-text recommend-text"
                    title={attach[0].introcontent}
                  >
                    {attach[0].introcontent}
                  </p>
                  <Link
                    to={`journey_Info/${attach[0]._id}`}
                    className="btn td-btn-medium-o m-3"
                  >
                    查看
                  </Link>
                </div>
              </div>
            </div>
            {/* 第二項推薦 */}
            <div className="carousel-item">
              <div className="card td-my-25 recommend-card container p-0">
                <img
                  className="recommend-img"
                  src={`/images/data/行程照片/${attach[1].img1}`}
                  alt={attach[1].img1}
                  title={attach[1].img1}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{attach[1].introname}</h5>
                  <p
                    className="card-text recommend-text"
                    title={attach[1].introcontent}
                  >
                    {attach[1].introcontent}
                  </p>
                  <Link
                    to={`journey_Info/${attach[1]._id}`}
                    className="btn td-btn-medium-o m-3"
                  >
                    查看
                  </Link>
                </div>
              </div>
            </div>
            {/* 第三項推薦 */}
            <div className="carousel-item">
              <div className="card td-my-25 recommend-card container p-0">
              <img
                  className="recommend-img"
                  src={`/images/data/行程照片/${attach[2].img1}`}
                  alt={attach[2].img1}
                  title={attach[2].img1}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{attach[2].introname}</h5>
                  <p
                    className="card-text recommend-text"
                    title={attach[2].introcontent}
                  >
                    {attach[2].introcontent}
                  </p>
                  <Link
                    to={`journey_Info/${attach[2]._id}`}
                    className="btn td-btn-medium-o m-3"
                  >
                    查看
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon bg-dark"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon bg-dark"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default withRouter(CartTitle)
