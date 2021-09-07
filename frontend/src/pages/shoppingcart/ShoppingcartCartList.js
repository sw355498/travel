// 元件引入
import Header from '../../component/Header'
import Footer from '../../component/Footer'
import People from './component/People'
import CartList from './component/CartList'
import CartRecommend from './component/CartRecommend'

// css引入
import '../../style/spacing.css'
import '../../style/button.css'
import '../../style/checkbox.css'
import '../../style/shoppingcart-cart-list.css'
import '../../style/fons.css'



function ShoppingcartCartList() {
  return (
    <>
      {/* 頁首 */}
      <Header />


      {/* 內容 */}
      <div className="container td-content">

        {/* 小人走路流程圖 */}
        <People />

        {/* 購物車清單內容 */}
        <div className="td-mt-75">
          <CartList />
        </div>

        {/* 其旅客還購買 */}
        
        <CartRecommend />
      </div>

      <Footer />
    </>
  )
}

export default ShoppingcartCartList
