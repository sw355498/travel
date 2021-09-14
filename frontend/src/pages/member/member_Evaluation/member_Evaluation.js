import React from 'react'

function member_review() {
  return (
    <>
       <div class="member-background" >
          <div class="container ">
            
            <div class="parent">
            <div ><nav class="left-member">
              <img class="nav-member-avatar" src="/travel/img/avatar.png" alt="avatar" />
              <ul class="container list nav-member-size18">
                <li>黃凱莉</li>
                <li>初階會員</li>
                <li>您的點數:10000點</li>
              </ul>
            </nav>
            <nav class="left-member2">
              <ul class="list list1 nav-member2-size18">
                <li><a href="member-information.html">基本資料設定</a></li>
                
                <li><a href="member-order.html">訂單管理</a></li>
                <li><a href="member-hope-order.html">願望清單</a></li>
                <li class="list-color">我的評價</li>
              </ul>
            </nav></div> 
            
            <div class="container">
              <div class="main-article">
                <div class="box">
                  <div class="box-text ">最新日期</div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-filter-left box-icon" viewBox="0 0 16 16">
                    <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                  </svg>
                </div>
                
                <article class="main-article-article">
                  <img
                    class="nav-article-section-avatar"
                    src="/travel/img/avatar.png"
                    alt="avatar"
                  />
                  <div class="nav-article-section-name">Candy</div>
                  <br /><div class="nav-article-section-star1">  <i class="fas fa-star small-star "></i><i class="fas fa-star small-star "></i><i class="fas fa-star small-star "></i><i class="fas fa-star small-star "></i><i class="fas fa-star small-star "></i>  </div><br />
                  <div class="nav-article-section-text">
                    獨木舟好好玩，謝謝C大帶我們去玩。
                  </div>
                  <br />
                  <img
                    class="nav-article-section-image"
                    src="/travel/img/會員上傳照片.jpg"
                    alt=""
                  />
                  <div class="main-article-article2">
                    <img
                      class="nav-article-section-avatar"
                      src="/travel/img/avatar.png"
                      alt="avatar" 
                    />
                    <div class="nav-article-section-name">Candy</div>
                    <br /><div class="nav-article-section-star1">  <i class="fas fa-star small-star "></i><i class="fas fa-star small-star "></i><i class="fas fa-star small-star "></i><i class="fas fa-star small-star "></i><i class="fas fa-star small-star "></i>  </div><br />
                    <div class="nav-article-section-text">
                      獨木舟好好玩，謝謝C大帶我們去玩。
                    </div>
                    <br />
                    <img
                      class="nav-article-section-image"
                      src="/travel/img/會員上傳照片.jpg"
                      alt=""
                    />
                    <div class=" flex">
                      <div class="item item1"><a href="#">${'<'}</a></div>
                      <div class="item item2"><a href="#">1</a></div>
                      <div class="item"><a href="#">2</a></div>
                      <div class="item item3"><a href="#">${'>'}</a></div>
                    </div>
                  </div>
                </article>

              </div>
          
          </div>
          
          </div>
        </div>
  </div>
    </>
  )
}

export default member_review
