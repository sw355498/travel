import React from 'react'

function journeyDropdownFilter() {
  return (
    <div className="container filter-dropdown ">
      <div className="dropdown text-center">
        <button
          className="btn  dropdown-toggle btn-lg"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          快速篩選
        </button>
        <div className="dropdown-menu " aria-labelledby="dropdownMenuButton">
          <div className="mt-3 list ml-3">
            <h6 className="mt-3 mr-3 mb-3 fw-bold">搜尋部落:</h6>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="inlineCheckbox1"
                value="option1"
              />
              <label className="form-check-label" labelFor="inlineCheckbox1">
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
              <label className="form-check-label" labelFor="inlineCheckbox2">
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
              <label className="form-check-label" labelFor="inlineCheckbox2">
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
              <label className="form-check-label" labelFor="inlineCheckbox2">
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
              <label className="form-check-label" labelFor="inlineCheckbox2">
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
              <label className="form-check-label" labelFor="inlineCheckbox2">
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
              <label className="form-check-label" labelFor="inlineCheckbox2">
                馬太鞍部落
              </label>
            </div>
          </div>
          <div className="td-mt-25 ml-3">
            <div className="div d-flex flex-column">
              <div className="col-md-2">
                <h6>星等</h6>
              </div>
              <div className="col-md-10 col-12 d-flex flex-row flex-wrap ">
                <div className="form-check">
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
                    <label>
                      <i className="fas fa-star small-star mt-1 "></i>
                      <i className="fas fa-star small-star"></i>
                      <i className="fas fa-star small-star"></i>
                      <i className="fas fa-star   small-star"></i>
                      <i className="fas fa-star small-star"></i>{' '}
                    </label>
                  </label>
                </div>

                <div className="form-check ">
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
                    <label>
                      <i className="fas fa-star small-star  mt-1 "></i>
                      <i className="fas fa-star  small-star "></i>
                      <i className="fas fa-star  small-star "></i>
                      <i className="fas fa-star  small-star "></i>
                      <i className="far fa-star  small-star "></i>{' '}
                    </label>
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label className="form-check-label" for="flexRadioDefault1">
                    <label className="  ">
                      <i className="fas fa-star small-star  mt-1 "></i>
                      <i className="fas fa-star small-star  "></i>
                      <i className="fas fa-star  small-star "></i>
                      <i className="far fa-star  small-star "></i>
                      <i className="far fa-star small-star  "></i>{' '}
                    </label>
                  </label>
                </div>
                <div className="form-check">
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
                    <label>
                      <i className="fas fa-star small-star  mt-1 "></i>
                      <i className="fas fa-star small-star  "></i>
                      <i className="far fa-star small-star  "></i>
                      <i className="far fa-star  small-star "></i>
                      <i className="far fa-star small-star  "></i>{' '}
                    </label>
                  </label>
                </div>
                <div className="form-check">
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
                    <label>
                      <i className="fas fa-star small-star  mt-1 "></i>
                      <i className="far fa-star  small-star "></i>
                      <i className="far fa-star small-star  "></i>
                      <i className="far fa-star  small-star "></i>
                      <i className="far fa-star small-star  "></i>{' '}
                    </label>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default journeyDropdownFilter
