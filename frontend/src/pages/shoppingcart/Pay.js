// 元件引入
import PayPeople from './component/PayPeople'
import PayMember from './component/PayMember'
import PayConnection from './component/PayConnection'
import PaymentProfile from './component/PaymentProfile'
import PayContent from './component/PayContent'

function Pay() {
  return (
    <>
      {/* 內容  */}
      <div class="container-lg td-content">
        {/* 小人走路流程圖 */}
        <PayPeople />

        {/* 訂購人資訊 */}
        <PayMember />

        {/* 旅客資料 */}
        <PayConnection />

        {/* 付款資訊 */}
        <PaymentProfile />

        {/* 訂單明細 */}
        <PayContent />
      </div>
    </>
  )
}

export default Pay
