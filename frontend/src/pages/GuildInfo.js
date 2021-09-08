import React from 'react'
import GuildInfoBanner from './guild_info_component/GuildInfoBanner'
import GuildIntro from './guild_info_component/GuildIntro'
//CSS
import '../style/guild-alluse.css'
import '../style/guild-intro.css'
import '../style/spacing.css'
import '../style/button.css'

function GuildInfo() {
  return (
    <>
      <article class="container guild-dt td-mb-25">
        <GuildInfoBanner />
        <GuildIntro />
      </article>
    </>
  )
}

export default GuildInfo
