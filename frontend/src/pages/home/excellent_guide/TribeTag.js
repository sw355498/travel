import React from 'react'

function TribeTag({ card }) {
  const cardTribe = card.tribe
  const cardTribeSplit = cardTribe.split(',')

  return (
    <>
      <p className="smalltag">{cardTribeSplit[0]}</p>
    </>
  )
}

export default TribeTag
