import React, { useState, useEffect, useCallback } from 'react'
import GuildFilterBar from '../guild_filter_bar/GuildFilterBar'
import GuildList from '../guild_list/guildList'
// import GuildData from '../../../data/guildData'
// import axios from 'axios'
import API from '../../../api/index'

function GuildFilterResult({ tribes }) {
  // const [guilds, setGuilds] = useState(GuildData)
  const [displayGuilds, setDisplayGuilds] = useState(null)

  const fetchAndUpdateGuilds = useCallback(async () => {
    API.fetchGuilds().then(setDisplayGuilds)
  }, [])

  useEffect(() => {
    fetchAndUpdateGuilds()
  }, [fetchAndUpdateGuilds])

  // const [error, setError] = useState(null)
  const [tags, setTags] = useState(tribes ? tribes : ['靜浦部落'])
  const [lans, setLans] = useState(['中文'])
  const [stars, setStars] = useState(['5'])
  const tagTypes = [
    '靜浦部落',
    '新社部落',
    '太巴塱部落',
    '水璉部落',
    '奇美部落',
    '奇萊雅部落',
    '撒固兒部落',
  ]
  const lanTypes = ['中文', '英文']
  const starsTypes = ['5', '4', '3', '2', '1']

  const spinner = (
    <>
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </>
  )

  return (
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
      />
      {displayGuilds ? (
        <div className="container td-mt-75 filter-resultcontainer ">
          <GuildList
            tags={tags}
            lans={lans}
            stars={stars}
            guilds={displayGuilds}
            // handleClick={fetchAndUpdateGuilds}
          />
        </div>
      ) : (
        <div>{spinner}</div>
      )}
    </>
  )
}

export default GuildFilterResult
