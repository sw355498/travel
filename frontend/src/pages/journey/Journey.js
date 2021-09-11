import React from 'react'
import JourneyBanner from './banner/journeyBanner'
import Filterbar from './filter_bar/FilterBar'
import JourneyFilterResult from './filter_result/JourneyFillterResult'
import Pagination from './pagination/Pagination'
import '../../style/journey.css'

function Journey() {
  return (
    <>
      <JourneyBanner />
      <Filterbar />
      <JourneyFilterResult />
      <Pagination />
    </>
  )
}

export default Journey
