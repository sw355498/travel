// 元件引入
import PayPeople from './component/PayPeople'
import PayMember from './component/PayMember'
import PayConnection from './component/PayConnection'
import PaymentProfile from './component/PaymentProfile'
import PayContent from './component/PayContent'
import ScrollToTop from 'react-scroll-to-top'

// css引入
import '../../style/spacing.css'
import '../../style/button.css'
import '../../style/fons.css'
import '../../style/shoppingcart-payment.css'
import '../../style/shoopcart-process.css'
import 'react-credit-cards/es/styles-compiled.css'

function Pay(props) {
  return (
    <>
      {/* 內容  */}
      <div class="container-lg td-content">
        {/* 小人走路流程圖 */}
        <PayPeople />

        {/* 訂購人資訊 */}
        <PayMember />

        {/* 旅客資料 */}
        {/* <PayConnection /> */}

        {/* 付款資訊 */}
        <PaymentProfile />

        {/* 訂單明細 */}
        <PayContent />
        <ScrollToTop smooth />
      </div>
    </>
  )
}

export default Pay
