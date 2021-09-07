import React from 'react'
import journeyImg from '../../data/行程圖片/奇美部落.png'

function journetFilterResult() {
  return (
    <>
      <div className="container td-mt-75 filter-resultcontainer">
        <h5 className="page-title text-center">篩選結果:奇美部落</h5>
        <div className="row filter-result ">
          <div className="col-md-4 col-12 filter-result-imgarea d-flex align-content-between ">
            <img src={journeyImg} alt="" />
          </div>
          <div className="col-md-5 flex-md-column journey-info mt-lg-4 mb-3">
            <div className="row ">
              <div className="col-md-12 order-1">
                <div className="d-flex justify-content-between mt-md-2">
                  <div className="title">奇萊雅族部落體驗</div>
                  <div className="tag">
                    {' '}
                    <i className="fas fa-tags">奇美部落</i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 reviewStar">
              <div>
                <div className="row">
                  <div className="col-9 col-md-10">
                    <div className="d-flex align-items-center reviewStar-point ">
                      {' '}
                      評價&nbsp;:&nbsp;5.0 &nbsp;&nbsp;
                      <label className="ml-5">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </label>
                    </div>
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
              <div className="content">
                最少出團人數 2
                人，當參加人數未達上述規定的最少成團人數時，將取消旅遊行程，於出發日前
                1 天發出取消旅遊的 Email 通知。
              </div>
            </div>
          </div>
          <div className="col-md-3 journey-price  mt-md-4">
            <div className="row">
              <div className="col-7 col-md-12 d-md-flex justify-content-md-center">
                <p className="mt-3">TWD 3,110</p>
              </div>
              <div className="col-5 col-md-12 d-flex flex-md-column align-items-md-center justify-content-between ">
                <button className="td-btn-medium-w">詳細</button>
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
      </div>
      <div className="container td-mt-25 filter-resultcontainer">
        <div className="row filter-result ">
          <div className="col-md-4 col-12 filter-result-imgarea d-flex align-content-between ">
            <img src={journeyImg} alt="" />
          </div>
          <div className="col-md-5 flex-md-column journey-info mt-lg-4 mb-3">
            <div className="row ">
              <div className="col-md-12 order-1">
                <div className="d-flex justify-content-between mt-md-2">
                  <div className="title">奇萊雅族部落體驗</div>
                  <div className="tag">
                    {' '}
                    <i className="fas fa-tags">奇美部落</i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 reviewStar">
              <div>
                <div className="row">
                  <div className="col-9 col-md-10">
                    <div className="d-flex align-items-center reviewStar-point ">
                      {' '}
                      評價&nbsp;:&nbsp;5.0 &nbsp;&nbsp;
                      <label className="   ml-5">
                        <i className="fas fa-star  "></i>
                        <i className="fas fa-star   "></i>
                        <i className="fas fa-star   "></i>
                        <i className="fas fa-star   "></i>
                        <i className="fas fa-star   "></i>
                      </label>
                    </div>
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
              <div className="content">
                最少出團人數 2
                人，當參加人數未達上述規定的最少成團人數時，將取消旅遊行程，於出發日前
                1 天發出取消旅遊的 Email 通知。
              </div>
            </div>
          </div>
          <div className="col-md-3 journey-price  mt-md-4">
            <div className="row">
              <div className="col-7 col-md-12 d-md-flex justify-content-md-center">
                <p className="mt-3">TWD 3,110</p>
              </div>
              <div className="col-5 col-md-12 d-flex flex-md-column align-items-md-center justify-content-between ">
                <button className="td-btn-medium-w">詳細</button>
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
      </div>
      <div className="container td-mt-25 filter-resultcontainer">
        <div className="row filter-result ">
          <div className="col-md-4 col-12 filter-result-imgarea d-flex align-content-between ">
            <img src={journeyImg} alt="" />
          </div>
          <div className="col-md-5 flex-md-column journey-info mt-lg-4 mb-3">
            <div className="row ">
              <div className="col-md-12 order-1">
                <div className="d-flex justify-content-between mt-md-2">
                  <div className="title">奇萊雅族部落體驗</div>
                  <div className="tag">
                    {' '}
                    <i className="fas fa-tags">奇美部落</i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 reviewStar">
              <div className="">
                <div className="row">
                  <div className="col-9 col-md-10">
                    <div className="d-flex align-items-center reviewStar-point ">
                      {' '}
                      評價&nbsp;:&nbsp;5.0 &nbsp;&nbsp;
                      <label className="   ml-5">
                        <i className="fas fa-star  "></i>
                        <i className="fas fa-star   "></i>
                        <i className="fas fa-star   "></i>
                        <i className="fas fa-star   "></i>
                        <i className="fas fa-star   "></i>
                      </label>
                    </div>
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
              <div className="content">
                最少出團人數 2
                人，當參加人數未達上述規定的最少成團人數時，將取消旅遊行程，於出發日前
                1 天發出取消旅遊的 Email 通知。
              </div>
            </div>
          </div>
          <div className="col-md-3 journey-price  mt-md-4">
            <div className="row">
              <div className="col-7 col-md-12 d-md-flex justify-content-md-center">
                <p className="mt-3">TWD 3,110</p>
              </div>
              <div className="col-5 col-md-12 d-flex flex-md-column align-items-md-center justify-content-between ">
                <button className="td-btn-medium-w">詳細</button>
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
      </div>
      <div className="container td-mt-25 filter-resultcontainer">
        <div className="row filter-result ">
          <div className="col-md-4 col-12 filter-result-imgarea d-flex align-content-between ">
            <img src={journeyImg} alt="" />
          </div>
          <div className="col-md-5 flex-md-column journey-info mt-lg-4 mb-3">
            <div className="row ">
              <div className="col-md-12 order-1">
                <div className="d-flex justify-content-between mt-md-2">
                  <div className="title">奇萊雅族部落體驗</div>
                  <div className="tag">
                    {' '}
                    <i className="fas fa-tags">奇美部落</i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 reviewStar">
              <div className="">
                <div className="row">
                  <div className="col-9 col-md-10">
                    <div className="d-flex align-items-center reviewStar-point ">
                      {' '}
                      評價&nbsp;:&nbsp;5.0 &nbsp;&nbsp;
                      <label className="   ml-5">
                        <i className="fas fa-star  "></i>
                        <i className="fas fa-star   "></i>
                        <i className="fas fa-star   "></i>
                        <i className="fas fa-star   "></i>
                        <i className="fas fa-star   "></i>
                      </label>
                    </div>
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
              <div className="content">
                最少出團人數 2
                人，當參加人數未達上述規定的最少成團人數時，將取消旅遊行程，於出發日前
                1 天發出取消旅遊的 Email 通知。
              </div>
            </div>
          </div>
          <div className="col-md-3 journey-price  mt-md-4">
            <div className="row">
              <div className="col-7 col-md-12 d-md-flex justify-content-md-center">
                <p className="mt-3">TWD 3,110</p>
              </div>
              <div className="col-5 col-md-12 d-flex flex-md-column align-items-md-center justify-content-between ">
                <button className="td-btn-medium-w">詳細</button>
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
      </div>
      <div className="container td-mt-25 filter-resultcontainer">
        <div className="row filter-result ">
          <div className="col-md-4 col-12 filter-result-imgarea d-flex align-content-between ">
            <img src={journeyImg} alt="" />
          </div>
          <div className="col-md-5 flex-md-column journey-info mt-lg-4 mb-3">
            <div className="row ">
              <div className="col-md-12 order-1">
                <div className="d-flex justify-content-between mt-md-2">
                  <div className="title">奇萊雅族部落體驗</div>
                  <div className="tag">
                    {' '}
                    <i className="fas fa-tags">奇美部落</i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 reviewStar">
              <div className="">
                <div className="row">
                  <div className="col-9 col-md-10 col-xx-10">
                    <div className="d-flex align-items-center reviewStar-point ">
                      {' '}
                      評價&nbsp;:&nbsp;5.0 &nbsp;&nbsp;
                      <label className="   ml-5">
                        <i className="fas fa-star  "></i>
                        <i className="fas fa-star   "></i>
                        <i className="fas fa-star   "></i>
                        <i className="fas fa-star   "></i>
                        <i className="fas fa-star   "></i>
                      </label>
                    </div>
                  </div>
                  <div className="col-3 ">
                    <i
                      className="far fa-heart mb-1 fa-heart-show"
                      onclick="collect(this)"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 reviewStar-content">
              <div className="content">
                最少出團人數 2
                人，當參加人數未達上述規定的最少成團人數時，將取消旅遊行程，於出發日前
                1 天發出取消旅遊的 Email 通知。
              </div>
            </div>
          </div>
          <div className="col-md-3 journey-price  mt-md-4 ">
            <div className="row">
              <div className="col-7 col-md-12 d-md-flex justify-content-md-center">
                <p className="mt-3">TWD 3,110</p>
              </div>
              <div className="col-5 col-md-12 d-flex flex-md-column align-items-md-center justify-content-between ">
                <button className="td-btn-medium-w">詳細</button>
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
      </div>
    </>
  )
}

export default journetFilterResult
