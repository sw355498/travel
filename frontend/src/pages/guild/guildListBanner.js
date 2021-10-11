import React, { useEffect, useState } from 'react'
// import guildListBanner1 from '/images/data/導遊banner/太巴塱導遊banner.jpg'
// import guildListBanner2 from '/images/data/導遊banner/奇美導遊banner.png'
// import guildListBanner3 from '/images/data/導遊banner/撒固兒導遊banner.jpg'
// import guildListBanner4 from '/images/data/導遊banner/水璉導遊banner.png'
// import guildListBanner5 from '/images/data/導遊banner/水璉導遊banner3.png'

import axios from 'axios'

function GuildListBanner() {
  // const [banner, setBanner] = useState(null)

  // useEffect(() => {
  //   const getNewGuilds = async () => {
  //     let res = await axios.get(`http://localhost:3001/Guild`, {
  //       withCredentials: true,
  //     })
  //     let data = res.data
  //     setBanner(data)
  //   }
  //   getNewGuilds()
  // }, [])

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
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
          className="dot-button"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/images/data/導遊banner/新社導遊banner.jpg"
            className="d-block w-100 img-fluid "
            alt="banner大圖"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/data/導遊banner/04.jpg"
            className="d-block w-100 img-fluid change"
            alt="banner大圖"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/data/導遊banner/撒固兒導遊banner.jpg"
            className="d-block w-100 img-fluid"
            alt="banner大圖"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/data/導遊banner/水璉導遊banner.png"
            className="d-block w-100 img-fluid"
            alt="banner大圖"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/data/導遊banner/水璉導遊banner.png"
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
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}
export default GuildListBanner
