import React from 'react'
import Rating from '../../../../component/Rating'

function JourneyinfoGuideCard(props) {
  const { guideChecked, handleClick, card, TribeForGuide } = props
  const cardTribe = card.tribe
  const cardTribeSplit = cardTribe.split(',')
  console.log(cardTribeSplit)
  const cardfilterResult = cardTribeSplit.filter((item) =>
    item.includes(TribeForGuide.tribe)
  )
  return (
    <div className="card" onClick={handleClick}>
      <div className="d-flex justify-content-lg-between">
        {guideChecked && <i className="far fa-check-circle m-3 "></i>}
        <p className="smalltag">{cardfilterResult}</p>
      </div>
      <img
        src={`/images/data/導遊圖片/${card.avatar}`}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{card.name}</h5>
        <Rating rating={card.rating} />
        <h5 className="journey-selectguide-title ">{card.journey_name}</h5>
        <p className="card-text">{card.intro}</p>
      </div>
    </div>
  )
}

export default JourneyinfoGuideCard
