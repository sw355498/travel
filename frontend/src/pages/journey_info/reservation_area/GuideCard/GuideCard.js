import React, { useState, useMemo } from 'react'
import JourneyinfoGuideCard from '../journeyinfo_guide_card/JourneyinfoGuideCard'

function GuideCard(props) {
  const [TribeForGuide] = useState(props.findResult)
  const [JourneyGuideInfo] = useState(props.JourneyGuideInfo)
  const JourneyGuideSelected = useMemo(
    () =>
      JourneyGuideInfo.filter(
        (item) => item.tribe === TribeForGuide.tribe
      ).slice(0, 3),
    [JourneyGuideInfo, TribeForGuide.tribe]
  )
  const [GuidesIdxSelected, setGuidesIdxSelected] = useState(0)

  return (
    <div className="row journey-selectguide d-flex align-content-between">
      <div className="col-md-12   text-center d-flex justify-content-md-evenly flex-column align-items-center flex-md-row">
        {JourneyGuideSelected.map((card, idx) => (
          <JourneyinfoGuideCard
            key={idx}
            guideChecked={idx === GuidesIdxSelected}
            handleClick={() => setGuidesIdxSelected(idx)}
            card={card}
          />
        ))}
      </div>
    </div>
  )
}

export default GuideCard
