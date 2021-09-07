import React from 'react'
import journeyBanner1 from '../../data/小banner圖/靜浦-部落射箭體驗.jpg'
import journeyBanner2 from '../../data/小banner圖/水璉部落.png'
import journeyBanner3 from '../../data/小banner圖/太巴塱.jpg'
import journeyBanner4 from '../../data/撒固兒部落/大圖1.jpg'



function journeyBanner() {
  return (
    <section>
      <div className="container td-mt-75">
        <div
          id="carouselExampleIndicators"
          className="carousel slide carousel-fade "
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="3"
              aria-label="Slide 0"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={journeyBanner1}
                className="d-block w-100"
                alt="靜浦部落"
              />
            </div>
            <div className="carousel-item">
              <img
                src={journeyBanner2}
                className="d-block w-100"
                alt="水璉部落"
              />
            </div>
            <div className="carousel-item">
              <img
                src={journeyBanner3}
                className="d-block w-100"
                alt="太巴塱部落"
              />
            </div>
            <div className="carousel-item">
              <img
                src={journeyBanner4}
                className="d-block w-100"
                alt="太巴塱部落"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
    // <!-- banner end -->
  )
}

export default journeyBanner
