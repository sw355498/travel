import React from 'react'

function journeyReservationArea() {
  return (
    <div class="journey-reservationarea-container td-mt-75 ">
      <div class="necessary"></div>
      <div class="container">
        <div class="journey-info-name ">
          <p>預約日期</p>
        </div>
        <div class="row td-mt-25">
          <div class="col-6">
            <input type="date" id="picker" class="form-control" />
          </div>
          <div class="col-6">
            <input type="date" id="picker" class="form-control" />
          </div>
        </div>
        <div class="journey-info-name td-mt-75">
          <p>選擇導遊</p>
        </div>
        <div class="row journey-selectguide d-flex align-content-between">
          <div class="col-4  text-center">
            <div class="card">
              <p class="smalltag">奇美部落</p>
              <img
                src="/data/奇美部落/導遊/導遊1.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">雅馨</h5>
                <div>
                  {' '}
                  <i class="fas fa-star small-star "></i>
                  <i class="fas fa-star small-star "></i>
                  <i class="fas fa-star small-star "></i>
                  <i class="fas fa-star small-star "></i>
                  <i class="fas fa-star small-star "></i>{' '}
                </div>
                <h5 class="journey-selectguide-title ">奇美部落一日遊</h5>
                <p class="card-text">
                  {' '}
                  讓奇美部落的勇士帶著你順著溪水一路說故事、撒網、抓蝦、野炊、玩耍、盡情融入阿美族文化與大自然嬉戲。讓你放鬆心情慢慢體會古老部落的文化智慧，以及大自然的驚奇。
                </p>
                <button href="#" class="btn td-btn-large-o td-mt-25">
                  選擇
                </button>
              </div>
            </div>
          </div>
          <div class="col-4 text-center d-flex justify-content-center">
            <div class="card">
              <p class="smalltag">奇美部落</p>
              <img
                src="/data/奇美部落/導遊/導遊1.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">雅馨</h5>
                <div>
                  {' '}
                  <i class="fas fa-star small-star "></i>
                  <i class="fas fa-star small-star "></i>
                  <i class="fas fa-star small-star "></i>
                  <i class="fas fa-star small-star "></i>
                  <i class="fas fa-star small-star "></i>{' '}
                </div>
                <h5 class="journey-selectguide-title ">奇美部落一日遊</h5>
                <p class="card-text">
                  {' '}
                  讓奇美部落的勇士帶著你順著溪水一路說故事、撒網、抓蝦、野炊、玩耍、盡情融入阿美族文化與大自然嬉戲。讓你放鬆心情慢慢體會古老部落的文化智慧，以及大自然的驚奇。
                </p>
                <button href="#" class="btn td-btn-large-o td-mt-25">
                  選擇
                </button>
              </div>
            </div>
          </div>
          <div class="col-4 text-center  d-flex justify-content-end">
            <div class="card">
              <p class="smalltag">奇美部落</p>
              <img
                src="/data/奇美部落/導遊/導遊1.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title mb-2">雅馨</h5>
                <div>
                  {' '}
                  <i class="fas fa-star small-star "></i>
                  <i class="fas fa-star small-star "></i>
                  <i class="fas fa-star small-star "></i>
                  <i class="fas fa-star small-star "></i>
                  <i class="fas fa-star small-star "></i>{' '}
                </div>
                <h5 class="journey-selectguide-title ">奇美部落一日遊</h5>
                <p class="card-text">
                  {' '}
                  讓奇美部落的勇士帶著你順著溪水一路說故事、撒網、抓蝦、野炊、玩耍、盡情融入阿美族文化與大自然嬉戲。讓你放鬆心情慢慢體會古老部落的文化智慧，以及大自然的驚奇。
                </p>
                <button href="#" class="btn td-btn-large-o td-mt-25">
                  選擇
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center mt--2">
          <button class="btn journey-reservation-button ">加入購物車</button>
        </div>
      </div>
    </div>
  )
}

export default journeyReservationArea
