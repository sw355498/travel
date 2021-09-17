import React, { useState } from 'react'
import JourneyGuideList from './journey_guide_list/JourneyGuideList'
import DropdownFilter from './filter_dropdown/DropdownFilter'
import Review from './Review'

function JourneyCoustomerReview() {
  const [guidereviews] = useState(Review)
  const [stars, setStars] = useState(['5'])
  const starsTypes = ['5', '4', '3', '2', '1']

  return (
    <>
      <div className="container td-mt-75 coustomerreview ">
        <div className="col-12 d-flex justify-content-between">
          <div className="journey-info-name ">
            <p>旅客評價</p>
          </div>
          <DropdownFilter
            stars={stars}
            setStars={setStars}
            starsTypes={starsTypes}
          />
        </div>
      </div>
      <JourneyGuideList guidereviews={guidereviews} stars={stars} />
    </>
  )
}

export default JourneyCoustomerReview
