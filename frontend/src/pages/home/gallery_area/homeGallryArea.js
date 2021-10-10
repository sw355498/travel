import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import qs from 'qs'

function HomeGallryArea(props) {
  const history = useHistory()
  const { tribes } = props
  console.log(tribes)
  const handleClick = (e) => {
    const value = tribes[1].tribe
    const query = qs.stringify({ tribes: value })
    history.push(`/journey?${query}`)
  }
  const handleClick2 = (e) => {
    const value = tribes[4].tribe
    const query = qs.stringify({ tribes: value })
    history.push(`/journey?${query}`)
  }
  const handleClick3 = (e) => {
    const value = tribes[0].tribe
    const query = qs.stringify({ tribes: value })
    history.push(`/journey?${query}`)
  }
  const handleClick4 = (e) => {
    const value = tribes[3].tribe
    const query = qs.stringify({ tribes: value })
    history.push(`/journey?${query}`)
  }
  const handleClick5 = (e) => {
    const value = tribes[2].tribe
    const query = qs.stringify({ tribes: value })
    history.push(`/journey?${query}`)
  }
  const handleClick6 = (e) => {
    const value = tribes[6].tribe
    const query = qs.stringify({ tribes: value })
    history.push(`/journey?${query}`)
  }
  const handleClick7 = (e) => {
    const value = tribes[5].tribe
    const query = qs.stringify({ tribes: value })
    history.push(`/journey?${query}`)
  }
  return (
    <>
      <section className="gallery-area td-mt-75 text-decoration-none">
        <div className="container">
          <p>部落行程</p>
          <div id="journey" className="td-mt-25">
            <div
              className="journey-paterungan img-fluid "
              onClick={handleClick}
            >
              <div className="card">
                <div className="imgBx">
                  <img
                    src="/images/data/新社部落/15_Kavalan_噶瑪蘭族_Aboriginal_Tribe_Taiwan.jpg"
                    alt=""
                  />
                  <div className="journey-tag">
                    <p>新社部落</p>
                    <div className="journey-tag-price mt-2">TW 1,200 起</div>
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

            <div className="journey-kiwit img-fluid " onClick={handleClick2}>
              <div className="card">
                <div className="imgBx">
                  <img
                    src="/images/data/首頁部落圖/奇美部落大圖4.png"
                    alt="奇美部落"
                  />
                  <div className="journey-tag">
                    <p>奇美部落</p>
                    <div className="journey-tag-price mt-2">TW 900 起</div>
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
            <div className="journey-cawi img-fluid" onClick={handleClick3}>
              <Link
                to={`/journey/?tribes[]=靜浦部落&pageNum=1`}
                title="靜浦部落"
              >
                <div className="card">
                  <div className="imgBx">
                    <img
                      src="images/data/靜浦部落/大圖/靜浦-阿美族豐年祭.jpg"
                      alt="靜埔遺址"
                    />
                    <div className="journey-tag">
                      <p>靜浦部落</p>
                      <div className="journey-tag-price mt-2">TW 1,000 起</div>
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
              </Link>
            </div>
            <div className="journey-ciwidian img-fluid" onClick={handleClick4}>
              <Link
                to={`/journey/?tribes[]=水璉部落&pageNum=1`}
                title="水璉部落"
                className=""
              >
                <div className="card">
                  <div className="imgBx">
                    <img
                      src="images/data/首頁部落圖/水璉部落-大圖1.jpg"
                      alt="水璉部落"
                    />
                    <div className="journey-tag">
                      <p>水璉部落</p>
                      <div className="journey-tag-price mt-2">TW 1,200 起</div>
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
              </Link>
            </div>
            <div className="journey-tafalong img-fluid" onClick={handleClick5}>
              <Link
                to={`/journey/?tribes[]=太巴塱部落&pageNum=1`}
                title="太巴塱部落"
              >
                <div className="card">
                  <div className="imgBx">
                    <img
                      src="images/data/首頁部落圖/大圖４.jpg"
                      alt="太巴塱部落"
                    />
                    <div className="journey-tag">
                      <p>太巴塱部落</p>
                      <div className="journey-tag-price mt-2">TW 850 起</div>
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
              </Link>
            </div>
            <div className="journey-sakur img-fluid" onClick={handleClick6}>
              <Link
                to={`/journey/?tribes[]=撒固兒部落&pageNum=1`}
                title="撒固兒部落"
              >
                <div className="card">
                  <div className="imgBx">
                    <img
                      src="images/data/首頁部落圖/撒固兒１０.jpg"
                      alt="撒固兒部落"
                    />
                    <div className="journey-tag">
                      <p>撒固兒部落</p>
                      <div className="journey-tag-price mt-2">TW 800 起</div>
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
              </Link>
            </div>
            <div className="journey-vataan img-fluid" onClick={handleClick7}>
              <img
                src="images/data/首頁部落圖/馬太鞍部落封面.jpg"
                alt="馬太鞍部落"
              />
            </div>
            <div className="journey-vataan img-fluid">
              <Link
                to={`/journey/?tribes[]=馬太鞍部落&pageNum=1`}
                title="馬太鞍部落"
              >
                <div className="card">
                  <div className="imgBx">
                    <img
                      src="images/data/首頁部落圖/馬太鞍部落封面.jpg"
                      alt="馬太鞍部落"
                    />
                    <div className="journey-tag">
                      <p>馬太鞍部落</p>
                      <div className="journey-tag-price mt-2">TW 888 起</div>
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
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeGallryArea
