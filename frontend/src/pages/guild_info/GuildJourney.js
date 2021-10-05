// import { object } from 'prop-types'
import React, { useState, useMemo } from 'react'
import GuildJourneyItem from './GuildJourneyItem'

function GuildJourney(props) {
  const { guildJourney } = props

  const { guildData } = props
  const [tribeForJourney] = useState(props.guildData)

  const [guildJourneyItem] = useState(props.guildJourney)

  const guildJourneySelect = useMemo(
    () =>
      guildJourneyItem.filter(
        (obj) =>
          obj.tribe === `${tribeForJourney.tribe.split(',')[0]}` ||
          obj.tribe === `${tribeForJourney.tribe.split(',')[1]}` ||
          obj.tribe === `${tribeForJourney.tribe.split(',')[2]}`
      ),
    [guildJourneyItem, tribeForJourney.tribe]
  )

  return (
    <>
      <section className="guild-journey td-mb-75 d-flex flex-column">
        <h1 className="guild-journey-title">體驗行程</h1>
        {guildJourneySelect.map((card, idx) => (
          <GuildJourneyItem
            key={idx}
            card={card}
            // guildData={guildData}
            guildJourneyItem={guildJourneyItem}
            tribeForJourney={tribeForJourney}
          />
        ))}
      </section>
    </>
  )
}

export default GuildJourney
