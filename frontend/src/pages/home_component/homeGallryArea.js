import React from 'react'
import tribe1 from '../../data/首頁部落圖/新社稻草人.jpg'
import tribe2 from '../../data/首頁部落圖/奇美部落大圖4.png'
import tribe3 from '../../data/首頁部落圖/靜埔遺址.jpg'
import tribe4 from '../../data/首頁部落圖/水璉部落-大圖1.jpg'
import tribe5 from '../../data/首頁部落圖/大圖４.jpg'
import tribe6 from '../../data/首頁部落圖/撒固兒１０.jpg'
import tribe7 from '../../data/首頁部落圖/馬太鞍部落封面.jpg'

function homeGallryArea() {
  return (
    <>
      <section className="gallery-area td-mt-75">
        <div className="container">
          <p>部落行程</p>
          <div id="journey" className="td-mt-25">
            <div
              className="journey-paterungan img-fluid "
              onclick="location.href='/page/jounery/journey.html';"
            >
              <div className="card">
                <div className="imgBx">
                  <a href="/page/jounery/journey.html" title="新社部落">
                    <img src={tribe1} alt="" />
                  </a>
                  <div className="journey-tag">
                    <p>新社部落</p>
                    <div className="journey-tag-price mt-2">TW 330 起</div>
                  </div>
                </div>
                <div className="contentBx">
                  <div className="content">
                    <h3 className="text-center">新社部落</h3>
                    <p className="text-center td-mt-25">
                      以噶瑪蘭族為主要族群的新社部落，夾於太平洋與海岸山脈之間，面積廣泛的梯田在收穫期是一片金黃色的美景，半島梯田上的各種裝置藝術呈現了噶瑪蘭族的工藝技術及美學。與眾不同的飲食習慣、祭儀、工藝技術在族人們的努力下傳承至今，有機會來到東海岸千萬別錯過囉！
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="journey-kiwit img-fluid "
              onclick="location.href='/page/jounery/journey.html';"
            >
              <div className="card">
                <div className="imgBx">
                  <img src={tribe2} alt="奇美部落" />
                  <div className="journey-tag">
                    <p>奇美部落</p>
                    <div className="journey-tag-price mt-2">TW330</div>
                  </div>
                </div>
                <div className="contentBx">
                  <div className="content">
                    <h3 className="text-center">奇美部落</h3>
                    <p className="td-mt-25 text-center">
                      山谷裡隱蔽的現代桃花源 整個奇美部落 是一座活的博物館{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="journey-cawi img-fluid"
              onclick="location.href='/page/jounery/journey.html';"
            >
              <div className="card">
                <div className="imgBx">
                  <img src={tribe3} alt="靜埔遺址" />
                  <div className="journey-tag">
                    <p>靜浦部落</p>
                    <div className="journey-tag-price mt-2">TW330</div>
                  </div>
                </div>
                <div className="contentBx">
                  <div className="content">
                    <h3 className="text-center">靜浦部落</h3>
                    <p className="text-center td-mt-25">
                      出海口的豐富生態留傳統漁獵生活方式，北緯23.5度的北回歸線通過，靜浦，揮灑熱情與熱血的太陽部落{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="journey-ciwidian img-fluid"
              onclick="location.href='/page/jounery/journey.html';"
            >
              <div className="card">
                <div className="imgBx">
                  <img src={tribe4} alt="水璉部落" />
                  <div className="journey-tag">
                    <p>水璉部落</p>
                    <div className="journey-tag-price mt-2">TW330</div>
                  </div>
                </div>
                <div className="contentBx">
                  <div className="content">
                    <h3 className="text-center">水璉部落</h3>
                    <p className="td-mt-25 text-center">
                      淳樸、可愛，在美人山的懷抱之中，悠閒的放牧，與山海共生的耕耘漁獵，在水璉，安居耕獵，閑居遊藝，充沛的生活能量，無限大。{' '}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="journey-tafalong img-fluid"
              onclick="location.href='/page/jounery/journey.html';"
            >
              <div className="card">
                <div className="imgBx">
                  <img src={tribe5} alt="太巴塱部落" />
                  <div className="journey-tag">
                    <p>太巴塱部落</p>
                    <div className="journey-tag-price mt-2">TW330</div>
                  </div>
                </div>
                <div className="contentBx">
                  <div className="content">
                    <h3 className="text-center">太巴塱部落</h3>
                    <p className="text-center td-mt-25">
                      位在光復鄉的太巴塱部落，在阿美族語有螃蟹的意思，因此在部落中處處可見生動的木雕螃蟹圖騰。這裡不僅保留阿美族傳統家屋、部落刀槍、酒皿等文物，還是全臺唯一生產紅糯米的產地，如此珍貴的部落傳統糧食，讓太巴塱部落成立紅糯米文化館、舉辦紅糯米文化祭，給旅客體驗祭典的熱鬧，以及品嘗部落風味料理。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="journey-sakur img-fluid"
              onclick="location.href='/page/jounery/journey.html';"
            >
              <div className="card">
                <div className="imgBx">
                  <img src={tribe6} alt="撒固兒部落" />
                  <div className="journey-tag">
                    <p>撒固兒部落</p>
                    <div className="journey-tag-price mt-2">TW330</div>
                  </div>
                </div>
                <div className="contentBx">
                  <div className="content">
                    <h3 className="text-center">撒固兒部落</h3>
                    <p className="text-center td-mt-25">
                      撒固兒部落位於花蓮市西北方、靠近美崙溪上游水源地的砂婆礑山腳。1878年「加禮宛戰役」失利後，族人遷徙至此，每年火神祭主要是在追思當年逃避清兵滅族的危機。部落文化祭祀廣場有八座石碑，各代表人與神。
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="journey-vataan img-fluid"
              onclick="location.href='/page/jounery/journey.html';"
            >
              <img src={tribe7} alt="馬太鞍部落" />
            </div>
            <div
              className="journey-vataan img-fluid"
              onclick="location.href='/page/jounery/journey.html';"
            >
              <div className="card">
                <div className="imgBx">
                  <img src={tribe7} alt="馬太鞍部落" />
                  <div className="journey-tag">
                    <p>馬太鞍部落</p>
                    <div className="journey-tag-price mt-2">TW330</div>
                  </div>
                </div>
                <div className="contentBx">
                  <div className="content">
                    <h3 className="text-center">馬太鞍部落</h3>
                    <p className="text-center td-mt-25">
                      馬太鞍人自傲為古老的阿美族大部落，營養豐富的樹豆是馬太鞍族人的主要糧食之一，這種樹的豆莢成熟後採下來剝開，裡面的豆子像紅豆，但是顏色則有紅、棕、黃、黑、花等色，可保持多年而不易壞，經過煮熟的fata’an樹豆其味道更是美味獨特。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default homeGallryArea
