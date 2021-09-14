import React from 'react'
import GuildListBanner from './guild/guildListBanner'
import GuildFilterResult from './guild/guild_filter_result/GuildFilterResult'
import GuildListPage from './guild/guildListPage'
import GuildNew from './guild/guildNew'
import { useLocation } from 'react-router-dom'
import ScrollToTop from 'react-scroll-to-top'
//CSS
import '../style/guild-alluse.css'
import '../style/guild-list.css'
import '../style/spacing.css'
import '../style/button.css'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}
function Guild() {
  const query = useQuery()
  const tribe = query.get('tribe')
  return (
    <>
      <article>
        <GuildListBanner />
        <GuildFilterResult tribe={tribe} />
        <GuildListPage />
        <GuildNew />
        <ScrollToTop smooth />
      </article>
    </>
  )
}

export default Guild
