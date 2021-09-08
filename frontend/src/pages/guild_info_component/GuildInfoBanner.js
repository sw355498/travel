import React from 'react'
import GuildInfoBanner1 from '../../data/水璉部落/導遊/導遊2.jpg'
import quote from '../../img/quotes.png'

function GuildInfoBanner() {
  return (
    <div className="guilddt-banner position-relative td-mt-75">
      <img
        className="img-fluid guilddt-banner-img"
        src={GuildInfoBanner1}
        alt="banner-img"
      />
      <div className="container guilddt-banner-content position-absolute d-flex">
        <img className="quote" src={quote} alt="" />
        <p className="guilddt-banner-text align-self-center">
          歡迎各位朋友來此部落觀光旅遊。大家叫我「瓦丹」。大家在此旅遊，可以把兩顆心交給我：一顆是「放心」；另一顆是「開心」，就交給瓦丹我，希望你會喜歡我的行程。
        </p>
      </div>
    </div>
  )
}
export default GuildInfoBanner
