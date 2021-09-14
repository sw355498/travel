import React from 'react'
import GuildInfoBanner from './guild_info/GuildInfoBanner'
import GuildIntro from './guild_info/GuildIntro'
import GuildJourney from './guild_info/GuildJourney'
import GuildReview from './guild_info/GuildReview'
import GuildListPage from './guild/guildListPage'
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
        <GuildListPage />
      </article>
    </>
  )
}

export default GuildInfo
