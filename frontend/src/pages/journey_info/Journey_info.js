import React from 'react'
import JourneyBanner from '../journey/banner/journeyBanner'
import JourneyInfoContent from './content/journeyInfoContent'
import JourneyReservationArea from './reservation_area/journeyReservationArea'
import JourneyShoppingNote from './shopping_notes/journeyShoppingNote'
import JourneyCoustomerReview from './coustomer_review/journeyCoustomerReview'
import Pagination from '../journey/pagination/Pagination'
import ScrollUp from '../../component/scrollUp'
import '../../style/journey-info.css'
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
