import React from 'react'

function   Member_Order_Detail
() {
  return (
      
  
    <div class="member-background">
      <div class="container">
        <div class="parent">
          <div>
            
            <nav class="left-member2">
              <ul class="list list1 nav-member2-size18">
                <li ><a href="member-information.html"></a>基本資料設定</li>
                
                <li class="list-color">訂單管理</li>          
                <li ><a href="member-hope-order.html">願望清單</a></li>
                <li><a href="member-Evaluation.html">我的評價</a></li>
              </ul>
            </nav>
          </div>

          <div class="container">
            <div class="main-article">
              <div class="box-order-number">
                <p class="order-number">訂單編號#19KK052055619</p>
                <p>訂購人姓名：黃凱莉</p>
                <p>人數： 2人</p>
                <p>國家/地區：台灣</p>
                <p>電子信箱：lily@gmail.com</p>
                <p>連絡電話：0930123456</p>
                <p>訂購日期： 2021/6/25</p>
              </div>
              <div class="main-order-box">
                <div class="main-article-text">訂單管理${'>'}訂單詳細資訊</div>
                <img
                  class="nav-article-section-image"
                  src=" /img/訂單管理照片.jpg"
                  alt="avatar"
                />
                <div class="flexbox">
                  <div class="flexbox-text1">付款詳情</div>

                  <li class="flexbox-text2">付款方式</li>
                  <li class="flexbox-text3">實際付款金額</li>
                  <li class="flexbox-text4">此訂單獲得點數</li>
                  <li class="flex1box-text1">付款方式</li>
                  <li class="flex1box-text2">TWD 1,799</li>
                  <li class="flex1box-text3">
                    <img
                      class="flex1box-image"
                      src=" /img/金錢圖案.jpg"
                      alt="avatar"
                    />1000點
                  </li>
                </div>
              </div>
              <div class="box-main">
                <div class="journey-info-name1 mt-25">
                  <p>方案詳情</p>
                </div>
                <div class="journey-info-name1 mt-25">
                  <p>走進太陽的部落-靜浦部落情</p>
                </div>
                <div class="journey-info-smalltitle">
                  <p>一&nbsp;行程資訊&nbsp;一</p>
                </div>
                <div class="d-flex flex-row bd-highlight td-mt-25">
                  <div class="p-2 bd-highlight text-center">
                    <i class="fas fa-map-marker-alt icon"></i>
                  </div>
                  <div class="p-2 bd-highlight">
                    <div class="text-title-size18 mt-15">
                      台灣&nbsp;|&nbsp;靜浦部落
                    </div>
                  </div>
                </div>

                <div class="d-flex flex-row bd-highlight td-mt-15">
                  <div class="p-2 bd-highlight text-center">
                    <i class="far fa-clock icon"></i>
                  </div>
                  <div class="p-2 bd-highlight">
                    <div class="text-title-size18 mt-15">
                      行程長度：約
                      2.5小時（含著裝及解說時間，不含盥洗及接駁時間）
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-2">
                    <div class="d-flex flex-row bd-highlight td-mt-15">
                      <div class="p-2 bd-highlight text-center">
                        <i class="fas fa-globe"></i>
                      </div>
                      <div class="p-2 bd-highlight">
                        <div class="journey-info-icon-text text-title-size18">
                          中文導覽
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="journey-info-smalltitle td-mt-50">
                  <p>一&nbsp;行程簡介&nbsp;一</p>
                </div>
                <div class="journey-info-smalltitle td-mt-25">
                  <p>半日漁獵生活體驗:</p>
                </div>
                <div class="journey-info-smalltitle td-mt-25">
                  <p>
                    踏上膠筏，划向秀姑巒溪→岸邊找尋浪花蟹X八卦網捕魚體驗→部落神射手(射箭體驗)
                  </p>
                </div>
                <div class="journey-info-name mt-40">
                  <p>商品說明</p>
                </div>

                <div class="journey-info-smalltitle td-mt-25">
                  <p>一&nbsp;行程資訊&nbsp;一</p>
                </div>
                <div class="journey-info-smalltitle td-mt-25">
                  <p>&nbsp;&nbsp;&nbsp;&nbsp;上午場-09：00 / 下午場-14：00</p>
                  <p>
                    <li class="journey-info-smalltitle-list">
                      花蓮靜浦部落集合
                    </li>
                  </p>
                  <br />
                  <p>&nbsp;&nbsp;開啟靜浦部落的半日漁獵生活體驗：</p>
                  <p>
                    <li class="journey-info-smalltitle-list">
                      踏上膠筏，划向秀姑巒溪(約50分鐘)
                    </li>
                  </p>
                  <p>
                    <li class="journey-info-smalltitle-list">
                      岸邊找尋浪花蟹X八卦網捕魚體驗(約60分鐘)
                    </li>
                  </p>
                  <p>
                    <li class="journey-info-smalltitle-list">
                      部落神射手－射箭體驗(約40分鐘)
                    </li>
                  </p>
                </div>
              </div>
              <button
                class="btn btn-secondary nav-article-section-delete"
                type="button"
                aria-label=""
              >
                取消訂單
              </button>
            </div>
          </div>
          <div class="container">
            <div class="main-order-evaluation">訂單評價</div>
<div  class="editor">
            <script  src="https://cdn.ckeditor.com/4.7.3/standard/ckeditor.js"></script>
            <textarea name="editor1"></textarea>
            <script>CKEDITOR.replace("editor1");CKEDITOR.instances["editor1"].getData();</script></div>



          </div>
        </div>
      </div>
    </div>
)
}
export default Member_Order_Detail