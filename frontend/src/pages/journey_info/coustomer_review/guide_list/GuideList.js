import React from 'react'
import GuideItem from './GuideItem'

function GuideList(props) {
  const { guidereviews, stars } = props
  return (
    <>
      {guidereviews
        .filter((guidereview) =>
          stars.some((star) => guidereview.rating.includes(star))
        )
        .map((guidereview, i) => {
          return <GuideItem Key={i} guidereview={guidereview} />
        })}
    </>
  )
}

export default GuideList
