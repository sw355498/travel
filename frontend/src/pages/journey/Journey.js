import React from 'react'
import JourneyBanner from './banner/journeyBanner'
import JourneyFilterResult from './filter_result/journeyFillterResult'
import Pagination from './pagination/Pagination'
import ScorllUp from '../../component/scrollUp'
import '../../style/journey.css'

function Journey() {
  return (
    <>
      <JourneyBanner />
      <JourneyFilterResult />
      <Pagination />
      <ScorllUp />
    </>
  )
}

export default Journey
