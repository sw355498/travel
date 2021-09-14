import React from 'react'
import guildListBanner1 from '../../data/奇美部落/大圖/奇美部落大圖1.png'
import guildListBanner2 from '../../data/奇美部落/大圖/奇美部落大圖2.png'
import guildListBanner3 from '../../data/奇美部落/大圖/奇美部落大圖3.png'

function GuildListBanner() {
  return (
    <div
      id="carouselExampleIndicators"
      className="container guildlist-banner  carousel slide td-mt-75 td-mb-75"
      data-bs-ride="carousel"
      da-bs-touch="ture"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active dot-button"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          className="dot-button"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          className="dot-button"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={guildListBanner1}
            className="d-block w-100 img-fluid "
            alt="banner大圖"
          />
        </div>
        <div className="carousel-item">
          <img
            src={guildListBanner2}
            className="d-block w-100 img-fluid"
            alt="banner大圖"
          />
        </div>
        <div className="carousel-item">
          <img
            src={guildListBanner3}
            className="d-block w-100 img-fluid"
            alt="banner大圖"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true">
          <i className="fas fa-chevron-left text-center "></i>
        </span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true">
          <i className="fas fa-chevron-right text-center"></i>
        </span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
export default GuildListBanner
