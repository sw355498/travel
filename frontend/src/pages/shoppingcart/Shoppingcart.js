// 元件引入
import People from './component/People'
import CartList from './component/CartList'
import CartRecommend from './component/CartRecommend'
import ScrollToTop from 'react-scroll-to-top'

// css引入
import '../../style/spacing.css'
import '../../style/button.css'
import '../../style/shoppingcart-cart-list.css'
import '../../style/fons.css'

function ShoppingcartCartList(props) {
  return (
    <>
      <div className="container">
        {/* 小人走路流程圖 */}
        <People />

        {/* 購物車清單內容 */}
        <div className="td-mt-75">
          <CartList />
        </div>

        {/* 其它旅客還購買 */}
        <CartRecommend />
        <ScrollToTop smooth />
      </div>
    </>
  )
}

export default ShoppingcartCartList
