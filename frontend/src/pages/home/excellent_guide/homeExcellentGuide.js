import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import API from '../../../api'
import ExcellentGuideCard from './ExcellentGuideCard'

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
            <div className="col-md-6 col-12 text-center d-flex justify-content-md-center ">
              <div className="card">
                <div className="card-body">
                  <div className=" d-flex justify-content-center position-relative">
                    <img
                      src="images/data/水璉部落/導遊/導遊7.jpg"
                      className="card-img-top guideImgBig"
                      alt="..."
                    />
                    <div>
                      <p className="text-right smalltag">水璉部落</p>
                    </div>
                  </div>
                  <h5 className="card-title">瓦丹</h5>
                  <i className="fas fa-star mt-2"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <h6>一日山林野外求生</h6>
                  <p className="card-text mt-2">
                    擁抱土地的阿美獵人生活
                    阿美族語中的水璉部落，寫作Ciwidian知維地岸，是「此地多蛭」的意思。聽起來，以為水璉是個荒蕪之地，然而，這裡卻是和平閒適的小盆地，在山海的包圍下，從牧牛平原到高深峽谷，從溪流沿岸到動人沙灘，都展現出水璉之美，在靜謐中，帶有無限生命力。
                  </p>
                  <a
                    href="/page/guild/guild-intro.html"
                    className="btn td-btn-large-o td-mt-50"
                  >
                    預約
                  </a>
                  <div id="coustomer-review">
                    <h5 className="coustomer-review">旅客評價</h5>
                    <div className="link-left"></div>
                    <div className="link-right"></div>
                  </div>
                  <div className="review-area">
                    <div className="card">
                      <div className="row">
                        <div className="col-lg-4 col-md-12 d-flex justify-content-lg-end align-items-lg-center justify-content-center align-items-md-center guide-firstcomment">
                          <img
                            src="/images/data/旅客圖片/male3-70.jpg"
                            className="card-img-top "
                            alt="..."
                          />
                        </div>
                        <div className="col-lg-8 col-md-12 d-flex justify-content-start align-items-center text-left coustomer-name">
                          <div className="card-body">
                            <h5 className="card-title">Sara</h5>
                            <i className="fas fa-star mt-2 small-star"></i>
                            <i className="fas fa-star small-star"></i>
                            <i className="fas fa-star small-star"></i>
                            <i className="fas fa-star small-star"></i>
                            <i className="fas fa-star small-star"></i>
                          </div>
                        </div>
                        <div className="col-12">
                          <p className="card-text text-left">
                            導遊有夠帥，專業解說，貼心服務
                            ，有機會會再次購買服務。
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="row">
                        <div className="col-lg-4 col-md-12 d-flex justify-content-lg-end align-items-lg-center justify-content-center align-items-md-center">
                          <img
                            src="images/data/旅客圖片/male3-70.jpg"
                            className="card-img-top "
                            alt="..."
                          />
                        </div>
                        <div className="col-lg-8 col-md-12 d-flex justify-content-start align-items-center text-left coustomer-name">
                          <div className="card-body">
                            <h5 className="card-title">Sara</h5>
                            <i className="fas fa-star mt-2 small-star"></i>
                            <i className="fas fa-star small-star"></i>
                            <i className="fas fa-star small-star"></i>
                            <i className="fas fa-star small-star"></i>
                            <i className="fas fa-star small-star"></i>
                          </div>
                        </div>
                        <div className="col-12">
                          <p className="card-text text-left">
                            導遊有夠帥，專業解說，貼心服務
                            ，有機會會再次購買服務。
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
