import React from 'react'
import { Link, Route } from 'react-router-dom'
import Rating from '../../../component/Rating'
import JourneyData from '../../../data/journeyData'
import Journey_info from '../../journey_info/Journey_info'

function journetFilterResult() {
  return (
    <>
      <div className="container td-mt-75 filter-resultcontainer ">
        <h5 className="page-title text-center">篩選結果:奇美部落</h5>
        <Route path="/journey/:id" component={Journey_info}></Route>
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
                    <Link className="td-btn-medium-w" to="/journey_info">
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

export default journetFilterResult
