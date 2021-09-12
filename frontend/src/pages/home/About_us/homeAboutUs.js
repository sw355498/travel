import React from 'react'
function homeAboutUs() {
  return (
    <>
      <section>
        <div class="container home-aboutus ">
          <div class="row">
            <div className="col-12">
              {' '}
              <img
                src="images/img/aboutus-img.png"
                alt=""
                className="aboutus-img "
              />
            </div>
            <div class="col-lg-6 col-md-3 "></div>
            <div class="col-lg-6 col-md-7">
              <p>
                原住民部落如能運用當地傳統工藝、文化及生活習俗配合豐富生態資源，導入文化體驗或深度文化旅行、生態旅遊將可帶動當地經濟，進而提升就業率。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default homeAboutUs
