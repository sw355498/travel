import React, { useState, useMemo } from 'react'
import JourneyinfoGuideCard from '../journeyinfo_guide_card/JourneyinfoGuideCard'
import Counter from '../Counter/Counter'

function GuideCard(props) {
  const { dateState, updateCartToLocalStorage } = props
  const [TribeForGuide] = useState(props.findResult)
  const [JourneyGuideInfo] = useState(props.JourneyGuideInfo)
  const JourneyGuideSelected = useMemo(
    () =>
      JourneyGuideInfo.filter((item) =>
        item.tribe.includes(TribeForGuide.tribe)
      ).slice(0, 3),
    [JourneyGuideInfo, TribeForGuide.tribe]
  )
  const [GuidesIdxSelected, setGuidesIdxSelected] = useState(0)
  //設定counter狀態
  const [count, setCount] = useState(0)

  return (
    <>
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
      <Counter count={count} setCount={setCount} />
      <div className="d-flex justify-content-center mt--2">
        <button
          className="btn journey-reservation-button"
          onClick={() => {
            updateCartToLocalStorage({
              id: props.findResult._id,
              name: props.findResult.name,
              amount: count + 1,
              img: props.findResult.journey_img,
              go_time: dateState,
              guild: JourneyGuideSelected[GuidesIdxSelected].name,
              price: props.findResult.price,
            })
          }}
        >
          加入購物車
        </button>
      </div>
    </>
  )
}

export default GuideCard
