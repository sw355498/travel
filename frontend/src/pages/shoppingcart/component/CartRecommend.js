//元件引入
import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import axios from 'axios'
import { API_URL } from '../../../config'

function CartTitle(props) {
  const [recommendData, setRecommendData] = useState(null)

  //其旅客還購買web版
  const recommendWeb = () => {
    let recommendWebNumber = []
    if (recommendData !== null) {
      for (let i = 1; i <= 3; i++) {
        recommendWebNumber.push(
          <div className="card td-my-25 recommend-card text-center">
            <img
              className="recommend-img"
              src={`/images/data/行程照片/${recommendData[i].journey_img}`}
              alt={recommendData[i].journey_img}
              title={recommendData[i].journey_img}
            />
            <div className="card-body text-center">
              <h5 className="card-title text-primary">
                {recommendData[i].name}
              </h5>
              <p
                className="card-text recommend-text td-my-25"
                title={recommendData[i].description}
              >
                {recommendData[i].description}
              </p>
              <Link
                to={`journey_Info/${recommendData[i]._id}`}
                className="btn td-btn-medium-o m-3"
              >
                查看
              </Link>
            </div>
          </div>
        )
      }
      return recommendWebNumber
    }
  }

  //其旅客還購買rwd版
  const recommendRWD = () => {
    let recommendRWDNumber = []
    if (recommendData !== null) {
      recommendRWDNumber.push(
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
              <div className="carousel-item active" id="recommend-card-bg">
                <div className="card td-my-25 recommend-card container p-0">
                  <img
                    className="recommend-img"
                    src={`/images/data/行程照片/${recommendData[0].journey_img}`}
                    alt={recommendData[0].journey_img}
                    title={recommendData[0].journey_img}
                  />
                  <div className="card-body text-center text-dark">
                    <h5 className="card-title">{recommendData[0].name}</h5>
                    <p
                      className="card-text recommend-text"
                      title={recommendData[0].description}
                    >
                      {recommendData[0].description}
                    </p>
                    <Link
                      to={`journey_Info/${recommendData[0]._id}`}
                      className="btn td-btn-medium-o m-3"
                    >
                      查看
                    </Link>
                  </div>
                </div>
              </div>
              <div className="carousel-item" id="recommend-card-bg">
                <div className="card td-my-25 recommend-card container p-0">
                  <img
                    className="recommend-img"
                    src={`/images/data/行程照片/${recommendData[1].journey_img}`}
                    alt={recommendData[1].journey_img}
                    title={recommendData[1].journey_img}
                  />
                  <div className="card-body text-center text-dark">
                    <h5 className="card-title">{recommendData[1].name}</h5>
                    <p
                      className="card-text recommend-text"
                      title={recommendData[1].description}
                    >
                      {recommendData[1].description}
                    </p>
                    <Link
                      to={`journey_Info/${recommendData[1]._id}`}
                      className="btn td-btn-medium-o m-3"
                    >
                      查看
                    </Link>
                  </div>
                </div>
              </div>
              <div className="carousel-item" id="recommend-card-bg">
                <div className="card td-my-25 recommend-card container p-0">
                  <img
                    className="recommend-img"
                    src={`/images/data/行程照片/${recommendData[0].journey_img}`}
                    alt={recommendData[0].journey_img}
                    title={recommendData[0].journey_img}
                  />
                  <div className="card-body text-center text-dark">
                    <h5 className="card-title">{recommendData[2].name}</h5>
                    <p
                      className="card-text recommend-text"
                      title={recommendData[2].description}
                    >
                      {recommendData[2].description}
                    </p>
                    <Link
                      to={`journey_Info/${recommendData[2]._id}`}
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
                id="recommend-previous-bg"
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
                className="carousel-control-next-icon bg-dark bg-none"
                aria-hidden="true"
                id="recommend-next-bg"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      )
      return recommendRWDNumber
    }
  }
  //取得行程資料庫資料
  useEffect(() => {
    const getRecommend = async () => {
      try {
        let res = await axios.get(`${API_URL}/shoppingcart_recommend`)
        let data = res.data
        setRecommendData(data)
      } catch (e) {
        console.log(e.message)
      }
    }
    getRecommend()
  }, [])

  return (
    <>
      {/* 其旅客還購買web版 */}
      <div className="td-mt-75 d-none d-lg-block">
        <div className="text-title-size28 fw-bold">其它旅客還購買</div>
        <div className="shoppingcart-bg">
          <div className="d-flex justify-content-around td-my-25">
            {recommendWeb()}
          </div>
        </div>
      </div>
      {/* 其旅客還購買rwd版 */}
      {recommendRWD()}
    </>
  )
}

export default withRouter(CartTitle)
