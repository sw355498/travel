import React from 'react'
import { Link } from 'react-router-dom'
import Rating from '../../../component/Rating'

function ExcellentGuideCard(props) {
  const { JourneyGuideInfo } = props
  const limitGuideDispalynum = JourneyGuideInfo.slice(0, 3)
  console.log(limitGuideDispalynum.id)
  return (
    <>
    
      {limitGuideDispalynum.map((value, i) => (
        <div className="card d-flex guide-figure" key={i}>
          <p className="smalltag">{value.tribe}</p>
          <div className="row justify-content-lg-start ">
            <div className="col-lg-5 col-md-12 mt-3 ">
              <div className="d-flex flex-column align-content-md-between">
                <div className="row d-flex flex-column align-content-md-stretch m-auto">
                  <div className="col">
                    <img
                      src="/images/data/奇美部落/導遊/導遊1.jpg"
                      className="card-img-top"
                      alt="奇美導遊"
                    />
                  </div>
                  <div className="col-12">
                    <h5>{value.name}</h5>
                  </div>
                  <div className="col-12 mb-2">
                    <Rating rating={value.rating} className="small-star" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 justify-content-between">
              <div className="card-body">
                <h5 className="card-title text-center mt-xxl-2">
                  奇美部落一日遊
                </h5>
                <p className="card-text text-center">{value.intro}</p>
                <Link to={`GuildInfo/${value.id}`} className="btn">
                  預約
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default ExcellentGuideCard
