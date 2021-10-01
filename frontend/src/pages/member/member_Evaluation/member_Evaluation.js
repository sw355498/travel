import React from 'react'

function Member_Evaluation() {
  return (
    
       <div className="member-background" >
          <div className="container ">
            
            <div classNameName="parent">
            <div >
            <nav className="left-member2">
              <ul className="list list1 nav-member2-size18">
                <li><a href="member-information.html">基本資料設定</a></li>
                
                <li><a href="member-order.html">訂單管理</a></li>
                <li><a href="member-hope-order.html">願望清單</a></li>
                <li className="list-color">我的評價</li>
              </ul>
            </nav></div> 
            
            <div className="container">
              <div className="main-article">
                <div className="box">
                  <div className="box-text ">最新日期</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-filter-left box-icon" viewBox="0 0 16 16">
                    <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                  </svg>
                </div>
                
                <article className="main-article-article">
                  <img
                    className="nav-article-section-avatar"
                    src="/travel/img/avatar.png"
                    alt="avatar"
                  />
                  <div className="nav-article-section-name">Candy</div>
                  <br /><div className="nav-article-section-star1">  <i className="fas fa-star small-star "></i><i className="fas fa-star small-star "></i><i className="fas fa-star small-star "></i><i className="fas fa-star small-star "></i><i className="fas fa-star small-star "></i>  </div><br />
                  <div className="nav-article-section-text">
                    獨木舟好好玩，謝謝C大帶我們去玩。
                  </div>
                  <br />
                  <img
                    className="nav-article-section-image"
                    src="/travel/img/會員上傳照片.jpg"
                    alt=""
                  />
                  <div className="main-article-article2">
                    <img
                      className="nav-article-section-avatar"
                      src="/travel/img/avatar.png"
                      alt="avatar" 
                    />
                    <div className="nav-article-section-name">Candy</div>
                    <br /><div className="nav-article-section-star1">  <i className="fas fa-star small-star "></i><i className="fas fa-star small-star "></i><i className="fas fa-star small-star "></i><i className="fas fa-star small-star "></i><i className="fas fa-star small-star "></i>  </div><br />
                    <div className="nav-article-section-text">
                      獨木舟好好玩，謝謝C大帶我們去玩。
                    </div>
                    <br />
                    <img
                      className="nav-article-section-image"
                      src="/travel/img/會員上傳照片.jpg"
                      alt=""
                    />
                    <div className=" flex">
                      <div className="item item1"><a href="#">${'<'}</a></div>
                      <div className="item item2"><a href="#">1</a></div>
                      <div className="item"><a href="#">2</a></div>
                      <div className="item item3"><a href="#">${'>'}</a></div>
                    </div>
                  </div>
                </article>

              </div>
          
          </div>
          
          </div>
        </div>
  </div>

  )
}

export default Member_Evaluation
