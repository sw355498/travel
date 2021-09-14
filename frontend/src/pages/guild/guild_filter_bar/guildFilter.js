import React from 'react'

function GuildFilter() {
  return (
    // <!-- 篩選 -->
    <section className="container guildlist-filter td-mb-75">
      {/* <!-- WEB版篩選 --> */}
      <div calss="guildlist-filter-web">
        <h2 className="guildlist-filter-title">快速篩選</h2>
        {/* <!-- 部落篩選 --> */}
        <div className="filter-tribe">
          <div className="filter-tribe-title col-2 position-relative">
            <p className="position-absolute text-white">部落</p>
          </div>
          {/* <!-- checkbox選項 --> */}
          <div className="filter-tribe-check col-10">
            <div className="">
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
                name="tribeCheckInput2"
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
                id="tribeCheckInput3"
                value=""
              />
              <label className="tribe-check-label" for="tribeCheckInput3">
                太巴塱部落
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="tribe-check-input position-relative"
                name="tribeCheckInput"
                id="tribeCheckInput4"
                value=""
              />
              <label className="tribe-check-label" for="tribeCheckInput4">
                撒固兒部落
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="tribe-check-input position-relative"
                name="tribeCheckInput"
                id="tribeCheckInput5"
                value=""
              />
              <label className="tribe-check-label" for="tribeCheckInput5">
                馬太鞍部落
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="tribe-check-input position-relative"
                name="tribeCheckInput"
                id="tribeCheckInput6"
                value=""
              />
              <label className="tribe-check-label" for="tribeCheckInput6">
                水璉部落
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="tribe-check-input position-relative"
                name="tribeCheckInput"
                id="tribeCheckInput7"
                value=""
              />
              <label className="tribe-check-label" for="tribeCheckInput7">
                奇美部落
              </label>
            </div>
          </div>
        </div>
        {/* <!-- 語言篩選 --> */}
        <div className="filter-lan align-items-center">
          <div className="filter-lan-title col-2 position-relative">
            <p className="position-absolute text-white">語言</p>
          </div>
          <div className="filter-lan-check d-flex col-10">
            <div>
              <input
                type="checkbox"
                className="lan-check-input position-relative"
                name="lanCheckInput"
                id="lanCheckInput1"
                value=""
              />
              <label className="lan-check-label" for="lanCheckInput1">
                中文
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                className="lan-check-input position-relative"
                name="lanCheckInput"
                id="lanCheckInput2"
                value=""
              />
              <label className="lan-check-label" for="lanCheckInput2">
                英文
              </label>
            </div>
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
            {/* <!-- 語言 --> */}
            <div className="filter-lan-rwd td-mb-25">
              <h2>導遊語言</h2>
              <div className="filter-lan-check d-flex col-10">
                <div>
                  <input
                    type="checkbox"
                    className="lan-check-input position-relative"
                    name="lanCheckInput"
                    id="lanCheckInput"
                    value=""
                  />
                  <label className="lan-check-label" for="lanCheckInput">
                    中文
                  </label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    className="lan-check-input position-relative"
                    name="lanCheckInput"
                    id="lanCheckInput"
                    value=""
                  />
                  <label className="lan-check-label" for="lanCheckInput">
                    英文
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
  )
}
export default GuildFilter
