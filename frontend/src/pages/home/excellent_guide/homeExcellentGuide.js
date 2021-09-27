import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import API from '../../../api'
import ExcellentGuideCard from './ExcellentGuideCard'
import FirstCard from './FirstCard'

function HomeExcellentGuide() {
  const [JourneyGuideInfo, setJourneyGuideInfo] = useState(null)
  useEffect(() => {
    API.fetchJourneyInfoGuide().then(setJourneyGuideInfo)
  }, [])
  const spinner = (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
  return (
    <>
      <section id="excellent-guide">
        <div className="td-mt-25">&nbsp;</div>

        <div className="container">
          <p className="excellent-guide-title ">優秀導遊</p>
          <div className="row td-mt-25">
            {JourneyGuideInfo ? (
              <FirstCard JourneyGuideInfo={JourneyGuideInfo} />
            ) : (
              <div>{spinner}</div>
            )}
            <div className="col-md-6 col-12  text-center d-flex flex-column  align-items-center justify-content-lg-between journey-guide-smallcard">
              {JourneyGuideInfo ? (
                <ExcellentGuideCard JourneyGuideInfo={JourneyGuideInfo} />
              ) : (
                <div>{spinner}</div>
              )}
            </div>
            <div className="d-flex justify-content-center td-mb-25 ">
              {' '}
              <Link to="/Guild" className="btn btn-guide-all text-center ">
                全部導遊
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeExcellentGuide
