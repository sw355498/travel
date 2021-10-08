import React from 'react'
import ScrollToTop from 'react-scroll-to-top'
import JourneyBanner from './banner/JourneyBanner'
import JourneyFilterResult from './filter_result/journeyFillterResult'
import '../../style/journey.css'
import { useLocation } from 'react-router-dom'
import qs from 'qs'

function useQuery() {
  return qs.parse(useLocation().search.slice(1))
}

function Journey() {
  const query = useQuery()
  const { tribes, pageNum } = query
  return (
    <>
      <JourneyBanner />
      <JourneyFilterResult tribes={tribes} pageNum={parseInt(pageNum)} />
      <ScrollToTop smooth />
    </>
  )
}

export default Journey
