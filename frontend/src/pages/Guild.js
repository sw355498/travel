import React from 'react'
import qs from 'qs'
import GuildListBanner from './guild/guildListBanner'
import GuildFilterResult from './guild/guild_filter_result/GuildFilterResult'
import GuildNew from './guild/guildNew'
import { useLocation } from 'react-router-dom'
import ScrollToTop from 'react-scroll-to-top'
//CSS
import '../style/guild-alluse.css'
import '../style/guild-list.css'
import '../style/spacing.css'
import '../style/button.css'

function useQuery() {
  return qs.parse(useLocation().search.slice(1))
}
function Guild() {
  const query = useQuery()
  const { tribes, pageNum } = query
  return (
    <>
      <article>
        <GuildListBanner />
        <GuildFilterResult tribes={tribes} pageNum={parseInt(pageNum)} />
        <GuildNew />
        <ScrollToTop smooth />
      </article>
    </>
  )
}

export default Guild
