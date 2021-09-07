// css引入
import '../../../style/spacing.css'
import '../../../style/shoppingcart-cart-list.css'
import '../../../style/fons.css'

// 圖片引入
import people from '../../../img/走路小人.png'
function People() {
  return (
    <>
      {/* 小人走路流程圖 */}
      <div className="d-flex justify-content-center">
        <div className="td-mt-75">
          <div className="d-flex justify-content-start ">
            <img className="people-img" src={people} alt="走路小人" />
          </div>
          <div className="d-flex justify-content-between">
            <div className="process-bg">
              <p>1</p>
            </div>
            <div className="process-dotted"></div>
            <div className="process-bg">
              <p>2</p>
            </div>
            <div className="process-dotted"></div>
            <div className="process-bg">
              <p>3</p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="process-text">購物車</div>
            <div className="process-text-data">
              <div className="process-text">填寫資料</div>
              <div className="process-text">與付款方式</div>
            </div>
            <div className="process-text process-text-pay">訂購完成</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default People