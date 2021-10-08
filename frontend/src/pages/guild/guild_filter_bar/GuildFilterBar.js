import React from 'react'
import Rating from '../../../component/Rating'
import TribeCheckboxGuild from './TribeCheckboxGuild'
import LanCheckboxGuild from './LanCheckboxGuild'
import StarCheckboxGuild from './StarCheckboxGuild'

function GuildFilterBar(props) {
  const {
    tags,
    setTags,
    tagTypes,
    lans,
    setLans,
    lanTypes,
    stars,
    setStars,
    starsTypes,
    setTotalPage,
    setPerpage,
    slicedPosts,
  } = props

  console.log(`###### tags: ${tags}`)
  console.log(`###### tagTypes: ${tagTypes}`)

  //篩選後顯示頁面長度

  // const newArray = new Array(
  //   slicedPosts
  //     .filter((guild) => guild.language.includes(lans))
  //     .filter((guild) => guild.tribe.includes(tags))
  //     .filter((guild) => guild.rating.includes(stars))

  //     .map((guild, i) => {})
  // )

  const newArray = new Array(
    slicedPosts
      .filter((guild) => tags.some((tag) => guild.tribe.includes(tag)))
      .filter((guild) => stars.some((star) => guild.rating.includes(star)))
      .filter((guild) => lans.some((lan) => guild.language.includes(lan)))
  )

  //部落
  const tagCheckHandler = (e) => {
    const value = e.target.value
    if (!tags.includes(value)) {
      return setTags([...tags, value])
    } else {
      const newTags = tags.filter((v) => v !== value)
      setTags(newTags)
    }
  }
  //語言
  const LanCheckHandler = (e) => {
    const value = e.target.value
    if (!lans.includes(value)) {
      return setLans([...lans, value])
    } else {
      const newLans = lans.filter((v) => v !== value)
      setLans(newLans)
    }
  }
  //星等
  const starCheckHandler = (e) => {
    const value = e.target.value
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
    setPerpage(3)
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
              <TribeCheckboxGuild
                key={i}
                value={value}
                checked={tags?.includes(value)}
                handleChecked={tagCheckHandler}
                pageClick={handlePerPage}
              >
                {value}
              </TribeCheckboxGuild>
            ))}
          </div>
        </div>
        {/* <!-- 語言篩選 --> */}
        <div class="filter-lan align-items-center">
          <div class="filter-lan-title col-2 position-relative">
            <p class="position-absolute text-white">語言</p>
          </div>
          {/* <!-- checkbox選項 --> */}
          <div class="filter-lan-check d-flex col-10">
            {lanTypes?.map((value, i) => (
              <LanCheckboxGuild
                key={i}
                value={value}
                checked={lans?.includes(value)}
                handleChecked={LanCheckHandler}
                pageClick={handlePerPage}
              >
                {value}
              </LanCheckboxGuild>
            ))}
          </div>
        </div>
        {/* <!-- 星等篩選 --> */}
        <div className="filter-stars">
          <div className="filter-stars-title col-2 position-relative">
            <p className="position-absolute text-white">星等</p>
          </div>
          {/* <!-- checkbox選項 --> */}
          <div className="filter-stars-check my-auto d-flex flex-nowrap col-10">
            {starsTypes?.map((value, i) => (
              <StarCheckboxGuild
                key={i}
                value={value}
                checked={stars?.includes(value)}
                handleChecked={starCheckHandler}
                pageClick={handlePerPage}
              >
                <Rating rating={value} />
              </StarCheckboxGuild>
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
              <div>
                {tagTypes?.map((value, i) => (
                  <TribeCheckboxGuild
                    key={i}
                    value={value}
                    checked={tags?.includes(value)}
                    handleChecked={tagCheckHandler}
                    pageClick={handlePerPage}
                  >
                    {value}
                  </TribeCheckboxGuild>
                ))}
              </div>
              {/* 語言 */}
              <div>
                {lanTypes?.map((value, i) => (
                  <LanCheckboxGuild
                    key={i}
                    value={value}
                    checked={lans?.includes(value)}
                    handleChecked={LanCheckHandler}
                    pageClick={handlePerPage}
                  >
                    {value}
                  </LanCheckboxGuild>
                ))}
              </div>
              {/* <!-- 星等 --> */}
              <div>
                <h2>星等</h2>
                {starsTypes?.map((value, i) => (
                  <StarCheckboxGuild
                    key={i}
                    value={value}
                    checked={stars?.includes(value)}
                    handleChecked={starCheckHandler}
                    pageClick={handlePerPage}
                  >
                    <Rating rating={value} />
                  </StarCheckboxGuild>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GuildFilterBar
