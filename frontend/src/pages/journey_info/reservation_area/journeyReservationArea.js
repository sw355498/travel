import React from 'react'
function journeyReservationArea(props) {
  return (
    <div className="journey-reservationarea-container td-mt-75 ">
      <div className="necessary"></div>
      <div className="container">
        <div className="journey-info-name ">
          <p>預約日期</p>
        </div>
        <div className="row td-mt-25">
          <div className="col-6">
            <input type="date" id="picker" className="form-control" />
          </div>
          <div className="col-6">
            <input type="date" id="picker" className="form-control" />
          </div>
        </div>
        <div className="journey-info-name td-mt-75">
          <p>選擇導遊</p>
        </div>
        <div className="row journey-selectguide d-flex align-content-between">
          <div className="col-4  text-center">
            <div className="card">
              <p className="smalltag">奇美部落</p>
              <img
                src="/images/data/奇美部落/導遊/導遊1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">雅馨</h5>
                <div>
                  {' '}
                  <i className="fas fa-star small-star "></i>
                  <i className="fas fa-star small-star "></i>
                  <i className="fas fa-star small-star "></i>
                  <i className="fas fa-star small-star "></i>
                  <i className="fas fa-star small-star "></i>{' '}
                </div>
                <h5 className="journey-selectguide-title ">奇美部落一日遊</h5>
                <p className="card-text">
                  {' '}
                  讓奇美部落的勇士帶著你順著溪水一路說故事、撒網、抓蝦、野炊、玩耍、盡情融入阿美族文化與大自然嬉戲。讓你放鬆心情慢慢體會古老部落的文化智慧，以及大自然的驚奇。
                </p>
                <button href="#" className="btn td-btn-large-o td-mt-25">
                  選擇
                </button>
              </div>
            </div>
          </div>
          <div className="col-4 text-center d-flex justify-content-center">
            <div className="card">
              <p className="smalltag">奇美部落</p>
              <img
                src="/images/data/奇美部落/導遊/導遊1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">雅馨</h5>
                <div>
                  {' '}
                  <i className="fas fa-star small-star "></i>
                  <i className="fas fa-star small-star "></i>
                  <i className="fas fa-star small-star "></i>
                  <i className="fas fa-star small-star "></i>
                  <i className="fas fa-star small-star "></i>{' '}
                </div>
                <h5 className="journey-selectguide-title ">奇美部落一日遊</h5>
                <p className="card-text">
                  {' '}
                  讓奇美部落的勇士帶著你順著溪水一路說故事、撒網、抓蝦、野炊、玩耍、盡情融入阿美族文化與大自然嬉戲。讓你放鬆心情慢慢體會古老部落的文化智慧，以及大自然的驚奇。
                </p>
                <button href="#" className="btn td-btn-large-o td-mt-25">
                  選擇
                </button>
              </div>
            </div>
          </div>
          <div className="col-4 text-center  d-flex justify-content-end">
            <div className="card">
              <p className="smalltag">奇美部落</p>
              <img
                src="/images/data/奇美部落/導遊/導遊1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title mb-2">雅馨</h5>
                <div>
                  {' '}
                  <i className="fas fa-star small-star "></i>
                  <i className="fas fa-star small-star "></i>
                  <i className="fas fa-star small-star "></i>
                  <i className="fas fa-star small-star "></i>
                  <i className="fas fa-star small-star "></i>{' '}
                </div>
                <h5 className="journey-selectguide-title ">奇美部落一日遊</h5>
                <p className="card-text">
                  {' '}
                  讓奇美部落的勇士帶著你順著溪水一路說故事、撒網、抓蝦、野炊、玩耍、盡情融入阿美族文化與大自然嬉戲。讓你放鬆心情慢慢體會古老部落的文化智慧，以及大自然的驚奇。
                </p>
                <button href="#" className="btn td-btn-large-o td-mt-25">
                  選擇
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center mt--2">
          <button className="btn journey-reservation-button ">
            加入購物車
          </button>
        </div>
      </div>
    </div>
  )
}

export default journeyReservationArea
