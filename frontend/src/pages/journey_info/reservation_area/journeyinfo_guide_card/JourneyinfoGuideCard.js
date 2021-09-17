import React from 'react'
import Rating from '../../../../component/Rating'

function JourneyinfoGuideCard(props) {
  const { JourneyGuideInfo, guideChecked, setGuideChecked, TribeForGuide } =
    props

  const handlecheck = (e) => {
    if (setGuideChecked(!guideChecked)) {
    }
  }

  const JourneyGuideSelected = JourneyGuideInfo.filter(
    (item) => item.tribe === TribeForGuide.tribe
  ).slice(0, 3)

  return (
    <>
      {JourneyGuideSelected.map((value, i) => (
        <div className="card" onClick={handlecheck} key={i}>
          <div className="d-flex justify-content-lg-between">
            {guideChecked && <i className="far fa-check-circle m-3 "></i>}
            <p className="smalltag">{value.tribe}</p>
          </div>
          <img
            src="/images/data/奇美部落/導遊/導遊1.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{value.name}</h5>
            <Rating rating={value.rating} />
            <h5 className="journey-selectguide-title ">奇美部落一日遊</h5>
            <p className="card-text">
              讓奇美部落的勇士帶著你順著溪水一路說故事、撒網、抓蝦、野炊、玩耍、盡情融入阿美族文化與大自然嬉戲。讓你放鬆心情慢慢體會古老部落的文化智慧，以及大自然的驚奇。
            </p>
          </div>
        </div>
      ))}
    </>
  )
}

export default JourneyinfoGuideCard
