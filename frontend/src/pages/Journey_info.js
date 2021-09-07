import React from 'react'
import JourneyBanner from './journey_component/journeyBanner'
import JourneyInfoContent from './journey_info_component/journeyInfoContent'
import JourneyReservationArea from './journey_info_component/journeyReservationArea'
import JourneyShoppingNote from './journey_info_component/journeyShoppingNote'
import JourneyCoustomerReview from './journey_info_component/journeyCoustomerReview'
import Pagination from './journey_component/Pagination'
import ScrollUp from '../component/scrollUp'
import '../style/journey-info.css'
function Journey_info() {
  return (
    <>
      <JourneyBanner />
      <JourneyInfoContent />
      <JourneyReservationArea />
      <JourneyShoppingNote />
      <JourneyCoustomerReview />
      <Pagination />
      <ScrollUp />
    </>
  )
}

export default Journey_info
