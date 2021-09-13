import React from 'react'
import ScrollToTop from 'react-scroll-to-top'
import JourneyBanner from './banner/journeyBanner'
import JourneyFilterResult from './filter_result/JourneyFillterResult'
import Pagination from './pagination/Pagination'
import '../../style/journey.css'
import { useLocation } from 'react-router-dom'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

function Journey() {
  const query = useQuery()
  const tribe = query.get('tribe')
  return (
    <>
      <JourneyBanner />
      <JourneyFilterResult tribe={tribe} />
      <Pagination />
      <ScrollToTop smooth />
    </>
  )
}

export default Journey
