import React from 'react'
import ScrollToTop from 'react-scroll-to-top'
import JourneyBanner from './banner/journeyBanner'
import JourneyFilterResult from './filter_result/journeyFillterResult'
import Pagination from './pagination/Pagination'
import '../../style/journey.css'
import { useLocation } from 'react-router-dom'

import qs from "qs"

function useQuery() {
  return qs.parse(useLocation().search.slice(1))
}

function Journey() {
  const query = useQuery()
  const {tribes} = query
  return (
    <>
      <JourneyBanner />
      <JourneyFilterResult tribes={tribes} />
      <Pagination />
      <ScrollToTop smooth />
    </>
  )
}

export default Journey
