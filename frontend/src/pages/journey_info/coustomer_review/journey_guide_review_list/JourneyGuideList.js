import React from 'react'
import JourneyGuideItem from './JourneyGuideItem'

function JourneyGuideList(props) {
  const { guidereviews, stars } = props
  return (
    <>
      {guidereviews
        .filter((guidereview) =>
          stars.some((star) => guidereview.rating.includes(star))
        )
        .map((guidereview, i) => {
          return <JourneyGuideItem Key={i} guidereview={guidereview} />
        })}
    </>
  )
}

export default JourneyGuideList
