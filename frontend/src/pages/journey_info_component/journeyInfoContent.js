import React from 'react'

function journeyInfoContent() {
  return (
    <div className="container td-mt-75 journey-info">
      <div className="row d-flex align-content-md-between tb journey-intro">
        <div className="col-md-6 col-12 journey-info-name">
          <p>靜浦部落</p>
        </div>
        <div className="col-md-6 col-12 d-flex justify-content-md-end justify-content-center flex-column flex-md-row align-items-center">
          <i
            className="far fa-heart td-me-50 journey-info-like order-2 order-md-1"
            onclick="collect(this)"
          ></i>
          <p className="journey-info-price order-1 order-md-2">TWD 1,110 起</p>
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
            台灣&nbsp;|&nbsp;靜浦部落{' '}
          </div>
        </div>
      </div>

      <div className="d-flex flex-row bd-highlight td-mt-25 justify-content-center justify-content-md-start text-md-left text-center">
        <div className="p-2 bd-highlight text-center">
          {' '}
          <i className="far fa-clock icon"></i>
        </div>
        <div className="p-2 bd-highlight">
          <div className="text-title-size20 mt-1">
            行程長度：約 2.5小時（含著裝及解說時間，不含盥洗及接駁時間）
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 justify-content-center d-flex justify-content-md-start">
          <div className="d-flex flex-row bd-highlight td-mt-25 ">
            <div className="p-2 bd-highlight text-center">
              <i className="fas fa-globe"></i>
            </div>
            <div className="p-2 bd-highlight">
              <div className="text-title-size20 mt-1">中文導覽</div>
            </div>
          </div>
        </div>
        <div className="col-md-8 justify-content-center d-flex justify-content-md-start">
          <div className="d-flex flex-row bd-highlight td-mt-25">
            <div className="p-2 bd-highlight text-center">
              <i className="fas fa-motorcycle"></i>
            </div>
            <div className="p-2 bd-highlight">
              <div className="text-title-size20 mt-1">機車</div>
            </div>
          </div>
        </div>
      </div>
      <div className="journey-info-smalltitle td-mt-25">
        <p>一&nbsp;行程簡介&nbsp;一</p>
      </div>
      <div className="journey-info-smalltitle td-mt-25">
        <p>半日漁獵生活體驗:</p>
      </div>
      <div className="journey-info-smalltitle td-mt-25">
        <p>
          踏上膠筏，划向秀姑巒溪→岸邊找尋浪花蟹X八卦網捕魚體驗→部落神射手(射箭體驗){' '}
        </p>
      </div>
      <div className="journey-info-name mt-40">
        <p>商品說明</p>
      </div>

      <div className="journey-info-smalltitle td-mt-25">
        <p>一&nbsp;行程資訊&nbsp;一</p>
      </div>
      <div className="journey-info-smalltitle td-mt-25">
        <p> &nbsp;&nbsp;&nbsp;&nbsp;上午場-09：00 / 下午場-14：00</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;-花蓮靜浦部落集合</p>
        <p> &nbsp;&nbsp;&nbsp;&nbsp;開啟靜浦部落的半日漁獵生活體驗：</p>
        <p> →踏上膠筏，划向秀姑巒溪(約50分鐘)</p>
        <p> →岸邊找尋浪花蟹X八卦網捕魚體驗(約60分鐘)</p>
        <p> →部落神射手－射箭體驗(約40分鐘)</p>
      </div>

      <div className="journey-info-name td-mt-75 ">
        <p>商品說明</p>
      </div>
      <div className=" td-mt-25 ">
        <img
          src="/images/data/行程照片/靜浦-竹筏漫遊.jpg"
          className="journey-info-pic"
          alt=""
        />
      </div>
      <div className=" mt-10 journey-info-pic">
        <img
          src="/images/data/行程照片/靜浦-追花逐浪花蟹.jpg"
          className="journey-info-pic"
          alt=""
        />
      </div>
    </div>
  )
}

export default journeyInfoContent
