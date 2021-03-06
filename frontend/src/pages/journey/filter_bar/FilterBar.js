import React from 'react'
import TribeCheckbox from './TribeCheckbox'
import Rating from '../../../component/Rating'

function FilterBar(props) {
  const {
    stars,
    setStars,
    starsTypes,
    tags,
    setTags,
    tagTypes,
    setTotalPage,
    setPerpage,
    slicedPosts,
  } = props

  //篩選後顯示頁面長度

  const newArray = new Array(
    slicedPosts
      .filter((product) => tags.includes(product.tribe))
      .filter((product) => stars.includes(product.rating))
      .map((product, i) => {})
  )

  //tag篩選
  const tagCheckHandler = (e) => {
    const value = e.target.value
    if (!tags.includes(value)) {
      return setTags([...tags, value])
    } else {
      const newTags = tags.filter((v) => v !== value)
      setTags(newTags)
    }
  }
  //star篩選
  const starCheckHandler = (e) => {
    const value = parseInt(e.target.value, 10)
    if (!stars.includes(value)) {
      return setStars([...stars, value])
    } else {
      const newStars = stars.filter((v) => v !== value)
      setStars(newStars)
    }
  }
  //改變perpage
  const handlePerPage = (e) => {
    setTotalPage(newArray[0].length)
    setPerpage(2)
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
            {tagTypes?.map((value, i) => (
              <TribeCheckbox
                key={i}
                value={value}
                checked={tags?.includes(value)}
                handleChecked={tagCheckHandler}
                pageClick={handlePerPage}
              >
                {value}
              </TribeCheckbox>
            ))}
          </div>
        </div>
        {/* <!-- 星等篩選 --> */}
        <div className="filter-stars">
          <div className="filter-stars-title col-2 position-relative">
            <p className="position-absolute text-white">星等</p>
          </div>
          {/* <!-- checkbox選項 --> */}
          <div className="filter-tribe-check my-auto d-flex flex-nowrap col-10">
            {starsTypes?.map((value, i) => (
              <TribeCheckbox
                key={i}
                value={value}
                checked={stars?.includes(value)}
                handleChecked={starCheckHandler}
                pageClick={handlePerPage}
              >
                <Rating rating={value} />
              </TribeCheckbox>
            ))}
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
                {tagTypes?.map((value, i) => (
                  <TribeCheckbox
                    key={i}
                    value={value}
                    checked={tags?.includes(value)}
                    handleChecked={tagCheckHandler}
                  >
                    {value}
                  </TribeCheckbox>
                ))}
              </div>
              {/* <!-- 星等 --> */}
              <div className="filter-star-rwd td-mb-25">
                <h2>星等</h2>
                {starsTypes?.map((value, i) => (
                  <TribeCheckbox
                    key={i}
                    value={value}
                    checked={stars?.includes(value)}
                    handleChecked={starCheckHandler}
                  >
                    <Rating rating={value} />
                  </TribeCheckbox>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FilterBar
