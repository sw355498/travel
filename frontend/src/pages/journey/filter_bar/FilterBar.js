import React from 'react'
import TribeCheckbox from './TribeCheckbox'
import StarFiltercheckbox from './StarFiltercheckbox'

function FilterBar(props) {
  const { star, setStar, starsTypes, tags, setTags, tagTypes } = props

  const handleChecked = (e) => {
    const value = e.target.value
    if (!tags.includes(value)) return setTags([...tags, value])
    if (tags.includes(value)) {
      const newTags = tags.fillter((v) => v !== value)
      setTags(newTags)
    }
  }
  const handleChecked2 = (v) => {
    const value = v.target.value
    if (!tags.includes(value)) return setStar([...star, value])
    if (tags.includes(value)) {
      const newStars = star.fillter((v) => v !== value)
      setStar(newStars)
    }
  }
  return (
    <section className="container guildlist-filter td-mb-75">
      {/* <!-- WEB版篩選 --> */}
      <div calss="guildlist-filter-web">
        <h2 className="guildlist-filter-title td-mt-50">快速篩選</h2>
        {/* <!-- 部落篩選 --> */}
        <div className="filter-tribe">
          <div className="filter-tribe-title col-2 position-relative">
            <p className="position-absolute text-white">部落</p>
          </div>
          {/* <!-- checkbox選項 --> */}
          <div className="filter-tribe-check col-10">
            {tagTypes.map((value, i) => (
              <TribeCheckbox
                key={i}
                value={value}
                tags={tags}
                handleChecked={handleChecked}
              />
            ))}
          </div>
        </div>
        {/* <!-- 星等篩選 --> */}
        {starsTypes.map((value, i) => (
          <StarFiltercheckbox
            key={i}
            value={value}
            star={star}
            handleChecked={handleChecked2}
          />
        ))}
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
                <TribeCheckbox />
              </div>
              {/* <!-- 星等 --> */}
              <div className="filter-star-rwd td-mb-25">
                <h2>星等</h2>
                <StarFiltercheckbox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FilterBar
