import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import Rating from '../../../component/Rating'
import JourneyData from '../../../data/journeyData'

const tribename = [
  {
    _id: 1,
    name: '靜浦部落',
  },
  {
    _id: 2,
    name: '水璉部落',
  },
  {
    _id: 3,
    name: '馬太鞍部落',
  },
  {
    _id: 4,
    name: '撒固兒部落',
  },
  {
    _id: 5,
    name: '太巴塱部落',
  },
  {
    _id: 6,
    name: '新社部落',
  },
  {
    _id: 7,
    name: '奇美部落',
  },
]

function journeyFillterResult() {
  return (
    <>
      <section className="container guildlist-filter td-mb-75">
        {/* <!-- WEB版篩選 --> */}
        <div calss="guildlist-filter-web">
          <h2 className="guildlist-filter-title td-mt-50">快速篩選</h2>
          {/* <!-- 部落篩選 --> */}
          <div className="filter-tribe">
            <div className="filter-tribe-title col-2 position-relative">
              <p className="position-absolute text-white">部落</p>
            </div>
            {/* <!-- checkbox選項 --> */}
            <div className="filter-tribe-check col-10">
              {tribename.map((value, tribename) => (
                <div className="" key={tribename}>
                  <input
                    type="checkbox"
                    className="tribe-check-input position-relative"
                    name="tribeCheckInput"
                    id="tribeCheckInput1"
                    value=""
                    onChange
                  />
                  <label className="tribe-check-label" for="tribeCheckInput1">
                    <span>{value.name}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
          {/* <!-- 星等篩選 --> */}
          <div className="filter-stars">
            <div className="filter-stars-title col-2 position-relative">
              <p className="position-absolute text-white">星等</p>
              <div className="filter-stars-title-bg"></div>
            </div>
            <div className="filter-stars-check my-auto d-flex flex-wrap col-10">
              <div>
                <input
                  type="checkbox"
                  className="stars-check-input position-relative"
                  name="starsCheckInput"
                  id="starsCheckInput5"
                  value=""
                />
                <label
                  className="stars-check-label five-stars-label"
                  for="starsCheckInput5"
                >
                  <div className="stars-label-group">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  className="stars-check-input position-relative"
                  name="starsCheckInput"
                  id="starsCheckInput4"
                  value=""
                />
                <label
                  className="stars-check-label four-stars-label"
                  for="starsCheckInput4"
                >
                  <div className="stars-label-group">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  className="stars-check-input position-relative"
                  name="starsCheckInput"
                  id="starsCheckInput3"
                  value=""
                />
                <label
                  className="stars-check-label three-stars-label"
                  for="starsCheckInput3"
                >
                  <div className="stars-label-group">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  className="stars-check-input position-relative"
                  name="starsCheckInput"
                  id="starsCheckInput2"
                  value=""
                />
                <label
                  className="stars-check-label two-stars-label"
                  for="starsCheckInput2"
                >
                  <div className="stars-label-group">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- RWD版篩選 --> */}
        <div className=" container guildlist-filter-rwd position-relative">
          <div className="dropdown text-center mx-auto row ">
            {/* <!-- 按鈕 --> */}
            <button
              className="dropdown-toggle text-white text-center col-10 mx-auto d-flex align-items-center"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div className="position-relative w-100 dropdown-toggle-e">
                <h2 className="filter-title-web d-inline-block m-auto">
                  快速篩選
                </h2>
                <i className="fas fa-chevron-up"></i>
                <i className="fas fa-chevron-down invisible"></i>
              </div>
            </button>
            {/* <!-- 選單內容 --> */}
            <div className="dropdown-menu mx-auto">
              {/* <!-- 部落 --> */}
              <div className="filter-tribe-rwd td-mb-25">
                <h2>部落篩選</h2>
                <div className="filter-tribe-check col-10">
                  <div>
                    <input
                      type="checkbox"
                      className="tribe-check-input position-relative"
                      name="tribeCheckInput"
                      id="tribeCheckInput1"
                      value=""
                    />
                    <label className="tribe-check-label" for="tribeCheckInput1">
                      靜浦部落
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="tribe-check-input position-relative"
                      name="tribeCheckInput"
                      id="tribeCheckInput2"
                      value=""
                    />
                    <label className="tribe-check-label" for="tribeCheckInput2">
                      新社部落
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="tribe-check-input position-relative"
                      name="tribeCheckInput"
                      id="tribeCheckInput"
                      value=""
                    />
                    <label className="tribe-check-label" for="tribeCheckInput">
                      太巴塱部落
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="tribe-check-input position-relative"
                      name="tribeCheckInput"
                      id="tribeCheckInput"
                      value=""
                    />
                    <label className="tribe-check-label" for="tribeCheckInput">
                      撒固兒部落
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="tribe-check-input position-relative"
                      name="tribeCheckInput"
                      id="tribeCheckInput"
                      value=""
                    />
                    <label className="tribe-check-label" for="tribeCheckInput">
                      馬太鞍部落
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="tribe-check-input position-relative"
                      name="tribeCheckInput"
                      id="tribeCheckInput"
                      value=""
                    />
                    <label className="tribe-check-label" for="tribeCheckInput">
                      水璉部落
                    </label>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      className="tribe-check-input position-relative"
                      name="tribeCheckInput"
                      id="tribeCheckInput"
                      value=""
                    />
                    <label className="tribe-check-label" for="tribeCheckInput">
                      奇美部落
                    </label>
                  </div>
                </div>
              </div>
              {/* <!-- 星等 --> */}
              <div className="filter-stars-rwd td-mb-25">
                <h2>星等</h2>
                <div className="filter-stars-check my-auto d-flex flex-wrap col-10">
                  <div className="filter-stars-check-item">
                    <input
                      type="checkbox"
                      className="stars-check-input position-relative"
                      name="starsCheckInput"
                      id="starsCheckInput"
                      value=""
                    />
                    <label
                      className="stars-check-label five-stars-label"
                      for="starsCheckInput"
                    >
                      <div className="stars-label-group">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </label>
                  </div>
                  <div className="filter-stars-check-item">
                    <input
                      type="checkbox"
                      className="stars-check-input position-relative"
                      name="starsCheckInput"
                      id="starsCheckInput"
                      value=""
                    />
                    <label
                      className="stars-check-label four-stars-label"
                      for="starsCheckInput"
                    >
                      <div className="stars-label-group">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                    </label>
                  </div>
                  <div className="filter-stars-check-item">
                    <input
                      type="checkbox"
                      className="stars-check-input position-relative"
                      name="starsCheckInput"
                      id="starsCheckInput"
                      value=""
                    />
                    <label
                      className="stars-check-label three-stars-label"
                      for="starsCheckInput"
                    >
                      <div className="stars-label-group">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                    </label>
                  </div>
                  <div className="filter-stars-check-item">
                    <input
                      type="checkbox"
                      className="stars-check-input position-relative"
                      name="starsCheckInput"
                      id="starsCheckInput"
                      value=""
                    />
                    <label
                      className="stars-check-label two-stars-label"
                      for="starsCheckInput"
                    >
                      <div className="stars-label-group">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container td-mt-75 filter-resultcontainer ">
        <h5 className="page-title text-center">篩選結果:奇美部落</h5>
        {JourneyData.journey.map((journey) => (
          <>
            <div className="row filter-result td-mb-25">
              <div
                className="col-md-4 col-12 filter-result-imgarea d-flex align-content-between "
                key={journey._id}
              >
                <img src={`/images/${journey.image}`} alt="" />
              </div>
              <div className="col-md-5 flex-md-column journey-info mt-lg-4 mb-3">
                <div className="row ">
                  <div className="col-md-12 order-1">
                    <div className="d-flex justify-content-between mt-md-2">
                      <div className="title">{journey.name}</div>
                      <div className="tag">
                        <i className="fas fa-tags">{journey.tribe}</i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 reviewStar">
                  <div>
                    <div className="row">
                      <div className="col-9 col-md-10">
                        <Rating
                          rating={journey.rating}
                          amountRating={journey.amountRating}
                        ></Rating>
                      </div>
                      <div className="col-3">
                        <i
                          className="far fa-heart mb-1 fa-heart-show"
                          onclick="collect(this)"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 reviewStar-content">
                  <div className="content">{journey.description}</div>
                </div>
              </div>
              <div className="col-md-3 journey-price  mt-md-4">
                <div className="row">
                  <div className="col-7 col-md-12 d-md-flex justify-content-md-center">
                    <p className="mt-3">TWD&nbsp;{journey.price}</p>
                  </div>
                  <div className="col-5 col-md-12 d-flex flex-md-column align-items-md-center justify-content-between ">
                    <Link
                      className="td-btn-medium-w"
                      to={`journey_Info/${journey._id}`}
                    >
                      <span>詳細</span>
                    </Link>
                    <button className="td-btn-medium-o">選擇</button>
                    <i
                      className="far fa-heart mb-1 fa-heart-hide"
                      onclick="collect(this)"
                    ></i>
                  </div>
                </div>
                <div className="d-flex flex-md-column align-items-center justify-content-around align-items-center"></div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

export default journeyFillterResult
