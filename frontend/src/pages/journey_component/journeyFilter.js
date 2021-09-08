import React from 'react'

function journeyFilter() {
  return (
    <section>
      <div className="container td-mt-75 filter">
        <h5 className="page-title">快速篩選</h5>
        <div className="td-mt-25">
          <div className="div d-flex filter-border">
            <div className="col-2 filter-title">
              <p className="text-center">部落</p>
            </div>
            <div className="col-10 d-flex flex-row flex-wrap filter-radio mt-3">
              <div className="form-check  td-ml-25">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className="form-check-label"
                  labelFor="flexRadioDefault1"
                >
                  <p>靜浦部落</p>
                </label>
              </div>
              <div className="div"></div>
              <div className="form-check td-ml-50">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className="form-check-label"
                  labelFor="flexRadioDefault1"
                >
                  <p>新社部落</p>
                </label>
              </div>
              <div className="form-check td-ml-50">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className="form-check-label"
                  labelFor="flexRadioDefault1"
                >
                  <p>太巴塱部落</p>
                </label>
              </div>
              <div className="form-check td-ml-50">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className="form-check-label"
                  labelFor="flexRadioDefault1"
                >
                  <p>撒固兒部落</p>
                </label>
              </div>
              <div className="form-check td-ml-50">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className="form-check-label"
                  labelFor="flexRadioDefault1"
                >
                  <p>馬太鞍部落</p>
                </label>
              </div>
              <div className="form-check td-ml-50">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className="form-check-label"
                  labelFor="flexRadioDefault1"
                >
                  <p>水璉部落</p>
                </label>
              </div>
              <div className="form-check td-ml-25">
                <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                />
                <label
                  className="form-check-label"
                  labelFor="flexRadioDefault1"
                >
                  <p>奇美部落</p>
                </label>
              </div>
            </div>
          </div>
          <div className="td-mt-25  filter-border filter-bystar">
            <div className="div d-flex">
              <div className="col-2 filter-title ">
                <p className="text-center">星等</p>
              </div>
              <div className="col-10 d-flex flex-row flex-wrap my-3">
                <div className="form-check td-ml-25">
                  <input
                    className="form-check-input "
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                    checked
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    <i className="fas fa-star mt-1"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>{' '}
                  </label>
                </div>
                <div className="div"></div>
                <div className="form-check td-ml-50">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    <i className="fas fa-star   mt-1"></i>
                    <i className="fas fa-star  "></i>
                    <i className="fas fa-star  "></i>
                    <i className="fas fa-star  "></i>
                    <i className="far fa-star  "></i>{' '}
                  </label>
                </div>
                <div className="form-check td-ml-50">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    <i className="fas fa-star   mt-1"></i>
                    <i className="fas fa-star  "></i>
                    <i className="fas fa-star  "></i>
                    <i className="far fa-star  "></i>{' '}
                    <i className="far fa-star  "></i>
                  </label>
                </div>
                <div className="form-check td-ml-50 ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    <i className="fas fa-star   mt-1"></i>
                    <i className="fas fa-star  "></i>
                    <i className="far fa-star  "></i>{' '}
                    <i className="far fa-star  "></i>{' '}
                    <i className="far fa-star  "></i>
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

export default journeyFilter
