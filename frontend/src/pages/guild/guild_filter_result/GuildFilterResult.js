import React, { useState, useEffect, useMemo } from 'react'
import GuildFilterBar from '../guild_filter_bar/GuildFilterBar'
import GuildList from '../guild_list/guildList'
import axios from 'axios'
import GuildListPage from '../guildListPage'

function GuildFilterResult({ tribes, pageNum }) {
  const [displayGuilds, setDisplayGuilds] = useState(null)

  //分頁屬性
  const [totalPage, setTotalPage] = useState(14)
  const [currentPage, setCurrentPage] = useState(pageNum || 1)
  const [perPage, setPerpage] = useState(3)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  useEffect(() => {
    const getGuilds = async () => {
      let res = await axios.get(`http://localhost:3001/Guild`)
      let data = res.data
      setDisplayGuilds(data)
    }
    getGuilds()
  }, [])
  const [tags, setTags] = useState(tribes ? tribes : ['靜浦部落'])
  const [lans, setLans] = useState(['中文'])
  const [stars, setStars] = useState(['5'])
  const tagTypes = [
    '靜浦部落',
    '新社部落',
    '太巴塱部落',
    '水璉部落',
    '奇美部落',
    '馬太鞍部落',
    '撒固兒部落',
  ]
  const lanTypes = ['中文', '英文']
  const starsTypes = ['5', '4', '3', '2', '1']

  //spinner
  const spinner = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  const indexOfLastPost = currentPage * perPage
  const indexOfFirstPost = indexOfLastPost - perPage

  //嚴格選擇
  // const filteredPosts = useMemo(() =>
  //   displayGuilds
  //     ?.filter((guild) => guild.tribe.includes(tags))
  //     ?.filter((guild) => guild.rating.includes(stars))
  //     ?.filter((guild) => guild.language.includes(lans))
  // )

  const filteredPosts = useMemo(() =>
    displayGuilds
      ?.filter((guild) => tags.some((tag) => guild.tribe.includes(tag)))
      ?.filter((guild) => stars.some((star) => guild.rating.includes(star)))
      ?.filter((guild) => lans.some((lan) => guild.language.includes(lan)))
  )

  const slicedPosts = useMemo(
    () => filteredPosts?.slice(indexOfFirstPost, indexOfLastPost),
    [filteredPosts, indexOfFirstPost, indexOfLastPost]
  )

  return (
    <>
      {displayGuilds ? (
        <>
          <GuildFilterBar
            tagTypes={tagTypes}
            tags={tags}
            setTags={setTags}
            lanTypes={lanTypes}
            lans={lans}
            setLans={setLans}
            stars={stars}
            setStars={setStars}
            starsTypes={starsTypes}
            totalPosts={totalPage}
            setTotalPage={setTotalPage}
            setPerpage={setPerpage}
            slicedPosts={slicedPosts}
          />

          <div className="container td-mt-75 filter-resultcontainer ">
            <GuildList
              tags={tags}
              lans={lans}
              stars={stars}
              guilds={slicedPosts}
              // handleClick={getGuilds()}
            />
          </div>

          <GuildListPage
            perPage={perPage}
            totalPosts={filteredPosts.length}
            currentPage={currentPage}
            tribes={tags}
            paginate={paginate}
            setCurrentPage={setCurrentPage}
          />
        </>
      ) : (
        <div>{spinner}</div>
      )}
    </>
  )
}

export default GuildFilterResult
