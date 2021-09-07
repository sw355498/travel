import React from 'react'
import JourneyBanner from './journey_component/journeyBanner'
import JourneyFilter from './journey_component/journeyFilter'
import JourneyDropdownFilter from './journey_component/journeyDropdownFilter'
import JournetFilterResult from './journey_component/journetFilterResult'
import Pagination from './journey_component/Pagination'
import ScorllUp from '../component/scrollUp'
function Journey() {
  return (
    <>
      <JourneyBanner />
      <JourneyFilter />
      <JourneyDropdownFilter />
      <JournetFilterResult />
      <Pagination />
      <ScorllUp />
    </>
  )
}

export default Journey
