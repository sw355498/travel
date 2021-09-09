import React from 'react'
import JourneyBanner from './banner/journeyBanner'
import JourneyFilter from './filter/journeyFilter'
import JourneyDropdownFilter from './dropdown_filter/journeyDropdownFilter'
import JournetFilterResult from './filter_result/journetFilterResult'
import Pagination from './pagination/Pagination'
import ScorllUp from '../../component/scrollUp'
import '../../style/journey.css'

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
