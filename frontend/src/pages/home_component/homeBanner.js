import React from 'react'
import Bannerimg from '../../img/花島（黑）.png'

function homeBanner() {
  return (
    <>
      <section className="banner">
        <div className="container ">
          <div className="row  d-flex align-items-center">
            <div className="col-md-5 ">
              <div className="banner-content d-flex flex-column">
                <img src={Bannerimg} alt="" className="whitebird img-fluid " />
                <h2 className="first-h2 text-center">感受生活</h2>
                <h2 className="first-h2 text-center">帶領你認識花蓮深入部落</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="dropdown text-center">
          <button
            className="btn btn-secondary dropdown-toggle btn-lg"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            快速搜尋
          </button>
          <form action="">
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <h6 className="ml-3">進階選項:</h6>
              <div className="mt-3 list ml-3">
                <h6 className="mt-3 mr-3 mb-3">搜尋部落:</h6>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label className="form-check-label" for="inlineCheckbox1">
                    太巴塱部落
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label className="form-check-label" for="inlineCheckbox2">
                    水璉部落{' '}
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label className="form-check-label" for="inlineCheckbox2">
                    奇美部落
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label className="form-check-label" for="inlineCheckbox2">
                    撒固兒部落
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label className="form-check-label" for="inlineCheckbox2">
                    靜浦部落
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label className="form-check-label" for="inlineCheckbox2">
                    新社部落
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label className="form-check-label" for="inlineCheckbox2">
                    馬太鞍部落
                  </label>
                </div>
              </div>
              <div className="mt-3 list ml-3 ">
                <h6 className="mt-3 mr-3 mb-3">選擇導遊語言:</h6>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="inlineCheckbox1"
                    value="option1"
                  />
                  <label
                    className="form-check-label"
                    labelFor="inlineCheckbox1"
                  >
                    中文
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="inlineCheckbox2"
                    value="option2"
                  />
                  <label
                    className="form-check-label"
                    labelFor="inlineCheckbox2"
                  >
                    英文{' '}
                  </label>
                </div>
              </div>
              <div className="text-center text-title-size24">
                {' '}
                <a
                  href="/page/guild/guild-list.html"
                  type="submit"
                  className="td-mt-25 td-mb-25 fw-bold"
                >
                  送出
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default homeBanner
