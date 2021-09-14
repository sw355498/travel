import React from 'react'
import GuildListBanner from './guild_list_component/guildListBanner'
import GuildFilter from './guild_list_component/guildFilter'
import GuildResult from './guild_list_component/guildResultItem'
import GuildListPage from './guild_list_component/guildListPage'
import GuildNew from './guild_list_component/guildNew'
//CSS
import '../style/guild-alluse.css'
import '../style/guild-list.css'
import '../style/spacing.css'
import '../style/button.css'

function Guild() {
  return (
    <>
      <article>
        <GuildListBanner />
        <GuildFilter />
        <GuildResult />
        <GuildListPage />
        <GuildNew />
      </article>
    </>
  )
}

export default Guild
