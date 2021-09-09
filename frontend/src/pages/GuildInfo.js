import React from 'react'
import GuildInfoBanner from './guild_info_component/GuildInfoBanner'
import GuildIntro from './guild_info_component/GuildIntro'
import GuildJourney from './guild_info_component/GuildJourney'
import GuildReview from './guild_info_component/GuildReview'
// import GuildListPage from './guild_list_component/guildListPage'
//CSS
import '../style/guild-alluse.css'
import '../style/guild-intro.css'
import '../style/spacing.css'
import '../style/button.css'
import '../style/guild-intro.css'

function GuildInfo() {
  return (
    <>
      <article className="container guild-dt td-mb-25">
        <GuildInfoBanner />
        <GuildIntro />
        <GuildJourney />
        <GuildReview />
        {/* <GuildListPage /> */}
      </article>
    </>
  )
}

export default GuildInfo
